import Seo from '../components/common/Seo'
import Hero from '../components/home/Hero'
import Statistics from '../components/home/Statistics'
import DirectorMessage from '../components/home/DirectorMessage'
import AboutPreview from '../components/home/AboutPreview'
import Programs from '../components/home/Programs'
import WhyChooseUs from '../components/home/WhyChooseUs'
import EventsPreview from '../components/home/EventsPreview'
import Testimonials from '../components/home/Testimonials'
import NewsPreview from '../components/home/NewsPreview'
import Partners from '../components/home/Partners'
import ContactPreview from '../components/home/ContactPreview'

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="MKO empowers women, girls, youth, and immigrant families in Sweden through community programs, mentorship, and leadership development."
        path="/"
      />
      <Hero />
      <Statistics />
      <DirectorMessage />
      <AboutPreview />
      <Programs />
      <WhyChooseUs />
      <EventsPreview />
      <Testimonials />
      <NewsPreview />
      <Partners />
      <ContactPreview />
    </>
  )
}
