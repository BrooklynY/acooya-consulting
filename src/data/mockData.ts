// Acooya Consulting - Mock Data
// All text in British English

export const consultingServices = [
  {
    id: 'operating-model',
    title: 'Operating Model',
    shortDescription: 'Transform your organisational structure for maximum efficiency and AI readiness',
    fullDescription: `Our Operating Model practice helps organisations redesign their core business structures to optimise for the digital age. We combine deep industry expertise with AI-augmented analysis to deliver operating models that are agile, scalable, and future-proof.`,
    features: [
      'Enterprise-wide operating model design',
      'Organisational restructuring & optimisation',
      'Process mining and re-engineering',
      'AI integration roadmaps',
      'Change management frameworks',
      'Performance measurement systems'
    ],
    deliverables: [
      'Current State Assessment Report',
      'Target Operating Model Blueprint',
      'Implementation Roadmap',
      'ROI Analysis & Business Case',
      'Governance Framework'
    ],
    priceRange: 'From A$4,500',
    duration: '2-week Sprint or 4-week Full Engagement',
    icon: 'building'
  },
  {
    id: 'delivery-enablement',
    title: 'Delivery Enablement',
    shortDescription: 'Empower your teams with AI-augmented tools and methodologies',
    fullDescription: `Accelerate project delivery and enhance output quality with our Delivery Enablement services. We implement AI-powered workflows, establish PMO best practices, and create the infrastructure needed for sustained delivery excellence across your organisation.`,
    features: [
      'AI-augmented project management',
      'Agile & hybrid methodology frameworks',
      'Delivery toolchain implementation',
      'Resource optimisation systems',
      'Risk management protocols',
      'Quality assurance frameworks'
    ],
    deliverables: [
      'Delivery Methodology Playbook',
      'Tool Integration Architecture',
      'Training & Certification Programmes',
      'Dashboard & Reporting Suite',
      'Continuous Improvement Framework'
    ],
    priceRange: 'From A$4,500',
    duration: '2-week Sprint or 4-week Full Engagement',
    icon: 'rocket'
  },
  {
    id: 'insight-reporting',
    title: 'Insight & Reporting',
    shortDescription: 'Make data-driven decisions with AI-powered analytics and reporting',
    fullDescription: `Transform raw data into strategic advantages with our Insight & Reporting practice. We design and implement comprehensive analytics ecosystems that provide real-time visibility into your business performance, competitive landscape, and emerging opportunities.`,
    features: [
      'Executive dashboard design',
      'Predictive analytics implementation',
      'Competitive intelligence systems',
      'Market trend analysis',
      'KPI framework development',
      'Automated reporting pipelines'
    ],
    deliverables: [
      'Analytics Strategy Document',
      'Dashboard & Visualisation Suite',
      'Data Governance Framework',
      'Automated Reporting Templates',
      'Insights & Recommendations Report'
    ],
    priceRange: 'From A$4,500',
    duration: '2-week Sprint or 4-week Full Engagement',
    icon: 'chart'
  },
  {
    id: 'ai-transformation',
    title: 'AI Transformation',
    shortDescription: 'Redesign work around what AI makes possible, then pilot and embed it under governance',
    fullDescription: 'Our AI Transformation practice helps organisations decide where AI is worth using, design the service around it, and prove it in a controlled pilot before anything scales. We work on the AI platform you have chosen, draw the line between human-only, AI-assisted and fully automated work explicitly, and take no referral fee from any AI vendor.',
    features: [
      'AI opportunity assessment and prioritisation',
      'Process redesign around AI-enabled work',
      'Human–AI operating model and automation boundary',
      'Use-case and agent specification',
      'Responsible-AI risk assessment',
      'Evaluation, UAT and controlled pilots'
    ],
    deliverables: [
      'AI Opportunity Heatmap & Prioritised Backlog',
      'Future-State Service Blueprint',
      'Agent Specification & Traceability Matrix',
      'Evaluation & UAT Strategy',
      'Pilot Findings & Scale Recommendation'
    ],
    priceRange: 'From A$4,500',
    duration: '2-week Sprint or 4-week Full Engagement',
    icon: 'workflow'
  }
];

/**
 * Staged consultant roles for the marketplace. NOT people — no invented
 * names, and the card renders no rating or project count for anyone.
 *
 * Real consultants come from the platform API via useConsultants() and are
 * prepended ahead of these. Brooklyn's entry (h0) was removed on 28 August
 * 2026 when the live fetch shipped: he now arrives from consultant_profiles
 * with his real headline, bio, photo and experience years, and keeping a
 * hardcoded copy would have shown him twice with two different titles.
 *
 * `experience` carries its own noun — "Senior-level experience", not
 * "Senior-level" — because the card renders the string verbatim. A live
 * consultant's label is computed from two years and reads "18 years
 * experience · 10 in consulting", which no appended word can produce.
 *
 * rating, projects and hourlyRate are retained but NOT rendered anywhere.
 * They predate the current card design and should go when these placeholders
 * retire; nothing should start reading them.
 */
