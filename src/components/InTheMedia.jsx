import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import ArcMark from './ArcMark'
import { PRESS } from '../data/content'

// Colour-coded chips (light on the deep-green card).
const TYPE_STYLES = {
  Interview: 'bg-arc-100 text-arc-900',
  'Press release': 'bg-amber-100 text-amber-900',
  Feature: 'bg-violet-100 text-violet-900',
  Podcast: 'bg-sky-100 text-sky-900',
  'Op-ed': 'bg-rose-100 text-rose-900',
}

// Call-to-action wording adapts to the medium.
const READ_LABEL = {
  Interview: 'Read the interview',
  'Press release': 'Read the release',
  Podcast: 'Listen to the episode',
  Video: 'Watch the interview',
}

/**
 * InTheMedia — press & media coverage as a scroll-snap carousel (newest
 * first). Interactive while scrolling: swipe/trackpad/drag natively, prev/next
 * buttons, and dot indicators that track the centred card live. Cards snap to
 * the horizontal centre; edge spacers let the first/last card centre too.
 * Only outlet, headline, our own summary and outbound links — never article
 * text; portraits are ARC's own images.
 */
export default function InTheMedia({
  className = 'border-b border-black/5 bg-white py-20 sm:py-28',
}) {
  const trackRef = useRef(null)
  const cardRefs = useRef([])
  const [active, setActive] = useState(0)
  const many = PRESS.length > 1

  // Track the most-visible card so the dots + emphasis follow the scroll.
  useEffect(() => {
    if (!many || !trackRef.current) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio >= 0.6) {
            setActive(Number(e.target.dataset.idx))
          }
        }
      },
      { root: trackRef.current, threshold: [0.6] },
    )
    cardRefs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [many])

  if (!PRESS.length) return null

  const goTo = (idx) => {
    const el = cardRefs.current[idx]
    if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }
  const step = (dir) => goTo(Math.min(Math.max(active + dir, 0), PRESS.length - 1))

  // Edge spacers so the first & last cards can snap to the centre too
  // (spacer + the flex gap ≈ half the empty track width beside a card).
  const spacer =
    'shrink-0 snap-none w-[calc(6%_-_20px)] sm:w-[calc(8%_-_20px)] lg:w-[calc(13%_-_20px)]'

  return (
    <section className={className}>
      <div className="container-arc">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
                <NewsIcon />
                In the media
              </h2>
              <p className="mt-3 max-w-2xl text-2xl font-semibold leading-snug text-ink-900 sm:text-3xl">
                ARC in the press.
              </p>
            </div>
            {many && (
              <div className="hidden gap-2 sm:flex">
                <NavButton
                  label="Previous"
                  onClick={() => step(-1)}
                  disabled={active === 0}
                  dir={-1}
                />
                <NavButton
                  label="Next"
                  onClick={() => step(1)}
                  disabled={active === PRESS.length - 1}
                  dir={1}
                />
              </div>
            )}
          </div>
        </Reveal>

        <div
          ref={trackRef}
          className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto py-6"
        >
          {many && <div className={spacer} aria-hidden />}
          {PRESS.map((item, i) => (
            <div
              key={item.href}
              data-idx={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`w-[88%] shrink-0 snap-center transition-opacity duration-500 sm:w-[84%] lg:w-[74%] ${
                many && i !== active ? 'opacity-50' : 'opacity-100'
              }`}
            >
              <PressCard item={item} />
            </div>
          ))}
          {many && <div className={spacer} aria-hidden />}
        </div>

        {many && (
          <div className="mt-4 flex items-center justify-center gap-2">
            {PRESS.map((item, i) => (
              <button
                key={item.href}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to item ${i + 1} of ${PRESS.length}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-6 bg-arc-600' : 'w-2 bg-arc-200 hover:bg-arc-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function PressCard({ item }) {
  const readLabel = READ_LABEL[item.type] ?? 'Read more'
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-arc-800 to-arc-950 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-arc-400/40 hover:shadow-2xl hover:shadow-arc-950/40 sm:p-8">
      {/* soft radial highlight for depth — a gradient layer (not a blurred
          box) so it can't bleed past the card's rounded corner */}
      <span
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(115%_115%_at_100%_0%,rgba(17,167,116,0.22),transparent_55%)]"
        aria-hidden
      />
      {/* animated top accent */}
      <span
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-arc-400 to-arc-200 transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden
      />
      {/* decorative quote glyph */}
      <span
        className="pointer-events-none absolute -top-6 right-4 select-none font-serif text-[9rem] leading-none text-white/10 sm:right-8"
        aria-hidden
      >
        &rdquo;
      </span>

      {/* whole-card link (overlay); coverage links sit above it via z-20 */}
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${item.outlet}: ${item.title}`}
        className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arc-300"
      />

      {/* content grows so the footer (divider + byline) sits at a shared height */}
      <div className="relative flex flex-1 flex-col">
        {/* portrait/mark + story, aligned so the image sits with the headline */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div className="relative shrink-0">
            {item.image ? (
              <>
                <span
                  className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-arc-400/40 to-transparent blur-sm"
                  aria-hidden
                />
                <img
                  src={item.image}
                  alt={item.person ?? item.outlet}
                  loading="lazy"
                  className="relative h-24 w-24 rounded-2xl object-cover ring-1 ring-white/20 sm:h-28 sm:w-28"
                />
              </>
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 sm:h-28 sm:w-28">
                <ArcMark className="h-11 w-11 text-white" strokeWidth={4} />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold tracking-wide text-arc-900">
                {item.outlet}
              </span>
              {item.type && (
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    TYPE_STYLES[item.type] ?? 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {item.type}
                </span>
              )}
              <span className="text-xs font-medium text-white/50">
                {item.date}
                {item.via && ` · via ${item.via}`}
              </span>
            </div>

            <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
              {item.title}
            </h3>

            {item.summary && (
              <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                {item.summary}
              </p>
            )}
          </div>
        </div>

        {/* coverage chips — pinned just above the divider */}
        {item.coverage?.length > 0 && (
          <div className="mt-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-white/40">
              Also covered by
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {item.coverage.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-20 inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white/80 ring-1 ring-white/10 transition-colors hover:bg-white/20 hover:text-white"
                >
                  {c.outlet}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* shared-height footer: divider + byline + call to action */}
      <div className="relative mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-white/10 pt-5 text-sm">
        {item.person && <span className="font-medium text-white/60">{item.person}</span>}
        <span className="ml-auto inline-flex items-center gap-1.5 font-semibold text-arc-300 transition-colors group-hover:text-arc-200">
          {readLabel}
          <Arrow />
        </span>
      </div>
    </article>
  )
}

function NavButton({ label, onClick, disabled, dir }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink-700 transition-all hover:border-arc-300 hover:bg-arc-50 hover:text-arc-700 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-black/10 disabled:hover:bg-transparent"
    >
      <svg
        className={`h-4 w-4 ${dir < 0 ? 'rotate-180' : ''}`}
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
      >
        <path
          d="M3 8h9M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

function Arrow() {
  return (
    <svg
      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 8h9M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function NewsIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2.5 4.5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 0 1 1 1 1 0 0 0 1-1V6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5a1 1 0 0 0 1 1h9M5 6.5h4M5 9h2.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
