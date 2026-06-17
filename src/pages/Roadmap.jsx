import PageHeader from '../components/PageHeader'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import { ROADMAP, ROADMAP_TARGETS } from '../data/content'

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
        eyebrow="Roadmap 2026"
        title="Milestones & deadlines on the path to a leading centre."
        intro="Becoming a leading centre for Responsible AI in Europe takes research success, strong visibility & application, and direct policy impact — through iterative exchange with decision-makers."
      />

      {/* Targets */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-arc">
          <Stagger className="grid grid-cols-2 gap-8 border-b border-black/5 pb-16 lg:grid-cols-4" step={0.1}>
            {ROADMAP_TARGETS.map((t) => (
              <StaggerItem key={t.label}>
                <p className="text-5xl font-bold tracking-tight text-arc-600">{t.value}</p>
                <p className="mt-2 font-medium text-ink-700">{t.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white pb-24 sm:pb-32">
        <div className="container-arc">
          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-[7px] top-2 bottom-2 w-px bg-arc-200 sm:left-[calc(8rem+7px)]"
              aria-hidden
            />
            <Stagger className="space-y-12" step={0.1}>
              {ROADMAP.map((month) => (
                <StaggerItem key={month.month}>
                  <div className="relative flex flex-col gap-4 sm:flex-row sm:gap-8">
                    <div className="flex items-center gap-4 sm:w-32 sm:flex-col sm:items-end sm:gap-0">
                      <span className="order-2 text-base font-bold text-arc-700 sm:order-1">
                        {month.month}
                      </span>
                    </div>
                    {/* dot */}
                    <span
                      className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-arc-600 bg-white sm:left-32"
                      aria-hidden
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-arc-600" />
                    </span>
                    <ul className="ml-8 flex-1 space-y-3 sm:ml-10">
                      {month.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex flex-wrap items-center gap-3 rounded-2xl border border-black/5 bg-arc-50/40 px-5 py-3.5"
                        >
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              TRACK_STYLES[item.track] ?? 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {item.track}
                          </span>
                          <span className="text-ink-800">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
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
