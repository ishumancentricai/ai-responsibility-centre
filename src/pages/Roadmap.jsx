import PageHeader from '../components/PageHeader'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import VideoEmbed from '../components/VideoEmbed'
import UpcomingEvents from '../components/UpcomingEvents'
import { MILESTONES, HIGHLIGHTS, PROJECTS } from '../data/content'

// Each track keeps its colour, but wears it as a dot and a word rather than
// as a tinted fill — the badge itself stays white like everything else.
const TRACK_STYLES = {
  Research: { dot: 'bg-arc-600', text: 'text-arc-800' },
  Application: { dot: 'bg-violet-600', text: 'text-violet-800' },
  Policy: { dot: 'bg-rose-600', text: 'text-rose-800' },
  Workshop: { dot: 'bg-sky-600', text: 'text-sky-800' },
  Talk: { dot: 'bg-indigo-600', text: 'text-indigo-800' },
  Announcement: { dot: 'bg-amber-600', text: 'text-amber-800' },
  Funding: { dot: 'bg-slate-500', text: 'text-slate-700' },
}
const FALLBACK_TRACK = { dot: 'bg-slate-500', text: 'text-slate-700' }

export default function Roadmap() {
  return (
    <>
      <PageHeader
        eyebrow="Events & Milestones"
        title="What we’ve been working on."
        intro="Scroll down to trace our journey back to the start."
      />

      <UpcomingEvents className="bg-white pt-16 sm:pt-20" />

      {/* Highlights */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-arc">
          <Stagger
            className="grid grid-cols-2 gap-8 border-b border-black/5 pb-16 lg:grid-cols-4"
            step={0.1}
          >
            {HIGHLIGHTS.map((s) => (
              <StaggerItem key={s.label}>
                <p className="text-4xl font-bold tracking-tight text-arc-600 sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 font-medium text-ink-900">{s.label}</p>
                <p className="mt-1 text-sm text-ink-500">{s.sub}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Timeline — present at top, past at bottom */}
      <section className="bg-white pb-24 sm:pb-32">
        <div className="container-arc">
          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-[7px] top-0 bottom-8 w-px bg-gradient-to-b from-arc-500 to-arc-100 sm:left-[calc(9rem+7px)]"
              aria-hidden
            />

            {/* "Now" marker */}
            <div className="relative mb-12 flex flex-col gap-4 sm:flex-row sm:gap-8">
              <div className="ml-8 sm:ml-0 sm:w-36 sm:pr-6 sm:text-right">
                <span className="text-sm font-semibold uppercase tracking-label text-arc-600">
                  Now
                </span>
              </div>
              <span
                className="absolute left-0 top-1 grid h-4 w-4 place-items-center rounded-full bg-arc-600 sm:left-36"
                aria-hidden
              >
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-arc-500/60" />
              </span>
              <p className="ml-8 text-ink-500 sm:ml-10">... building responsible AI</p>
            </div>

            <Stagger className="space-y-14" step={0.1}>
              {MILESTONES.map((group) => (
                <StaggerItem key={group.period}>
                  <div className="relative flex flex-col gap-4 sm:flex-row sm:gap-8">
                    <div className="ml-8 sm:ml-0 sm:w-36 sm:shrink-0 sm:pr-6 sm:text-right">
                      <span className="text-base font-bold text-arc-700">
                        {group.period}
                      </span>
                    </div>
                    {/* dot */}
                    <span
                      className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-arc-600 bg-white sm:left-36"
                      aria-hidden
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-arc-600" />
                    </span>

                    <ul className="ml-8 flex-1 space-y-4 sm:ml-10">
                      {group.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="border border-ink-900/10 bg-white p-5 transition-colors hover:border-ink-900/25"
                        >
                          <div className="flex flex-wrap items-center gap-3">
                            <TrackBadge track={item.track} />
                            <span className="font-semibold text-ink-900">
                              {item.title}
                            </span>
                          </div>

                          {item.text && (
                            <p className="mt-2 leading-relaxed text-ink-700">
                              {item.text}
                            </p>
                          )}

                          {/* Our own photograph of the moment, when there is
                              one. Held to 16:9 so a row of cards keeps an even
                              rhythm whatever the original crop. */}
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.imageAlt ?? ''}
                              loading="lazy"
                              className="mt-4 aspect-[16/9] w-full rounded-sm border border-ink-900/10 object-cover"
                            />
                          )}

                          {item.video && (
                            <div className="mt-4">
                              <VideoEmbed
                                id={item.video}
                                title={item.title}
                                poster={item.videoPoster}
                              />
                            </div>
                          )}

                          {(item.authors || item.href || item.project) && (
                            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                              {item.authors && (
                                <span className="italic text-ink-500">
                                  {item.authors}
                                </span>
                              )}
                              {item.project && <ProjectTag id={item.project} />}
                              {item.href && (
                                <a
                                  href={item.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1.5 font-semibold text-arc-700 transition-colors hover:text-arc-800"
                                >
                                  {item.paper ? 'Read the paper' : 'Event website'}
                                  <span aria-hidden>→</span>
                                </a>
                              )}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* origin marker */}
            <div className="relative mt-14 flex flex-col gap-4 sm:flex-row sm:gap-8">
              <div className="ml-8 sm:ml-0 sm:w-36 sm:pr-6 sm:text-right">
                <span className="text-sm font-semibold uppercase tracking-label text-arc-400">
                  Where it began
                </span>
              </div>
              <span
                className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-arc-200 bg-white sm:left-36"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="border-t border-black/5 bg-white py-12">
        <div className="container-arc flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            Tracks
          </span>
          {['Research', 'Workshop', 'Talk', 'Policy', 'Announcement', 'Funding'].map(
            (track) => (
              <span key={track} className="flex items-center gap-2 text-sm text-ink-700">
                <span
                  className={`h-3 w-3 rounded-full ${(TRACK_STYLES[track] ?? FALLBACK_TRACK).dot}`}
                />
                {track}
              </span>
            ),
          )}
        </div>
      </section>
    </>
  )
}

/** Credits the project a milestone came out of, linking to the project site. */
function ProjectTag({ id }) {
  const project = PROJECTS[id]
  if (!project) return null

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      title={`${project.full} — funded by ${project.funder}`}
      className="group/project inline-flex items-center gap-1.5 rounded-full border border-ink-900/15 bg-white px-2.5 py-1 text-xs font-semibold text-ink-700 transition-colors hover:border-arc-600 hover:bg-arc-600 hover:text-white"
    >
      <span className="text-xs font-bold uppercase tracking-label text-ink-500 transition-colors group-hover/project:text-white/70">
        Project
      </span>
      {project.name}
    </a>
  )
}

/** Track badge: white, with the track's colour carried by a dot and the word. */
function TrackBadge({ track }) {
  const style = TRACK_STYLES[track] ?? FALLBACK_TRACK
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-ink-900/15 bg-white px-2.5 py-0.5 text-xs font-semibold ${style.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} aria-hidden />
      {track}
    </span>
  )
}
