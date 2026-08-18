import { mission, vision } from '../../data/siteConfig'
import SectionTitle from '../common/SectionTitle'

export default function AboutPreview() {
  return (
    <section className="py-10 sm:py-12">
      <div className="container-page">
        <SectionTitle
          eyebrow="Who We Are"
          title="Our Mission &amp; Vision"
          subtitle="Guided by a clear purpose and a set of shared values that shape everything we do."
        />

        <div className="mx-auto mt-7 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="rounded-card border border-border bg-background-light p-4 sm:p-5">
            <h2 className="font-heading text-2xl font-bold text-primary">Our Mission</h2>
            <p className="mt-4 text-base text-text-muted">{mission.intro}</p>
            <ul className="mt-4 space-y-2">
              {mission.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card border border-border bg-background-light p-4 sm:p-5">
            <h2 className="font-heading text-2xl font-bold text-primary">Our Vision</h2>
            <p className="mt-4 text-base text-text-muted">{vision}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
