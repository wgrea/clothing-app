// src/lib/data/clothing/categories/protective-suits/flight/vintage.ts
import type { ClothingItem } from '$lib/types/clothing';

export const vintageFlightSuits: ClothingItem[] = [
  {
    id: 'ww2-bomber-jacket',
    name: 'WWII A-2 Leather Flight Jacket',
    category: 'protective-suits',
    subcategory: 'flight',
    compatibleFabrics: ['leather', 'wool', 'silk'],
    description: 'Classic leather bomber jacket from WWII',
    bestContexts: ['ww2-aviation', 'historical', 'vintage-fashion'],
    protectionLevel: 'Basic',
    material: 'Horsehide leather with wool lining',
    priceRange: '$$$',
    isOnePiece: false, // It's a jacket, not full suit
    era: 'vintage',
    colorOptions: ['Brown', 'Dark brown'],
    features: ['Leather construction', 'Wool lining', 'Patch panels', 'Fur collar'],
    weight: 'Medium',
    evolutionNotes: 'Iconic WWII flight jacket, not fire-resistant'
  },
  {
    id: 'vietnam-flight-suit',
    name: 'Vietnam Era Nomex Suit',
    category: 'protective-suits',
    subcategory: 'flight',
    compatibleFabrics: ['early-nomex', 'cotton'],
    description: 'Early fire-resistant flight suit from Vietnam era',
    bestContexts: ['vietnam-era', 'historical', 'military'],
    protectionLevel: 'Early fire protection',
    material: 'Nomex/cotton blend',
    priceRange: '$$',
    isOnePiece: true,
    era: 'vintage',
    colorOptions: ['Sage green', 'Olive drab'],
    features: ['Early fire resistance', 'Multiple pockets', 'Name tag'],
    weight: 'Medium',
    yearIntroduced: 1967
  }
];