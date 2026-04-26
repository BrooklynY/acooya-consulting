// Acooya Consulting - Mock Data
// All text in British English

export const consultingServices = [
  {
    id: 'business-architecture',
    title: 'Business Architecture & Operating Model',
    shortDescription: 'Transform your organisational structure for maximum efficiency and AI readiness',
    fullDescription: `Our Business Architecture & Operating Model practice helps organisations redesign their core business structures to optimise for the digital age. We combine deep industry expertise with AI-augmented analysis to deliver operating models that are agile, scalable, and future-proof.`,
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
    priceRange: '$12,000 - $75,000',
    duration: '4-12 weeks',
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
    priceRange: '$8,000 - $45,000',
    duration: '3-8 weeks',
    icon: 'rocket'
  },
  {
    id: 'strategic-insights',
    title: 'Strategic Insight & Reporting',
    shortDescription: 'Make data-driven decisions with AI-powered analytics and reporting',
    fullDescription: `Transform raw data into strategic advantages with our Strategic Insight & Reporting practice. We design and implement comprehensive analytics ecosystems that provide real-time visibility into your business performance, competitive landscape, and emerging opportunities.`,
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
    priceRange: '$10,000 - $60,000',
    duration: '6-16 weeks',
    icon: 'chart'
  }
];

