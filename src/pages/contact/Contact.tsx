import PageMarqueeTwo from '@/components/PageMarquee/PageMarqueeTwo'
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from 'react-icons/fi'
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6'

export default function Contact() {
  return (
    <main className="w-full overflow-hidden bg-white text-black">
      {/* Page Marquee */}
      <PageMarqueeTwo title="CONTACT" />

      {/* Contact Section */}
      <section
        className="
          w-full
          px-5
          py-16
          sm:px-6
          sm:py-20
          md:px-10
          md:py-28
          lg:px-16
          lg:py-36
        "
      >
        <div className="mx-auto max-w-[1500px]">
          {/* Intro */}
          <div className="max-w-[1000px]">
            <h1
              className="
                font-serif
                text-[52px]
                leading-[0.88]
                tracking-[-0.05em]
                sm:text-[70px]
                md:text-[100px]
                lg:text-[130px]
                xl:text-[155px]
              "
            >
              Let’s talk
              <br />
              about your
              <br />
              next move.
            </h1>

            <p
              className="
                mt-8
                max-w-[700px]
                font-sans
                text-lg
                leading-[1.4]
                tracking-[-0.02em]
                text-black/55
                sm:mt-10
                sm:text-xl
                md:text-2xl
              "
            >
              Have a project, an idea, or simply a question? Tell me what
              you’re working on and let’s start a conversation.
            </p>
          </div>

          {/* Contact Content */}
          <div
            className="
              mt-20
              grid
              grid-cols-1
              gap-16
              border-t
              border-black/15
              pt-12
              md:mt-28
              md:pt-16
              lg:grid-cols-[1.2fr_0.8fr]
              lg:gap-24
            "
          >
            {/* ================= FORM ================= */}
            <form className="order-1">
              <div className="mb-10">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-black/45">
                  Send a message
                </p>

                <h2
                  className="
                    mt-4
                    font-serif
                    text-[42px]
                    leading-[0.9]
                    tracking-[-0.04em]
                    sm:text-[52px]
                    md:text-[64px]
                  "
                >
                  Tell me about
                  <br />
                  your project.
                </h2>
              </div>

              <div className="space-y-10">
                {/* Name */}
                <div className="border-b border-black/20">
                  <label
                    htmlFor="name"
                    className="
                      mb-3
                      block
                      font-sans
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-black/45
                    "
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="
                      w-full
                      bg-transparent
                      pb-4
                      font-sans
                      text-lg
                      text-black
                      outline-none
                      placeholder:text-black/25
                      sm:text-xl
                    "
                  />
                </div>

                {/* Email */}
                <div className="border-b border-black/20">
                  <label
                    htmlFor="email"
                    className="
                      mb-3
                      block
                      font-sans
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-black/45
                    "
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    className="
                      w-full
                      bg-transparent
                      pb-4
                      font-sans
                      text-lg
                      text-black
                      outline-none
                      placeholder:text-black/25
                      sm:text-xl
                    "
                  />
                </div>

                {/* Message */}
                <div className="border-b border-black/20">
                  <label
                    htmlFor="message"
                    className="
                      mb-3
                      block
                      font-sans
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-black/45
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me a little about your project..."
                    className="
                      w-full
                      resize-none
                      bg-transparent
                      pb-4
                      font-sans
                      text-lg
                      text-black
                      outline-none
                      placeholder:text-black/25
                      sm:text-xl
                    "
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-4
                    border-b
                    border-black
                    pb-2
                    font-sans
                    text-lg
                    font-medium
                    tracking-[-0.02em]
                    transition-all
                    duration-300
                    hover:gap-6
                    sm:text-xl
                  "
                >
                  <span>Send Message</span>

                  <FiArrowUpRight
                    className="
                      text-xl
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </button>
              </div>
            </form>

            {/* ================= CONTACT INFO ================= */}
            <div className="order-2 lg:pt-1">
              <p className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-black/45">
                Contact Details
              </p>

              <div className="mt-10 space-y-10">
                {/* Email */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <FiMail className="text-lg" />

                    <span className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-black/45">
                      Email
                    </span>
                  </div>

                  <a
                    href="mailto:mahmoudeldahshann@gmail.com"
                    className="
                      font-sans
                      text-lg
                      tracking-[-0.02em]
                      transition-opacity
                      duration-300
                      hover:opacity-50
                      sm:text-xl
                    "
                  >
                    mahmoudeldahshann@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <FiPhone className="text-lg" />

                    <span className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-black/45">
                      Phone
                    </span>
                  </div>

                  <a
                    href="tel:+201011967626"
                    className="
                      font-sans
                      text-lg
                      tracking-[-0.02em]
                      transition-opacity
                      duration-300
                      hover:opacity-50
                      sm:text-xl
                    "
                  >
                    +20 1011 96 7626
                  </a>
                </div>

                {/* Location */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <FiMapPin className="text-lg" />

                    <span className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-black/45">
                      Location
                    </span>
                  </div>

                  <p className="font-sans text-lg tracking-[-0.02em] sm:text-xl">
                    Egypt
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="mt-16 border-t border-black/15 pt-8">
                <p className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-black/45">
                  Follow
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black
                      transition-all
                      duration-300
                      hover:bg-black
                      hover:text-white
                    "
                  >
                    <FaInstagram className="text-base" />
                  </a>

                  <a
                    href="#"
                    aria-label="Facebook"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black
                      transition-all
                      duration-300
                      hover:bg-black
                      hover:text-white
                    "
                  >
                    <FaFacebookF className="text-base" />
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black
                      transition-all
                      duration-300
                      hover:bg-black
                      hover:text-white
                    "
                  >
                    <FaLinkedinIn className="text-base" />
                  </a>

                  <a
                    href="#"
                    aria-label="X"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black
                      transition-all
                      duration-300
                      hover:bg-black
                      hover:text-white
                    "
                  >
                    <FaXTwitter className="text-base" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}