import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { testimonials } from '../../data/testimonials'
import SectionTitle from '../common/SectionTitle'
import Card from '../common/Card'

export default function Testimonials() {
  return (
    <section className="bg-background-light py-20 sm:py-24">
      <div className="container-page">
        <SectionTitle
          eyebrow="Success Stories"
          title="Voices from Our Community"
          subtitle="Real stories from the women, youth, and volunteers whose lives MKO has helped shape."
        />

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="!pb-14 mt-14"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <Card className="flex h-full flex-col p-8">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    loading="lazy"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-heading font-semibold text-text">{testimonial.name}</p>
                    <p className="text-sm text-text-muted">{testimonial.position}</p>
                  </div>
                </div>
                <p className="mt-6 flex-1 text-sm text-text-muted">&ldquo;{testimonial.story}&rdquo;</p>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
