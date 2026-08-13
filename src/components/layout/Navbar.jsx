import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { navLinks, siteConfig } from '../../data/siteConfig'
import Button from '../common/Button'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const navLinkClasses = ({ isActive }) =>
    `font-heading text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-primary' : 'text-text hover:text-primary'
    }`

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        isScrolled ? 'shadow-soft' : ''
      }`}
    >
      <a href="#main-content" className="sr-only-focusable">
        Skip to main content
      </a>

      <nav className="container-page flex h-20 items-center justify-between" aria-label="Main navigation">
        <NavLink to="/" className="flex items-center">
          <img src="/logos/mko_logo.jpeg" alt={siteConfig.shortName} className="h-18 w-auto" />
        </NavLink>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.path === '/'} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
          <Button to="/contact#volunteer" variant="primary" size="md">
            Become a Volunteer
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="inline-flex items-center justify-center rounded-card p-2 text-text lg:hidden"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <HiBars3 className="h-7 w-7" aria-hidden="true" />
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-text/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col gap-8 bg-white p-6 shadow-soft-lg lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg font-bold text-primary">Menu</span>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-card p-2 text-text"
                  aria-label="Close menu"
                >
                  <HiXMark className="h-7 w-7" aria-hidden="true" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setIsMenuOpen(false)}
                    className={navLinkClasses}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <Button to="/contact#volunteer" variant="primary" size="md" onClick={() => setIsMenuOpen(false)}>
                Become a Volunteer
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
