// src/lib/data/clothing/categories/raveSuits.ts
import type { ClothingItem } from '$lib/types/clothing';

export const raveSuitsItems: ClothingItem[] = [
  {
    id: 'light-up-ravesuit',
    name: 'Light-Up Ravesuit',
    category: 'rave-suits',
    compatibleFabrics: ['spandex', 'latex', 'pvc'],
    description: 'Electroluminescent or LED-equipped suit',
    bestContexts: ['raves', 'music-festivals', 'parties', 'night-clubs']
  },
  {
    id: 'cyberpunk-suit',
    name: 'Cyberpunk Suit',
    category: 'rave-suits',
    compatibleFabrics: ['latex', 'pleather', 'pvc', 'spandex'],
    description: 'Futuristic outfit with tech elements',
    bestContexts: ['cyberpunk-events', 'futuristic-parties', 'tech-raves']
  },
  {
    id: 'glow-in-dark-suit',
    name: 'Glow-in-the-Dark Suit',
    category: 'rave-suits',
    compatibleFabrics: ['spandex', 'polyester'],
    description: 'Phosphorescent or UV-reactive fabric',
    bestContexts: ['blacklight-parties', 'glow-parties', 'night-raves']
  },
  {
    id: 'kandi-suit',
    name: 'Kandi Suit',
    category: 'rave-suits',
    compatibleFabrics: ['spandex', 'mesh'],
    description: 'Suit decorated with beaded bracelets and accessories',
    bestContexts: ['plur-events', 'edm-festivals', 'kandi-kid-culture']
  }
];