import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { CONTACT, PERSON } from '../data/content'

export default function Contact() {
  // idle · submitting · success · error
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    formData.append('access_key', CONTACT.formAccessKey)
    formData.append('subject', 'New enquiry via ai-responsibility-centre.eu')
    formData.append('from_name', 'AI Responsibility Centre — website')

    setStatus('submitting')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="font-medium text-arc-700 hover:text-arc-800 hover:underline"
                    >
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wider text-ink-500">
                    Press
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${CONTACT.pressEmail}`}
                      className="font-medium text-arc-700 hover:text-arc-800 hover:underline"
                    >
                      {CONTACT.pressEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wider text-ink-500">
                    Jobs
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${CONTACT.jobsEmail}`}
                      className="font-medium text-arc-700 hover:text-arc-800 hover:underline"
                    >
                      {CONTACT.jobsEmail}
                    </a>
                  </dd>
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

          <Reveal delay={0.08}>
            {status === 'success' ? (
              <div className="flex h-full flex-col items-start justify-center rounded-3xl border border-arc-200 bg-arc-50/60 p-8">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-arc-600 text-white">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink-900">Thank you!</h3>
                <p className="mt-2 leading-relaxed text-ink-700">
                  Your message has been sent — we’ll get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-full border border-arc-200 px-5 py-2.5 text-sm font-semibold text-arc-700 transition-colors hover:bg-arc-50"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-black/5 bg-arc-50/40 p-8"
              >
                <div className="grid gap-5">
                  <Field label="Name" name="name" type="text" />
                  <Field label="Email" name="email" type="email" />
                  <Field
                    label="Organisation"
                    name="organisation"
                    type="text"
                    required={false}
                  />
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-ink-700"
                    >
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

                  {/* Honeypot — hidden from users, catches bots */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex="-1"
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="rounded-full bg-arc-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-arc-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send message'}
                  </button>

                  {status === 'error' ? (
                    <p className="text-xs text-rose-600">
                      Something went wrong. Please email us directly at{' '}
                      <a
                        className="font-semibold underline"
                        href={`mailto:${CONTACT.email}`}
                      >
                        {CONTACT.email}
                      </a>
                      .
                    </p>
                  ) : (
                    <p className="text-xs text-ink-500">
                      Your message is sent securely to our team — no email app required.
                    </p>
                  )}
                </div>
              </form>
            )}
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
