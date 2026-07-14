import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../../data/siteConfig'

/**
 * Per-page SEO: document title, meta description, canonical URL, and
 * Open Graph / Twitter Card tags. Falls back to site-wide defaults.
 */
export default function Seo({ title, description, path = '' }) {
  const fullTitle = title ? `${title} | ${siteConfig.shortName}` : `${siteConfig.name} | ${siteConfig.shortName}`
  const metaDescription = description ?? siteConfig.tagline
  const url = `${siteConfig.url}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  )
}
