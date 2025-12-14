import { createFileRoute } from '@tanstack/react-router'
import { HeroGeometric } from '@/components/ui/shape-landing-hero'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return <HeroGeometric />
}
