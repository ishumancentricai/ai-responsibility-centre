import PageHeader from '../components/PageHeader'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import { PERSON, TEAM, PHDS, PHD_GROUPS } from '../data/content'

// Doctoral researchers grouped by discipline, each sorted by surname.
const surname = (name) => name.trim().split(/\s+/).pop()
const phdsInGroup = (id) =>
  PHDS.filter((p) => p.group === id).sort((a, b) =>
    surname(a.name).localeCompare(surname(b.name), 'de'),
  )

export default function Team() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="Engineers, legal professionals and philosophers."
        intro="ARC brings together technology, law and the social sciences — an interdisciplinary team that makes responsibility actionable."
      />

      {/* Lead */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-arc grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-3xl border border-black/5 bg-gradient-to-b from-arc-50 to-white p-8">
              <Avatar
                image={PERSON.image}
                initials="NK"
                name={PERSON.name}
                className="h-48 w-48 rounded-2xl text-6xl"
              />
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-ink-900">
                {PERSON.name}
              </h2>
              <p className="mt-2 font-medium text-arc-700">{PERSON.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {PERSON.affiliation}
              </p>
              {PERSON.bio && (
                <p className="mt-4 text-sm leading-relaxed text-ink-700">{PERSON.bio}</p>
              )}
              <SocialLinks links={PERSON.links} name={PERSON.name} />
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

      {/* Members */}
      <section className="border-t border-black/5 bg-white py-20 sm:py-24">
        <div className="container-arc">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
              Members
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 max-w-2xl text-xl font-medium leading-snug text-ink-900">
              Principal members across information systems, law and philosophy.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-2" step={0.12}>
            {TEAM.map((member) => (
              <StaggerItem key={member.name}>
                <article className="flex h-full flex-col rounded-3xl border border-black/5 bg-gradient-to-b from-arc-50 to-white p-8">
                  <div className="flex items-center gap-5">
                    <Avatar
                      image={member.image}
                      initials={member.initials}
                      name={member.name}
                      className="h-20 w-20 shrink-0 rounded-2xl text-2xl"
                    />
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-ink-900">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-arc-700">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {member.affiliation}
                  </p>
                  <p className="mt-5 flex-1 leading-relaxed text-ink-700">{member.bio}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {member.focus.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-arc-200 bg-white px-3 py-1 text-xs font-medium text-arc-800"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <SocialLinks links={member.links} name={member.name} />
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Researchers — grouped by discipline */}
      <section className="border-t border-black/5 bg-arc-50/40 py-20 sm:py-24">
        <div className="container-arc">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-arc-600">
              Researchers
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 max-w-2xl text-xl font-medium leading-snug text-ink-900">
              The team turning responsible AI into research and practice — across computer
              science, law and philosophy.
            </p>
          </Reveal>

          {PHD_GROUPS.map((grp) => {
            const members = phdsInGroup(grp.id)
            if (members.length === 0) return null
            return (
              <div key={grp.id} className="mt-14 first:mt-12">
                <h3 className="text-lg font-bold tracking-tight text-ink-900">
                  {grp.label}
                </h3>
                <Stagger className="mt-6 grid gap-6 sm:grid-cols-2" step={0.1}>
                  {members.map((phd) => (
                    <StaggerItem key={phd.name}>
                      <article className="flex h-full flex-col rounded-3xl border border-black/5 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl">
                        <div className="flex items-center gap-4">
                          <Avatar
                            image={phd.image}
                            initials={phd.initials}
                            name={phd.name}
                            className="h-16 w-16 rounded-2xl text-xl"
                          />
                          <div>
                            <h4 className="text-lg font-bold tracking-tight text-ink-900">
                              {phd.name}
                            </h4>
                            <p className="mt-0.5 text-sm font-medium text-arc-700">
                              {phd.role ?? 'Doctoral researcher'}
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                          {phd.research}
                        </p>
                        <SocialLinks links={phd.links} name={phd.name} />
                      </article>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            )
          })}
        </div>
      </section>

      {/* Collaborators */}
      <section className="border-t border-black/5 bg-white py-20 sm:py-24">
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

// Shows a photo when `image` is set (path under /public, e.g.
// "/team/niklas-kuehl.jpg"); otherwise falls back to the initials tile.
function Avatar({ image, initials, name, className }) {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        loading="lazy"
        className={`${className} object-cover`}
      />
    )
  }
  return (
    <div
      className={`${className} flex shrink-0 items-center justify-center bg-arc-600 font-bold text-white`}
    >
      {initials}
    </div>
  )
}

// Renders link buttons only for the platforms that have a URL set.
function SocialLinks({ links = {}, name }) {
  const items = [
    {
      key: 'scholar',
      label: 'Google Scholar',
      href: links.scholar,
      icon: <ScholarIcon />,
    },
    { key: 'linkedin', label: 'LinkedIn', href: links.linkedin, icon: <LinkedInIcon /> },
    { key: 'orcid', label: 'ORCID', href: links.orcid, icon: <OrcidIcon /> },
    {
      key: 'researchgate',
      label: 'ResearchGate',
      href: links.researchgate,
      icon: <ResearchGateIcon />,
    },
    {
      key: 'website',
      label: 'University profile',
      href: links.website,
      icon: <GlobeIcon />,
    },
  ].filter((i) => i.href)

  if (items.length === 0) return null

  return (
    <div className="mt-6 flex items-center gap-2">
      {items.map((i) => (
        <a
          key={i.key}
          href={i.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name} on ${i.label}`}
          title={i.label}
          className="grid h-9 w-9 place-items-center rounded-full border border-black/5 bg-white transition-all hover:-translate-y-0.5 hover:border-arc-200 hover:shadow-sm"
        >
          {i.icon}
        </a>
      ))}
    </div>
  )
}

function GlobeIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#016a4c"
      strokeWidth="1.6"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9Z" />
    </svg>
  )
}

function ScholarIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#4285F4" aria-hidden>
      <path d="M12 3 1 9l11 6 9-4.91V17h2V9zM5 13.18v3.32L12 20l7-3.5v-3.32l-7 3.82z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function OrcidIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#A6CE39" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM7.37 18.2H5.6V8.9h1.77zM6.48 7.7a1.03 1.03 0 1 1 0-2.06 1.03 1.03 0 0 1 0 2.06zm11.92 5.9c0 2.7-1.73 4.6-4.3 4.6H9.9V8.9h4.2c2.45 0 4.3 1.74 4.3 4.7zm-1.8 0c0-1.96-1.22-3-3-3h-1.9v6h1.9c1.5 0 3-.96 3-3z" />
    </svg>
  )
}

function ResearchGateIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#00CCBB" aria-hidden>
      <path d="M19.59 0H4.41A4.41 4.41 0 0 0 0 4.41v15.18A4.41 4.41 0 0 0 4.41 24h15.18A4.41 4.41 0 0 0 24 19.59V4.41A4.41 4.41 0 0 0 19.59 0zM8.31 14.01c-.55.55-1.32.74-2.16.74H4.69V6.6h1.46c.84 0 1.61.18 2.16.73.62.62.78 1.55.78 3.34s-.16 2.72-.78 3.34zm-.96-5.6c-.25-.3-.59-.42-1.1-.42h-.07v5.27h.07c.51 0 .85-.12 1.1-.42.28-.34.34-.93.34-2.21s-.06-1.88-.34-2.22zm9.1 5.43c-.43.49-1.08.86-1.96.86-.86 0-1.53-.33-1.99-.93-.46-.6-.6-1.36-.6-2.95 0-1.6.14-2.36.6-2.96.46-.6 1.13-.92 1.99-.92.88 0 1.46.3 1.9.78.36.4.57.92.6 1.56h-1.46c-.02-.27-.07-.46-.2-.62-.13-.15-.32-.25-.6-.25-.3 0-.5.12-.63.3-.2.27-.25.7-.25 2.11s.05 1.86.25 2.13c.13.18.33.29.63.29.27 0 .47-.1.61-.27.13-.16.2-.4.2-.74v-.4h-.81v-1.2h2.27v1.2c0 1.07-.18 1.71-.56 2.2z" />
    </svg>
  )
}
