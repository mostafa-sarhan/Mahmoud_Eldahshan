import Container from '@/components/common/Container'
import { APP_DESCRIPTION, Developer_NAME } from '@/constants'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <Container className="flex flex-col h-14 items-center justify-center">
        <p className="text-sm text-black/60">
          {APP_DESCRIPTION}
        </p>
        <p className="text-sm text-black/60">
          Developed by {Developer_NAME}
          ©{new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  )
}
