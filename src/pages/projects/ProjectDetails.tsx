import { Link, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

import PageMarqueeTwo from '@/components/PageMarquee/PageMarqueeTwo'
import GalleryImage from '@/components/project/GalleryImage'
import ProjectGallery from '@/components/project/ProjectGallery'
import ProjectMetadata from '@/components/project/ProjectMetadata'
import { ROUTES } from '@/constants/routes'
import { buildGalleryImages, buildIntroImage, getProjectBySlug } from '@/data/projects'
import { cn } from '@/utils/cn'

import ProjectNotFound from './ProjectNotFound'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

/*
  One reusable case study page for every project.
  It reads `:slug` from the route and renders whichever project matches, so new
  projects only ever need an entry in `src/data/projects.ts`.

  Structure
  ---------
  1. PageMarqueeTwo — the project name IS the marquee, there is no other title
  2. Intro         — description + metadata, with a small image beside the copy
  3. Gallery       — the full width imagery
*/
export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>()
  const prefersReducedMotion = useReducedMotion()

  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) return <ProjectNotFound slug={slug} />

  return (
    <main className="w-full overflow-hidden bg-white text-black">
      {/* =========================
          PROJECT NAME
      ========================= */}

      <PageMarqueeTwo title={project.title} />

      {/* =========================
          INTRO — COPY, METADATA, SMALL IMAGE
      ========================= */}

      <ProjectIntro project={project} prefersReducedMotion={prefersReducedMotion} />

      {/* =========================
          GALLERY
      ========================= */}

      <ProjectGallery images={buildGalleryImages(project)} />
    </main>
  )
}

interface ProjectIntroProps {
  project: NonNullable<ReturnType<typeof getProjectBySlug>>
  prefersReducedMotion: boolean | null
}

/**
 * The whole project introduction in one viewport: the description and metadata
 * carry the section, with a small image sitting opposite the copy on desktop.
 *
 * Order on mobile is text, metadata, then image — CSS `order` handles the swap
 * without duplicating markup.
 */
function ProjectIntro({ project, prefersReducedMotion }: ProjectIntroProps) {
  const introImage = buildIntroImage(project)

  return (
    <section
      aria-label="Project introduction"
      className="
        flex
        w-full
        flex-col
        justify-center
        px-5
        py-14
        sm:px-6
        sm:py-20
        md:px-10
        md:py-24
        lg:min-h-[70dvh]
        lg:px-16
        lg:py-28
      "
    >
      <div className="mx-auto w-full max-w-[1500px]">
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-y-12
            md:gap-y-16
            lg:grid-cols-[1.55fr_1fr]
            lg:gap-x-16
            lg:gap-y-0
            xl:gap-x-24
          "
        >
          {/* DESCRIPTION */}

          <motion.p
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
            className="
              order-1
              max-w-[1100px]
              font-sans
              text-[22px]
              leading-[1.18]
              tracking-[-0.02em]
              text-black
              sm:text-[28px]
              md:text-[34px]
              lg:text-[38px]
              lg:leading-[1.12]
              xl:text-[42px]
              lg:col-start-1
              lg:row-start-1
            "
          >
            {project.description}
          </motion.p>

          {/* SMALL IMAGE — opposite the copy on desktop, last on mobile */}

          <div
            className="
              order-3
              w-full
              lg:col-start-2
              lg:row-start-1
              lg:w-full
              lg:max-w-[340px]
              xl:max-w-[400px]
            "
          >
            <GalleryImage src={introImage.src} alt={introImage.alt} priority />
          </div>

          {/* METADATA — under the copy on desktop, under the text on mobile */}

          <ProjectMetadata
            engagement={project.engagement}
            category={project.category}
            type={project.type}
            className="order-2 lg:order-none lg:col-start-1 lg:row-start-2 lg:mt-16 xl:mt-20"
          />
        </div>

        {/* BACK TO PROJECTS */}

        <Link
          to={ROUTES.projects}
          className={cn(
            'group mt-14 inline-flex items-center gap-3 border-b border-black pb-2',
            'font-sans text-base font-medium tracking-[-0.02em] text-black',
            'transition-all duration-300 hover:gap-5 sm:text-lg',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black',
            'focus-visible:ring-offset-2 focus-visible:ring-offset-white',
          )}
        >
          Projects
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  )
}
