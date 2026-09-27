/*
  Project imagery.

  Drop real project images into `src/assets/projects/` named 1, 2, 3 ...
  (any of .jpg / .jpeg / .png / .webp / .avif) and the list below picks them
  up automatically — no other file needs to change. Images are matched by the
  first number in the file name, so 1.jpg becomes project 01, 2.png becomes
  project 02, and so on.

  Until those files exist, the list is topped up from imagery already bundled
  in `src/assets/services/`, so the page always renders real assets.
*/

const PROJECT_COUNT = 6

const imageModules = import.meta.glob<{ default: string }>(
  [
    '/src/assets/projects/*.{jpg,jpeg,png,webp,avif}',
    '/src/assets/services/*.{jpg,jpeg,png,webp,avif}',
  ],
  { eager: true },
)

function readLeadingNumber(path: string): number {
  const fileName = path.split('/').pop() ?? ''
  const digits = fileName.match(/\d+/)?.[0]

  return digits ? Number.parseInt(digits, 10) : Number.MAX_SAFE_INTEGER
}

function collectFromFolder(folder: string): string[] {
  return Object.entries(imageModules)
    .filter(([path]) => path.startsWith(folder))
    .sort(([a], [b]) => readLeadingNumber(a) - readLeadingNumber(b))
    .map(([, module]) => module.default)
}

export const projectImages: string[] = [
  ...collectFromFolder('/src/assets/projects/'),
  ...collectFromFolder('/src/assets/services/'),
].slice(0, PROJECT_COUNT)