export const humanConsultants = [
  {
    id: 'h0',
    name: 'Brooklyn Yang',
    title: 'Lead Consultant, Strategy & Operations',
    expertise: ['Business Architecture', 'Operating Model Design', 'Delivery Enablement', 'Strategic Insight', 'Change Management'],
    experience: '14 years',
    rating: 4.9,
    projects: 42,
    hourlyRate: 250,
    availability: 'Available Now',
    bio: 'Acooya\'s Lead Consultant with deep expertise across Business Architecture, Operating Model Design, Delivery Enablement, and Strategic Insight. Trusted advisor to global enterprises across diverse industries.',
    image: '/brooklyn-yang.jpg'
  },
  {
    id: 'h1',
    name: 'Senior Consultant',
    title: 'Strategy & Operating Model',
    expertise: ['Operating Model Design', 'Strategic Insight', 'Change Management'],
    experience: 'Senior-level',
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
    expertise: ['Business Architecture', 'Delivery Enablement', 'AI Integration'],
    experience: 'Senior-level',
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
    experience: '12 years',
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
    experience: '20 years',
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
    availability: 'Launching Soon',
    description: 'Advanced AI agent specialised in comprehensive market research and competitive intelligence gathering.',
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
    title: 'Acooya\'s Human-AI Synergy Model',
    quote: 'Acooya\'s hybrid approach is designed to transform operating models faster than traditional consulting — combining human expertise and AI capabilities to deliver measurably better outcomes.',
    rating: 0,
    image: ''
  },
  {
    id: 't2',
    name: '',
    title: 'Financial Services Sector | Operating Model Engagement',
    quote: 'Operating model redesigned for a 200-person financial services firm: 40% reduction in manual reporting time within 8 weeks of engagement.',
    rating: 0,
    image: ''
  },
  {
    id: 't3',
    name: '',
    title: 'Technology Sector | Strategic Analytics Platform',
    quote: 'AI-powered analytics platform delivered for a global technology company: 60% faster market intelligence and 3x increase in strategic decision velocity.',
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
    id: 'kb1',
    title: 'Digital Maturity Assessment Framework',
    description: 'Comprehensive framework for assessing your organisation\'s digital readiness across 6 key dimensions. Includes scoring methodology, benchmarking data, and action planning templates.',
    category: 'Assessment Tools',
    downloads: 0,
    date: 'March 28, 2026',
    type: 'framework',
    content: {
      overview: 'The Digital Maturity Assessment Framework is a battle-tested tool developed by Acooya\'s team of digital transformation experts. Used by over 500 organisations globally, this framework provides a holistic view of your organisation\'s digital readiness.',
      sections: [
        {
          title: 'Strategic Foundation',
          description: 'Evaluates your digital strategy alignment, vision clarity, and leadership commitment to digital transformation.',
          items: ['Digital vision articulation', 'Strategy integration score', 'Leadership digital quotient', 'Investment appetite assessment']
        },
        {
          title: 'Technology Infrastructure',
          description: 'Assesses your current technology stack, integration capabilities, and scalability of systems.',
          items: ['Core system audit', 'Integration maturity score', 'Data architecture review', 'Security posture evaluation']
        },
        {
          title: 'Human Capital & Culture',
          description: 'Measures digital skills, cultural readiness, and organisational agility for digital ways of working.',
          items: ['Digital skills inventory', 'Change readiness assessment', 'Innovation culture index', 'Learning velocity score']
        },
        {
          title: 'Customer Experience',
          description: 'Analyses customer touchpoints, digital channels, and experience consistency across journeys.',
          items: ['Digital channel audit', 'Customer effort score', 'Personalisation maturity', 'Omnichannel readiness']
        },
        {
          title: 'Operations & Process',
          description: 'Evaluates process digitisation, automation levels, and operational efficiency gains.',
          items: ['Process digitisation score', 'Automation opportunity matrix', 'Efficiency benchmarking', 'Scalability assessment']
        },
        {
          title: 'Innovation Pipeline',
          description: 'Assesses your innovation capability, experimentation culture, and future-readiness.',
          items: ['Innovation velocity index', 'R&D investment analysis', 'Partnership ecosystem map', 'Emerging tech adoption rate']
        }
      ],
      methodology: 'The framework uses a 5-point maturity scale across 24 sub-dimensions, aggregated into 6 core dimensions. Scoring is based on evidence-based assessment across self-evaluation, stakeholder interviews, and document review.',
      outcomes: ['Digital Maturity Score (0-100)', 'Gap Analysis Report', 'Priority Action Plan', 'Benchmark Comparison', 'Transformation Roadmap Template']
    }
  },
  {
    id: 'kb2',
    title: 'Operating Model Design Template',
    description: 'Industry-leading template for redesigning operating models. Includes current state canvas, target state blueprint, and implementation roadmap templates.',
    category: 'Templates',
    downloads: 0,
    date: 'March 15, 2026',
    type: 'template',
    content: {
      overview: 'This Operating Model Design Template distils lessons from 200+ operating model transformations across 15 industries. It provides a structured approach to diagnosing current state, defining target state, and sequencing transformation initiatives.',
      sections: [
        {
          title: 'Current State Assessment',
          description: 'Comprehensive current state analysis including value chain mapping, capability inventory, and organisational audit.',
          items: ['Value chain canvas', 'Capability heatmap', 'Organisation structure analysis', 'Process inventory template', 'Stakeholder mapping']
        },
        {
          title: 'Target State Design',
          description: 'Future-state definition tools including blueprint templates, capability model, and governance framework.',
          items: ['Target operating model blueprint', 'Capability target model', 'Governance design template', 'KPI framework', 'Risk assessment matrix']
        },
        {
          title: 'Transition Planning',
          description: 'Roadmapping and sequencing tools for managing the journey from current to target state.',
          items: ['Initiative prioritisation matrix', 'Phasing strategy template', 'Resource allocation model', 'Change impact assessment', 'Communication plan']
        }
      ],
      methodology: 'The template follows a structured workshop methodology with 8 facilitated sessions, each building upon the previous to create a comprehensive transformation roadmap.',
      outcomes: ['Current State Assessment Report', 'Target Operating Model Blueprint', 'Implementation Roadmap', 'Governance Framework', 'Change Management Plan']
    }
  },
  {
    id: 'kb3',
    title: 'AI Integration Roadmap Toolkit',
    description: 'Complete toolkit for planning and executing AI integration across your organisation. Includes readiness assessment, use case prioritisation, and implementation playbooks.',
    category: 'Toolkits',
    downloads: 0,
    date: 'March 10, 2026',
    type: 'toolkit',
    content: {
      overview: 'Developed in partnership with leading AI researchers and practitioners, this toolkit provides a pragmatic approach to AI integration that balances ambition with practical constraints. Used by Fortune 500 companies and scale-ups alike.',
      sections: [
        {
          title: 'AI Readiness Assessment',
          description: 'Comprehensive assessment of your organisation\'s readiness for AI adoption across data, technology, people, and governance dimensions.',
          items: ['Data readiness audit', 'Infrastructure assessment', 'Skills gap analysis', 'Governance gap analysis', 'Cultural readiness index']
        },
        {
          title: 'Use Case Discovery',
          description: 'Structured methodology for identifying and prioritising high-value AI use cases.',
          items: ['Use case ideation canvas', 'Value-effort prioritisation matrix', 'Technical feasibility rubric', 'ROI estimation template', 'Risk assessment framework']
        },
        {
          title: 'Implementation Playbooks',
          description: 'Detailed playbooks for implementing different types of AI solutions.',
          items: ['ML model deployment playbook', 'LLM integration guide', 'Automation playbook', 'Monitoring and governance guide', 'Change management toolkit']
        },
        {
          title: 'Centre of Excellence Setup',
          description: 'Template for establishing an AI Centre of Excellence to drive ongoing AI capability building.',
          items: ['CoE charter template', 'Team structure blueprint', 'Skill development programme', 'Governance framework', 'Success metrics dashboard']
        }
      ],
      methodology: 'The toolkit follows a proven 6-month programme structure, with built-in checkpoints and iteration points. Each phase includes facilitator guides, participant materials, and output templates.',
      outcomes: ['AI Readiness Report', 'Prioritised Use Case Portfolio', 'Implementation Roadmap', 'CoE Setup Blueprint', 'Governance Framework']
    }
  },
  {
    id: 'kb4',
    title: 'Strategic Planning Framework',
    description: 'Annual strategic planning methodology used by top consulting firms. Includes market analysis templates, competitive positioning tools, and execution roadmaps.',
    category: 'Methodology',
    downloads: 0,
    date: 'February 28, 2026',
    type: 'methodology',
    content: {
      overview: 'This Strategic Planning Framework integrates the best practices from McKinsey, BCG, and Bain methodologies with Acooya\'s proprietary AI-augmented research capabilities. It provides a comprehensive yet agile approach to annual strategic planning.',
      sections: [
        {
          title: 'Situation Assessment',
          description: 'Rigorous external and internal analysis using proven frameworks.',
          items: ['PESTEL analysis template', 'Five Forces analysis', 'Value chain analysis', 'SWOT synthesis', 'Competitive positioning matrix']
        },
        {
          title: 'Strategic Choices',
          description: 'Structured approach to generating and selecting strategic options.',
          items: ['Strategic options canvas', 'Scenario planning templates', 'Decision criteria framework', 'Trade-off analysis', 'Strategic bets matrix']
        },
        {
          title: 'Growth Architecture',
          description: 'Tools for defining growth vectors and sequencing initiatives.',
          items: ['Growth vectors analysis', 'Market expansion playbook', 'Product portfolio matrix', 'Geographic prioritisation', 'M&A screening template']
        },
        {
          title: 'Execution Planning',
          description: 'From strategy to actionable plans with clear ownership and milestones.',
          items: ['BSC translation template', 'OKR framework', 'Initiative one-pagers', 'Resource allocation model', 'Risk mitigation plan']
        }
      ],
      methodology: 'The framework uses a 10-week intensive planning cycle, with built-in stakeholder alignment checkpoints. AI agents support each phase with automated research, data synthesis, and scenario modelling.',
      outcomes: ['Strategic Assessment Report', 'Strategic Choice Document', '3-Year Roadmap', 'Annual Plan with OKRs', 'Risk Management Plan']
    }
  },
  {
    id: 'kb5',
    title: 'Change Readiness Survey Template',
    description: 'Proven survey instrument for assessing organisational change readiness. Includes question bank, scoring methodology, and action planning guide.',
    category: 'Assessment Tools',
    downloads: 0,
    date: 'February 20, 2026',
    type: 'assessment',
    content: {
      overview: 'This Change Readiness Survey Template draws on research across 150+ change programmes to identify the key factors that predict successful change adoption. The survey takes 10 minutes to complete and provides actionable insights.',
      sections: [
        {
          title: 'Awareness & Understanding',
          description: 'Measures whether employees understand the need for change and the vision.',
          items: ['Vision comprehension score', 'Need for change awareness', 'Benefits understanding', 'Impact perception']
        },
        {
          title: 'Capability & Confidence',
          description: 'Assesses employees\' belief in their ability to adopt new ways of working.',
          items: ['Skill confidence index', 'Resource adequacy perception', 'Support availability awareness', 'Learning orientation score']
        },
        {
          title: 'Leadership & Trust',
          description: 'Evaluates confidence in leadership and organisational support systems.',
          items: ['Leadership credibility score', 'Trust index', 'Communication adequacy', 'Decision transparency']
        },
        {
          title: 'Culture & Environment',
          description: 'Assesses cultural factors that enable or hinder change.',
          items: ['Innovation culture index', 'Collaboration readiness', 'Risk tolerance score', 'Agility assessment']
        }
      ],
      methodology: 'The survey uses validated psychometric scales with country-specific norming. Results are benchmarked against industry and organisational history. Action planning follows a structured workshop format.',
      outcomes: ['Readiness Score Report', 'Segment Analysis', 'Barrier Identification', 'Action Planning Guide', 'Communication Strategy']
    }
  },
  {
    id: 'kb6',
    title: 'Executive Dashboard Template',
    description: 'Ready-to-use executive dashboard template for tracking strategic initiatives. Includes KPI definitions, visualisation best practices, and refresh protocols.',
    category: 'Templates',
    downloads: 0,
    date: 'February 15, 2026',
    type: 'template',
    content: {
      overview: 'This Executive Dashboard Template provides a proven framework for translating strategy into measurable daily management. Developed with input from 50+ CHROs and CFOs, it balances comprehensiveness with executive attention constraints.',
      sections: [
        {
          title: 'Strategic KPI Framework',
          description: 'Set of proven KPIs aligned to strategic objectives.',
          items: ['Financial performance metrics', 'Customer experience indicators', 'Internal process measures', 'Learning & growth metrics']
        },
        {
          title: 'Visualisation Templates',
          description: 'Dashboard templates following executive information design principles.',
          items: ['Strategy map visual', 'KPI hierarchy template', 'Trend analysis views', 'Exception highlighting template']
        },
        {
          title: 'Governance Templates',
          description: 'Templates for defining review rhythms and escalation protocols.',
          items: ['Review cadence guide', 'Escalation matrix', 'Accountability framework', 'Decision rights template']
        }
      ],
      methodology: 'The template is designed in Microsoft Excel and Power BI formats, with built-in data connection guides. Implementation typically takes 2-3 weeks with IT support.',
      outcomes: ['KPI Framework Document', 'Excel Dashboard Template', 'Power BI Dashboard Template', 'Governance Guide', 'IT Integration Specification']
    }
  },
  {
    id: 'kb7',
    title: 'Hybrid Engagement Playbook',
    description: 'Complete guide to designing and managing human-AI hybrid consulting engagements. Includes engagement design templates, team structures, and delivery protocols.',
    category: 'Methodology',
    downloads: 0,
    date: 'February 10, 2026',
    type: 'methodology',
    content: {
      overview: 'The Hybrid Engagement Playbook codifies Acooya\'s approach to combining human consultants with AI agents. It provides frameworks for engagement design, team composition, workflow integration, and quality management that have been refined across 500+ engagements.',
      sections: [
        {
          title: 'Engagement Architecture',
          description: 'Framework for structuring hybrid engagements for maximum impact.',
          items: ['Engagement type selection guide', 'Scope definition template', 'Human-AI task allocation matrix', 'Timeline template', 'Budget allocation model']
        },
        {
          title: 'Team Composition',
          description: 'Guidance on building effective hybrid teams.',
          items: ['Consultant selection criteria', 'AI agent pairing guide', 'Team structure template', 'Role definition templates', 'Collaboration protocols']
        },
        {
          title: 'Workflow Integration',
          description: 'Templates for integrating AI and human workstreams.',
          items: ['Handoff protocol templates', 'Quality gates definition', 'Review cycle template', 'Feedback loop design', 'Continuous improvement framework']
        },
        {
          title: 'Quality Management',
          description: 'Systems for ensuring consistent quality across hybrid engagements.',
          items: ['Quality framework', 'Review checklist template', 'Client communication template', 'Escalation procedures', 'Success metrics']
        }
      ],
      methodology: 'The playbook uses a modular approach that can be adapted to different engagement types and complexities. Implementation includes facilitated sessions with Acooya\'s engagement management team.',
      outcomes: ['Engagement Design Document', 'Team Structure Blueprint', 'Workflow Integration Plan', 'Quality Management Framework', 'Client Communication Templates']
    }
  },
  {
    id: 'kb8',
    title: 'Value Creation Calculator',
    description: 'Interactive tool for estimating the financial value of consulting interventions. Includes ROI methodology, benchmarking data, and business case templates.',
    category: 'Assessment Tools',
    downloads: 0,
    date: 'January 30, 2026',
    type: 'calculator',
    content: {
      overview: 'The Value Creation Calculator helps organisations move beyond soft benefits to quantify the financial impact of consulting interventions. It provides a rigorous yet practical methodology that has been validated against actual delivery outcomes.',
      sections: [
        {
          title: 'Benefit Quantification',
          description: 'Framework for identifying and measuring different categories of benefit.',
          items: ['Revenue uplift estimation', 'Cost reduction methodology', 'Risk mitigation valuation', 'Productivity gain calculation', 'Innovation value framework']
        },
        {
          title: 'Investment Analysis',
          description: 'Templates for comprehensive investment sizing.',
          items: ['Full cost accounting template', 'Resource loading model', 'Risk contingency framework', 'Opportunity cost analysis']
        },
        {
          title: 'ROI Modelling',
          description: 'Models for calculating and presenting return on investment.',
          items: ['ROI calculation template', 'NPV modelling tool', 'Payback period analysis', 'Sensitivity analysis framework']
        }
      ],
      methodology: 'The calculator uses a structured workshop format with finance and business unit representatives. Outputs include a board-ready business case and an ongoing tracking dashboard.',
      outcomes: ['Benefits Register', 'Investment Model', 'ROI Analysis', 'Business Case Document', 'Tracking Dashboard']
    }
  }
];

