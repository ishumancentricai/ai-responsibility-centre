import { useEffect, useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import ArcMark from './ArcMark'
import { PRESS } from '../data/content'

// Call-to-action wording adapts to the medium.
const READ_LABEL = {
  Interview: 'Read the interview',
  'Press release': 'Read the release',
  Podcast: 'Listen to the episode',
  Video: 'Watch the interview',
}

// Seconds per full pass, one per column. Deliberately uneven, so the columns
// never fall into step and the wall keeps drifting rather than marching.
const DURATIONS = [74, 92, 83, 101]

/**
 * Every card on the wall: each press story, plus each outlet that picked a
 * story up. The syndication mentions carry only the outlet and a link — that
 * is all we hold on them — which makes them the short cards, and the stories
 * with a portrait the tall ones.
 */
function buildCards() {
  const stories = PRESS.map((item) => ({ kind: 'story', key: item.href, item }))
  const mentions = PRESS.flatMap((item) =>
    (item.coverage ?? []).map((cv) => ({
      kind: 'mention',
      key: `${item.href}#${cv.href}`,
      outlet: cv.outlet,
      href: cv.href,
      story: item.title,
    })),
  )

  // Shuffled once, with a fixed seed. Dealing a neatly interleaved list
  // round-robin would hand every story to the same two columns; a seeded
  // shuffle scatters tall and short while keeping the wall identical on
  // every render.
  return shuffle([...stories, ...mentions], 0x5eed)
}

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

// Deal round-robin, so neighbouring columns never start on the same card.
function dealColumns(cards, count) {
  const cols = Array.from({ length: count }, () => [])
  cards.forEach((card, i) => cols[i % count].push(card))
  return cols
}

const pick = (w) => (w >= 1024 ? 4 : w >= 640 ? 2 : 1)

/** 4 columns on a desktop, 2 on a tablet, 1 on a phone. */
function useColumnCount() {
  const [count, setCount] = useState(() =>
    typeof window === 'undefined' ? 4 : pick(window.innerWidth),
  )
  useEffect(() => {
    const onResize = () => setCount(pick(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return count
}

/**
 * InTheMedia — press coverage as a wall of columns creeping downward, each on
 * its own clock. Cards take the height their content needs, so the wall stays
 * uneven without anything jumping.
 *
 * The drift pauses on hover and on keyboard focus, and there is an explicit
 * pause control besides (WCAG 2.2.2). Under reduced motion the wall is simply
 * a static grid. Each column renders its cards twice so the loop closes
 * seamlessly; the second pass is hidden from assistive tech.
 *
 * Only outlet, headline, our own summary and outbound links — never article
 * text; portraits are ARC's own images.
 */
export default function InTheMedia({
  className = 'border-b border-black/5 bg-paper-200 py-20 sm:py-28',
}) {
  const reduce = useReducedMotion()
  const [paused, setPaused] = useState(false)
  const columnCount = useColumnCount()
  const cards = useMemo(() => buildCards(), [])
  const columns = useMemo(() => dealColumns(cards, columnCount), [cards, columnCount])

  if (!PRESS.length) return null

  // A static grid when the visitor has asked for less motion.
  if (reduce) {
    return (
      <section className={className}>
        <div className="container-arc">
          <Header />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <Card key={card.key} card={card} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  const mask = 'linear-gradient(to bottom, transparent, #000 7%, #000 93%, transparent)'

  return (
    <section className={className}>
      <div className="container-arc">
        <Header paused={paused} onToggle={() => setPaused((p) => !p)} />

        {/* The wall. Hovering or tabbing into it stops the drift. */}
        <div
          className="group relative mt-10 h-[34rem] overflow-hidden sm:h-[40rem] lg:h-[46rem]"
          style={{ maskImage: mask, WebkitMaskImage: mask }}
        >
          <div className="grid h-full grid-flow-col auto-cols-fr gap-5">
            {columns.map((col, c) => {
              // Twice through, so the track fills the column before the
              // loop point comes round.
              const half = [...col, ...col]
              return (
                <div key={c} className="relative overflow-hidden">
                  <div
                    className="animate-wall flex flex-col gap-5 group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused]"
                    data-paused={paused}
                    style={{
                      '--wall-duration': `${DURATIONS[c % DURATIONS.length]}s`,
                    }}
                  >
                    {half.map((card, i) => (
                      <Card key={`a-${card.key}-${i}`} card={card} />
                    ))}
                    {half.map((card, i) => (
                      <Card key={`b-${card.key}-${i}`} card={card} duplicate />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function Header({ paused, onToggle }) {
  return (
    <Reveal>
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink-900/15 pb-5">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
            In the media
          </h2>
          <p className="mt-3 max-w-2xl text-2xl font-semibold leading-snug text-ink-900 sm:text-3xl">
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

function Card({ card, duplicate }) {
  return card.kind === 'story' ? (
    <StoryCard item={card.item} duplicate={duplicate} />
  ) : (
    <MentionCard card={card} duplicate={duplicate} />
  )
}

/** A full press story: portrait on top, masthead, headline, summary. */
function StoryCard({ item, duplicate }) {
  const readLabel = READ_LABEL[item.type] ?? 'Read more'
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      tabIndex={duplicate ? -1 : undefined}
      aria-hidden={duplicate}
      className="group/card block overflow-hidden rounded-sm border border-paper-300 bg-paper-50 shadow-[0_10px_28px_-20px_rgba(15,28,24,0.45)] transition-colors hover:border-ink-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arc-600"
    >
      {item.image ? (
        <img
          src={item.image}
          alt=""
          loading="lazy"
          draggable={false}
          className="aspect-[4/3] w-full object-cover object-top"
        />
      ) : (
        <div className="grid aspect-[4/3] w-full place-items-center bg-paper-100">
          <ArcMark className="h-10 w-10 text-ink-500/60" strokeWidth={4} />
        </div>
      )}

      <div className="p-5">
        <div className="flex flex-wrap items-baseline gap-x-2 border-b border-ink-900 pb-2">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-ink-900">
            {item.outlet}
          </span>
          <span className="ml-auto text-[0.68rem] tabular-nums text-ink-500">
            {item.date}
          </span>
        </div>

        {item.type && (
          <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-arc-700">
            {item.type}
          </p>
        )}

        <h3 className="mt-1.5 font-serif text-lg font-bold leading-[1.2] tracking-tight text-ink-900">
          {item.title}
        </h3>

        {item.summary && (
          <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-ink-700">
            {item.summary}
          </p>
        )}

        <div className="mt-4 flex items-center gap-x-3 border-t border-ink-900/15 pt-3 text-xs">
          {item.person && (
            <span className="truncate italic text-ink-500">{item.person}</span>
          )}
          <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 font-semibold text-arc-700">
            {readLabel}
            <Arrow />
          </span>
        </div>
      </div>
    </a>
  )
}

/** An outlet that picked a story up — the outlet and a link is all we hold. */
function MentionCard({ card, duplicate }) {
  return (
    <a
      href={card.href}
      target="_blank"
      rel="noreferrer"
      tabIndex={duplicate ? -1 : undefined}
      aria-hidden={duplicate}
      className="group/card block rounded-sm border border-paper-300 bg-paper-100 p-5 transition-colors hover:border-ink-500/40 hover:bg-paper-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arc-600"
    >
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ink-500">
        Also covered by
      </p>
      <p className="mt-2 border-b border-ink-900 pb-2 text-sm font-bold uppercase tracking-[0.14em] text-ink-900">
        {card.outlet}
      </p>
      <p className="mt-2.5 font-serif text-sm leading-snug text-ink-700">{card.story}</p>
      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-arc-700">
        Read more
        <Arrow />
      </span>
    </a>
  )
}

function Arrow() {
  return (
    <svg
      className="h-3 w-3 transition-transform duration-300 group-hover/card:translate-x-1"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 8h9M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
