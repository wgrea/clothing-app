// src/lib/types/clothing.ts
export interface ClothingItem {
  id: string;
  name: string;
  category: string;
  subcategory?: string; // NEW: For better organization
  compatibleFabrics: string[];
  description: string;
  bestContexts: string[];
  
  // Optional fields
  brand?: string;
  priceRange?: '$' | '$$' | '$$$' | '$$$$' | '$$$$$';
  sustainability?: 'low' | 'medium' | 'high';
  material?: string;
  waterResistance?: 'None' | 'Light' | 'Medium' | 'High' | 'Waterproof';
  insulation?: 'None' | 'Light' | 'Medium' | 'Heavy';
  durability?: 'Low' | 'Medium' | 'High' | 'Very High';
  weight?: 'Light' | 'Medium' | 'Heavy' | 'Very Heavy';
  seasonality?: string[];
  features?: string[];
  
  // Trend & evolution
  trending?: boolean;
  trendingScore?: number;
  trendSeason?: string;
  popularityChange?: 'up' | 'down' | 'stable';
  
  // Type classification
  isOnePiece?: boolean;
  season?: 'All' | 'Spring' | 'Summer' | 'Fall' | 'Winter';
  trendingStyles?: string[];
  
  // NEW: Evolution and history
  era?: 'vintage' | 'retro' | 'classic' | 'modern' | 'futuristic';
  yearIntroduced?: number;
  evolutionNotes?: string;
  
  // NEW: Color and variations
  colorOptions?: string[];
  patternOptions?: string[];
  
  // Specific to costumes
  inspiredBy?: string;
  costumeType?: string;
  
  // Specific to protective suits
  protectionLevel?: string;
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