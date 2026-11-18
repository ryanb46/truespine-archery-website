import { cn } from '@/lib/utils'

/** Simple text logo with a target mark. Swap for a real logo later. */
export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true">
        <circle cx="16" cy="16" r="15" fill={light ? '#faf8f3' : '#1f4d3a'} />
        <circle cx="16" cy="16" r="10" fill={light ? '#1f4d3a' : '#faf8f3'} />
        <circle cx="16" cy="16" r="5.5" fill="#e2682a" />
        <circle cx="16" cy="16" r="2" fill={light ? '#1f4d3a' : '#faf8f3'} />
      </svg>
      <span
        className={cn(
          'font-display text-xl font-extrabold tracking-tight',
          light ? 'text-primary-foreground' : 'text-primary',
        )}
      >
        TrueSpine<span className="text-accent"> Archery</span>
      </span>
    </span>
  )
}
