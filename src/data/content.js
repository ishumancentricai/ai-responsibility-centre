// Central content store for the ARC site.
// Sourced & translated from the ARC presentation (Prof. Dr. Niklas Kühl).

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  // Policy Advisory is temporarily hidden from the menu until activated.
  // The /policy route still works (shows a "coming soon" page).
  { to: '/roadmap', label: 'Events & Milestones' },
  { to: '/team', label: 'Team' },
  // Contact is reached via the "Get in touch" button, so it's omitted here.
]

export const VISION = {
  statement:
    'Productive AI systems that put people at the centre — and stay committed to the common good.',
  qualities: ['safe', 'transparent', 'fair', 'sovereign', 'accountable'],
  ambition:
    'ARC is a centre for Responsible AI: the point of contact for research, policy and practice when the question is no longer only what AI can do — but how we shape it, for whom, and to what end.',
}

export const MISSION = {
  headline: 'We don’t just call for responsible AI — we engage.',
  body: 'As information systems researchers, engineers, legal professionals and philosophers, we advance algorithms and systems and make responsibility directly actionable, instead of merely demanding it.',
  linuxMoment:
    'The Linux moment of AI? We help shape the common-good path against dependence on a few providers — towards sovereignty for industry and society through open standards.',
}

export const PILLARS = [
  {
    id: 'research',
    title: 'Research',
    short: 'Published, peer-validated science.',
    body: 'Published science — validated at conferences, workshops and journals, in leading international outlets of information systems, computer science and human–computer interaction.',
  },
  {
    id: 'policy',
    title: 'Policy Advisory',
    short: 'Evidence for regulation.',
    body: 'Evidence for regulation — through regular exchange with political actors on AI regulation.',
  },
  {
    id: 'application',
    title: 'Visibility & Application',
    short: 'Responsible AI, made tangible.',
    body: 'Making responsible AI tangible — in industry projects, applications and workshops that turn principles into working practice.',
  },
]

export const STRATEGY_PRINCIPLES = [
  {
    title: 'Walk the Talk',
    body: 'We build and test real responsible-AI applications.',
  },
  {
    title: 'Interdisciplinary',
    body: 'We actively bring together technology, law and the social sciences.',
  },
  {
    title: 'Practice-oriented',
    body: 'We deploy AI applications jointly with industry and policy.',
  },
]

export const GAPS = [
  {
    title: 'Trust gap',
    body: 'AI systems make mistakes, yet trust in them too often rests on assumption rather than evidence, control or clear limits. Our goal is to make that trust earned — grounded in verifiable evidence, meaningful oversight and well-defined boundaries.',
  },
  {
    title: 'Design gap',
    body: 'The AI Act is in force, but the practicable standards, testing procedures and evidence needed to implement it are still missing. Our goal is to build the methods, tests and evidence that turn regulation into deployable practice.',
  },
  {
    title: 'Structure gap',
    body: 'Safe AI needs technology, law and the social sciences, yet these disciplines rarely meet at a single interface. Our goal is to unite them in one centre, so responsible AI is built rather than merely demanded.',
  },
]

// Funding bodies shown at the foot of the home page.
export const FUNDERS = [
  {
    name: 'Bavarian Ministry of Science, Research and Art',
    logo: '/funding/stmwk.svg',
    href: 'https://www.stmwk.bayern.de/',
  },
  {
    name: 'University of Bayreuth',
    logo: '/funding/uni-bayreuth.png',
    href: 'https://www.uni-bayreuth.de/',
  },
]

// Upcoming events where ARC participates — chronological (soonest first).
export const EVENTS = [
  {
    date: 'Jul 2026',
    title: 'ICML 2026',
    location: 'Seoul, South Korea',
    type: 'Conference',
    blurb:
      'Presenting “Reading Between the Tokens: Improving Preference Predictions through Mechanistic Forecasting”.',
    href: 'https://icml.cc/',
  },
  {
    date: 'Sep 2026',
    title: 'AI Day UBT',
    location: 'University of Bayreuth',
    type: 'Campus event',
    blurb: 'Campus-wide theme day on AI with keynotes and live demos.',
    href: 'https://www.rais2.uni-bayreuth.de/de/events/ai_day_2026/index.html',
  },
]

