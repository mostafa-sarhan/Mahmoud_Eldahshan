import Container from '@/components/common/Container'
import { APP_DESCRIPTION, Developer_NAME } from '@/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-black text-white">

      <Container className="px-6 md:px-10 lg:px-16">

        {/* Main Footer */}
        <div className="grid gap-16 py-20 md:py-24 lg:grid-cols-2 lg:gap-20 lg:py-28">

          {/* Left */}
          <div className="flex flex-col justify-between">

            <div>
              <p className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                {APP_DESCRIPTION}
              </p>

              <h2 className="max-w-[850px] font-serif text-[64px] leading-[0.85] tracking-[-0.05em] sm:text-[85px] md:text-[110px] lg:text-[120px] xl:text-[145px]">
                Let’s build
                <br />
                something
                <br />
                meaningful.
              </h2>
            </div>

          </div>

          {/* Right */}
          <div className="flex flex-col justify-between lg:items-end">

            <div className="w-full max-w-[420px] lg:text-right">

              <p className="font-sans text-lg leading-[1.3] text-white/60 md:text-xl">
                Strategy, clarity and ideas that help ambitious brands
                become impossible to ignore.
              </p>

              {/* CTA */}
              <a
                href="mailto:"
                className="
                  mt-8
                  inline-flex
                  border-b
                  border-white
                  pb-2
                  font-sans
                  text-lg
                  font-medium
                  uppercase
                  tracking-wide
                  text-white
                  transition-opacity
                  duration-300
                  hover:opacity-50
                "
              >
                Work with me
              </a>

            </div>

            {/* Navigation */}
            <nav className="mt-16 flex w-full flex-col gap-4 font-sans text-sm uppercase tracking-wide lg:mt-0 lg:w-auto lg:items-end">
              <a
                href="#"
                className="transition-opacity duration-300 hover:opacity-50"
              >
                Home
              </a>

              <a
                href="#recent-works"
                className="transition-opacity duration-300 hover:opacity-50"
              >
                Recent Work
              </a>

              <a
                href="#"
                className="transition-opacity duration-300 hover:opacity-50"
              >
                About
              </a>

              <a
                href="#"
                className="transition-opacity duration-300 hover:opacity-50"
              >
                Contact
              </a>
            </nav>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-white/15 py-6 font-sans text-xs uppercase tracking-wide text-white/40 md:flex-row md:items-center md:justify-between">

          <p>
            © {currentYear} Mahmoud Eldahshan
          </p>

          <p>
            Developed by {Developer_NAME}
          </p>

          <p>
            All rights reserved
          </p>

        </div>

      </Container>

    </footer>
  )
}