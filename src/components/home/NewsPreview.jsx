import { news } from '../../data/news'
import SectionTitle from '../common/SectionTitle'
import NewsCard from '../common/NewsCard'
import Button from '../common/Button'

export default function NewsPreview() {
  return (
    <section className="bg-background-light py-20 sm:py-24">
      <div className="container-page">
        <SectionTitle eyebrow="Latest News" title="News &amp; Updates" />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button to="/news" variant="secondary" size="lg">
            View All News
          </Button>
        </div>
      </div>
    </section>
  )
}
