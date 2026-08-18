import { events } from '../../data/events'
import SectionTitle from '../common/SectionTitle'
import EventCard from '../common/EventCard'
import Button from '../common/Button'

export default function EventsPreview() {
  return (
    <section className="bg-background-light py-10 sm:py-12">
      <div className="container-page">
        <SectionTitle
          eyebrow="Get Involved"
          title="Upcoming Events"
          subtitle="Join us at an upcoming workshop, mentorship day, or community gathering."
        />

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="mt-7 text-center">
          <Button to="/events" variant="secondary" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}
