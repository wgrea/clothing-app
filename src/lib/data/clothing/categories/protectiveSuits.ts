// src/lib/data/clothing/categories/protectiveSuits.ts
import type { ClothingItem } from '$lib/types/clothing';

export const protectiveSuitsItems: ClothingItem[] = [
  {
    id: 'hazmat-suit',
    name: 'Hazmat Suit',
    category: 'protective-suits',
    compatibleFabrics: ['tyvek', 'pvc', 'rubber'],
    description: 'Full-body protection against hazardous materials',
    bestContexts: ['chemical-handling', 'biohazard', 'industrial-cleanup', 'emergency-response']
  },
  {
    id: 'firefighter-suit',
    name: 'Firefighter Turnout Gear',
    category: 'protective-suits',
    compatibleFabrics: ['nomex', 'kevlar', 'pbi'],
    description: 'Heat and flame resistant protective suit',
    bestContexts: ['firefighting', 'industrial-fire', 'rescue-operations']
  },
  {
    id: 'welding-suit',
    name: 'Welding Suit',
    category: 'protective-suits',
    compatibleFabrics: ['leather', 'fire-resistant-cotton'],
    description: 'Protection against sparks and heat',
    bestContexts: ['welding', 'metalwork', 'foundry-work']
  },
  {
    id: 'racing-suit',
    name: 'Racing Suit',
    category: 'protective-suits',
    compatibleFabrics: ['nomex', 'fire-resistant-polyester'],
    description: 'Fire-resistant suit for motorsports',
    bestContexts: ['auto-racing', 'motocross', 'motorcycle-racing']
  }
];