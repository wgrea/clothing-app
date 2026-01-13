// src/lib/data/clothing/categories/snowSuits.ts
import type { ClothingItem } from '$lib/types/clothing';

export const snowSuitsItems: ClothingItem[] = [
  {
    id: 'insulated-snowsuit',
    name: 'Insulated Snowsuit',
    category: 'snow-suits',
    compatibleFabrics: ['gore-tex', 'polyester', 'fleece'],
    description: 'Heavily insulated suit for extreme cold',
    bestContexts: ['skiing', 'snowboarding', 'arctic-travel', 'winter-sports']
  },
  {
    id: 'performance-race-suit',
    name: 'Alpine Speed Racer Suit',
    category: 'snow-suits',
    brand: 'spyder',
    compatibleFabrics: ['lycra', 'polyester-pique'],
    description: 'Anatomically designed aerodynamic suit for competitive racing.',
    bestContexts: ['ski-racing', 'slalom', 'speed-trials'],
    priceRange: '$$$$',
    sustainability: 'medium',
    material: 'Micro-Pique Knit',
    waterResistance: 'Light',
    insulation: 'None',
    durability: 'High',
    weight: 'Light',
    trending: false,
    trendingScore: 5,
    features: ['Aerodynamic', 'Grip-Elastic Hem', 'Removable Padding']
  },
  // Add other snow suit items here...
];