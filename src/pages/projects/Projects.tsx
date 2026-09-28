import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

import PageMarqueeTwo from '@/components/PageMarquee/PageMarqueeTwo'
import { projectImages } from './projectImages'

interface Project {
  number: string
  title: string
  category: string
  year: string
  description: string
  image: string
  href?: string
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]
const CONTACT_PATH = '/contact'

const projects: Project[] = [
  {
    number: '01',
    title: 'LearnGate',
    category: 'Brand Strategy / Identity',
    year: '2026',
    description:
      'A complete brand direction built to position an educational platform with clarity, structure, and a stronger digital presence.',
    image: projectImages[0],
  },
  {
    number: '02',
    title: 'Voltix',
    category: 'Brand Identity / Digital',
    year: '2026',
    description:
      'A technology-focused identity system designed around precision, simplicity, and forward movement.',
    image: projectImages[1],
  },
  {
    number: '03',
    title: 'NOVA',
    category: 'Strategy / Visual Identity',
    year: '2026',
    description:
      'A refined identity system created to establish a distinctive presence in a competitive market.',
    image: projectImages[2],
  },
  {
    number: '04',
    title: 'Route',
    category: 'Brand Strategy / Packaging',
    year: '2026',
    description:
      'A brand system designed to connect strategic positioning with a clear physical and digital experience.',
    image: projectImages[3],
  },
  {
    number: '05',
    title: 'Studio 04',
    category: 'Identity / Art Direction',
    year: '2026',
    description:
      'A visual identity built around a confident editorial language and a flexible design system.',
    image: projectImages[4],
  },
  {
    number: '06',
    title: 'North',
    category: 'Brand Evolution',
    year: '2026',
    description:
      'A strategic evolution designed to move an established brand into its next stage.',
    image: projectImages[5],
  },
]

export default function Projects() {
  return (
    <main className="w-full overflow-hidden bg-white text-black">
      {/* =========================
          PAGE MARQUEE
      ========================= */}

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
          PROJECT LIST
      ========================= */}

      <section aria-label="Selected projects" className="w-full">
        {projects.map((project) => (
          <ProjectItem key={project.number} project={project} />
        ))}
      </section>

      {/* =========================
          APPROACH STATEMENT
      ========================= */}

      <section
        className="
          w-full
          border-t
          border-black/10
          px-5
          py-16
          sm:px-6
          sm:py-20
          md:px-10
          md:py-28
          lg:px-16
          lg:py-36
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            grid-cols-1
            gap-10
            md:gap-14
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-20
          "
        >
          <div>
            <p className="mb-10 font-sans text-xl font-medium uppercase md:text-2xl">
              (Approach)
            </p>
          </div>

          <div className="max-w-[950px]">
            <h2
              className="
                font-serif
                text-[42px]
                leading-[0.92]
                tracking-[-0.045em]
                sm:text-[54px]
                md:text-[72px]
                lg:text-[96px]
                xl:text-[120px]
              "
            >
              Every project starts with
              <br />
              a clearer question.
            </h2>

            <p
              className="
                mt-8
                max-w-[900px]
                font-sans
                text-lg
                leading-[1.4]
                tracking-[-0.02em]
                text-black/60
                sm:mt-10
                sm:text-xl
                md:text-2xl
              "
            >
              The goal is not simply to make a brand look different.
              <br />
              It is to understand where it needs to go, define what makes it
              matter, and build the systems that allow it to stay relevant.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CLOSING CTA
      ========================= */}

      <section
        className="
          w-full
          border-b
          border-black/15
          px-5
          py-16
          sm:px-6
          sm:py-20
          md:px-10
          md:py-28
          lg:px-16
          lg:py-36
        "
      >
        <div className="mx-auto max-w-[1500px]">
          <div
            className="
              flex
              flex-col
              gap-10
              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-16
            "
          >
            <div className="max-w-[1100px]">
              <h2
                className="
                  font-serif
                  text-[42px]
                  leading-[0.92]
                  tracking-[-0.045em]
                  sm:text-[54px]
                  md:text-[72px]
                  lg:text-[96px]
                  xl:text-[120px]
                "
              >
                Have a project
                <br />
                in mind?
              </h2>

              <p
                className="
                  mt-7
                  max-w-[560px]
                  font-sans
                  text-lg
                  leading-[1.4]
                  tracking-[-0.02em]
                  text-black/50
                  sm:mt-8
                  sm:text-xl
                  md:text-2xl
                "
              >
                Let’s turn the idea into something clear, distinctive, and
                meaningful.
              </p>
            </div>

            <Link
              to={CONTACT_PATH}
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-3
                self-start
                border-b
                border-black
                pb-2
                font-sans
                text-lg
                font-medium
                tracking-[-0.02em]
                text-black
                transition-all
                duration-300
                hover:gap-5
                sm:text-xl
                lg:mb-1
                lg:self-auto
              "
            >
              <span>Start a Conversation</span>

              <span
                aria-hidden="true"
                className="
                  inline-block
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
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
          prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
        }
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
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
           <br/>
            Here's how that question turned into work.
      </motion.h2>
      <motion.p className='mb-10 font-sans text-xl py-8 font-medium uppercase md:text-2xl'>
        (Projects)
      </motion.p>
    </>
  )
}

