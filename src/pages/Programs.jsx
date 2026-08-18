import Seo from '../components/common/Seo'
import PageHeader from '../components/common/PageHeader'
import Card from '../components/common/Card'
import { programs } from '../data/programs'
import { programIcons } from '../utils/programIcons'

export default function Programs() {
  return (
    <>
      <Seo
        title="Programs"
        description="Explore MKO's six core programs: Women's Empowerment, Youth Development, Integration Support, Leadership Development, Education, and Community Development."
        path="/programs"
      />
      <PageHeader
        eyebrow="What We Do"
        title="Our Programs"
        subtitle="Six focused programs designed to empower, educate, and connect the people we serve."
      />

      <section className="py-10 sm:py-12">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => {
              const Icon = programIcons[program.icon]
              return (
                <Card key={program.id} id={program.id} hover className="flex scroll-mt-24 flex-col p-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background-light text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 text-xl font-semibold text-text">{program.title}</h2>
                  <p className="mt-3 text-sm text-text-muted">{program.description}</p>
                  {program.details && (
                    <ul className="mt-4 flex-1 space-y-2">
                      {program.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-text-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
