import Seo from '../components/common/Seo'
import PageHeader from '../components/common/PageHeader'
import NewsCard from '../components/common/NewsCard'
import { news } from '../data/news'

export default function News() {
  return (
    <>
      <Seo
        title="News"
        description="Read the latest news and updates from MKO — Targeted Women's Organization."
        path="/news"
      />
      <PageHeader eyebrow="Latest News" title="News &amp; Updates" />

      <section className="py-20 sm:py-24">
        <div className="container-page grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((article) => (
            <div key={article.id} id={article.id} className="scroll-mt-24">
              <NewsCard article={article} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
