/**
 * Centralised project data.
 *
 * This is the single source of truth for both the Projects index and every
 * Project Details (case study) page, so project information is never
 * duplicated between the two.
 *
 * PLACEHOLDER NOTE
 * Titles, copy and imagery are placeholders. To ship real work, replace the
 * `images` array of a project with its own assets — the gallery reuses
 * whatever it is given and never assumes nine unique images.
 */

import projectVideo1 from '@/assets/projects/video1.mp4'
import projectVideo2 from '@/assets/projects/video2.mp4'
import projectVideo3 from '@/assets/projects/video3.mp4'
import projectVideo4 from '@/assets/projects/video4.mp4'
import projectVideo5 from '@/assets/projects/video5.mp4'
import projectVideo6 from '@/assets/projects/video6.mp4'
import projectVideo7 from '@/assets/projects/video7.mp4'
import projectVideo8 from '@/assets/projects/video8.mp4'

import projectImage1 from '@/assets/productDetails/image1.webp'
import projectImage2 from '@/assets/productDetails/image2.webp'
import projectImage3 from '@/assets/productDetails/image3.webp'
import projectImage4 from '@/assets/productDetails/image4.webp'
import projectImage5 from '@/assets/productDetails/image5.webp'
import projectImage6 from '@/assets/productDetails/image6.webp'
import projectImage7 from '@/assets/productDetails/image7.webp'
import projectImage8 from '@/assets/productDetails/image8.webp'
import projectImage9 from '@/assets/productDetails/image9.webp'

export interface ProjectDetails {
  slug: string
  title: string
  description: string
  engagement: string
  category: string
  type: string
  /** Small frame shown beside the intro copy. Not part of the gallery. */
  introImage: string
  /** The full gallery sequence, in display order. */
  images: string[]
}

/**
 * A project as rendered on the Projects index. Extends `ProjectDetails` with
 * the two fields the index card needs, so a project stays a single record.
 */
export interface Project extends ProjectDetails {
  /** Short line shown under the title on the Projects card. */
  summary: string
  /** Looping card video on the Projects index. */
  video: string
}

/** An image ready for the gallery: a source plus meaningful alt text. */
export interface ProjectImage {
  src: string
  alt: string
}

/**
 * Intrinsic pixel dimensions, keyed by the resolved asset URL.
 *
 * Rendered as `width`/`height` attributes so every image reserves its space
 * before it loads — no layout shift, and the natural aspect ratio of each
 * frame is preserved instead of forcing a fixed container.
 */
const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  [projectImage1]: { width: 3865, height: 2762 },
  [projectImage2]: { width: 2501, height: 3502 },
  [projectImage3]: { width: 2502, height: 3502 },
  [projectImage4]: { width: 3866, height: 2761 },
  [projectImage5]: { width: 3866, height: 2761 },
  [projectImage6]: { width: 3865, height: 2761 },
  [projectImage7]: { width: 3866, height: 2761 },
  [projectImage8]: { width: 3867, height: 2761 },
  [projectImage9]: { width: 3867, height: 2761 },
}

export function getImageDimensions(src: string) {
  return IMAGE_DIMENSIONS[src]
}

/**
 * The bundled imagery only provides nine unique frames.
 *
 * `PLACEHOLDER_GALLERY_SEQUENCE` is written out to the full twelve gallery
 * slots rather than hidden behind a cycle, so the closing pair and final
 * frame are an explicit, visible decision in the data: the last three slots
 * deliberately reuse earlier frames from the same sequence.
 *
 * Replace per project once real work ships.
 */
const PLACEHOLDER_GALLERY_SEQUENCE: string[] = [
  /* 1 */ projectImage1,
  /* 2 */ projectImage2,
  /* 3 */ projectImage3,
  /* 4 */ projectImage4,
  /* 5 */ projectImage5,
  /* 6 */ projectImage6,
  /* 7 */ projectImage7,
  /* 8 */ projectImage8,
  /* 9 */ projectImage9,
  /* 10 */ projectImage1,
  /* 11 */ projectImage2,
  /* 12 */ projectImage3,
]

/**
 * Small frame beside the intro copy, kept out of the gallery's first frames.
 * A landscape frame is used deliberately: it stays compact next to the
 * description and sits furthest from its own gallery appearance.
 */
const PLACEHOLDER_INTRO_IMAGE = projectImage9

