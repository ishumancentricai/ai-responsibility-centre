/**
 * ArcMark — the ARC "arch" logo mark as inline SVG so it can be
 * coloured, sized and animated freely.
 */
export default function ArcMark({
  className = '',
  stroke = 'currentColor',
  strokeWidth = 5,
}) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="ARC">
      <path
        d="M18 48 V30 a14 14 0 0 1 28 0 V48"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M28 48 V36 a4 5 0 0 1 8 0 V48"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
