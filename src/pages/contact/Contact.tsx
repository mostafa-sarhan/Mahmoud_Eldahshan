import { useRef, useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import PageMarqueeTwo from '@/components/PageMarquee/PageMarqueeTwo'
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from 'react-icons/fi'
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa6'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

type SendStatus = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<SendStatus>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formRef.current || status === 'sending') return

    setStatus('sending')

    const formData = new FormData(formRef.current)

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.get('name'),
          from_email: formData.get('email'),
          message: formData.get('message'),
        },
        { publicKey: PUBLIC_KEY },
      )

      formRef.current.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }

    window.setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <main className="w-full overflow-hidden bg-white text-black">
      <PageMarqueeTwo title="CONTACT" />

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
          {/* ================= INTRO ================= */}
          <div className="max-w-[1100px]">
            <h1
              className="
                font-serif
                text-[52px]
                leading-[0.86]
                tracking-[-0.055em]
                sm:text-[72px]
                md:text-[100px]
                lg:text-[135px]
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
                text-black/50
                sm:mt-10
                sm:text-xl
                md:text-2xl
              "
            >
              Have a project, an idea, or simply a question?
              <br className="hidden sm:block" />
              Tell me what you’re working on and let’s start a conversation.
            </p>
          </div>

{/* ================= CONTACT AREA ================= */}
{/* ================= CONTACT AREA ================= */}
<div
  className="
    mt-20
    grid
    grid-cols-1
    gap-8
    md:mt-28
    lg:grid-cols-[1.35fr_0.65fr]
    lg:gap-8
  "
>
  {/* ================= FORM CARD ================= */}
  <form
    ref={formRef}
    onSubmit={handleSubmit}
    className="
      order-1
      rounded-[6px]
      border
      border-black/15
      bg-white
      p-7
      sm:p-10
      md:p-12
      lg:p-14
      xl:p-16
    "
  >
    <div
      className="
        flex
        items-start
        justify-between
        border-b
        border-black/10
        pb-8
        md:pb-10
      "
    >
      <div>


        <h2
          className="
            mt-5
            font-serif
            text-[42px]
            leading-[0.88]
            tracking-[-0.045em]
            sm:text-[52px]
            md:text-[64px]
            lg:text-[70px]
          "
        >
          Tell me about
          <br />
          your project.
        </h2>
      </div>


    </div>

    <div className="mt-10 md:mt-12">
      <div className="border-b border-black/15">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className="
            w-full
            border-0
            bg-transparent
            px-0
            py-5
            font-sans
            text-base
            text-black
            outline-none
            placeholder:text-black/35
            sm:text-lg
          "
        />
      </div>

      <div className="border-b border-black/15">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email address"
          className="
            w-full
            border-0
            bg-transparent
            px-0
            py-5
            font-sans
            text-base
            text-black
            outline-none
            placeholder:text-black/35
            sm:text-lg
          "
        />
      </div>

      <div className="border-b border-black/15">
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me about your project..."
          className="
            w-full
            resize-none
            border-0
            bg-transparent
            px-0
            py-5
            font-sans
            text-base
            leading-[1.5]
            text-black
            outline-none
            placeholder:text-black/35
            sm:text-lg
          "
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="
          group
          mt-10
          inline-flex
          items-center
          gap-4
          border-b
          border-black
          pb-2
          font-sans
          text-base
          font-medium
          tracking-[-0.02em]
          transition-all
          duration-300
          hover:gap-6
          disabled:cursor-not-allowed
          sm:text-lg
        "
      >
        <span>
          {status === 'sending'
            ? 'Sending...'
            : status === 'success'
              ? 'Message Sent'
              : status === 'error'
                ? 'Failed - Try Again'
                : 'Send Message'}
        </span>

        <FiArrowUpRight
          className="
            text-lg
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </button>
    </div>
  </form>

  {/* ================= CONTACT DETAILS CARD ================= */}
  <div
    className="
      order-2
      rounded-[6px]
      border
      border-black/15
      bg-white
      p-7
      sm:p-10
      md:p-12
      lg:p-14
      xl:p-16
    "
  >
    <div
      className="
        flex
        items-start
        justify-between
        border-b
        border-black/10
        pb-8
        md:pb-10
      "
    >
      <div>


        <h2
          className="
            mt-5
            max-w-[400px]
            font-serif
            text-[42px]
            leading-[0.88]
            tracking-[-0.045em]
            sm:text-[52px]
            md:text-[60px]
          "
        >
          Let’s start
          <br />
          a conversation.
        </h2>
      </div>
    </div>

    <div className="mt-10">
      {/* Email */}
      <a
        href="mailto:mahmoudeldahshann@gmail.com"
        className="
          group
          block
          border-b
          border-black/10
          py-6
          transition-opacity
          duration-300
          hover:opacity-60
        "
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <FiMail className="text-base text-black/50" />

              <span
                className="
                  font-sans
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-black/40
                "
              >
                Email
              </span>
            </div>

            <span
              className="
                block
                break-all
                font-sans
                text-sm
                tracking-[-0.015em]
                sm:text-base
              "
            >
              mahmoudeldahshann@gmail.com
            </span>
          </div>

          <FiArrowUpRight
            className="
              shrink-0
              text-lg
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </div>
      </a>

      {/* Phone */}
      <a
        href="tel:+201011967626"
        className="
          group
          block
          border-b
          border-black/10
          py-6
          transition-opacity
          duration-300
          hover:opacity-60
        "
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <FiPhone className="text-base text-black/50" />

              <span
                className="
                  font-sans
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-black/40
                "
              >
                Phone
              </span>
            </div>

            <span
              className="
                block
                font-sans
                text-base
                tracking-[-0.015em]
                sm:text-lg
              "
            >
              +20 1011 96 7626
            </span>
          </div>

          <FiArrowUpRight
            className="
              shrink-0
              text-lg
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </div>
      </a>

      {/* Location */}
      <div className="border-b border-black/10 py-6">
        <div className="flex items-center gap-3">
          <FiMapPin className="text-base text-black/50" />

          <span
            className="
              font-sans
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-black/40
            "
          >
            Location
          </span>
        </div>

        <p
          className="
            mt-3
            font-sans
            text-base
            tracking-[-0.015em]
            sm:text-lg
          "
        >
          Cairo, Egypt
        </p>

      </div>
    </div>

    {/* Social */}
    <div className="pt-8">
      <p
        className="
          mb-5
          font-sans
          text-[10px]
          font-medium
          uppercase
          tracking-[0.2em]
          text-black/40
        "
      >
        Follow
      </p>

      <div className="flex gap-2">
        <a
          href="#"
          aria-label="Instagram"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-black/20
            text-black
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
          "
        >
          <FaInstagram className="text-sm" />
        </a>

        <a
          href="#"
          aria-label="Facebook"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-black/20
            text-black
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
          "
        >
          <FaFacebookF className="text-sm" />
        </a>

        <a
          href="#"
          aria-label="LinkedIn"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-black/20
            text-black
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
          "
        >
          <FaLinkedinIn className="text-sm" />
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