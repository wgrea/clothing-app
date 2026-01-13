// src/lib/types/clothing.ts
export interface ClothingItem {
  id: string;
  name: string;
  category: string;
  compatibleFabrics: string[];
  description: string;
  bestContexts: string[];
  
  // Optional fields
  brand?: string;
  priceRange?: '$' | '$$' | '$$$' | '$$$$';
  sustainability?: 'low' | 'medium' | 'high';
  material?: string;
  waterResistance?: 'None' | 'Light' | 'Medium' | 'High' | 'Waterproof';
  insulation?: 'None' | 'Light' | 'Medium' | 'Heavy';
  durability?: 'Low' | 'Medium' | 'High' | 'Very High';
  weight?: 'Light' | 'Medium' | 'Heavy';
  seasonality?: string[];
  features?: string[];
  
  // Trend-related fields
  trending?: boolean;
  trendingScore?: number;
  trendSeason?: string;
  popularityChange?: 'up' | 'down' | 'stable';
  
  // Type classification
  isOnePiece?: boolean;
  season?: 'All' | 'Spring' | 'Summer' | 'Fall' | 'Winter';
  trendingStyles?: string[];
  
  // Additional optional fields
  sleeveLength?: 'short' | 'long' | 'sleeveless';
  legLength?: 'short' | 'full';
  isTravelSuitable?: boolean;
  era?: 'vintage' | 'classic' | 'modern';
  inspiredBy?: string;
  costumeType?: string;
  protectionType?: string;
}

export interface ClothingCategory {
  id: string;
  name: string;
  icon: string;
  description?: string;
  tags?: string[];
  isOnePiece?: boolean;
  season?: 'All' | 'Spring' | 'Summer' | 'Fall' | 'Winter';
  trendingStyles?: string[];
}

// Helper type for categorized clothing data
export type ClothingCategoryMap = {
  [categoryId: string]: ClothingItem[];
};