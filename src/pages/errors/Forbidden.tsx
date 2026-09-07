import { Link } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
import { cn } from '@/utils/cn'

export default function ForbiddenPage() {
  return (
    <div className="flex min-h-[60dvh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-6xl font-bold text-primary-600">403</p>
      <h1 className="text-xl font-semibold text-slate-900">Forbidden</h1>
      <p className="max-w-sm text-sm text-slate-500">
        You do not have permission to access this page.
      </p>
      <Link
        to={ROUTES.home}
        className={cn(
          'inline-flex h-10 items-center justify-center rounded-lg bg-primary-600 px-4 text-sm',
          'font-medium text-white transition-colors hover:bg-primary-700',
        )}
      >
        Go to home
      </Link>
    </div>
  )
}
