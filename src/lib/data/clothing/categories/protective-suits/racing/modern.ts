// src/lib/data/clothing/categories/protective-suits/racing/modern.ts
import type { ClothingItem } from '$lib/types/clothing';

export const modernRacingSuits: ClothingItem[] = [
  {
    id: 'f1-2024-suit',
    name: '2024 F1 Racing Suit',
    category: 'protective-suits',
    subcategory: 'racing',
    compatibleFabrics: ['nomex', 'carbon-x', 'kevlar'],
    description: 'Latest Formula 1 racing suit with advanced fire protection',
    bestContexts: ['f1-racing', 'motorsport', 'high-performance'],
    protectionLevel: 'FIA 8856-2018',
    material: 'Multi-layer Nomex and carbon fabric',
    priceRange: '$$$$',
    isOnePiece: true,
    era: 'modern',
    colorOptions: ['Team colors', 'Custom'],
    features: ['Fire resistant', 'Multi-layer construction', 'Ventilation zones'],
    weight: 'Medium'
  }
];