// Reverse-chronological track record: the most recent achievement is first,
// so the page reads from the present (top) back in time (scrolling down).
export const MILESTONES = [
  {
    period: 'July 2026',
    items: [
      {
        track: 'Research',
        title: 'Accepted at ICML ’26 — Seoul',
        text: '“Reading Between the Tokens: Improving Preference Predictions through Mechanistic Forecasting” — showing that a model’s internal representations improve human-preference predictions over surface-level outputs.',
        authors: 'Ball, S., Allmendinger, S., Kühl, N., & Kreuter, F.',
        paper:
          'Reading Between the Tokens: Improving Preference Predictions through Mechanistic Forecasting',
        venue: 'International Conference on Machine Learning (ICML), Seoul',
        year: 2026,
        href: 'https://arxiv.org/abs/2602.02882',
      },
      {
        track: 'Policy',
        title: 'AI Governance Advisory — Regulatory Oversight Frameworks',
        text: 'Contributing to the development of guidelines for human oversight of AI systems within an emerging EU regulatory framework — turning principle into testable practice.',
      },
    ],
  },
  {
    period: 'June 2026',
    items: [
      {
        track: 'Research',
        title: 'Presented at ECIS ’26 — Milan',
        text: '“Where Are the Humans? A Scoping Review of Fairness in Multi-Agent AI Systems” — finding that fairness in multi-agent AI is often addressed superficially and arguing it should be embedded throughout development.',
        authors: 'Allmendinger, S., Deck, L., & Müller, L.',
        paper:
          'Where Are the Humans? A Scoping Review of Fairness in Multi-Agent AI Systems',
        venue: 'European Conference on Information Systems (ECIS), Milan',
        year: 2026,
        href: 'https://aisel.aisnet.org/ecis2026/litrev/litrev/6/',
      },
      {
        track: 'Research',
        title: 'Accepted at FAccT ’26 — Montreal',
        text: '“Normative Common Ground Replication (NormCoRe): Replication-by-Translation for Studying Norms in Multi-Agent AI” — a framework that translates human-subject experiments into multi-agent AI environments to study how norms emerge.',
        authors: 'Deck, L., Allmendinger, S., Müller, L., & Kühl, N.',
        paper:
          'Normative Common Ground Replication (NormCoRe): Replication-by-Translation for Studying Norms in Multi-Agent AI',
        venue:
          'ACM Conference on Fairness, Accountability, and Transparency (FAccT), Montreal',
        year: 2026,
        href: 'https://arxiv.org/abs/2603.11974',
      },
      {
        track: 'Announcement',
        title: 'Kick-off — AI Responsibility Centre (ARC)',
        text: 'Launch of the ARC at the University of Bayreuth, with a team of 6 doctoral researchers and a focus on building responsible AI in research, policy and practice.',
      },
    ],
  },
]

export const PERSON = {
  name: 'Prof. Dr. Niklas Kühl',
  role: 'Professor of Information Systems and Human-centric Artificial Intelligence',
  affiliation:
    'Faculty of Law, Business and Economics, University of Bayreuth · Fraunhofer FIT (Business Analytics)',
  // Optional photo: put the file in public/team/ and set e.g. '/team/niklas-kuehl.jpg'.
  // Leave empty to show the initials tile instead.
  image: '/team/niklas-kuehl.jpeg',
  links: {
    scholar: 'https://scholar.google.com/citations?user=79KpdDQAAAAJ',
    linkedin: 'https://www.linkedin.com/in/niklaskuehl/',
    orcid: 'https://orcid.org/0000-0001-6750-0876',
    researchgate: 'https://www.researchgate.net/profile/Niklas-Kuehl',
    website: 'https://nkukit.github.io/',
  },
  timeline: [
    { year: '2017', text: 'Dr.-Ing. in Information Systems (summa cum laude)' },
    {
      year: '2017–2023',
      text: 'Head of the Applied AI in Services Lab & Habilitation in Applied Computer Science (KIT). Research stays at the MIT-IBM Watson AI Lab, UT Austin, the Wharton School (University of Pennsylvania) and the University of Auckland.',
    },
    { year: '2020–2023', text: 'Managing Consultant Data Science, IBM' },
    {
      year: 'since 2023',
      text: 'W3 Professor at the University of Bayreuth. Collaboration with CMU, the Wharton School and LMU.',
    },
    {
      year: 'since 2023',
      text: 'Group lead “Business Analytics”, Fraunhofer FIT, Branch Information Systems',
    },
    {
      year: 'since 2023',
      text: 'Director FIM Research Institute for Information Management',
    },
  ],
  collaborators: ['Fraunhofer FIT', 'LMU Munich', '...'],
}

