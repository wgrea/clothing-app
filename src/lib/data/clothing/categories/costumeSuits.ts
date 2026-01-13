// src/lib/data/clothing/categories/costumeSuits.ts
import type { ClothingItem } from '$lib/types/clothing';

export const costumeSuitsItems: ClothingItem[] = [
  {
    id: 'superhero-suit',
    name: 'Superhero Suit',
    category: 'costume-suits',
    compatibleFabrics: ['spandex', 'latex', 'pvc'],
    description: 'Generic form-fitting costume for superhero characters',
    bestContexts: ['cosplay', 'halloween', 'comic-con', 'film-production'],
    isOnePiece: true,
    costumeType: 'generic'
  },
  {
    id: 'mascot-suit',
    name: 'Mascot Suit',
    category: 'costume-suits',
    compatibleFabrics: ['faux-fur', 'polyester', 'foam'],
    description: 'Character costume with padding and structure',
    bestContexts: ['sports-events', 'theme-parks', 'promotional-events'],
    isOnePiece: true
  },
  {
    id: 'medieval-armor',
    name: 'Medieval Armor Costume',
    category: 'costume-suits',
    compatibleFabrics: ['pleather', 'metal', 'chainmail'],
    description: 'Historical or fantasy armor reproduction',
    bestContexts: ['renaissance-faires', 'larping', 'theater', 'historical-reenactment'],
    isOnePiece: true
  },
  {
    id: 'zombie-costume',
    name: 'Zombie Costume',
    category: 'costume-suits',
    compatibleFabrics: ['cotton', 'latex', 'makeup'],
    description: 'Tattered clothing and makeup for zombie appearances',
    bestContexts: ['halloween', 'haunted-houses', 'horror-events'],
    isOnePiece: false
  },
  {
    id: 'animal-costume',
    name: 'Animal Costume',
    category: 'costume-suits',
    compatibleFabrics: ['faux-fur', 'polyester'],
    description: 'Full-body animal costume',
    bestContexts: ['parties', 'performances', 'childrens-events'],
    isOnePiece: true
  }
];