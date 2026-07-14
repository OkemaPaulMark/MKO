import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { partners } from '../../data/partners'
import SectionTitle from '../common/SectionTitle'

export default function Partners() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <SectionTitle eyebrow="Our Network" title="Partners &amp; Supporters" />

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          spaceBetween={48}
          slidesPerView={2}
          breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}
          className="mt-14"
          aria-label="Partner organizations"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id} className="flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="h-16 w-auto grayscale opacity-70 transition-all duration-200 hover:grayscale-0 hover:opacity-100"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