// Further principal members of the ARC interdisciplinary team.
export const TEAM = [
  {
    name: 'Prof. Dr. Lena Kästner',
    initials: 'LK',
    image: '/team/lena-kaestner.png',
    role: 'Professor of Philosophy, Computer Science and Artificial Intelligence',
    affiliation: 'Faculty of Humanities and Social Sciences, University of Bayreuth',
    focus: [
      'Philosophy of AI',
      'Explainable AI (XAI)',
      'Philosophy of mind & cognitive science',
      'Scientific explanation',
    ],
    bio: 'Lena Kästner works at the intersection of philosophy and AI, with a focus on explainability and the foundations of natural and artificial cognition. She leads the “Explainable Intelligent Systems” project and brings the conceptual and ethical lens to responsible AI at ARC.',
    links: {
      scholar: 'https://scholar.google.com/citations?user=HoOWtRgAAAAJ',
      linkedin: 'https://de.linkedin.com/in/lenakaestner',
      website: 'https://www.phil.uni-bayreuth.de/en/people/kaestner/index.php',
    },
  },
  {
    name: 'Prof. Dr. Christian Rückert',
    initials: 'CR',
    image: '/team/christian-rueckert.jpg',
    role: 'Professor of Criminal Law, Criminal Procedure Law and IT Criminal Law',
    affiliation: 'Faculty of Law and Economics, University of Bayreuth',
    focus: [
      'IT criminal law',
      'Digital evidence',
      'Cybercrime & forensic informatics',
      'European criminal law',
    ],
    bio: 'Christian Rückert holds the Chair for Criminal Law, Criminal Procedure Law and IT Criminal Law. His work on digital data as evidence, cybercrime and forensic informatics anchors ARC’s legal expertise — directly relevant to projects on AI in law enforcement and deepfakes in investigations.',
    links: {
      linkedin: 'https://www.linkedin.com/in/christian-r%C3%BCckert-296122189/',
      website:
        'https://www.strafrecht2.uni-bayreuth.de/de/team/Prof_-Dr_-Christian-Rueckert/index.php',
    },
  },
]

