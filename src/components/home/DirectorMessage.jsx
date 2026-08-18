import { founders } from '../../data/siteConfig'
import SectionTitle from '../common/SectionTitle'

export default function DirectorMessage() {
  return (
    <section className="bg-background-light py-10 sm:py-12">
      <div className="container-page">
        <SectionTitle
          eyebrow="Our Story"
          title="History & Founders"
          subtitle="How MKO came to life and the people behind it."
        />
        <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {founders.map((founder) => (
            <div key={founder.name} className="rounded-card border border-border bg-white p-4 sm:p-5">
              <div className="flex items-center gap-5">
                <img
                  src={founder.photo ?? '/images/placeholders/director.svg'}
                  alt={founder.name}
                  loading="lazy"
                  className="h-20 w-20 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">{founder.role}</p>
                  <h3 className="mt-1 font-heading text-xl font-bold text-primary">{founder.name}</h3>
                </div>
              </div>
              <p className="mt-6 text-base text-text-muted">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
