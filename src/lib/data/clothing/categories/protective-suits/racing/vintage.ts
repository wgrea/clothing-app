// src/lib/data/clothing/categories/protective-suits/racing/vintage.ts
import type { ClothingItem } from '$lib/types/clothing';

export const vintageRacingSuits: ClothingItem[] = [
  {
    id: '1960s-racing-suit',
    name: '1960s Cotton Racing Suit',
    category: 'protective-suits',
    subcategory: 'racing',
    compatibleFabrics: ['cotton', 'leather'],
    description: 'Early racing suit before modern fire standards',
    bestContexts: ['vintage-racing', 'classic-cars', 'historical'],
    protectionLevel: 'Basic',
    material: 'Heavy cotton',
    priceRange: '$$',
    isOnePiece: true,
    era: 'vintage',
    colorOptions: ['White', 'Blue', 'Red'],
    features: ['Minimal protection', 'Classic design', 'Leather patches'],
    evolutionNotes: 'Made before modern fire-resistant materials'
  }
];