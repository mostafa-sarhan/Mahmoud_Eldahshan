import type { ProjectImage } from '@/data/projects'

import FullWidthImages from './FullWidthImages'
import TwoColumnImages from './TwoColumnImages'

interface ProjectGalleryProps {
  images: ProjectImage[]
}

/*
  Gallery rhythm
  --------------
  1. four full width frames
  2. a 50 / 50 pair
  3. three full width frames
  4. a 50 / 50 pair
  5. one closing full width frame

  The image list is supplied already expanded by `buildGalleryImages`, so the
  layout never depends on how many unique images a project owns.
*/
const OPENING_FULL_WIDTH = { start: 0, end: 4 }
const FIRST_PAIR = { start: 4, end: 6 }
const MIDDLE_FULL_WIDTH = { start: 6, end: 9 }
const SECOND_PAIR = { start: 9, end: 11 }
const CLOSING_FULL_WIDTH = { start: 11, end: 12 }

const BLOCK_SPACING = 'mt-12 sm:mt-16 md:mt-20 lg:mt-28'

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const opening = images.slice(OPENING_FULL_WIDTH.start, OPENING_FULL_WIDTH.end)
  const firstPair = images.slice(FIRST_PAIR.start, FIRST_PAIR.end)
  const middle = images.slice(MIDDLE_FULL_WIDTH.start, MIDDLE_FULL_WIDTH.end)
  const secondPair = images.slice(SECOND_PAIR.start, SECOND_PAIR.end)
  const closing = images.slice(CLOSING_FULL_WIDTH.start, CLOSING_FULL_WIDTH.end)

  return (
    <section
      aria-label="Project imagery"
      className="
        w-full
        overflow-hidden
        px-5
        pb-20
        sm:px-6
        sm:pb-28
        md:px-10
        md:pb-36
        lg:px-16
        lg:pb-44
      "
    >
      <div className="mx-auto w-full max-w-[1500px]">
        <FullWidthImages images={opening} />

        <TwoColumnImages images={firstPair} className={BLOCK_SPACING} />

        <FullWidthImages images={middle} className={BLOCK_SPACING} />

        <TwoColumnImages images={secondPair} className={BLOCK_SPACING} />

        <FullWidthImages images={closing} className={BLOCK_SPACING} />
      </div>
    </section>
  )
}
