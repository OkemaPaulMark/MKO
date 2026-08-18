import { useMemo, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Seo from '../components/common/Seo'
import PageHeader from '../components/common/PageHeader'
import GalleryFilter from '../components/gallery/GalleryFilter'
import GalleryGrid from '../components/gallery/GalleryGrid'
import VideoModal from '../components/gallery/VideoModal'
import { galleryItems, galleryPhotos } from '../data/gallery'

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const [activeVideo, setActiveVideo] = useState(null)

  const filteredItems = useMemo(() => {
    if (filter === 'all') return galleryItems
    return galleryItems.filter((item) => item.type === filter)
  }, [filter])

  const lightboxSlides = useMemo(
    () => galleryPhotos.map((photo) => ({ src: photo.src, alt: photo.title, title: photo.title })),
    [],
  )

  const handlePhotoClick = (photo) => {
    const index = galleryPhotos.findIndex((item) => item.id === photo.id)
    setLightboxIndex(index)
  }

  return (
    <>
      <Seo
        title="Gallery"
        description="Browse photos and videos from MKO's programs, events, and community gatherings."
        path="/gallery"
      />
      <PageHeader
        eyebrow="Our Moments"
        title="Gallery"
        subtitle="Photos and videos from our programs, events, and community gatherings."
      />

      <section className="py-10 sm:py-12">
        <div className="container-page">
          <GalleryFilter active={filter} onChange={setFilter} />

          <div className="mt-6">
            <GalleryGrid items={filteredItems} onPhotoClick={handlePhotoClick} onVideoClick={setActiveVideo} />
          </div>
        </div>
      </section>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={lightboxSlides}
      />

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  )
}
