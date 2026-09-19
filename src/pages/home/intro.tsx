import image from "../../assets/images/person.jpeg"

export default function Intro() {
  return (
    <section className="w-full bg-white px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-16">
      
      {/* Intro Text */}
      <div className="flex justify-center items-center">
        <p className="max-w-[1100px] text-start font-sans text-xl leading-[1.15] font-normal text-black md:text-center md:text-4xl lg:max-w-[1150px] lg:text-5xl xl:text-[56px]">
          I’m a Brand Strategist who believes that strong brands are not
          built on ideas alone, but on a clear strategic foundation. Through
          working across different brands and challenges, I’ve seen how the
          right strategy can give brands the clarity and strength they need
          to compete in a fiercely competitive market.
        </p>
      </div>

      {/* Image */}
      <div className="mt-8 flex w-full justify-center md:mt-12 lg:mt-16">
        <img
          className="h-auto w-full max-w-[1400px] object-cover"
          src={image}
          alt="Mahmoud Eldahshan"
        />
      </div>

    </section>
  )
}