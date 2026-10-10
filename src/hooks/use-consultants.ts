/**
 * useConsultants — live consultant profiles from the Acooya platform,
 * merged ahead of the staged placeholder roles.
 *
 * THE MARKETING SITE'S FIRST API CALL. Before this, every page rendered
 * entirely from src/data/mockData.ts. The pattern set here is the one the
 * next dynamic surface should follow — agents are the obvious second, since
 * the platform's agents table already has the same published flag that
 * consultant_profiles uses.
 *
 * SOURCE. GET {VITE_PLATFORM_API_URL}/api/public/consultants, a server-side
 * Next route on the platform that holds the service key and calls
 * list_public_consultant_profiles(). Only consultants who have ticked BOTH
 * "publish my profile" AND "list publicly for wider reach" appear — the
 * consent gate lives in the database function's WHERE clause, not here.
 *
 * FAILURE IS QUIET, AND THAT IS A DELIBERATE TRADE. A failed or slow fetch
 * leaves the placeholders rendering alone, so the page never looks broken and
 * nothing is fabricated. The cost is that a broken API is INVISIBLE from the
 * page — it looks identical to "no consultant has consented yet", which is a
 * legitimate state. If the marketplace ever looks emptier than expected, check
 * the console and curl the endpoint before assuming nobody has opted in.
 *
 * PLACEHOLDERS ARE NOT A FALLBACK. They render always, real consultants or
 * not. They are the staged recruiting roles (decision 25 Aug 2026), badged
 * "Joining Soon" with a waitlist CTA, and they are not people — no invented
 * names, and the card never shows a rating or project count for anyone.
 *
 * PROFILE LINKS (10 Oct 2026). Each live consultant has a public profile page
 * on the PLATFORM at /consultants/<slug>, server-rendered so link previews
 * work. Cards link straight to it on the platform host — deliberately not a
 * www rewrite (Design Decisions Log, 10 Oct, "Step 4 decision"). Staged roles
 * have no page and get an empty profileUrl.
 *
 * HAND-MIRRORED ON THE PLATFORM. AVAILABILITY_LABEL and experienceLabel below
 * are copied in acooya-platform src/lib/consultant-display.ts so the profile
 * page says exactly what the card says. Change both together.
 */

import { useEffect, useState } from "react";
import { humanConsultants } from "../data/mockData";

/** The shape list_public_consultant_profiles() returns, as of Migration 0039. */
interface PublicConsultantProfile {
  /** The public profile URL segment. Null only for a consultant whose name
   *  produced no slug at listing time — no page, so no link. */
  slug: string | null;
  full_name: string | null;
  headline: string | null;
  bio: string | null;
  linkedin_url: string | null;
  practice_areas: string[];
  sector_experience: string[];
  qualifications: string[];
  availability_status: string;
  availability_note: string | null;
  professional_since: number | null;
  consulting_since: number | null;
  avatar_url: string | null;
}

/** The card shape both marketplace pages already render. */
export interface ConsultantCard {
  id: string;
  name: string;
  title: string;
  expertise: string[];
  experience: string;
  availability: string;
  /** Sectors delivered in. The strongest "have you done my problem" signal. */
  sectors: string[];
  /** Display link only, unverified — but the client's own route to checking
   *  the person is real. It is the pre-engagement credibility signal that
   *  replaces the platform history a new marketplace does not have. */
  linkedinUrl: string;
  image: string;
  /** Absolute URL of the consultant's public profile page on the platform,
   *  or "" for a staged role (no page). Render a link only when non-empty. */
  profileUrl: string;
  /** True for a real consultant from the platform, false for a staged role. */
  isLive: boolean;
}

const API_BASE =
  import.meta.env.VITE_PLATFORM_API_URL ?? "https://app.acooyaconsulting.com";

/** Platform availability_status -> the badge text the card already styles. */
const AVAILABILITY_LABEL: Record<string, string> = {
  available: "Available Now",
  limited: "Limited Capacity",
  unavailable: "Not Taking Work",
};

/**
 * "18 years experience · 10 in consulting" from two start years.
 *
 * Both are optional and independently so, which gives four cases. A
 * consulting-only value must NEVER render as plain "N years experience": it
 * would understate someone with twenty years behind them and read as total
 * experience when it is not. It is explicitly qualified instead.
 */
function experienceLabel(
  professionalSince: number | null,
  consultingSince: number | null
): string {
  const thisYear = new Date().getFullYear();
  const total = professionalSince === null ? null : thisYear - professionalSince;
  const consulting = consultingSince === null ? null : thisYear - consultingSince;

  if (total !== null && consulting !== null) {
    return `${String(total)} years experience · ${String(consulting)} in consulting`;
  }
  if (total !== null) return `${String(total)} years experience`;
  if (consulting !== null) return `${String(consulting)} years in consulting`;
  return "";
}

/** The platform profile page for a slug, or "" when there is no slug. */
function profileUrlFor(slug: string | null): string {
  return slug ? `${API_BASE}/consultants/${encodeURIComponent(slug)}` : "";
}

function toCard(p: PublicConsultantProfile, index: number): ConsultantCard {
  return {
    // The slug is unique and immutable once set (Migration 0039 trigger), so
    // it is a stable key. Positional fallback only for the no-slug edge case.
    id: p.slug ? `live-${p.slug}` : `live-${String(index)}`,
    name: p.full_name ?? "Acooya consultant",
    title: p.headline ?? "",
    expertise: p.practice_areas,
    experience: experienceLabel(p.professional_since, p.consulting_since),
    availability: AVAILABILITY_LABEL[p.availability_status] ?? "Available Now",
    sectors: p.sector_experience,
    linkedinUrl: p.linkedin_url ?? "",
    image: p.avatar_url ?? "",
    profileUrl: profileUrlFor(p.slug),
    isLive: true,
  };
}

/** The staged roles, shaped like cards. Rendered always, fetch or no fetch. */
const staged: ConsultantCard[] = humanConsultants.map((c) => ({
  id: c.id,
  name: c.name,
  title: c.title,
  expertise: c.expertise,
  experience: c.experience,
  availability: c.availability,
  // Staged roles have neither: they are roles, not people. The absence of a
  // LinkedIn icon is itself an honest signal on the card.
  sectors: [],
  linkedinUrl: "",
  image: c.image,
  // No page exists for a role, so no profile link.
  profileUrl: "",
  isLive: false,
}));

export function useConsultants(): ConsultantCard[] {
  const [live, setLive] = useState<ConsultantCard[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function load(): Promise<void> {
      try {
        const res = await fetch(`${API_BASE}/api/public/consultants`);
        if (!res.ok) throw new Error(`HTTP ${String(res.status)}`);
        const data = (await res.json()) as { consultants?: PublicConsultantProfile[] };
        if (cancelled) return;
        setLive((data.consultants ?? []).map(toCard));
      } catch (error) {
        // Quiet by design — see the docstring. Logged so it is findable.
        console.error("[useConsultants] fetch failed:", error);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  // Real consultants lead. Staged roles follow, never interleaved by
  // availability — sorting on availability would rank a placeholder above a
  // real consultant who set themselves to limited capacity.
  return [...live, ...staged];
}