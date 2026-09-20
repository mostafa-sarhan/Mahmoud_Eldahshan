import logo1 from "@/assets/logos/1.png"
import logo2 from "@/assets/logos/2.png"
import logo3 from "@/assets/logos/3.png"
import logo4 from "@/assets/logos/4.png"
import logo5 from "@/assets/logos/5.png"
import logo6 from "@/assets/logos/6.png"
import logo7 from "@/assets/logos/7.png"
import logo8 from "@/assets/logos/8.png"
import logo9 from "@/assets/logos/9.png"
import logo10 from "@/assets/logos/10.png"

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
]

export default function TrustedBy() {
  return (
    <section className="w-full overflow-hidden bg-white py-2 md:py-16">

      <div className="px-6 md:px-10">
        <p className="mb-10 font-sans text-xl uppercase md:text-2xl font-normal">
          Trusted By
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <div
          className="
            flex
            w-max
            animate-[trusted-marquee_30s_linear_infinite]
          "
        >

          {/* First set */}
          <div className="flex shrink-0 items-center gap-16 px-8 md:gap-24 md:px-12">
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex h-16 w-32 shrink-0 items-center justify-center md:h-20 md:w-40"
              >
                <img
                  src={logo}
                  alt={`Trusted partner ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Duplicate */}
          <div className="flex shrink-0 items-center gap-16 px-8 md:gap-24 md:px-12">
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex h-16 w-32 shrink-0 items-center justify-center md:h-20 md:w-40"
              >
                <img
                  src={logo}
                  alt=""
                  aria-hidden="true"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Tailwind arbitrary keyframes */}
      <style>{`
        @keyframes trusted-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  )
}