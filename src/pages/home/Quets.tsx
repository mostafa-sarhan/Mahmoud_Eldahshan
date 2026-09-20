export default function Quets() {
  return (
    <section className="w-full bg-white px-5 py-10 md:px-10 md:py-16">
      <div className="relative mx-auto flex w-full max-w-[1100px] justify-center">
        
        {/* Quote */}
        <span
          aria-hidden="true"
          className="
            absolute
            left-3
            top-[-10px]
            font-serif
            text-[56px]
            leading-none
            text-black
            md:-left-2
            md:-top-2
            md:text-8xl
          "
        >
          “
        </span>

        {/* Text */}
        <blockquote className="w-full text-center">
          <p
            className="
              mx-auto
              max-w-[900px]
              font-serif
              text-[24px]
              leading-[1.15]
              tracking-tight
              text-black
              sm:text-[28px]
              md:text-5xl
              lg:max-w-[1050px]
              lg:text-[58px]
              xl:text-[62px]
            "
          >
            Before building any brand, I always ask one important question:
            Why is it being built at all?
          </p>
        </blockquote>

      </div>
    </section>
  )
}