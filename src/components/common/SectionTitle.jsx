/**
 * Consistent heading block used at the top of each page section: a small
 * teal eyebrow label, a bold heading, and an optional muted subtitle.
 */
export default function SectionTitle({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const barAlignClass = align === 'center' ? 'mx-auto' : ''

  return (
    <div className={`max-w-2xl ${alignClasses} ${className}`}>
      {eyebrow && (
        <span className="mb-3 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">{title}</h2>
      <span className={`mt-4 block h-0.5 w-12 bg-gold ${barAlignClass}`} aria-hidden="true" />
      {subtitle && <p className="mt-4 text-base text-text-muted sm:text-lg">{subtitle}</p>}
    </div>
  )
}
