import Reveal from './Reveal'

/**
 * PageHeader — consistent hero band for subpages.
 */
export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <header className="relative overflow-hidden border-b border-black/5 bg-arc-950 pt-32 pb-16 text-white sm:pt-40 sm:pb-20">
      <div className="bg-grid absolute inset-0 opacity-[0.18]" aria-hidden />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-arc-600/30 blur-3xl"
        aria-hidden
      />
      <div className="container-arc relative">
        {eyebrow && (
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-300">
              {eyebrow}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.06}>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  )
}
