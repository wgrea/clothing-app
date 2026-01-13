// src/lib/types/clothing.ts
export interface ClothingItem {
  id: string;
  name: string;
  category: string;
  compatibleFabrics: string[];
  description: string;
  bestContexts: string[];
  
  // Existing fields...
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
  
  // NEW: Distinguish between one-piece and regular
  isOnePiece?: boolean;
  season?: 'All' | 'Spring' | 'Summer' | 'Fall' | 'Winter';
  trendingStyles?: string[];
}

export interface ClothingCategory {
  id: string;
  name: string;
  icon: string;
  description?: string;
  tags?: string[];
  
  // NEW: Distinguish between one-piece and regular
  isOnePiece?: boolean;
  season?: 'All' | 'Spring' | 'Summer' | 'Fall' | 'Winter';
  
  // Category trends
  trendingStyles?: string[];
}

// Keep Brand and Trend interfaces the same...