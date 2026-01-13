// src/lib/data/clothing/utils.ts
import type { ClothingItem } from '$lib/types/clothing';
import {
  jumpsuitsItems,
  snowSuitsItems,
  waterSuitsItems,
  protectiveSuitsItems,
  costumeSuitsItems,
  raveSuitsItems,
  travelSuitsItems,
  shirtsItems,
  jacketsItems,
  pantsItems
} from './categories';

export const getAllClothingItems = (): ClothingItem[] => {
  return [
    ...jumpsuitsItems,
    ...snowSuitsItems,
    ...waterSuitsItems,
    ...protectiveSuitsItems,
    ...costumeSuitsItems,
    ...raveSuitsItems,
    ...travelSuitsItems,
    ...shirtsItems,
    ...jacketsItems,
    ...pantsItems
  ];
};

export const getItemsByCategory = (categoryId: string): ClothingItem[] => {
  const allItems = getAllClothingItems();
  return allItems.filter(item => item.category === categoryId);
};

export const getOnePieceItems = (): ClothingItem[] => {
  const allItems = getAllClothingItems();
  return allItems.filter(item => {
    const categories = [
      'jumpsuits', 
      'snow-suits', 
      'water-suits', 
      'protective-suits', 
      'costume-suits', 
      'rave-suits', 
      'travel-suits'
    ];
    return categories.includes(item.category);
  });
};

export const getRegularItems = (): ClothingItem[] => {
  const allItems = getAllClothingItems();
  return allItems.filter(item => {
    const categories = [
      'shirts', 
      'jackets', 
      'pants', 
      'shorts', 
      'shoes', 
      'boots', 
      'accessories'
    ];
    return categories.includes(item.category);
  });
};