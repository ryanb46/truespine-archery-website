import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// Set VITE_FORMSPREE_ID (for example in a repo variable) to save signups to Formspree.
// Without it the form runs as a demo: it checks the fields and saves nothing.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined

const archerTypes = [
  { value: 'target', label: 'Target or 3D archer' },
  { value: 'bowhunter', label: 'Bowhunter' },
  { value: 'new', label: 'New archer or parent' },
]

type Status = 'idle' | 'sending' | 'done' | 'error'

export function SignupForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [archerType, setArcherType] = useState('')
  const [optIn, setOptIn] = useState(false) // never pre-checked
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    if (!archerType) {
      setError('Pick the kind of archer you are.')
      return
    }
    if (!optIn) {
      setError('Tick the box so we can email you about launch.')
      return
    }

    if (!FORMSPREE_ID) {
      setStatus('done')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, archerType, marketingOptIn: optIn }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('done')
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again in a minute.')
    }
  }

  if (status === 'done') {
    return (
      <div
        role="status"
        className="bg-card flex flex-col items-center gap-3 rounded-xl border p-8 text-center"
      >
        <CheckCircle2 className="text-primary size-10" aria-hidden="true" />
        <p className="font-display text-xl font-bold">You're on the list, {name.split(' ')[0]}.</p>
        <p className="text-muted-foreground text-sm">
          We'll email you when the TrueFit Quiz and Arrow Builder go live.
          {!FORMSPREE_ID && ' (Demo mode: nothing was saved.)'}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card grid gap-5 rounded-xl border p-6 shadow-sm sm:p-8"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="signup-name">Name</Label>
          <Input
            id="signup-name"
            name="name"
            autoComplete="given-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="signup-email">Email</Label>
          <Input
            id="signup-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="signup-type">I'm a...</Label>
        <Select value={archerType} onValueChange={setArcherType}>
          <SelectTrigger id="signup-type" aria-label="Archer type">
            <SelectValue placeholder="Choose one" />
          </SelectTrigger>
          <SelectContent>
            {archerTypes.map((t) => (
              <SelectItem key={t.value} value={t.value}>
                {t.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="signup-optin"
          checked={optIn}
          onCheckedChange={(v) => setOptIn(v === true)}
          className="mt-0.5"
        />
        <Label htmlFor="signup-optin" className="text-muted-foreground leading-snug font-normal">
          Email me about launch and archery tips. You can unsubscribe any time, and we never sell
          your data.
        </Label>
      </div>

      {error && (
        <p role="alert" className="text-destructive text-sm font-medium">
          {error}
        </p>
      )}

      <Button type="submit" size="lg" variant="accent" disabled={status === 'sending'}>
        {status === 'sending' ? 'Signing you up...' : 'Get early access'}
      </Button>
    </form>
  )
}
