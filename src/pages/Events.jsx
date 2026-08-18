import Seo from '../components/common/Seo'
import PageHeader from '../components/common/PageHeader'
import EventCard from '../components/common/EventCard'
import { events } from '../data/events'

export default function Events() {
  return (
    <>
      <Seo
        title="Events"
        description="See MKO's upcoming workshops, mentorship days, and community gatherings across Sweden."
        path="/events"
      />
      <PageHeader
        eyebrow="Get Involved"
        title="Upcoming Events"
        subtitle="Join us at an upcoming workshop, mentorship day, or community gathering."
      />

      <section className="py-10 sm:py-12">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event.id} id={event.id} className="scroll-mt-24">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