// Doctoral researchers. Photos go in public/team/ (set `image`, else initials
// show). `orcid` is left blank until confirmed — only links with a value render.
export const PHDS = [
  {
    name: 'Domenique Zipperling',
    initials: 'DZ',
    group: 'cs',
    image: '/team/domenique-zipperling.jpeg',
    research:
      'Causally grounded AI in human–AI decision-making, with a focus on high-stakes settings: how can AI-supported decisions move beyond predictive performance toward fair, transparent, and socially responsible outcomes.',
    links: {
      scholar: 'https://scholar.google.com/citations?user=tmkXQUEAAAAJ',
      linkedin: 'https://www.linkedin.com/in/domenique-zipperling/',
      orcid: 'https://orcid.org/0009-0003-4598-9051',
      researchgate: 'https://www.researchgate.net/profile/Domenique-Zipperling-2',
    },
  },
  {
    name: 'Simeon Allmendinger',
    initials: 'SA',
    group: 'cs',
    image: '/team/simeon-allmendinger.jpeg',
    research:
      'AI-assisted decision-making, multi-agent AI and generative AI — including fairness in multi-agent systems.',
    links: {
      scholar: 'https://scholar.google.com/citations?user=b6ShzNwAAAAJ',
      linkedin: 'https://www.linkedin.com/in/simeon-allmendinger-279b2018b/',
      orcid: 'https://orcid.org/0009-0005-8741-7734',
      researchgate: 'https://www.researchgate.net/profile/Simeon-Allmendinger',
    },
  },
  {
    name: 'Luca Deck',
    initials: 'LD',
    group: 'cs',
    image: '/team/luca-deck.jpeg',
    research:
      'Algorithmic fairness, explainable and ethical AI — including the implications of the EU AI Act and deepfakes.',
    links: {
      scholar: 'https://scholar.google.com/citations?user=3hac5y8AAAAJ',
      linkedin: 'https://de.linkedin.com/in/luca-deck',
      orcid: 'https://orcid.org/0000-0003-3773-2769',
      researchgate: 'https://www.researchgate.net/profile/Luca-Deck',
    },
  },
  {
    name: 'Lars Böcking',
    initials: 'LB',
    group: 'cs',
    image: '/team/lars-boecking.jpeg',
    research:
      'Data-centric AI for multivariate time series with varying temporal and spatial resolution, and privacy-preserving algorithm selection.',
    links: {
      scholar: 'https://scholar.google.com/citations?user=nEoKGgUAAAAJ',
      linkedin: 'https://www.linkedin.com/in/boecking/',
      orcid: '',
      researchgate: 'https://www.researchgate.net/profile/Lars-Boecking',
    },
  },
  {
    name: 'Leopold Müller',
    initials: 'LM',
    group: 'cs',
    image: '/team/leopold-mueller.jpeg',
    research:
      'Human–AI collaboration and language models — including LLM-enhanced prompt engineering and small language models for technical requirements.',
    links: {
      scholar: 'https://scholar.google.de/citations?user=qhVY6gwAAAAJ',
      linkedin: '',
      orcid: '',
      researchgate: '',
    },
  },
  {
    name: 'Victor Kolominsky-Rabas',
    initials: 'VK',
    group: 'cs',
    image: '/team/victor-kolominsky-rabas.jpeg',
    research:
      'Machine learning, neural networks and computer vision, with a focus on human-centric AI and its real-world application.',
    links: {
      scholar: '',
      linkedin: '',
      orcid: '',
      researchgate: 'https://www.researchgate.net/profile/Victor-Kolominsky-Rabas-2',
    },
  },
  {
    name: 'Anton Hummel',
    initials: 'AH',
    group: 'cs',
    image: '/team/anton-hummel.jpeg',
    research:
      'Explainable AI and regulatory compliance — aligning the EU AI Act with clinical decision support and human oversight of black-box models.',
    links: {
      scholar: '',
      linkedin: 'https://de.linkedin.com/in/anton-hummel',
      orcid: '',
      researchgate: 'https://www.researchgate.net/profile/Anton-Hummel',
    },
  },
  {
    name: 'Jannek Sekowski',
    initials: 'JS',
    group: 'cs',
    image: '/team/jannek-sekowski.jpg',
    research:
      'Designing and evaluating interactive AI systems and natural-language interfaces for human–AI interaction.',
    links: {
      scholar: 'https://scholar.google.com/citations?user=rf9UGl8AAAAJ',
      linkedin: 'https://www.linkedin.com/in/jannek-sekowski-59327b251/',
      orcid: '',
      researchgate: '',
    },
  },
  {
    name: 'Valentin Mayer',
    initials: 'VM',
    group: 'cs',
    image: '/team/valentin-mayer.jpg',
    research:
      'Management and governance of AI in organizations – including the regulatory compliance with the EU AI Act.',
    links: {
      scholar: 'https://scholar.google.com/citations?user=741P4pkAAAAJ',
      linkedin: 'https://www.linkedin.com/in/valentin-mayer-a78127199/',
      orcid: 'https://orcid.org/0009-0001-8089-2218',
      researchgate: 'https://www.researchgate.net/profile/Valentin-Mayer',
    },
  },
  {
    name: 'Timo Speith',
    initials: 'TS',
    group: 'phil',
    role: 'Postdoctoral researcher',
    image: '', // e.g. '/team/timo-speith.jpg'
    research:
      'Explainable AI, AI ethics and the philosophy of technology — bridging philosophy and computer science.',
    links: {
      scholar: 'https://scholar.google.de/citations?user=l3QOkFEAAAAJ',
      linkedin: 'https://www.linkedin.com/in/timo-speith/',
      orcid: '',
      researchgate: 'https://www.researchgate.net/profile/Timo-Speith',
    },
  },
  {
    name: 'Astrid Schomäcker',
    initials: 'AS',
    group: 'phil',
    role: 'Postdoctoral researcher',
    image: '', // e.g. '/team/astrid-schomaecker.jpg'
    research:
      'Philosophy of explainable AI — the relationship between explainability, understanding and algorithmic fairness.',
    links: {
      scholar: 'https://scholar.google.com/citations?user=i023olgAAAAJ',
      linkedin: '',
      orcid: '',
      researchgate:
        'https://www.researchgate.net/scientific-contributions/Astrid-Schomaecker-2199553856',
    },
  },
  {
    name: 'Bartosz Radomski',
    initials: 'BR',
    group: 'phil',
    role: 'Postdoctoral researcher',
    image: '', // e.g. '/team/bartosz-radomski.jpg'
    research:
      'Philosophy of cognition and AI — situated cognition, the free-energy principle and theories of adaptivity.',
    links: {
      scholar: '',
      linkedin: '',
      orcid: '',
      researchgate: 'https://www.researchgate.net/profile/Bartosz-Radomski-2',
    },
  },
  {
    name: 'Simon Lobinger',
    initials: 'SL',
    group: 'law',
    role: 'Student assistant',
    image: '', // e.g. '/team/simon-lobinger.jpg'
    research:
      'IT and criminal law aspects of AI — digital evidence and the legal foundations of responsible AI.',
    links: {
      scholar: '',
      linkedin: 'https://www.linkedin.com/in/simon-lobinger-87108926b/',
      orcid: '',
      researchgate: '',
    },
  },
  {
    name: 'Timo Grüneke',
    initials: 'TG',
    group: 'cs',
    image: '', // e.g. '/team/timo-grueneke.jpg'
    research: 'Business & information systems engineering at the FIM Research Center.',
    links: {
      scholar: 'https://scholar.google.com/citations?user=sQeK4QQAAAAJ',
      linkedin: 'https://www.linkedin.com/in/timo-grueneke/',
      orcid: '',
      researchgate: '',
    },
  },
  {
    name: 'Jana Elsner',
    initials: 'JE',
    group: 'law',
    image: '', // e.g. '/team/jana-elsner.jpg'
    research:
      'Criminal law and criminal procedure — the legal dimensions of AI and digital evidence.',
    links: {
      website:
        'https://www.strafrecht2.uni-bayreuth.de/de/team/Wissenschaftliche-Mitarbeitende/index.html',
    },
  },
  {
    name: 'Lorenz Meinen',
    initials: 'LM',
    group: 'law',
    image: '', // e.g. '/team/lorenz-meinen.jpg'
    research:
      'Deepfakes in criminal prosecution — the “For the Greater Good?” (FoGG, bidt) project on digital evidence.',
    links: {
      website:
        'https://www.strafrecht2.uni-bayreuth.de/de/team/Wissenschaftliche-Mitarbeitende/index.html',
    },
  },
  {
    name: 'Raimund Weidlich',
    initials: 'RW',
    group: 'law',
    image: '', // e.g. '/team/raimund-weidlich.jpg'
    research: 'Criminal law, criminal procedure and IT criminal law.',
    links: {
      website:
        'https://www.strafrecht2.uni-bayreuth.de/de/team/Wissenschaftliche-Mitarbeitende/index.html',
    },
  },
]

