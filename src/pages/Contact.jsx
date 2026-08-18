import Seo from '../components/common/Seo'
import PageHeader from '../components/common/PageHeader'
import ContactSection from '../components/contact/ContactSection'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with MKO — Targeted Women's Organization. Reach out, volunteer, or send us a message."
        path="/contact"
      />
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="We'd love to hear from you — whether you have a question, want to volunteer, or want to partner with us."
      />

      <section id="volunteer" className="scroll-mt-24 py-10 sm:py-12">
        <ContactSection />
      </section>
    </>
  )
}
