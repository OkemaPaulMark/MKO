import Card from './Card'

export default function ValueCard({ title, description }) {
  return (
    <Card hover className="p-6 text-center">
      <h3 className="font-heading text-base font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm text-text-muted">{description}</p>
    </Card>
  )
}
