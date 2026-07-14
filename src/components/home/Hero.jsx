import { motion } from 'framer-motion'
import Button from '../common/Button'

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-primary-dark">
      {/* TODO(content): replace with the organization's real hero photograph */}
      <img
        src="/images/placeholders/hero.jpeg"
        alt="Women and youth participating in an MKO community program"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-text/60" aria-hidden="true" />

      <div className="container-page relative py-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Empowering Women. Inspiring Youth. Building Stronger Communities.
          </h1>
          <p className="mt-6 text-lg text-white/90 sm:text-xl">
            MKO (Targeted Women&apos;s Organization) supports women, girls, youth, and immigrant families across
            Sweden through mentorship, education, and community-driven programs.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button to="/about" variant="primary" size="lg">
              Learn More
            </Button>
            <Button to="/contact#volunteer" variant="outline" size="lg">
              Become a Volunteer
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
