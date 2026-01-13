// src/lib/data/clothingItems.ts
import type { ClothingItem } from '$lib/types/clothing';
import { getAllClothingItems } from './clothing/utils';

// Export all items in a flat array for backward compatibility
export const clothingItems: ClothingItem[] = getAllClothingItems();

// Re-export utility functions
export { 
  getItemsByCategory,
  getOnePieceItems,
  getRegularItems 
} from './clothing/utils';

// Re-export individual categories for direct imports
export * from './clothing/categories';