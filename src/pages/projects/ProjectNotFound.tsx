import { Link } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
import { cn } from '@/utils/cn'

interface ProjectNotFoundProps {
  slug?: string
}

/**
 * Shown when an unknown slug is visited directly, so `/projects/anything`
 * never falls through to the generic 404 page.
 */
export default function ProjectNotFound({ slug }: ProjectNotFoundProps) {
  return (
    <main className="flex w-full flex-col items-center justify-center bg-white px-5 py-24 text-center sm:px-6 md:py-32 lg:py-40">
      <p className="font-sans text-xl font-medium uppercase text-black/40 md:text-2xl">
        (Project Not Found)
      </p>

      <h1 className="mt-6 max-w-[20ch] break-words font-serif text-[clamp(40px,8vw,120px)] leading-[0.95] tracking-normal text-black">
        This project does not exist
      </h1>

      <p className="mt-8 max-w-[46ch] font-sans text-lg leading-snug text-black/60 md:text-xl">
        {slug
          ? `There is no case study published under “${slug}”. It may have been renamed or removed.`
          : 'There is no case study published at this address. It may have been renamed or removed.'}
      </p>

      <Link
        to={ROUTES.projects}
        className={cn(
          'group mt-10 inline-flex items-center gap-3 border-b border-black pb-2',
          'font-sans text-lg font-medium tracking-[-0.02em] text-black',
          'transition-all duration-300 hover:gap-5 sm:text-xl md:mt-14 md:text-2xl',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black',
          'focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        )}
      >
        Back to Projects
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </main>
  )
}
