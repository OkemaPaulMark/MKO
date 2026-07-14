import { Link } from 'react-router-dom'

const VARIANT_CLASSES = {
  primary: 'bg-accent text-white hover:bg-accent-dark',
  secondary: 'bg-white text-primary border border-primary hover:bg-background-light',
  outline: 'bg-transparent text-white border border-white hover:bg-white/10',
}

const SIZE_CLASSES = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

/**
 * Shared call-to-action button. Renders a <Link> for internal routes, an <a>
 * for external URLs, or a native <button> when `onClick`/`type` is used.
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-card font-heading font-semibold transition-colors duration-200 ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
