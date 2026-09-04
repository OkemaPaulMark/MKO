import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope } from 'react-icons/hi2'
import { navLinks, siteConfig } from '../../data/siteConfig'
import { programs } from '../../data/programs'

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/share/p/1L6KeBgKib/', Icon: FaFacebookF },
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: FaInstagram },
  { label: 'LinkedIn', href: siteConfig.social.linkedin, Icon: FaLinkedinIn },
  { label: 'X (Twitter)', href: siteConfig.social.twitter, Icon: FaXTwitter },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event) => {
    event.preventDefault()
    // TODO(backend): POST to /api/newsletter/ once the Django endpoint exists
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-page grid grid-cols-1 gap-5 py-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center">
            <img src="/logos/mko_logo.png" alt={siteConfig.shortName} className="h-10 w-auto" />
          </Link>
          <p className="mt-4 text-sm text-white/75">{siteConfig.tagline}</p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-200 hover:bg-white/20"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/60">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-white/85 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Programs">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/60">Programs</h3>
          <ul className="mt-4 space-y-3">
            {programs.slice(0, 5).map((program) => (
              <li key={program.id}>
                <Link to="/programs" className="text-sm text-white/85 hover:text-white">
                  {program.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Resources">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/60">Resources</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/news" className="text-sm text-white/85 hover:text-white">
                News
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-sm text-white/85 hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="text-sm text-white/85 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-sm text-white/85 hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/60">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex items-start gap-2">
              <HiOutlineMapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlinePhone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineEnvelope className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>

          <form onSubmit={handleSubscribe} className="mt-6" noValidate>
            <label htmlFor="footer-newsletter" className="text-sm font-medium text-white/85">
              Subscribe to our newsletter
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="footer-newsletter"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email"
                className="w-full rounded-card border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-card bg-white px-4 py-2 text-sm font-semibold text-primary-dark transition-colors duration-200 hover:bg-white/90"
              >
                Join
              </button>
            </div>
            <p className="mt-2 text-xs text-white/70" role="status">
              {subscribed ? 'Thank you for subscribing!' : ''}
            </p>
          </form>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} ({siteConfig.shortName}). All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
