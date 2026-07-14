/**
 * Base card surface used across programs, events, news, and value cards.
 * `hover` adds a subtle lift-and-shadow transition for interactive cards.
 */
export default function Card({ children, className = '', hover = false, as: Tag = 'div', ...rest }) {
  const hoverClasses = hover ? 'transition-shadow duration-200 hover:shadow-soft-lg' : ''

  return (
    <Tag
      className={`rounded-card border border-border bg-white shadow-soft ${hoverClasses} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
