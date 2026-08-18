import { HiOutlineShieldCheck, HiOutlineAcademicCap, HiOutlineUserGroup, HiOutlineSparkles } from 'react-icons/hi2'
import { whyChooseUs } from '../../data/siteConfig'
import SectionTitle from '../common/SectionTitle'
import Card from '../common/Card'

const icons = [HiOutlineShieldCheck, HiOutlineAcademicCap, HiOutlineUserGroup, HiOutlineSparkles]

export default function WhyChooseUs() {
  return (
    <section className="py-10 sm:py-12">
      <div className="container-page">
        <SectionTitle eyebrow="Why MKO" title="Why Choose MKO" />
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[index]
            return (
              <Card key={item.title} hover className="p-4 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-background-light text-primary">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-text">{item.title}</h3>
                <p className="mt-3 text-sm text-text-muted">{item.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
