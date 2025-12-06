// src/lib/types/clothing.ts
export interface ClothingItem {
  id: string;
  name: string;
  category: string;
  compatibleFabrics: string[];
  description: string;
  bestContexts: string[];
}

export type ClothingCategory = {
  id: string;
  name: string;
  icon: string;
};