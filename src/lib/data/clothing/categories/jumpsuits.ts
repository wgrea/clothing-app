// src/lib/data/clothing/categories/jumpsuits.ts
import type { ClothingItem } from '$lib/types/clothing';

export const jumpsuitsItems: ClothingItem[] = [
    {
    id: 'denim-jumpsuit',
    name: 'Denim Jumpsuit',
    category: 'jumpsuits',
    compatibleFabrics: ['denim', 'cotton'],
    description: 'Casual denim jumpsuit with utility pockets',
    bestContexts: ['casual', 'workwear', 'urban'],
    priceRange: '$$',
    material: 'Denim',
    weight: 'Medium',
    isOnePiece: true,
    trendingStyles: ['Workwear', 'Vintage']
    },
    {
    id: 'linen-jumpsuit',
    name: 'Linen Jumpsuit',
    category: 'jumpsuits',
    compatibleFabrics: ['linen', 'cotton'],
    description: 'Breathable summer jumpsuit',
    bestContexts: ['summer', 'beach', 'vacation'],
    priceRange: '$$',
    material: 'Linen',
    weight: 'Light',
    isOnePiece: true,
    season: 'Summer'
    }
];