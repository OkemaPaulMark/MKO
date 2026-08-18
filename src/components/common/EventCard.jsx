import Card from './Card'

const dateFormatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

export default function EventCard({ event }) {
  return (
    <Card hover className="flex flex-col overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        loading="lazy"
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <time dateTime={event.date} className="text-xs font-semibold uppercase tracking-wide text-primary">
          {dateFormatter.format(new Date(event.date))}
        </time>
        <h3 className="mt-2 text-lg font-semibold text-text">{event.title}</h3>
        <p className="mt-3 flex-1 text-sm text-text-muted">{event.excerpt}</p>
      </div>
    </Card>
  )
}
