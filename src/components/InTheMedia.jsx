import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
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

/**
 * Where a card sits in the stack, given how far it is from the open page.
 *
 * Pages hinge on their left edge, the way a broadsheet does: the open page
 * lies flat, unread pages wait underneath with their right edge peeking out,
 * and a page you have read swings left past 90° and is gone. Everything is a
 * transform on a composited layer, so the turn stays on the GPU.
 */
function pageState(offset) {
  if (offset < 0) {
    // Already turned — swung left off the spine.
    return { rotateY: -118, x: '-4%', z: 40, scale: 1, opacity: 0 }
  }
  if (offset === 0) {
    return { rotateY: 0, x: '0%', z: 0, scale: 1, opacity: 1 }
  }
  // Still to come: progressively further back, nudged right so the edges show.
  const depth = Math.min(offset, 3)
  return {
    rotateY: 3.5 * depth,
    x: `${2.6 * depth}%`,
    z: -70 * depth,
    scale: 1 - 0.035 * depth,
    opacity: depth >= 3 ? 0 : 0.5 - 0.12 * (depth - 1),
  }
}

/**
 * InTheMedia — press & media coverage as a deck you leaf through, newest
 * first. Drag, arrow keys, the prev/next buttons or the progress rail all
 * turn the page. Only the open page takes pointer input, so the edges
 * peeking out behind it can never swallow a click.
 *
 * Only outlet, headline, our own summary and outbound links — never article
 * text; portraits are ARC's own images.
 */
