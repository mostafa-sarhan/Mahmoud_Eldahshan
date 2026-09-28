import { motion, useReducedMotion } from 'motion/react'

import { getImageDimensions } from '@/data/projects'
import { cn } from '@/utils/cn'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface GalleryImageProps {
  src: string
  alt: string
  /** Index within its block, used for a very small staggered reveal. */
  index?: number
  /** Above-the-fold images skip lazy loading. */
  priority?: boolean
  className?: string
}

/**
 * Single gallery frame.
 *
 * Reveals on scroll with the same fade-up and easing curve used across the
 * site. The subtle hover scale is desktop-only CSS so it never fires on touch,
 * and all motion is skipped when the visitor prefers reduced motion.
 */
export default function GalleryImage({
  src,
  alt,
  index = 0,
  priority = false,
  className,
}: GalleryImageProps) {
  const prefersReducedMotion = useReducedMotion()
  const dimensions = getImageDimensions(src)

  return (
    <motion.figure
      initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: '-10% 0px -10% 0px',
      }}
      transition={{
        duration: 0.8,
        ease: EASE,
        delay: prefersReducedMotion ? 0 : Math.min(index, 2) * 0.08,
      }}
      className={cn('group w-full overflow-hidden bg-black/5', className)}
    >
      <img
        src={src}
        alt={alt}
        width={dimensions?.width}
        height={dimensions?.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="
          h-auto
          w-full
          transition-transform
          duration-700
          ease-out
          [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
          md:group-hover:scale-[1.02]
          md:group-focus-within:scale-[1.02]
        "
      />
    </motion.figure>
  )
}
