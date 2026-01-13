// src/lib/data/clothing/categories/costumes/generic/mascots.ts
import type { ClothingItem } from '$lib/types/clothing';

export const mascotCostumes: ClothingItem[] = [
  {
    id: 'sports-mascot',
    name: 'Sports Team Mascot',
    category: 'costume-suits',
    subcategory: 'mascots',
    compatibleFabrics: ['faux-fur', 'polyester', 'foam'],
    description: 'Character costume with padding and structure for sports events',
    bestContexts: ['sports-events', 'theme-parks', 'promotional-events'],
    isOnePiece: true,
    era: 'modern',
    colorOptions: ['Team colors', 'Custom'],
    features: ['Full-body padding', 'Large headpiece', 'Ventilation']
  }
];