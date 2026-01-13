// src/lib/data/clothing/categories/travelSuits.ts
import type { ClothingItem } from '$lib/types/clothing';

export const travelSuitsItems: ClothingItem[] = [
  {
    id: 'travel-jumpsuit',
    name: 'Travel Jumpsuit',
    category: 'travel-suits',
    compatibleFabrics: ['linen', 'cotton', 'merino-wool', 'polyester'],
    description: 'Comfortable, wrinkle-resistant one-piece for travel',
    bestContexts: ['long-flights', 'train-travel', 'backpacking', 'minimalist-travel']
  },
  {
    id: 'pocket-jumpsuit',
    name: 'Pocket Jumpsuit',
    category: 'travel-suits',
    compatibleFabrics: ['cotton', 'polyester-blend'],
    description: 'Jumpsuit with multiple secure pockets for travel essentials',
    bestContexts: ['city-travel', 'photography-trips', 'hands-free-travel']
  },
  {
    id: 'convertible-jumpsuit',
    name: 'Convertible Jumpsuit',
    category: 'travel-suits',
    compatibleFabrics: ['linen', 'cotton'],
    description: 'Transforms into different clothing items for versatility',
    bestContexts: ['multi-climate-travel', 'pack-light-travel', 'extended-trips']
  }
];