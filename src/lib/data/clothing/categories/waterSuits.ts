// src/lib/data/clothing/categories/waterSuits.ts
import type { ClothingItem } from '$lib/types/clothing';

export const waterSuitsItems: ClothingItem[] = [
  {
    id: 'wetsuit',
    name: 'Wetsuit',
    category: 'water-suits',
    compatibleFabrics: ['neoprene', 'spandex'],
    description: 'Insulated suit for water sports and diving',
    bestContexts: ['scuba-diving', 'surfing', 'water-sports', 'cold-water'],
    brand: 'patagonia',
    priceRange: '$$$',
    sustainability: 'high',
    material: 'neoprene',
    waterResistance: 'Waterproof',
    insulation: 'Medium',
    durability: 'High',
    weight: 'Medium',
    trending: true,
    trendingScore: 8,
    trendSeason: 'Summer 2024',
    popularityChange: 'up'
  },
  {
    id: 'drysuit',
    name: 'Drysuit',
    category: 'water-suits',
    compatibleFabrics: ['gore-tex', 'nylon', 'rubber'],
    description: 'Waterproof suit for extreme cold water or hazardous environments',
    bestContexts: ['ice-diving', 'industrial-work', 'kayaking', 'scientific']
  },
  {
    id: 'rash-guard',
    name: 'Rash Guard',
    category: 'water-suits',
    compatibleFabrics: ['spandex', 'polyester', 'lycra'],
    description: 'Tight-fitting shirt for protection against sun and chafing',
    bestContexts: ['surfing', 'swimming', 'snorkeling', 'water-park']
  }
];