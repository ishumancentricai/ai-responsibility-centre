import PageHeader from '../components/PageHeader'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import VisionProperties from '../components/VisionProperties'
import Illustration from '../components/Illustration'
import {
  VISION,
  MISSION,
  STRATEGY_PRINCIPLES,
  illustrationByTitle,
} from '../data/content'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About ARC"
        title="Building AI responsibility — not just demanding it."
        intro="The AI Responsibility Centre unites technology, law and the social sciences at one interface, to make responsible AI directly actionable."
      />

      {/* Vision — same arrangement as the home page: the artwork stands
          beside the whole block, portrait on a wide screen. */}
      <section className="overflow-hidden bg-white py-20 sm:py-28">
        <div className="container-arc grid gap-10 lg:grid-cols-[1fr_1.45fr] lg:items-start lg:gap-14">
          <Reveal>
            <Illustration
              item={illustrationByTitle('Digital Nomads Across Time')}
              className="rounded-sm border border-ink-900/10 lg:-ml-10 xl:-ml-20"
              imgClassName="aspect-[16/9] w-full object-cover lg:aspect-[4/5]"
            />
          </Reveal>

          <div>
            <Reveal delay={0.05}>
              <h2 className="text-sm font-semibold uppercase tracking-label text-arc-600">
                Vision
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-2xl font-semibold leading-snug tracking-display text-ink-900 sm:text-3xl">
                {VISION.statement}
              </p>
            </Reveal>

            <VisionProperties className="mt-8" />

            <Reveal delay={0.15}>
              <p className="mt-8 text-lg leading-relaxed text-ink-700">
                {VISION.ambition}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission — the mirror of the vision above: text first, artwork on
          the right, so the two sections read as a pair rather than a repeat. */}
      <section className="overflow-hidden border-y border-black/5 bg-white py-20 sm:py-28">
        <div className="container-arc grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-start lg:gap-14">
          <div>
            <Reveal>
              <h2 className="text-sm font-semibold uppercase tracking-label text-arc-600">
                Mission
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-4 text-2xl font-semibold leading-snug tracking-display text-ink-900 sm:text-3xl">
                {MISSION.headline}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-ink-700">{MISSION.body}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <blockquote className="mt-8 border-l-2 border-arc-600 py-1 pl-6 text-lg italic leading-relaxed text-ink-700">
                {MISSION.linuxMoment}
              </blockquote>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Illustration
              item={illustrationByTitle('Digital Nomads: Digital-Based Connection')}
              className="rounded-sm border border-ink-900/10 lg:-mr-10 xl:-mr-20"
              imgClassName="aspect-[16/9] w-full object-cover lg:aspect-[4/5]"
            />
          </Reveal>
        </div>
      </section>

      {/* Strategy */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-arc">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-label text-arc-600">
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
                <div className="h-full border border-ink-900/10 bg-white p-7">
                  <span className="text-sm font-semibold text-arc-600">0{i + 1}</span>
                  <h3 className="mt-2 text-xl font-semibold text-ink-900 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-700">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
