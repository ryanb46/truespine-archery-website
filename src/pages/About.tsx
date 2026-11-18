import { Link } from 'react-router-dom'
import { ArrowRight, ClipboardCheck, PackageCheck, RotateCw, Ruler, Scissors } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { usePageTitle } from '@/lib/usePageTitle'

const process = [
  {
    icon: Ruler,
    title: 'Fit',
    body: 'You take the TrueFit Quiz and use the Arrow Builder. Your bow and draw details are saved to your build.',
  },
  {
    icon: ClipboardCheck,
    title: 'Validate',
    body: 'A technician checks every build for safety, such as a spine too weak for your draw weight, and contacts you if anything looks off.',
  },
  {
    icon: Scissors,
    title: 'Build',
    body: 'Shafts are cut to length, inserts glued, and fletching and nocks installed by hand.',
  },
  {
    icon: RotateCw,
    title: 'Spin-test',
    body: 'Each arrow is spin-tested for straightness and weighed, so a dozen matches within a few grains.',
  },
  {
    icon: PackageCheck,
    title: 'Ship',
    body: 'Arrows ship in rigid tubes with tracking, ready to shoot the day they arrive.',
  },
]

const team = [
  {
    role: 'Founder',
    body: 'Runs the business, the website and customer care. Started TrueSpine after watching friends buy the wrong arrows online.',
  },
  {
    role: 'Arrow technician',
    body: 'Builds, tunes and checks every order in the workshop, with pro-shop experience behind every fit.',
  },
  {
    role: 'Coaching advisor',
    body: 'A certified archery coach who reviews our fitting guidance so it stays accurate and beginner friendly.',
  },
]

export default function About() {
  usePageTitle('About')

  return (
    <>
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-accent text-sm font-bold tracking-widest uppercase">Our story</p>
        <h1 className="text-primary mt-2 text-4xl font-extrabold sm:text-5xl">
          The trusted online alternative to your local pro shop.
        </h1>
        <div className="text-muted-foreground mt-6 space-y-4 text-lg">
          <p>
            Getting the right arrow depends on your draw length, your draw weight, your bow and the
            arrow's spine, which is how much the shaft flexes when you shoot. Get it wrong and you
            get poor flight, wasted money and, at worst, an unsafe shot.
          </p>
          <p>
            Most archers still drive to a pro shop to get fitted, and big online stores sell arrows
            as generic boxes and leave the math to you. TrueSpine closes that gap: our tools do the
            fitting online, and our workshop builds every order by hand.
          </p>
        </div>
      </section>

      <section className="bg-muted/60 border-y">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-primary text-3xl font-extrabold">How every order is made</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {process.map(({ icon: Icon, title, body }, i) => (
              <li key={title} className="bg-card rounded-xl border p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="bg-primary text-primary-foreground inline-flex size-9 items-center justify-center rounded-full text-sm font-bold">
                    {i + 1}
                  </span>
                  <Icon className="text-accent size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-lg font-bold">{title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-primary text-3xl font-extrabold">The team</h2>
        <p className="text-muted-foreground mt-2 text-lg">Small on purpose, so every order gets a real person.</p>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {team.map((m) => (
            <li key={m.role} className="bg-card rounded-xl border p-6 shadow-sm">
              <div
                className="bg-secondary text-primary mb-4 flex size-14 items-center justify-center rounded-full font-display text-xl font-extrabold"
                aria-hidden="true"
              >
                {m.role[0]}
              </div>
              <h3 className="text-lg font-bold">{m.role}</h3>
              <p className="text-muted-foreground mt-1">{m.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold">Our honest-fitting promise</h2>
          <p className="text-primary-foreground/85 mx-auto mt-4 max-w-2xl text-lg">
            We recommend what fits you, even when it's the cheaper option. If your arrows don't fit
            your setup, tell us within 30 days and we'll rebuild them.
          </p>
          <Button asChild size="lg" variant="accent" className="mt-8">
            <Link to="/quiz">
              Find your fit <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
