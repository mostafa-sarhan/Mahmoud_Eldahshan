import PageMarqueeTwo from '@/components/PageMarquee/PageMarqueeTwo'
import MahmoudImage from '@/assets/images/Mahmoud.png'
import PageMarqueReverse from '@/components/PageMarquee/PageMarqueReverse'

export default function About() {
  return (
    <main className="w-full overflow-hidden bg-white text-black">
      {/* =========================
          PAGE MARQUEE
      ========================= */}

      <PageMarqueeTwo title="ABOUT" />

      {/* =========================
          INTRO / MAIN HEADING
      ========================= */}

      <section
        className="
          w-full px-5 py-16
          sm:px-6 sm:py-20
          md:px-10 md:py-28
          lg:px-16 lg:py-36
        "
      >
        <div className="mx-auto max-w-[1500px]">
          <h1
            className="
              max-w-[1250px]
              font-serif
              text-[48px]
              leading-[0.9]
              tracking-[-0.05em]
              sm:text-[62px]
              md:text-[82px]
              lg:text-[115px]
              xl:text-[150px]
            "
          >
            Beyond the work,
            <br />
            there is a way
            <br />
            of thinking.
          </h1>
        </div>
      </section>

      {/* =========================
          INTRO CONTENT + IMAGE
      ========================= */}

      <section
        className="
          w-full px-5 pb-16
          sm:px-6 sm:pb-20
          md:px-10 md:pb-28
          lg:px-16 lg:pb-36
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            grid-cols-1
            gap-12
            md:gap-16
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-start
            lg:gap-20
            xl:gap-28
          "
        >
          {/* Text */}
          <div className="lg:pt-16">
            <p
              className="
                max-w-[650px]
                font-sans
                text-[21px]
                leading-[1.3]
                tracking-[-0.025em]
                sm:text-[24px]
                md:text-[28px]
                lg:text-[38px]
              "
            >
              I’m Mahmoud El-Dahshan, a Brand Strategist with diverse
              experience in the field. I began my career as a designer before
              gradually transitioning into a role deeply focused on strategy,
              expanding my perspective from designing brand identities to
              understanding the thinking, principles, and strategy behind them.
            </p>

            <p
              className="
                mt-7
                max-w-[650px]
                font-sans
                text-lg
                leading-[1.4]
                tracking-[-0.02em]
                text-black/50
                sm:mt-8
                sm:text-xl
                md:text-2xl
                lg:text-[28px]
              "
            >
              Design taught me how a brand communicates. Strategy taught me to
              ask why it should communicate in the first place — why a brand
              exists, how it competes, and what needs to change for it to hold
              a stronger position in the market.
            </p>
          </div>

          {/* Image */}
          <div
            className="
              w-full
              max-w-[700px]
              overflow-hidden
              rounded-xl
              md:mx-auto
              lg:mx-0
              lg:ml-auto
            "
          >
            <img
              src={MahmoudImage}
              alt="Mahmoud El-Dahshan"
              className="
                block
                h-auto
                w-full
                object-contain
              "
            />
          </div>
        </div>
      </section>

      {/* =========================
          HOW I THINK
      ========================= */}

      <section className="w-full px-5 py-2 sm:px-6 sm:py-10 md:px-10 md:py-14 lg:px-16 lg:py-18">
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-[1100px]">
            <p
              className="
                max-w-[900px]
                font-sans
                text-lg
                leading-[1.4]
                tracking-[-0.02em]
                text-black/60
                sm:mt-8
                sm:text-xl
                md:text-2xl
              "
            >
              Today I work at the intersection of brand thinking, business
              understanding, market analysis, and creative direction, with
              experience across Egypt, Saudi Arabia, the UAE, and other markets
              in the region.
            </p>

            <p
              className="
                max-w-[900px]
                font-sans
                text-lg
                leading-[1.4]
                tracking-[-0.02em]
                text-black/60
                sm:mt-8
                sm:text-xl
                md:text-2xl
              "
            >
              My path is a little different — I studied Electrical Power and
              Machines Engineering. That analytical foundation now shapes how
              I work: understanding systems, identifying problems, and looking
              for structured solutions rather than isolated fixes.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CLOSING STATEMENT
      ========================= */}

      <section
        className="
          w-full
          px-5
          py-8
          sm:px-6
          sm:py-20
          md:px-10
          md:py-28
          lg:px-16
          lg:py-36
        "
      >
        <div className="mx-auto max-w-[1500px]">
          <p
            className="
              max-w-[1200px]
              font-serif
              text-[40px]
              leading-[0.92]
              tracking-[-0.045em]
              sm:text-[52px]
              md:text-[70px]
              lg:text-[96px]
              xl:text-[120px]
            "
          >
            Strategy is not about making
            <br className="hidden lg:block" />
            brands louder. It is about making
            <br className="hidden lg:block" />
            them clearer.
          </p>
        </div>
      </section>

      {/* =========================
          MY APPROACH
      ========================= */}

      <section
        className="
          w-full
          border-t
          border-black/10
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
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            grid-cols-1
            gap-10
            md:gap-14
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-20
          "
        >
          {/* Label */}
          <div>
            <p className="mb-10 font-sans text-xl font-medium uppercase md:text-2xl">
              (My Approach)
            </p>
          </div>

          {/* Content */}
          <div className="max-w-[950px]">
            <p
              className="
                font-sans
                text-[25px]
                leading-[1.15]
                tracking-[-0.025em]
                sm:text-[30px]
                md:text-[38px]
                lg:text-[48px]
              "
            >
              Before I think about how a brand should look, I want to
              understand why it exists. Why should people choose it — and why
              might they choose someone else instead? Does it genuinely create
              value, and where does that difference come from?
            </p>

            <p
              className="
                mt-8
                max-w-[900px]
                font-sans
                text-lg
                leading-[1.4]
                tracking-[-0.02em]
                text-black/60
                sm:mt-10
                sm:text-xl
                md:text-2xl
              "
            >
              I also look beyond the customer-facing side, at how the business
              is managed and decisions are made — because a brand is shaped as
              much by what's behind it as by what people see.
            </p>

            <p
              className="
                mt-8
                max-w-[900px]
                font-sans
                text-lg
                leading-[1.4]
                tracking-[-0.02em]
                text-black/60
                sm:mt-10
                sm:text-xl
                md:text-2xl
              "
            >
              From there, I study the market: competitors, positioning, and
              relevant benchmarks — not to imitate success, but to understand
              it and find where the brand can build a more distinctive
              position.
            </p>

            <p
              className="
                mt-8
                max-w-[900px]
                font-sans
                text-lg
                leading-[1.4]
                tracking-[-0.02em]
                text-black/60
                sm:mt-10
                sm:text-xl
                md:text-2xl
              "
            >
              Once the picture is clear, I set a strategic direction for a
              defined period — principles and directions that guide what the
              brand should do, avoid, and communicate. Strategy should create
              clarity, not complexity.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          BEHIND THE STRATEGY
      ========================= */}

      <section
        className="
          w-full
          border-t
          border-black/10
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
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            grid-cols-1
            gap-10
            md:gap-14
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-20
          "
        >
          {/* Label */}
          <div>
            <p className="mb-10 font-sans text-xl font-medium uppercase md:text-2xl">
              (Behind the Strategy)
            </p>
          </div>

          {/* Content */}
          <div className="max-w-[950px]">
            <p
              className="
                font-sans
                text-[25px]
                leading-[1.15]
                tracking-[-0.025em]
                sm:text-[30px]
                md:text-[38px]
                lg:text-[48px]
              "
            >
              Every project starts with an initial meeting to understand the
              brand and its challenges. I then send back a brief for
              confirmation and set a clear timeline, with each stage treated
              as a milestone — reviewed and approved before moving forward.
            </p>

            <p
              className="
                mt-8
                max-w-[900px]
                font-sans
                text-lg
                leading-[1.4]
                tracking-[-0.02em]
                text-black/60
                sm:mt-10
                sm:text-xl
                md:text-2xl
              "
            >
              This isn't just about managing time; it's about accountability
              and shared understanding at every step.
            </p>

            <p
              className="
                mt-8
                max-w-[900px]
                font-sans
                text-lg
                leading-[1.4]
                tracking-[-0.02em]
                text-black/60
                sm:mt-10
                sm:text-xl
                md:text-2xl
              "
            >
              I see the client relationship as a collaboration, not an
              instruction-and-delivery process. I value honest discussion and
              structured feedback, and I believe every important decision
              needs a reason behind it — one connected to the brand, its
              audience, and its objectives.
            </p>

            <p
              className="
                mt-8
                max-w-[900px]
                font-sans
                text-lg
                leading-[1.4]
                tracking-[-0.02em]
                text-black/60
                sm:mt-10
                sm:text-xl
                md:text-2xl
              "
            >
              Whether working with a founder, a designer, or a wider team, I
              value an environment built on clarity, respect, and direct
              communication. The goal is never to prove who's right — it's to
              reach the decision that serves the brand best.
            </p>
          </div>
        </div>
      </section>

      <PageMarqueReverse title="Journey" />
      <PageMarqueeTwo title="Journey" />

      {/* =========================
          SECTION CLOSING
      ========================= */}

      <section className="w-full px-5
          py-12
          sm:px-6
          sm:py-20
          md:px-10
          md:py-28
          lg:px-16
          lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-[1100px]">
            <p
              className="
              pt-8
                font-sans
                text-[25px]
                leading-[1.15]
                tracking-[-0.025em]
                sm:text-[30px]
                md:text-[38px]
                lg:text-[48px]
              "
            >
              My background sits between disciplines — design, strategy, and
              analytical thinking — and I keep learning, because brands can't
              stay relevant by standing still.
            </p>

            <p
              className="
                mt-8
                max-w-[900px]
                font-sans
                text-lg
                leading-[1.4]
                tracking-[-0.02em]
                text-black/60
                sm:mt-10
                sm:text-xl
                md:text-2xl
              "
            >
              What's stayed constant is this: I don't want to build brands
              around ideas that only look good on the surface. I want to
              understand what makes a brand matter and what it needs to become
              stronger — because building a brand is really about building a
              foundation strong enough to support what comes after it.
            </p>
          </div>
        </div>

        {/* Final Statement + CTA */}
        <div
          className="
            mx-auto
            pt-12
            flex
            max-w-[1500px]
            flex-col
            gap-8
            pt-6
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-12
          "
        >
          <p
            className="
              max-w-[1200px]
              font-serif
              text-[50px]
              leading-[0.92]
              tracking-[-0.045em]
              sm:text-[62px]
              md:text-[70px]
              lg:text-[96px]
              xl:text-[120px]
            "
          >
            That is where my work begins.
          </p>

          <a
            href="/contact"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-3
              self-start
              border-b
              border-black
              pb-2
              font-sans
              text-lg
              font-medium
              tracking-[-0.02em]
              text-black
              transition-all
              duration-300
              hover:gap-5
              lg:mb-2
              lg:self-auto
              sm:text-xl
              md:text-2xl
            "
          >
            <span>Get in Touch</span>

            <span
              aria-hidden="true"
              className="
                inline-block
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>
      </section>
    </main>
  )
}