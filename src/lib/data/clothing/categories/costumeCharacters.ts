// src/lib/data/clothing/categories/costumeCharacters.ts
import type { ClothingItem } from '$lib/types/clothing';

export const costumeCharactersItems: ClothingItem[] = [
  {
    id: 'catwoman-suit',
    name: 'Catwoman Suit',
    category: 'costume-characters',
    compatibleFabrics: ['latex', 'pleather', 'leather'],
    description: 'Classic comic book character suit with cat motifs',
    bestContexts: ['cosplay', 'comic-con', 'halloween'],
    inspiredBy: 'Catwoman (DC Comics)',
    material: 'Typically leather or latex',
    priceRange: '$$$',
    isOnePiece: true,
    costumeType: 'superhero',
    features: ['Cape', 'Mask', 'Claw details']
  },
  {
    id: 'spider-man-suit',
    name: 'Spider-Man Suit',
    category: 'costume-characters',
    compatibleFabrics: ['spandex', 'lycra'],
    description: 'Web-slinger superhero suit with spider motif',
    bestContexts: ['cosplay', 'comic-con', 'parties'],
    inspiredBy: 'Spider-Man (Marvel)',
    material: 'Spandex',
    priceRange: '$$',
    isOnePiece: true,
    costumeType: 'superhero',
    features: ['Web pattern', 'Mask', 'Symbol chest']
  },
  {
    id: 'venom-suit',
    name: 'Venom Symbiote Suit',
    category: 'costume-characters',
    compatibleFabrics: ['latex', 'pvc'],
    description: 'Black alien symbiote suit with white spider',
    bestContexts: ['cosplay', 'comic-con', 'horror'],
    inspiredBy: 'Venom (Marvel)',
    material: 'Latex or vinyl',
    priceRange: '$$$',
    isOnePiece: true,
    costumeType: 'superhero-villain',
    features: ['Symbiote texture', 'White spider', 'Tongue detail']
  },
  {
    id: 'dva-mech-suit',
    name: 'D.Va Mech Pilot Suit',
    category: 'costume-characters',
    compatibleFabrics: ['pleather', 'spandex', 'plastic'],
    description: 'Korean gamer mech pilot suit from Overwatch',
    bestContexts: ['gaming-conventions', 'cosplay', 'esports'],
    inspiredBy: 'D.Va (Overwatch)',
    material: 'Mixed materials',
    priceRange: '$$$$',
    isOnePiece: true,
    costumeType: 'video-game',
    features: ['LED lights', 'Pilot helmet', 'Korean text']
  },
  {
    id: 'batman-suit',
    name: 'Batman Batsuit',
    category: 'costume-characters',
    compatibleFabrics: ['kevlar', 'rubber', 'neoprene'],
    description: 'Dark knight tactical armor suit',
    bestContexts: ['cosplay', 'comic-con', 'parties'],
    inspiredBy: 'Batman (DC Comics)',
    material: 'Tactical armor materials',
    priceRange: '$$$$',
    isOnePiece: true,
    costumeType: 'superhero',
    features: ['Cape', 'Cowl', 'Utility belt']
  },
  {
    id: 'iron-man-suit',
    name: 'Iron Man Armor',
    category: 'costume-characters',
    compatibleFabrics: ['plastic', 'metal', 'led'],
    description: 'Powered exoskeleton suit with repulsor tech',
    bestContexts: ['cosplay', 'comic-con', 'display'],
    inspiredBy: 'Iron Man (Marvel)',
    material: 'Mixed with electronics',
    priceRange: '$$$$$',
    isOnePiece: true,
    costumeType: 'superhero-tech',
    features: ['LED lights', 'Arc reactor', 'Helmet']
  }
];