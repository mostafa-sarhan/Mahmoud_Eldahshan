import { Link } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
import { cn } from '@/utils/cn'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60dvh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-6xl font-bold text-black">404</p>
      <h1 className="text-xl font-semibold text-black">Page not found</h1>
      <p className="max-w-sm text-sm text-black/60">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to={ROUTES.home}
        className={cn(
          'inline-flex h-10 items-center justify-center rounded-lg bg-black px-4 text-sm',
          'font-medium text-white transition-colors hover:bg-black/90',
        )}
      >
        Go to home
      </Link>
    </div>
  )
}
