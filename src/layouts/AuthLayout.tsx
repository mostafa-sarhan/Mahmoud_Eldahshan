import { Link, Outlet } from 'react-router-dom'

import DirectionToggle from '@/components/common/DirectionToggle'
import { APP_DESCRIPTION } from '@/constants'
import { ROUTES } from '@/constants/routes'

export default function AuthLayout() {
  return (
    <div className="relative flex min-h-dvh items-center justify-center bg-slate-50 p-4">
      <div className="absolute top-4 end-4">
        <DirectionToggle />
      </div>
      <div className="w-full max-w-md">
        <Link
          to={ROUTES.home}
          className="mb-6 block text-center text-xl font-semibold text-slate-900"
        >
          {APP_DESCRIPTION}
        </Link>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
