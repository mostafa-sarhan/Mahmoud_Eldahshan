import gif from "../../assets/video/imagegif.GIF"

export default function Journal() {
  return (
    <section className="w-full bg-white">

      <div className="grid w-full grid-cols-1 lg:grid-cols-2">

        {/* Black Box */}
        <div className="flex min-h-[500px] flex-col items-center justify-center bg-black px-6 py-20 text-center text-white md:min-h-[600px] lg:min-h-[650px]">
          
          {/* Small Text */}
          <p className="font-sans text-sm font-medium uppercase tracking-[0.15em] text-white/70 md:text-base">
            celebrate your unique
          </p>

          {/* Main Heading */}
          <h2 className="mt-4 max-w-[700px] font-sans text-[45px] leading-[0.9] tracking-[-0.04em] sm:text-[70px] md:text-[90px] lg:text-[80px] xl:text-[100px]">
            Want the full low down?
          </h2>

          {/* Button */}
          <a
            // href="https://obscurioandco.myflodesk.com/service-guide"
            href="#"
            className="
              mt-10
              border
              border-white
              px-6
              py-3
              font-sans
              text-sm
              font-medium
              uppercase
              tracking-wide
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              md:mt-12
            "
          >
            Download my Service Guide
          </a>

        </div>

        {/* GIF */}
        <div className="min-h-[500px] overflow-hidden md:min-h-[600px] lg:min-h-[650px]">
          <img
            src={gif}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

      </div>

    </section>
  )
}