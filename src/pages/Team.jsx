import PageHeader from '../components/PageHeader'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import { PERSON } from '../data/content'

export default function Team() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="Computer scientists, engineers, lawyers and philosophers."
        intro="ARC brings together technology, law and the social sciences — an interdisciplinary team that makes responsibility actionable."
      />

      {/* Lead */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-arc grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-3xl border border-black/5 bg-gradient-to-b from-arc-50 to-white p-8">
              <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-arc-600 text-6xl font-bold text-white">
                NK
              </div>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-ink-900">
                {PERSON.name}
              </h2>
              <p className="mt-2 font-medium text-arc-700">{PERSON.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {PERSON.affiliation}
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
                Career
              </h3>
            </Reveal>
            <Stagger className="mt-6 space-y-5" step={0.08}>
              {PERSON.timeline.map((t, i) => (
                <StaggerItem key={i}>
                  <div className="flex gap-5">
                    <span className="w-24 shrink-0 text-sm font-semibold text-arc-700">
                      {t.year}
                    </span>
                    <p className="leading-relaxed text-ink-700">{t.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section className="border-t border-black/5 bg-arc-50/40 py-20 sm:py-24">
        <div className="container-arc">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
              In collaboration with
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 max-w-2xl text-xl font-medium leading-snug text-ink-900">
              A network of leading academic and research institutions.
            </p>
          </Reveal>
          <Stagger className="mt-8 flex flex-wrap gap-3">
            {PERSON.collaborators.map((c) => (
              <StaggerItem key={c}>
                <span className="rounded-full border border-arc-200 bg-white px-5 py-2 text-base font-medium text-arc-800">
                  {c}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
