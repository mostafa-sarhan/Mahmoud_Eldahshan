import Container from '@/components/common/Container'
import { Developer_NAME } from '@/constants'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/skills' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="w-full bg-black text-white"  id="footer">

      {/* Premium Top Line */}
      <div className="h-[200px] w-full bg-white" />

      <Container className="px-6 md:px-10 lg:px-16">

        {/* Main Footer */}
        <div className="grid gap-16 py-20 md:py-24 lg:grid-cols-2 lg:gap-20 lg:py-28">

          {/* =========================
              LEFT
          ========================== */}
          <div className="flex flex-col justify-between">

            <h2
              className="
                max-w-[850px]
                font-serif
                text-[62px]
                leading-[0.82]
                tracking-[-0.055em]
                sm:text-[82px]
                md:text-[105px]
                lg:text-[115px]
                xl:text-[140px]
              "
            >
              Let’s build
              <br />
              something
              <br />
              meaningful.
            </h2>

          </div>

          {/* =========================
              RIGHT
          ========================== */}
          <div className="flex flex-col justify-between lg:items-end">

            {/* Description + CTA */}
            <div className="w-full max-w-[430px] lg:text-right">

              <p
                className="
                  font-sans
                  text-lg
                  font-normal
                  leading-[1.35]
                  tracking-[-0.02em]
                  text-white/60
                  md:text-xl
                "
              >
                Strategy, clarity and ideas that help ambitious brands
                become impossible to ignore.
              </p>

              {/* CTA */}
              <a
                href="/contact"
                className="
                  mt-9
                  inline-flex
                  border-b
                  border-white
                  pb-2
                  font-sans
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-white
                  transition-opacity
                  duration-300
                  hover:opacity-50
                "
              >
                Work with me
              </a>

            </div>

            {/* =========================
                NAVIGATION + SOCIAL
                ALWAYS VERTICAL
            ========================== */}
            <div
              className="
                mt-16
                flex
                w-full
                flex-col
                gap-12
                font-sans
                lg:mt-0
                lg:w-auto
                lg:items-end
                lg:text-right
              "
            >

              {/* =========================
                  NAVIGATION
              ========================== */}
              <div className="flex flex-col py-3">

                <nav className="flex flex-col items-start gap-3 lg:items-end">

                  {navigation.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="
                        text-sm
                        font-medium
                        uppercase
                        tracking-[0.08em]
                        text-white
                        transition-opacity
                        duration-300
                        hover:opacity-50
                      "
                    >
                      {item.label}
                    </a>
                  ))}

                </nav>

              </div>

{/* =========================
    SOCIAL
========================= */}
<div className="flex flex-col">


  <div className="flex items-center gap-3">

    {/* Instagram */}
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-white/30
        text-white
        transition-all
        duration-300
        hover:border-white
        hover:bg-white
        hover:text-black
      "
    >
      <FaInstagram className="text-lg" />
    </a>

    {/* LinkedIn */}
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-white/30
        text-white
        transition-all
        duration-300
        hover:border-white
        hover:bg-white
        hover:text-black
      "
    >
      <FaLinkedinIn className="text-lg" />
    </a>

    {/* Facebook */}
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-white/30
        text-white
        transition-all
        duration-300
        hover:border-white
        hover:bg-white
        hover:text-black
      "
    >
      <FaFacebookF className="text-lg" />
    </a>

  </div>

</div>

            </div>

          </div>

        </div>

        {/* =========================
            BOTTOM
        ========================== */}
        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/15
            py-6
            font-sans
            text-[10px]
            font-medium
            uppercase
            tracking-[0.12em]
            text-white/35
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p>
            © {currentYear} Mahmoud El-dahshan
          </p>

          <a href='https://mostafasarhan.tech/' target="_blank" rel="noopener noreferrer">
            Developed by 
            <span className='hover:text-white'>{Developer_NAME}</span>
          </a>

          <p>
            All rights reserved
          </p>

        </div>

      </Container>

    </footer>
  )
}