export const projects: Project[] = [
  {
    slug: 'one',
    title: 'One',
    summary: 'Brand strategy & identity',
    description:
      'The biopharmaceutical intellectual property think tank that supports policy makers and implementors to ensure that the ideas of the future can flourish.',
    engagement: 'Flagship®',
    category: 'Health',
    type: 'Rebrand',
    introImage: PLACEHOLDER_INTRO_IMAGE,
    images: PLACEHOLDER_GALLERY_SEQUENCE,
    video: projectVideo1,
  },
  {
    slug: 'two',
    title: 'Two',
    summary: 'Digital experience',
    description:
      'A digital experience built to make a complex offer feel simple, considered and effortless to use across every screen.',
    engagement: 'Digital Design',
    category: 'Digital',
    type: 'Website',
    introImage: PLACEHOLDER_INTRO_IMAGE,
    images: PLACEHOLDER_GALLERY_SEQUENCE,
    video: projectVideo2,
  },
  {
    slug: 'three',
    title: 'Three',
    summary: 'Visual identity',
    description:
      'A visual identity system shaped around a precise typographic language and a restrained black and white palette.',
    engagement: 'Visual Identity',
    category: 'Identity',
    type: 'Identity System',
    introImage: PLACEHOLDER_INTRO_IMAGE,
    images: PLACEHOLDER_GALLERY_SEQUENCE,
    video: projectVideo3,
  },
  {
    slug: 'four',
    title: 'Four',
    summary: 'Brand evolution',
    description:
      'Brand evolution that kept what the audience already trusted while quietly rebuilding everything behind it.',
    engagement: 'Brand Strategy',
    category: 'Strategy',
    type: 'Evolution',
    introImage: PLACEHOLDER_INTRO_IMAGE,
    images: PLACEHOLDER_GALLERY_SEQUENCE,
    video: projectVideo4,
  },
  {
    slug: 'five',
    title: 'Five',
    summary: 'Creative direction',
    description:
      'Creative direction and art direction that gave an entire campaign one consistent, recognisable visual rhythm.',
    engagement: 'Art Direction',
    category: 'Art Direction',
    type: 'Campaign',
    introImage: PLACEHOLDER_INTRO_IMAGE,
    images: PLACEHOLDER_GALLERY_SEQUENCE,
    video: projectVideo5,
  },
  {
    slug: 'six',
    title: 'Six',
    summary: 'Packaging & identity',
    description:
      'Packaging and identity designed as one system, so the product reads the same way on the shelf as it does online.',
    engagement: 'Packaging Design',
    category: 'Packaging',
    type: 'Packaging',
    introImage: PLACEHOLDER_INTRO_IMAGE,
    images: PLACEHOLDER_GALLERY_SEQUENCE,
    video: projectVideo6,
  },
  {
    slug: 'seven',
    title: 'Seven',
    summary: 'Brand experience',
    description:
      'A brand experience that carries one idea consistently across touchpoints, from the first impression to the last detail.',
    engagement: 'Brand Experience',
    category: 'Experience',
    type: 'Experience Design',
    introImage: PLACEHOLDER_INTRO_IMAGE,
    images: PLACEHOLDER_GALLERY_SEQUENCE,
    video: projectVideo7,
  },
  {
    slug: 'eight',
    title: 'Eight',
    summary: 'Visual system',
    description:
      'A modular visual system built to scale — a set of clear rules that stay coherent as the brand keeps growing.',
    engagement: 'Design Systems',
    category: 'Design',
    type: 'Visual System',
    introImage: PLACEHOLDER_INTRO_IMAGE,
    images: PLACEHOLDER_GALLERY_SEQUENCE,
    video: projectVideo8,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

/**
 * How many image slots the case study gallery lays out:
 * 4 full width + 2 half width + 3 full width + 2 half width + 1 full width.
 */
const GALLERY_SLOT_COUNT = 12

/**
 * Maps a project's images onto the gallery slots, in display order.
 *
 * Projects are expected to supply all twelve slots; anything shorter is
 * cycled so the layout still holds for a handful of images.
 */
export function buildGalleryImages(project: ProjectDetails): ProjectImage[] {
  const { images, title } = project

  if (images.length === 0) return []

  return Array.from({ length: GALLERY_SLOT_COUNT }, (_, slot) => {
    const sourceIndex = slot % images.length

    return {
      src: images[sourceIndex],
      alt: `${title} — project imagery ${slot + 1} of ${GALLERY_SLOT_COUNT}`,
    }
  })
}

/** The small frame that sits beside the intro copy, kept out of the gallery. */
export function buildIntroImage(project: ProjectDetails): ProjectImage {
  return {
    src: project.introImage,
    alt: `${project.title} — introductory project image`,
  }
}
