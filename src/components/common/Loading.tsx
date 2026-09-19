import { cn } from '@/utils/cn'

interface LoadingProps {
  label?: string
  className?: string
}

export default function Loading({ label, className }: LoadingProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn('flex flex-col items-center justify-center gap-3 p-8', className)}
    >
      <span
        aria-hidden="true"
        className="size-8 animate-spin rounded-full border-2 border-black/20 border-t-black"
      />
      {label && <span className="text-sm text-black/60">{label}</span>}
    </div>
  )
}
