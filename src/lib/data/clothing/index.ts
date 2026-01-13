// src/lib/data/clothing/index.ts
import type { ClothingItem } from '$lib/types/clothing';  // ADD THIS LINE
import { clothingCategories } from '../clothingCategories';
import { getAllClothingItems, getItemsByCategory } from './utils';

export const getCategorizedClothing = () => {
  const allItems = getAllClothingItems();
  const categorized: Record<string, ClothingItem[]> = {};
  
  clothingCategories.forEach(category => {
    categorized[category.id] = allItems.filter(item => item.category === category.id);
  });
  
  return categorized;
};

// Export everything for easy imports
export * from './utils';
export * from './categories';