import PageHeader from '../components/PageHeader'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import UpcomingEvents from '../components/UpcomingEvents'
import { MILESTONES, HIGHLIGHTS } from '../data/content'

const TRACK_STYLES = {
  Research: 'bg-arc-100 text-arc-800',
  Application: 'bg-violet-100 text-violet-800',
  Policy: 'bg-rose-100 text-rose-800',
  Funding: 'bg-slate-200 text-slate-700',
}

export default function Roadmap() {
  return (
    <>
      <PageHeader
        eyebrow="Events & Milestones"
        title="What we’ve been working on."
        intro="Scroll down to trace our journey back to the start."
      />

      <UpcomingEvents className="bg-white pt-16 sm:pt-20" />

      {/* Highlights */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-arc">
          <Stagger
            className="grid grid-cols-2 gap-8 border-b border-black/5 pb-16 lg:grid-cols-4"
            step={0.1}
          >
            {HIGHLIGHTS.map((s) => (
              <StaggerItem key={s.label}>
                <p className="text-4xl font-bold tracking-tight text-arc-600 sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 font-medium text-ink-900">{s.label}</p>
                <p className="mt-1 text-sm text-ink-500">{s.sub}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Timeline — present at top, past at bottom */}
      <section className="bg-white pb-24 sm:pb-32">
        <div className="container-arc">
          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-[7px] top-0 bottom-8 w-px bg-gradient-to-b from-arc-500 to-arc-100 sm:left-[calc(9rem+7px)]"
              aria-hidden
            />

            {/* "Now" marker */}
            <div className="relative mb-12 flex flex-col gap-4 sm:flex-row sm:gap-8">
              <div className="sm:w-36 sm:pr-6 sm:text-right">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
                  Now
                </span>
              </div>
              <span
                className="absolute left-0 top-1 grid h-4 w-4 place-items-center rounded-full bg-arc-600 sm:left-36"
                aria-hidden
              >
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-arc-500/60" />
              </span>
              <p className="ml-8 text-ink-500 sm:ml-10">... building responsible AI</p>
            </div>

            <Stagger className="space-y-14" step={0.1}>
              {MILESTONES.map((group) => (
                <StaggerItem key={group.period}>
                  <div className="relative flex flex-col gap-4 sm:flex-row sm:gap-8">
                    <div className="sm:w-36 sm:shrink-0 sm:pr-6 sm:text-right">
                      <span className="text-base font-bold text-arc-700">
                        {group.period}
                      </span>
                    </div>
                    {/* dot */}
                    <span
                      className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-arc-600 bg-white sm:left-36"
                      aria-hidden
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-arc-600" />
                    </span>

                    <ul className="ml-8 flex-1 space-y-4 sm:ml-10">
                      {group.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="rounded-2xl border border-black/5 bg-arc-50/40 p-5 transition-all hover:shadow-md"
                        >
                          <div className="flex flex-wrap items-center gap-3">
                            <span
                              className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                TRACK_STYLES[item.track] ?? 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {item.track}
                            </span>
                            <span className="font-semibold text-ink-900">
                              {item.title}
                            </span>
                          </div>

                          {item.text && (
                            <p className="mt-2 leading-relaxed text-ink-700">
                              {item.text}
                            </p>
                          )}

                          {(item.authors || item.href) && (
                            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                              {item.authors && (
                                <span className="italic text-ink-500">
                                  {item.authors}
                                </span>
                              )}
                              {item.href && (
                                <a
                                  href={item.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1.5 font-semibold text-arc-700 transition-colors hover:text-arc-800"
                                >
                                  Read the paper
                                  <span aria-hidden>→</span>
                                </a>
                              )}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* origin marker */}
            <div className="relative mt-14 flex flex-col gap-4 sm:flex-row sm:gap-8">
              <div className="sm:w-36 sm:pr-6 sm:text-right">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-400">
                  Where it began
                </span>
              </div>
              <span
                className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-arc-200 bg-white sm:left-36"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="border-t border-black/5 bg-arc-50/40 py-12">
        <div className="container-arc flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            Tracks
          </span>
          {['Research', 'Application', 'Policy', 'Funding'].map((track) => (
            <span key={track} className="flex items-center gap-2 text-sm text-ink-700">
              <span
                className={`h-3 w-3 rounded-full ${(TRACK_STYLES[track] ?? '').split(' ')[0]}`}
              />
              {track}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}
