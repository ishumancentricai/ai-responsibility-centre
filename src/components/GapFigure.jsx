import { motion, useReducedMotion } from 'framer-motion'

/**
 * GapFigure — line drawings for the three gaps ARC closes.
 *
 * Each one says the same sentence in pictures: the ground breaks, and the
 * arch of the ARC mark spans the break. What stands inside the arch is what
 * we bring to that gap — a shield for trust, a bulb and pencil for design,
 * a network for structure. Sharing the arch keeps the three reading as a
 * set instead of as three icons picked off a shelf.
 *
 * The arch draws itself on scroll; under reduced motion it is simply there.
 */

// The ARC arch, echoing the logo: feet at 36 and 84, a true semicircle.
const ARCH = 'M36 70 V44 a24 24 0 0 1 48 0 V70'

// Broken ground — two banks with the gap between them.
const BANK_LEFT = 'M6 70 H46'
const BANK_RIGHT = 'M74 70 H114'

const GLYPHS = {
  // Trust: a shield with a check — assurance you can point at.
  trust: [
    { d: 'M60 38 l14 5 v10 c0 8 -6 12.5 -14 15 c-8 -2.5 -14 -7 -14 -15 v-10 z' },
    { d: 'M53 53 l5 5 l10 -11' },
  ],
  // Design: the idea and the hand that draws it.
  design: [
    { cx: 50, cy: 50, r: 7 },
    { d: 'M46 58 h8' },
    { d: 'M47.5 61.5 h5' },
    { d: 'M74 44 l4 4 l-13 13 l-5.5 1.5 l1.5 -5.5 z' },
    { d: 'M70.5 47.5 l4 4' },
  ],
  // Structure: disciplines meeting as a network, not a queue.
  structure: [
    {
      d: 'M60 43 L48 52 M60 43 L72 52 M48 52 L52 64 M72 52 L68 64 M52 64 L68 64 M48 52 L72 52',
    },
    { cx: 60, cy: 43, r: 3, fill: true },
    { cx: 48, cy: 52, r: 3, fill: true },
    { cx: 72, cy: 52, r: 3, fill: true },
    { cx: 52, cy: 64, r: 3, fill: true },
    { cx: 68, cy: 64, r: 3, fill: true },
  ],
}

export default function GapFigure({ variant = 'trust', className = '' }) {
  const reduce = useReducedMotion()
  const glyph = GLYPHS[variant] ?? GLYPHS.trust

  // One shared timeline: banks, then the span, then what stands inside it.
  const draw = (delay, duration) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          whileInView: { pathLength: 1, opacity: 1 },
          transition: {
            pathLength: { duration, delay, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.2, delay },
          },
        }

  return (
    <svg
      viewBox="0 0 120 78"
      className={className}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* banks */}
      <motion.path
        d={BANK_LEFT}
        stroke="currentColor"
        strokeWidth="2.5"
        className="text-ink-900/25"
        viewport={{ once: true, margin: '-60px' }}
        {...draw(0, 0.45)}
      />
      <motion.path
        d={BANK_RIGHT}
        stroke="currentColor"
        strokeWidth="2.5"
        className="text-ink-900/25"
        viewport={{ once: true, margin: '-60px' }}
        {...draw(0.1, 0.45)}
      />

      {/* the span */}
      <motion.path
        d={ARCH}
        stroke="currentColor"
        strokeWidth="3.5"
        className="text-arc-600 transition-colors duration-300 group-hover:text-arc-500"
        viewport={{ once: true, margin: '-60px' }}
        {...draw(0.28, 0.95)}
      />

      {/* what stands inside it */}
      {glyph.map((g, i) => {
        const common = {
          stroke: 'currentColor',
          strokeWidth: 2.5,
          className: 'text-ink-700',
          viewport: { once: true, margin: '-60px' },
          ...draw(0.95 + i * 0.07, 0.45),
        }
        return g.d ? (
          <motion.path key={g.d} d={g.d} {...common} />
        ) : (
          <motion.circle
            key={`${g.cx}-${g.cy}`}
            cx={g.cx}
            cy={g.cy}
            r={g.r}
            fill={g.fill ? 'currentColor' : 'none'}
            {...common}
          />
        )
      })}
    </svg>
  )
}
