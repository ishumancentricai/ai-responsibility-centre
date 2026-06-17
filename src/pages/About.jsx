import PageHeader from '../components/PageHeader'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import {
  VISION,
  MISSION,
  STRATEGY_PRINCIPLES,
  LANDSCAPE,
} from '../data/content'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About ARC"
        title="Building AI responsibility — not just demanding it."
        intro="The AI Responsibility Centre unites technology, law and the social sciences at one interface, to make responsible AI directly actionable."
      />

      {/* Vision */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-arc grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
              Vision
            </h2>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-2xl font-semibold leading-snug text-ink-900 sm:text-3xl">
                {VISION.statement}
              </p>
            </Reveal>
            <Stagger className="mt-8 flex flex-wrap gap-3">
              {VISION.qualities.map((q) => (
                <StaggerItem key={q}>
                  <span className="inline-flex rounded-full border border-arc-200 bg-arc-50 px-5 py-2 text-base font-medium capitalize text-arc-800">
                    {q}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-ink-700">{VISION.ambition}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y border-black/5 bg-arc-50/40 py-20 sm:py-28">
        <div className="container-arc grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
              Mission
            </h2>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-2xl font-semibold leading-snug text-ink-900 sm:text-3xl">
                {MISSION.headline}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-lg leading-relaxed text-ink-700">{MISSION.body}</p>
            </Reveal>
            <Reveal delay={0.14}>
              <blockquote className="mt-8 rounded-2xl border-l-4 border-arc-500 bg-white p-6 text-lg italic leading-relaxed text-ink-700 shadow-sm">
                {MISSION.linuxMoment}
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-arc">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
              Strategy
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 max-w-3xl text-balance text-2xl font-semibold leading-snug text-ink-900 sm:text-3xl">
              A self-sustaining cycle of research, impact and funding.
            </p>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-3" step={0.12}>
            {STRATEGY_PRINCIPLES.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="h-full rounded-3xl border border-black/5 bg-arc-50/50 p-7">
                  <span className="text-sm font-semibold text-arc-600">0{i + 1}</span>
                  <h3 className="mt-2 text-xl font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-700">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Landscape — connecting bracket across levels */}
      <section className="border-t border-black/5 bg-arc-950 py-20 text-white sm:py-28">
        <div className="container-arc">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-300">
              Where ARC fits
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 max-w-3xl text-balance text-2xl font-semibold leading-snug sm:text-3xl">
              ARC doesn’t duplicate structures — it closes the implementation gap.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-3xl leading-relaxed text-white/70">
              While the EU regulates, the federal government funds and Bavaria
              connects, ARC provides the connecting bracket across all levels —
              through interdisciplinary research and open standards for active
              building and practical application on the ground.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-3" step={0.12}>
            {LANDSCAPE.map((row) => (
              <StaggerItem key={row.level}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <p className="text-lg font-semibold text-white">{row.level}</p>
                  <p className="text-sm font-medium uppercase tracking-wider text-arc-300">
                    {row.role}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
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
