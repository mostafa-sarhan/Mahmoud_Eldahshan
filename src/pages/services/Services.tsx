import { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react'

import PageMarqueeTwo from '@/components/PageMarquee/PageMarqueeTwo'
import TrustedBy from '../home/TrustedBy'
import video3 from '@/assets/video/video3.mp4'

interface Service {
  number: string
  tag: string
  title: string
  description: string
  items: string[]
}

const services: Service[] = [
  {
    number: '01',
    tag: 'Foundation',
    title: 'Brand Strategy',
    description:
      'Define the direction behind the brand, clarify its position, and build a strategic foundation that gives every decision a clear purpose.',
    items: [
      'Brand Positioning',
      'Brand Strategy',
      'Research & Insights',
      'Vision & Purpose',
      'Strategic Narrative',
      'Brand Architecture',
    ],
  },
  {
    number: '02',
    tag: 'Expression',
    title: 'Visual Identity',
    description:
      'Turn strategy into a distinctive visual language that makes the brand recognizable, consistent, and impossible to confuse.',
    items: [
      'Visual Identity',
      'Art Direction',
      'Logo & Identity Systems',
      'Design Systems',
      'Typography',
      'Brand Guidelines',
    ],
  },
  {
    number: '03',
    tag: 'Interaction',
    title: 'Digital Experience',
    description:
      'Create digital experiences that translate the brand into clear, engaging, and meaningful interactions.',
    items: [
      'Website Design',
      'UI/UX Design',
      'Digital Direction',
      'Interaction Design',
      'Motion Design',
      'Creative Development',
    ],
  },
  {
    number: '04',
    tag: 'Evolution',
    title: 'Brand Growth',
    description:
      'Build the tools and thinking needed to keep the brand evolving, communicating clearly, and creating lasting value.',
    items: [
      'Campaign Direction',
      'Content Direction',
      'Brand Communication',
      'Creative Direction',
      'Brand Launch',
      'Ongoing Brand Support',
    ],
  },
]

export default function Services() {
  return (
    <main className="w-full overflow-hidden bg-white text-black">
      {/* =========================
          PAGE MARQUEE
      ========================= */}

      <PageMarqueeTwo title="SERVICES" />

      {/* =========================
          INTRO
      ========================= */}

      <section
        className="
          w-full
          border-b
          border-black/15
          px-5
          py-6
          sm:px-6
          sm:py-8
          md:px-10
          md:py-14
          lg:px-16
          lg:py-18
        "
      >
        <div className="mx-auto max-w-[1500px]">
          <h1
            className="
              max-w-[1200px]
              font-sans
              text-[40px]
              leading-[0.9]
              sm:text-[50px]
              md:text-[62px]
              lg:text-[82px]
              xl:text-[100px]
            "
          >
            Good branding is not decoration.
            <br />
            It is a decision,
            <br />
            made early and made well.
          </h1>

          <NavLink
            to="/projects"
            className="
              group
              mt-10
              inline-flex
              items-center
              gap-3
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
              md:mt-12
              md:text-2xl
            "
          >
            <span>Explore our work</span>

            <span
              aria-hidden="true"
              className="
                text-lg
                leading-none
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </NavLink>
        </div>
      </section>

      {/* =========================
          WHAT I DO
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
          {/* Label */}
          <div>
            <p className="mb-10 font-sans text-xl font-medium uppercase md:text-2xl">
              (What I do)
            </p>
          </div>

          {/* Content */}
          <div className="max-w-[950px]">
            <p
              className="
                font-sans
                text-[25px]
                leading-[1.15]
                tracking-[-0.025em]
                sm:text-[30px]
                md:text-[38px]
                lg:text-[48px]
              "
            >
              Brand strategy and identity systems built to give brands a
              clearer position in their market.
            </p>

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
              I work with founders and business owners at the stage where a
              brand needs a clearer foundation to grow, compete, or reposition
              itself. Whether the business is starting out, entering a more
              competitive market, or reassessing where it stands, I help
              clarify what makes the brand different and build the strategic
              and visual systems that support that direction.
            </p>

            <NavLink
              to="/contact"
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
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
                md:mt-12
                md:text-2xl
              "
            >
              <span>Book a discovery call</span>

              <span
                aria-hidden="true"
                className="
                  text-lg
                  leading-none
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </NavLink>
          </div>
        </div>
      </section>

      {/* =========================
          TRUSTED BY
      ========================= */}

      <section>
        <TrustedBy />
      </section>

      {/* =========================
          FOCUS AREAS
      ========================= */}

      <section
        className="
          w-full
          border-b
          border-black/10
          px-5
          py-6
          sm:px-6
          sm:py-8
          md:px-10
          md:py-14
          lg:px-16
          lg:py-18
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            grid-cols-1
            gap-10
            lg:grid-cols-[0.7fr_1.3fr]
            lg:items-end
            lg:gap-20
          "
        >
          {/* Label */}
          <div>
            <p className="font-sans text-xl font-medium uppercase md:text-2xl">
              (Focus Areas)
            </p>
          </div>

          {/* CTA */}
          <div className="lg:flex lg:justify-end">
            <NavLink
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
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
                md:text-2xl
              "
            >
              <span>Let's join forces</span>

              <span
                aria-hidden="true"
                className="
                  leading-none
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </NavLink>
          </div>
        </div>
      </section>

      {/* =========================
          MAIN SERVICES
      ========================= */}

      <section aria-label="Services" className="w-full">
        {services.map((service, index) => (
          <ServiceItem
            key={service.number}
            service={service}
            isFirst={index === 0}
            isLast={index === services.length - 1}
          />
        ))}
      </section>

      {/* =========================
          CLOSING CTA
      ========================= */}

      <section
        className="
          w-full
          border-t
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
                Have something
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
              to="/contact"
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
    SERVICE ITEM
========================= */

function ServiceItem({
  service,
  isFirst,
  isLast,
}: {
  service: Service
  isFirst: boolean
  isLast: boolean
}) {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const opacity = useTransform(
    scrollYProgress,
    isFirst ? [0, 0.85, 1] : [0, 0.12, 0.85, 1],
    isFirst
      ? [1, 1, 0.12]
      : [0.08, 1, 1, isLast ? 1 : 0.12],
  )

  const y = useTransform(
    scrollYProgress,
    [0, 0.12, 1],
    [60, 0, -40],
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 0.12, 1],
    [0.99, 1, 1],
  )

  const motionStyle = prefersReducedMotion
    ? undefined
    : { opacity, y, scale }

  return (
    <section
      id={`service-${service.number}`}
      ref={sectionRef}
      aria-label={service.title}
      className="
        relative
        w-full
        border-t
        border-black/15
        lg:min-h-screen
        first:border-t-0
      "
    >
      <div
        className="
          lg:sticky
          lg:top-20
          lg:flex
          lg:min-h-[calc(100vh-5rem)]
          lg:items-center
        "
      >
        <motion.div
          style={motionStyle}
          className="
            w-full
            px-5
            py-20
            sm:px-6
            sm:py-24
            md:px-10
            md:py-28
            lg:px-16
            lg:py-16
          "
        >
          <div className="mx-auto max-w-[1500px]">
            <div
              className="
                grid
                grid-cols-1
                gap-10
                md:gap-12
                lg:grid-cols-[0.7fr_1.6fr_0.8fr]
                lg:gap-16
              "
            >
              {/* =========================
                  NUMBER + TAG
              ========================= */}

              <motion.div
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 40 }
                }
                whileInView={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 1, y: 0 }
                }
                viewport={{
                  once: true,
                  margin: '-12% 0px -12% 0px',
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p
                  className="
                    font-serif
                    text-[56px]
                    leading-[0.9]
                    tracking-[-0.04em]
                    sm:text-[80px]
                    lg:text-[110px]
                  "
                >
                  {service.number}
                </p>

                <p
                  className="
                    mt-4
                    font-sans
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-black/40
                    sm:text-xs
                  "
                >
                  {service.tag}
                </p>
              </motion.div>

              {/* =========================
                  TITLE + DESCRIPTION + ITEMS
              ========================= */}

              <motion.div
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 40 }
                }
                whileInView={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 1, y: 0 }
                }
                viewport={{
                  once: true,
                  margin: '-12% 0px -12% 0px',
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h2
                  className="
                    font-serif
                    uppercase
                    text-[42px]
                    leading-[0.9]
                    tracking-[-0.04em]
                    sm:text-[60px]
                    md:text-[76px]
                    lg:text-[100px]
                    xl:text-[112px]
                  "
                >
                  {service.title.split(' ').map((word, index) => (
                    <span
                      key={`${word}-${index}`}
                      className="block break-words"
                    >
                      {word}
                    </span>
                  ))}
                </h2>

                <p
                  className="
                    mt-6
                    max-w-[640px]
                    font-sans
                    text-lg
                    leading-[1.4]
                    tracking-[-0.02em]
                    text-black/60
                    sm:mt-8
                    sm:text-xl
                    md:text-2xl
                  "
                >
                  {service.description}
                </p>

                {/* =========================
                    CAPABILITIES
                ========================= */}

                <CapabilityList
                  items={service.items}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </motion.div>

              {/* =========================
                  VIDEO
              ========================= */}

              <motion.div
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 40 }
                }
                whileInView={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 1, y: 0 }
                }
                viewport={{
                  once: true,
                  margin: '-12% 0px -12% 0px',
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full lg:mt-1"
              >
                <div className="relative w-full overflow-hidden">
                  <video
                    src={video3}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="
                      aspect-square
                      h-full
                      w-full
                      object-cover
                    "
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* =========================
    CAPABILITY LIST
========================= */

function CapabilityList({
  items,
  prefersReducedMotion,
}: {
  items: string[]
  prefersReducedMotion: boolean | null
}) {
  return (
    <ul
      className="
        mt-10
        grid
        grid-cols-2
        border-t
        border-black/15
        sm:mt-12
      "
    >
      {items.map((item, index) => (
        <motion.li
          key={item}
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={
            prefersReducedMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{
            once: true,
            margin: '-10% 0px -10% 0px',
          }}
          transition={{
            duration: 0.5,
            delay: prefersReducedMotion
              ? 0
              : index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group
            flex
            items-center
            justify-between
            gap-4
            border-b
            border-black/10
            py-3.5
            pr-4
            font-sans
            text-sm
            font-medium
            tracking-[-0.01em]
            text-black/60
            transition-colors
            duration-300
            hover:text-black
            sm:text-base
            md:text-lg
            lg:pr-6
          "
        >
          <span>{item}</span>

          <span
            aria-hidden="true"
            className="
              shrink-0
              text-base
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </motion.li>
      ))}
    </ul>
  )
}