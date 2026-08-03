import Reveal, { Stagger, StaggerItem } from './Reveal'
import { PRESS } from '../data/content'

// Colour-coded by coverage type (light chips read well on the deep-green card).
const TYPE_STYLES = {
  Interview: 'bg-arc-100 text-arc-900',
  Feature: 'bg-violet-100 text-violet-900',
  Podcast: 'bg-amber-100 text-amber-900',
  'Op-ed': 'bg-rose-100 text-rose-900',
}

// Call-to-action wording adapts to the medium.
const READ_LABEL = {
  Interview: 'Read the interview',
  Podcast: 'Listen to the episode',
  Video: 'Watch the interview',
}

/**
 * InTheMedia — press & media coverage featuring ARC.
 * Shows the outlet, the piece's own headline, our own brief summary, the
 * featured person and an outbound link. Never reproduces article text.
 */
export default function InTheMedia({
  className = 'border-b border-black/5 bg-white py-20 sm:py-28',
}) {
  if (!PRESS?.length) return null

  return (
    <section className={className}>
      <div className="container-arc">
        <Reveal>
          <h2 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
            <NewsIcon />
            In the media
          </h2>
          <p className="mt-3 max-w-2xl text-2xl font-semibold leading-snug text-ink-900 sm:text-3xl">
            ARC in the press.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-5" step={0.1}>
          {PRESS.map((item) => (
            <StaggerItem key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-arc-800 to-arc-950 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-arc-400/40 hover:shadow-2xl hover:shadow-arc-950/40 sm:flex-row sm:items-center sm:p-8"
              >
                {/* soft radial highlight for depth */}
                <span
                  className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-arc-500/20 blur-3xl"
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

                {/* featured person's face (ARC's own portrait, not a press photo) */}
                {item.image && (
                  <div className="relative shrink-0 self-start sm:self-center">
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
                  </div>
                )}

                <div className="relative min-w-0 flex-1">
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
                    <span className="text-xs font-medium text-white/50">{item.date}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  {item.summary && (
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
                      {item.summary}
                    </p>
                  )}

                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    {item.person && (
                      <span className="font-medium text-white/60">{item.person}</span>
                    )}
                    <span className="ml-auto inline-flex items-center gap-1.5 font-semibold text-arc-300 transition-colors group-hover:text-arc-200">
                      {READ_LABEL[item.type] ?? 'Read the article'}
                      <Arrow />
                    </span>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
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
