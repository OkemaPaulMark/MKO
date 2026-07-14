import { director } from '../../data/siteConfig'
import SectionTitle from '../common/SectionTitle'

export default function DirectorMessage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <SectionTitle eyebrow="A Message From Our Director" title="Leading With Purpose" />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 items-center gap-10 sm:grid-cols-3">
          <img
            src={director.photo}
            alt={director.name}
            loading="lazy"
            className="mx-auto h-48 w-48 rounded-full object-cover sm:col-span-1"
          />
          <div className="sm:col-span-2">
            <p className="text-base italic text-text-muted sm:text-lg">&ldquo;{director.message}&rdquo;</p>
            <p className="mt-6 font-heading font-semibold text-text">{director.name}</p>
            <p className="text-sm text-text-muted">{director.title}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
