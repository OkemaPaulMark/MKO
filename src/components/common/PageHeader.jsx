/**
 * Slim banner used at the top of interior pages (About, Programs, Events,
 * Gallery, News, Contact) to keep a consistent, non-flashy page intro.
 */
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-background-light border-b border-border py-16 sm:py-20">
      <div className="container-page text-center">
        {eyebrow && (
          <span className="mb-3 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl font-bold leading-tight text-text sm:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  )
}
