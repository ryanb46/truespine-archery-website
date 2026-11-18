import type { Product } from '@/data/products'

/*
  Product illustrations, one per product, until real product photos are ready.
  To use a photo instead, add an `image` path to the product in src/data/products.ts.
*/

const NAVY = 'var(--primary)'
const GOLD = 'var(--target-gold)'
const RED = 'var(--target-red)'
const BLUE = 'var(--target-blue)'

export function ProductArt({ product }: { product: Product }) {
  if (product.image) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${product.image}`}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    )
  }

  const Art =
    product.id === 'custom-carbon-dozen'
      ? CarbonArrowsArt
      : product.id === 'hunting-arrow-half-dozen'
        ? HuntingArrowsArt
        : product.id === 'fit-check-accessories' || product.category === 'Accessories'
          ? AccessoryKitArt
          : product.category === 'Custom arrows'
            ? CarbonArrowsArt
            : RecurveBundleArt

  return (
    <svg
      viewBox="0 0 320 180"
      className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
      aria-hidden="true"
    >
      <Art />
    </svg>
  )
}

/** One arrow pointing right, centered on its own origin. */
function Arrow({
  length = 220,
  vane = GOLD,
  hen = NAVY,
  nock = RED,
  head = 'field',
  carbon = true,
}: {
  length?: number
  vane?: string
  hen?: string
  nock?: string
  head?: 'field' | 'broadhead'
  carbon?: boolean
}) {
  const half = length / 2
  return (
    <g>
      <line
        x1={-half}
        y1="0"
        x2={half}
        y2="0"
        stroke={carbon ? 'url(#carbon)' : '#8a5a2b'}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <line x1={-half + 10} y1="-1" x2={half - 10} y2="-1" stroke="#fff" strokeOpacity="0.3" strokeWidth="1" />
      {/* Fletching */}
      <path d={`M${-half + 8} 0 l14 -11 h22 l-10 11 z`} fill={vane} stroke="#0f1b2d" strokeWidth="0.6" />
      <path d={`M${-half + 8} 0 l14 11 h22 l-10 -11 z`} fill={hen} stroke="#0f1b2d" strokeWidth="0.6" />
      {/* Nock */}
      <rect x={-half - 6} y="-3" width="8" height="6" rx="1.5" fill={nock} />
      {head === 'field' ? (
        <path d={`M${half - 2} -3 h8 l7 3 l-7 3 h-8 z`} fill="#c9ced6" stroke="#6b7380" strokeWidth="0.6" />
      ) : (
        <g>
          <rect x={half - 2} y="-2.5" width="8" height="5" fill="#6b7380" />
          <path d={`M${half + 4} -9 L${half + 26} 0 L${half + 4} 9 z`} fill="#dfe3e8" stroke="#4b5260" strokeWidth="0.8" />
          <path d={`M${half + 4} 0 L${half + 26} 0`} stroke="#4b5260" strokeWidth="0.8" />
        </g>
      )}
    </g>
  )
}

function CarbonPattern() {
  return (
    <pattern id="carbon" width="6" height="6" patternUnits="userSpaceOnUse">
      <rect width="6" height="6" fill="#1d2129" />
      <path d="M0 0h3v3H0zM3 3h3v3H3z" fill="#343a46" />
    </pattern>
  )
}

function CarbonArrowsArt() {
  const fan = [
    { y: -40, vane: GOLD, hen: NAVY },
    { y: -24, vane: RED, hen: '#ffffff' },
    { y: -8, vane: GOLD, hen: NAVY },
    { y: 8, vane: BLUE, hen: '#ffffff' },
    { y: 24, vane: GOLD, hen: NAVY },
    { y: 40, vane: RED, hen: '#ffffff' },
  ]
  return (
    <>
      <defs>
        <CarbonPattern />
        <linearGradient id="carbon-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#13294b" />
          <stop offset="100%" stopColor="#1f4f8a" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#carbon-bg)" />
      {/* Faint target rings in the background */}
      {[70, 56, 42, 28, 14].map((r) => (
        <circle key={r} cx="262" cy="40" r={r} fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="7" />
      ))}
      <g transform="translate(176 76) rotate(-12)">
        {fan.map((a) => (
          <g key={a.y} transform={`translate(0 ${a.y})`}>
            <Arrow length={200} vane={a.vane} hen={a.hen} />
          </g>
        ))}
      </g>
      {/* Spine tag */}
      <g transform="translate(18 140)">
        <rect width="92" height="26" rx="6" fill={GOLD} />
        <text x="46" y="17.5" textAnchor="middle" fontFamily="Archivo, Inter, sans-serif" fontWeight="800" fontSize="12" fill="#13294b">
          SPINE 400 · 12
        </text>
      </g>
    </>
  )
}

function RecurveBundleArt() {
  return (
    <>
      <defs>
        <CarbonPattern />
        <linearGradient id="recurve-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eaf2fb" />
          <stop offset="100%" stopColor="#d4e3f4" />
        </linearGradient>
        <linearGradient id="riser" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6b3f1d" />
          <stop offset="50%" stopColor="#a8683a" />
          <stop offset="100%" stopColor="#6b3f1d" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#recurve-bg)" />
      {/* Small target on the back wall */}
      <g transform="translate(265 50)">
        <circle r="30" fill="#fff" stroke="#1a1a1a" strokeWidth="0.8" />
        <circle r="24" fill="#1a1a1a" />
        <circle r="18" fill={BLUE} />
        <circle r="12" fill={RED} />
        <circle r="6" fill={GOLD} />
      </g>
      <rect y="150" width="320" height="30" fill="#c3d4e8" />
      {/* Recurve bow */}
      <g transform="translate(92 90)">
        <path d="M0 -78 Q 4 -60 -6 -40 Q -18 -18 -10 0 Q -18 18 -6 40 Q 4 60 0 78" fill="none" stroke="#13294b" strokeWidth="6" strokeLinecap="round" />
        <path d="M0 -78 q -8 -4 -4 -10" fill="none" stroke="#13294b" strokeWidth="5" strokeLinecap="round" />
        <path d="M0 78 q -8 4 -4 10" fill="none" stroke="#13294b" strokeWidth="5" strokeLinecap="round" />
        <rect x="-15" y="-24" width="12" height="48" rx="5" fill="url(#riser)" />
        <rect x="-14" y="-5" width="10" height="12" rx="3" fill="#2b1a0c" />
        <line x1="-4" y1="-86" x2="-4" y2="86" stroke="#55607a" strokeWidth="1.2" />
      </g>
      {/* Six fitted arrows leaning beside the bow */}
      <g transform="translate(160 88) rotate(-78)">
        {[-10, -3, 4].map((y) => (
          <g key={y} transform={`translate(0 ${y})`}>
            <Arrow length={150} vane={GOLD} hen={NAVY} />
          </g>
        ))}
      </g>
      {/* Armguard */}
      <g transform="translate(200 120) rotate(-8)">
        <rect x="-26" y="-12" width="52" height="24" rx="10" fill={NAVY} />
        <path d="M-16 -12v24M0 -12v24M16 -12v24" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
        <rect x="-30" y="-4" width="60" height="3" fill={GOLD} />
      </g>
      {/* Finger tab */}
      <g transform="translate(258 128)">
        <path d="M-14 -14 h28 v18 q0 12 -14 12 q-14 0 -14 -12 z" fill="#3b2413" />
        <circle cx="0" cy="-6" r="3" fill="#c9ced6" />
      </g>
    </>
  )
}

function HuntingArrowsArt() {
  return (
    <>
      <defs>
        <CarbonPattern />
        <linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#13294b" />
          <stop offset="65%" stopColor="#3d5f8f" />
          <stop offset="100%" stopColor="#f2c14e" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#dusk)" />
      <circle cx="250" cy="122" r="20" fill="#ffe08a" opacity="0.9" />
      {/* Treeline */}
      <path
        d="M0 180 V140 l10 -18 l10 18 l8 -26 l10 26 l12 -20 l10 20 l9 -30 l11 30 l10 -14 l10 14 l12 -28 l10 28 l10 -18 l10 18 l12 -24 l10 24 l9 -16 l10 16 l12 -30 l10 30 l10 -20 l10 20 l12 -26 l10 26 l9 -14 l10 14 l12 -28 l10 28 l10 -18 l11 18 V180 z"
        fill="#0d1a2e"
      />
      {/* Three hunting arrows with broadheads */}
      <g transform="translate(146 82) rotate(-8)">
        {[-18, 0, 18].map((y) => (
          <g key={y} transform={`translate(0 ${y})`}>
            <Arrow length={190} head="broadhead" vane="#ffffff" hen={RED} nock={GOLD} />
          </g>
        ))}
      </g>
      <g transform="translate(18 18)">
        <rect width="124" height="24" rx="6" fill="#ffffff" fillOpacity="0.15" />
        <text x="62" y="16" textAnchor="middle" fontFamily="Archivo, Inter, sans-serif" fontWeight="800" fontSize="11" fill="#ffffff">
          WEIGHT-MATCHED
        </text>
      </g>
    </>
  )
}

function AccessoryKitArt() {
  const nockColors = [RED, GOLD, BLUE, '#ffffff', RED, GOLD]
  return (
    <>
      <defs>
        <pattern id="pegboard" width="16" height="16" patternUnits="userSpaceOnUse">
          <rect width="16" height="16" fill="#e8eef7" />
          <circle cx="8" cy="8" r="1.6" fill="#13294b" fillOpacity="0.12" />
        </pattern>
      </defs>
      <rect width="320" height="180" fill="url(#pegboard)" />
      {/* Kit tray */}
      <rect x="18" y="20" width="284" height="140" rx="12" fill="#ffffff" stroke="#cbd3e0" />
      {/* Nocks */}
      <g transform="translate(40 46)">
        {nockColors.map((c, i) => (
          <g key={i} transform={`translate(${i * 16} 0)`}>
            <path d="M0 0 h8 v18 h-2 v-6 h-4 v6 h-2 z" fill={c} stroke="#13294b" strokeWidth="0.8" />
          </g>
        ))}
        <text x="44" y="38" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#55607a">
          Nocks
        </text>
      </g>
      {/* Spare vanes */}
      <g transform="translate(160 44)">
        {[GOLD, NAVY, GOLD, NAVY].map((c, i) => (
          <path key={i} d={`M${i * 22} 20 q 6 -20 20 -20 l-4 20 z`} fill={c} stroke="#13294b" strokeWidth="0.6" />
        ))}
        <text x="44" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#55607a">
          Spare vanes
        </text>
      </g>
      {/* String wax */}
      <g transform="translate(46 100)">
        <rect width="22" height="44" rx="4" fill={NAVY} />
        <rect y="-8" width="22" height="10" rx="3" fill={GOLD} />
        <rect x="4" y="12" width="14" height="20" rx="2" fill="#ffffff" fillOpacity="0.2" />
        <text x="11" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#55607a">
          Wax
        </text>
      </g>
      {/* Arrow puller */}
      <g transform="translate(130 112)">
        <rect width="60" height="22" rx="11" fill={RED} />
        <path d="M10 4v14M20 4v14M30 4v14M40 4v14M50 4v14" stroke="#000" strokeOpacity="0.15" strokeWidth="2" />
        <text x="30" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#55607a">
          Arrow puller
        </text>
      </g>
      {/* Mini fit card */}
      <g transform="translate(222 98)">
        <rect width="62" height="44" rx="6" fill={GOLD} />
        <text x="31" y="19" textAnchor="middle" fontFamily="Archivo, Inter, sans-serif" fontWeight="800" fontSize="10" fill="#13294b">
          FIT
        </text>
        <text x="31" y="32" textAnchor="middle" fontFamily="Archivo, Inter, sans-serif" fontWeight="800" fontSize="10" fill="#13294b">
          CHECK
        </text>
      </g>
    </>
  )
}
