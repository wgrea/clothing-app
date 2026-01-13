// src/lib/data/clothing/categories/protective-suits/hazmat/vintage.ts
import type { ClothingItem } from '$lib/types/clothing';

export const vintageHazmatSuits: ClothingItem[] = [
  {
    id: 'ww2-gas-suit',
    name: 'WWII Gas Protection Suit',
    category: 'protective-suits',
    subcategory: 'hazmat',
    compatibleFabrics: ['rubberized-cotton', 'rubber'],
    description: 'Early chemical warfare protection from WWII',
    bestContexts: ['historical', 'military-reenactment', 'museum'],
    protectionLevel: 'Basic',
    material: 'Rubberized cotton',
    priceRange: '$$',
    isOnePiece: true,
    era: 'vintage',
    colorOptions: ['Khaki', 'Olive drab'],
    features: ['Rubber seams', 'Simple design', 'Limited protection'],
    evolutionNotes: 'Early attempt at chemical protection, limited effectiveness'
  }
];