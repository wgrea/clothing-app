// src/lib/data/clothing/categories/catsuits.ts
import type { ClothingItem } from '$lib/types/clothing';

export const catsuitsItems: ClothingItem[] = [
  {
    id: 'latex-catsuit',
    name: 'Latex Catsuit',
    category: 'catsuits',
    compatibleFabrics: ['latex', 'pvc'],
    description: 'Full-body form-fitting latex garment',
    bestContexts: ['alternative-fashion', 'fetish', 'performance'],
    brand: 'libidex',
    priceRange: '$$$',
    material: 'latex',
    waterResistance: 'None',
    weight: 'Light',
    trending: true,
    isOnePiece: true,
    trendingStyles: ['Gothic', 'Fetish']
  },
  {
    id: 'leather-catsuit',
    name: 'Leather Catsuit',
    category: 'catsuits',
    compatibleFabrics: ['leather', 'pleather'],
    description: 'Full-body leather suit for motorcycle or fashion',
    bestContexts: ['motorcycle', 'fashion', 'costume'],
    priceRange: '$$$$',
    material: 'Leather',
    durability: 'High',
    weight: 'Heavy',
    isOnePiece: true,
    trendingStyles: ['Biker', 'Punk']
  },
  {
    id: 'spandex-catsuit',
    name: 'Spandex Catsuit',
    category: 'catsuits',
    compatibleFabrics: ['spandex', 'lycra'],
    description: 'Stretchy full-body suit for dance or gymnastics',
    bestContexts: ['dance', 'gymnastics', 'circus'],
    priceRange: '$$',
    material: 'Spandex blend',
    weight: 'Light',
    isOnePiece: true,
    trendingStyles: ['Athletic', 'Performance']
  }
];