import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

import image1 from '@/assets/services/1.jpeg'
import image2 from '@/assets/services/2.jpeg'
import image3 from '@/assets/services/3.jpeg'
import image4 from '@/assets/services/4.jpeg'
import image5 from '@/assets/services/5.jpeg'
import image6 from '@/assets/services/6.jpeg'
import image7 from '@/assets/services/7.jpeg'
import image8 from '@/assets/services/8.jpeg'
import image9 from '@/assets/services/9.jpeg'

const sectors = [
  { title: 'Fashion', image: image1 },
  { title: 'Construction & Contracting', image: image2 },
  { title: ' Real Estate', image: image3 },
  { title: 'E-commerce', image: image4 },
  { title: 'Food', image: image5 },
  { title: ' Education', image: image6 },
  { title: 'Skincare', image: image7 },
  { title: 'Sports Clubs', image: image8 },
  { title: 'Tourism', image: image9 },

]

export default function RouteService() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      className="
        w-full
        bg-white
        px-5
        py-16
        text-black
        sm:px-6
        sm:py-20
        md:px-10
        md:py-28
        lg:px-16
        lg:py-36
      "
    >
      <div className=" py-8 sm:py-6 md:py-8 lg:py-14">
        <p className="mb-10 font-sans text-xl font-medium uppercase md:text-2xl">
          (Sectors of Focus)
        </p>
      </div>

      <div
        className="
          mx-auto
          flex
          max-w-[1500px]
          flex-col
          gap-14
          md:gap-20
          lg:flex-row
          lg:items-stretch
          lg:justify-between
          lg:gap-0
        "
      >
        {/* =========================
            LEFT — IMAGE
        ========================= */}

        <div
          className="
            flex
            w-full
            lg:w-[38%]
          "
        >
          <div
            className="
              relative
              aspect-[3/4]
              w-full
              max-w-[520px]
              overflow-hidden
              bg-black/5
            "
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={sectors[activeIndex].image}
                alt={sectors[activeIndex].title}
                initial={{
                  opacity: 0,
                  scale: 1.04,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />
            </AnimatePresence>
          </div>
        </div>

        {/* =========================
            RIGHT — TITLE + SECTORS
        ========================= */}

        <div
          className="
            flex
            w-full
            flex-col
            lg:w-[52%]
            lg:items-end
          "
        >
          {/* SECTORS */}

          <div
            className="
              flex
              w-full
              flex-col
              justify-between
              lg:min-h-[620px]
            "
          >
            {sectors.map((sector, index) => {
              const isActive = activeIndex === index

              return (
                <motion.button
                  key={sector.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className="
                    block
                    w-full
                    cursor-pointer
                    text-left
                    outline-none
                    lg:text-right
                  "
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0.45,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeOut',
                  }}
                >
                  <span
                    className="
                      block
                      font-sans
                      text-[38px]
                      font-medium
                      leading-[0.98]
                      tracking-[-0.045em]
                      sm:text-[48px]
                      md:text-[58px]
                      lg:text-[58px]
                      xl:text-[68px]
                    "
                  >
                    {sector.title}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}