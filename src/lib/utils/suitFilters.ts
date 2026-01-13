// src/lib/utils/suitFilters.ts
import { clothingItems } from '$lib/data/clothingItems';

export const onePieceCategories = ['snow-suits', 'water-suits', 'jumpsuits', 'travel-suits'];

export const getOnePieceSuits = () => {
    return clothingItems.filter(item => onePieceCategories.includes(item.category));
};