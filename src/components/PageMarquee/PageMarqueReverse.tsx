import { motion } from 'motion/react'
import spinningImage from '@/assets/images/spinning.png'

interface PageMarqueeProps {
  title: string
}

export default function PageMarqueReverse({
  title,
}: PageMarqueeProps) {
  return (
    <section className="w-full overflow-hidden py-2">
      <motion.div
        className="flex w-max"
        animate={{ x: ['-50%', '0%'] }}
        transition={{
          duration: 12,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {/* First set */}
        <div className="flex shrink-0 items-center gap-12 pr-12">
          <MarqueeItem title={title} />
          <MarqueeItem title={title} />
          <MarqueeItem title={title} />
        </div>

        {/* Identical second set */}
        <div className="flex shrink-0 items-center gap-12 pr-12">
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
      className="h-30 w-30 shrink-0"
      animate={{ rotate: -360 }}
      transition={{
        duration: 10,
        ease: "linear",
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