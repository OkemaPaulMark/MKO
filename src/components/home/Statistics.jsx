import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { statistics } from '../../data/siteConfig'
import { useCountUp } from '../../hooks/useCountUp'

function StatItem({ value, suffix, label, start }) {
  const count = useCountUp(value, { start })

  return (
    <div className="text-center">
      <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-white/85 sm:text-base">{label}</p>
    </div>
  )
}

export default function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-primary-dark py-16 sm:py-20">
      <div className="container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
        {statistics.map((stat) => (
          <StatItem key={stat.label} {...stat} start={isInView} />
        ))}
      </div>
    </section>
  )
}
