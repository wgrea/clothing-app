// src/lib/data/clothingCategories.ts
import type { ClothingCategory } from '$lib/types/clothing';

export const clothingCategories: ClothingCategory[] = [
  {
    id: 'jumpsuits',
    name: 'Jumpsuits & Catsuits',
    icon: '🦺',
    description: 'Full-body form-fitting garments',
    tags: ['full-body', 'form-fitting', 'specialized']
  },
  {
    id: 'water-suits',
    name: 'Water Suits',
    icon: '🌊',
    description: 'Aquatic and water-resistant clothing',
    tags: ['water', 'aquatic', 'waterproof']
  },
  {
    id: 'snow-suits',
    name: 'Snow Suits',
    icon: '❄️',
    description: 'Winter sports and cold weather gear',
    tags: ['winter', 'cold', 'snow']
  },
  {
    id: 'protective-suits',
    name: 'Protective Suits',
    icon: '🛡️',
    description: 'Safety and protective clothing',
    tags: ['safety', 'protective', 'industrial']
  },
  {
    id: 'costume-suits',
    name: 'Costume Suits',
    icon: '🎭',
    description: 'Character and theatrical costumes',
    tags: ['costume', 'theatrical', 'character']
  },
  {
    id: 'rave-suits',
    name: 'Rave & Party Suits',
    icon: '✨',
    description: 'Festival and party clothing',
    tags: ['party', 'festival', 'rave']
  },
  {
    id: 'travel-suits',
    name: 'Travel Suits',
    icon: '🧳',
    description: 'Comfortable and practical travel wear',
    tags: ['travel', 'comfort', 'practical']
  },
  {
    id: 'shirts',
    name: 'Shirts & Tops',
    icon: '👕',
    description: 'Upper body garments',
    tags: ['tops', 'upper-body', 'shirts']
  },
  {
    id: 'jackets',
    name: 'Jackets & Outerwear',
    icon: '🧥',
    description: 'Outerwear and coats',
    tags: ['outerwear', 'coats', 'jackets']
  },
  {
    id: 'pants',
    name: 'Pants & Legwear',
    icon: '👖',
    description: 'Lower body garments',
    tags: ['pants', 'lower-body', 'legwear']
  },
  {
    id: 'shorts',
    name: 'Shorts',
    icon: '🩳',
    description: 'Shorter legwear',
    tags: ['shorts', 'casual', 'summer']
  },
  {
    id: 'shoes',
    name: 'Shoes',
    icon: '👟',
    description: 'Footwear',
    tags: ['footwear', 'shoes']
  },
  {
    id: 'boots',
    name: 'Boots',
    icon: '👢',
    description: 'Heavy-duty footwear',
    tags: ['boots', 'heavy-duty', 'footwear']
  }
];