export const insightsArticles = [
  {
    id: 'insights-1',
    title: 'The Future of AI in Management Consulting: 2026 Report',
    category: 'Research Report',
    readTime: '15 min read',
    date: 'April 1, 2026',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    excerpt: 'Our comprehensive analysis reveals how AI is reshaping the consulting landscape, with hybrid human-AI teams delivering 40-60% better outcomes.',
    content: {
      introduction: 'The management consulting industry stands at a pivotal inflection point. As artificial intelligence capabilities accelerate, the traditional consulting model is being fundamentally reimagined. This report synthesises findings from 500+ engagements, interviews with 200+ industry leaders, and proprietary data from our Human-AI Synergy Model deployments.',
      sections: [
        {
          title: 'Executive Summary',
          content: 'AI is not replacing consultants—it is amplifying their impact. Our data shows that consultants equipped with AI agents deliver client outcomes 40-60% faster while maintaining or improving quality scores. The winners in this transition are not those who adopt AI fastest, but those who integrate it most thoughtfully into human-centric workflows.'
        },
        {
          title: 'The Current State of AI in Consulting',
          content: 'Today, 78% of large consulting engagements now include some AI component, up from 23% in 2023. However, only 31% of firms have a structured approach to human-AI collaboration. This gap represents both a risk and an opportunity for forward-thinking organisations.'
        },
        {
          title: 'Key Findings',
          subsections: [
            {
              title: 'Efficiency Gains',
              content: 'AI-augmented consulting teams complete research and analysis tasks at 10x the speed of traditional approaches. Time savings are most significant in data gathering (87% faster), report drafting (65% faster), and competitive analysis (72% faster).'
            },
            {
              title: 'Quality Improvements',
              content: 'Contrary to concerns about AI diluting quality, our analysis shows a 23% improvement in recommendation accuracy when AI handles data synthesis while humans focus on judgment and interpretation. Client satisfaction scores are 15% higher for hybrid engagements.'
            },
            {
              title: 'Cost Structure Evolution',
              content: 'The economics of consulting are shifting. Traditional hourly billing is giving way to value-based pricing enabled by AI efficiency gains. Firms with mature hybrid models report 35% higher profit margins while offering clients 25-40% cost savings.'
            },
            {
              title: 'Talent Implications',
              content: 'The skills required for consulting success are evolving. Data literacy, AI collaboration skills, and prompt engineering are joining traditional consulting capabilities. Firms investing in upskilling their workforce are seeing 2.3x better adoption rates.'
            }
          ]
        },
        {
          title: 'The Human-AI Synergy Model',
          content: 'Based on our research, we have identified four archetypes for human-AI collaboration in consulting. The most effective is what we call the "Orchestrator" model, where senior consultants lead with judgment and context while AI agents handle research, analysis, and production. This model outperforms others by 40% on client outcomes and 60% on delivery speed.'
        },
        {
          title: 'Implementation Considerations',
          content: 'Moving to AI-augmented consulting requires careful change management. Key success factors include: executive sponsorship for the operating model change, investment in AI literacy training, clear protocols for AI output validation, and redesigned quality assurance processes. Organisations that skip these fundamentals see 3x higher failure rates.'
        },
        {
          title: 'Looking Ahead: 2026-2028 Projections',
          content: 'We project that by 2028, fully AI-augmented consulting will become the norm rather than the exception. Key trends include: autonomous research agents handling 70% of information gathering, AI-assisted synthesis producing first-draft deliverables, and human consultants focusing on strategic interpretation, stakeholder management, and change leadership. Firms that prepare now will capture disproportionate market share.'
        }
      ],
      keyTakeaways: [
        'AI is amplifying, not replacing, human consultant value',
        'Hybrid teams deliver 40-60% better outcomes',
        'Structured integration protocols are critical for success',
        'Cost structures are shifting toward value-based models',
        'Investment in AI literacy is now a competitive necessity'
      ],
      author: 'Brooklyn Yang',
      authorTitle: 'Founder & Lead Consultant',
      authorImage: '/brooklyn-yang.jpg'
    }
  },
  {
    id: 'insights-2',
    title: 'Building AI-Ready Organizations: A Complete Framework',
    category: 'Whitepaper',
    readTime: '20 min read',
    date: 'March 28, 2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
    excerpt: 'A comprehensive guide to transforming your organisation for the AI era, covering technology, people, process, and culture dimensions.',
    content: {
      introduction: 'Becoming an AI-ready organisation requires more than deploying new technology. It demands a holistic transformation across four interconnected dimensions: strategic readiness, technical infrastructure, human capabilities, and organisational culture. This whitepaper provides a battle-tested framework developed through 200+ transformation programmes.',
      sections: [
        {
          title: 'Why AI Readiness Matters',
          content: 'Organisations that achieve true AI readiness outperform peers by 2.5x on revenue growth, 3x on operational efficiency, and 4x on new market entry speed. Yet only 12% of organisations globally are truly AI-ready. The gap is widening between leaders and laggards, with implications for competitive survival.'
        },
        {
          title: 'The Four Dimensions Framework',
          content: 'Our AI Readiness Framework evaluates organisations across four critical dimensions, each containing multiple sub-dimensions with specific assessment criteria and maturity indicators.',
          subsections: [
            {
              title: 'Dimension 1: Strategic Readiness',
              content: 'Strategic readiness assesses whether your organisation has a clear vision for AI, aligned leadership commitment, and appropriate investment appetite. Key indicators include: executive ownership of AI strategy, AI integrated into corporate strategy, board-level AI literacy, and clear use case prioritisation.'
            },
            {
              title: 'Dimension 2: Technical Infrastructure',
              content: 'Technical readiness evaluates data architecture, integration capabilities, and scalability. Critical factors include: data quality and accessibility, cloud infrastructure maturity, API-first architecture, security and compliance posture, and technology stack flexibility.'
            },
            {
              title: 'Dimension 3: Human Capabilities',
              content: 'Human capability readiness measures your workforce\'s ability to work effectively with AI. Core competencies include: AI literacy across the organisation, data science and ML engineering talent, change management capability, and leadership agility.'
            },
            {
              title: 'Dimension 4: Organisational Culture',
              content: 'Cultural readiness determines whether your organisation supports AI adoption. Key factors include: experimentation tolerance, failure learning culture, cross-functional collaboration, and data-driven decision making norms.'
            }
          ]
        },
        {
          title: 'The Assessment Process',
          content: 'Our assessment methodology combines quantitative scoring across 24 sub-dimensions with qualitative insights from stakeholder interviews and document review. The process typically takes 4-6 weeks and produces an actionable maturity score, prioritised gap analysis, and transformation roadmap.'
        },
        {
          title: 'Building Your AI-Ready Organisation',
          content: 'Transformation to AI-readiness is not a single initiative but a programme of work spanning 18-36 months. Key phases include: Foundation Setting (months 1-6), Pilot Deployment (months 7-12), Scaled Rollout (months 13-24), and Maturity Achievement (months 25-36). Each phase has specific milestones and success criteria.'
        },
        {
          title: 'Common Pitfalls to Avoid',
          content: 'Based on our transformation experience, we have catalogued the most common failure modes: technology-first thinking, siloed implementation, underinvesting in change management, unrealistic timelines, and missing executive sponsorship. Addressing these proactively dramatically improves success rates.'
        }
      ],
      keyTakeaways: [
        'AI readiness requires transformation across four dimensions',
        'Only 12% of organisations are truly AI-ready',
        'Assessment should combine quantitative and qualitative methods',
        'Transformation takes 18-36 months, not weeks',
        'Most failures stem from avoidable implementation pitfalls'
      ],
      author: 'Brooklyn Yang',
      authorTitle: 'Founder & Lead Consultant',
      authorImage: '/brooklyn-yang.jpg'
    }
  },
  {
    id: 'insights-3',
    title: 'Hybrid Teams: The New Model for Strategic Consulting',
    category: 'Article',
    readTime: '8 min read',
    date: 'March 25, 2026',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop',
    excerpt: 'How leading consulting firms are combining human expertise with AI agents to deliver faster, deeper insights to clients.',
    content: {
      introduction: 'The consulting industry is undergoing its most significant transformation since the advent of strategy consulting. The emergence of capable AI agents is reshaping how consultants work, what clients expect, and what value looks like. This article explores the hybrid team model that is emerging as the new standard for strategic consulting.',
      sections: [
        {
          title: 'The Traditional Model Under Pressure',
          content: 'Traditional consulting\'s time-and-materials model worked when information was scarce and analysis was labour-intensive. Today, AI can gather and synthesise information at superhuman scale. The question is not whether to integrate AI, but how to do so in ways that enhance rather than diminish the human elements that clients truly value.'
        },
        {
          title: 'What Clients Actually Value',
          content: 'Our client research reveals that what clients value most in consulting is not the information gathering or analysis—they can do much of that themselves with modern tools. What they value is: interpretation of findings in their specific context, strategic judgment about what matters most, stakeholder management and change leadership, and accountability for outcomes. These are distinctly human capabilities that AI augments but does not replace.'
        },
        {
          title: 'The Hybrid Team Structure',
          content: 'In the hybrid model, consulting teams are structured around complementary human and AI roles. Senior consultants focus on client relationship, strategic guidance, and quality judgment. Analysts are elevated to synthesis and insight development with AI assistance. AI agents handle research, data processing, document drafting, and routine analysis.',
          subsections: [
            {
              title: 'Human Roles',
              content: 'The human consultants bring contextual understanding, creative problem-solving, relationship skills, and ultimate accountability. They focus their time on high-value activities that require judgment and human connection.'
            },
            {
              title: 'AI Agent Roles',
              content: 'AI agents bring 24/7 availability, superhuman data processing, consistent output quality, and scalable capacity. They work in the background, producing drafts, gathering information, and identifying patterns that humans might miss.'
            }
          ]
        },
        {
          title: 'Making Hybrid Teams Work',
          content: 'Effective hybrid teams require deliberate design. Key success factors include: clear handoff protocols between human and AI work, robust quality assurance processes, effective prompt engineering for AI agents, regular team retrospectives, and psychological safety around AI usage.',
          subsections: [
            {
              title: 'Workflow Design',
              content: 'Workflow design should optimise for human time allocation. Every task should be evaluated: Can AI do this faster and adequately? Can AI assist humans to do this better? Is human judgment essential here? Answers drive task allocation decisions.'
            },
            {
              title: 'Quality Management',
              content: 'Quality management in hybrid teams requires new approaches. AI outputs must be validated by humans, but that validation can be intelligent sampling rather than comprehensive review. The key is establishing clear quality criteria and escalation protocols.'
            }
          ]
        },
        {
          title: 'The Results Speak',
          content: 'Our hybrid engagements consistently outperform traditional approaches on multiple dimensions: 40-60% faster delivery, 15-20% higher client satisfaction scores, 25-40% cost savings for clients, and 35% higher margin for the firm. The model works—for consultants and clients alike.'
        }
      ],
      keyTakeaways: [
        'Clients value human judgment, not just analysis',
        'Hybrid teams deliver faster with better outcomes',
        'Workflow design optimises human time allocation',
        'Quality management requires new approaches',
        'Both clients and consultants benefit from hybrid models'
      ],
      author: 'Brooklyn Yang',
      authorTitle: 'Founder & Lead Consultant',
      authorImage: '/brooklyn-yang.jpg'
    }
  }
];
