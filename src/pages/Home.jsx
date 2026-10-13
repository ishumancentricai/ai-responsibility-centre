import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import ArcMark from '../components/ArcMark'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import UpcomingEvents from '../components/UpcomingEvents'
import GapFigure from '../components/GapFigure'
import VisionProperties from '../components/VisionProperties'
import Illustration from '../components/Illustration'
import InTheMedia from '../components/InTheMedia'
import {
  VISION,
  MISSION,
  illustrationByTitle,
  PILLARS,
  GAPS,
  HIGHLIGHTS,
  STRATEGY_PRINCIPLES,
  FUNDERS,
} from '../data/content'

export default function Home() {
  return (
    <>
      <Hero />
      <UpcomingEvents
        className="border-b border-black/5 bg-white py-24 sm:py-32"
        cta={{ label: 'View all events & milestones', to: '/roadmap' }}
      />
      <InTheMedia />
      <Qualities />
      <Gaps />
      <Stats />
      <Pillars />
      <MissionBand />
      <Strategy />
      <CallToAction />
      <Funders />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Hero — scroll-driven arch mark that scales, rotates and fades.      */
/* ------------------------------------------------------------------ */
function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Smooth the scroll progress for buttery transforms.
  const p = useSpring(scrollYProgress, { stiffness: 150, damping: 26, mass: 0.28 })

  // Two acts that overlap, with the sticky pin letting go between them.
  //
  // The section is 150vh around a 100vh sticky child, so the hero stays
  // pinned for the first 50vh — a third of the scroll range. Act one happens
  // inside that third: the page cannot move, so only the arch does. It grows
  // on an accelerating curve, the way a doorway rushes at you over the last
  // couple of steps.
  //
  // The two acts deliberately overlap by LEAD. The arch is still sweeping
  // past as the copy starts to go, and it finishes fading at the exact moment
  // the pin releases — otherwise there is a beat where the arch is gone, the
  // page is still pinned, and you are scrolling against nothing.
  const WALK = 1 / 3
  const LEAD = 0.07
  const GO = WALK - LEAD

  const markScale = useTransform(p, [0, 0.13, 0.24, WALK], [1, 1.9, 4.5, 11])
  const markOpacity = useTransform(p, [0, 0.18, WALK], [0.9, 0.72, 0])

  // Flat until GO, so nothing drifts while the arch still has the stage.
  const textY = useTransform(p, [0, GO, 1], [0, 0, -70])
  const textScale = useTransform(p, [0, GO, 1], [1, 1, 1.08])
  const textOpacity = useTransform(p, [0, GO, 0.55], [1, 1, 0])
  const bgY = useTransform(p, [0, GO, 1], [0, 0, 80])
  const bgScale = useTransform(p, [0, GO, 1], [1, 1, 1.15])

  // The cue has done its job as soon as the first scroll lands.
  const cueOpacity = useTransform(p, [0, 0.08], [1, 0])

  return (
    <section ref={ref} className="relative h-[150vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-arc-950 text-white">
        {/* animated backdrop */}
        <motion.div
          style={reduce ? undefined : { y: bgY, scale: bgScale }}
          className="bg-grid absolute inset-0 opacity-20"
          aria-hidden
        />
        {/* giant arch mark behind the text */}
        <motion.div
          style={reduce ? undefined : { scale: markScale, opacity: markOpacity }}
          className="pointer-events-none absolute"
          aria-hidden
        >
          <ArcMark className="h-[34vh] w-[34vh] text-arc-500/40" strokeWidth={2.5} />
        </motion.div>

        {/* hero copy */}
        <motion.div
          style={
            reduce ? undefined : { y: textY, scale: textScale, opacity: textOpacity }
          }
          className="container-arc relative z-10 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-label text-arc-200"
          >
            University of Bayreuth
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            AI in service
            <br />
            of people.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            {VISION.statement}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/about"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-arc-900 transition-transform hover:-translate-y-0.5"
            >
              Discover ARC
            </Link>
            <Link
              to="/research"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Our research
            </Link>
          </motion.div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          style={reduce ? undefined : { opacity: cueOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="block h-1.5 w-1.5 rounded-full bg-white/70"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Qualities — the five vision attributes as staggered chips.          */
/* ------------------------------------------------------------------ */
function Qualities() {
  return (
    <section className="bg-white py-24 sm:py-32">
      {/* The artwork stands beside the whole block rather than beside one
          paragraph of it. Portrait on a wide screen, which crops the 16:9
          source — a deliberate framing, and CC BY permits it as long as the
          credit stays, which it does. On narrow screens it reverts to the
          picture's own 16:9 above the text. */}
      <div className="container-arc grid gap-10 lg:grid-cols-[1fr_1.45fr] lg:items-start lg:gap-14">
        <Reveal>
          <Illustration
            item={illustrationByTitle('Digital Nomads Across Time')}
            className="rounded-sm border border-ink-900/10"
            imgClassName="aspect-[16/9] w-full object-cover lg:aspect-[4/5]"
          />
        </Reveal>

        <div>
          <Reveal delay={0.05}>
            <p className="text-sm font-semibold uppercase tracking-label text-arc-600">
              Our vision
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-display sm:text-4xl">
              AI systems are here to stay. Those who help shape their use also shape the
              standards, values and limits of their deployment.
            </h2>
          </Reveal>

          <VisionProperties className="mt-10" />

          <Reveal delay={0.15}>
            <p className="mt-10 text-lg leading-relaxed text-ink-700">
              {VISION.ambition}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Gaps() {
  return (
    <section className="border-y border-black/5 bg-white py-24 sm:py-32">
      <div className="container-arc">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-label text-arc-600">
            Why ARC?
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-display sm:text-4xl">
            Three gaps we close.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3" step={0.14}>
          {GAPS.map((gap, i) => (
            <StaggerItem key={gap.title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1">
                {/* figure panel — the arch spanning the break */}
                <div className="relative border-b border-ink-900/10 bg-white px-8 pb-6 pt-8">
                  <span className="absolute inset-0 bg-grid opacity-40" aria-hidden />
                  <GapFigure
                    variant={gap.figure}
                    className="relative mx-auto h-28 w-full max-w-[13rem]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold tabular-nums tracking-label text-arc-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="h-px flex-1 bg-gradient-to-r from-arc-300 to-transparent"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-ink-900 tracking-tight">
                    {gap.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-700">{gap.body}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Stats band.                                                         */
/* ------------------------------------------------------------------ */
function Stats() {
  return (
    // A full-bleed band: the colour runs edge to edge while the figures stay
    // in the text column, so the banner reads as a rule across the page
    // rather than as another card.
    <section className="bg-arc-900 py-16 text-white sm:py-20">
      <div className="container-arc">
        <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4" step={0.1}>
          {HIGHLIGHTS.map((s) => (
            <StaggerItem key={s.label}>
              <p className="text-4xl font-bold tracking-display sm:text-5xl">{s.value}</p>
              <p className="mt-2 font-medium">{s.label}</p>
              <p className="mt-1 text-sm text-white/65">{s.sub}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Pillars — the three areas of work.                                  */
/* ------------------------------------------------------------------ */
const PILLAR_LINKS = {
  research: '/research',
  policy: '/policy',
  application: '/roadmap',
}

function Pillars() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-arc">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-label text-arc-600">
            Our mission
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-display sm:text-4xl">
            {MISSION.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">
            {MISSION.body}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3" step={0.14}>
          {PILLARS.map((pillar) => (
            <StaggerItem key={pillar.id}>
              <Link
                to={PILLAR_LINKS[pillar.id]}
                className="group flex h-full flex-col rounded-sm border border-ink-900/10 bg-white p-8 transition-colors duration-300 hover:border-arc-600"
              >
                <ArcMark className="h-9 w-9 text-arc-600" strokeWidth={5} />
                <h3 className="mt-6 text-xl font-semibold text-ink-900 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-700">{pillar.body}</p>
                {pillar.id === 'policy' ? (
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-500">
                    <span className="relative flex h-2 w-2" aria-hidden>
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-arc-500 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-arc-600" />
                    </span>
                    Coming soon
                  </span>
                ) : (
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-arc-700">
                    Learn more
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                )}
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Mission band — word-by-word reveal of the "Linux moment" line.      */
/* ------------------------------------------------------------------ */
function MissionBand() {
  const words = MISSION.linuxMoment.split(' ')
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden bg-arc-900 py-28 text-white sm:py-36">
      <div className="bg-grid absolute inset-0 opacity-10" aria-hidden />
      <div className="container-arc relative">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ show: { transition: { staggerChildren: reduce ? 0 : 0.035 } } }}
          className="mx-auto max-w-4xl text-balance text-center text-2xl font-semibold leading-snug sm:text-4xl"
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0.12 },
                show: { opacity: 1, transition: { duration: 0.4 } },
              }}
              className="inline-block"
            >
              {w}&nbsp;
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Strategy — self-sustaining cycle principles.                        */
/* ------------------------------------------------------------------ */
function Strategy() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-arc">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-label text-arc-600">
            Our strategy
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-display sm:text-4xl">
            A self-sustaining cycle of research, impact and funding.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-3" step={0.12}>
          {STRATEGY_PRINCIPLES.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="h-full border-l-2 border-arc-600 bg-white py-1 pl-6 pr-2">
                <span className="text-sm font-semibold text-arc-600">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold text-ink-900 tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-700">{s.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Call to action.                                                     */
/* ------------------------------------------------------------------ */
function CallToAction() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-arc">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm bg-arc-950 px-8 py-16 text-center text-white sm:px-16 sm:py-20">
            <ArcMark className="mx-auto h-12 w-12 text-arc-400" strokeWidth={4} />
            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-bold tracking-display sm:text-4xl">
              Help shape responsible AI — for whom, and to what end.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              For research collaborations, policy exchange, or industry projects, we’d
              love to hear from you.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-arc-900 transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Funders — funding bodies on a plain white band.                     */
/* ------------------------------------------------------------------ */
function Funders() {
  return (
    <section className="border-t border-black/5 bg-white py-16">
      <div className="container-arc text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-label text-ink-500">
            Funded by
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap items-start justify-center gap-x-16 gap-y-10">
            {FUNDERS.map((f) => (
              <a
                key={f.name}
                href={f.href}
                target="_blank"
                rel="noreferrer"
                title={f.name}
                aria-label={f.name}
                className="group flex max-w-[24rem] flex-col items-center gap-3 text-center"
              >
                {/* Fixed-height box sized to the tallest logo, so every caption
                    starts at the same vertical position regardless of how tall
                    the individual logo is. */}
                <div className="flex h-[62px] items-center justify-center sm:h-[74px]">
                  <img
                    src={f.logo}
                    alt={f.name}
                    loading="lazy"
                    className={`w-auto object-contain transition-opacity group-hover:opacity-70 ${f.logoHeight || 'h-12 sm:h-14'}`}
                  />
                </div>
                <span className="text-xs font-medium leading-snug text-ink-500">
                  {f.name}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
