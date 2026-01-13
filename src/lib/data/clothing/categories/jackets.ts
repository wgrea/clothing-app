// src/lib/data/clothing/categories/jackets.ts
import type { ClothingItem } from '$lib/types/clothing';

export const jacketsItems: ClothingItem[] = [
  {
    id: 'denim-jacket',
    name: 'Denim Jacket',
    category: 'jackets',
    compatibleFabrics: ['denim', 'cotton'],
    description: 'Classic casual outerwear',
    bestContexts: ['casual', 'outdoor', 'concerts', 'everyday']
  },
  {
    id: 'linen-blazer',
    name: 'Linen Blazer',
    category: 'jackets',
    compatibleFabrics: ['linen'],
    description: 'Lightweight summer jacket',
    bestContexts: ['summer-weddings', 'smart-casual', 'tropical', 'business-casual']
  }
];