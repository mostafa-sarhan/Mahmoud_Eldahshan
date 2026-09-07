import { cn } from '@/utils/cn'

interface ErrorMessageProps {
  message: string
  className?: string
}

export default function ErrorMessage({ message, className }: ErrorMessageProps) {
  return (
    <div
      role="alert"
      className={cn(
        'flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700',
        className,
      )}
    >
      <span aria-hidden="true">⚠</span>
      <span>{message}</span>
    </div>
  )
}
