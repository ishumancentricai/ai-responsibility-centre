// Central content store for the ARC site.
// Sourced & translated from the ARC presentation (Prof. Dr. Niklas Kühl).

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/policy', label: 'Policy Advisory' },
  { to: '/roadmap', label: 'Events & Milestones' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
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
  body:
    'As computer scientists, engineers, legal professionals and philosophers, we advance algorithms and systems and make responsibility directly actionable, instead of merely demanding it.',
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
    body: 'Evidence for regulation — through regular exchange with political actors on AI regulation, including the EU AI Act, EU guidelines and as a Bavarian AI expert.',
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
    body: 'AI systems make mistakes. Trust needs evidence, control and clear limits.',
  },
  {
    title: 'Design gap',
    body: 'The AI Act is adopted, but practicable standards, testing procedures and evidence are still missing.',
  },
  {
    title: 'Structure gap',
    body: 'Safe AI needs technology, law and the social sciences — effectively united at one interface.',
  },
]

// Number of doctoral researchers in the ARC team (used for dynamic stats).
export const DOCTORAL_RESEARCHERS = 6

// Upcoming events where ARC participates — chronological (soonest first).
export const EVENTS = [
  {
    date: 'Jul 2026',
    title: 'ICML 2026',
    location: 'Seoul, South Korea',
    type: 'Conference',
    blurb: 'Presenting “Reading Between the Tokens: Improving Preference Predictions through Mechanistic Forecasting”.',
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
        paper: 'Reading Between the Tokens: Improving Preference Predictions through Mechanistic Forecasting',
        venue: 'International Conference on Machine Learning (ICML), Seoul',
        year: 2026,
        href: 'https://arxiv.org/abs/2602.02882',
      },
      {
        track: 'Policy',
        title: 'EU Commission mandate — EU AI Act, Article 14',
        text: 'Appointed to help shape the guidelines for human oversight under Article 14 of the EU AI Act — turning principle into testable practice.',
      },
    ],
  },
  {
    period: 'June 2026',
    items: [
      {
        track: 'Research',
        title: 'Accepted at FAccT ’26 — Melbourne',
        text: '“Normative Common Ground Replication (NormCoRe): Replication-by-Translation for Studying Norms in Multi-Agent AI” — a framework that translates human-subject experiments into multi-agent AI environments to study how norms emerge.',
        authors: 'Deck, L., Allmendinger, S., Müller, L., & Kühl, N.',
        paper: 'Normative Common Ground Replication (NormCoRe): Replication-by-Translation for Studying Norms in Multi-Agent AI',
        venue: 'ACM Conference on Fairness, Accountability, and Transparency (FAccT), Melbourne',
        year: 2026,
        href: 'https://arxiv.org/abs/2603.11974',
      },
      {
        track: 'Funding',
        title: 'Kick-off — AI Responsibility Centre (ARC)',
        text: 'Launch of the ARC at the University of Bayreuth, with a team of 6 doctoral researchers and a focus on building responsible AI in research, policy and practice.',
      },
    ],
  },
]

// Headline numbers derived from the timeline + events, so they stay in sync
// automatically as milestones and events are added or removed. Shared by the
// Home and Events & Milestones pages so the two always show the same figures.
const milestoneItems = MILESTONES.flatMap((group) => group.items)
const countTrack = (track) => milestoneItems.filter((i) => i.track === track).length
const countEventType = (re) => EVENTS.filter((e) => re.test(e.type)).length
const isWorkshop = (text = '') => /workshop/i.test(text)

export const HIGHLIGHTS = [
  {
    value: countTrack('Research') + countEventType(/conference/i),
    label: 'Research traction',
    sub: 'Papers & conference talks',
  },
  {
    value: countTrack('Policy') + countEventType(/policy/i),
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
    label: 'Doctoral researchers',
    sub: 'Interdisciplinary team',
  },
]

export const PERSON = {
  name: 'Prof. Dr. Niklas Kühl',
  role: 'W3 Professor of Information Systems and Human-centric Artificial Intelligence',
  affiliation:
    'Faculty of Law, Business and Economics, University of Bayreuth · Fraunhofer FIT (Business Analytics)',
  // Optional photo: put the file in public/team/ and set e.g. '/team/niklas-kuehl.jpg'.
  // Leave empty to show the initials tile instead.
  image: '',
  timeline: [
    { year: '2017', text: 'Dr.-Ing. in Information Systems (summa cum laude)' },
    {
      year: '2017–2023',
      text: 'Head of the Applied AI Lab & habilitation in Applied Computer Science (KIT). Research stays at the MIT-IBM Watson AI Lab, UT Austin, the Wharton School (University of Pennsylvania) and the University of Auckland.',
    },
    { year: '2020–2023', text: 'Managing Consultant Data Science, IBM' },
    {
      year: 'since 2023',
      text: 'W3 Professor at the University of Bayreuth, leading a team of 8 doctoral researchers. Collaboration with CMU, Stanford, the Wharton School and LMU. Publications in leading outlets (e.g. ACM CSUR, EJIS, ICML, CVPR).',
    },
    { year: 'since 2023', text: 'Group lead “Business Analytics”, Fraunhofer FIT' },
    {
      year: '2023',
      text: 'Committee for Science and the Arts on “Opportunities and risks of AI in academia”',
    },
    {
      year: '2026',
      text: 'Mandate from the EU Commission to help shape guidelines for the Article 14 of the EU AI Act',
    },
  ],
  collaborators: ['Fraunhofer FIT', 'LMU Munich', '...'],
}

