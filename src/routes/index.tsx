import { Route, Routes } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
import AuthLayout from '@/layouts/AuthLayout'
import PublicLayout from '@/layouts/PublicLayout'
import LoginPage from '@/pages/auth/Login'
import ForbiddenPage from '@/pages/errors/Forbidden'
import NotFoundPage from '@/pages/errors/NotFound'
import HomePlaceholder from '@/pages/home/HomePlaceholder'
import About from '@/pages/About/About'
import Contact from '@/pages/contact/Contact'
import Services from '@/pages/services/Services'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.login} element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
      </Route>

      <Route element={<PublicLayout />}>
        <Route index element={<HomePlaceholder />} />
        <Route path={ROUTES.forbidden} element={<ForbiddenPage />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='contact' element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}