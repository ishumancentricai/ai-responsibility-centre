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
  className = 'border-b border-black/5 bg-white py-20 sm:py-28',
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
                    i === active ? 'bg-arc-600' : 'bg-black/10 group-hover:bg-arc-300'
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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-arc-800 bg-arc-900 p-6 shadow-xl shadow-arc-950/20 transition-colors duration-300 hover:border-arc-500 sm:p-9">
      {/* spine — the shaded gutter a folded page shows at its hinge */}
      <span
        className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/35 to-transparent"
        aria-hidden
      />

      {/* whole-card link (overlay); coverage links sit above it via z-20 */}
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        tabIndex={inert ? -1 : undefined}
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
                draggable={false}
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
                  tabIndex={inert ? -1 : undefined}
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
