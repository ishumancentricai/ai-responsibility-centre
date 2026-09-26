import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import ArcMark from './ArcMark'
import { PRESS } from '../data/content'

// Medium, set as a small caps label rather than a coloured chip — the
// outlet's own name should be the loudest thing on the card.
const READ_LABEL = {
  Interview: 'Read the interview',
  'Press release': 'Read the release',
  Podcast: 'Listen to the episode',
  Video: 'Watch the interview',
}

/**
 * InTheMedia — press & media coverage as a scroll-snap carousel (newest
 * first). Swipe, trackpad, drag, arrow keys and prev/next buttons all move
 * it; a progress rail tracks the centred card. Cards snap to the horizontal
 * centre, and edge spacers let the first/last card centre too.
 *
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

  // Track the most-visible card so the rail + emphasis follow the scroll.
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

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      step(1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      step(-1)
    }
  }

  // Edge spacers so the first & last cards can snap to the centre too
  // (spacer + the flex gap ≈ half the empty track width beside a card).
  const spacer =
    'shrink-0 snap-none w-[calc(6%_-_20px)] sm:w-[calc(8%_-_20px)] lg:w-[calc(13%_-_20px)]'

  return (
    <section className={className}>
      <div className="container-arc">
        <Reveal>
          <div className="flex items-end justify-between gap-4 border-b border-black/10 pb-5">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
                In the media
              </h2>
              <p className="mt-3 max-w-2xl text-2xl font-semibold leading-snug text-ink-900 sm:text-3xl">
                ARC in the press.
              </p>
            </div>
            {many && (
              <div className="flex items-center gap-4">
                {/* editorial counter — tabular so it never jitters */}
                <p className="hidden text-sm tabular-nums text-ink-500 sm:block">
                  <span className="font-semibold text-ink-900">
                    {String(active + 1).padStart(2, '0')}
                  </span>
                  <span className="mx-1.5 text-ink-500/50">/</span>
                  {String(PRESS.length).padStart(2, '0')}
                </p>
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
              </div>
            )}
          </div>
        </Reveal>

        <div
          ref={trackRef}
          onKeyDown={onKeyDown}
          tabIndex={many ? 0 : undefined}
          role={many ? 'region' : undefined}
          aria-roledescription={many ? 'carousel' : undefined}
          aria-label={many ? 'Press coverage' : undefined}
          className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto py-2 focus-visible:outline-none"
        >
          {many && <div className={spacer} aria-hidden />}
          {PRESS.map((item, i) => (
            <div
              key={item.href}
              data-idx={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`w-[88%] shrink-0 snap-center transition-opacity duration-500 sm:w-[84%] lg:w-[74%] ${
                many && i !== active ? 'opacity-40' : 'opacity-100'
              }`}
            >
              <PressCard item={item} />
            </div>
          ))}
          {many && <div className={spacer} aria-hidden />}
        </div>

        {/* progress rail — reads as a scrollbar, not a dot cluster */}
        {many && (
          <div className="mt-6 flex gap-1.5">
            {PRESS.map((item, i) => (
              <button
                key={item.href}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${item.outlet}: ${item.title}`}
                aria-current={i === active}
                className="group flex-1 py-2"
              >
                <span
                  className={`block h-0.5 w-full transition-colors duration-300 ${
                    i === active ? 'bg-arc-600' : 'bg-black/10 group-hover:bg-arc-300'
                  }`}
                />
              </button>
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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-arc-800 bg-arc-900 p-6 transition-colors duration-300 hover:border-arc-500 sm:p-9">
      {/* whole-card link (overlay); coverage links sit above it via z-20 */}
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${item.outlet}: ${item.title}`}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arc-300"
      />

      {/* masthead — the outlet set as a running head over a hairline rule */}
      <div className="relative flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-white/15 pb-4">
        <span className="text-base font-bold tracking-tight text-white">
          {item.outlet}
        </span>
        {item.type && (
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-arc-300">
            {item.type}
          </span>
        )}
        <span className="ml-auto text-xs tabular-nums text-white/45">
          {item.date}
          {item.via && ` · via ${item.via}`}
        </span>
      </div>

      {/* content grows so the footer sits at a shared height across cards */}
      <div className="relative flex flex-1 flex-col pt-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
          <div className="shrink-0">
            {item.image ? (
              <img
                src={item.image}
                alt={item.person ?? item.outlet}
                loading="lazy"
                className="h-20 w-20 rounded-full object-cover ring-1 ring-white/25 sm:h-24 sm:w-24"
              />
            ) : (
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/[0.07] ring-1 ring-white/25 sm:h-24 sm:w-24">
                <ArcMark className="h-9 w-9 text-white/70" strokeWidth={4} />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-bold leading-[1.25] tracking-tight text-white sm:text-[1.7rem]">
              {item.title}
            </h3>

            {item.summary && (
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                {item.summary}
              </p>
            )}
          </div>
        </div>

        {item.coverage?.length > 0 && (
          <div className="mt-7">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/40">
              Also covered by
            </p>
            <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-2">
              {item.coverage.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-20 text-xs font-medium text-white/65 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-arc-300"
                >
                  {c.outlet}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* shared-height footer: hairline + byline + call to action */}
      <div className="relative mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-white/15 pt-5 text-sm">
        {item.person && <span className="text-white/55">{item.person}</span>}
        <span className="ml-auto inline-flex items-center gap-1.5 font-semibold text-arc-300 transition-colors group-hover:text-white">
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
      className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-ink-700 transition-all hover:border-arc-600 hover:bg-arc-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-black/15 disabled:hover:bg-transparent disabled:hover:text-ink-700"
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
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
