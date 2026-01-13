// src/lib/data/clothing/categories/protective-suits/hazmat/modern.ts
import type { ClothingItem } from '$lib/types/clothing';

export const modernHazmatSuits: ClothingItem[] = [
  {
    id: 'modern-level-a',
    name: 'Level A Hazmat Suit',
    category: 'protective-suits',
    subcategory: 'hazmat',
    compatibleFabrics: ['butyl-rubber', 'tychem', 'pvc'],
    description: 'Highest level of chemical protection with SCBA',
    bestContexts: ['chemical-emergencies', 'industrial-cleanup', 'biohazard'],
    protectionLevel: 'Level A',
    material: 'Butyl rubber or multilayered laminate',
    priceRange: '$$$$',
    isOnePiece: true,
    era: 'modern',
    colorOptions: ['Yellow', 'White', 'Blue'],
    features: ['Self-contained breathing', 'Chemical resistant', 'Taped seams'],
    weight: 'Heavy'
  },
  {
    id: 'modern-cbrn',
    name: 'CBRN Protective Suit',
    category: 'protective-suits',
    subcategory: 'hazmat',
    compatibleFabrics: ['activated-carbon', 'polyester'],
    description: 'Chemical, biological, radiological, and nuclear protection',
    bestContexts: ['military', 'first-responders', 'disaster-response'],
    protectionLevel: 'CBRN',
    material: 'Activated carbon impregnated fabric',
    priceRange: '$$$$',
    isOnePiece: true,
    era: 'modern',
    colorOptions: ['Olive green', 'Black', 'Camouflage'],
    features: ['Charcoal lining', 'Multi-threat protection', 'Combat compatible']
  }
];