// Discipline groupings for the doctoral researchers (render order).
export const PHD_GROUPS = [
  { id: 'cs', label: 'Information Systems & AI' },
  { id: 'law', label: 'IT & Criminal Law' },
  { id: 'phil', label: 'Philosophy of AI' },
]

export const CONTACT = {
  institution: 'University of Bayreuth',
  chair: 'Chair of Information Systems and Human-centric Artificial Intelligence',
  email: 'info@ai-responsibility-centre.eu',
  links: [
    {
      label: 'wi.uni-bayreuth.de',
      href: 'https://www.wi.uni-bayreuth.de/en/team/niklas_kuehl/index.php',
    },
    { label: 'wi.fit.fraunhofer.de', href: 'https://www.fit.fraunhofer.de/en.html' },
  ],
}

// ---------------------------------------------------------------------------
// Legal data for the Impressum (§ 5 DDG, § 18 MStV) and Datenschutzerklärung
// (DSGVO / BayDSG). Values wrapped in ⟨…⟩ are placeholders — please confirm or
// replace them before the site goes live. The rest are public, stable facts.
// ---------------------------------------------------------------------------
export const LEGAL = {
  // Diensteanbieter (Impressum) — the University; contact is its general office.
  provider: {
    name: 'Universität Bayreuth',
    legalForm: 'Körperschaft des öffentlichen Rechts',
    address: ['Universitätsstraße 30', '95447 Bayreuth', 'Deutschland'],
    representedBy:
      'den Präsidenten Prof. Dr. Stefan Leible und die Kanzlerin Dr. Nicole Kaiser',
    phone: '+49 (0)921 / 55-0',
    fax: '+49 (0)921 / 55-5290',
    email: 'poststelle@uni-bayreuth.de',
    vatId: 'DE 811 264 317',
    supervisoryAuthority: 'Bayerisches Staatsministerium für Wissenschaft und Kunst',
  },
  // Inhaltlich verantwortlich nach § 18 Abs. 2 MStV — the chair running ARC.
  contentResponsible: {
    name: 'Prof. Dr. Niklas Kühl',
    unit: 'Lehrstuhl für Wirtschaftsinformatik und humanzentrische Künstliche Intelligenz',
    address: ['Universität Bayreuth', 'Universitätsstraße 30', '95447 Bayreuth'],
    phone: '+49 (0)921 / 55-4756',
    email: 'kuehl@uni-bayreuth.de',
  },
  // Verantwortlicher i. S. d. DSGVO (Datenschutz) — represented by the President.
  controller: {
    representedBy: 'den Präsidenten Prof. Dr. Stefan Leible',
    phone: '+49 (0)921 / 55-5201',
    email: 'praesident@uni-bayreuth.de',
  },
  // Behördlicher Datenschutzbeauftragter der Universität Bayreuth.
  dpo: {
    name: 'Jonas Holoubek',
    unit: 'Zentrale Universitätsverwaltung (ZUV), Büro 1.17',
    address: ['Universitätsstraße 30', '95447 Bayreuth'],
    phone: '+49 (0)921 / 55-5335',
    email: 'datenschutz@uni-bayreuth.de',
  },
  // Aufsichtsbehörde für den Datenschutz
  dpa: {
    name: 'Der Bayerische Landesbeauftragte für den Datenschutz (BayLfD)',
    address: ['Wagmüllerstraße 18', '80538 München', 'Deutschland'],
    web: 'https://www.datenschutz-bayern.de',
  },
  // Hosting-Dienstleister
  hosting: {
    provider: 'GitHub, Inc.',
    address: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA',
    service: 'GitHub Pages',
    privacyUrl:
      'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
  },
  lastUpdated: 'Juni 2026',
}

