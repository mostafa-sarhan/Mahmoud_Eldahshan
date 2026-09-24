import { motion } from "motion/react"
import spinningImage from "@/assets/images/spinning.png"

interface PageMarqueeProps {
  title: string
}

export default function PageMarqueeTwo({ title }: PageMarqueeProps) {
  return (
    <section className="w-full overflow-hidden py-4">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* First set */}
        <div className="flex shrink-0 items-center gap-10 pr-12">
          <MarqueeItem title={title} />
          <MarqueeItem title={title} />
          <MarqueeItem title={title} />
        </div>

        {/* Identical second set */}
        <div className="flex shrink-0 items-center gap-10 pr-12">
          <MarqueeItem title={title} />
        </div>
      </motion.div>
    </section>
  )
}

function MarqueeItem({ title }: { title: string }) {
  return (
    <div className="flex shrink-0 items-center gap-12">
      <h1
        className="
          whitespace-nowrap
          font-serif
          text-[clamp(80px,13vw,180px)]
          font-bold
          leading-none
          tracking-normal
        "
      >
        {title}
      </h1>

      <SpinningImage />
    </div>
  )
}

function SpinningImage() {
  return (
    <motion.div
      className="
        h-16 w-16
        shrink-0
        sm:h-16 sm:w-16
        md:h-[72px] md:w-[72px]
        lg:h-[88px] lg:w-[88px]
        xl:h-30 xl:w-30
      "
      animate={{ rotate: -360 }}
      transition={{
        duration: 10,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      <img
        src={spinningImage}
        alt=""
        className="h-full w-full object-contain"
      />
    </motion.div>
  )
}