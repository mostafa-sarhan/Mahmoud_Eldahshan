import type { ProjectImage } from '@/data/projects'
import { cn } from '@/utils/cn'

import GalleryImage from './GalleryImage'

interface TwoColumnImagesProps {
  images: ProjectImage[]
  className?: string
}

/**
 * A pair of images sharing the row: 50 / 50 on desktop, stacked full width on
 * mobile. Any number of images is accepted so a project with a single spare
 * frame still renders correctly.
 */
export default function TwoColumnImages({ images, className }: TwoColumnImagesProps) {
  if (images.length === 0) return null

  return (
    <div
      className={cn('grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10', className)}
    >
      {images.map((image, index) => (
        <GalleryImage key={`${image.src}-${index}`} src={image.src} alt={image.alt} index={index} />
      ))}
    </div>
  )
}
