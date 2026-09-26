import { Link } from 'react-router-dom'
import Reveal, { Stagger, StaggerItem } from './Reveal'
import ArcMark from './ArcMark'
import { EVENTS } from '../data/content'

/**
 * Split "Oct 5, 2026, 15:30" or "Sep 14–15, 2026" into the month and day
 * shown on the card's date plate. Anything unparseable falls back to the
 * raw string, so a hand-written date can never break the layout.
 */
function splitDate(date = '') {
  const m = /^([A-Za-z]{3,})\s+(\d+(?:[–-]\d+)?)/.exec(date)
  return m ? { month: m[1].slice(0, 3), day: m[2] } : { month: null, day: null }
}

// Everything after the day and year — a time, if the entry carries one.
function timeOf(date = '') {
  const m = /,\s*(\d{1,2}:\d{2})\s*$/.exec(date)
  return m ? m[1] : null
}

/**
 * UpcomingEvents — events as poster cards: a full-bleed photograph under a
 * deep scrim with the billing set over it, or, until a photograph exists,
 * a typographic plate built from the brand's own arch mark. Shared by the
 * Home and Events & Milestones pages so both stay in sync.
 *
 * Give an entry `image: '/events/<file>.jpg'` to use a photograph.
 */
export default function UpcomingEvents({
  className = 'bg-white py-20 sm:py-28',
  heading = 'Upcoming events',
  subheading = 'Where you’ll find us next.',
  cta,
}) {
  if (!EVENTS.length) return null

  return (
    <section className={className}>
      <div className="container-arc">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-arc-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-arc-600" />
                </span>
                {heading}
              </h2>
              <p className="mt-3 max-w-2xl text-2xl font-semibold leading-snug text-ink-900 sm:text-3xl">
                {subheading}
              </p>
            </div>
            {cta && (
              <Link
                to={cta.to}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-arc-700 transition-colors hover:text-arc-800"
              >
                {cta.label}
                <Arrow />
              </Link>
            )}
          </div>
        </Reveal>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" step={0.1}>
          {EVENTS.map((ev) => (
            <StaggerItem key={`${ev.title}-${ev.date}`}>
              <EventPoster ev={ev} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

function EventPoster({ ev }) {
  const Tag = ev.href ? 'a' : 'div'
  const { month, day } = splitDate(ev.date)
  const time = timeOf(ev.date)

  return (
    <Tag
      {...(ev.href ? { href: ev.href, target: '_blank', rel: 'noreferrer' } : {})}
      className={`group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-2xl bg-arc-950 p-6 transition-shadow duration-300 ${
        ev.href
          ? 'hover:shadow-2xl hover:shadow-arc-950/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arc-400 focus-visible:ring-offset-2'
          : ''
      }`}
    >
      {ev.image ? (
        <img
          src={ev.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
      ) : (
        /* No photograph yet: an engraved arch mark on the deep brand green,
           cropped hard so it reads as a printed poster rather than a gap. */
        <span className="absolute inset-0 -z-20 overflow-hidden" aria-hidden>
          <span className="absolute inset-0 bg-gradient-to-br from-arc-800 via-arc-900 to-arc-950" />
          <ArcMark
            className="absolute -right-16 -top-20 h-80 w-80 text-white/[0.07]"
            strokeWidth={3}
          />
          <span className="absolute inset-0 bg-grid opacity-[0.35]" />
        </span>
      )}

      {/* scrim — anchors the type and keeps contrast on any photograph */}
      <span
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900 via-ink-900/75 to-ink-900/25 transition-opacity duration-300 group-hover:from-ink-900 group-hover:via-ink-900/70"
        aria-hidden
      />

      {/* date plate, top-left — tear-off calendar, not a pill */}
      <div className="absolute left-6 top-6 flex flex-col items-center rounded-lg bg-white/95 px-3 py-2 text-arc-900 shadow-sm backdrop-blur-sm">
        {month ? (
          <>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em]">
              {month}
            </span>
            <span className="text-2xl font-bold leading-none tabular-nums">{day}</span>
          </>
        ) : (
          <span className="text-xs font-bold uppercase tracking-wide">{ev.date}</span>
        )}
      </div>

      {/* billing */}
      <div className="relative">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-arc-300">
          {ev.type}
          {time && <span className="text-white/45"> · {time}</span>}
        </p>

        <h3 className="mt-2 text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
          {ev.title}
        </h3>

        <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-white/70">
          <PinIcon />
          {ev.location}
        </p>

        {ev.blurb && (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/65">
            {ev.blurb}
          </p>
        )}

        {ev.href && (
          <span className="mt-4 inline-flex items-center gap-1.5 border-t border-white/15 pt-4 text-sm font-semibold text-white">
            Event website
            <Arrow />
          </span>
        )}
      </div>
    </Tag>
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

function PinIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 14.5s5-4.13 5-8a5 5 0 1 0-10 0c0 3.87 5 8 5 8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}
