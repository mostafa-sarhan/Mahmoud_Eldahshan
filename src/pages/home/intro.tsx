import image from "../../assets/images/person.jpeg"

export default function Intro() {
  return (
    <section className="w-full bg-white px-6 py-10 md:px-10 md:py-14 lg:px-16 lg:py-20">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">

        {/* Text */}
        <div className="flex-1">
          <p className="max-w-[750px] text-start font-sans text-xl font-normal leading-[1.15] text-black md:text-4xl lg:text-4xl xl:text-5xl xl:pt-8">
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
    </section>
  )
}