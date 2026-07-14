import Seo from '../components/common/Seo'
import PageHeader from '../components/common/PageHeader'

export default function Terms() {
  return (
    <>
      <Seo title="Terms & Conditions" description="MKO's terms and conditions." path="/terms" />
      <PageHeader eyebrow="Legal" title="Terms &amp; Conditions" />
      <section className="py-20 sm:py-24">
        <div className="container-page max-w-3xl space-y-6 text-sm text-text-muted">
          {/* TODO(legal): replace with MKO's reviewed terms and conditions text */}
          <p>
            This page is a placeholder for MKO&apos;s terms and conditions, covering acceptable use of the website,
            event participation, volunteer expectations, and donation handling.
          </p>
        </div>
      </section>
    </>
  )
}
