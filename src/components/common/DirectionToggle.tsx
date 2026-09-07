import Button from '@/components/ui/Button'
import { useDirection } from '@/hooks/useDirection'

export default function DirectionToggle() {
  const { direction, toggleDirection } = useDirection()

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={toggleDirection}
      aria-label={`Switch to ${direction === 'ltr' ? 'Arabic' : 'English'}`}
    >
      {direction === 'ltr' ? 'عربي' : 'EN'}
    </Button>
  )
}
