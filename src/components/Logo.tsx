import { cn } from '@/lib/utils'

/** Text logo with a small official-colors target. Swap for a real logo later. */
export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn('group inline-flex items-center gap-2', className)}>
      <svg
        viewBox="0 0 32 32"
        className="size-8 shrink-0 transition-transform duration-500 ease-out group-hover:rotate-[360deg] group-hover:scale-110"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="15.5" fill="var(--target-white)" stroke="var(--target-black)" strokeWidth="1" />
        <circle cx="16" cy="16" r="12.5" fill="var(--target-black)" />
        <circle cx="16" cy="16" r="9.5" fill="var(--target-blue)" />
        <circle cx="16" cy="16" r="6.5" fill="var(--target-red)" />
        <circle cx="16" cy="16" r="3.5" fill="var(--target-gold)" />
      </svg>
      <span
        className={cn(
          'font-display text-xl font-extrabold tracking-tight',
          light ? 'text-primary-foreground' : 'text-primary',
        )}
      >
        TrueSpine<span className={light ? 'text-accent' : 'text-highlight'}> Archery</span>
      </span>
    </span>
  )
}
