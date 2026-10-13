/**
 * MediumIcon — one mark per kind of press coverage.
 *
 * Drawn on the same 24-unit grid and stroke weight as PropertyIcon, so the
 * site has one drawing hand rather than two. A megaphone for an announcement,
 * a microphone for a podcast, two bubbles for an interview, a frame for film.
 *
 * The word itself is kept for assistive tech and as a tooltip: a symbol alone
 * is a guess, and "press release" is not a thing most people recognise from a
 * shape. An unknown medium falls back to the label, which is why the caller
 * checks `hasMediumIcon` rather than assuming one exists.
 */
const PATHS = {
  'Press release': [
    { d: 'M3.5 9.5 L14 5.2 v13.6 L3.5 14.5 z' },
    { d: 'M6.6 14.9 v3.4 a1.7 1.7 0 0 0 3.4 0 V16' },
    { d: 'M17.4 9.1 a4.2 4.2 0 0 1 0 5.8' },
    { d: 'M20 6.6 a7.6 7.6 0 0 1 0 10.8' },
  ],

  Podcast: [
    {
      d: 'M12 3.2 a2.7 2.7 0 0 1 2.7 2.7 v5.3 a2.7 2.7 0 0 1 -5.4 0 V5.9 A2.7 2.7 0 0 1 12 3.2 z',
    },
    { d: 'M6.6 10.9 a5.4 5.4 0 0 0 10.8 0' },
    { d: 'M12 16.3 v4' },
    { d: 'M8.9 20.3 h6.2' },
  ],

  Interview: [
    { d: 'M3.3 5.2 h10.4 v6.6 h-6.2 l-4.2 3 z' },
    { d: 'M10.3 9.6 h10.4 v6.6 h-2.2 l0 2.9 l-3.6 -2.9 h-4.6 z' },
  ],

  Video: [{ d: 'M3.4 5.4 h17.2 v13.2 H3.4 z' }, { d: 'M10 9.4 l6 2.9 l-6 2.9 z' }],
}

export default function MediumIcon({ medium, className = '' }) {
  const paths = PATHS[medium]

  // A medium with no mark of its own keeps its name rather than disappearing.
  if (!paths) {
    return (
      <span className="text-xs font-semibold uppercase tracking-label">{medium}</span>
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={medium}
    >
      <title>{medium}</title>
      {paths.map((p) => (
        <path key={p.d} d={p.d} />
      ))}
    </svg>
  )
}
