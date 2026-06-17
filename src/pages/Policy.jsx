import PageHeader from '../components/PageHeader'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import { LANDSCAPE } from '../data/content'

const ACTIVITIES = [
  {
    title: 'EU AI Act — Article 14',
    body: 'Mandate from the EU Commission (2026) to help shape Article 14 on human oversight — turning principle into testable practice.',
  },
  {
    title: 'EU guidelines',
    body: 'Contributing evidence and methods to EU-level guidelines on the responsible deployment of AI.',
  },
  {
    title: 'Bavarian AI expert',
    body: 'Advising on AI regulation at the state level, connecting research with regional policy and industry.',
  },
  {
    title: 'ARC Roundtable Series',
    body: 'A recurring series of expert talks (Fachgespräche) with decision-makers — iterative exchange that turns research into regulation-ready evidence.',
  },
]

export default function Policy() {
  return (
    <>
      <PageHeader
        eyebrow="Policy Advisory"
        title="Evidence for regulation, through direct exchange with decision-makers."
        intro="We provide evidence for AI regulation and engage in regular, iterative dialogue with political actors at EU, federal and state level."
      />

      {/* Activities */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-arc">
          <Stagger className="grid gap-6 md:grid-cols-2" step={0.12}>
            {ACTIVITIES.map((a, i) => (
              <StaggerItem key={a.title}>
                <article className="flex h-full gap-5 rounded-3xl border border-black/5 bg-arc-50/40 p-8 transition-all hover:shadow-md">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-arc-600 font-bold text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-ink-900">{a.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-700">{a.body}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Levels */}
      <section className="border-t border-black/5 bg-arc-950 py-20 text-white sm:py-28">
        <div className="container-arc">
          <Reveal>
            <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              A connecting bracket across all levels
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 max-w-3xl leading-relaxed text-white/70">
              The EU regulates, the federal government funds, and Bavaria
              connects. ARC closes the implementation gap with interdisciplinary
              research and open standards.
            </p>
          </Reveal>

          <Stagger className="mt-12 space-y-4" step={0.12}>
            {LANDSCAPE.map((row) => (
              <StaggerItem key={row.level}>
                <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:flex-row sm:items-center">
                  <div className="sm:w-56 sm:shrink-0">
                    <p className="text-lg font-semibold">{row.level}</p>
                    <p className="text-sm font-medium uppercase tracking-wider text-arc-300">
                      {row.role}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {row.nodes.map((n) => (
                      <span
                        key={n}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
