import PageMarquee from "@/components/PageMarquee/PageMarquee"

export default function HomePlaceholder() {
  return (
    <main className="relative">
      <PageMarquee title="Think Beyond The Brand" />

      <div className="pointer-events-none w-full absolute inset-0 flex items-center justify-center">
        <div
          className="
            relative
            w-full
            border border-white/40
            bg-white/93
            px-8 py-10
            md:px-12 md:py-20
          "
        >
          <div className="text-center">


            <h2 className="font-serif text-3xl pt-6 font-medium tracking-[-0.04em] text-black md:text-6xl">
              Mahmoud El-dahshan
            </h2>
            <p className=" text-base font-medium tracking-[0.1em]  md:tracking-[0.3em] text-black">
              Brand Strategist
            </p>
          </div>
        </div>
      </div>



    </main>
  )
}