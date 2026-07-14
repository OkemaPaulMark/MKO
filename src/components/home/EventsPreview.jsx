import { events } from '../../data/events'
import SectionTitle from '../common/SectionTitle'
import EventCard from '../common/EventCard'
import Button from '../common/Button'

export default function EventsPreview() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <SectionTitle
          eyebrow="Get Involved"
          title="Upcoming Events"
          subtitle="Join us at an upcoming workshop, mentorship day, or community gathering."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button to="/events" variant="secondary" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}
