import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { CONTACT, PERSON } from '../data/content'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s shape responsible AI together."
        intro="For research collaborations, policy exchange, or industry projects — we’d be glad to hear from you."
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-arc grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink-900">
                AI Responsibility Centre (ARC)
              </h2>
              <p className="mt-4 leading-relaxed text-ink-700">{CONTACT.chair}</p>
              <p className="mt-1 leading-relaxed text-ink-700">{CONTACT.institution}</p>

              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wider text-ink-500">
                    Director
                  </dt>
                  <dd className="mt-1 text-lg font-medium text-ink-900">{PERSON.name}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wider text-ink-500">
                    Web
                  </dt>
                  <dd className="mt-1 space-y-1">
                    {CONTACT.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block font-medium text-arc-700 hover:text-arc-800 hover:underline"
                      >
                        {l.label}
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {/* Simple, accessible contact form (no backend — opens mail client) */}
          <Reveal delay={0.08}>
            <form
              action="mailto:kuehl@uni-bayreuth.de"
              method="post"
              encType="text/plain"
              className="rounded-3xl border border-black/5 bg-arc-50/40 p-8"
            >
              <div className="grid gap-5">
                <Field label="Name" name="name" type="text" />
                <Field label="Email" name="email" type="email" />
                <Field label="Organisation" name="organisation" type="text" required={false} />
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-ink-900 outline-none transition focus:border-arc-500 focus:ring-2 focus:ring-arc-500/30"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-arc-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-arc-700"
                >
                  Send message
                </button>
                <p className="text-xs text-ink-500">
                  Note: this form opens your email client. Replace the recipient
                  address in <code className="rounded bg-black/5 px-1">Contact.jsx</code> or
                  wire it to a form backend before launch.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type, required = true }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink-700">
        {label}
        {!required && <span className="text-ink-500"> (optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-ink-900 outline-none transition focus:border-arc-500 focus:ring-2 focus:ring-arc-500/30"
      />
    </div>
  )
}
