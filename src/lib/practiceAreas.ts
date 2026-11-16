/**
 * The four practice areas with their colours (decided 1 Nov 2026):
 * Operating Model Atlas blue, Delivery Enablement charcoal, Insight &
 * Reporting Nova orange, AI Transformation Aria pink. `tint` is the pale
 * ground, `ink` the text and icon colour that passes contrast on it. The ids
 * are the consultingServices ids and the platform intake's area slugs.
 */
export const PRACTICE_AREAS = [
  { id: 'operating-model', title: 'Operating Model', tint: '#E3F0FA', ink: '#0F4C75', dot: '#3498DB', blurb: 'Target operating model design, organisational redesign, capability mapping.' },
  { id: 'delivery-enablement', title: 'Delivery Enablement', tint: '#EDEDED', ink: '#1A1A1B', dot: '#555555', blurb: 'Programme structuring, change management, delivery acceleration.' },
  { id: 'insight-reporting', title: 'Insight & Reporting', tint: '#FDF0DC', ink: '#7A4A00', dot: '#F39C12', blurb: 'Decision-grade analytics, executive reporting, business cases.' },
  { id: 'ai-transformation', title: 'AI Transformation', tint: '#FCE4EC', ink: '#880E4F', dot: '#E91E63', blurb: 'Assess, design, specify, configure and evaluate AI on the platform you already use.' },
] as const;

export type PracticeAreaId = (typeof PRACTICE_AREAS)[number]['id'];
