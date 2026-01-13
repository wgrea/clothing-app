// src/lib/data/clothing/utils.ts - SIMPLIFIED WORKING VERSION
import type { ClothingItem } from '$lib/types/clothing';
import {
  jumpsuitsItems,
  snowSuitsItems,
  waterSuitsItems,
  costumeSuitsItems,
  costumeCharactersItems,
  raveSuitsItems,
  travelSuitsItems,
  shirtsItems,
  jacketsItems,
  pantsItems,
  shortsItems,
  shoesItems,
  accessoriesItems,
  // Add these imports - they should work now:
  modernHazmatSuits,
  vintageHazmatSuits,
  modernSpaceSuits,
  vintageSpaceSuits,
  modernRacingSuits,
  vintageRacingSuits,
  modernFlightSuits,
  vintageFlightSuits,
} from './categories';

export const getAllClothingItems = (): ClothingItem[] => {
  return [
    ...jumpsuitsItems,
    ...snowSuitsItems,
    ...waterSuitsItems,
    ...costumeSuitsItems,
    ...costumeCharactersItems,
    ...raveSuitsItems,
    ...travelSuitsItems,
    ...shirtsItems,
    ...jacketsItems,
    ...pantsItems,
    ...shortsItems,
    ...shoesItems,
    ...accessoriesItems,
    // Add protective suits:
    ...modernHazmatSuits,
    ...vintageHazmatSuits,
    ...modernSpaceSuits,
    ...vintageSpaceSuits,
    ...modernRacingSuits,
    ...vintageRacingSuits,
    ...modernFlightSuits,
    ...vintageFlightSuits,
  ];
};

export const getItemsByCategory = (categoryId: string): ClothingItem[] => {
  const allItems = getAllClothingItems();
  return allItems.filter(item => item.category === categoryId);
};

export const getOnePieceItems = (): ClothingItem[] => {
  const allItems = getAllClothingItems();
  return allItems.filter(item => item.isOnePiece === true);
};

export const getRegularItems = (): ClothingItem[] => {
  const allItems = getAllClothingItems();
  return allItems.filter(item => item.isOnePiece === false);
};