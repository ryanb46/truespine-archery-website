// One list drives every product card on the site.
// To add a product, add an entry here. Prices stay "coming soon" until launch.

export type BowType = 'recurve' | 'compound' | 'traditional' | 'any'

export type Product = {
  id: string
  name: string
  category: 'Custom arrows' | 'Beginner bundles' | 'Bows' | 'Accessories'
  bowTypes: BowType[]
  summary: string
  priceNote: string
  highlight?: string
  /** Optional photo in public/, for example 'products/carbon-dozen.jpg'. Without one, an illustration is shown. */
  image?: string
}

export const products: Product[] = [
  {
    id: 'custom-carbon-dozen',
    name: 'Custom carbon arrows, dozen',
    category: 'Custom arrows',
    bowTypes: ['recurve', 'compound'],
    summary:
      'Spine-matched to your bow, cut to your length, fletched and spin-tested. Built from your Arrow Builder settings.',
    priceNote: 'From about $120 a dozen',
    highlight: 'Most popular',
  },
  {
    id: 'new-archer-recurve-bundle',
    name: 'New archer recurve bundle',
    category: 'Beginner bundles',
    bowTypes: ['recurve'],
    summary:
      'A takedown recurve at your recommended draw weight, 6 fitted arrows, armguard, finger tab and a quick-start guide.',
    priceNote: 'Pricing coming soon',
    highlight: 'Great first bow',
  },
  {
    id: 'hunting-arrow-half-dozen',
    name: 'Hunting arrows, half dozen',
    category: 'Custom arrows',
    bowTypes: ['compound', 'traditional'],
    summary:
      'Heavier builds with a stiffer spine and weight-matched points, ready for broadheads before the fall season.',
    priceNote: 'Pricing coming soon',
  },
  {
    id: 'fit-check-accessories',
    name: 'Fit-check accessory kit',
    category: 'Accessories',
    bowTypes: ['any'],
    summary: 'Nocks, spare fletching, a string wax and an arrow puller, sized to the arrows you already shoot.',
    priceNote: 'Pricing coming soon',
  },
]
