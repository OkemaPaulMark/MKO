import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope, HiOutlineClock } from 'react-icons/hi2'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { siteConfig } from '../../data/siteConfig'
import ContactForm from './ContactForm'

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/share/p/1L6KeBgKib/', Icon: FaFacebookF },
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: FaInstagram },
  { label: 'LinkedIn', href: siteConfig.social.linkedin, Icon: FaLinkedinIn },
  { label: 'X (Twitter)', href: siteConfig.social.twitter, Icon: FaXTwitter },
]

/**
 * Shared contact info + form layout, used both as the full /contact page
 * and as a condensed "Contact Us" section embedded on the Home page.
 */
export default function ContactSection({ showMap = true }) {
  return (
    <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div>
        <h2 className="font-heading text-2xl font-bold text-text">Reach Us Directly</h2>
        <ul className="mt-6 space-y-5">
          <li className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background-light text-primary">
              <HiOutlineMapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-medium text-text">Address</p>
              <p className="text-sm text-text-muted">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background-light text-primary">
              <HiOutlinePhone className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-medium text-text">Phone</p>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-sm text-text-muted hover:text-primary">
                {siteConfig.phone}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background-light text-primary">
              <HiOutlineEnvelope className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-medium text-text">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="text-sm text-text-muted hover:text-primary">
                {siteConfig.email}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background-light text-primary">
              <HiOutlineClock className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-medium text-text">Office Hours</p>
              <ul className="text-sm text-text-muted">
                {siteConfig.officeHours.map((entry) => (
                  <li key={entry.days}>
                    {entry.days}: {entry.hours}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        <div className="mt-6 flex gap-3">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-background-light text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>

        {showMap && (
          // TODO(backend): swap for the organization's confirmed office location
          <div className="mt-8 overflow-hidden rounded-card border border-border">
            <iframe
              title="MKO office location"
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>

      <div className="rounded-card border border-border bg-white p-8 shadow-soft sm:p-10">
        <h2 className="font-heading text-2xl font-bold text-text">Send Us a Message</h2>
        <p className="mt-2 text-sm text-text-muted">
          Fill out the form below and our team will get back to you shortly.
        </p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
