// src/lib/data/clothing/categories/costumeSuits.ts
import type { ClothingItem } from '$lib/types/clothing';

export const costumeSuitsItems: ClothingItem[] = [
  {
    id: 'superhero-suit',
    name: 'Superhero Suit',
    category: 'costume-suits',
    compatibleFabrics: ['spandex', 'latex', 'pvc'],
    description: 'Form-fitting costume with character design',
    bestContexts: ['cosplay', 'halloween', 'comic-con', 'film-production']
  },
  {
    id: 'mascot-suit',
    name: 'Mascot Suit',
    category: 'costume-suits',
    compatibleFabrics: ['faux-fur', 'polyester', 'foam'],
    description: 'Character costume with padding and structure',
    bestContexts: ['sports-events', 'theme-parks', 'promotional-events']
  },
  {
    id: 'medieval-armor',
    name: 'Medieval Armor Costume',
    category: 'costume-suits',
    compatibleFabrics: ['pleather', 'metal', 'chainmail'],
    description: 'Historical or fantasy armor reproduction',
    bestContexts: ['renaissance-faires', 'larping', 'theater', 'historical-reenactment']
  }
];