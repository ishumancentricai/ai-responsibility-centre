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

// The five properties ARC works towards: the ones the vision names and the
// only tags a publication may carry — one list under one name, because they
// are one idea. What we say we stand for is what the research is measured
// against, and a property is something you can test for rather than profess.
// `content.test.js` enforces that nothing outside the set is used.
export const RESEARCH_PROPERTIES = [
  'Safe',
  'Fair',
  'Transparent',
  'Sovereign',
  'Accountable',
]

export const VISION = {
  statement:
    'Productive AI systems that put people at the centre — and stay committed to the common good.',
  properties: RESEARCH_PROPERTIES,
  ambition:
    'ARC is a centre for Responsible AI: the point of contact for research, policy and practice when the question is no longer only what AI can do — but how we shape it, for whom, and to what end.',
}

export const MISSION = {
  headline: 'We don’t just call for responsible AI — we build it.',
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
    figure: 'trust',
    body: 'AI systems make mistakes, yet trust in them too often rests on assumption rather than evidence, control or clear limits. Our goal is to make that trust earned — grounded in verifiable evidence, meaningful oversight and well-defined boundaries.',
  },
  {
    title: 'Design gap',
    figure: 'design',
    body: 'The AI Act is in force, but the practicable standards, testing procedures and evidence needed to implement it are still missing. Our goal is to build the methods, tests and evidence that turn regulation into deployable practice.',
  },
  {
    title: 'Structure gap',
    figure: 'structure',
    body: 'Safe AI needs technology, law and the social sciences, yet these disciplines rarely meet at a single interface. Our goal is to unite them in one centre, so responsible AI is built rather than merely demanded.',
  },
]

// Funding bodies shown at the foot of the home page.
export const FUNDERS = [
  {
    name: 'Bavarian Ministry of Science and the Arts (StMWK)',
    logo: '/funding/Stmwk_eng_4C.svg',
    href: 'https://www.stmwk.bayern.de/',
    // The official StMWK logo carries ~20% transparent padding top/bottom, so
    // it needs a taller box than logos that fill their canvas to appear the
    // same optical height as the others.
    logoHeight: 'h-[62px] sm:h-[74px]',
  },
  {
    name: 'University of Bayreuth',
    logo: '/funding/uni-bayreuth.png',
    href: 'https://www.uni-bayreuth.de/',
  },
]

// Named research projects. A milestone carries `project: 'FAIRLEA'` and the
// timeline resolves the badge and link from here, so the project is credited
// the same way everywhere it appears.
export const PROJECTS = {
  FAIRLEA: {
    name: 'FAIRLEA',
    full: 'Fair AI Research for Law Enforcement Agencies',
    funder: 'Volkswagen Foundation',
    href: 'https://fairlea.de',
  },
}

// Upcoming events where ARC participates — chronological (soonest first).
// Optional `image: '/events/<file>.jpg'` turns the card into a photo poster;
// without one the card falls back to a typographic plate in the brand green.
export const EVENTS = [
  {
    date: 'Oct 20, 2026',
    title: 'Impulstag KI & Co.',
    art: 'Digital Nomads Beyond the Cubicle',
    location: 'futurum, Stuttgart',
    type: 'Talk',
    blurb:
      'Niklas Kühl on AI in nursing care — what the technology can and cannot do for the work. Part of Diakonie Baden’s day on AI in the social sector.',
    href: 'https://event.trippus.net/Home/Index/AEAKgIOWcm_ns1jaFGFAcO2KpwCk70fcGBXkYmXHken-nQhj3aWlhWE98fW4wF2ssxYNZrjbQkCY/AEAKgINZnls_2mCMUFdejsfh7oM_TXSipJJ-BRzFEeJiC52ORLoxzAd4gIWgdvZ2iNjhy4y2GvoC/de',
  },
  {
    date: 'Nov 19, 2026, 17:00',
    title: 'bidt Research Conference 2026',
    art: 'Brain Control',
    location: 'Bayerische Akademie der Wissenschaften, Munich',
    type: 'Talk',
    blurb:
      'Closing keynote by Niklas Kühl, “The Meat Proxy”: can anyone calibrate how far to trust what an AI advises? Closes day one of the conference.',
    href: 'https://www.bidt.digital/research-conference-2026/',
  },
  {
    date: 'Dec 13–16, 2026',
    title: 'ICIS 2026',
    // The conference's own mark, shown whole rather than cropped. Used to
    // identify the event we present at — referential use, not endorsement.
    logo: '/events/icis-2026.png',
    location: 'Lisbon, Portugal',
    type: 'Conference',
    blurb:
      'Presenting our paper on collaborative synthetic data: letting organisations detect fraud together without handing over their data.',
    href: 'https://icis2026.aisconferences.org/',
  },
]