export const humanConsultants = [
  {
    id: 'h1',
    name: 'Senior Consultant',
    title: 'Target Operating Model',
    expertise: ['Operating Model Design', 'Strategic Insight', 'Change Management'],
    experience: 'Senior-level experience',
    rating: 4.9,
    projects: 78,
    hourlyRate: 450,
    availability: 'Joining Soon',
    bio: 'Former Senior Partner joining Acooya\'s expanding network, bringing deep expertise in strategic planning and organisational transformation.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
  },
  {
    id: 'h2',
    name: 'Senior Consultant',
    title: 'Technology & Delivery Enablement',
    expertise: ['Enterprise Architecture', 'Delivery Enablement', 'AI Integration'],
    experience: 'Senior-level experience',
    rating: 4.8,
    projects: 62,
    hourlyRate: 350,
    availability: 'Joining Soon',
    bio: 'Technology leader joining Acooya\'s expanding ecosystem, specialising in AI-powered transformation and delivery excellence.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  },
  {
    id: 'h3',
    name: 'Senior Consultant',
    title: 'Analytics & Reporting',
    expertise: ['Strategic Insight', 'Performance Analytics', 'Reporting Automation'],
    experience: '12 years experience',
    rating: 4.9,
    projects: 49,
    hourlyRate: 380,
    availability: 'Joining Soon',
    bio: 'Analytics expert joining Acooya\'s growing team, bringing deep expertise in AI-powered analytics and strategic reporting.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
  },
  {
    id: 'h4',
    name: 'Principal Consultant',
    title: 'Operations & Delivery',
    expertise: ['Delivery Enablement', 'Process Optimisation', 'Program Management'],
    experience: '20 years experience',
    rating: 4.7,
    projects: 89,
    hourlyRate: 500,
    availability: 'Joining Soon',
    bio: 'Operations leader joining Acooya\'s expanding network, bringing deep expertise in delivery enablement and transformation management.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  }
];

export const aiAgents = [
  {
    id: 'a1',
    name: 'Aria - Research Agent',
    category: 'Research & Analysis',
    capabilities: [
      'Market research automation',
      'Competitive landscape analysis',
      'Trend identification & forecasting',
      'Data synthesis from multiple sources'
    ],
    usageCount: 12450,
    rating: 4.8,
    pricePerSession: 150,
    availability: 'Available',
    description: 'Research agent grounded in your own documents. Every draft is reviewed and released by a human — you stay in control of what counts.',
    icon: 'search'
  },
  {
    id: 'a2',
    name: 'Atlas - Strategy Agent',
    category: 'Strategic Planning',
    capabilities: [
      'Strategic option generation',
      'Scenario planning & modelling',
      'Risk assessment matrices',
      'Implementation roadmapping'
    ],
    usageCount: 8920,
    rating: 4.9,
    pricePerSession: 200,
    availability: 'Launching Soon',
    description: 'Strategic planning AI agent that develops comprehensive strategic options with detailed implementation pathways.',
    icon: 'target'
  },
  {
    id: 'a3',
    name: 'Nova - Analytics Agent',
    category: 'Data & Insights',
    capabilities: [
      'Real-time data processing',
      'KPI dashboard generation',
      'Predictive analytics',
      'Custom report creation'
    ],
    usageCount: 15600,
    rating: 4.7,
    pricePerSession: 175,
    availability: 'Launching Soon',
    description: 'Powerful analytics agent that transforms raw data into actionable insights and executive-ready reports.',
    icon: 'chart'
  },
  {
    id: 'a4',
    name: 'Zenith - Delivery Agent',
    category: 'Orchestration & Delivery',
    capabilities: [
      'Task orchestration & tracking',
      'Meeting summarisation',
      'Document generation',
      'Progress reporting'
    ],
    usageCount: 11800,
    rating: 4.8,
    pricePerSession: 125,
    availability: 'Launching Soon',
    description: 'Orchestration agent that coordinates other AI-Agents such as Aria, Atlas, and Nova to deliver end-to-end engagement workflows with automated tracking and reporting.',
    icon: 'rocket'
  }
];

export const hybridSolutions = [
  {
    id: 'hy1',
    title: 'AI-Augmented Strategy Engagement',
    description: 'Combine human strategic thinking with AI-powered research and analysis for faster, deeper insights.',
    humanRole: 'Strategic direction, client alignment, final recommendations',
    aiRole: 'Research, data analysis, scenario modelling, report drafting',
    duration: '6 weeks',
    price: 'from $28,000',
    savings: '40% faster delivery'
  },
  {
    id: 'hy2',
    title: 'Hybrid Operating Model Design',
    description: 'Human-led transformation with AI-powered process discovery and optimisation analysis.',
    humanRole: 'Change management, stakeholder engagement, final design',
    aiRole: 'Process mining, efficiency analysis, benchmarking',
    duration: '10 weeks',
    price: 'from $45,000',
    savings: '60% deeper analysis'
  },
  {
    id: 'hy3',
    title: 'Continuous Intelligence Platform',
    description: 'AI-powered analytics with human strategic interpretation and quarterly business reviews.',
    humanRole: 'Quarterly reviews, strategic interpretation, action planning',
    aiRole: 'Real-time monitoring, automated reports, anomaly detection',
    duration: 'Ongoing',
    price: 'from $5,500/month',
    savings: '80% reduction in reporting time'
  }
];

export const mockEngagements = [
  {
    id: 'eng1',
    title: 'Global Tech Corp - Operating Model Transformation',
    client: 'Global Tech Corp',
    type: 'hybrid',
    status: 'active',
    progress: 65,
    startDate: '2026-02-15',
    endDate: '2026-04-30',
    value: '$150,000',
    consultants: ['Dr. Sarah Chen', 'Atlas AI'],
    recentActivity: [
      { date: '2026-04-02', action: 'Phase 2 analysis completed', user: 'Atlas AI' },
      { date: '2026-04-01', action: 'Stakeholder workshop conducted', user: 'Dr. Sarah Chen' },
      { date: '2026-03-28', action: 'Current state report delivered', user: 'Atlas AI' }
    ],
    documents: [
      { name: 'Phase 1 Assessment Report.pdf', date: '2026-03-28' },
      { name: 'Stakeholder Workshop Notes.pdf', date: '2026-04-01' },
      { name: 'Phase 2 Analysis Summary.pdf', date: '2026-04-02' }
    ]
  },
  {
    id: 'eng2',
    title: 'Meridian Financial - Analytics Platform',
    client: 'Meridian Financial',
    type: 'hybrid',
    status: 'active',
    progress: 30,
    startDate: '2026-03-20',
    endDate: '2026-06-15',
    value: '$200,000',
    consultants: ['Emma Richards', 'Nova AI'],
    recentActivity: [
      { date: '2026-04-01', action: 'Dashboard prototype review', user: 'Emma Richards' },
      { date: '2026-03-25', action: 'Data integration completed', user: 'Nova AI' }
    ],
    documents: [
      { name: 'Requirements Document.pdf', date: '2026-03-22' },
      { name: 'Dashboard Wireframes.pdf', date: '2026-04-01' }
    ]
  },
  {
    id: 'eng3',
    title: 'Nexus Industries - Strategic Planning',
    client: 'Nexus Industries',
    type: 'human',
    status: 'completed',
    progress: 100,
    startDate: '2025-11-01',
    endDate: '2026-01-31',
    value: '$95,000',
    consultants: ['Dr. Sarah Chen'],
    recentActivity: [
      { date: '2026-01-31', action: 'Final strategy delivered', user: 'Dr. Sarah Chen' },
      { date: '2026-01-28', action: 'Board presentation completed', user: 'Dr. Sarah Chen' }
    ],
    documents: [
      { name: 'Final Strategy Report.pdf', date: '2026-01-31' },
      { name: 'Board Presentation.pptx', date: '2026-01-28' }
    ]
  }
];

export const testimonials = [
  {
    id: 't1',
    name: '',
    title: 'Example engagement · Programme Health Check',
    quote: 'A programme rated medium-low on delivery confidence, with a review weeks away. We assess it independently from its own artefacts and interviews, rate every area against evidence, and hand the sponsor a recovery list ordered by what the review will look at first.',
    rating: 0,
    image: ''
  },
  {
    id: 't2',
    name: '',
    title: 'Example engagement · AI Opportunity Assessment',
    quote: 'A customer query takes up to 16 days, and most of that is waiting. We trace each case through its systems, separate waiting from work, and draw the line between what AI should do, what it should assist with, and what stays human.',
    rating: 0,
    image: ''
  },
  {
    id: 't3',
    name: '',
    title: 'Example engagement · Operating Model Health Check',
    quote: 'Two divisions have merged and nobody can say who owns which decisions. We map how accountabilities actually work against the new structure, and agree in writing where they break and which three fixes come first.',
    rating: 0,
    image: ''
  }
];

export const stats = [
  { label: 'Active Clients', value: '100+', icon: 'users' },
  { label: 'Engagements', value: '200+', icon: 'briefcase' },
  { label: 'Expert Consultants', value: '45+', icon: 'award' },
  { label: 'AI Agents Deployed', value: '12', icon: 'bot' },
  { label: 'Client Satisfaction', value: '98%', icon: 'star' },
  { label: 'Time to Value', value: '40%', icon: 'zap' }
];

export const partnershipConcept = {
  title: 'The Human-AI Synergy Model',
  subtitle: 'Bridging Expertise with Intelligence',
  description: 'Acooya pioneered the Human-AI Synergy Model—a revolutionary partnership framework that combines the strategic thinking, emotional intelligence, and domain expertise of world-class consultants with the analytical power, speed, and scalability of purpose-built AI agents.',
  benefits: [
    {
      title: 'Speed & Scale',
      description: 'AI agents handle research, analysis, and reporting at 10x speed while humans focus on strategy and judgement',
      icon: 'zap'
    },
    {
      title: 'Deeper Insights',
      description: 'AI augments human analysis with pattern recognition across millions of data points humans couldn\'t process',
      icon: 'brain'
    },
    {
      title: 'Continuous Value',
      description: 'AI agents work 24/7, providing ongoing monitoring and support between human consulting sessions',
      icon: 'clock'
    },
    {
      title: 'Cost Efficiency',
      description: 'Hybrid engagements deliver 40-60% cost savings versus traditional consulting while maintaining quality',
      icon: 'dollar'
    }
  ],
  process: [
    { phase: 'Intake', description: 'Human consultant understands your needs, AI agent prepares relevant research', duration: 'Week 1' },
    { phase: 'Diagnose', description: 'AI analyses your data at scale, human consultant interprets findings', duration: 'Weeks 2-3' },
    { phase: 'Design', description: 'AI generates options and models, human refines and validates', duration: 'Weeks 4-6' },
    { phase: 'Deliver', description: 'AI produces reports and tools, human guides implementation', duration: 'Weeks 7-12' },
    { phase: 'Enable', description: 'AI monitors and reports, human provides ongoing advisory', duration: 'Ongoing' }
  ]
};

export const knowledgeBase = [
    {
      "id": "kb1",
      "title": "AI & Digital Readiness Assessment",
      "category": "Assessment Tools",
      "type": "framework",
      "relatedService": {
        "label": "AI Opportunity Assessment",
        "href": "/services#ai-transformation"
      },
      "description": "An organisation-wide assessment of readiness to use AI responsibly, across strategy, data, people and governance.",
      "content": {
        "overview": "This assessment gives a whole-of-organisation view of readiness to use AI responsibly. It complements the AI Opportunity Scorecard, which assesses individual use cases one at a time.",
        "sections": [
          {
            "title": "Strategy and Ownership",
            "description": "Whether AI has an executive owner and a place in corporate priorities.",
            "items": [
              "Executive owner",
              "Link to corporate priorities",
              "Investment approach",
              "Use-case pipeline"
            ]
          },
          {
            "title": "Data and Technology",
            "description": "Whether the data and platforms can support AI in production.",
            "items": [
              "Data quality and access",
              "Platform choices",
              "Integration capability",
              "Security posture"
            ]
          },
          {
            "title": "People and Ways of Working",
            "description": "Whether people are ready to work with AI, and have already started.",
            "items": [
              "AI literacy",
              "Capacity for change",
              "Specialist skills",
              "Adoption to date"
            ]
          },
          {
            "title": "Governance and Assurance",
            "description": "Whether AI already in use is known, owned and assessed.",
            "items": [
              "Inventory of AI in use",
              "Risk tiers under the applicable framework",
              "Accountable owners",
              "Monitoring"
            ]
          }
        ],
        "methodology": "Each dimension is scored on a five-point maturity scale, from document review and short interviews with the people who own the area.",
        "outcomes": [
          "Assessment workbook",
          "Interview guide",
          "Maturity profile",
          "Gap and priority summary"
        ]
      }
    },
    {
      "id": "kb2",
      "title": "Operating Model Health Check Kit",
      "category": "Templates",
      "type": "template",
      "relatedService": {
        "label": "Operating Model Health Check",
        "href": "/services#operating-model"
      },
      "description": "Templates for finding where an operating model breaks: capabilities, accountabilities and decision rights, with a baseline to build on.",
      "content": {
        "overview": "This kit holds the templates Acooya uses in an Operating Model Health Check: a capability map, an accountability and decision-rights view, and a prioritised list of fixes with a baseline the next step can build on.",
        "sections": [
          {
            "title": "Capabilities",
            "description": "What the organisation does, where it is duplicated, and what each part costs.",
            "items": [
              "Capability map",
              "Duplication and gap view",
              "Cost-to-serve baseline"
            ]
          },
          {
            "title": "Accountabilities and Decision Rights",
            "description": "Who owns what, who decides what, and how wide each span is.",
            "items": [
              "Accountability matrix",
              "Decision-rights register",
              "Span-of-control profile"
            ]
          },
          {
            "title": "Findings and Next Steps",
            "description": "The fixes in order, and the framing for a target operating model if one is needed.",
            "items": [
              "Prioritised fix list",
              "Options framing for a target operating model",
              "Day-1 / Day-100 plan"
            ]
          }
        ],
        "methodology": "Leadership interviews plus a review of org charts, delegations and position descriptions. Each template comes with a worked layout.",
        "outcomes": [
          "Capability map template",
          "Accountability matrix",
          "Decision-rights register",
          "Prioritised fix list",
          "Day-1 / Day-100 plan"
        ]
      }
    },
    {
      "id": "kb3",
      "title": "AI Opportunity Scorecard",
      "category": "Assessment Tools",
      "type": "toolkit",
      "relatedService": {
        "label": "AI Opportunity Assessment",
        "href": "/services#ai-transformation"
      },
      "description": "The nine-criterion weighted scorecard Acooya uses to rank AI use cases, with a guide to drawing the line between human-only, AI-assisted and automated work.",
      "content": {
        "overview": "The scorecard turns a queue of AI requests into a ranked backlog the executive can challenge. Every candidate is scored on the same nine weighted criteria, and every design states where the human line sits.",
        "sections": [
          {
            "title": "Candidate Inventory",
            "description": "Capturing requests as processes, not tools, with the time measured.",
            "items": [
              "Request intake template",
              "Process walk guide",
              "Touch-time versus elapsed-time capture"
            ]
          },
          {
            "title": "Scoring",
            "description": "The nine weighted criteria and the workshop that applies them.",
            "items": [
              "Nine weighted criteria",
              "Scoring workshop guide",
              "Opportunity heatmap"
            ]
          },
          {
            "title": "Automation Boundary",
            "description": "Deciding what stays human, what AI assists and what can be automated.",
            "items": [
              "Human-only / AI-assisted / automated guide",
              "Controls-outside-the-model checklist"
            ]
          },
          {
            "title": "Backlog and Value",
            "description": "The ranked backlog and the value case for the first wave.",
            "items": [
              "Ranked backlog",
              "Initial value case"
            ]
          }
        ],
        "methodology": "Scored in a facilitated workshop with the teams that own the work. Weights are agreed before scoring starts, so the ranking cannot be reverse-engineered.",
        "outcomes": [
          "Scorecard workbook",
          "Automation boundary guide",
          "Backlog template",
          "Value case template"
        ]
      }
    },
    {
      "id": "kb4",
      "title": "Strategic Options & Appraisal Framework",
      "category": "Methodology",
      "type": "methodology",
      "relatedService": {
        "label": "Target Operating Model Blueprint",
        "href": "/services#operating-model"
      },
      "description": "A structured way to widen the options and then narrow them to one the executive can defend.",
      "content": {
        "overview": "This framework is the Design-phase options paper as a tool. It widens the options first, then appraises them against criteria agreed before any scoring, so the recommendation can be defended.",
        "sections": [
          {
            "title": "Situation and Question",
            "description": "The problem stated in the form every gate document uses.",
            "items": [
              "Problem statement (situation, complication, question)",
              "Decision criteria",
              "Constraints"
            ]
          },
          {
            "title": "Generating Options",
            "description": "Widening the field before narrowing it.",
            "items": [
              "Long-list canvas",
              "Do-nothing and do-minimum baselines",
              "Scenario tests"
            ]
          },
          {
            "title": "Appraising Options",
            "description": "Comparing options on the agreed criteria.",
            "items": [
              "Weighted appraisal matrix",
              "Trade-off summary",
              "Risks per option"
            ]
          },
          {
            "title": "Recommendation",
            "description": "The paper the executive decides on.",
            "items": [
              "Options paper template",
              "Executive decision note"
            ]
          }
        ],
        "methodology": "The criteria are agreed before any option is scored, so the choice cannot be reverse-engineered from a preferred answer.",
        "outcomes": [
          "Options canvas",
          "Appraisal workbook",
          "Options paper template",
          "Executive decision note"
        ]
      }
    },
    {
      "id": "kb5",
      "title": "Change Readiness Survey Template",
      "category": "Assessment Tools",
      "type": "assessment",
      "relatedService": {
        "label": "Programme Reset",
        "href": "/services#delivery-enablement"
      },
      "description": "A short survey for gauging how ready the affected teams are for a change. Includes a question bank, scoring sheet and action planning guide.",
      "content": {
        "overview": "This survey gauges how ready the affected teams are for a change. It feeds the change impact summary in a Programme Reset or an operating model transition; it is a diagnostic input, not a change-strategy service.",
        "sections": [
          {
            "title": "Awareness and Understanding",
            "description": "Whether people understand the need for change and the vision.",
            "items": [
              "Need for change",
              "Vision",
              "Expected impact"
            ]
          },
          {
            "title": "Capability and Confidence",
            "description": "Whether people believe they can work in the new way.",
            "items": [
              "Skills",
              "Resources",
              "Support for the new ways of working"
            ]
          },
          {
            "title": "Leadership and Trust",
            "description": "Confidence in leaders and in how decisions are communicated.",
            "items": [
              "Confidence in leaders",
              "Adequacy of communication",
              "Transparency of decisions"
            ]
          },
          {
            "title": "Culture and Environment",
            "description": "The cultural factors that help or hinder a change.",
            "items": [
              "Collaboration",
              "Tolerance of risk",
              "Agility"
            ]
          }
        ],
        "methodology": "Agreement-scale questions in four groups, about 10 minutes to complete, with results compared across teams and over time.",
        "outcomes": [
          "Question bank",
          "Scoring sheet",
          "Action planning guide"
        ]
      }
    },
    {
      "id": "kb6",
      "title": "KPI & Reporting Audit Template",
      "category": "Templates",
      "type": "template",
      "relatedService": {
        "label": "Reporting & KPI Audit",
        "href": "/services#insight-reporting"
      },
      "description": "Templates for taking stock of what an organisation measures, grading each metric, and designing reports people make decisions from.",
      "content": {
        "overview": "This template set takes stock of every report and metric an organisation produces, grades each one, and designs reports people actually make decisions from.",
        "sections": [
          {
            "title": "Inventory",
            "description": "Every report, metric and source, and the effort each takes to produce.",
            "items": [
              "Report and metric register",
              "Source system map",
              "Production effort log"
            ]
          },
          {
            "title": "Grading",
            "description": "Each metric graded on definition, source and usefulness for decisions.",
            "items": [
              "Grading rubric",
              "Duplicate and conflicting metrics",
              "Metrics worth standardising"
            ]
          },
          {
            "title": "Report Design",
            "description": "Definitions and layouts for each audience.",
            "items": [
              "Metric definition template",
              "Layered design (operational, executive, board)",
              "Power BI starter layout"
            ]
          },
          {
            "title": "Cadence",
            "description": "Who produces what, when, and how it is challenged.",
            "items": [
              "Reporting calendar",
              "Owners",
              "Challenge process"
            ]
          }
        ],
        "methodology": "Definitions are extracted from the existing packs and graded with the people who use them.",
        "outcomes": [
          "Register and grading workbook",
          "Metric definition template",
          "Power BI starter file",
          "Reporting calendar"
        ]
      }
    },
    {
      "id": "kb7",
      "title": "Acooya Engagement Framework Guide",
      "category": "Methodology",
      "type": "methodology",
      "relatedService": {
        "label": "Any Acooya engagement",
        "href": "/services"
      },
      "description": "How Acooya runs every engagement: six phases, a gate at the end of each, and two approvals at every gate.",
      "content": {
        "overview": "This guide describes how every Acooya engagement runs: six phases, a gate at the end of each, and two approvals at every gate. A named consultant approves every AI output, and the client sponsor approves each outcome.",
        "sections": [
          {
            "title": "Six Phases",
            "description": "The sequence every engagement follows, at the depth chosen up front.",
            "items": [
              "Frame",
              "Discover",
              "Design",
              "Decide",
              "Pilot",
              "Embed"
            ]
          },
          {
            "title": "Gates and Two Keys",
            "description": "What is approved at each gate, and by whom.",
            "items": [
              "Gates G0 (charter) to G5 (handover)",
              "Quality key: a named consultant approves every AI output",
              "Decision key: the client sponsor approves each outcome"
            ]
          },
          {
            "title": "Choosing Depth",
            "description": "How the engagement types map onto the phases.",
            "items": [
              "Sprint (2 weeks)",
              "Full Engagement (4 weeks)",
              "Two-wave engagement",
              "Monthly retainer"
            ]
          },
          {
            "title": "Working Standards",
            "description": "The standards that run through every phase.",
            "items": [
              "SCQA writing standard",
              "Stakeholder and change track",
              "Benefits tracked from the baseline"
            ]
          }
        ],
        "methodology": "Read before a Discovery Call, and used to agree depth in the engagement charter.",
        "outcomes": [
          "The framework guide",
          "One-page summary"
        ]
      }
    },
    {
      "id": "kb8",
      "title": "Business Case & Benefits Templates",
      "category": "Templates",
      "type": "template",
      "relatedService": {
        "label": "Business Case Accelerator",
        "href": "/services#insight-reporting"
      },
      "description": "Templates for a business case proportionate to the decision, from options appraisal to benefits profiles, aligned to NSW Treasury’s business case tiers.",
      "content": {
        "overview": "These templates produce a business case proportionate to the decision it supports, from options appraisal through to benefits profiles, aligned to the business case tiers NSW Treasury uses.",
        "sections": [
          {
            "title": "Choosing the Tier",
            "description": "Matching the case to the size of the decision.",
            "items": [
              "Short-form, lean or preliminary",
              "The decision the case supports"
            ]
          },
          {
            "title": "Options and Costs",
            "description": "The options compared, and what each costs.",
            "items": [
              "Options appraisal",
              "Cost model",
              "Risk and sensitivity"
            ]
          },
          {
            "title": "Benefits",
            "description": "What the investment is expected to deliver, and how it will be measured.",
            "items": [
              "Benefits map",
              "Benefit profile template",
              "Baseline and measures"
            ]
          },
          {
            "title": "Tracking",
            "description": "Following benefits after the decision.",
            "items": [
              "Benefits register",
              "Realisation report"
            ]
          }
        ],
        "methodology": "The tier is set first, then each section is drafted and reviewed against it.",
        "outcomes": [
          "Business case template",
          "Cost and benefits workbook",
          "Benefits register",
          "Realisation report template"
        ]
      }
    },
    {
      "id": "kb9",
      "title": "Programme Health Check Template",
      "category": "Toolkits",
      "type": "toolkit",
      "relatedService": {
        "label": "Programme Health Check",
        "href": "/services#delivery-enablement"
      },
      "description": "An evidence-based assessment of delivery confidence, in which every rating cites its evidence.",
      "content": {
        "overview": "This template produces an independent assessment of delivery confidence in which every rating cites its evidence, and the schedule and cost position is rebuilt from source data rather than status reports.",
        "sections": [
          {
            "title": "Evidence Index",
            "description": "What the programme’s own artefacts and people say.",
            "items": [
              "Artefact register",
              "Interview guide for the senior responsible officer, delivery leads and vendor"
            ]
          },
          {
            "title": "Assessment",
            "description": "Delivery confidence by area, with the evidence for each rating.",
            "items": [
              "Delivery-confidence rating by area",
              "Evidence cited per rating",
              "Schedule and cost reconciled from source data"
            ]
          },
          {
            "title": "Recovery",
            "description": "What to fix first, and whether governance can act on it.",
            "items": [
              "Actions ordered by what a review will look at first",
              "Check that governance has the information and authority to act"
            ]
          },
          {
            "title": "Gate Readiness",
            "description": "Readiness against the criteria of an upcoming gate or review.",
            "items": [
              "Criterion-by-criterion readiness view",
              "Fix list"
            ]
          }
        ],
        "methodology": "The position is rebuilt from source data rather than from status reports, and every rating names the evidence behind it.",
        "outcomes": [
          "Assessment workbook",
          "Interview guide",
          "Readiness checklist"
        ]
      }
    }
  ];

export const insightsArticles = [
  {
    "id": "ai-review-gap",
    "title": "AI in Consulting: The Gains Are Real, and So Is the Review Gap",
    "category": "Analysis",
    "readTime": "6 min read",
    "date": "October 15, 2026",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    "excerpt": "The evidence on AI in consulting points two ways: real gains on the right tasks, and costly errors without human review. What it means for anyone buying consulting work.",
    "content": {
      "introduction": "AI has moved from experiment to daily tool in professional work faster than most firms have learned to check it. The evidence now points in two directions at once. Used well, AI makes skilled people faster and better. Used without review, it puts confident errors in front of clients, and Australian buyers have already paid for one. This piece looks at what the published evidence says, and what it means for anyone buying or delivering consulting work.",
      "sections": [
        {
          "title": "Executive Summary",
          "content": "Adoption is near-universal, but results are not. Most organisations use AI somewhere; only a minority can point to a financial return, and fewer still measure one. The best controlled study of consultants using AI found large gains on tasks the AI handled well, and worse answers on a task it could not. The tool was the same in both cases. What separated a gain from a loss was the person’s judgement about when to trust it. Buyers and governments have noticed. Australian agencies now require named owners for AI use, quality checks on AI outputs from suppliers, and disclosure. A named human reviewer on every output is becoming the price of entry, not a premium."
        },
        {
          "title": "Adoption Has Run Ahead of Results",
          "content": "Use of AI is now the norm. In McKinsey’s 2025 global survey, 88% of organisations used AI regularly in at least one business function, up from 78% a year earlier. But only 39% reported any impact on earnings (EBIT), and for most of those it was under 5%. Agents are earlier still: 23% were scaling an agentic AI system anywhere in the business (McKinsey, 2025). Professional services follow the same pattern. Organisation-wide AI use nearly doubled in a year, from 22% to 40%, yet only 18% of respondents knew their organisation tracks return on its AI investment (Thomson Reuters Institute, 2026). The gap between use and measured value is the first sign that adoption alone is not the point. How the work is governed is."
        },
        {
          "title": "The Jagged Frontier",
          "content": "The strongest evidence on AI and consulting work comes from a pre-registered field experiment with 758 BCG consultants, published as a Harvard Business School working paper in 2023. The same tool produced both of the results below. The difference was whether a person with the right judgement checked the output before relying on it.",
          "subsections": [
            {
              "title": "Inside the frontier",
              "content": "On tasks the AI handled well, consultants using it completed 12.2% more tasks, finished 25.1% faster and produced work rated more than 40% higher in quality. The gains were largest for weaker performers: 43% for those below average, against 17% for those above (Dell’Acqua et al., 2023)."
            },
            {
              "title": "Outside the frontier",
              "content": "On a task just beyond the AI’s ability, consultants using AI were 19 percentage points less likely to reach the correct answer than those working without it. The AI’s answer was persuasive and wrong, and many accepted it. The study used GPT-4 in 2023; today’s models move the frontier out but do not remove it."
            }
          ]
        },
        {
          "title": "When Review Fails",
          "content": "Australia has already seen the cost. In 2025, Deloitte delivered an assurance review of the Targeted Compliance Framework to the Department of Employment and Workplace Relations. The report was replaced in September to correct references and footnotes (DEWR, 2025). The original cited a report attributed to a University of Sydney law professor that does not exist, a non-existent report by a Swedish professor, and a fabricated quote attributed to a judge. The revised version disclosed that a generative AI tool chain had been used. The contract was worth just under A$440,000, and Deloitte agreed to a partial refund (ACS Information Age, 2025). The errors were found by an outside academic, not by the firm’s own review.",
          "subsections": [
            {
              "title": "The checking gap",
              "content": "The pattern is common. In a University of Melbourne and KPMG study of more than 48,000 people, 57% of Australian workers said they rely on AI output without evaluating its accuracy, and 59% had made mistakes at work because of AI (2025). Globally, 51% of organisations have experienced at least one negative consequence from AI (McKinsey, 2025)."
            }
          ]
        },
        {
          "title": "What Buyers and Government Now Expect",
          "content": "The rules are catching up with the practice. The common thread is accountability: a named person, a record of what AI did, and a check before anything reaches the client.",
          "subsections": [
            {
              "title": "Commonwealth agencies",
              "content": "The updated policy for the responsible use of AI in government took effect on 15 December 2025. It requires an accountable owner for each AI use case, an internal register and an impact assessment before deployment (Digital Transformation Agency, 2026)."
            },
            {
              "title": "Suppliers to government",
              "content": "The DTA’s model contract clauses require written agency approval before a supplier uses AI to deliver services, quality-assurance checks on AI outputs, and records of AI use."
            },
            {
              "title": "Procurement",
              "content": "In May 2026 the Commonwealth announced that bidders would declare planned AI use in quotes and remain fully responsible for what they deliver."
            },
            {
              "title": "NSW",
              "content": "The modernised AI Assessment Framework, released in January 2026 with CSIRO’s Data61, sends high-risk systems to mandatory safeguards and an AI Review Committee."
            },
            {
              "title": "Private clients",
              "content": "In the Thomson Reuters Institute’s 2026 survey, 40% of professional firms had received instructions both to use AI and not to use it, from different clients. Most clients wanted the firm to raise the subject first."
            }
          ]
        },
        {
          "title": "What This Means for Buying Consulting",
          "content": "For anyone commissioning consulting work, three questions now matter as much as the consultant’s experience. This is how Acooya works: every AI-drafted deliverable must be approved by a named consultant before a client can see it, enforced by the platform rather than left to habit, and each deliverable records the model, the documents used and the reviewer. AI amplifies a consultant’s work; it does not replace the judgement that decides what is true.",
          "subsections": [
            {
              "title": "Who reviewed it?",
              "content": "Every AI-assisted output should have a named person who approved it before you saw it, not a sample check."
            },
            {
              "title": "What did AI do?",
              "content": "You should be able to see which parts were drafted with AI, from which sources, and which model was used."
            },
            {
              "title": "What was it based on?",
              "content": "Sources should be real, cited and checkable, and confidential material should be screened before it reaches an AI model."
            }
          ]
        }
      ],
      "keyTakeaways": [
        "Most organisations use AI; few can show it pays",
        "AI makes skilled people faster and better on the right tasks, and worse on the wrong ones",
        "Unreviewed AI output has already cost an Australian government client",
        "Australian agencies now expect named owners, quality checks and disclosure",
        "A named human reviewer on every output is becoming the minimum standard"
      ],
      "sources": [
        {
          "title": "The state of AI in 2025",
          "publisher": "McKinsey",
          "date": "November 2025",
          "url": "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-state-of-ai-2025"
        },
        {
          "title": "2026 AI in Professional Services Report",
          "publisher": "Thomson Reuters Institute",
          "date": "February 2026",
          "url": "https://www.thomsonreuters.com/en/institute/articles/ai-in-professional-services-report-2026"
        },
        {
          "title": "Navigating the Jagged Technological Frontier",
          "publisher": "Harvard Business School working paper",
          "date": "September 2023",
          "url": "https://mitsloan.mit.edu/sites/default/files/2023-10/SSRN-id4573321.pdf"
        },
        {
          "title": "Targeted Compliance Framework Assurance Review",
          "publisher": "Department of Employment and Workplace Relations",
          "date": "September 2025",
          "url": "https://www.dewr.gov.au/assuring-integrity-targeted-compliance-framework/resources/targeted-compliance-framework-assurance-review-final-report"
        },
        {
          "title": "Deloitte to refund government over AI errors",
          "publisher": "ACS Information Age",
          "date": "October 2025",
          "url": "https://ia.acs.org.au/article/2025/deloitte-to-refund-government-over-ai-errors.html"
        },
        {
          "title": "Deloitte admits AI hallucinated quotes in government report",
          "publisher": "TechSpot",
          "date": "October 2025",
          "url": "https://www.techspot.com/news/109758-deloitte-admits-ai-hallucinated-quotes-government-report-offers.html"
        },
        {
          "title": "Trust, attitudes and use of AI: Australia snapshot",
          "publisher": "University of Melbourne and KPMG",
          "date": "May 2025",
          "url": "https://assets.kpmg.com/content/dam/kpmgsites/xx/pdf/2025/05/trust-attitudes-and-use-of-ai-australia-snapshot.pdf"
        },
        {
          "title": "AI policy update: strengthening responsible use across government",
          "publisher": "Digital Transformation Agency",
          "date": "January 2026",
          "url": "https://www.dta.gov.au/articles/ai-policy-update-strengthening-responsible-use-across-government"
        },
        {
          "title": "The DTA’s model AI clauses",
          "publisher": "King & Wood Mallesons",
          "date": "August 2025",
          "url": "https://www.mallesons.com/au/en/insights/latest-thinking/the-dtas-model-ai-clauses-suppliers-using-ai-in-service-delivery-to-government.html"
        },
        {
          "title": "Suppliers face strict new AI rules in procurement shake-up",
          "publisher": "InnovationAus",
          "date": "May 2026",
          "url": "https://www.innovationaus.com/suppliers-face-strict-new-ai-rules-in-procurement-shake-up/"
        },
        {
          "title": "NSW strengthens AI oversight with modernised framework",
          "publisher": "NSW Department of Customer Service",
          "date": "January 2026",
          "url": "https://www.nsw.gov.au/departments-and-agencies/customer-service/media-releases/nsw-strengthens-ai-oversight-modernised-framework"
        }
      ],
      "author": "Brooklyn Yang",
      "authorTitle": "Founder & Lead Consultant",
      "authorImage": "/brooklyn-yang.jpg"
    }
  },
{
    "id": "insights-2",
    "title": "Which AI Work Is Worth Doing? Start With the Process, Not the Tool",
    "category": "Article",
    "readTime": "5 min read",
    "date": "October 15, 2026",
    "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    "excerpt": "Most AI requests arrive as tool ideas. A practical way to decide which are worth doing, where the human line sits, and what to measure first.",
    "content": {
      "introduction": "In most organisations, demand for AI now arrives faster than anyone can assess it. Requests come in as tools (“can we get a chatbot for this?”) rather than problems, and the team responsible has no consistent way to say yes, not yet, or no. The result is a backlog of pilots, few of which become services. This article sets out the approach Acooya uses to decide which AI work is worth doing first.",
      "sections": [
        {
          "title": "Executive Summary",
          "content": "Start from the process, not the tool. Walk the real work, measure where the time goes, and score every candidate on the same criteria. Then draw an explicit line between what stays human, what AI assists and what can be automated, and keep mandatory controls outside the AI model. Set a baseline before any pilot, so the result can be measured rather than claimed."
        },
        {
          "title": "Start From the Process",
          "content": "A request describes a tool; the value sits in a process. Before scoring anything, walk the work as it is actually done, not as the procedure says it is done. Separate touch time, when someone is working on a case, from elapsed time, when it is waiting. Take an illustrative customer query that takes 16 days from first contact to resolution. If most of those days are queues, transfers and approvals, an assistant that drafts replies faster saves minutes of a 16-day problem. The bigger gain is usually in routing, retrieval and removing hand-offs."
        },
        {
          "title": "Score Every Candidate the Same Way",
          "content": "A consistent scorecard turns a queue of opinions into a ranked backlog the executive can challenge. Ours weighs nine criteria, which fall into four groups.",
          "subsections": [
            {
              "title": "Value",
              "content": "How often the work happens, how long it takes, and what it costs today."
            },
            {
              "title": "Suitability",
              "content": "How repeatable the work is, how knowledge-intensive, and how much judgement it needs."
            },
            {
              "title": "Feasibility",
              "content": "Whether the data is ready, and whether the systems can be connected."
            },
            {
              "title": "Consequence of error",
              "content": "What happens when the answer is wrong, to whom, and whether it can be reversed."
            }
          ]
        },
        {
          "title": "Draw the Line Explicitly",
          "content": "Every design should say, activity by activity, which of three categories applies. The line is a decision the business makes and signs, not a property of the technology.",
          "subsections": [
            {
              "title": "Human-only",
              "content": "Decisions with legal, financial or safety consequences, such as a fraud decision or a finding on the cause of a safety incident."
            },
            {
              "title": "AI-assisted",
              "content": "AI drafts, a person approves, such as a reply to a complaint or a first classification of a case."
            },
            {
              "title": "Automated",
              "content": "Low-consequence, reversible steps such as retrieving a policy or routing a case to the right team."
            },
            {
              "title": "Rules stay outside the model",
              "content": "Matching rules, tolerances and approval limits belong in systems and decision tables an auditor can read, never only in an AI prompt."
            }
          ]
        },
        {
          "title": "Govern From Day One",
          "content": "In government this is no longer optional. Commonwealth agencies now need an accountable owner for each AI use case, an internal register and an impact assessment before deployment (Digital Transformation Agency, 2026). NSW’s modernised AI Assessment Framework sends high-risk systems to mandatory safeguards and an AI Review Committee (NSW Government, 2026). The practical first step is the same everywhere: inventory the AI already in use, because business units rarely wait for a strategy."
        },
        {
          "title": "Measure Before You Pilot",
          "content": "A pilot without a baseline produces opinions. Before any user sees an AI tool, capture today’s volume, cycle time and quality, and agree the thresholds the pilot must meet. Build a set of real test cases with an agreed marking guide, so quality is measured before rollout rather than discovered after it."
        }
      ],
      "keyTakeaways": [
        "Requests describe tools; the value sits in processes",
        "Most delay is waiting, not work, so measure both",
        "Score every candidate on the same criteria",
        "Decide what stays human before deciding what to automate",
        "Keep mandatory rules outside the AI model",
        "Set the baseline before the pilot"
      ],
      "sources": [
        {
          "title": "AI policy update: strengthening responsible use across government",
          "publisher": "Digital Transformation Agency",
          "date": "January 2026",
          "url": "https://www.dta.gov.au/articles/ai-policy-update-strengthening-responsible-use-across-government"
        },
        {
          "title": "NSW strengthens AI oversight with modernised framework",
          "publisher": "NSW Department of Customer Service",
          "date": "January 2026",
          "url": "https://www.nsw.gov.au/departments-and-agencies/customer-service/media-releases/nsw-strengthens-ai-oversight-modernised-framework"
        }
      ],
      "author": "Brooklyn Yang",
      "authorTitle": "Founder & Lead Consultant",
      "authorImage": "/brooklyn-yang.jpg"
    }
  },
{
    "id": "insights-3",
    "title": "How a Hybrid Engagement Actually Runs",
    "category": "Article",
    "readTime": "5 min read",
    "date": "October 15, 2026",
    "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
    "excerpt": "Senior consultants and AI agents on one engagement: who does what, where you decide, and how every AI draft is checked before it reaches you.",
    "content": {
      "introduction": "“Hybrid” is easy to say and hard to picture. This piece describes how an Acooya engagement runs: what the consultant does, what the AI agents do, where you make the decisions, and what you can check afterwards.",
      "sections": [
        {
          "title": "Executive Summary",
          "content": "Every engagement runs through the same six phases, and you choose how many at the start. AI agents draft the evidence, consultants judge it, and you decide. Each phase ends at a gate that needs two approvals: a named consultant approves the work, and your sponsor approves the outcome. Every deliverable records which AI model was used, which documents it drew on, and who reviewed it."
        },
        {
          "title": "Six Phases, Chosen Up Front",
          "content": "Depth is agreed at the start and written into the engagement charter, so the scope cannot drift unnoticed. A two-week Sprint covers Frame and Discover. A four-week Full Engagement runs from Frame to Decide. Pilot and Embed follow when you want them.",
          "subsections": [
            {
              "title": "Frame",
              "content": "The question, scope, success measures and decision-maker, agreed in a charter."
            },
            {
              "title": "Discover",
              "content": "The current state, with a baseline to measure change against."
            },
            {
              "title": "Design",
              "content": "Options, widened first and then narrowed to a preferred one."
            },
            {
              "title": "Decide",
              "content": "A business case or roadmap proportionate to the decision."
            },
            {
              "title": "Pilot",
              "content": "A bounded test against the measures set in Decide."
            },
            {
              "title": "Embed",
              "content": "Rollout, benefits tracking and handover to your own people."
            }
          ]
        },
        {
          "title": "Who Does What",
          "content": "The division of work is simple: agents produce evidence, people make judgements.",
          "subsections": [
            {
              "title": "The consultant",
              "content": "Frames the question, runs the interviews and workshops, weighs the evidence, writes the findings and recommendations, and is accountable for them."
            },
            {
              "title": "The AI agents",
              "content": "Synthesise documents, analyse data, and draft first versions of maps, matrices, options and business cases."
            },
            {
              "title": "You",
              "content": "Own the question, and make every decision at every gate."
            }
          ]
        },
        {
          "title": "Two Keys at Every Gate",
          "content": "No AI output is ever a decision, and no AI draft reaches you unchecked.",
          "subsections": [
            {
              "title": "The quality key",
              "content": "A named consultant approves every AI-drafted output before you can see it. On Acooya’s platform this is enforced by the system, not left to habit."
            },
            {
              "title": "The decision key",
              "content": "Your sponsor approves the outcome of each phase before the next begins."
            }
          ]
        },
        {
          "title": "What You Can Check",
          "content": "Each deliverable records the AI model used, the documents it drew on, and the consultant who reviewed it. Documents you share are screened for personal identifiers before any AI model can read them, and flagged documents are kept out. If you ask “where did this come from?”, there is an answer on record."
        },
        {
          "title": "What We Measure",
          "content": "AI makes evidence faster to assemble; it does not make judgement better. So we judge a hybrid engagement on the same terms as any other: did you get a decision you could act on, on time, with evidence you could check?"
        }
      ],
      "keyTakeaways": [
        "AI agents draft the evidence, consultants judge it, and you decide",
        "Depth is agreed at the start and written into the charter",
        "A named consultant approves every AI draft before you see it",
        "Each deliverable records its model, sources and reviewer",
        "Success is a decision you can act on, with evidence you can check"
      ],
      "author": "Brooklyn Yang",
      "authorTitle": "Founder & Lead Consultant",
      "authorImage": "/brooklyn-yang.jpg"
    }
  }
];