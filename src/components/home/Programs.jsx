import { programs } from '../../data/programs'
import { programIcons } from '../../utils/programIcons'
import SectionTitle from '../common/SectionTitle'
import Card from '../common/Card'
import Button from '../common/Button'

export default function Programs() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <SectionTitle
          eyebrow="What We Do"
          title="Our Programs"
          subtitle="Six focused programs designed to empower, educate, and connect the people we serve."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = programIcons[program.icon]
            return (
              <Card key={program.id} hover className="flex flex-col p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background-light text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-text">{program.title}</h3>
                <p className="mt-3 flex-1 text-sm text-text-muted">{program.description}</p>
                <Button to="/programs" variant="secondary" size="md" className="mt-6 self-start">
                  Learn More
                </Button>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
