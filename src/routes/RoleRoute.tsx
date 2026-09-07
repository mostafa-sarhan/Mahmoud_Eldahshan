import { Outlet } from 'react-router-dom'

import type { AppRole } from '@/types'

interface RoleRouteProps {
  requiredRoles?: AppRole[]
}

export default function RoleRoute({ requiredRoles = [] }: RoleRouteProps) {
  void requiredRoles
  return <Outlet />
}
