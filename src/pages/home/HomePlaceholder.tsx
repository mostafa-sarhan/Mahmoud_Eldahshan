import PageMarquee from "@/components/PageMarquee/PageMarquee"

export default function HomePlaceholder() {
  return (
    <main className="relative">
      <PageMarquee title="HOME" />

      <div className="pointer-events-none w-full absolute inset-0 flex items-center justify-center">
        <div
          className="
            relative
            w-full
            border border-white/40
            bg-white/97
            px-8 py-10
            md:px-12 md:py-14
          "
        >
          <div className="text-center">
            <p className=" text-sm font-medium uppercase tracking-[0.3em] text-black">
              Brand Strategist
            </p>

            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-black md:text-6xl">
              Mahmoud El-dahshan
            </h2>

            <p className="mt-1 text-base tracking-wide text-black md:text-lg">
              Think Beyond the Brand
            </p>
          </div>
        </div>
      </div>


    </main>
  )
}