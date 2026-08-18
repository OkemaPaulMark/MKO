import { motion } from 'framer-motion'
import Button from '../common/Button'

export default function Hero() {
  return (
    <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-primary-dark">
      <img
        src="/images/placeholders/hero.jpeg"
        alt="Women and youth participating in an MKO community program"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-text/65" aria-hidden="true" />

      <div className="relative w-full">
        <div className="container-page py-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full"
          >
            <h1 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-bold leading-tight text-white">
              Empowering Women. <span className="text-accent-light">Inspiring Youth.</span><br />
              Building Stronger Communities.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
              MKO supports women, girls, youth, and immigrant families across Sweden through
              integration, empowerment, and community-driven programs.
            </p>
            <div className="mt-10 flex gap-3">
              <Button to="/about" variant="primary" size="md" className="sm:!px-8 sm:!py-3.5 sm:!text-base">
                Learn More
              </Button>
              <Button to="/contact#volunteer" variant="outline" size="md" className="sm:!px-8 sm:!py-3.5 sm:!text-base">
                Become a Volunteer
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
