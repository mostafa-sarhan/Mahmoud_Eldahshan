import type { ReactNode } from 'react'

import { cn } from '@/utils/cn'

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl'

interface ContainerProps {
  children: ReactNode
  size?: ContainerSize
  className?: string
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
}

export default function Container({ children, size = 'lg', className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full px-4 sm:px-6', sizeClasses[size], className)}>
      {children}
    </div>
  )
}
