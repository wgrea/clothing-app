// src/lib/data/clothing/categories/costumes/characters/videoGames.ts
import type { ClothingItem } from '$lib/types/clothing';

export const videoGameCostumes: ClothingItem[] = [
  {
    id: 'dva-mech-suit',
    name: 'D.Va Mech Pilot Suit',
    category: 'costume-characters',
    subcategory: 'video-games',
    compatibleFabrics: ['pleather', 'spandex', 'plastic'],
    description: 'Korean gamer mech pilot suit from Overwatch',
    bestContexts: ['gaming-conventions', 'cosplay', 'esports'],
    inspiredBy: 'D.Va (Overwatch)',
    material: 'Mixed materials',
    priceRange: '$$$$',
    isOnePiece: true,
    costumeType: 'video-game',
    era: 'modern',
    colorOptions: ['Pink', 'White', 'Blue'],
    features: ['LED lights', 'Pilot helmet', 'Korean text', 'Mech interface']
  }
  // Add more video game characters...
];