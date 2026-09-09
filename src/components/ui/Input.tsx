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
          'h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-black',
          'placeholder:text-slate-400',
          'focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/30',
          'disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500',
          error && 'border-red-600 focus:border-red-600 focus:ring-red-600/30',
          className,
        )}
        {...props}
      />
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-slate-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
