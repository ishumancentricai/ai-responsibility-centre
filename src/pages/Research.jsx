import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import PropertyIcon from '../components/PropertyIcon'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import { MILESTONES, RESEARCH_PROPERTIES, PROPERTY_EVIDENCE } from '../data/content'

// Pull the research papers straight from the milestone timeline, so the
// publication list and the timeline never drift apart.
const PUBLICATIONS = MILESTONES.flatMap((group) =>
  group.items.filter((item) => item.track === 'Research'),
).sort((a, b) => (b.year ?? 0) - (a.year ?? 0))

export default function Research() {
  // The filter lives in the URL, so a filtered list can be linked to and
  // survives a reload. The vision pills on the home and About pages point
  // straight at ?property=…, which is the whole point of tagging the papers.
  const [params, setParams] = useSearchParams()
  const requested = params.get('property')
  const active = RESEARCH_PROPERTIES.includes(requested) ? requested : null

  const shown = active
    ? PUBLICATIONS.filter((p) => (p.properties ?? []).includes(active))
    : PUBLICATIONS

  const select = (prop) => {
    if (prop) params.set('property', prop)
    else params.delete('property')
    setParams(params, { replace: true })
  }

  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Publications."
        intro="Peer-reviewed work from the AI Responsibility Centre."
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-arc">
          <Reveal>
            <div className="mb-12 border-b border-black/10 pb-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-500">
                Filter by property
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2.5">
                <FilterPill
                  label="All"
                  count={PUBLICATIONS.length}
                  active={!active}
                  onClick={() => select(null)}
                />
                {RESEARCH_PROPERTIES.map((prop) => (
                  <FilterPill
                    key={prop}
                    label={prop}
                    icon={prop}
                    count={PROPERTY_EVIDENCE[prop] ?? 0}
                    active={active === prop}
                    onClick={() => select(active === prop ? null : prop)}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <Stagger key={active ?? 'all'} className="space-y-8" step={0.08}>
            {shown.map((p, i) => (
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
                            <li key={prop}>
                              <PropertyTag
                                prop={prop}
                                active={active === prop}
                                onClick={() => select(active === prop ? null : prop)}
                              />
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

          {shown.length === 0 && (
            <Reveal>
              <p className="text-ink-500">
                {PUBLICATIONS.length === 0
                  ? 'Publications will be listed here soon.'
                  : `No publications tagged “${active}” yet.`}
              </p>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}

function FilterPill({ label, icon, count, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`group inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
        active
          ? 'border-arc-600 bg-arc-600 text-white'
          : 'border-ink-900/15 bg-white text-ink-900 hover:border-arc-600 hover:bg-arc-100 hover:text-arc-900'
      }`}
    >
      {icon && (
        <PropertyIcon
          name={icon}
          className={`h-4 w-4 shrink-0 transition-colors duration-300 ${
            active ? 'text-white' : 'text-ink-500 group-hover:text-arc-800'
          }`}
        />
      )}
      <span className="capitalize leading-none">{label}</span>
      <span
        className={`text-xs font-medium tabular-nums leading-none transition-colors duration-300 ${
          active ? 'text-white/70' : 'text-ink-500 group-hover:text-arc-800'
        }`}
      >
        {count}
      </span>
    </button>
  )
}

/** The same pill as the filter bar, sized down for the citation column. */
function PropertyTag({ prop, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={`Filter publications by ${prop}`}
      className={`group inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors duration-300 ${
        active
          ? 'border-arc-600 bg-arc-600 text-white'
          : 'border-ink-900/15 bg-white text-ink-900 hover:border-arc-600 hover:bg-arc-100 hover:text-arc-900'
      }`}
    >
      <PropertyIcon
        name={prop}
        className={`h-3.5 w-3.5 shrink-0 transition-colors duration-300 ${
          active ? 'text-white' : 'text-ink-500 group-hover:text-arc-800'
        }`}
      />
      {prop}
    </button>
  )
}
