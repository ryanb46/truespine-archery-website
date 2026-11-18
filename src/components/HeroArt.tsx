/** Hero illustration: a target with a tight group of arrows. */
export function HeroArt() {
  return (
    <svg viewBox="0 0 400 400" className="h-auto w-full" role="img" aria-labelledby="hero-art-title">
      <title id="hero-art-title">A target with three arrows grouped in the center</title>
      <circle cx="200" cy="200" r="180" fill="#1f4d3a" />
      <circle cx="200" cy="200" r="145" fill="#faf8f3" />
      <circle cx="200" cy="200" r="110" fill="#1f4d3a" />
      <circle cx="200" cy="200" r="75" fill="#e2682a" />
      <circle cx="200" cy="200" r="40" fill="#faf8f3" />
      <circle cx="200" cy="200" r="14" fill="#e2682a" />
      {[
        { x: 196, y: 192, r: -38 },
        { x: 208, y: 204, r: -30 },
        { x: 193, y: 209, r: -45 },
      ].map((a, i) => (
        <g key={i} transform={`translate(${a.x} ${a.y}) rotate(${a.r})`}>
          <line x1="0" y1="0" x2="190" y2="0" stroke="#1c2620" strokeWidth="5" strokeLinecap="round" />
          <path d="M160 0 l22 -12 h14 l-16 12 l16 12 h-14 z" fill="#e2682a" stroke="#faf8f3" strokeWidth="1.5" />
          <rect x="190" y="-3.5" width="9" height="7" rx="2" fill="#faf8f3" />
        </g>
      ))}
    </svg>
  )
}
