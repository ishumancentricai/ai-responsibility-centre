import { Link } from 'react-router-dom'
import Reveal, { Stagger, StaggerItem } from './Reveal'
import { EVENTS } from '../data/content'

// Colour-coded by event type.
const TYPE_STYLES = {
  Conference: 'bg-arc-100 text-arc-800',
  'Campus event': 'bg-violet-100 text-violet-800',
  Workshop: 'bg-amber-100 text-amber-800',
  Launch: 'bg-rose-100 text-rose-800',
  Policy: 'bg-sky-100 text-sky-800',
}

/**
 * UpcomingEvents — engaging events card grid, shared by the Home and
 * Events & Milestones pages so both stay in sync.
 */
export default function UpcomingEvents({
  className = 'bg-white py-20 sm:py-28',
  cardClassName = 'border border-black/5 bg-gradient-to-b from-arc-50 to-white',
  heading = 'Upcoming events',
  subheading = 'Where you’ll find us next.',
  cta,
}) {
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
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-arc-700 transition-colors hover:text-arc-800"
              >
                {cta.label}
                <Arrow />
              </Link>
            )}
          </div>
        </Reveal>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" step={0.1}>
          {EVENTS.map((ev) => {
            const Tag = ev.href ? 'a' : 'div'
            return (
              <StaggerItem key={`${ev.title}-${ev.date}`}>
                <Tag
                  {...(ev.href
                    ? { href: ev.href, target: '_blank', rel: 'noreferrer' }
                    : {})}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-all duration-300 ${cardClassName} ${
                    ev.href
                      ? 'hover:-translate-y-1.5 hover:border-arc-300 hover:shadow-2xl hover:shadow-arc-900/10'
                      : ''
                  }`}
                >
                  {/* animated top accent */}
                  <span
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-arc-600 to-arc-300 transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden
                  />

                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-arc-600 px-3 py-1 text-xs font-bold tracking-wide text-white">
                      <CalendarIcon />
                      {ev.date}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        TYPE_STYLES[ev.type] ?? 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {ev.type}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold leading-snug tracking-tight text-ink-900">
                    {ev.title}
                  </h3>
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-arc-700">
                    <PinIcon />
                    {ev.location}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                    {ev.blurb}
                  </p>

                  {ev.href && (
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-arc-700">
                      Event website
                      <Arrow />
                    </span>
                  )}
                </Tag>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
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

function CalendarIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect
        x="2.5"
        y="3.5"
        width="11"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M2.5 6.5h11M5.5 2v3M10.5 2v3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
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
