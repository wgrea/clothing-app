// src/lib/utils/suitFilters.ts
import { clothingItems, getOnePieceItems } from '$lib/data/clothingItems';

// Get all one-piece suits (categorize by type)
export const getOnePieceSuits = () => {
  return getOnePieceItems();
};

// Get suits by specific category
export const getSuitsByType = (type: string) => {
  return getOnePieceItems().filter(suit => suit.category === type);
};

// Get snowsuits with better categorization
export const getSnowsuits = () => {
  const snowsuits = getSuitsByType('snow-suits');
  return {
    insulated: snowsuits.filter(s => s.name.toLowerCase().includes('insulated') || s.insulation === 'Heavy'),
    shell: snowsuits.filter(s => s.name.toLowerCase().includes('shell')),
    softshell: snowsuits.filter(s => s.name.toLowerCase().includes('softshell')),
    bib: snowsuits.filter(s => s.name.toLowerCase().includes('bib')),
    onePiece: snowsuits.filter(s => s.name.toLowerCase().includes('one-piece') || s.name.includes('One-Piece')),
    all: snowsuits
  };
};

// Get character costumes
export const getCharacterCostumes = () => {
  return getSuitsByType('costume-characters');
};

// Get catsuits
export const getCatsuits = () => {
  return getSuitsByType('catsuits');
};