import type { FormEvent } from 'react'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function LoginPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-black">Sign in</h1>
        <p className="mt-1 text-sm text-slate-500">
          Enter your credentials to access your account.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          autoComplete="email"
        />
        <Input
          id="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          autoComplete="current-password"
        />
        <Button type="submit" size="lg">
          Sign in
        </Button>
      </form>
    </div>
  )
}