// Number of doctoral researchers — derived from the PHDS list.
export const DOCTORAL_RESEARCHERS = PHDS.length

// Headline numbers derived from the timeline, events and team, so they stay in
// sync automatically as entries are added. Each milestone is counted once by
// its track (no double counting with events). Shared by the Home and
// Events & Milestones pages so the two always show the same figures.
const milestoneItems = MILESTONES.flatMap((group) => group.items)
const countTrack = (track) => milestoneItems.filter((i) => i.track === track).length
const countEventType = (re) => EVENTS.filter((e) => re.test(e.type)).length
const isWorkshop = (text = '') => /workshop/i.test(text)

export const HIGHLIGHTS = [
  {
    value: countTrack('Research'),
    label: 'Research traction',
    sub: 'Peer-reviewed papers',
  },
  {
    value: countTrack('Policy'),
    label: 'Policy involvements',
    sub: 'Mandates & advisory roles',
  },
  {
    value:
      countEventType(/workshop/i) +
      milestoneItems.filter((i) => i.track === 'Workshop' || isWorkshop(i.title)).length,
    label: 'Workshops',
    sub: 'Hands-on methods & training',
  },
  {
    value: DOCTORAL_RESEARCHERS,
    label: 'Researchers',
    sub: 'Interdisciplinary team',
  },
]
