import PageMarqueeTwo from "@/components/PageMarquee/PageMarqueeTwo";

import {
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      {/* Page Marquee */}
      <div>
        <PageMarqueeTwo title="Contact" />
      </div>

      {/* Contact Section */}
      <section className="bg-[#f5f5f3] py-20 px-5 rounded-lg">
        <div className="mx-auto max-w-6xl bg-white px-8 py-10 md:px-12 md:py-12">

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

            {/* ================= LEFT ================= */}
            <div className="pl-6">
              <h2 className="text-4xl font-medium tracking-tight text-[#151515] md:text-5xl">
                Get in touch
              </h2>

              <div className="mt-10 space-y-7">

                {/* Email */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                    <FiMail />
                    <span>Email:</span>
                  </div>

                  <p className="text-sm text-[#222]">
                    MahmoudTest@gmail.com
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                    <FiPhone />
                    <span>Phone:</span>
                  </div>

                  <p className="text-sm text-[#222]">
                    +20100000000
                  </p>
                </div>

                {/* Address */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                    <FiMapPin />
                    <span>Address:</span>
                  </div>

                  <p className="max-w-sm text-sm leading-6 text-[#222]">
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
                <p className="mb-3 text-sm text-gray-500">
                  Follow us:
                </p>

                <div className="flex gap-2">

                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#151515] text-white transition hover:scale-110"
                  >
                    <FaInstagram size={13} />
                  </a>

                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#151515] text-white transition hover:scale-110"
                  >
                    <FaFacebookF size={12} />
                  </a>

                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#151515] text-white transition hover:scale-110"
                  >
                    <FaLinkedinIn size={13} />
                  </a>

                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#151515] text-white transition hover:scale-110"
                  >
                    <FaXTwitter size={13} />
                  </a>

                </div>
              </div>
            </div>

            {/* ================= RIGHT ================= */}
            <form className="space-y-6">

              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs text-[#333]">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl bg-[#f5f5f3] px-4 py-3 text-sm outline-none transition focus:ring-1 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs text-[#333]">
                    Email address
                  </label>

                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-xl bg-[#f5f5f3] px-4 py-3 text-sm outline-none transition focus:ring-1 focus:ring-black"
                  />
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-xs text-[#333]">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write something...."
                  className="w-full resize-none rounded-xl bg-[#f5f5f3] px-4 py-4 text-sm outline-none transition focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-[#151515] py-3 text-sm text-white transition hover:bg-black"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>
      </section>
    </>
  );
}