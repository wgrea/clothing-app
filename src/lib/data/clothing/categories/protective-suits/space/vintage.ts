// src/lib/data/clothing/categories/protective-suits/space/vintage.ts
import type { ClothingItem } from '$lib/types/clothing';

export const vintageSpaceSuits: ClothingItem[] = [
  {
    id: 'apollo-11-suit',
    name: 'Apollo A7L Spacesuit',
    category: 'protective-suits',
    subcategory: 'space',
    compatibleFabrics: ['nylon', 'teflon', 'neoprene'],
    description: 'Moon landing spacesuit used by Apollo astronauts',
    bestContexts: ['historical', 'museum', 'display'],
    protectionLevel: 'Space',
    material: '21 layers of various materials',
    priceRange: '$$$$',
    isOnePiece: true,
    era: 'vintage',
    colorOptions: ['White'],
    features: ['Liquid cooling', 'Portable life support', 'Moon boot compatible'],
    weight: 'Heavy',
    evolutionNotes: 'First suit used on the moon, 21 layers of protection'
  }
];