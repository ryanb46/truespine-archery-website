import { Link } from 'react-router-dom'
import { ArrowRight, Gauge, PackageCheck, RotateCw, ShieldCheck, Ruler, Wrench, Video } from 'lucide-react'

import { HeroArt } from '@/components/HeroArt'
import { ProductCard } from '@/components/ProductCard'
import { SignupForm } from '@/components/SignupForm'
import { Button } from '@/components/ui/button'
import { products } from '@/data/products'
import { usePageTitle } from '@/lib/usePageTitle'

const steps = [
  {
    icon: Ruler,
    title: 'Take the TrueFit Quiz',
    body: 'Measure your draw length at home in two minutes. We recommend a draw weight and bow class that suit you.',
  },
  {
    icon: Gauge,
    title: 'Build your arrows',
    body: 'The Arrow Builder works out the right spine for your bow, then you choose shaft, length, points, fletching and nock.',
  },
  {
    icon: PackageCheck,
    title: 'We build and ship',
    body: 'A technician checks your build, then cuts, fletches and spin-tests every arrow and ships it ready to shoot.',
  },
]

const trust = [
  { icon: RotateCw, label: 'Every arrow spin-tested' },
  { icon: ShieldCheck, label: '30-day fit guarantee' },
  { icon: Video, label: 'Free video fit check' },
  { icon: Wrench, label: 'Built by hand in our workshop' },
]

export default function Home() {
  usePageTitle()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.15fr_1fr] md:py-20">
          <div className="space-y-6">
            <p className="text-highlight text-sm font-bold tracking-widest uppercase">
              Your online pro shop
            </p>
            <h1 className="text-primary text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
              Arrows fitted to you, not a generic box.
            </h1>
            <p className="text-muted-foreground max-w-xl text-lg">
              The right arrow depends on your draw length, draw weight and bow. TrueSpine does the
              spine math for you, then builds and spin-tests every arrow in our workshop.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="accent">
                <Link to="/quiz">
                  Take the TrueFit Quiz <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/builder">Open the Arrow Builder</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm md:max-w-md">
            <HeroArt />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section aria-label="Why archers trust TrueSpine" className="bg-primary text-primary-foreground">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-4 px-4 py-6 sm:px-6 md:grid-cols-4">
          {trust.map(({ icon: Icon, label }) => (
            <li key={label} className="group flex items-center gap-3 text-sm font-semibold">
              <Icon
                className="text-accent size-5 shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
                aria-hidden="true"
              />
              {label}
            </li>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-primary text-3xl font-extrabold sm:text-4xl">How it works</h2>
          <p className="text-muted-foreground mt-3 text-lg">
            Pro-shop fitting without the drive to a pro shop, in three steps.
          </p>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="group hover-lift bg-card relative rounded-xl border p-6 shadow-sm">
              <span className="bg-secondary text-primary group-hover:bg-accent mb-4 inline-flex size-12 items-center justify-center rounded-full transition-colors duration-300">
                <Icon className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              </span>
              <p className="text-highlight text-xs font-bold tracking-widest uppercase">Step {i + 1}</p>
              <h3 className="mt-1 text-xl font-bold">{title}</h3>
              <p className="text-muted-foreground mt-2">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Product preview */}
      <section className="bg-muted/60 border-y">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <h2 className="text-primary text-3xl font-extrabold sm:text-4xl">What we'll sell</h2>
              <p className="text-muted-foreground mt-3 text-lg">
                Custom arrows first, plus beginner bundles and the accessories that go with them.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/shop">
                See the shop preview <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-primary text-3xl font-extrabold sm:text-4xl">Get early access</h2>
            <p className="text-muted-foreground text-lg">
              We're getting the workshop ready. Join the list and be first to try the TrueFit Quiz
              and Arrow Builder, with a launch discount on your first dozen.
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• One launch email, then archery tips you can actually use</li>
              <li>• Your info is only used for TrueSpine, never sold</li>
            </ul>
          </div>
          <SignupForm />
        </div>
      </section>
    </>
  )
}
