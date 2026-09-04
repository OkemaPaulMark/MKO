import { founders } from '../../data/siteConfig'
import SectionTitle from '../common/SectionTitle'

export default function DirectorMessage() {
  return (
    <section className="bg-background-light py-10 sm:py-12">
      <div className="container-page">
        <SectionTitle
          eyebrow="Our Story"
          title="History & Founder"
          subtitle="How MKO came to life and the person behind it."
        />
        <div className="mt-7">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:gap-10 sm:text-left lg:gap-16"
            >
              <img
                src={founder.photo ?? '/images/placeholders/director.svg'}
                alt={founder.name}
                loading="lazy"
                className="h-40 w-40 shrink-0 rounded-full object-cover sm:h-56 sm:w-56 lg:h-64 lg:w-64"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">{founder.role}</p>
                <h3 className="mt-1 font-heading text-3xl font-bold text-primary">{founder.name}</h3>
                <p className="mt-4 text-base text-text-muted sm:text-lg">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
