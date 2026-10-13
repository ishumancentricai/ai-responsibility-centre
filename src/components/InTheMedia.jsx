import { useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import ArcMark from './ArcMark'
import Illustration from './Illustration'
import MediumIcon from './MediumIcon'
import { PRESS, illustrationByTitle } from '../data/content'

// Seconds per full pass, one per row. Deliberately uneven, so the rows never
// fall into step and the wall keeps drifting rather than marching.
const DURATIONS = [168, 208]
const ROWS = 2

/** Fisher–Yates driven by mulberry32, so the order is mixed but fixed. */
function shuffle(list, seed) {
  let s = seed
  const rand = () => {
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  const out = [...list]
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

function dealRows(cards, count) {
  const rows = Array.from({ length: count }, () => [])
  cards.forEach((card, i) => rows[i % count].push(card))
  return rows
}

/**
 * InTheMedia — press coverage as two rows drifting left to right, each on its
 * own clock. The rows run the full width of the window rather than the text
 * column, which is what lets two rows hold the coverage in little height.
 *
 * Only the stories travel. Outlets that reprinted one hang off that story and
 * appear on hover, so the wall stays about ARC's own coverage rather than
 * seven papers carrying the same wire piece.
 *
 * The drift pauses on hover and on keyboard focus, and there is an explicit
 * pause control besides (WCAG 2.2.2). Under reduced motion the wall is a
 * static grid. Each row renders its cards twice so the loop closes
 * seamlessly; the second pass is hidden from assistive tech.
 *
 * Only outlet, headline, our own summary and outbound links — never article
 * text; portraits are ARC's own images.
 */
export default function InTheMedia({
  className = 'border-b border-black/5 bg-white py-20 sm:py-28',
}) {
  const reduce = useReducedMotion()
  const [paused, setPaused] = useState(false)
  const cards = useMemo(() => shuffle(PRESS, 0x5eed), [])
  const rows = useMemo(() => dealRows(cards, ROWS), [cards])

  if (!PRESS.length) return null

  if (reduce) {
    return (
      <section className={className}>
        <div className="container-arc">
          <Header />
          <div className="border-b border-ink-900/15" />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {cards.map((item) => (
              <StoryCard key={item.href} item={item} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  const mask = 'linear-gradient(to right, transparent, #000 4%, #000 96%, transparent)'

  return (
    <section className={className}>
      <div className="container-arc">
        <Header paused={paused} onToggle={() => setPaused((p) => !p)} />
      </div>
      {/* Wider than the text column, but held off the window edge by the
          same gutter the rest of the page keeps. */}
      <div className="mx-6 border-b border-ink-900/15 sm:mx-8" />

      {/* Full-bleed: the rows leave the text column and use the whole window. */}
      <div
        className="group mt-8 flex flex-col gap-5 overflow-hidden py-2"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      >
        {rows.map((row, r) => {
          // Twice through, so the track is wider than any window before the
          // loop point comes round.
          const half = [...row, ...row]
          return (
            <div
              key={r}
              className="animate-wall flex w-max gap-5 group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused]"
              data-paused={paused}
              style={{ '--wall-duration': `${DURATIONS[r % DURATIONS.length]}s` }}
            >
              {half.map((item, i) => (
                <StoryCard key={`a-${item.href}-${i}`} item={item} />
              ))}
              {half.map((item, i) => (
                <StoryCard key={`b-${item.href}-${i}`} item={item} duplicate />
              ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Header({ paused, onToggle }) {
  return (
    <Reveal>
      <div className="flex flex-wrap items-end justify-between gap-4 pb-5">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-label text-arc-600">
            In the media
          </h2>
          <p className="mt-3 max-w-2xl text-2xl font-semibold leading-snug tracking-display text-ink-900 sm:text-3xl">
            ARC in the press.
          </p>
        </div>
        {onToggle && (
          <button
            type="button"
            onClick={onToggle}
            aria-pressed={paused}
            className="inline-flex items-center gap-2 rounded-full border border-ink-900/20 px-3.5 py-1.5 text-xs font-semibold text-ink-700 transition-colors hover:border-arc-700 hover:text-arc-700"
          >
            {paused ? <PlayIcon /> : <PauseIcon />}
            {paused ? 'Resume' : 'Pause'}
          </button>
        )}
      </div>
    </Reveal>
  )
}

/**
 * A press story, laid on its side so the row stays shallow. Set in the site's
 * own typeface: a second family for these headlines alone read as a fifth
 * voice on a page that already has few.
 *
 * Every card is the same height. That is what keeps the rows even, and it
 * also bounds the tall pictures: their band takes its width from the card's
 * height, so without a fixed height a long headline would quietly make the
 * picture beside it wider.
 *
 * Not an anchor itself: the reprint list and the picture credit hold links of
 * their own, and an anchor inside an anchor is invalid — the browser unnests
 * it and the inner links stop working. A covering link sits beneath both
 * instead.
 */
function StoryCard({ item, duplicate }) {
  const reprints = item.coverage ?? []
  const art = item.art ? illustrationByTitle(item.art) : null
  // A tall picture goes beside the text, a wide one beneath it. For a tall
  // one `portrait` holds its width/height, so the band can take exactly the
  // width that picture needs at the card's height rather than being cropped
  // into a fixed one.
  const portrait = art ? art.portrait : item.portrait

  return (
    <article
      aria-hidden={duplicate}
      className={`group/card relative flex h-[21rem] shrink-0 overflow-hidden rounded-sm border border-paper-300 bg-paper-50 transition duration-300 ease-out hover:z-10 hover:scale-[1.015] hover:border-ink-500/40 ${
        portrait
          ? 'w-auto min-w-[28rem] max-w-[38rem] flex-row'
          : 'w-auto min-w-[26rem] max-w-[34rem] flex-col'
      }`}
    >
      <div
        className={portrait ? 'flex min-w-0 flex-1 flex-col p-5' : 'min-w-0 shrink-0 p-5'}
      >
        <div className="flex items-baseline gap-2 border-b border-ink-900 pb-1.5">
          <span className="truncate text-xs font-bold uppercase tracking-label text-ink-900">
            {item.outlet}
          </span>
          {!portrait && (
            <span className="ml-auto shrink-0 text-xs tabular-nums text-ink-500">
              {item.date}
            </span>
          )}
        </div>

        <h3
          className={`mt-2 text-lg font-bold leading-tight tracking-display text-ink-900 ${
            portrait ? 'line-clamp-3' : 'line-clamp-2'
          }`}
        >
          {item.titleEn ?? item.title}
        </h3>

        {item.type && (
          <p className="mt-2.5 text-arc-700">
            <MediumIcon medium={item.type} className="h-5 w-5" />
          </p>
        )}

        {portrait && (
          <span className="mt-auto pt-3 text-xs tabular-nums text-ink-500">
            {item.date}
          </span>
        )}
      </div>

      {/* Beside the text when the picture is tall, beneath it when wide. */}
      <div
        style={portrait ? { aspectRatio: portrait } : undefined}
        className={
          portrait
            ? 'w-auto shrink-0 self-stretch border-l border-paper-300'
            : 'min-h-0 w-full flex-1 border-t border-paper-300'
        }
      >
        {art ? (
          <Illustration
            item={art}
            className="h-full w-full"
            imgClassName="h-full w-full object-cover"
          />
        ) : item.image ? (
          <img
            src={item.image}
            alt=""
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover object-top grayscale-[0.15] transition-all duration-500 group-hover/card:grayscale-0"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-paper-100">
            <ArcMark className="h-8 w-8 text-ink-500/60" strokeWidth={4} />
          </div>
        )}
      </div>

      {/* Covers the card, under the reprint list and the picture credit so
          both stay clickable. */}
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        tabIndex={duplicate ? -1 : undefined}
        aria-label={`${item.outlet}: ${item.titleEn ?? item.title}`}
        className="absolute inset-0 z-10 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arc-600"
      />

      {/* The outlets that reprinted the story, rising from the bottom edge.
          Inside the card rather than beside it: the row clips its own
          overflow to run the marquee, so anything escaping would be cut off. */}
      {reprints.length > 0 && (
        <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full border-t border-ink-900/15 bg-paper-50 px-5 py-3 transition-transform duration-300 group-focus-within/card:translate-y-0 group-hover/card:translate-y-0">
          <ul className="flex flex-wrap gap-x-3 gap-y-0.5">
            {reprints.map((cv) => (
              <li key={cv.href}>
                <a
                  href={cv.href}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={duplicate ? -1 : undefined}
                  className="text-xs font-medium text-ink-700 underline decoration-ink-900/25 underline-offset-2 transition-colors hover:text-arc-700 hover:decoration-arc-600"
                >
                  {cv.outlet}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

function PauseIcon() {
  return (
    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
      <rect x="2" y="1.5" width="3" height="9" rx="1" />
      <rect x="7" y="1.5" width="3" height="9" rx="1" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
      <path d="M3 1.5v9l8-4.5-8-4.5Z" />
    </svg>
  )
}
