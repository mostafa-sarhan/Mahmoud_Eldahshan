import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import DirectionToggle from '@/components/common/DirectionToggle'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/utils/cn'

interface NavItem {
  label: string
  to: string
  end?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: ROUTES.home, end: true },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
]

const CONTACT_PATH = '/contact'

const ctaBaseClasses =
  'inline-flex items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 focus-visible:ring-offset-2'

const desktopLinkClasses = ({ isActive }: { isActive: boolean }) =>
  cn(
    'rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30',
    isActive
      ? 'bg-slate-900/5 text-slate-900'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  )

const mobileLinkClasses = ({ isActive }: { isActive: boolean }) =>
  cn(
    'flex items-center rounded-lg px-4 py-2.5 text-base font-medium transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30',
    isActive
      ? 'bg-slate-100 text-slate-900'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  )

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to={ROUTES.home}
          className="rounded-md text-lg font-extrabold tracking-tight text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 sm:text-xl"
        >
          ELDAHSHAN
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className={desktopLinkClasses}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <DirectionToggle />
          <Link to={CONTACT_PATH} className={cn(ctaBaseClasses, 'h-10')}>
            Let&apos;s Talk
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 md:hidden"
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden="true"
              className="size-5"
            >
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden="true"
              className="size-5"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile navigation"
            className="border-t border-slate-200/80 bg-white/95 px-4 pb-5 pt-3 sm:px-6"
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    onClick={closeMenu}
                    className={mobileLinkClasses}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-4 border-t border-slate-100 pt-4">
              <Link
                to={CONTACT_PATH}
                onClick={closeMenu}
                className={cn(ctaBaseClasses, 'h-11 w-full')}
              >
                Let&apos;s Talk
              </Link>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-slate-500">Language</span>
                <DirectionToggle />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
