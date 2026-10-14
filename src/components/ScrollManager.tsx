import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import { savePreviousPath } from './scroll-history';

/**
 * ScrollManager: page-to-page scroll behaviour for the marketing site.
 *
 * BrowserRouter (the classic router) has no scroll restoration and ignores
 * #hash links, so by default a new page opens at the previous page's scroll
 * depth. This gives the site browser-like behaviour:
 *   - new page, no hash: snap to the top
 *   - new page with #section: land on the section (snap when arriving from
 *     another page, glide when jumping within the same page)
 *   - Back / Forward / reload: restore the position saved for that entry;
 *     with nothing saved, follow the #hash if present, otherwise the top
 *
 * Positions are saved per history entry (location.key) in sessionStorage,
 * so Back still works after a reload. Targets that render late, such as the
 * live consultant feed, are retried for about a second.
 *
 * The offset under the sticky nav comes from scroll-margin-top in
 * globals.css, not from here. 'instant' overrides the global
 * scroll-behavior: smooth for page changes; same-page jumps keep the glide.
 */

const STORAGE_PREFIX = 'acooya-scroll:';
const MAX_FRAMES = 60; // about one second at 60fps
const INSTANT = 'instant' as ScrollBehavior;

// React Router keys the first entry, and any entry made by a plain
// <a href="#..."> click, as "default". Such entries are re-keyed on arrival
// and never saved or restored under that shared key.
const UNKEYED = 'default';

function readSaved(key: string): number | null {
  if (key === UNKEYED) return null;
  try {
    const v = window.sessionStorage.getItem(STORAGE_PREFIX + key);
    return v === null ? null : Number(v);
  } catch {
    return null;
  }
}

function save(key: string, y: number): void {
  if (key === UNKEYED) return;
  try {
    window.sessionStorage.setItem(STORAGE_PREFIX + key, String(Math.round(y)));
  } catch {
    // Storage blocked (private mode or full): Back simply starts at the top.
  }
}

/** Runs attempt once per frame until it returns true or the frames run out. */
function retry(attempt: (last: boolean) => boolean): void {
  let frame = 0;
  const tick = () => {
    const last = frame >= MAX_FRAMES - 1;
    if (attempt(last) || last) return;
    frame += 1;
    window.requestAnimationFrame(tick);
  };
  tick();
}

function hashTarget(hash: string): string {
  try {
    return decodeURIComponent(hash.slice(1));
  } catch {
    return hash.slice(1);
  }
}

export default function ScrollManager(): null {
  const location = useLocation();
  const navType = useNavigationType();
  const navigate = useNavigate();
  const activeKey = useRef(location.key);
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Give unkeyed entries a key of their own so their position can be saved.
  useEffect(() => {
    if (location.key !== UNKEYED) return;
    navigate(
      { pathname: location.pathname, search: location.search, hash: location.hash },
      { replace: true, state: location.state },
    );
  }, [location.key, location.pathname, location.search, location.hash, location.state, navigate]);

  // Save this entry's scroll position as the visitor scrolls.
  useEffect(() => {
    const key = location.key;
    let pending = false;
    const onScroll = () => {
      if (pending) return;
      pending = true;
      window.requestAnimationFrame(() => {
        pending = false;
        if (activeKey.current === key) save(key, window.scrollY);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.key]);

  // Decide where each navigation lands.
  useLayoutEffect(() => {
    if (location.key === UNKEYED) return; // re-keyed above; handled on the next pass
    activeKey.current = location.key;
    if (navType === 'PUSH' && prevPath.current !== null) savePreviousPath(location.key, prevPath.current);
    const samePage = prevPath.current === location.pathname;
    prevPath.current = location.pathname;
    const id = hashTarget(location.hash);

    const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: INSTANT });

    const toSection = (behavior: ScrollBehavior) =>
      retry((last) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior, block: 'start' });
          return true;
        }
        if (last) toTop();
        return false;
      });

    if (navType === 'POP') {
      const saved = readSaved(location.key);
      if (saved !== null) {
        retry((last) => {
          const max = document.documentElement.scrollHeight - window.innerHeight;
          if (max < saved && !last) return false;
          window.scrollTo({ top: saved, left: 0, behavior: INSTANT });
          return true;
        });
        return;
      }
      if (id) {
        toSection(samePage ? 'smooth' : INSTANT);
        return;
      }
      toTop();
      return;
    }

    if (id) {
      toSection(samePage ? 'smooth' : INSTANT);
      return;
    }
    toTop();
  }, [location.key, location.pathname, location.hash, navType]);

  return null;
}