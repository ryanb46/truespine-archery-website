import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/builder', label: 'Arrow Builder' },
  { to: '/learn', label: 'Learn' },
  { to: '/clubs', label: 'Clubs & schools' },
  { to: '/about', label: 'About' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-background/90 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" aria-label="TrueSpine Archery home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'hover:text-primary relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  'after:bg-accent after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:transition-transform after:duration-300 hover:after:scale-x-100',
                  isActive ? 'text-primary after:scale-x-100' : 'text-muted-foreground',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="accent" className="hidden sm:inline-flex">
            <Link to="/quiz">Take the quiz</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-secondary',
                      isActive ? 'bg-secondary text-primary' : 'text-foreground',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="py-2">
              <Button asChild variant="accent" size="lg" className="w-full">
                <Link to="/quiz" onClick={() => setOpen(false)}>
                  Take the quiz
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
