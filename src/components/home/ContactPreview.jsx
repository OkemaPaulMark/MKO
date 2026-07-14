import SectionTitle from '../common/SectionTitle'
import ContactSection from '../contact/ContactSection'

export default function ContactPreview() {
  return (
    <section className="bg-background-light py-20 sm:py-24">
      <div className="container-page">
        <SectionTitle
          eyebrow="Get in Touch"
          title="Contact Us"
          subtitle="Have a question, want to volunteer, or want to partner with us? We'd love to hear from you."
        />
      </div>

      <div className="mt-14">
        <ContactSection />
      </div>
    </section>
  )
}
