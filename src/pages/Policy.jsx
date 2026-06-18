import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import ArcMark from '../components/ArcMark'

// NOTE: The full Policy Advisory page is temporarily deactivated.
// Its complete version is preserved in git (commit c20269e) and can be
// restored when the content is ready.
export default function Policy() {
  return (
    <>
      <PageHeader
        eyebrow="Policy Advisory"
        title="Coming soon."
        intro="Our policy advisory work — translating regulation into deployable practice — is being prepared. Check back shortly."
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="container-arc">
          <Reveal>
            <div className="mx-auto max-w-xl rounded-3xl border border-black/5 bg-arc-50/40 p-10 text-center sm:p-14">
              <span className="inline-flex items-center gap-2 rounded-full bg-arc-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Coming soon
              </span>

              <ArcMark className="mx-auto mt-8 h-14 w-14 text-arc-600" strokeWidth={4} />

              <h2 className="mt-6 text-2xl font-bold tracking-tight text-ink-900">
                Policy advisory is on the way
              </h2>
              <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-700">
                We’re preparing our work on turning AI regulation into practical,
                deployable guidance. In the meantime, we’d be glad to hear from you.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-arc-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-arc-700"
                >
                  Get in touch
                </Link>
                <Link
                  to="/"
                  className="rounded-full border border-arc-200 px-6 py-3 text-sm font-semibold text-arc-700 transition-colors hover:bg-arc-50"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
