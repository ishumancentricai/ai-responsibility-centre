// Central content store for the ARC site.
// Sourced & translated from the ARC presentation (Prof. Dr. Niklas Kühl).

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/policy', label: 'Policy Advisory' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export const VISION = {
  statement:
    'Productive AI systems that put people at the centre — and stay committed to the common good.',
  qualities: ['safe', 'transparent', 'fair', 'sovereign', 'accountable'],
  ambition:
    'ARC will become a leading centre for Responsible AI in Germany and Europe: the point of contact for research, policy and practice when the question is no longer only what AI can do — but how we shape it, for whom, and to what end.',
}

export const MISSION = {
  headline: 'We don’t just call for responsible AI — we build it.',
  body:
    'As computer scientists, engineers, lawyers and philosophers, we advance algorithms and systems and make responsibility directly actionable, instead of merely demanding it.',
  linuxMoment:
    'The Linux moment of AI: we help shape the common-good path against dependence on a few providers — towards sovereignty for industry and society through open standards.',
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

export const STATS = [
  { value: '75+', label: 'Publications in three years', sub: 'Top international outlets in IS, CS & HCI' },
  { value: '€3.4M+', label: 'Third-party funding', sub: 'incl. €2.3M from industry projects' },
  { value: '8', label: 'Doctoral researchers', sub: 'Interdisciplinary team' },
  { value: 'Art. 14', label: 'EU AI Act mandate', sub: 'EU Commission, human oversight (2026)' },
]

export const RESEARCH_PROJECTS = [
  {
    name: 'FairLEA',
    focus: 'Fair AI in law enforcement',
    body: 'Interdisciplinary research on fairness in AI systems used for law enforcement.',
  },
  {
    name: 'FoGG',
    focus: 'Deepfakes in investigations',
    body: 'Examining the role and detection of deepfakes in criminal investigations.',
  },
  {
    name: 'RAIS²',
    focus: 'Responsible AI in science & society',
    body: 'Responsible AI across science and society, in cooperation with LMU and the Wharton School.',
  },
]

export const ROADMAP = [
  {
    month: 'Jul 2026',
    items: [
      { track: 'Research', text: 'ICML — presentation' },
      { track: 'Application', text: 'Kick-off ARC — public launch' },
      { track: 'Policy', text: 'Guidelines on Human Oversight (EU AI Act)' },
    ],
  },
  {
    month: 'Aug 2026',
    items: [
      { track: 'Research', text: 'AAAI — submission' },
      { track: 'Application', text: 'Workshop “Develop” — methods for responsible-AI tooling' },
    ],
  },
  {
    month: 'Sep 2026',
    items: [
      { track: 'Research', text: 'CHI & ICLR — submission · ECAF — presentation' },
      { track: 'Funding', text: 'Funding application BMFTR — Transformation in Democracy' },
    ],
  },
  {
    month: 'Oct 2026',
    items: [
      { track: 'Research', text: 'IUI — submission' },
      { track: 'Application', text: 'AI Day UBT — campus-wide theme day with keynotes & demos' },
      { track: 'Policy', text: 'Kick-off ARC Roundtable Series with decision-makers' },
      { track: 'Funding', text: 'Funding application DFG / Weave — research grant' },
    ],
  },
  {
    month: 'Nov 2026',
    items: [
      { track: 'Research', text: 'ECIS — submission' },
      { track: 'Application', text: 'Workshop “Operationalising Human Oversight”' },
      { track: 'Funding', text: 'Funding application ZIM / BMWE — R&D cooperation project' },
    ],
  },
  {
    month: 'Dec 2026',
    items: [
      { track: 'Research', text: 'IJCAI, FAccT & ICML — submission' },
    ],
  },
]

export const ROADMAP_TARGETS = [
  { value: '6', label: 'Papers' },
  { value: '5', label: 'Workshops' },
  { value: '25', label: 'Policy talks' },
  { value: '3', label: 'Funding applications' },
]

export const LANDSCAPE = [
  {
    level: 'EU',
    role: 'Regulation',
    nodes: ['EU AI Act', 'GPAI', 'AI regulation study'],
  },
  {
    level: 'Federal (Bund)',
    role: 'Funding',
    nodes: ['HTAD', 'KI4KMU', 'KI-MIG', 'KoKIVO'],
  },
  {
    level: 'Bavaria',
    role: 'Sovereignty',
    nodes: ['BayernKI', 'baiosphere', 'MCML', 'Bavarian AI Council', 'Bavarian AI Agency', 'KI Transfer Plus', 'AI-BAY'],
  },
]

export const PERSON = {
  name: 'Prof. Dr. Niklas Kühl',
  role: 'W3 Professor of Information Systems and Human-centric Artificial Intelligence',
  affiliation:
    'Faculty of Law, Business and Economics, University of Bayreuth · Fraunhofer FIT (Business Analytics)',
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
      text: 'Mandate from the EU Commission to help shape Article 14 of the EU AI Act',
    },
  ],
  collaborators: ['MIT-IBM Watson AI Lab', 'Stanford', 'CMU', 'Wharton School', 'LMU', 'University of Auckland', 'UT Austin'],
}

export const CONTACT = {
  institution: 'University of Bayreuth · Fraunhofer FIT',
  chair:
    'Chair of Information Systems and Human-centric Artificial Intelligence',
  links: [
    { label: 'wi.uni-bayreuth.de', href: 'https://www.wi.uni-bayreuth.de' },
    { label: 'wi.fit.fraunhofer.de', href: 'https://www.wi.fit.fraunhofer.de' },
  ],
}
