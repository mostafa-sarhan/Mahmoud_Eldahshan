import video1 from "../../assets/video/video1.mp4"
import video2 from "../../assets/video/video2.mp4"

const projects = [
  {
    title: "Impel",
    description: "Automotive intelligence",
    category: "AI",
    video: video1,
  },
  {
    title: "Nomina",
    description: "Onchain infrastructure",
    category: "Crypto",
    video: video2,
  },
]

export default function RecentWorks() {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">

      {/* Header */}
      <div className="px-6 md:px-10 lg:px-16">

        <h2
          className="
            max-w-full
            font-sans
            text-[52px]
            leading-[0.9]

            text-black
            sm:text-[140px]
            md:text-[140px]
            lg:text-[180px]
            xl:text-[210px]
          "
        >
          Recent 
        </h2>
        <h2
          className="
            max-w-full
            font-sans
            text-[52px]
            leading-[0.9]

            text-black
            sm:text-[140px]
            md:text-[140px]
            lg:text-[180px]
            xl:text-[210px]
          "
        >
          Work
        </h2>

<div className="flex w-full justify-start lg:justify-end">
  <button
    type="button"
    className="
    cursor-pointer
      mt-4
      border-b
      border-black
      pb-1
      font-sans
      text-xl
      font-medium
      tracking-wide
      text-black
      transition-opacity
      duration-300
      hover:opacity-50
      md:mt-10
    "
  >
    See More Projects
  </button>
</div>

      </div>

      {/* Projects */}
      <div
        className="
          mt-16
          grid
          grid-cols-1
          gap-y-6
          px-6
          md:mt-16
          md:gap-y-10
          md:px-10
          lg:mt-20
          lg:grid-cols-2
          lg:gap-x-12
          lg:gap-y-12
          lg:px-16
        "
      >

        {projects.map((project) => (
          <article
            key={project.title}
            className="relative col-span-1"
          >

            {/* Video */}
            <div
              className="
                relative
                w-full
                overflow-hidden
                bg-black
                pt-[100%]
              "
            >
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            {/* Project Info */}
            <div
              className="
                flex
                justify-between
                pt-5
                md:pt-6
              "
            >

              {/* Title + Description */}
              <div className="flex flex-col items-start font-sans font-medium">

                <h3
                  className="
                    text-xl
                    leading-none
                    tracking-tight
                    text-black
                    md:text-2xl
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-1
                    text-base
                    leading-tight
                    tracking-tight
                    text-black/60
                    md:text-lg
                  "
                >
                  {project.description}
                </p>

              </div>

              {/* Category */}
              <span
                className="
                  hidden
                  font-sans
                  text-sm
                  font-medium
                  uppercase
                  text-black
                  md:block
                "
              >
                ({project.category})
              </span>

            </div>

          </article>
        ))}

      </div>

    </section>
  )
}