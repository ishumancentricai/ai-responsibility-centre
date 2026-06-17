import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV } from '../data/content'
import ArcMark from './ArcMark'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-black/5 bg-white/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-arc flex h-16 items-center justify-between sm:h-18">
        <Link to="/" className="group flex items-center gap-2.5" aria-label="ARC — home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-arc-600 text-white shadow-sm transition-transform group-hover:scale-105">
            <ArcMark className="h-5 w-5" stroke="white" strokeWidth={6} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight text-ink-900">ARC</span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-ink-500">
              AI Responsibility Centre
            </span>
          </span>
        </Link>

        {/* desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-arc-700'
                      : 'text-ink-700 hover:text-arc-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-arc-50"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
          <li className="ml-2">
            <Link
              to="/contact"
              className="rounded-full bg-arc-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-arc-700 hover:shadow"
            >
              Get in touch
            </Link>
          </li>
        </ul>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-ink-900 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="container-arc flex flex-col gap-1 pb-6 pt-2">
              {NAV.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-medium ${
                        isActive ? 'bg-arc-50 text-arc-700' : 'text-ink-700'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
