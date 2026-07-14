import Seo from '../components/common/Seo'
import PageHeader from '../components/common/PageHeader'

export default function PrivacyPolicy() {
  return (
    <>
      <Seo title="Privacy Policy" description="MKO's privacy policy." path="/privacy-policy" />
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="py-20 sm:py-24">
        <div className="container-page max-w-3xl space-y-6 text-sm text-text-muted">
          {/* TODO(legal): replace with MKO's reviewed privacy policy text */}
          <p>
            This page is a placeholder for MKO&apos;s privacy policy. It should describe what personal data is
            collected (e.g. through the contact form and newsletter signup), how it is stored, who it is shared
            with, and how individuals can request access to or deletion of their data in line with GDPR.
          </p>
        </div>
      </section>
    </>
  )
}
