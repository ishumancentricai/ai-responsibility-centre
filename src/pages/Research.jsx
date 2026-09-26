import PageHeader from '../components/PageHeader'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import { MILESTONES } from '../data/content'

// Pull the research papers straight from the milestone timeline, so the
// publication list and the timeline never drift apart.
const PUBLICATIONS = MILESTONES.flatMap((group) =>
  group.items.filter((item) => item.track === 'Research'),
).sort((a, b) => (b.year ?? 0) - (a.year ?? 0))

export default function Research() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Publications."
        intro="Peer-reviewed work from the AI Responsibility Centre."
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-arc">
          <Stagger className="space-y-8" step={0.08}>
            {PUBLICATIONS.map((p, i) => (
              <StaggerItem key={p.paper ?? p.title}>
                <article className="flex gap-5 border-b border-black/5 pb-8 last:border-0">
                  <span className="shrink-0 pt-0.5 font-semibold tabular-nums text-arc-600">
                    [{i + 1}]
                  </span>
                  <div className="flex flex-1 flex-col gap-5 lg:flex-row lg:items-start lg:gap-10">
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-semibold leading-snug text-ink-900">
                        {p.paper ?? p.title}
                      </h2>
                      {p.authors && <p className="mt-1.5 text-ink-700">{p.authors}</p>}
                      <p className="mt-1 text-sm italic text-ink-500">
                        {[p.venue, p.year].filter(Boolean).join(', ')}
                      </p>
                      {p.href && (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-arc-700 transition-colors hover:text-arc-800"
                        >
                          Read the paper
                          <span aria-hidden>→</span>
                        </a>
                      )}
                    </div>

                    {p.properties?.length > 0 && (
                      <div className="lg:w-44 lg:shrink-0">
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-500">
                          Contributes to
                        </p>
                        <ul className="mt-2 flex flex-wrap gap-1.5">
                          {p.properties.map((prop) => (
                            <li
                              key={prop}
                              className="inline-flex items-center gap-1.5 rounded-full border border-arc-200 bg-arc-50 px-2.5 py-1 text-xs font-semibold text-arc-800"
                            >
                              <span
                                className="h-1.5 w-1.5 rounded-full bg-arc-500"
                                aria-hidden
                              />
                              {prop}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          {PUBLICATIONS.length === 0 && (
            <Reveal>
              <p className="text-ink-500">Publications will be listed here soon.</p>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}
