import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Reset scroll position to the top on every route change.
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}
