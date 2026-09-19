import PageMarqueeTwo from '@/components/PageMarquee/PageMarqueeTwo'

import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

export default function Contact() {
  return (
    <>
      {/* Page Marquee */}
      <div>
        <PageMarqueeTwo title="Contact" />
      </div>

      {/* Contact Section */}
      <section className="bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* ================= LEFT ================= */}
            <div className="rounded-2xl border border-black/10 bg-white p-8 md:p-10">
              <h2 className="font-serif text-4xl font-medium tracking-tight text-black md:text-5xl">
                Get in touch
              </h2>

              <div className="mt-10 space-y-7">
                {/* Email */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm text-black/60">
                    <FiMail />
                    <span>Email:</span>
                  </div>
                  <p className="text-sm text-black">MahmoudTest@gmail.com</p>
                </div>

                {/* Phone */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm text-black/60">
                    <FiPhone />
                    <span>Phone:</span>
                  </div>
                  <p className="text-sm text-black">+20100000000</p>
                </div>

                {/* Address */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm text-black/60">
                    <FiMapPin />
                    <span>Address:</span>
                  </div>
                  <p className="max-w-sm text-sm leading-6 text-black">
                    Shebien El-Koam
                    <br />
                    Menofiya
                    <br />
                    Egypt
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <p className="mb-3 text-sm text-black/60">Follow us:</p>

                <div className="flex gap-2">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 hover:scale-110"
                  >
                    <FaInstagram size={13} />
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 hover:scale-110"
                  >
                    <FaFacebookF size={12} />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 hover:scale-110"
                  >
                    <FaLinkedinIn size={13} />
                  </a>
                  <a
                    href="#"
                    aria-label="X"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 hover:scale-110"
                  >
                    <FaXTwitter size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* ================= RIGHT ================= */}
            <form className="space-y-6 rounded-2xl border border-black/10 bg-white p-8 md:p-10">
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs text-black/70">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/40 focus:border-black focus:ring-1 focus:ring-black"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-xs text-black/70">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/40 focus:border-black focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-xs text-black/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write something...."
                  className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-4 text-sm text-black outline-none transition placeholder:text-black/40 focus:border-black focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full cursor-pointer rounded-xl border border-black bg-black px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
