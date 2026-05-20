window.DIA = {
  nav: [
    { id: "about",    label: "About Us" },
    { id: "why",      label: "Why DiA?" },
    { id: "services", label: "Our Services" },
    { id: "work",     label: "What We Do" },
    { id: "contact",  label: "Contact Us" }
  ],
  pages: [
    { id: "home", label: "Home" },
    { id: "projects", label: "Our Work" }
  ],

  hero: {
    eyebrow: "Design-Itude Associates · Residential",
    title: "We Turn Your Dreams Into Reality",
    tagline: "WE TURN YOUR DREAMS\nINTO REALITY",
    image: "assets/hero-1.png",
    imageLabel: "HERO · 1920×1080"
  },

  about: {
    intro: "WELCOME TO DIA | DESIGN-ITUDE ASSOCIATES, WHERE CREATIVITY MEETS FUNCTIONALITY AND BOLD VISIONS COME TO LIFE.",
    body: [
      "In the dynamic world, where every space tells a story and every design choice evokes an emotion, DiA shines as a beacon of innovation and excellence. We are proud of our passion for crafting immersive experiences. Not only that but our commitment to exceeding guest expectations and our studio is dedicated to redefining the landscape, one project at a time.",
      "We are an international Architecture and Interior Design Studio renowned for its inclusive and innovative approach to creating socially responsible, engaging, and visually captivating spaces. Founded in 2007, in London, which started with a focus on residential, we have been dedicated to bringing transformative designs to life."
    ],
    portrait: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    portraitLabel: "ABOUT · residence interior"
  },

  // Four horizontal image cards (Our Services section on home)
  ourServices: [
    { id: "architecture", t: "ARCHITECTURE",         img: "assets/svc-architecture.jpg", l: "SVC · architecture",
      tag: "End-to-end architectural service",
      sub: "From feasibility studies to construction sign-off — one studio, one principal, one continuous conversation.",
      paragraphs: [
        "Our architecture practice covers the full RIBA work-stages from the first conversation to the day the keys turn. We're small on purpose; the principal is on every project and every site visit.",
        "Most of our work begins with a long, unbilled site visit and a slow brief. We don't draw until we understand the family, the climate, and the constraints. The detail is the design."
      ],
      services: ["new-build", "extension", "loft", "planning"]
    },
    { id: "interior",     t: "INTERIOR DESIGN",      img: "assets/svc-interior.jpg", l: "SVC · interior",
      tag: "Joinery, lighting & furniture, specified to the millimetre",
      sub: "Every detail documented, every supplier on the same page, every finish on a single moodboard.",
      paragraphs: [
        "Interior design at DiA is a continuous service — not a step that begins after the building is done. We start with the joinery package while planning is in progress, so the kitchen, library and bathrooms are built into the architecture, not laid on top of it.",
        "We hand over a bound dossier of every specification, every supplier, every paint code. The house keeps its memory."
      ],
      services: ["interior", "landscape", "commercial"]
    },
    { id: "project",      t: "PROJECT MANAGEMENT",   img: "assets/svc-project.jpg", l: "SVC · project mgmt",
      tag: "On-site coordination, contractor liaison & quality control",
      sub: "Weekly site visits, monthly reports, and a single point of contact from breaking ground to handover.",
      paragraphs: [
        "Our project managers run the conversation between the design intent and the construction reality. We coordinate the trades, hold the programme, and check the work against the drawings — relentlessly.",
        "Cost reports are issued monthly with variances flagged, options costed, and approval routes clear. No surprises at the end."
      ],
      services: ["new-build", "extension", "loft"]
    },
    { id: "planning",     t: "PLANNING APPLICATION", img: "assets/svc-architecture.jpg", l: "SVC · planning",
      tag: "Planning advice & full applications",
      sub: "Over 200 successful applications across UK boroughs and Egyptian municipalities.",
      paragraphs: [
        "We handle the planning conversation from pre-application through to officer liaison and (if needed) appeal. We've worked with most London boroughs and have a particular fluency in conservation areas, heritage curtilage, and party-wall coordination.",
        "Submissions are drawn at the studio — not outsourced — so the application drawings are the same drawings the contractor will build from."
      ],
      services: ["planning", "extension", "new-build"]
    },
    { id: "design-build", t: "DESIGN & BUILD",       img: "assets/svc-project.jpg", l: "SVC · design+build",
      tag: "One contract from sketch to keys",
      sub: "Single-team delivery for clients who want the studio responsible for the whole journey.",
      paragraphs: [
        "For clients who'd rather have one accountable team than three, we offer a turnkey design-and-build service: architecture, interiors and construction under a single contract.",
        "Same studio, same drawings, same principal. Faster on site, fewer interfaces, and no finger-pointing between architect and builder."
      ],
      services: ["new-build", "extension", "interior"]
    }
  ],

  // Eight "What We Do" icon cards (replaces the previous services grid)
  whatwedo: [
    { n: "01", t: "New Builds",        icon: "newBuild",  b: "Building your dream home is a journey shaped by years of planning, dreaming, and saving.",
      long: "From a clear plot to a finished home, our new-build service covers feasibility, design, planning, technical drawings, and on-site delivery. We design every new build around the way the family actually lives — the morning routine, the entertaining rhythm, the long view from the kitchen.",
      includes: ["Feasibility & site analysis", "Concept & schematic design", "Planning submission", "Technical drawings & specs", "Tendering & contractor selection", "On-site quality reviews"],
      hero: "assets/svc-architecture.jpg" },
    { n: "02", t: "Extensions",        icon: "extension", b: "We design tailored extensions that blend seamlessly with your home's existing structure, creating functional and stylish living spaces that align with your lifestyle and needs.",
      long: "Ground-floor, side, rear and wrap-around extensions, designed to look as if they were always there. We work with the existing line of the building — the brick course, the eaves, the ceiling height — so the new room feels structural rather than bolted on.",
      includes: ["Survey & feasibility", "Planning & permitted-development advice", "Party-wall coordination", "Construction drawings", "Interior continuity with the existing house"],
      hero: "assets/hero-1.png" },
    { n: "03", t: "Loft Conversion",   icon: "loft",      b: "A loft conversion is an excellent way to utilise unused space and add a new dimension to your home.",
      long: "Dormer, hip-to-gable, mansard and L-shaped loft conversions — chosen for what the roof can give you, not what's easiest to build. We recover the floor without losing the line of the building.",
      includes: ["Structural survey", "Dormer or hip-to-gable design", "Staircase reorganisation", "Bedroom + en-suite planning", "Building regs sign-off"],
      hero: "assets/svc-architecture.jpg" },
    { n: "04", t: "Garage Conversion", icon: "garage",    b: "We transform underused garages into characterful living rooms, studios, or annexes, with personality and charm.",
      long: "Garages are usually a metre under-insulated and over-ceilinged — the perfect canvas. We reset the floor, wrap the envelope, and replan the room to read as part of the house rather than a tacked-on box.",
      includes: ["Floor + envelope upgrade", "Glazing strategy", "Heating & ventilation", "Optional WC / kitchenette", "Permitted-development advice"],
      hero: "assets/svc-architecture.jpg" },
    { n: "05", t: "Planning Permission", icon: "plan",    b: "Reviewing planning permission requirements, identifying any potential constraints, and gathering all necessary information before formally submitting the planning application.",
      long: "We handle the planning application end-to-end: pre-app meetings, supporting statements, drawings, and the conversation with planning officers. Over 200 successful applications across UK councils.",
      includes: ["Pre-application advice", "Heritage & conservation statements", "Application drawings & DAS", "Officer liaison", "Appeals where needed"],
      hero: "assets/svc-architecture.jpg" },
    { n: "06", t: "Interior Design",   icon: "interior",  b: "Our designs draw from nature's soothing patterns and flows, creating environments that promote well-being and a sense of harmony.",
      long: "Joinery, lighting, furniture, finishes — every detail specified, sourced, and documented. We deliver a bound dossier of paint codes, supplier contacts, and care instructions at handover.",
      includes: ["Concept & mood direction", "Joinery & cabinetry design", "Lighting design", "FF&E sourcing", "Soft-furnishing & art curation"],
      hero: "assets/svc-interior.jpg" },
    { n: "07", t: "Landscape",         icon: "landscape", b: "We design gardens and landscapes that complement your home and enhance your daily living.",
      long: "Gardens, courtyards, terraces and pool surrounds designed as continuous rooms with the house. We work with planting consultants and lighting designers from day one — the landscape is never an afterthought.",
      includes: ["Site survey & levels", "Hard landscape design", "Planting plans", "External lighting", "Pool & water-feature integration"],
      hero: "assets/svc-architecture.jpg" },
    { n: "08", t: "Commercial",        icon: "commercial",b: "We specialise in transforming houses into homes, infusing each space with personality and charm.",
      long: "Showrooms, studios, small offices, hospitality fit-outs and mixed-use commercial reworks. Same studio, same level of detail, with a faster gear for delivery deadlines.",
      includes: ["Brand-aligned interior strategy", "FF&E specification", "Compliance & accessibility", "Phased fit-out planning"],
      hero: "assets/svc-project.jpg" }
  ],

  why: [
    { t: "AN INTERNATIONAL FIRM WITH LOCAL KNOWLEDGE",
      b: "Our international experience provides a rich understanding of diverse cultural contexts and global design standards. This insight, paired with a meticulous commitment to detail, ensure that each project is executed flawlessly, resonating locally while upholding the highest standards worldwide." },
    { t: "AWARD-WINNING STUDIO DEDICATED TO TIMELESS DESIGN WITH A MODERN EDGE",
      b: "Recognised for excellence by both Luxury Lifestyle Awards and London Design Awards." },
    { t: "INNOVATIVE SOLUTIONS WITH MASTERY IN COMPLEX AND ELEGANT SOLUTIONS",
      b: "From concept to completion, we offer customised solutions that reflect our client's aspirations and the unique characteristics of each project." },
    { t: "RELATIONSHIPS",
      b: "We believe that the finest designs emerge from a true partnership. Working closely with clients, our team listens, understands, and aligns with their vision, making them an integral part of the design journey. This deep involvement ensures that each project feels personal, meaningful, and uniquely tailored." },
    { t: "MULTIDISCIPLINARY TEAM WITH DETAILED PRECISION",
      b: "With a multidisciplinary team under one roof, we offer expertise across all facets of design. Our commitment to detail goes beyond the aesthetic — every element is carefully considered, and every stage is meticulously documented, providing clients with a comprehensive and transparent experience from concept to completion." },
    { t: "SUSTAINABLE PRACTICES",
      b: "Our designs prioritise sustainability, ensuring our projects are beautiful but also responsible and enduring. As human beings, we value the connection to nature. Wherever possible and appropriate, we include natural elements in our designs." }
  ],

  stats: [
    { n: "3",    t: "STUDIOS",   s: "WORLDWIDE" },
    { n: "12+",  t: "COUNTRIES", s: "WORKED IN" },
    { n: "25+",  t: "YEARS'",    s: "EXPERIENCE" },
    { n: "500+", t: "PROJECTS",  s: "COMPLETED GLOBALLY" }
  ],

  services: [
    { n: "01", t: "New Builds", icon: "newBuild", b: "Bespoke residential architecture from first sketch to final keys. Villas, townhouses, country homes." },
    { n: "02", t: "Renovations", icon: "renovate", b: "Sympathetic reworking of period and modern properties — interiors and structure handled in one team." },
    { n: "03", t: "Extensions", icon: "extension", b: "Ground-floor, side, rear and wrap-around extensions, designed to look as if they were always there." },
    { n: "04", t: "Loft Conversions", icon: "loft", b: "Roof reorganisations that recover a whole floor of living without losing the line of the building." },
    { n: "05", t: "Interior Design", icon: "interior", b: "Joinery, lighting, furniture and finishes — every detail specified, sourced, and documented." },
    { n: "06", t: "Landscape", icon: "landscape", b: "Gardens, courtyards and terraces designed as continuous rooms with the house." }
  ],

  work: [
    { id: "ravenhill", name: "Ravenhill House",   typology: "Conversion",  location: "Hampstead, London",     year: "2024", area: "412 m²",
      cover: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80", coverLabel: "RAVENHILL · atrium",
      brief: "A late-Georgian terrace rebuilt around a triple-height stair void and a courtyard of polished travertine.",
      gallery: [
        { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=2000&q=80", l: "01 · stair void" },
        { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000&q=80", l: "02 · living room" },
        { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=2000&q=80", l: "03 · kitchen" },
        { src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=2000&q=80", l: "04 · bedroom" },
        { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=80", l: "05 · bathroom" },
        { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=2000&q=80", l: "06 · courtyard" }
      ]},
    { id: "almaza", name: "Almaza Bay Villa", typology: "New Build", location: "North Coast, Egypt", year: "2023", area: "680 m²",
      cover: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1800&q=80", coverLabel: "ALMAZA · facade",
      brief: "A coastal villa pitched between dune and dwelling. Slatted timber and lime-washed concrete temper the Mediterranean light.",
      gallery: [
        { src: "https://images.unsplash.com/photo-1600566753051-6057f1fa6e26?w=2000&q=80", l: "01 · approach" },
        { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=2000&q=80", l: "02 · pool" },
        { src: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=2000&q=80", l: "03 · living" },
        { src: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=2000&q=80", l: "04 · kitchen" }
      ]},
    { id: "fitzrovia", name: "Fitzrovia Apartment", typology: "Interior", location: "Fitzrovia, London", year: "2024", area: "186 m²",
      cover: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1800&q=80", coverLabel: "FITZROVIA · living",
      brief: "Two-floor reorganisation inside a 1930s mansion block. The brief was a single sentence: 'fewer rooms, more light.'",
      gallery: [
        { src: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=2000&q=80", l: "01 · entry" },
        { src: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=2000&q=80", l: "02 · library" },
        { src: "https://images.unsplash.com/photo-1616137148650-4aa14651e02d?w=2000&q=80", l: "03 · dining" }
      ]},
    { id: "kestrel", name: "Kestrel Barn", typology: "Conversion", location: "Kent, UK", year: "2022", area: "340 m²",
      cover: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1800&q=80", coverLabel: "KESTREL · oast",
      brief: "A 19th-century oast house converted to a primary residence with a glass spine. The kilns stayed; everything between was rewritten.",
      gallery: [
        { src: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=2000&q=80", l: "01 · spine" },
        { src: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=2000&q=80", l: "02 · living" },
        { src: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=2000&q=80", l: "03 · study" }
      ]},
    { id: "zamalek", name: "Zamalek Residence", typology: "Renovation", location: "Zamalek, Cairo", year: "2023", area: "295 m²",
      cover: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=80", coverLabel: "ZAMALEK · salon",
      brief: "A belle-époque apartment returned to its plan, with one wall removed and a century of paint with it.",
      gallery: [
        { src: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=2000&q=80", l: "01 · salon" },
        { src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=2000&q=80", l: "02 · bedroom" }
      ]},
    { id: "marsa", name: "Marsa Matruh House", typology: "New Build", location: "Marsa Matruh, Egypt", year: "2025", area: "520 m²",
      cover: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1800&q=80", coverLabel: "MARSA · facade",
      brief: "A summer residence buried half a metre into the dune, designed to disappear from the road and unfold toward the sea.",
      gallery: [
        { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=80", l: "01 · approach" },
        { src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=2000&q=80", l: "02 · pool" }
      ]}
  ],

  // Map "What We Do" item ids -> short slug for routing
  whatwedoSlugs: {
    "New Builds": "new-build",
    "Extensions": "extension",
    "Loft Conversion": "loft",
    "Garage Conversion": "garage",
    "Planning Permission": "planning",
    "Interior Design": "interior",
    "Landscape": "landscape",
    "Commercial": "commercial"
  },

  studio: {
    tagline: "Award winning, architectural and interior design studio",
    whoBg: "assets/about-banner.png",
    whoText: "Design-Itude Associates is an award-winning architectural and interior design studio founded by Ahmed Youssef, an architect with two decades of experience. Our mission is to create bespoke, high-quality spaces that inspire and reflect the unique lifestyles of each client. Recognising a gap in the industry for personalised, high-end design, Design-Itude was founded to provide modern architectural solutions blending elegance, functionality, and safety into every project.\n\nWith studios in London, Kent, Surrey, and Egypt, our team has the expertise to bring transformative designs to life. Whether reshaping a single room or crafting tailored interiors, we deliver a personalised touch to every project.",
    principal: {
      name: "AHMED YOUSSEF",
      role: "PRINCIPLE",
      bio: [
        "Ahmed attributes his passion for sustainability to his homeland's legacy and London's rich history. From energy efficient and water-saving systems to using native vegetation in landscaping, DiA integrates sustainable practices at every stage. This commitment isn't only about environmental stewardship; it's a catalyst for innovation. The firm's sustainable designs testify to the fact that grand, beautiful spaces can also be ecologically mindful.",
        "A core part of DiA's success is its dedication to client collaboration. Every project begins with listening to the client's vision and encouraging an open dialogue so DiA can bring that vision to life. Ahmed asserts the process is about trust because the best outcomes are delivered when clients feel understood and valued.",
        "Ahmed advises young designers to remain curious, fearless, and open to learning. Mistakes are part of the journey and are often the turning points that lead to the most remarkable breakthroughs. Beyond technical skills, he emphasises the importance of communication, creativity, and resilience as traits essential for bringing ambitious visions to life."
      ]
    },
    teamIntro: "At Design-Itude Associates (DiA), our team is the heart of our creative vision and the foundation of our success. We are a dedicated group of residential architects, interior designers, and project managers collaborating across our offices in London, Kent, and Cairo. Together, we bring each client's unique vision to life with bespoke design solutions tailored to luxury homes.",
    differentiators: [
      { t: "AWARD-WINNING DESIGN" },
      { t: "INTERNATIONAL REACH WITH LOCAL EXPERTISE" },
      { t: "COLLABORATIVE PROCESS" },
      { t: "TAILORED SOLUTIONS" }
    ],
    designPurpose: [
      "At Design-Itude, we believe that design should adapt to the client. Each project is guided by a commitment to creating functional, modern, and stunning spaces tailored to those who inhabit them. From planning applications to custom interiors, our work blends creativity with precision to meet your vision.",
      "We are passionate about transforming environments into reflections of our clients' identities while maintaining a commitment to social responsibility. Our designs aim to enhance spaces and positively impact both people and places."
    ],
    yourVision: "Discover how our team's passion and expertise can bring your vision to life. Explore our portfolio to see the results of our work, and contact us today to schedule a consultation with one of our expert architects.",
    coreValues: ["PROFESSIONALISM", "PIONEERING", "RELIABILITY", "CONSCIOUSNESS", "CREATIVITY"],
    ctaBg: "assets/cta-band.png"
  },

  offices: [
    { city: "LONDON, UK", addr: "124 CITY ROAD, EC1V 2NX", tel: "+44 (0) 207 459 4964", mail: "hello.uk@dia-uk.com" },
    { city: "KENT, UK",   addr: "Turkey Mill, 1 James Whatman, ME14 5PP", tel: "+44 (0) 207 459 4964", mail: "hello.uk@dia-uk.com" },
    { city: "CAIRO, EG",  addr: "311 HYDE PARK BUSINESS PLAZA, NEW CAIRO", tel: "(+20) 222 222 753", mail: "hello.eg@dia-eg.com" }
  ],

  sitemap: ["HOME", "ABOUT US", "HOW DO WE DO?", "OUR WORK", "OUR SERVICES", "CONTACT US"]
};