// Further principal members of the ARC interdisciplinary faculty.
export const TEAM = [
  {
    name: 'Prof. Dr. Lena Kästner',
    initials: 'LK',
    image: '', // e.g. '/team/lena-kaestner.jpg' (file in public/team/)
    role: 'Professor of Philosophy, Computer Science and Artificial Intelligence',
    affiliation:
      'Faculty of Humanities and Social Sciences, University of Bayreuth',
    focus: [
      'Philosophy of AI',
      'Explainable AI (XAI)',
      'Philosophy of mind & cognitive science',
      'Scientific explanation',
    ],
    bio: 'Lena Kästner works at the intersection of philosophy and AI, with a focus on explainability and the foundations of natural and artificial cognition. She leads the “Explainable Intelligent Systems” project and brings the conceptual and ethical lens to responsible AI at ARC.',
    href: 'https://www.phil.uni-bayreuth.de/en/people/kaestner/index.php',
  },
  {
    name: 'Prof. Dr. Christian Rückert',
    initials: 'CR',
    image: '', // e.g. '/team/christian-rueckert.jpg' (file in public/team/)
    role: 'Professor of Criminal Law, Criminal Procedure Law and IT Criminal Law',
    affiliation: 'Faculty of Law and Economics, University of Bayreuth',
    focus: [
      'IT criminal law',
      'Digital evidence',
      'Cybercrime & forensic informatics',
      'European criminal law',
    ],
    bio: 'Christian Rückert holds the Chair for Criminal Law, Criminal Procedure Law and IT Criminal Law. His work on digital data as evidence, cybercrime and forensic informatics anchors ARC’s legal expertise — directly relevant to projects on AI in law enforcement and deepfakes in investigations.',
    href: 'https://www.strafrecht2.uni-bayreuth.de/de/team/Prof_-Dr_-Christian-Rueckert/index.php',
  },
]

export const CONTACT = {
  institution: 'University of Bayreuth',
  chair:
    'Chair of Information Systems and Human-centric Artificial Intelligence',
  links: [
    { label: 'wi.uni-bayreuth.de', href: 'https://www.wi.uni-bayreuth.de/en/team/niklas_kuehl/index.php' },
    { label: 'wi.fit.fraunhofer.de', href: 'https://www.fit.fraunhofer.de/en.html' },
  ],
}

// ---------------------------------------------------------------------------
// Legal data for the Impressum (§ 5 DDG, § 18 MStV) and Datenschutzerklärung
// (DSGVO / BayDSG). Values wrapped in ⟨…⟩ are placeholders — please confirm or
// replace them before the site goes live. The rest are public, stable facts.
// ---------------------------------------------------------------------------
export const LEGAL = {
  // Diensteanbieter / Verantwortlicher
  provider: {
    name: 'Universität Bayreuth',
    legalForm: 'Körperschaft des öffentlichen Rechts',
    address: ['Universitätsstraße 30', '95447 Bayreuth', 'Deutschland'],
    representedBy: 'den Präsidenten der Universität Bayreuth, ⟨Name des Präsidenten⟩',
    phone: '+49 921 55 4756',
    email: 'kuehl@uni-bayreuth.de',
    vatId: 'DE 811 264 317',
    supervisoryAuthority:
      'Bayerisches Staatsministerium für Wissenschaft und Kunst, Salvatorstraße 2, 80333 München',
  },
  // Inhaltlich verantwortlich nach § 18 Abs. 2 MStV
  contentResponsible: {
    name: 'Prof. Dr. Niklas Kühl',
    unit: 'Lehrstuhl für Wirtschaftsinformatik und humanzentrische Künstliche Intelligenz',
    address: ['Universität Bayreuth', 'Universitätsstraße 30', '95447 Bayreuth'],
    email: 'kuehl@uni-bayreuth.de',
  },
  // Behördliche/r Datenschutzbeauftragte/r
  dpo: {
    name: 'Behördliche/r Datenschutzbeauftragte/r der Universität Bayreuth',
    address: ['Universität Bayreuth', 'Universitätsstraße 30', '95447 Bayreuth'],
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
    privacyUrl: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
  },
  lastUpdated: 'Juni 2026',
}
