import Button from './Button'
import Card from './Card'

const dateFormatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

export default function NewsCard({ article }) {
  return (
    <Card hover className="flex flex-col overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        loading="lazy"
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <time dateTime={article.date} className="text-xs font-semibold uppercase tracking-wide text-primary">
          {dateFormatter.format(new Date(article.date))}
        </time>
        <h3 className="mt-2 text-lg font-semibold text-text">{article.title}</h3>
        <p className="mt-3 flex-1 text-sm text-text-muted">{article.summary}</p>
        <Button to={`/news#${article.id}`} variant="secondary" size="md" className="mt-6 self-start">
          Read More
        </Button>
      </div>
    </Card>
  )
}
