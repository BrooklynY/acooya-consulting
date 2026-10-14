import { useCallback } from 'react';
import type { MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Where the visitor came from, per history entry.
 *
 * ScrollManager records the previous page on every forward navigation.
 * useBackTo uses it so an in-page "Back to ..." control behaves like the
 * browser's Back (restoring the scroll position) when the visitor really
 * came from that page, and like an ordinary link otherwise.
 */

const PREFIX = 'acooya-prev:';

export function savePreviousPath(key: string, path: string): void {
  try {
    window.sessionStorage.setItem(PREFIX + key, path);
  } catch {
    // Storage blocked: back controls fall back to ordinary navigation.
  }
}

function previousPathFor(key: string): string | null {
  try {
    return window.sessionStorage.getItem(PREFIX + key);
  } catch {
    return null;
  }
}

/**
 * Returns backTo(path, alsoMatches?, event?).
 * Buttons call it without an event. A Link passes its click event, so an
 * unmatched click is left to the Link itself, and modified clicks (open
 * in a new tab) are never intercepted.
 */
export function useBackTo() {
  const location = useLocation();
  const navigate = useNavigate();
  return useCallback(
    (path: string, alsoMatches: string[] = [], event?: MouseEvent<HTMLElement>) => {
      if (event && (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)) return;
      const prev = previousPathFor(location.key);
      if (prev !== null && (prev === path || alsoMatches.includes(prev))) {
        event?.preventDefault();
        navigate(-1);
        return;
      }
      if (!event) navigate(path);
    },
    [location.key, navigate],
  );
}
