import Container from '@/components/common/Container'
import { APP_NAME } from '@/constants'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="flex h-14 items-center justify-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {APP_NAME}
        </p>
      </Container>
    </footer>
  )
}
