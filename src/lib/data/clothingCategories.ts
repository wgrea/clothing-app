// src/lib/data/clothingCategories.ts
import type { ClothingCategory } from '$lib/types/clothing';

export const clothingCategories: ClothingCategory[] = [
  // ONE-PIECE CATEGORIES (from your suitFilters utility)
  {
    id: 'jumpsuits',  // Keep as is to match your existing data
    name: 'Jumpsuits & Catsuits',
    icon: '🦺',
    description: 'Full-body form-fitting garments',
    tags: ['one-piece', 'full-body', 'form-fitting'],
    isOnePiece: true,
    season: 'All'
  },
  // CATSUITS (form-fitting fashion/performance)
  {
    id: 'catsuits',
    name: 'Catsuits',
    icon: '🐱',
    description: 'Form-fitting full-body garments, often for fashion or performance',
    tags: ['form-fitting', 'fashion', 'performance', 'skin-tight'],
    isOnePiece: true,
    season: 'All'
  },
  {
    id: 'water-suits',  // Keep as is
    name: 'Water Suits',
    icon: '🌊',
    description: 'Aquatic and water-resistant full-body suits',
    tags: ['one-piece', 'water', 'aquatic', 'waterproof'],
    isOnePiece: true,
    season: 'Summer'
  },
  {
    id: 'snow-suits',  // Keep as is
    name: 'Snow Suits',
    icon: '❄️',
    description: 'Winter sports and cold weather full-body gear',
    tags: ['one-piece', 'winter', 'cold', 'snow'],
    isOnePiece: true,
    season: 'Winter'
  },
  {
    id: 'protective-suits',  // Keep as is
    name: 'Protective Suits',
    icon: '🛡️',
    description: 'Safety and protective full-body clothing',
    tags: ['one-piece', 'safety', 'protective', 'industrial'],
    isOnePiece: true,
    season: 'All'
  },
  {
    id: 'costume-suits',  // Keep as is
    name: 'Costume Suits',
    icon: '🎭',
    description: 'Character and theatrical full-body costumes',
    tags: ['one-piece', 'costume', 'theatrical', 'character'],
    isOnePiece: true,
    season: 'All'
  },
  {
    id: 'costume-characters',
    name: 'Character Costumes',
    icon: '🦸',
    description: 'Specific character costumes from comics, movies, and games',
    tags: ['cosplay', 'characters', 'superheroes', 'video-games', 'movies'],
    isOnePiece: true,
    season: 'All'
  },
  {
    id: 'rave-suits',  // Keep as is
    name: 'Rave & Party Suits',
    icon: '✨',
    description: 'Festival and party full-body clothing',
    tags: ['one-piece', 'party', 'festival', 'rave'],
    isOnePiece: true,
    season: 'All'
  },
  {
    id: 'travel-suits',  // Keep as is
    name: 'Travel Suits',
    icon: '🧳',
    description: 'Comfortable and practical full-body travel wear',
    tags: ['one-piece', 'travel', 'comfort', 'practical'],
    isOnePiece: true,
    season: 'All'
  },
  
  // REGULAR CLOTHING (Non one-piece)
  {
    id: 'shirts',
    name: 'Shirts & Tops',
    icon: '👕',
    description: 'Upper body garments',
    tags: ['tops', 'upper-body', 'shirts'],
    isOnePiece: false,
    season: 'All'
  },
  {
    id: 'jackets',
    name: 'Jackets & Outerwear',
    icon: '🧥',
    description: 'Outerwear and coats',
    tags: ['outerwear', 'coats', 'jackets'],
    isOnePiece: false,
    season: 'All'
  },
  {
    id: 'pants',
    name: 'Pants & Legwear',
    icon: '👖',
    description: 'Lower body garments',
    tags: ['pants', 'lower-body', 'legwear'],
    isOnePiece: false,
    season: 'All'
  },
  {
    id: 'shorts',
    name: 'Shorts',
    icon: '🩳',
    description: 'Shorter legwear',
    tags: ['shorts', 'casual', 'summer'],
    isOnePiece: false,
    season: 'Summer'
  },
  {
    id: 'shoes',
    name: 'Shoes',
    icon: '👟',
    description: 'Footwear',
    tags: ['footwear', 'shoes'],
    isOnePiece: false,
    season: 'All'
  },
  {
    id: 'boots',
    name: 'Boots',
    icon: '👢',
    description: 'Heavy-duty footwear',
    tags: ['boots', 'heavy-duty', 'footwear'],
    isOnePiece: false,
    season: 'Fall'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: '🧤',
    description: 'Gloves, hats, scarves, and other accessories',
    tags: ['accessories', 'add-ons'],
    isOnePiece: false,
    season: 'All'
  }
];

// Helper functions (keep existing for compatibility)
export const getOnePieceCategories = () => 
  clothingCategories.filter(category => category.isOnePiece === true);

export const getRegularCategories = () => 
  clothingCategories.filter(category => category.isOnePiece === false);

// For compatibility with your existing one-piece page
export const getOnePieceSuitsCategories = () => 
  getOnePieceCategories(); // Alias for compatibility