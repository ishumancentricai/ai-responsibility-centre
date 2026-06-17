import { Link } from 'react-router-dom'
import ArcMark from '../components/ArcMark'

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-arc-950 px-6 text-center text-white">
      <div>
        <ArcMark className="mx-auto h-14 w-14 text-arc-400" strokeWidth={4} />
        <p className="mt-6 text-6xl font-bold tracking-tight">404</p>
        <p className="mt-3 text-lg text-white/70">This page could not be found.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-arc-900 transition-transform hover:-translate-y-0.5"
        >
          Back home
        </Link>
      </div>
    </section>
  )
}
