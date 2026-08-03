import Seo from '../components/common/Seo'
import PageHeader from '../components/common/PageHeader'
import SectionTitle from '../components/common/SectionTitle'
import ValueCard from '../components/common/ValueCard'
import {
  coreValues,
  mission,
  vision,
  strategicGoals,
  targetGroups,
  sdgs,
  conclusion,
  siteConfig,
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
        subtitle="Targeted Women's Organization (MKO) is a non-profit based in Kristinehamn, Värmland County, Sweden, dedicated to women, girls, youth, and immigrant families."
      />

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <p className="mx-auto max-w-2xl text-center font-heading text-lg italic text-primary sm:text-xl">
            &ldquo;{siteConfig.motto}&rdquo;
          </p>

          <div className="mx-auto mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="rounded-card border border-border bg-background-light p-8 sm:p-10">
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
            <div className="rounded-card border border-border bg-background-light p-8 sm:p-10">
              <h2 className="font-heading text-2xl font-bold text-primary">Our Vision</h2>
              <p className="mt-4 text-base text-text-muted">{vision}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-light py-20 sm:py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="What Guides Us"
            title="Our Core Values"
            subtitle="These values shape every program, partnership, and decision we make."
          />
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {coreValues.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Where We're Headed"
            title="Our Strategic Goals"
            subtitle="Focused priorities that guide our programs and partnerships."
          />
          <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
            {strategicGoals.map((goal) => (
              <li key={goal} className="flex items-start gap-3 text-base text-text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {goal}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background-light py-20 sm:py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Who We Serve"
            title="Everyone Is Welcome"
            subtitle={targetGroups.inclusionStatement}
          />
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
            {targetGroups.groups.map((group) => (
              <span
                key={group}
                className="rounded-full border border-border bg-white px-5 py-2 text-sm font-medium text-text"
              >
                {group}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Our Impact"
            title="Sustainable Development Goals"
            subtitle="MKO contributes to the United Nations Sustainable Development Goals through our programs and community work."
          />
          <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
            {sdgs.map((goal) => (
              <li key={goal} className="flex items-start gap-3 text-base text-text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                {goal}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-primary-dark py-20 text-white sm:py-24">
        <div className="container-page mx-auto max-w-3xl text-center">
          {conclusion.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-base text-white/90 first:mt-0 sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </>
  )
}
