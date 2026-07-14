import { AnimatePresence, motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa6'

export default function GalleryGrid({ items, onPhotoClick, onVideoClick }) {
  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
      <AnimatePresence>
        {items.map((item) => (
          <motion.button
            key={item.id}
            type="button"
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={() => (item.type === 'photo' ? onPhotoClick(item) : onVideoClick(item))}
            className="group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-card border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={item.type === 'photo' ? `Open photo: ${item.title}` : `Play video: ${item.title}`}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              loading="lazy"
              className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            {item.type === 'video' && (
              <span className="absolute inset-0 flex items-center justify-center bg-text/30 transition-colors duration-200 group-hover:bg-text/40">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-primary">
                  <FaPlay className="ml-1 h-5 w-5" aria-hidden="true" />
                </span>
              </span>
            )}
            <span className="absolute inset-x-0 bottom-0 bg-text/60 p-4 text-left text-sm font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {item.title}
            </span>
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  )
}
