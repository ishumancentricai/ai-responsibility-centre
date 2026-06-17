import PageHeader from '../components/PageHeader'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import { RESEARCH_PROJECTS, STATS } from '../data/content'

export default function Research() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Published, peer-validated science with direct policy relevance."
        intro="Interdisciplinary AI research — validated at leading conferences, workshops and journals in information systems, computer science and human–computer interaction."
      />

      {/* Stats */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-arc">
          <Stagger className="grid gap-8 border-b border-black/5 pb-16 sm:grid-cols-2 lg:grid-cols-4" step={0.1}>
            {STATS.map((s) => (
              <StaggerItem key={s.label}>
                <p className="text-4xl font-bold tracking-tight text-arc-600 sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-3 font-medium text-ink-900">{s.label}</p>
                <p className="mt-1 text-sm text-ink-500">{s.sub}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white pb-24 sm:pb-32">
        <div className="container-arc">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Selected interdisciplinary projects
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-700">
              From fair AI in law enforcement to deepfakes in investigations and
              responsible AI across science and society — in cooperation with
              partners including LMU and the Wharton School.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-3" step={0.14}>
            {RESEARCH_PROJECTS.map((p) => (
              <StaggerItem key={p.name}>
                <article className="group flex h-full flex-col rounded-3xl border border-black/5 bg-gradient-to-b from-white to-arc-50/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-2xl font-bold tracking-tight text-arc-700">{p.name}</p>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wider text-ink-500">
                    {p.focus}
                  </p>
                  <p className="mt-4 flex-1 leading-relaxed text-ink-700">{p.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Outlets */}
      <section className="border-t border-black/5 bg-arc-50/40 py-20 sm:py-24">
        <div className="container-arc">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
              Publication outlets
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 max-w-2xl text-xl font-medium leading-snug text-ink-900">
              75+ publications in three years, in leading international outlets.
            </p>
          </Reveal>
          <Stagger className="mt-8 flex flex-wrap gap-3">
            {['ACM CSUR', 'EJIS', 'MIS Quarterly', 'ICML', 'CVPR', 'CHI', 'FAccT', 'ICLR', 'IJCAI', 'AAAI', 'IUI', 'ECIS'].map((o) => (
              <StaggerItem key={o}>
                <span className="rounded-full border border-arc-200 bg-white px-5 py-2 text-base font-medium text-arc-800">
                  {o}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
