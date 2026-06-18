import { Fragment } from 'react'
import PageHeader from '../components/PageHeader'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'

// The translation layer: regulation in, deployable practice out.
const PIPELINE = [
  {
    step: 'Regulation',
    body: 'The EU AI Act and its guidelines define what responsible AI must achieve.',
  },
  {
    step: 'ARC',
    body: 'We translate legal principle into testable methods, controls and evidence.',
  },
  {
    step: 'Deployment',
    body: 'Companies ship compliant AI systems — with oversight built in, not bolted on.',
  },
]

export default function Policy() {
  return (
    <>
      <PageHeader
        eyebrow="Policy Advisory"
        title="Turning regulation into running systems."
        intro="The hardest part of responsible AI isn’t writing the rules — it’s deploying them. ARC builds the translation layer between policy and practice, and keeps the dialogue flowing in both directions."
      />

      {/* Upcoming banner */}
      <section className="border-b border-black/5 bg-arc-50/60">
        <div className="container-arc flex flex-wrap items-center gap-x-4 gap-y-2 py-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-arc-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Coming soon
          </span>
          <p className="text-sm font-medium text-ink-700">
            Our first open instruments for translating AI regulation into
            deployment are in the making.
          </p>
        </div>
      </section>

      {/* Translation layer */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-arc">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
              The translation layer
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 max-w-3xl text-balance text-2xl font-semibold leading-snug text-ink-900 sm:text-3xl">
              We don’t just advise on the rules — we compile them into practice,
              and carry what we learn back to policymakers.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]" step={0.12}>
            {PIPELINE.map((stage, i) => (
              <Fragment key={stage.step}>
                <StaggerItem
                  className={`flex h-full flex-col rounded-3xl border p-7 ${
                    stage.step === 'ARC'
                      ? 'border-arc-600 bg-arc-600 text-white shadow-lg shadow-arc-600/20'
                      : 'border-black/5 bg-arc-50/40 text-ink-900'
                  }`}
                >
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      stage.step === 'ARC' ? 'text-arc-100' : 'text-arc-600'
                    }`}
                  >
                    Step {i + 1}
                  </span>
                  <p className="mt-2 text-2xl font-bold tracking-tight">{stage.step}</p>
                  <p
                    className={`mt-3 leading-relaxed ${
                      stage.step === 'ARC' ? 'text-white/85' : 'text-ink-700'
                    }`}
                  >
                    {stage.body}
                  </p>
                </StaggerItem>
                {i < PIPELINE.length - 1 && (
                  <div
                    className="hidden flex-col items-center justify-center gap-1.5 md:flex"
                    aria-hidden
                  >
                    <span className="text-2xl leading-none text-arc-500">→</span>
                    <span className="text-2xl leading-none text-arc-300">←</span>
                  </div>
                )}
              </Fragment>
            ))}
          </Stagger>

          {/* Direction legend — the layer works both ways */}
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col gap-2 text-sm text-ink-600 sm:flex-row sm:gap-8">
              <p className="flex items-center gap-2">
                <span className="text-base text-arc-500">→</span>
                Regulation, translated into deployable practice.
              </p>
              <p className="flex items-center gap-2">
                <span className="text-base text-arc-300">←</span>
                Evidence from deployment, carried back to policymakers.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
