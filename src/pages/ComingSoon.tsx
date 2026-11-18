import { Link } from 'react-router-dom'
import { Hammer } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { usePageTitle } from '@/lib/usePageTitle'

export default function ComingSoon({ title, blurb }: { title: string; blurb: string }) {
  usePageTitle(title)

  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="bg-secondary text-primary mb-6 inline-flex size-16 items-center justify-center rounded-full">
        <Hammer className="size-8" aria-hidden="true" />
      </span>
      <p className="text-highlight text-sm font-bold tracking-widest uppercase">In the workshop</p>
      <h1 className="text-primary mt-2 text-4xl font-extrabold">{title}</h1>
      <p className="text-muted-foreground mt-4 text-lg">{blurb}</p>
      <p className="text-muted-foreground mt-2">This page is coming soon.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" variant="accent">
          <Link to="/#signup">Get notified at launch</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </section>
  )
}
