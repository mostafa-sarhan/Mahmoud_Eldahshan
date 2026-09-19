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
        'flex items-center gap-2 rounded-lg border border-black/10 bg-black/5 px-4 py-3 text-sm text-black',
        className,
      )}
    >
      <span aria-hidden="true">⚠</span>
      <span>{message}</span>
    </div>
  )
}
