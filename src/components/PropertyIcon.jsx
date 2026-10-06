/**
 * PropertyIcon — one mark per responsibility property.
 *
 * Drawn rather than picked: monoline, one 24-unit grid, one stroke weight, so
 * the five read as a set. Each says the property as plainly as a line can —
 * a shield for safety, scales for fairness, a wireframe box you can see the
 * back of for transparency, a column standing on its own for sovereignty, a
 * signed sheet for accountability.
 *
 * The check mark is deliberately absent: it belongs to the trust figure in
 * GapFigure, and reusing it here would blur two different claims.
 */
const PATHS = {
  Safe: [{ d: 'M12 3 l7 2.6 v5.4 c0 4.4 -3 6.9 -7 8.2 c-4 -1.3 -7 -3.8 -7 -8.2 V5.6 z' }],

  Fair: [
    { d: 'M12 4.6 v15.2' },
    { d: 'M8.4 20.2 h7.2' },
    { d: 'M5 8.4 h14' },
    { d: 'M12 6.4 a1 1 0 0 0 0 -2 a1 1 0 0 0 0 2' },
    { d: 'M5 8.4 L2.9 13 H7.1 Z' },
    { d: 'M19 8.4 L16.9 13 H21.1 Z' },
  ],

  // A box whose far edges are visible — the point of being transparent.
  Transparent: [
    { d: 'M4.5 9.5 h10 v10 h-10 z' },
    { d: 'M4.5 9.5 L8.5 5.5 h10 v10 l-4 4' },
    { d: 'M8.5 5.5 v10 h10', dashed: true },
    { d: 'M8.5 15.5 L4.5 19.5', dashed: true },
  ],

  // Standing on its own footing, echoing the arch of the mark.
  Sovereign: [
    { d: 'M6.2 4.5 h11.6' },
    { d: 'M5 7.3 h14' },
    { d: 'M5 20 h14' },
    { d: 'M8.4 7.3 v12.7' },
    { d: 'M12 7.3 v12.7' },
    { d: 'M15.6 7.3 v12.7' },
  ],

  Accountable: [
    { d: 'M6 3.5 h9 l4 4 v13 h-13 z' },
    { d: 'M15 3.5 v4 h4' },
    { d: 'M9 11.5 h7' },
    { d: 'M9 14.5 h4' },
    { d: 'M8.8 18 c1.4 -2.2 2.4 1.9 3.8 0 c1 -1.4 1.9 0.6 2.9 0' },
  ],
}

export default function PropertyIcon({ name, className = '' }) {
  const paths = PATHS[name]
  if (!paths) return null

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths.map((p) => (
        <path
          key={p.d}
          d={p.d}
          strokeDasharray={p.dashed ? '2.5 2.5' : undefined}
          opacity={p.dashed ? 0.55 : 1}
        />
      ))}
    </svg>
  )
}
