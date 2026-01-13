// src/lib/data/clothing/categories/costumes/characters/superheroes.ts
import type { ClothingItem } from '$lib/types/clothing';

export const superheroCostumes: ClothingItem[] = [
  {
    id: 'catwoman-suit',
    name: 'Catwoman Suit',
    category: 'costume-characters',
    subcategory: 'superheroes',
    compatibleFabrics: ['latex', 'pleather', 'leather'],
    description: 'Classic comic book character suit with cat motifs',
    bestContexts: ['cosplay', 'comic-con', 'halloween'],
    inspiredBy: 'Catwoman (DC Comics)',
    material: 'Typically leather or latex',
    priceRange: '$$$',
    isOnePiece: true,
    costumeType: 'superhero',
    era: 'modern',
    colorOptions: ['Black', 'Dark gray', 'Purple'],
    features: ['Cape', 'Mask', 'Claw details']
  },
  {
    id: 'batman-1960s',
    name: '1960s Batman Suit',
    category: 'costume-characters',
    subcategory: 'superheroes',
    compatibleFabrics: ['spandex', 'cotton'],
    description: 'Classic campy Batman suit from the 1960s TV series',
    bestContexts: ['retro-cosplay', 'vintage-events'],
    inspiredBy: 'Batman (1960s TV Series)',
    material: 'Spandex and cotton',
    priceRange: '$$',
    isOnePiece: true,
    costumeType: 'superhero',
    era: 'vintage',
    colorOptions: ['Blue', 'Gray', 'Yellow'],
    features: ['Emblem', 'Cape', 'Utility belt'],
    evolutionNotes: 'First live-action Batman, more athletic than armored'
  },
  {
    id: 'batman-dark-knight',
    name: 'Dark Knight Batsuit',
    category: 'costume-characters',
    subcategory: 'superheroes',
    compatibleFabrics: ['kevlar', 'rubber', 'neoprene'],
    description: 'Tactical armor suit from Christopher Nolan films',
    bestContexts: ['cosplay', 'comic-con', 'parties'],
    inspiredBy: 'Batman (The Dark Knight Trilogy)',
    material: 'Tactical armor materials',
    priceRange: '$$$$',
    isOnePiece: true,
    costumeType: 'superhero',
    era: 'modern',
    colorOptions: ['Black', 'Dark gray'],
    features: ['Cape', 'Cowl', 'Utility belt', 'Armor plating'],
    evolutionNotes: 'Real-world military inspired, less comic book aesthetic'
  }
  // Add more superheroes...
];