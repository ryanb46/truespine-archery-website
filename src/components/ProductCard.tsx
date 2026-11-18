import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { Product } from '@/data/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="h-full gap-4 overflow-hidden pt-0">
      <ProductArt category={product.category} />
      <CardHeader className="gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{product.category}</Badge>
          {product.highlight && <Badge variant="accent">{product.highlight}</Badge>}
        </div>
        <CardTitle className="font-display text-lg">{product.name}</CardTitle>
        <CardDescription>{product.summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1" />
      <CardFooter>
        <p className="text-primary text-sm font-semibold">{product.priceNote}</p>
      </CardFooter>
    </Card>
  )
}

/** Placeholder art until real product photos are added. */
function ProductArt({ category }: { category: Product['category'] }) {
  return (
    <div className="bg-secondary relative flex aspect-[16/9] items-center justify-center overflow-hidden">
      <svg viewBox="0 0 200 110" className="h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M10 0H0V10" fill="none" stroke="#1f4d3a" strokeOpacity="0.07" />
          </pattern>
        </defs>
        <rect width="200" height="110" fill="url(#grid)" />
        {category === 'Bows' || category === 'Beginner bundles' ? (
          <g fill="none" stroke="#1f4d3a" strokeWidth="4" strokeLinecap="round">
            <path d="M80 12 Q 125 55 80 98" />
            <path d="M80 12 L 80 98" strokeWidth="1.2" stroke="#5b655f" />
            <path d="M80 55 L 160 55" stroke="#e2682a" strokeWidth="2.5" />
            <path d="M160 55 l-8 -5 v10 z" fill="#e2682a" stroke="none" />
          </g>
        ) : category === 'Accessories' ? (
          <g>
            <circle cx="100" cy="55" r="32" fill="#1f4d3a" />
            <circle cx="100" cy="55" r="22" fill="#faf8f3" />
            <circle cx="100" cy="55" r="12" fill="#e2682a" />
            <circle cx="100" cy="55" r="4" fill="#faf8f3" />
          </g>
        ) : (
          <g strokeLinecap="round">
            {[35, 55, 75].map((y) => (
              <g key={y}>
                <line x1="30" y1={y} x2="165" y2={y} stroke="#1f4d3a" strokeWidth="3" />
                <path d={`M165 ${y} l-9 -5 v10 z`} fill="#5b655f" />
                <path d={`M30 ${y} l14 -7 h8 l-10 7 l10 7 h-8 z`} fill="#e2682a" />
              </g>
            ))}
          </g>
        )}
      </svg>
    </div>
  )
}
