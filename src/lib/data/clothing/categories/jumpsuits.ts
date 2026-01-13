// src/lib/data/clothing/categories/jumpsuits.ts
import type { ClothingItem } from '$lib/types/clothing';

export const jumpsuitsItems: ClothingItem[] = [
  {
    id: 'latex-catsuit',
    name: 'Latex Catsuit',
    category: 'jumpsuits',
    compatibleFabrics: ['latex', 'pvc'],
    description: 'Full-body form-fitting garment',
    bestContexts: ['alternative-fashion', 'parties', 'costumes'],
    brand: 'libidex',
    priceRange: '$$$',
    sustainability: 'low',
    material: 'latex',
    waterResistance: 'None',
    durability: 'Medium',
    weight: 'Light',
    trending: true,
    trendingScore: 7,
    trendSeason: 'Spring 2024',
    popularityChange: 'stable'
  }
];