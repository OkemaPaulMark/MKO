import { news } from '../../data/news'
import SectionTitle from '../common/SectionTitle'
import NewsCard from '../common/NewsCard'

export default function NewsPreview() {
  return (
    <section className="bg-background-light py-10 sm:py-12">
      <div className="container-page">
        <SectionTitle eyebrow="Latest News" title="News &amp; Updates" />

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
