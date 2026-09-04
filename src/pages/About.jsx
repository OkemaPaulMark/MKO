import Seo from '../components/common/Seo'
import PageHeader from '../components/common/PageHeader'
import SectionTitle from '../components/common/SectionTitle'
import ValueCard from '../components/common/ValueCard'
import {
  coreValues,
  mission,
  vision,
  targetGroups,
  siteConfig,
  organisationHistory,
} from '../data/siteConfig'

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about MKO's mission, vision, and core values as a Swedish non-profit empowering women, youth, and immigrant families."
        path="/about"
      />
      <PageHeader
        eyebrow="About MKO"
        title="Empowering Communities Since Day One"
      />

      <section className="py-10 sm:py-12">
        <div className="container-page">
          <p className="mx-auto max-w-2xl text-center font-heading text-lg italic text-primary sm:text-xl">
            &ldquo;{siteConfig.motto}&rdquo;
          </p>

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
            <div className="rounded-card border border-border bg-background-light p-4 sm:p-5 flex flex-col gap-6">
              <div>
                <h2 className="font-heading text-2xl font-bold text-primary">Our Vision</h2>
                <p className="mt-4 text-base text-text-muted">{vision}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-text">{targetGroups.inclusionStatement}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {targetGroups.groups.map((group) => (
                    <span
                      key={group}
                      className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-text"
                    >
                      {group}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-light py-10 sm:py-12">
        <div className="container-page">
          <SectionTitle eyebrow="Our Journey" title="How We Grew" />
          <ol className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {organisationHistory.map((paragraph, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                <p className="text-base text-text-muted">{paragraph}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="container-page">
          <SectionTitle
            eyebrow="What Guides Us"
            title="Our Core Values"
            subtitle="These values shape every program, partnership, and decision we make."
          />
          <div className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {coreValues.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
