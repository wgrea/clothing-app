// src/lib/data/clothing/categories/boots.ts
import type { ClothingItem } from '$lib/types/clothing';

export const bootsItems: ClothingItem[] = [
  {
    id: 'hiking-boots',
    name: 'Hiking Boots',
    category: 'boots',
    compatibleFabrics: ['leather', 'gore-tex', 'nylon'],
    description: 'Durable boots for hiking and outdoor activities',
    bestContexts: ['hiking', 'camping', 'outdoor', 'winter']
  },
  {
    id: 'work-boots',
    name: 'Work Boots',
    category: 'boots',
    compatibleFabrics: ['leather', 'rubber'],
    description: 'Safety boots for industrial work',
    bestContexts: ['construction', 'industrial', 'workwear']
  }
];