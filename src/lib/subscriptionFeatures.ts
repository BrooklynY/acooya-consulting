/**
 * Subscription plan feature lists for the public pricing table.
 *
 * MOVED HERE 25 Aug 2026 from contexts/AuthContext.tsx, which was deleted
 * along with the marketing site's mock auth. This data was the only thing in
 * that context a ROUTED page actually used — PricingPage renders these lists —
 * so it moved rather than went. Everything else there served four unrouted
 * mock pages and a Supabase project that no longer exists.
 *
 * Content carried across VERBATIM. Two known discrepancies were deliberately
 * NOT fixed here, because a dead-code removal and a copy edit should not share
 * a diff — both are logged as follow-ups:
 *
 *   1. The 'starter' key renders copy reading "Everything in GROWTH, plus:" on
 *      the professional tier. Pricing v3.1 names the tiers Growth /
 *      Professional / Enterprise; the key says starter. Cosmetic today because
 *      the key is never displayed, but it is drift.
 *   2. The starter list promises "14-day free trial — no credit card required".
 *      Per the 4 Aug decision the trial has NO implementation and is honoured
 *      manually at pilot scale, with copy deliberately unchanged. This is the
 *      second live surface carrying it.
 *
 * ALSO NOT CARRIED ACROSS: getSubscriptionPrice(), which returned A$25 / A$42 /
 * A$169 against Pricing v3.1's A$49 / A$149 / A$499. It had no consumers, so
 * the stale figures never reached a visitor. Deleted rather than moved.
 *
 * The authoritative source for pricing is Acooya_Pricing_Model_v3_1.docx.
 * Anything here that contradicts it is a bug in here.
 */

/**
 * The three plan keys. Defined here rather than imported because this module
 * is now their only meaningful consumer: types/auth.ts was deleted with the
 * mock auth on 25 Aug 2026. It had also carried a full domain model —
 * Engagement, Deliverable, Transcript, Notification, WorkspaceResource — for a
 * product that lives in the PRIVATE platform repo, not here. A public
 * marketing site describing the platform's internals in type definitions is a
 * decoy at best.
 *
 * NOTE the key/label drift flagged above: 'starter' is the key, while the copy
 * calls the tier Growth (Pricing v3.1: Growth / Professional / Enterprise).
 */
export type SubscriptionTier = 'starter' | 'professional' | 'enterprise';

const subscriptionFeatures: Record<SubscriptionTier, string[]> = {
  starter: [
    'Up to 3 active engagements',
    'Up to 3 users per organisation',
    '200 AI agent credits per month',
    'Aria (Research) + Nova (Analytics) agents',
    '14-day free trial — no credit card required',
    'Pre-task credit confirmation — no surprises',
    'Standard human consultant access',
    'Secure encrypted workspace',
    'Engagement history — 6 months',
    'Email support — 48-hour response',
    'All resources and frameworks library'
  ],
  professional: [
    'Everything in Growth, plus:',
    'Up to 15 active engagements',
    'Up to 15 users per organisation',
    '1,000 AI agent credits per month',
    'All 4 AI agents (Aria, Atlas, Nova, Zenith)',
    'Zenith orchestration — multi-agent workflows',
    'Priority access to senior human consultants',
    'Engagement history — 2 years',
    'Advanced workspace with team collaboration',
    'Quarterly strategic reviews',
    'Priority support — 24-hour response',
    'Advanced analytics dashboard',
    'Lower overage rate — $0.15 per credit'
  ],
  enterprise: [
    'Everything in Professional, plus:',
    'Unlimited active engagements',
    'Unlimited users per organisation',
    '5,000 AI agent credits per month',
    'Custom AI agent development',
    'Dedicated lead consultant + engagement SLA',
    'Engagement history — unlimited retention',
    'Asia-Pacific data residency (Singapore)',
    'Dedicated Customer Success Manager',
    'On-site workshops and executive briefings',
    'White-glove concierge support',
    'Custom integrations — scoped on request',
    'Lowest overage rate — $0.07 per credit'
  ]
};

export const getSubscriptionFeatures = (tier: SubscriptionTier): string[] => {
  return subscriptionFeatures[tier];
};