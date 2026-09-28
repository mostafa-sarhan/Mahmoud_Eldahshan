import { motion, useReducedMotion } from 'motion/react'

import PageMarqueeTwo from '@/components/PageMarquee/PageMarqueeTwo'

import video1 from '@/assets/projects/video1.mp4'
import video2 from '@/assets/projects/video2.mp4'
import video3 from '@/assets/projects/video3.mp4'
import video4 from '@/assets/projects/video4.mp4'
import video5 from '@/assets/projects/video5.mp4'
import video6 from '@/assets/projects/video6.mp4'
import video7 from '@/assets/projects/video7.mp4'
import video8 from '@/assets/projects/video8.mp4'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface Project {
  title: string
  description: string
  category: string
  video: string
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'Brand strategy & identity',
    category: 'Branding',
    video: video1,
  },
  {
    title: 'Project Two',
    description: 'Digital experience',
    category: 'Digital',
    video: video2,
  },
  {
    title: 'Project Three',
    description: 'Visual identity',
    category: 'Identity',
    video: video3,
  },
  {
    title: 'Project Four',
    description: 'Brand evolution',
    category: 'Strategy',
    video: video4,
  },
  {
    title: 'Project Five',
    description: 'Creative direction',
    category: 'Art Direction',
    video: video5,
  },
  {
    title: 'Project Six',
    description: 'Packaging & identity',
    category: 'Packaging',
    video: video6,
  },
  {
    title: 'Project Seven',
    description: 'Brand experience',
    category: 'Experience',
    video: video7,
  },
  {
    title: 'Project Eight',
    description: 'Visual system',
    category: 'Design',
    video: video8,
  },
]

export default function Projects() {
  return (
    <main className="w-full overflow-hidden bg-white text-black">
      <PageMarqueeTwo title="PROJECTS" />

      {/* =========================
          INTRO
      ========================= */}

      <section
        className="
          w-full
          px-5
          py-2
          sm:px-6
          sm:py-4
          md:px-10
          md:py-2
          lg:px-16
          lg:py-4
        "
      >
        <div className="mx-auto max-w-[1500px]">
          <Intro />
        </div>
      </section>

      {/* =========================
          PROJECTS
      ========================= */}

      <ProjectGrid />
    </main>
  )
}

/* =========================
    INTRO
========================= */

function Intro() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <motion.h2
        initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
        whileInView={
          prefersReducedMotion
            ? undefined
            : {
                opacity: 1,
                y: 0,
              }
        }
        viewport={{
          once: true,
          margin: '-10% 0px -10% 0px',
        }}
        transition={{
          duration: 0.7,
          ease: EASE,
        }}
        className="
          max-w-[1200px]
          font-sans
          text-[20px]
          leading-[1.25]
          sm:text-[32px]
          md:text-[42px]
          lg:text-[55px]
          xl:text-[65px]
        "
      >
        Every project starts with the same question:
        what does this brand actually need?
        <br />
        Here's how that question turned into work.
      </motion.h2>

      <motion.p
        className="
          mb-10
          py-12
          font-sans
          text-xl
          font-medium
          uppercase
          md:text-2xl
        "
      >
        (All Projects)
      </motion.p>
    </>
  )
}

/* =========================
    PROJECT GRID
========================= */

function ProjectGrid() {
  return (
    <section
      className="
        mt-8
        w-full
        sm:mt-10
        md:mt-12
        lg:mt-16
      "
    >
      <div
        className="
          grid
          w-full
          grid-cols-1
          gap-y-12
          md:gap-y-16
          lg:grid-cols-2
          lg:gap-x-12
          lg:gap-y-20

        "
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.video}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

/* =========================
    PROJECT CARD
========================= */

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.article
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
              y: 40,
            }
      }
      whileInView={
        prefersReducedMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        margin: '-10% 0px -10% 0px',
      }}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.08,
        ease: EASE,
      }}
      className="relative col-span-1"
    >
      {/* VIDEO */}

      <div
        className="
          relative
          w-full
          overflow-hidden
          bg-black
          pt-[100%]
        "
      >
        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={project.title}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />
      </div>

      {/* PROJECT INFO */}

      <div
        className="
          flex
          justify-between
          pt-5
          md:pt-6
        "
      >
        {/* TITLE + DESCRIPTION */}

        <div
          className="
            flex
            flex-col
            items-start
            font-sans
            font-medium
            p-2
          "
        >
          <h3
            className="
              text-xl
              leading-none
              tracking-tight
              text-black
              md:text-2xl
              
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-1
              text-base
              leading-tight
              tracking-tight
              text-black/60
              md:text-lg
            "
          >
            {project.description}
          </p>
        </div>

        {/* CATEGORY */}

        <span
          className="
            hidden
            font-sans
            text-sm
            font-medium
            uppercase
            text-black
            md:block
            pr-2
          "
        >
          ({project.category})
        </span>
      </div>
    </motion.article>
  )
}