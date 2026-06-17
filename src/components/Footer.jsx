import { Link } from 'react-router-dom'
import { NAV, CONTACT } from '../data/content'
import ArcMark from './ArcMark'

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-ink-900 text-white">
      <div className="container-arc grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-arc-600">
              <ArcMark className="h-6 w-6" stroke="white" strokeWidth={6} />
            </span>
            <div className="leading-tight">
              <p className="font-semibold">AI Responsibility Centre</p>
              <p className="text-sm text-white/60">{CONTACT.institution}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            Productive AI systems that put people at the centre — and stay
            committed to the common good. At the intersection of technology,
            law and society.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
            Navigate
          </p>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-white/70 transition-colors hover:text-arc-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
            Connect
          </p>
          <ul className="mt-4 space-y-2.5">
            {CONTACT.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/70 transition-colors hover:text-arc-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-arc flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} AI Responsibility Centre (ARC). All rights reserved.</p>
          <p>University of Bayreuth · Fraunhofer FIT</p>
        </div>
      </div>
    </footer>
  )
}