export default function InTheMedia({
  className = 'border-b border-black/5 bg-paper-200 py-20 sm:py-28',
}) {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const drag = useRef({ x: 0, moved: false })
  const many = PRESS.length > 1

  if (!PRESS.length) return null

  const last = PRESS.length - 1
  const goTo = (i) => setActive(Math.min(Math.max(i, 0), last))
  const step = (dir) => goTo(active + dir)

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      step(1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      step(-1)
    }
  }

  // Pointer drag — a flick past the threshold turns the page. The flag
  // suppresses the click that would otherwise follow the whole-card link.
  const onPointerDown = (e) => {
    drag.current = { x: e.clientX, moved: false }
  }
  const onPointerUp = (e) => {
    const dx = e.clientX - drag.current.x
    if (Math.abs(dx) > 60) {
      drag.current.moved = true
      step(dx < 0 ? 1 : -1)
    }
  }
  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault()
      e.stopPropagation()
      drag.current.moved = false
    }
  }

  return (
    <section className={className}>
      <div className="container-arc">
        <Reveal>
          <div className="flex items-end justify-between gap-4 border-b border-ink-900/15 pb-5">
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
                <p className="hidden text-sm tabular-nums text-ink-500 sm:block">
                  <span className="font-semibold text-ink-900">
                    {String(active + 1).padStart(2, '0')}
                  </span>
                  <span className="mx-1.5 text-ink-500/50">/</span>
                  {String(PRESS.length).padStart(2, '0')}
                </p>
                <div className="hidden gap-2 sm:flex">
                  <NavButton
                    label="Previous article"
                    onClick={() => step(-1)}
                    disabled={active === 0}
                    dir={-1}
                  />
                  <NavButton
                    label="Next article"
                    onClick={() => step(1)}
                    disabled={active === last}
                    dir={1}
                  />
                </div>
              </div>
            )}
          </div>
        </Reveal>

        {/* Stage — one grid cell holds every page, so the section is exactly
            as tall as the longest article and never jumps while turning. */}
        <div
          onKeyDown={onKeyDown}
          onPointerDown={many ? onPointerDown : undefined}
          onPointerUp={many ? onPointerUp : undefined}
          onClickCapture={onClickCapture}
          tabIndex={many ? 0 : undefined}
          role={many ? 'region' : undefined}
          aria-roledescription={many ? 'carousel' : undefined}
          aria-label={many ? 'Press coverage' : undefined}
          className="mt-10 grid touch-pan-y select-none focus-visible:outline-none"
          style={{ perspective: '1900px', perspectiveOrigin: '30% 50%' }}
        >
          {PRESS.map((item, i) => {
            const offset = i - active
            const s = pageState(offset)
            const buried = offset !== 0
            return (
              <motion.div
                key={item.href}
                className="col-start-1 row-start-1"
                style={{
                  transformOrigin: 'left center',
                  backfaceVisibility: 'hidden',
                  zIndex: PRESS.length - Math.abs(offset),
                  pointerEvents: offset === 0 ? 'auto' : 'none',
                }}
                initial={false}
                animate={
                  reduce
                    ? { opacity: offset === 0 ? 1 : 0 }
                    : {
                        rotateY: s.rotateY,
                        x: s.x,
                        z: s.z,
                        scale: s.scale,
                        opacity: s.opacity,
                      }
                }
                transition={
                  reduce
                    ? { duration: 0.2 }
                    : { duration: 0.75, ease: [0.33, 1, 0.68, 1] }
                }
                aria-hidden={buried}
              >
                <PressCard item={item} inert={buried} />
              </motion.div>
            )
          })}
        </div>

        {many && (
          <div className="mt-7 flex gap-1.5">
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
                    i === active ? 'bg-arc-700' : 'bg-ink-900/15 group-hover:bg-arc-500'
                  }`}
                />
              </button>
            ))}
          </div>
        )}

        {many && (
          <p className="mt-3 text-xs text-ink-500">
            Drag, swipe or use the arrow keys to turn the page.
          </p>
        )}
      </div>
    </section>
  )
}

function PressCard({ item, inert }) {
  const readLabel = READ_LABEL[item.type] ?? 'Read more'
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-paper-300 bg-paper-50 p-6 shadow-[0_18px_40px_-18px_rgba(15,28,24,0.45)] transition-colors duration-300 hover:border-ink-500/40 sm:p-9">
      {/* spine — the shaded gutter a folded sheet shows at its hinge */}
      <span
        className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-ink-900/12 via-ink-900/[0.03] to-transparent"
        aria-hidden
      />

      {/* whole-card link (overlay); coverage links sit above it via z-20 */}
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        tabIndex={inert ? -1 : undefined}
        aria-label={`${item.outlet}: ${item.title}`}
        className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arc-600"
      />

      {/* masthead — outlet in caps between the rules a broadsheet uses */}
      <div className="relative border-y-[3px] border-double border-ink-900/70 py-2">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-ink-900">
            {item.outlet}
          </span>
          <span className="ml-auto text-xs tabular-nums text-ink-500">
            {item.date}
            {item.via && ` · via ${item.via}`}
          </span>
        </div>
      </div>

      {item.type && (
        <p className="relative mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-arc-700">
          {item.type}
        </p>
      )}

      {/* content grows so the footer sits at a shared height across cards */}
      <div className="relative flex flex-1 flex-col pt-3">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
          <div className="shrink-0">
            {item.image ? (
              <img
                src={item.image}
                alt={item.person ?? item.outlet}
                loading="lazy"
                draggable={false}
                className="h-24 w-20 object-cover grayscale-[0.35] ring-1 ring-ink-900/15 sm:h-28 sm:w-24"
              />
            ) : (
              <div className="flex h-24 w-20 items-center justify-center bg-paper-100 ring-1 ring-ink-900/15 sm:h-28 sm:w-24">
                <ArcMark className="h-9 w-9 text-ink-500" strokeWidth={4} />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-serif text-2xl font-bold leading-[1.15] tracking-tight text-ink-900 sm:text-[2rem]">
              {item.title}
            </h3>

            {item.summary && (
              <p className="mt-3 text-sm leading-relaxed text-ink-700 sm:text-base">
                {item.summary}
              </p>
            )}
          </div>
        </div>

        {item.coverage?.length > 0 && (
          <div className="mt-7">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-500">
              Also covered by
            </p>
            <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-2">
              {item.coverage.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={inert ? -1 : undefined}
                  className="relative z-20 text-xs font-medium text-ink-700 underline decoration-ink-900/25 underline-offset-4 transition-colors hover:text-arc-700 hover:decoration-arc-600"
                >
                  {c.outlet}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* shared-height footer: hairline + byline + call to action */}
      <div className="relative mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-ink-900/20 pt-5 text-sm">
        {item.person && <span className="italic text-ink-500">{item.person}</span>}
        <span className="ml-auto inline-flex items-center gap-1.5 font-semibold text-arc-700 transition-colors group-hover:text-arc-800">
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
      className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/20 text-ink-700 transition-all hover:border-arc-700 hover:bg-arc-700 hover:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-ink-900/20 disabled:hover:bg-transparent disabled:hover:text-ink-700"
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
