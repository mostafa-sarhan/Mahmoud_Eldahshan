export const ROUTES = {
  home: '/',
  login: '/auth/login',
  forbidden: '/forbidden',
  projects: '/projects',
  projectDetails: '/projects/:slug',
} as const

/** Builds the case study URL for a single project. */
export function projectPath(slug: string): string {
  return `/projects/${slug}`
}
