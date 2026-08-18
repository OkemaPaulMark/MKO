import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import { testimonials } from '../../data/testimonials'
import SectionTitle from '../common/SectionTitle'
import Card from '../common/Card'

export default function Testimonials() {
  const swiperRef = useRef(null)

  return (
    <section className="py-10 sm:py-12">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            eyebrow="Success Stories"
            title="Voices from Our Community"
            subtitle="Real stories from the women, youth, and volunteers whose lives MKO has helped shape."
          />
          <div className="flex shrink-0 gap-2 pb-1">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm transition hover:bg-primary hover:text-white"
            >
              <HiArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm transition hover:bg-primary hover:text-white"
            >
              <HiArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper }}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="!pb-7 mt-7"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <Card className="flex h-full flex-col p-4">
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
