import { useState } from 'react'

import { cn } from '@/lib/utils'

/*
  Hero illustration: a 10-ring target in the official archery colors
  (white, black, blue, red, gold, from the outside in) with a tight group
  of arrows. The arrows fly in on page load, and the target wobbles when
  you hover it.
*/

const RING_WIDTH = 17
// Ring 1 is the outer edge, ring 10 is the inner gold.
const rings = Array.from({ length: 10 }, (_, i) => {
  const ring = i + 1
  const r = RING_WIDTH * (11 - ring)
  const color =
    ring <= 2
      ? 'var(--target-white)'
      : ring <= 4
        ? 'var(--target-black)'
        : ring <= 6
          ? 'var(--target-blue)'
          : ring <= 8
            ? 'var(--target-red)'
            : 'var(--target-gold)'
  // Scoring lines: white on the black rings, black everywhere else.
  const line = ring === 3 || ring === 4 ? 'var(--target-white)' : 'var(--target-black)'
  return { ring, r, color, line }
})

const arrows = [
  { x: 194, y: 190, r: -38, delay: 0.2 },
  { x: 211, y: 203, r: -30, delay: 0.45 },
  { x: 192, y: 212, r: -45, delay: 0.7 },
]

export function HeroArt() {
  const [wobble, setWobble] = useState(false)

  return (
    <svg
      viewBox="0 0 400 400"
      className="h-auto w-full overflow-visible"
      role="img"
      aria-labelledby="hero-art-title"
      onMouseEnter={() => setWobble(true)}
      onAnimationEnd={(e) => {
        if (e.animationName === 'target-wobble') setWobble(false)
      }}
    >
      <title id="hero-art-title">
        An archery target in official colors with three arrows grouped in the gold
      </title>
      <defs>
        <radialGradient id="target-shine" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft shadow under the target */}
      <ellipse cx="200" cy="388" rx="140" ry="10" fill="var(--primary)" opacity="0.12" />

      <g
        className={cn('origin-center', wobble && 'animate-target-wobble')}
        style={{ transformBox: 'fill-box' }}
      >
        {rings.map(({ ring, r, color, line }) => (
          <circle
            key={ring}
            cx="200"
            cy="200"
            r={r}
            fill={color}
            stroke={line}
            strokeWidth={ring === 1 ? 2 : 1}
          />
        ))}
        {/* Inner X ring used for tie-breaks */}
        <circle cx="200" cy="200" r={RING_WIDTH / 2} fill="none" stroke="var(--target-black)" strokeWidth="0.8" />
        {/* Center cross */}
        <path d="M197 200h6M200 197v6" stroke="var(--target-black)" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="170" fill="url(#target-shine)" />

        {arrows.map((a, i) => (
          <g key={i} transform={`translate(${a.x} ${a.y}) rotate(${a.r})`}>
            <g className="animate-arrow-in" style={{ animationDelay: `${a.delay}s` }}>
              <g className={cn(wobble && 'animate-arrow-quiver')} style={{ transformOrigin: '0 0' }}>
                {/* Shaft */}
                <line x1="0" y1="0" x2="190" y2="0" stroke="#20252d" strokeWidth="5" strokeLinecap="round" />
                <line x1="20" y1="-1" x2="185" y2="-1" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.2" />
                {/* Fletching: one gold cock vane and two navy hen vanes */}
                <path d="M150 0 l24 -14 h14 l-18 14 z" fill="var(--accent)" stroke="var(--primary)" strokeWidth="1" />
                <path d="M150 0 l24 14 h14 l-18 -14 z" fill="var(--primary)" stroke="var(--primary)" strokeWidth="1" />
                {/* Nock */}
                <rect x="189" y="-3.5" width="10" height="7" rx="2" fill="var(--target-red)" />
              </g>
            </g>
            {/* Small dark hole where the arrow went in */}
            <circle cx="0" cy="0" r="3.2" fill="#20252d" />
          </g>
        ))}
      </g>
    </svg>
  )
}
