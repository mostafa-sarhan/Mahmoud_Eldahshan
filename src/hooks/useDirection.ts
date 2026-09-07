import { useContext } from 'react'

import { DirectionContext, type DirectionContextValue } from '@/context/DirectionContext'

export function useDirection(): DirectionContextValue {
  const context = useContext(DirectionContext)
  if (!context) {
    throw new Error('useDirection must be used within a DirectionProvider')
  }
  return context
}
