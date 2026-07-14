import Seo from '../components/common/Seo'
import Button from '../components/common/Button'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="flex min-h-[60vh] items-center justify-center py-24">
        <div className="container-page text-center">
          <p className="font-heading text-6xl font-bold text-primary">404</p>
          <h1 className="mt-4 text-2xl font-bold text-text">Page Not Found</h1>
          <p className="mt-2 text-base text-text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Button to="/" variant="primary" size="lg" className="mt-8">
            Back to Home
          </Button>
        </div>
      </section>
    </>
  )
}
