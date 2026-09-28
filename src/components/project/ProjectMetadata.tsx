import { motion, useReducedMotion } from 'motion/react'

import type { ProjectDetails } from '@/data/projects'
import { cn } from '@/utils/cn'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface ProjectMetadataProps {
  engagement: ProjectDetails['engagement']
  category: ProjectDetails['category']
  type: ProjectDetails['type']
  className?: string
}

function MetadataItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-black/10 pt-4 md:pt-5">
      <dt
        className="
          font-sans
          text-xs
          font-medium
          uppercase
          tracking-[0.12em]
          text-black/40
          sm:text-sm
        "
      >
        {label}
      </dt>

      <dd
        className="
          mt-2
          font-sans
          text-lg
          font-medium
          leading-none
          tracking-tight
          text-black
          sm:text-xl
          md:mt-3
          md:text-2xl
        "
      >
        {value}
      </dd>
    </div>
  )
}

/**
 * Minimal editorial metadata strip. Stacks on mobile, three aligned columns
 * from tablet up.
 */
export default function ProjectMetadata({
  engagement,
  category,
  type,
  className,
}: ProjectMetadataProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.dl
      initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: '-10% 0px -10% 0px',
      }}
      transition={{
        duration: 0.7,
        ease: EASE,
      }}
      className={cn(
        'grid w-full grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 lg:gap-x-16',
        className,
      )}
    >
      <MetadataItem label="Engagement" value={engagement} />
      <MetadataItem label="Category" value={category} />
      <MetadataItem label="Type" value={type} />
    </motion.dl>
  )
}
