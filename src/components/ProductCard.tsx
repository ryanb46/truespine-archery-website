import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ProductArt } from '@/components/ProductArt'
import type { Product } from '@/data/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group hover-lift h-full gap-4 overflow-hidden pt-0">
      <div className="bg-secondary aspect-[16/9] overflow-hidden">
        <ProductArt product={product} />
      </div>
      <CardHeader className="gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{product.category}</Badge>
          {product.highlight && <Badge variant="accent">{product.highlight}</Badge>}
        </div>
        <CardTitle className="font-display group-hover:text-highlight text-lg transition-colors">{product.name}</CardTitle>
        <CardDescription>{product.summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1" />
      <CardFooter>
        <p className="text-primary text-sm font-semibold">{product.priceNote}</p>
      </CardFooter>
    </Card>
  )
}
