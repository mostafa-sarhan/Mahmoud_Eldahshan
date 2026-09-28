import type { ProjectImage } from '@/data/projects'
import { cn } from '@/utils/cn'

import GalleryImage from './GalleryImage'

interface FullWidthImagesProps {
  images: ProjectImage[]
  priority?: boolean
  className?: string
}

/**
 * A block of images stacked one per row, each spanning the full content width.
 * Used for the opening frames, the middle sequence and the closing frame.
 */
export default function FullWidthImages({
  images,
  priority = false,
  className,
}: FullWidthImagesProps) {
  if (images.length === 0) return null

  return (
    <div className={cn('flex w-full flex-col gap-6 md:gap-10', className)}>
      {images.map((image, index) => (
        <GalleryImage
          key={`${image.src}-${index}`}
          src={image.src}
          alt={image.alt}
          index={index}
          priority={priority && index === 0}
        />
      ))}
    </div>
  )
}
