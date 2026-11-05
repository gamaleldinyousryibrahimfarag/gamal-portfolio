window.DIGITAL_PORTFOLIO = {
  profile:
    "Civil engineer and engineering-management professional with six years across owner-representative, consultancy and contractor environments. I combine construction project controls with hands-on digital delivery: mapping processes, building applications, validating outputs, supporting users and improving workflows — without claiming production deployments where work remains prototype or portfolio demonstration.",
  hero: {
    eyebrow: "GAMAL FARAG / ENGINEERING & DIGITAL OPERATIONS",
    title: "I turn complex operations into",
    titleEm: "working digital systems.",
    intro:
      "I bridge engineering, business requirements and technology — building practical solutions that connect teams, automate workflows, improve controls and support daily operations.",
    tags: ["Project controls", "Digital applications", "Process automation"]
  },
  howIWork: {
    heading: "I turn operational challenges into",
    headingEm: "working digital solutions.",
    sub: "From requirement to an operational system — one end-to-end process.",
    steps: [
      { title: "Understand", detail: "Business need" },
      { title: "Structure", detail: "Workflow & roles" },
      { title: "Build", detail: "Working solution" },
      { title: "Validate", detail: "Test & secure" },
      { title: "Operate", detail: "Run & improve" }
    ]
  },
  caseStudies: [
    {
      id: "procurement",
      num: "01",
      tier: "primary",
      title: "Procurement management system",
      subtitle: "Site · finance · procurement — one workflow",
      image: "assets/digital-portfolio/case-procurement-granis.jpg",
      alt: "Procurement operations case study visual",
      deliveryStatus: "Live workflow · cross-functional approvals",
      problem:
        "Material requests, budget checks and purchasing steps were scattered across email and spreadsheets, with unclear ownership between site, finance and procurement.",
      myRole:
        "Defined the workflow, role permissions, approval stages and audit trail; designed the application logic and tested scenarios with synthetic packages.",
      workflow:
        "Site request → technical review → budget check → procurement review → RFQ / vendor comparison → PO → delivery tracking → receipt → closeout log.",
      features: [
        "Role-based access for site engineers, accountants and procurement officers",
        "Multi-stage approvals with clear owner per gate",
        "Attachment placeholders and package status tracking",
        "Approval history and time-stamped audit log (demo)"
      ],
      testing:
        "Walkthrough tests with three demo personas; validation of state transitions, blocked actions when role mismatches, and log completeness.",
      securityNote:
        "Designed for role separation and auditability — not presented as a certified security assessment.",
      demoId: "procurement"
    },
    {
      id: "document-control",
      num: "02",
      tier: "primary",
      title: "Intelligent document control",
      subtitle: "Email intake · routing · filing · log",
      image: "assets/digital-portfolio/case-document-control.jpg",
      alt: "Document control and correspondence routing case study",
      deliveryStatus: "Workflow prototype · illustrative correspondence",
      problem:
        "Project correspondence and submittals arrived by email with inconsistent filing, slow routing to the right discipline engineer and weak turnaround visibility.",
      myRole:
        "Mapped intake rules, routing logic, filing structure and log register; built and tested the automation path on sample messages (drawing / submittal).",
      workflow:
        "Incoming email → attachment review → document classification → concerned engineer assignment → structured filing → log register → action tracking.",
      features: [
        "Classification by document type and discipline",
        "Routing rules to assign responsible engineer",
        "Structured filing path and searchable log entry",
        "Turnaround status on demo records (not measured client KPIs)"
      ],
      testing:
        "Scenario tests on synthetic emails (piping layout revision, material submittal); verified routing, filing path and log creation.",
      securityNote: "Demo uses fictional project references only.",
      demoId: "document-control"
    },
    {
      id: "project-controls",
      num: "03",
      tier: "primary",
      title: "Project controls automation",
      subtitle: "Site updates → validation → programme → dashboard",
      image: "assets/digital-portfolio/case-project-controls-automation.jpg",
      alt: "Project controls automation case study",
      deliveryStatus: "Automation prototype · demo progress data",
      problem:
        "Weekly site progress arrived in Excel with inconsistent IDs, dates and percentages, making P6 updates and management reporting slow and error-prone.",
      myRole:
        "Built the validation and normalization path, prepared import-ready structures and linked outputs to SPI/CPI-style dashboards for review (demo metrics).",
      workflow:
        "Site progress inputs → data validation → update preparation → programme update concept → dashboard & management actions.",
      features: [
        "Progress normalization and date / ID checks",
        "Validation log with pass / review flags",
        "P6-ready export concept (demo file label)",
        "Planned vs actual dashboard with illustrative SPI/CPI"
      ],
      testing:
        "Test rows including intentional errors; confirmed blocking, review flags and dashboard refresh on clean data.",
      securityNote: "No live client programmes or confidential schedules published.",
      demoId: "project-controls"
    },
    {
      id: "fieldnote-v3",
      num: "04",
      tier: "primary",
      title: "Fieldnote V3 · Interactive PM monitoring",
      subtitle: "Executive cockpit · gantt · milestones · schedule health",
      image: "assets/digital-portfolio/workflow-performance-dashboard.png",
      alt: "Fieldnote interactive programme monitoring dashboard",
      deliveryStatus: "Interactive dashboard · sample programme dataset",
      problem:
        "Programme reviews relied on static exports and disconnected views—KPIs, phase progress, gantt logic, and milestone slips were hard to explore in one sitting during steering meetings.",
      myRole:
        "Designed and built the Fieldnote V3 monitoring experience: PM cockpit metrics, interactive gantt and activity views, milestone baseline vs forecast comparison, filters, and presentation mode for reviews.",
      workflow:
        "Import / connect programme data → normalize activities & milestones → monitor KPIs and phase progress → drill into gantt & watchlist → compare baseline vs forecast → export or present.",
      features: [
        "PM cockpit with progress, SPI-style health, and overdue activity signals",
        "Interactive gantt with baseline bars and today marker",
        "Milestone comparison (baseline vs current forecast) with date deltas",
        "Activity register, logic checks, and presentation mode for meetings"
      ],
      testing:
        "Navigation, filter, and drill-down paths tested across dashboard, gantt, milestone, and upload flows; presentation mode verified for review layouts.",
      securityNote:
        "Portfolio embed uses a sample programme only—no confidential client schedules or commercial data published.",
      demoId: "fieldnote-v3"
    },
    {
      id: "automotive",
      num: "05",
      tier: "beyond",
      title: "Automotive services application",
      subtitle: "Service discovery · pricing · location",
      image: "assets/digital-portfolio/app-automotive-services.png",
      alt: "Automotive services app illustrative mockup",
      deliveryStatus: "Product concept · portfolio demo",
      problem: "Users needed combined service categories, price context and nearby providers in one mobile-friendly flow.",
      myRole: "Defined features, user paths and UI mockups for discovery and location-based search.",
      workflow: "Browse categories → view price bands → locate nearby service centres (demo).",
      features: ["Service categories", "Vehicle price information", "Nearby provider discovery"],
      testing: "Navigation and content structure tests on mock data.",
      securityNote: "Consumer-facing concept; no production deployment claimed.",
      demoId: null
    },
    {
      id: "predictive",
      num: "06",
      tier: "beyond",
      title: "Predictive modelling with historical data",
      subtitle: "Patterns · forecasts · decision support",
      image: "assets/digital-portfolio/case-predictive-modelling.jpg",
      alt: "Predictive modelling case study visual",
      deliveryStatus: "Analytics experiment · synthetic historical series",
      problem: "Teams needed a structured way to explore patterns in historical operational data and discuss forecast scenarios.",
      myRole: "Prepared datasets, trained and evaluated models on demo history; documented assumptions and limitations.",
      workflow: "Historical data → preparation → pattern analysis → model training → forecast output → review.",
      features: ["Feature preparation checklist", "Model validation metrics on demo split", "Forecast chart with confidence band (illustrative)"],
      testing: "Hold-out evaluation on synthetic series; documented MAE/RMSE as demo-only metrics.",
      securityNote: "All numbers in visuals are illustrative — not client performance claims.",
      demoId: "predictive"
    }
  ],
  engineeringHighlights: [
    { name: "Four Palaces Programme", location: "Doha, Qatar", note: "Owner-side controls across four parallel royal developments." },
    { name: "Souq Al Najada – Gold Souq", location: "Doha, Qatar", note: "Resource- and cost-aware sequencing and recovery logic." },
    { name: "Lekhwiya Multi-Building Project", location: "Doha, Qatar", note: "Steel erection and building-level programmes integrating engineering, procurement and site sequence." },
    { name: "Diriyah Square – Package 3", location: "Diriyah, Riyadh, Saudi Arabia", note: "Procurement and installation planning across 76 buildings." },
    { name: "Aspire Zone Phase 2 – West Zone", location: "Aspire Zone, Qatar", note: "Design-build programme for roads, buildings, utilities and landscaping." },
    { name: "Office Tower 404", location: "Doha Corniche / Al Sadd Street, Qatar", note: "Curtain-wall replacement planning around occupied-building access." }
  ],
  capabilities: [
    "Python",
    "Excel / VBA",
    "Workflow design",
    "AI-assisted development",
    "Role-based workflows",
    "Audit & approval logic",
    "Primavera P6",
    "Power BI",
    "Procurement operations",
    "Interactive PM dashboards",
    "Predictive modelling"
  ]
};
