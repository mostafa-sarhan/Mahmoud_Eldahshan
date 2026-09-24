
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

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
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const CONTACT_PATH = '/contact'

const desktopLinkClasses = ({ isActive }: { isActive: boolean }) =>
  cn(
    'font-sans text-lg font-medium tracking-tight transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black',
    isActive ? 'text-black' : 'text-black/60 hover:text-black',
  )

const mobileLinkClasses = ({ isActive }: { isActive: boolean }) =>
  cn(
    'flex items-center px-4 py-3 text-lg font-medium transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black',
    isActive ? 'text-black' : 'text-black/60 hover:text-black',
  )


// function CircularLogo() {
//   return (
//     <motion.svg
//       viewBox="0 0 100 100"
//       aria-hidden="true"
//       className="h-12 w-12 md:h-16 md:w-16"
//       // animate={{ rotate: 360 }}
//       // transition={{
//       //   duration: 10,
//       //   ease: 'linear',
//       //   repeat: Infinity,
//       // }}
//     >
//       <defs>
//         <path
//           id="navbar-circle-path"
//           d="
//             M 50,50
//             m -40,0
//             a 40,40 0 1,1 80,0
//             a 40,40 0 1,1 -80,0
//           "
//         />
//       </defs>

//       <text
//         className="fill-black font-serif font-regular"
//         fontSize="14"
//         letterSpacing="0.5"
//       >
//         <textPath
//           href="#navbar-circle-path"
//           startOffset="0%"
//           textLength="250"
//           lengthAdjust="spacingAndGlyphs"
//         >
//           MAHMOUD ELDAHSHAN 
//         </textPath>
//       </text>
//     </motion.svg>
//   )
// }

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky border-b border-black/10 top-0 z-40 bg-white">
      {/* ================= DESKTOP / HEADER ================= */}
      <div className="relative mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-6 md:px-8 lg:px-10">

        {/* ================= LOGO ================= */}
        <Link
          to={ROUTES.home}
          aria-label="Mahmoud Eldahshan — Home"
          className="
            relative
            z-10
            inline-flex
            shrink-0
            rounded-full
            font-sans
            text-xl
            md:text-2xl
            font-medium
            tracking-tight
            text-black
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-black
          "
        >
          {/* <CircularLogo /> */}
          Mahmoud El-dahshan
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav
          aria-label="Main navigation"
          className="
            absolute
            left-1/2
            top-1/2
            hidden
            -translate-x-1/2
            -translate-y-1/2
            md:block
          "
        >
          <ul className="flex items-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={cn(
                    desktopLinkClasses,
                    'mx-5 lg:mx-7',
                  )}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* ================= CTA ================= */}
        <div className="relative z-10 hidden md:block">
          <Link
            to={CONTACT_PATH}
            className="
              inline-flex
              items-center
              py-2
              text-base
              font-medium
              text-black
              transition-opacity
              duration-200
              hover:opacity-60
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-black
            "
          >
            WORK WITH US
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
      <button
        type="button"
        onClick={() => setIsMenuOpen((open) => !open)}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="
          relative
          z-10
          inline-flex
          h-8
          w-8
          items-center
          justify-center
          text-black
          transition-opacity
          duration-200
          hover:opacity-60
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-black
          md:hidden
        "
      >
        <span className="relative flex h-6 w-6 flex-col items-center justify-center">

          {/* Top line */}
          <span
            className={cn(
              'absolute block h-0.5 w-6 bg-black transition-all duration-300 ease-in-out',
              isMenuOpen
                ? 'rotate-45'
                : '-translate-y-2',
            )}
          />

          {/* Middle line */}
          <span
            className={cn(
              'absolute block h-0.5 w-6 bg-black transition-all duration-300 ease-in-out',
              isMenuOpen
                ? 'scale-0 opacity-0'
                : 'scale-100 opacity-100',
            )}
          />

          {/* Bottom line */}
          <span
            className={cn(
              'absolute block h-0.5 w-6 bg-black transition-all duration-300 ease-in-out',
              isMenuOpen
                ? '-rotate-45'
                : 'translate-y-2',
            )}
          />

        </span>
      </button>
      </div>
      {/* ================= MOBILE MENU ================= */}
      <div
        id="mobile-menu"
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile navigation"
            className="border-t border-black/10 bg-white px-6 pb-6 pt-4"
          >
            <ul className="flex flex-col">
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

            <div className="mt-4 border-t border-black/10 pt-5">
              <Link
                to={CONTACT_PATH}
                onClick={closeMenu}
                className="
                  inline-flex
                  text-base
                  font-medium
                  text-black
                  transition-opacity
                  duration-200
                  hover:opacity-60
                "
              >
                WORK WITH US
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

