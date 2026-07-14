const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'photo', label: 'Photos' },
  { key: 'video', label: 'Videos' },
]

export default function GalleryFilter({ active, onChange }) {
  return (
    <div className="flex justify-center gap-3" role="tablist" aria-label="Filter gallery media">
      {FILTERS.map((filter) => {
        const isActive = active === filter.key
        return (
          <button
            key={filter.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.key)}
            className={`rounded-card px-5 py-2.5 font-heading text-sm font-semibold transition-colors duration-200 ${
              isActive ? 'bg-primary text-white' : 'bg-background-light text-text-muted hover:text-primary'
            }`}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}
