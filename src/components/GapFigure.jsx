import { motion, useReducedMotion } from 'framer-motion'

/**
 * GapFigure — line drawings for the three gaps ARC closes.
 *
 * Each one says the same sentence in pictures: the ground breaks, and the
 * arch of the ARC mark spans the break. What stands inside the arch is what
 * we bring to that particular gap — evidence, measurement, or disciplines
 * brought together. Sharing the arch keeps the three reading as a set
 * instead of as three icons picked off a shelf.
 *
 * The arch draws itself on scroll; under reduced motion it is simply there.
 */

// The ARC arch, echoing the logo: feet at 36 and 84, a true semicircle.
const ARCH = 'M36 70 V44 a24 24 0 0 1 48 0 V70'

// Broken ground — two banks with the gap between them.
const BANK_LEFT = 'M6 70 H46'
const BANK_RIGHT = 'M74 70 H114'

const GLYPHS = {
  // Trust: evidence, not assumption.
  trust: [{ d: 'M50 52 l7 8 l14 -17', cap: 'round' }],
  // Design: the standards and tests that make regulation deployable.
  design: [
    { d: 'M46 47 h28 v13 h-28 z' },
    { d: 'M53 47 v5' },
    { d: 'M60 47 v7' },
    { d: 'M67 47 v5' },
  ],
  // Structure: separate disciplines running into one centre.
  structure: [
    { d: 'M48 66 C48 56 60 56 60 47' },
    { d: 'M60 66 V47' },
    { d: 'M72 66 C72 56 60 56 60 47' },
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
      {glyph.map((g, i) => (
        <motion.path
          key={g.d}
          d={g.d}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap={g.cap ?? 'round'}
          className="text-ink-700"
          viewport={{ once: true, margin: '-60px' }}
          {...draw(0.95 + i * 0.08, 0.45)}
        />
      ))}
    </svg>
  )
}
