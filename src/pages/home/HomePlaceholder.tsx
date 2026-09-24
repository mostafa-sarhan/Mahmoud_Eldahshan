import PageMarquee from "@/components/PageMarquee/PageMarquee"
import Intro from "./intro"
import TrustedBy from "./TrustedBy"
import Quets from "./Quets"
import RecentWorks from "./RecentWorks"
import Journal from "./Journal"

export default function HomePlaceholder() {
  return (
    <>
        <main className="relative">
      <PageMarquee title="Think Beyond The Brand." />

      <div className="pointer-events-none w-full absolute inset-0 flex items-center justify-center">
        <div
          className="
            relative
            w-full
            border border-white/40

            px-8 py-10
            md:px-12 md:py-20
          "
        >
        </div>
      </div>





    </main>
    <Intro/>
    <TrustedBy/>
    <Quets/>
    <RecentWorks/>
    <Journal/>
    </>

  )
}