import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiXMark } from 'react-icons/hi2'

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    if (!video) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [video, onClose])

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-text/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-3xl"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close video"
              className="absolute -top-12 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20"
            >
              <HiXMark className="h-6 w-6" aria-hidden="true" />
            </button>
            <video
              controls
              autoPlay
              poster={video.thumbnail}
              className="w-full rounded-card"
            >
              {/* TODO(content): replace with the organization's real video file */}
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-3 text-center text-sm font-medium text-white">{video.title}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
