
import { motion } from "motion/react"
interface PageMarqueeProps {
  title: string
}
export default function PageMarquee({ title }: PageMarqueeProps) {
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
        <div className="flex shrink-0 items-center gap-12 pr-12">
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
      <h1 className="whitespace-nowrap font-serif text-[clamp(80px,13vw,180px)] font-bold leading-none tracking-normal">
        {title}
      </h1>

    </div>
  )
}