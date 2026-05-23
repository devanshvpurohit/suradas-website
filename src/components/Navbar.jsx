import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import PreMvpBadge from './PreMvpBadge'

const links = [
  { to: '/features', label: 'Features' },
  { to: '/technology', label: 'Technology' },
  { to: '/about', label: 'About' },
  { to: '/impact', label: 'Impact' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/contact', label: 'Contact' },
]

const navLinkClass = ({ isActive }) =>
  `text-sm transition-colors ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-4 md:px-8">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 md:px-6 ${
          scrolled ? 'glass-strong shadow-2xl shadow-black/50' : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-3">
          <Logo className="h-9 md:h-10" />
          <PreMvpBadge className="hidden sm:inline-flex" pulse={false} />
        </div>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={navLinkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-transform hover:scale-105 md:inline-block"
        >
          Join Waitlist
        </Link>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-strong fixed inset-x-4 top-20 z-50 rounded-2xl p-6 lg:hidden"
          >
            <PreMvpBadge className="mb-4" />
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block py-2 text-lg ${isActive ? 'text-white' : 'text-white/80'}`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="mt-2 block rounded-full bg-white py-3 text-center font-semibold text-black"
                  onClick={() => setMobileOpen(false)}
                >
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
