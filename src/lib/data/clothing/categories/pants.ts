// src/lib/data/clothing/categories/pants.ts
import type { ClothingItem } from '$lib/types/clothing';

export const pantsItems: ClothingItem[] = [
  {
    id: 'linen-pants',
    name: 'Linen Pants',
    category: 'pants',
    compatibleFabrics: ['linen', 'linen-cotton-blend'],
    description: 'Breathable summer trousers',
    bestContexts: ['summer', 'tropical-travel', 'casual', 'beach']
  },
  {
    id: 'corduroy-pants',
    name: 'Corduroy Pants',
    category: 'pants',
    compatibleFabrics: ['corduroy'],
    description: 'Warm textured trousers',
    bestContexts: ['fall', 'winter', 'casual', 'vintage-style']
  }
];