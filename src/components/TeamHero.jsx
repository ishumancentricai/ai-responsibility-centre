import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'

const DESKTOP = '(min-width: 768px)'

/**
 * TeamHero — full-bleed group photo with the same scroll-driven feel as the
 * home hero: the section is a tall scroll track whose inner panel sticks to
 * the viewport while the photo drifts and the copy lifts away.
 *
 * Two presentations from one markup tree:
 *  - md and up: the photo covers the pinned panel and the copy sits over a
 *    scrim, with a spotlight that trails the cursor and a slight counter-drift.
 *  - below md: a 2:1 group shot would crop to a handful of faces, so the photo
 *    drops into the flow at its natural width under the copy — and the
 *    scroll/pointer effects are switched off entirely.
 *
 * All motion is disabled under prefers-reduced-motion.
 */
export default function TeamHero({ eyebrow, title, intro, stats = [] }) {
  const trackRef = useRef(null)
  const panelRef = useRef(null)
  const reduce = useReducedMotion()
  const desktop = useMediaQuery(DESKTOP)
  const animate = desktop && !reduce

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end start'],
  })
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 })

  const photoScale = useTransform(p, [0, 1], [1.08, 1.24])
  const photoY = useTransform(p, [0, 1], [0, 110])
  const copyY = useTransform(p, [0, 1], [0, -110])
  const copyOpacity = useTransform(p, [0, 0.6], [1, 0])
  const scrimOpacity = useTransform(p, [0, 0.8], [1, 0.4])

  // Pointer spotlight — springs make it trail the cursor rather than snap.
  const px = useMotionValue(-1000)
  const py = useMotionValue(-1000)
  const spotX = useSpring(px, { stiffness: 140, damping: 22, mass: 0.6 })
  const spotY = useSpring(py, { stiffness: 140, damping: 22, mass: 0.6 })
  // The photo leans a few pixels against the cursor.
  const driftX = useTransform(spotX, (v) =>
    v < 0 ? 0 : (v - (panelRef.current?.offsetWidth ?? 0) / 2) * -0.014,
  )

  const handlePointer = (e) => {
    if (!animate) return
    const box = e.currentTarget.getBoundingClientRect()
    px.set(e.clientX - box.left)
    py.set(e.clientY - box.top)
  }

  const resetPointer = () => {
    px.set(-1000)
    py.set(-1000)
  }

  return (
    <section ref={trackRef} className="relative bg-arc-950 md:h-[175vh]">
      <div
        ref={panelRef}
        onPointerMove={handlePointer}
        onPointerLeave={resetPointer}
        className="relative flex flex-col overflow-hidden pt-32 sm:pt-40 md:sticky md:top-0 md:h-screen md:justify-end md:pt-0 md:pb-24"
      >
        {/* Photo — covers the panel on md+, sits in the flow below the copy on
            small screens so no one gets cropped out. */}
        <motion.div
          style={animate ? { scale: photoScale, y: photoY, x: driftX } : undefined}
          className="order-2 mt-12 w-full md:absolute md:inset-0 md:order-none md:mt-0"
        >
          <img
            src="/team/team.jpg"
            srcSet="/team/team-1400.jpg 1400w, /team/team.jpg 2400w"
            sizes="100vw"
            width="2400"
            height="1229"
            alt="The AI Responsibility Centre team at the University of Bayreuth"
            fetchPriority="high"
            className="h-auto w-full object-cover object-[50%_22%] md:h-full"
          />
        </motion.div>

        {/* Scrims — keep the copy legible over a bright, white-walled photo.
            Desktop only; on mobile the copy sits on the plain dark band. */}
        <motion.div
          style={animate ? { opacity: scrimOpacity } : undefined}
          className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-arc-950 via-arc-950/60 to-arc-950/15 md:block"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-arc-950/85 via-arc-950/20 to-transparent md:block"
          aria-hidden
        />
        {/* Keeps the transparent navbar readable against the bright white wall
            at the top of the photo. */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 hidden h-48 bg-gradient-to-b from-arc-950/85 to-transparent md:block"
          aria-hidden
        />
        <div
          className="bg-grid pointer-events-none absolute inset-0 hidden opacity-[0.16] md:block"
          aria-hidden
        />

        {/* Cursor spotlight. */}
        {animate && (
          <motion.div
            style={{ left: spotX, top: spotY }}
            className="pointer-events-none absolute h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-arc-300/20 blur-3xl"
            aria-hidden
          />
        )}

        {/* Copy. */}
        <motion.div
          style={animate ? { y: copyY, opacity: copyOpacity } : undefined}
          className="container-arc relative z-10 order-1 md:order-none"
        >
          {eyebrow && (
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-arc-200 backdrop-blur"
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          {intro && (
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75"
            >
              {intro}
            </motion.p>
          )}

          {stats.length > 0 && (
            <motion.dl
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap gap-x-10 gap-y-4"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  {/* Value reads first; `order` flips it without breaking the
                      dt-before-dd order the markup needs. */}
                  <dt className="order-2 text-sm font-medium text-white/60">{s.label}</dt>
                  <dd className="text-2xl font-bold tracking-tight text-white">
                    {s.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          )}
        </motion.div>

        {/* Scroll cue — only where the panel is pinned. */}
        <motion.div
          style={animate ? { opacity: copyOpacity } : undefined}
          className="absolute bottom-9 left-1/2 hidden -translate-x-1/2 md:block"
          aria-hidden
        >
          <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
            <motion.span
              animate={reduce ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="block h-1.5 w-1.5 rounded-full bg-white/70"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Tracks a media query so the desktop-only scroll/pointer effects never run
// on phones, where the photo is laid out in the flow instead.
function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = (e) => setMatches(e.matches)
    setMatches(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}
