import { coreValues, mission, vision } from '../../data/siteConfig'
import SectionTitle from '../common/SectionTitle'
import ValueCard from '../common/ValueCard'
import Button from '../common/Button'

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <SectionTitle
          eyebrow="Who We Are"
          title="Our Mission &amp; Vision"
          subtitle="Guided by a clear purpose and a set of shared values that shape everything we do."
        />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-card border border-border bg-background-light p-8 sm:p-10">
            <h3 className="font-heading text-xl font-semibold text-primary">Our Mission</h3>
            <p className="mt-3 text-sm text-text-muted">{mission.intro}</p>
            <ul className="mt-3 space-y-1.5">
              {mission.points.slice(0, 3).map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card border border-border bg-background-light p-8 sm:p-10">
            <h3 className="font-heading text-xl font-semibold text-primary">Our Vision</h3>
            <p className="mt-3 text-sm text-text-muted">{vision}</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {coreValues.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button to="/about" variant="secondary" size="lg">
            More About Us
          </Button>
        </div>
      </div>
    </section>
  )
}