// Reverse-chronological track record: the most recent achievement is first,
// so the page reads from the present (top) back in time (scrolling down).
export const MILESTONES = [
  {
    period: 'October 2026',
    items: [
      {
        track: 'Talk',
        title: 'Invited talk — Cybercrime units’ national working meeting',
        text: '“KI, Deepfakes und Herausforderungen bei der Beweiswürdigung im Strafverfahren” — what AI-generated evidence does to the assessment of proof in criminal proceedings, given to the national working meeting of the IuK/cybercrime central offices and coordinators in Bayreuth.',
        authors: 'Prof. Dr. Christian Rückert',
        project: 'FAIRLEA',
      },
      {
        track: 'Policy',
        title: 'AI summit of the Bavarian Digital Ministry',
        text: 'Invited to the ministry’s high-level AI summit to discuss AI regulation alongside Google, IBM, Mistral AI and OpenAI, and experts from TU Munich, the Bavarian AI Council and the Augsburg diocese. The ministry drew its consequences the same day: a Bavarian AI security dialogue meeting at least twice a year, an independent annual AI security report from 2027, a Bavarian AI ethics forum convening in 2026, a public awareness campaign — and a renewed bid to bring the German AI security institute to Bavaria.',
        authors: 'Prof. Dr. Niklas Kühl',
        href: 'https://www.stmd.bayern.de/pressemitteilungen/minister-dr-mehring-zu-ki-muessen-geister-die-wir-rufen-auch-beherrschen--bayerns-digitalminister-zieht-konsequenzen-aus-hochrangigem-ki-gipfel-bayerischer-ki-sicherheitsdialog-jaehrlicher-sicherheitsbericht-ki-ethikkommission-und-breit-angelegte-aufklaerungskampagne--ki-sicherheitsinstitut-soll-nach-bayern',
      },
      {
        track: 'Talk',
        title: 'Keynote at Nokia Bell Labs — Cambridge',
        text: '“Who Presses the Button? Human Oversight of AI Between Claim and Practice” — Article 14 of the EU AI Act asks for a human in the loop, but studies with 136 decision-makers and 101 radiologists show that oversight only works when the system is designed so that person can actually disagree. Hosted by the Cambridge Social Dynamics Team.',
        authors: 'Prof. Dr. Niklas Kühl',
        href: 'https://www.eventbrite.co.uk/e/who-presses-the-button-human-oversight-of-ai-between-claim-and-practice-tickets-2001539238743',
      },
    ],
  },
  {
    period: 'September 2026',
    items: [
      {
        track: 'Research',
        title: 'Accepted at ICIS ’26 — Lisbon',
        text: '“Collaborative Synthetic Data for Privacy-Preserving Financial Fraud Detection Across Organizational Silos” — fraud is rare, so each organisation’s own data is too thin to learn from, yet privacy blocks pooling it. Evaluated across five fraud datasets, collaborative diffusion beats oversampling and local generators at the task that matters, suggesting synthetic data earns its keep less through local realism than through structure that transfers between organisations.',
        authors: 'Allmendinger, S., Zipperling, D., Kibar, B. B., & Kühl, N.',
        paper:
          'Collaborative Synthetic Data for Privacy-Preserving Financial Fraud Detection Across Organizational Silos',
        properties: ['Sovereign', 'Safe'],
        venue: 'International Conference on Information Systems (ICIS), Lisbon',
        year: 2026,
        href: 'https://arxiv.org/abs/2609.33754',
      },
      {
        track: 'Workshop',
        title: '“KI-Governance entmystifiziert” — AI Day UBT',
        text: 'A practical workshop with industry participants on governing AI as it shifts from assistant to actor: the risks that arrive with agentic systems, what regulation actually demands, and how companies implement it. Groups then worked the material through on their own cases — governance framed as the basis for safe innovation rather than as added bureaucracy.',
        authors: 'Curated by Valentin Mayer',
        href: 'https://www.rais2.uni-bayreuth.de/de/events/ai_day_2026/index.html',
      },
      {
        track: 'Talk',
        title: 'Hosted AI Day UBT — keynote “The Meat Proxy”',
        text: 'Hosting the university’s AI Day and opening it with the keynote “The Meat Proxy”, on whether anyone can calibrate how far to trust what an AI advises. Alongside contributions from Lisa Precht (IBM) and Martin Braun (NeuroForge), and a panel on where Upper Franconia, Germany and the EU stand.',
        authors: 'Prof. Dr. Niklas Kühl',
        href: 'https://www.rais2.uni-bayreuth.de/de/events/ai_day_2026/index.html',
      },
      {
        track: 'Research',
        title: 'Published in AI and Ethics',
        text: '“What is AI ethics, and what is it good for? Clarifying debates on AI ethics” — separating the instances of AI ethics (research, education, practice, governance instruments) from the purposes they serve (knowledge, communication, application), so that criticism of “ethics washing” lands on specific practices instead of dismissing the field as a whole.',
        authors:
          'Schomäcker, A., Speith, T., Deck, L., Helfer, T., Zhang, H., & Kästner, L.',
        paper:
          'What is AI ethics, and what is it good for? Clarifying debates on AI ethics',
        properties: ['Accountable', 'Transparent'],
        venue: 'AI and Ethics 6(5), Article 528',
        year: 2026,
        href: 'https://doi.org/10.1007/s43681-026-01326-6',
      },
      {
        track: 'Talk',
        title: 'Invited talk — Cybercrime Workshop, GRK 2475',
        text: '“AI and Deepfakes in the Evaluation of Evidence and the Establishment of Suspicion in Criminal Cases” — when a deepfake can be told from evidence, and what that does to suspicion and proof. Given at the annual workshop of DFG Research Training Group 2475 “Cybercrime and Forensic Computing” at Forschungscampus Waischenfeld.',
        authors: 'Prof. Dr. Christian Rückert',
        project: 'FAIRLEA',
        href: 'https://www.cybercrime.fau.de/',
      },
      {
        track: 'Talk',
        title: 'Keynote at Brains on Silicon ’26 — Dresden',
        text: '“KI-Ökosysteme erfolgreich aufbauen – und Responsible AI in die Praxis bringen” — a joint keynote with BAIOSPHERE CEO Michael Klimke on how Bavaria’s AI network links research, industry and policy, and what it takes to put Responsible AI into practice.',
        // YouTube id, played only on click; the poster is self-hosted so the
        // page opens no connection to Google until the visitor presses play.
        video: 'cZoYgR4KS7U',
        videoPoster: '/video/brains-on-silicon-2026.jpg',
        href: 'https://brainsonsilicon.com/',
      },
      {
        track: 'Research',
        title: 'Presented at ECAF ’26 — Ghent',
        text: '“Data-Centric Algorithmic Fairness: A Systematic Review of Data-Level Interventions for Algorithmic Fairness” — a systematic review of 79 papers mapping data-level fairness interventions into data refinement and data extension strategies, and proposing a unified data-centric fairness framework.',
        authors: 'Deck, L., Zipperling, D., Jessat, L., & Kühl, N.',
        paper:
          'Data-Centric Algorithmic Fairness: A Systematic Review of Data-Level Interventions for Algorithmic Fairness',
        properties: ['Fair'],
        venue: 'European Conference on Algorithmic Fairness (ECAF), Ghent',
        year: 2026,
        href: 'https://eref.uni-bayreuth.de/id/eprint/99124/',
      },
    ],
  },
  {
    period: 'July 2026',
    items: [
      {
        track: 'Research',
        title: 'Presented at ICML ’26 — Seoul',
        text: '“Reading Between the Tokens: Improving Preference Predictions through Mechanistic Forecasting” — showing that a model’s internal representations improve human-preference predictions over surface-level outputs.',
        authors: 'Ball, S., Allmendinger, S., Kühl, N., & Kreuter, F.',
        paper:
          'Reading Between the Tokens: Improving Preference Predictions through Mechanistic Forecasting',
        properties: ['Transparent'],
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
        properties: ['Fair', 'Accountable'],
        venue: 'European Conference on Information Systems (ECIS), Milan',
        year: 2026,
        href: 'https://aisel.aisnet.org/ecis2026/litrev/litrev/6/',
      },
      {
        track: 'Research',
        title: 'Presented at FAccT ’26 — Montreal',
        text: '“Normative Common Ground Replication (NormCoRe): Replication-by-Translation for Studying Norms in Multi-Agent AI” — a framework that translates human-subject experiments into multi-agent AI environments to study how norms emerge.',
        authors: 'Deck, L., Allmendinger, S., Müller, L., & Kühl, N.',
        paper:
          'Normative Common Ground Replication (NormCoRe): Replication-by-Translation for Studying Norms in Multi-Agent AI',
        properties: ['Safe', 'Accountable'],
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

// ---------------------------------------------------------------------------
// Artwork from Better Images of AI (betterimagesofai.org), a non-profit
// project of We and AI, BBC R&D and the Leverhulme Centre for the Future of
// Intelligence. It exists because the usual stock imagery of AI — glowing
// brains, blue robots — misleads, which makes it the right library for a
// centre arguing for responsible AI.
//
// Every image is CC BY 4.0. The licence REQUIRES visible attribution naming
// the artist and linking to the source and the licence; omitting it
// terminates the licence. `Illustration` renders that credit — do not use
// these files without it.
//
// The files are served from our own domain, both to keep the page free of
// third-party requests and because they were scaled down to 1600px for the
// web. That scaling is a modification under CC BY.
// `portrait` holds width/height for a file taller than it is wide, measured
// from the file itself. Cards lay a portrait picture alongside the text and a
// landscape one beneath it; the ratio lets a tall picture take exactly the
// width it needs beside the text rather than being cropped to a fixed band.
// ---------------------------------------------------------------------------
export const ILLUSTRATION_SOURCE = {
  name: 'Better Images of AI',
  href: 'https://betterimagesofai.org',
  licence: 'CC BY 4.0',
  licenceHref: 'https://creativecommons.org/licenses/by/4.0/',
}

export const ILLUSTRATIONS = [
  {
    file: '/illustrations/algorithmic-memory.jpg',
    title: 'Algorithmic memory',
    artist: 'Jenny Kidd & Synthetic Pasts',
    alt: 'A photograph of two people on a beach at sunset, framed by a dense grid of hundreds of small images and overlaid with coloured pins trailing lines across the whole picture',
  },
  {
    file: '/illustrations/synthetic-or-slop.jpg',
    title: 'Synthetic or slop?',
    artist: 'Marcin Wilkowski',
    alt: 'A portrait from an eighteenth-century painting set against a violet-tinted grid of landscape paintings, with a pixelated rainbow-coloured shape bleeding across the right-hand side',
  },
  {
    file: '/illustrations/seeing-more-seeing-less.jpg',
    title: 'Seeing More — Seeing Less',
    artist: 'Anna Riepe & FARI',
    alt: 'Paper collage. A photograph of the Atomium in Brussels, cut into diagonal strips and reassembled over a grid of numbers',
  },
  {
    file: '/illustrations/digital-nomads-across-time.jpg',
    title: 'Digital Nomads Across Time',
    artist: 'Yutong Liu & Digit',
    alt: 'The undying sun hangs in the sky, as people gather around signal towers, working through their digital devices',
  },
  {
    file: '/illustrations/digital-nomads-beyond-the-cubicle.jpg',
    title: 'Digital Nomads Beyond the Cubicle',
    artist: 'Yutong Liu & Digit',
    alt: 'Within the frames are people bound to their office cubicles; beyond them, individuals work freely from diverse locations, connected through digital si',
  },
  {
    file: '/illustrations/digital-nomads-digital-based-connection.jpg',
    title: 'Digital Nomads: Digital-Based Connection',
    artist: 'Yutong Liu & Digit',
    alt: 'Through signals from communication towers, people exchange ideas via digital transmission across different locations, accomplishing their work and bui',
  },
  {
    file: '/illustrations/wheel-of-progress.jpg',
    title: 'Wheel of Progress',
    artist: 'Leo Lau & Digit',
    alt: 'Two workers running inside a scroll wheel embedded in a computer mouse, controlled by a giant capitalist hand',
  },
  {
    file: '/illustrations/knowledge-sweatshop.jpg',
    title: 'Knowledge Sweatshop',
    artist: 'Leo Lau & Digit',
    alt: 'A row of knowledge workers operate sewing machines producing piles of spreadsheets and reports',
  },
  {
    file: '/illustrations/brain-control.jpg',
    portrait: 1287 / 1600,
    title: 'Brain Control',
    artist: 'Bart Fish & Power Tools of AI',
    alt: 'A brain diagram shows ChatGPT has replaced core functions of the brain, while a young girl in the bottom right covers her eyes in horror. Degraded ima',
  },
  {
    file: '/illustrations/networks.jpg',
    title: 'Networks',
    artist: 'Pauline Wee & DAIR',
    alt: 'This image depicts clusters of various mushrooms growing on a network of surveillance cameras against a dark green textured background',
  },
  {
    file: '/illustrations/binarisation.jpg',
    title: 'Binarisation',
    artist: 'Beckett LeClair',
    alt: 'A long rainbow ribbon feeds into a grey meat grinder bearing a simplified neural network diagram on its side. Out the other end spills a collection of',
  },
  {
    file: '/illustrations/limits-of-classification.jpg',
    title: 'Limits of Classification',
    artist: 'Nadia Piet & Archival Images of AI + AIxDESIGN',
    alt: 'This illustration depicts a progression from a fish to a woman, showcasing transitional stages that defy classification boundaries, emphasising fluid',
  },
  {
    file: '/illustrations/facial-recognition.jpg',
    title: 'Facial Recognition',
    artist: 'Alyssa Chen',
    alt: 'Polytype diagrams with geometric tile designs',
  },
  {
    file: '/illustrations/the-ai-race.jpg',
    title: 'The AI Race',
    artist: 'Gloria Mendoza',
    alt: "A heritage painting of a woman's head in profile jutting out of a silhouette",
  },
  {
    file: '/illustrations/talking-to-ai-2-0.jpg',
    title: 'Talking to AI 2.0',
    artist: 'Yutong Liu & Kingston School of Art',
    alt: 'This image shows an individual with orange hair interacting with a large, abstract digital mirrored structure. The structure is composed of squares in',
  },
  {
    file: '/illustrations/exploring-ai-2-0.jpg',
    portrait: 1131 / 1600,
    title: 'Exploring AI 2.0',
    artist: 'Yutong Liu & Kingston School of Art',
    alt: 'This image features a grid of 35 square tiles with blue, pink, burgundy and orange figures inside the tiles interacting with dark green letters of the',
  },
  {
    file: '/illustrations/talking-to-ai.jpg',
    portrait: 1131 / 1600,
    title: 'Talking to AI',
    artist: 'Yutong Liu & Kingston School of Art',
    alt: 'This image shows an individual with orange hair interacting with a large, abstract digital mirrored structure. The structure is composed of squares in',
  },
]

/**
 * Look one up by title. Every entry that wants artwork names it, so there is
 * no automatic assignment to go stale or to put the same picture in two
 * places without anyone noticing.
 */
export function illustrationByTitle(title) {
  return ILLUSTRATIONS.find((i) => i.title === title)
}

// Press & media coverage featuring ARC and its members — newest first.
// `title` is always the headline the outlet actually published and stays the
// record of it; `titleEn` is our own translation and is what the cards show,
// since the site is in English. Keep both — a translation must never
// overwrite what was actually printed.
//
// COPYRIGHT: store only the outlet, the piece's own headline, our OWN short
// neutral summary and an outbound link. Never reproduce article text or use a
// publication's photo — portraits are ARC's own team images. `coverage` lists
// outlets that picked up the same story (e.g. a dpa wire) as outbound links.
// Leave `image` empty to show the ARC mark instead of a portrait.
export const PRESS = [
  {
    outlet: 'Nordkurier',
    date: '13 October 2026',
    type: 'Interview',
    title: '„Die Debatte wird falsch geführt“',
    titleEn: '“The debate is being had the wrong way round”',
    summary:
      'On the existential-risk warnings around AI: doom scenarios are speculation rather than science, while the harm these systems already do goes under-discussed. Unregulated and without accountability a curse; with clear rules and real liability, a blessing.',
    person: 'Prof. Dr. Niklas Kühl',
    art: 'Wheel of Progress',
    href: 'https://nkukit.github.io/PDFs/Nordkurier_Anthropic.pdf',
    coverage: [
      {
        outlet: 'Frankenpost',
        title: 'KI-Experte der Uni Bayreuth: „Die Debatte wird falsch geführt“',
        href: 'https://www.frankenpost.de/inhalt.ki-experte-der-uni-bayreuth-die-debatte-wird-falsch-gefuehrt.5ff537e9-fa10-4e3a-9ee8-5205441cca49.html',
      },
    ],
  },
  {
    outlet: 'human',
    date: 'October 2026',
    type: 'Interview',
    title: '„Übertriebener Pessimismus ärgert mich“',
    titleEn: '“Overblown pessimism annoys me”',
    summary:
      'On calibrated trust rather than blanket trust — following an AI where it is right and your own judgement where it is not — and why a human kept in the loop who cannot meaningfully intervene ends up carrying the blame for the provider.',
    person: 'Prof. Dr. Niklas Kühl',
    art: 'Talking to AI 2.0',
    href: 'https://human-magazin.de/?na=v&id=122',
  },
  {
    outlet: 'Bayerisches Staatsministerium für Digitales',
    art: 'The AI Race',
    date: '5 October 2026',
    type: 'Press release',
    title:
      'Minister Dr. Mehring zu KI: „Müssen Geister, die wir rufen, auch beherrschen!“',
    titleEn: 'Minister Mehring on AI: “We must also master the spirits we summon”',
    summary:
      'Bavaria’s digital ministry draws its consequences from a high-level AI summit: a recurring AI security dialogue, an independent annual security report from 2027, an AI ethics forum and a public awareness campaign. Niklas Kühl was among the invited experts.',
    person: 'Prof. Dr. Niklas Kühl',
    image: '/team/niklas-kuehl.jpeg',
    href: 'https://www.stmd.bayern.de/pressemitteilungen/minister-dr-mehring-zu-ki-muessen-geister-die-wir-rufen-auch-beherrschen--bayerns-digitalminister-zieht-konsequenzen-aus-hochrangigem-ki-gipfel-bayerischer-ki-sicherheitsdialog-jaehrlicher-sicherheitsbericht-ki-ethikkommission-und-breit-angelegte-aufklaerungskampagne--ki-sicherheitsinstitut-soll-nach-bayern',
  },
  {
    outlet: 'zeb',
    art: 'Knowledge Sweatshop',
    date: 'September 2026',
    type: 'Podcast',
    title: 'Wer braucht noch eine Bank? Regionalbanken im Zeitalter von KI',
    titleEn: 'Who still needs a bank? Regional banks in the age of AI',
    summary:
      'A conversation on what AI changes for regional banks — and on appropriate reliance: how far anyone should lean on an AI’s judgement when the decision is a financial one.',
    person: 'Prof. Dr. Niklas Kühl',
    image: '/team/niklas-kuehl.jpeg',
    href: 'https://zeb-consulting.com/de-DE/podcasts/wer-braucht-noch-eine-bank-regionalbanken-im-zeitalter-von-ki',
  },
  {
    outlet: 'WDR 5 Quarks',
    art: 'Seeing More — Seeing Less',
    date: '10 August 2026',
    type: 'Podcast',
    title: 'Verantwortungsvolle KI',
    titleEn: 'Responsible AI',
    summary:
      'A WDR 5 Quarks “Wissenschaft und mehr” segment on responsible AI — how AI systems can be built and governed so people keep meaningful control.',
    person: 'Prof. Dr. Niklas Kühl',
    image: '/team/niklas-kuehl.jpeg',
    href: 'https://www1.wdr.de/mediathek/audio/wdr5/quarks/wissenschaft-und-mehr/audio-klimaanlagen-verantwortungsvolle-ki-babys-und-musik-100.html',
  },
  {
    outlet: 'University of Bayreuth',
    via: 'dpa',
    date: '4 August 2026',
    type: 'Press release',
    title: 'So will die Uni Bayreuth die KI zähmen',
    titleEn: 'How the University of Bayreuth intends to tame AI',
    summary:
      'The University of Bayreuth launches the AI Responsibility Centre — an interdisciplinary centre uniting information systems, law and philosophy to build trustworthy, well-governed AI, funded by the Bavarian State Ministry of Science and the Arts.',
    person: 'Team of the AI Responsibility Centre (ARC)',
    image: '/team/team_upright.jpg',
    portrait: 1019 / 1200,
    href: 'https://www.uni-bayreuth.de/pressemitteilung/ARC',
    // `title` only where the outlet ran its own headline; the dpa reprints
    // inherit this item's title, because that is the headline they ran.
    coverage: [
      {
        outlet: 'Süddeutsche Zeitung',
        href: 'https://www.sueddeutsche.de/bayern/neues-forschungszentrum-so-will-die-uni-bayreuth-die-ki-zaehmen-dpa.urn-newsml-dpa-com-20090101-260804-930-482153',
      },
      {
        outlet: 'ZEIT ONLINE',
        href: 'https://www.zeit.de/news/2026-08/04/so-will-die-uni-bayreuth-die-ki-zaehmen',
      },
      {
        outlet: 'WELT',
        href: 'https://www.welt.de/regionales/bayern/article6a71bd36cc46967c04cae60a/so-will-die-uni-bayreuth-die-ki-zaehmen.html',
      },
      {
        outlet: 'Schwäbische',
        href: 'https://www.schwaebische.de/regional/bayern/so-will-die-uni-bayreuth-die-ki-zaehmen-4764050',
      },
      {
        outlet: 'FLZ',
        href: 'https://www.flz.de/so-will-die-uni-bayreuth-die-ki-zaehmen/cnt-id-ps-745a4c0b-3a97-4659-87e7-42df811c492f',
      },
      {
        outlet: 'diebayern.de',
        href: 'https://www.diebayern.de/bildung/so-will-die-uni-bayreuth-die-ki-zaehmen-3165871',
      },
      {
        outlet: 'idw',
        title:
          'University of Bayreuth Establishes Interdisciplinary Centre for Responsible AI Research and Development',
        href: 'https://idw-online.de/de/news875507',
      },
    ],
  },
  {
    outlet: 'Frankenpost',
    art: 'Exploring AI 2.0',
    date: '3 August 2026',
    type: 'Interview',
    title: '„Die KI ist nicht böse geworden“',
    titleEn: '“AI has not turned evil”',
    // Our own neutral one-liner about the topic — not a quote from the article.
    summary:
      'An interview on the risks of agentic AI — why recent “break-out” incidents reflect gaps in oversight and IT security rather than malicious machines, and how responsible AI keeps humans in control.',
    person: 'Prof. Dr. Niklas Kühl',
    image: '/team/niklas-kuehl.jpeg',
    href: 'https://www.frankenpost.de/inhalt.interview-die-ki-ist-nicht-boese-geworden.4d151ece-f8f1-4470-92ce-fb055a3c9613.html',
  },
  {
    outlet: 'University of Bayreuth',
    date: '16 July 2026',
    type: 'Press release',
    title: 'Wie KI Wahlentscheidungen vorhersagt',
    titleEn: 'How AI predicts voting decisions',
    art: 'Talking to AI',
    summary:
      'How do language models “predict” elections? A Bayreuth–LMU study probes what LLMs encode internally about political preferences across six national elections — a complement to, not a replacement for, traditional polling.',
    person: 'Simeon Allmendinger, Prof. Dr. Niklas Kühl',
    image: '/team/simeon-allmendinger.jpeg',
    href: 'https://www.uni-bayreuth.de/pressemitteilung/ki-wahlprognosen',
  },
]

export const PERSON = {
  name: 'Prof. Dr. Niklas Kühl',
  arcRole: 'Executive Director',
  role: 'Professor of Information Systems and Human-centric Artificial Intelligence',
  affiliation:
    'Faculty of Law, Business and Economics, University of Bayreuth · Fraunhofer FIT (Business Analytics)',
  bio: 'Niklas Kühl works at the interface of machine learning and human-centric design. His research builds and studies real-world AI applications — spanning human–AI collaboration, decision support, explainable and responsible AI, and generative AI — and turns those insights into evidence for policy and practice.',
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
  collaborators: ['Fraunhofer FIT', 'LMU Munich', 'TUM', 'FIM', 'KSRI', '...'],
}

// Further principal members of the ARC interdisciplinary team.
export const TEAM = [
  {
    name: 'Prof. Dr. Lena Kästner',
    initials: 'LK',
    image: '/team/lena-kaestner.png',
    arcRole: 'Co-Director',
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
    arcRole: 'Co-Director',
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
    arcRole: 'Managing Director',
    role: 'Doctoral researcher',
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
      'Works in interdisciplinary teams on the design and evaluation of AI systems with respect to social, ethical, and legal norms. In addition to fairness and explainability, his research focuses on the regulation of deepfakes in criminal law and on platforms.',
    links: {
      scholar: 'https://scholar.google.com/citations?user=3hac5y8AAAAJ',
      researchgate: 'https://www.researchgate.net/profile/Luca-Deck',
      linkedin: 'https://www.linkedin.com/in/luca-deck/',
      orcid: 'https://orcid.org/0000-0003-3773-2769',
      website: 'https://lucad98.github.io/',
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
      'Development of generative AI solutions for real-world applications and AI-based decision support systems in minimal invasive surgeries.',
    links: {
      scholar: 'https://scholar.google.de/citations?user=qhVY6gwAAAAJ',
      linkedin: 'https://linkedin.com/in/leopoldmueller',
      orcid: 'https://orcid.org/0009-0008-9968-8103',
      researchgate: 'https://www.researchgate.net/profile/Leopold-Mueller-2',
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
      'Bridging machine learning and HCI for the end-to-end development, design, and evaluation of intelligent systems, ensuring effective human oversight.',
    links: {
      scholar: 'https://scholar.google.com/citations?user=rf9UGl8AAAAJ',
      linkedin: 'https://www.linkedin.com/in/jannek-sekowski/',
      orcid: 'https://orcid.org/0009-0006-3324-7837',
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
    name: 'Julika Schmitz',
    initials: 'JS',
    group: 'cs',
    // TODO: replace with Julika's own description of her work, and add her
    // portrait at /team/julika-schmitz.jpg plus scholar/LinkedIn/ORCID links.
    // Until then the card falls back to an initials tile and shows no links.
    research: 'Information systems and human-centric artificial intelligence.',
    links: {},
  },
  {
    name: 'Timo Speith',
    initials: 'TS',
    group: 'phil',
    role: 'Postdoctoral researcher',
    image: '/team/timo-speith.jpg',
    research:
      'Works at the intersection of philosophy and computer science, with a focus on ethical AI, especially explainable AI, fairness, and autonomy. His work examines how AI systems can be designed, evaluated, and governed in ways that make them more socially beneficial.',
    links: {
      scholar: 'https://scholar.google.com/citations?user=l3QOkFEAAAAJ',
      linkedin: 'https://www.linkedin.com/in/timo-speith/',
      orcid: 'https://orcid.org/0000-0002-6675-154X',
      researchgate: 'https://www.researchgate.net/profile/Timo-Speith',
    },
  },
  {
    name: 'Astrid Schomäcker',
    initials: 'AS',
    group: 'phil',
    role: 'Postdoctoral researcher',
    image: '/team/astrid-schomaecker.jpg',
    research:
      'Philosophy of AI, researching the epistemological and ethical effects of deepfakes within the FoGG projects. Generally interested in analyzing the societal impact of AI and the potential of different mitigation strategies, especially algorithmic fairness, explainable AI and AI ethics more generally.',
    links: {
      scholar: 'https://scholar.google.com/citations?user=i023olgAAAAJ',
      linkedin: 'https://www.linkedin.com/in/astrid-schom%C3%A4cker-8aa56329a/',
      orcid: 'https://orcid.org/0000-0002-0128-9083',
      researchgate:
        'https://www.researchgate.net/scientific-contributions/Astrid-Schomaecker-2199553856',
    },
  },
  {
    name: 'Bartosz Radomski',
    initials: 'BR',
    group: 'phil',
    role: 'Postdoctoral researcher',
    image: '/team/bartosz-radomski.jpeg',
    research:
      'Philosophy of cognitive science and AI: formal models of cognition, theories of natural and artificial adaptivity, and embodied and situated cognition.',
    links: {
      scholar: '',
      linkedin: 'https://de.linkedin.com/in/bartoszradomski',
      orcid: 'https://orcid.org/0000-0003-4107-2425',
      researchgate: 'https://www.researchgate.net/profile/Bartosz-Radomski-2',
    },
  },
  {
    name: 'Simon Lobinger',
    initials: 'SL',
    group: 'law',
    role: 'Student assistant',
    image: '/team/simon-lobinger.png',
    research:
      'Responsible use of artificial intelligence in criminal law, examining both the legal challenges and the opportunities associated with its application in criminal justice and law enforcement.',
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
    image: '/team/timo-grueneke.jpeg',
    research:
      'Digital systems as knowledge mediators across the individual and the organizational level: how can AI-based systems move beyond delivering knowledge toward knowledge that learners recognize and organizations adopt, orchestrate, and turn into value.',
    links: {
      scholar: 'https://scholar.google.com/citations?user=sQeK4QQAAAAJ',
      linkedin: 'https://www.linkedin.com/in/timo-grueneke/',
      orcid: 'https://orcid.org/0000-0001-7138-0395',
      researchgate: 'https://www.researchgate.net/profile/Timo-Grueneke',
    },
  },
  {
    name: 'Jana Elsner',
    initials: 'JE',
    group: 'law',
    image: '/team/jana-elsner.jpg',
    research:
      'Criminal procedure law, with a focus on the use of artificial intelligence in criminal prosecution and law enforcement in fields such as the cryptocurrency sector — within the FAIRLEA project (“Fair AI Research for Law Enforcement Agencies”, Volkswagen Foundation) on cryptoasset forensics.',
    links: {
      linkedin: 'https://de.linkedin.com/in/jana-elsner-40a798382',
      website: 'https://fairlea.de/research/',
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
    image: '/team/raimund-weidlich.jpeg',
    research: 'Deepfakes and electoral interference — criminal law regulation of AI.',
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
  pressEmail: 'press@ai-responsibility-centre.eu',
  jobsEmail: 'jobs@ai-responsibility-centre.eu',
  // Public Web3Forms access key (safe to commit — it only delivers to the
  // address configured at web3forms.com).
  formAccessKey: 'c7a94dbc-871b-433a-baf6-b9d2919a0450',
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
  // Auftragsverarbeiter des Kontaktformulars (Contact.jsx → api.web3forms.com).
  // ACHTUNG: Anbieteranschrift und AV-Vertrag noch durch den behördlichen
  // Datenschutzbeauftragten prüfen bzw. abschließen lassen.
  contactForm: {
    provider: 'Web3Forms',
    address: '⟨Anschrift des Anbieters ergänzen⟩',
    privacyUrl: 'https://web3forms.com/privacy',
  },
  // Eingebettete Videos — nur nach aktivem Klick (Zwei-Klick-Lösung).
  video: {
    provider: 'Google Ireland Limited',
    address: 'Gordon House, Barrow Street, Dublin 4, Irland',
    service: 'YouTube',
    privacyUrl: 'https://policies.google.com/privacy',
  },
  // Hosting-Dienstleister
  hosting: {
    provider: 'GitHub, Inc.',
    address: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA',
    service: 'GitHub Pages',
    privacyUrl:
      'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
  },
  lastUpdated: 'September 2026',
}

// Number of doctoral researchers — derived from the PHDS list.
export const DOCTORAL_RESEARCHERS = PHDS.length

// Headline numbers derived from the timeline, events and team, so they stay in
// sync automatically as entries are added. Each milestone is counted once by
// its track (no double counting with events). Shared by the Home and
// Events & Milestones pages so the two always show the same figures.
const milestoneItems = MILESTONES.flatMap((group) => group.items)
const countTrack = (track) => milestoneItems.filter((i) => i.track === track).length

// How many publications contribute to each property — derived, so the vision
// can show what actually stands behind each of its five words.
export const PROPERTY_EVIDENCE = Object.fromEntries(
  RESEARCH_PROPERTIES.map((prop) => [
    prop,
    milestoneItems.filter(
      (i) => i.track === 'Research' && (i.properties ?? []).includes(prop),
    ).length,
  ]),
)
const countEventType = (re) => EVENTS.filter((e) => re.test(e.type)).length

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
    // Talks and workshops together: both are ARC in a room with an audience,
    // and splitting them left two thin numbers instead of one real one. Counted
    // by track, never by title — matching /workshop/i against titles counted a
    // talk given *at* someone else's workshop as a workshop we ran. Upcoming
    // entries count too, and cannot double up: an event moves out of EVENTS
    // and into MILESTONES once it has happened.
    value: countEventType(/talk|workshop/i) + countTrack('Talk') + countTrack('Workshop'),
    label: 'Talks & workshops',
    sub: 'Keynotes, invited talks & training',
  },
  {
    value: DOCTORAL_RESEARCHERS,
    label: 'Researchers',
    sub: 'Interdisciplinary team',
  },
]
