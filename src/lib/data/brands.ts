import type { Brand } from '$lib/types/clothing';

export const brands: Brand[] = [
  {
    id: 'patagonia',
    name: 'Patagonia',
    description: 'Outdoor clothing company focused on environmental sustainability',
    sustainabilityRating: 5,
    specialty: ['Outdoor', 'Sustainable', 'Technical'],
    priceRange: '$$$',
    popularProducts: ['wetsuit', 'shell-snowsuit']
  },
  {
    id: 'nike',
    name: 'Nike',
    description: 'Global sportswear and athletic shoes manufacturer',
    sustainabilityRating: 3,
    specialty: ['Sportswear', 'Athletic', 'Footwear'],
    priceRange: '$$',
    popularProducts: ['rash-guard']
  },
  {
    id: 'archeryx',
    name: 'Arc\'teryx',
    description: 'High-performance technical outerwear',
    sustainabilityRating: 4,
    specialty: ['Technical', 'Mountaineering', 'Premium'],
    priceRange: '$$$$',
    popularProducts: ['drysuit', 'gore-tex-jacket']
  },
  {
    id: 'united-by-blue',
    name: 'United By Blue',
    description: 'Sustainable apparel and accessories brand',
    sustainabilityRating: 5,
    specialty: ['Sustainable', 'Outdoor', 'Casual'],
    priceRange: '$$',
    popularProducts: ['cotton-shirt', 'travel-jumpsuit']
  },
  {
    id: 'libidex',
    name: 'Libidex',
    description: 'Premium latex and fetish wear manufacturer',
    sustainabilityRating: 2,
    specialty: ['Latex', 'Alternative Fashion', 'Party Wear'],
    priceRange: '$$$',
    popularProducts: ['latex-catsuit', 'cyberpunk-suit']
  }
];