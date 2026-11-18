import { Link } from 'react-router-dom'

import { Logo } from '@/components/Logo'

const YEAR = new Date().getFullYear()

const socials = [
  { label: 'YouTube', href: 'https://www.youtube.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="space-y-3">
          <Logo light />
          <p className="text-primary-foreground/80 max-w-xs text-sm">
            Arrows and bows fitted to the archer who buys them. Built to order and spin-tested in our
            workshop.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold tracking-wide uppercase">Shop</h2>
          <ul className="text-primary-foreground/80 space-y-2 text-sm">
            <li><Link className="hover:text-white" to="/quiz">TrueFit Quiz</Link></li>
            <li><Link className="hover:text-white" to="/builder">Arrow Builder</Link></li>
            <li><Link className="hover:text-white" to="/shop">Shop preview</Link></li>
            <li><Link className="hover:text-white" to="/clubs">Clubs & schools</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold tracking-wide uppercase">Company</h2>
          <ul className="text-primary-foreground/80 space-y-2 text-sm">
            <li><Link className="hover:text-white" to="/about">About</Link></li>
            <li><Link className="hover:text-white" to="/learn">Learn</Link></li>
            <li><Link className="hover:text-white" to="/privacy">Privacy policy</Link></li>
            <li><a className="hover:text-white" href="mailto:hello@truespinearchery.com">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold tracking-wide uppercase">Follow</h2>
          <ul className="text-primary-foreground/80 space-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a className="hover:text-white" href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-primary-foreground/15 border-t">
        <p className="text-primary-foreground/70 mx-auto max-w-6xl px-4 py-5 text-xs sm:px-6">
          © {YEAR} TrueSpine Archery. A BIS 375 e-commerce project. Pre-launch
          site: no orders are taken yet.
        </p>
      </div>
    </footer>
  )
}
