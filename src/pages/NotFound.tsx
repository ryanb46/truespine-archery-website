import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { usePageTitle } from '@/lib/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <p className="text-highlight text-sm font-bold tracking-widest uppercase">404</p>
      <h1 className="text-primary mt-2 text-4xl font-extrabold">That shot missed the target.</h1>
      <p className="text-muted-foreground mt-4 text-lg">We couldn't find that page.</p>
      <Button asChild size="lg" className="mt-8">
        <Link to="/">Back to home</Link>
      </Button>
    </section>
  )
}
