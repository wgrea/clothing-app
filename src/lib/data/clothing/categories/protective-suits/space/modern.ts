// src/lib/data/clothing/categories/protective-suits/space/modern.ts
import type { ClothingItem } from '$lib/types/clothing';

export const modernSpaceSuits: ClothingItem[] = [
  {
    id: 'nasa-emu',
    name: 'NASA EMU (Extravehicular Mobility Unit)',
    category: 'protective-suits',
    subcategory: 'space',
    compatibleFabrics: ['multi-layer-polymer', 'kevlar', 'gore-tex'],
    description: 'Current NASA spacesuit for spacewalks',
    bestContexts: ['spacewalk', 'iss-maintenance', 'training'],
    protectionLevel: 'Space',
    material: '13 layers of advanced materials',
    priceRange: '$$$$$', // Will need to update type
    isOnePiece: true,
    era: 'modern',
    colorOptions: ['White'],
    features: ['Life support system', 'Thermal protection', 'Mobility joints'],
    weight: 'Very Heavy'
  }
];