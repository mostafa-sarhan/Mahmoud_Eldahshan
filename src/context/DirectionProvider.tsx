import { useEffect, useMemo, useState, type ReactNode } from 'react'

import {
  DirectionContext,
  type Direction,
  type DirectionContextValue,
} from '@/context/DirectionContext'

const DEFAULT_DIRECTION: Direction = 'ltr'

export function DirectionProvider({ children }: { children: ReactNode }) {
  const [direction, setDirection] = useState<Direction>(DEFAULT_DIRECTION)

  useEffect(() => {
    document.documentElement.setAttribute('dir', direction)
    document.documentElement.setAttribute('lang', direction === 'rtl' ? 'ar' : 'en')
  }, [direction])

  const value = useMemo<DirectionContextValue>(
    () => ({
      direction,
      setDirection,
      toggleDirection: () => setDirection((current) => (current === 'ltr' ? 'rtl' : 'ltr')),
    }),
    [direction],
  )

  return <DirectionContext.Provider value={value}>{children}</DirectionContext.Provider>
}
