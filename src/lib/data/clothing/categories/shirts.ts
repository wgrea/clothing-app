// src/lib/data/clothing/categories/shirts.ts
import type { ClothingItem } from '$lib/types/clothing';

export const shirtsItems: ClothingItem[] = [
  {
    id: 'cotton-shirt',
    name: 'Cotton T-Shirt',
    category: 'shirts',
    compatibleFabrics: ['cotton', 'linen'],
    description: 'Basic comfortable top',
    bestContexts: ['casual', 'everyday', 'summer', 'travel']
  },
  {
    id: 'merino-wool-base-layer',
    name: 'Merino Wool Base Layer',
    category: 'shirts',
    compatibleFabrics: ['merino-wool'],
    description: 'Temperature regulating undershirt',
    bestContexts: ['hiking', 'travel', 'cold-weather', 'multi-day-trips']
  }
];