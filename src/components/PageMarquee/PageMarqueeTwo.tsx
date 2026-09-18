
import { motion } from "motion/react"
interface PageMarqueeProps {
  title: string
}
export default function PageMarqueeTwo({ title }: PageMarqueeProps) {
  return (
    <section className="w-full overflow-hidden py-8">
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
      <h1 className="whitespace-nowrap text-[clamp(80px,13vw,180px)] font-semibold leading-none tracking-normal">
        {title}
      </h1>
      <CircularText />
    </div>
  )
}
function CircularText() {
  return (
    <motion.div
      className="flex h-28 w-28 shrink-0 items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full overflow-visible"
      >
        <defs>
          <path
            id="circular-text-path"
            d="
              M 50,50
              m -36,0
              a 36,36 0 1,1 72,0
              a 36,36 0 1,1 -72,0
            "
          />
        </defs>
        <text className="fill-current text-[14px] uppercase tracking-[2px]">
          <textPath href="#circular-text-path">
            MAHMOUD ELDAHSHAN MAHMOUD ELDAHSHAN
          </textPath>
        </text>
      </svg>
    </motion.div>
  )
}