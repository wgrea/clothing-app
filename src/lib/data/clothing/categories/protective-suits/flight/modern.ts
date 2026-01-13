// src/lib/data/clothing/categories/protective-suits/flight/modern.ts
import type { ClothingItem } from '$lib/types/clothing';

export const modernFlightSuits: ClothingItem[] = [
  {
    id: 'cwru-62p',
    name: 'CWO-62/P Modern Flight Suit',
    category: 'protective-suits',
    subcategory: 'flight',
    compatibleFabrics: ['nomex', 'fire-resistant-cotton'],
    description: 'Current US military flight suit with fire protection',
    bestContexts: ['military-aviation', 'combat-pilots', 'training'],
    protectionLevel: 'MIL-C-83141A',
    material: 'Nomex IIIA fabric',
    priceRange: '$$$',
    isOnePiece: true,
    era: 'modern',
    colorOptions: ['Desert tan', 'Olive green', 'Digital camo'],
    features: ['Fire resistant', 'Nomex fabric', 'Multiple pockets', 'Name tapes'],
    weight: 'Medium',
    yearIntroduced: 2006
  },
  {
    id: 'high-altitude-suit',
    name: 'High Altitude Pressure Suit',
    category: 'protective-suits',
    subcategory: 'flight',
    compatibleFabrics: ['nylon', 'neoprene', 'gore-tex'],
    description: 'Partial pressure suit for high altitude reconnaissance',
    bestContexts: ['u2-pilots', 'high-altitude', 'reconnaissance'],
    protectionLevel: 'High altitude',
    material: 'Multi-layer pressure garment',
    priceRange: '$$$$',
    isOnePiece: true,
    era: 'modern',
    colorOptions: ['Orange', 'Green'],
    features: ['Pressure bladder', 'Oxygen mask connection', 'G-suit integration'],
    weight: 'Heavy'
  }
];