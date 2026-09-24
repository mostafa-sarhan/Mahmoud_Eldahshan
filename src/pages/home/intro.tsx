import image from "../../assets/images/person.png"

export default function Intro() {
const scrollToFooter = () => {
  document.getElementById("footer")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

  return (
    <section className="w-full bg-white px-6 py-10 md:px-10 md:py-14 lg:px-16 lg:py-16">
      <div className="relative mx-auto max-w-[1500px]">

        {/* Content */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">

          {/* Text */}
          <div className="flex-1">
            <p className="max-w-[750px] text-start font-sans text-xl font-normal leading-[1.15] text-black md:text-4xl lg:text-4xl xl:pt-8 xl:text-5xl">
              I’m a Brand Strategist who believes that strong brands are not
              built on ideas alone, but on a clear strategic foundation. Through
              working across different brands and challenges, I’ve seen how the
              right strategy can give brands the clarity and strength they need
              to compete in a fiercely competitive market.
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[42%]">
            <img
              src={image}
              alt="Mahmoud Eldahshan"
              className="h-auto w-full object-cover"
            />
          </div>

        </div>

        {/* Scroll Button */}
        <button
          type="button"
          onClick={scrollToFooter}
          aria-label="Scroll to recent work"
          className="
          cursor-pointer
            group
            absolute
            bottom-[15px]
            left-1/2
            flex
            h-16
            w-16
            -translate-x-1/2
            items-center
            justify-center
            rounded-full
            border
            border-black
            bg-white
            text-black
            transition-all
            duration-500
            hover:scale-110
            hover:bg-black
            hover:text-white
            md:bottom-[-35px]
            md:h-20
            md:w-20
          "
        >
          {/* Arrow */}
          <span
            className="
              animate-[arrow-down_1.8s_ease-in-out_infinite]
              text-4xl
              leading-none
              md:text-5xl
            "
          >
            ↓
          </span>

          {/* Inner Ring */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-1
              rounded-full
              border
              border-black/20
              transition-all
              duration-500
              group-hover:inset-2
              group-hover:border-white/30
            "
          />
        </button>

      </div>

      {/* Arrow Animation */}
      <style>{`
        @keyframes arrow-down {
          0%,
          100% {
            transform: translateY(-4px);
            opacity: 0.6;
          }

          50% {
            transform: translateY(6px);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}