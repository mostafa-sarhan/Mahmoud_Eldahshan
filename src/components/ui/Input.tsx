import type { InputHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/utils/cn'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  id: string
  label?: ReactNode
  hint?: ReactNode
  error?: ReactNode
}

export default function Input({ id, label, hint, error, className, ...props }: InputProps) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-black">
          {label}
        </label>
      )}
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(
          'h-10 w-full rounded-lg border border-black/20 bg-white px-3 text-sm text-black',
          'placeholder:text-black/40',
          'focus:border-black focus:outline-none focus:ring-2 focus:ring-black/30',
          'disabled:cursor-not-allowed disabled:bg-black/5 disabled:text-black/40',
          error && 'border-black focus:border-black focus:ring-black/30',
          className,
        )}
        {...props}
      />
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-black/60">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-xs text-black">
          {error}
        </p>
      )}
    </div>
  )
}
