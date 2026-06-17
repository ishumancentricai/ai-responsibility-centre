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
import {
  VISION,
  MISSION,
  PILLARS,
  GAPS,
  STATS,
  STRATEGY_PRINCIPLES,
} from '../data/content'

export default function Home() {
  return (
    <>
      <Hero />
      <Qualities />
      <Gaps />
      <Stats />
      <Pillars />
      <MissionBand />
      <Strategy />
      <CallToAction />
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
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 })

  const markScale = useTransform(p, [0, 1], [1, 2.6])
  const markRotate = useTransform(p, [0, 1], [0, 90])
  const markOpacity = useTransform(p, [0, 0.7], [0.9, 0])
  const textY = useTransform(p, [0, 1], [0, -120])
  const textOpacity = useTransform(p, [0, 0.55], [1, 0])
  const bgY = useTransform(p, [0, 1], [0, 160])

  return (
    <section ref={ref} className="relative h-[160vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-arc-950 text-white">
        {/* animated backdrop */}
        <motion.div
          style={reduce ? undefined : { y: bgY }}
          className="bg-grid absolute inset-0 opacity-20"
          aria-hidden
        />
        <div
          className="absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-arc-600/25 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-40 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-arc-400/20 blur-3xl"
          aria-hidden
        />

        {/* giant arch mark behind the text */}
        <motion.div
          style={reduce ? undefined : { scale: markScale, rotate: markRotate, opacity: markOpacity }}
          className="pointer-events-none absolute"
          aria-hidden
        >
          <ArcMark className="h-[44vh] w-[44vh] text-arc-500/40" strokeWidth={2.5} />
        </motion.div>

        {/* hero copy */}
        <motion.div
          style={reduce ? undefined : { y: textY, opacity: textOpacity }}
          className="container-arc relative z-10 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-arc-200 backdrop-blur"
          >
            University of Bayreuth · Fraunhofer FIT
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
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-arc-900 shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
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
          style={reduce ? undefined : { opacity: textOpacity }}
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
      <div className="container-arc">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
            Our vision
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            AI systems are here to stay. Those who help shape their use also
            shape the standards, values and limits of their deployment.
          </h2>
        </Reveal>

        <Stagger className="mt-10 flex flex-wrap gap-3">
          {VISION.qualities.map((q) => (
            <StaggerItem key={q}>
              <span className="inline-flex rounded-full border border-arc-200 bg-arc-50 px-5 py-2.5 text-base font-medium capitalize text-arc-800">
                {q}
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-ink-700">
            {VISION.ambition}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Gaps — why we need ARC. Cards reveal with parallax-y stagger.       */
/* ------------------------------------------------------------------ */
function Gaps() {
  return (
    <section className="border-y border-black/5 bg-arc-50/40 py-24 sm:py-32">
      <div className="container-arc">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
            Why ARC?
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Three gaps we close.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3" step={0.14}>
          {GAPS.map((gap, i) => (
            <StaggerItem key={gap.title}>
              <article className="group h-full rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-arc-600 text-base font-bold text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-ink-900">{gap.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-700">{gap.body}</p>
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
    <section className="bg-arc-950 py-20 text-white sm:py-28">
      <div className="container-arc">
        <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4" step={0.1}>
          {STATS.map((s) => (
            <StaggerItem key={s.label}>
              <div>
                <p className="text-4xl font-bold tracking-tight text-arc-300 sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-3 font-medium">{s.label}</p>
                <p className="mt-1 text-sm text-white/55">{s.sub}</p>
              </div>
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
            Our mission
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
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
                className="group flex h-full flex-col rounded-3xl border border-black/5 bg-gradient-to-b from-white to-arc-50/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-arc-200 hover:shadow-xl"
              >
                <ArcMark className="h-9 w-9 text-arc-600" strokeWidth={5} />
                <h3 className="mt-6 text-xl font-semibold text-ink-900">{pillar.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-700">{pillar.body}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-arc-700">
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
            Our strategy
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            A self-sustaining cycle of research, impact and funding.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-3" step={0.12}>
          {STRATEGY_PRINCIPLES.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="h-full rounded-3xl border-l-4 border-arc-500 bg-arc-50/50 p-7">
                <span className="text-sm font-semibold text-arc-600">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">{s.title}</h3>
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
    <section className="bg-arc-50/40 py-24 sm:py-32">
      <div className="container-arc">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-arc-950 px-8 py-16 text-center text-white sm:px-16 sm:py-20">
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-arc-600/30 blur-3xl"
              aria-hidden
            />
            <ArcMark className="mx-auto h-12 w-12 text-arc-400" strokeWidth={4} />
            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Help shape responsible AI — for whom, and to what end.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              For research collaborations, policy exchange, or industry projects,
              we’d love to hear from you.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-arc-900 shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