/* =========================
    PROJECT ITEM
========================= */

function ProjectItem({ project }: { project: Project }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <article className="w-full border-b border-black/10 last:border-b-0">
      <div
        className="
          px-5
          py-12
          sm:px-6
          sm:py-16
          md:px-10
          md:py-20
          lg:px-16
          lg:py-24
        "
      >
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Link
              to={project.href ?? CONTACT_PATH}
              className="
                group
                block
                outline-none
                focus-visible:outline-2
                focus-visible:outline-offset-8
                focus-visible:outline-black/40
              "
            >
              {/* =========================
                  NUMBER / TITLE / META
              ========================= */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-y-5
                  md:grid-cols-[auto_1fr_auto]
                  md:items-baseline
                  md:gap-x-10
                  md:gap-y-0
                  lg:gap-x-20
                "
              >
                <span
                  className="
                    font-sans
                    text-base
                    font-medium
                    uppercase
                    text-black/50
                    transition-colors
                    duration-500
                    group-hover:text-black
                    group-focus-visible:text-black
                    md:text-lg
                  "
                >
                  {project.number}
                </span>

                <h2
                  className={`
                    flex
                    items-baseline
                    gap-3
                    font-serif
                    uppercase
                    text-[40px]
                    leading-[0.9]
                    tracking-[-0.04em]
                    sm:text-[56px]
                    md:text-[72px]
                    lg:text-[90px]
                    xl:text-[105px]
                    ${
                      prefersReducedMotion
                        ? ''
                        : 'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 group-focus-visible:translate-x-2'
                    }
                  `}
                >
                  <span>{project.title}</span>

                  <span
                    aria-hidden="true"
                    className={`
                      shrink-0
                      text-[0.4em]
                      leading-none
                      ${
                        prefersReducedMotion
                          ? 'opacity-60'
                          : 'translate-x-[-8px] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100'
                      }
                    `}
                  >
                    →
                  </span>
                </h2>

                <ProjectMeta
                  category={project.category}
                  year={project.year}
                />
              </div>

              {/* =========================
                  IMAGE
              ========================= */}

              <ProjectImage
                image={project.image}
                alt={`${project.title} — ${project.category} project imagery`}
                prefersReducedMotion={prefersReducedMotion}
              />

              {/* =========================
                  DESCRIPTION
              ========================= */}

              <p
                className="
                  mt-6
                  max-w-[620px]
                  font-sans
                  text-lg
                  leading-[1.4]
                  tracking-[-0.02em]
                  text-black/60
                  transition-colors
                  duration-500
                  group-hover:text-black
                  group-focus-visible:text-black
                  sm:text-xl
                  md:text-2xl
                "
              >
                {project.description}
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </article>
  )
}

/* =========================
    PROJECT META
========================= */

function ProjectMeta({ category, year }: { category: string; year: string }) {
  return (
    <div className="md:text-right">
      <p
        className="
          font-sans
          text-sm
          font-medium
          uppercase
          leading-[1.5]
          tracking-[0.08em]
          text-black/50
          transition-colors
          duration-500
          group-hover:text-black
          group-focus-visible:text-black
          sm:text-base
          lg:text-lg
        "
      >
        {category}
      </p>

      <p
        className="
          mt-1
          font-sans
          text-sm
          uppercase
          tracking-[0.08em]
          text-black/50
          transition-colors
          duration-500
          group-hover:text-black
          group-focus-visible:text-black
          sm:text-base
          lg:text-lg
        "
      >
        {year}
      </p>
    </div>
  )
}

/* =========================
    PROJECT IMAGE
========================= */

function ProjectImage({
  image,
  alt,
  prefersReducedMotion,
}: {
  image: string
  alt: string
  prefersReducedMotion: boolean | null
}) {
  return (
    <div
      className="
        relative
        mt-8
        aspect-[4/3]
        w-full
        overflow-hidden
        bg-black/5
        md:mt-10
        lg:aspect-[16/9]
      "
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`
          h-full
          w-full
          object-cover
          ${
            prefersReducedMotion
              ? ''
              : 'transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] group-focus-visible:scale-[1.025]'
          }
        `}
      />
    </div>
  )
}
