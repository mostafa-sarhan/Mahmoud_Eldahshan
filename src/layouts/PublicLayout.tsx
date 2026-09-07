import { Outlet } from 'react-router-dom'

import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/layout/Footer'

export default function PublicLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
