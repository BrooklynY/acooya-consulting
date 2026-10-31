/**
 * The platform intake ("Start a brief", decided 31 Oct 2026) lives at
 * app.acooyaconsulting.com/start. Every brief-type button on this site links
 * there, in the same tab. Deep links pass ids only, never typed text: `area`
 * is a consultingServices id, which the platform accepts as an area slug.
 * Questions, waitlists, resource requests and named-consultant calls are not
 * briefs and stay on /get-started.
 */
export const INTAKE_URL = 'https://app.acooyaconsulting.com/start';

export function intakeUrl(area?: string): string {
  return area ? `${INTAKE_URL}?area=${encodeURIComponent(area)}` : INTAKE_URL;
}
