// Placeholder gallery media. Replace src/thumbnail paths under /src/assets/images
// and /src/assets/videos with MKO's actual photography and video files.
const photoTitles = [
  'Women\'s Empowerment Workshop',
  'Youth Leadership Circle',
  'Community Integration Fair',
  'Volunteer Training Day',
  'Language Support Session',
  'Mentorship Meetup',
  'Cultural Celebration Evening',
  'Skills Building Workshop',
  'Youth Sports Afternoon',
  'Family Support Gathering',
  'Leadership Summit',
  'Community Garden Project',
  'Back-to-School Drive',
  'Career Guidance Session',
  'Art & Expression Workshop',
  'Volunteer Appreciation Night',
  'Neighborhood Clean-Up Day',
]

export const galleryPhotos = photoTitles.map((title, index) => ({
  id: `photo-${index + 1}`,
  type: 'photo',
  title,
  src: `/images/placeholders/gallery${index + 1}.jpeg`,
  thumbnail: `/images/placeholders/gallery${index + 1}.jpeg`,
  width: 1200,
  height: index % 3 === 0 ? 900 : index % 3 === 1 ? 1500 : 1200,
}))

export const galleryVideos = [
  {
    id: 'video-1',
    type: 'video',
    title: 'MKO Annual Impact Film',
    src: '/videos/placeholders/impact-film.mp4',
    thumbnail: '/images/placeholders/video-1-thumb.svg',
  },
  {
    id: 'video-2',
    type: 'video',
    title: 'Voices from the Women\'s Empowerment Program',
    src: '/videos/placeholders/voices-empowerment.mp4',
    thumbnail: '/images/placeholders/video-2-thumb.svg',
  },
  {
    id: 'video-3',
    type: 'video',
    title: 'A Day in Youth Development',
    src: '/videos/placeholders/day-in-youth-dev.mp4',
    thumbnail: '/images/placeholders/video-3-thumb.svg',
  },
  {
    id: 'video-4',
    type: 'video',
    title: 'Community Integration Fair Highlights',
    src: '/videos/placeholders/integration-fair-highlights.mp4',
    thumbnail: '/images/placeholders/video-4-thumb.svg',
  },
]

export const galleryItems = [...galleryPhotos, ...galleryVideos]
