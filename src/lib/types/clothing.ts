// src/lib/types/clothing.ts
export interface ClothingItem {
  id: string;
  name: string;
  category: string;
  compatibleFabrics: string[];
  description: string;
  bestContexts: string[];
  
  // NEW FIELDS to add:
  brand?: string;                    // Brand/company name
  priceRange?: '$' | '$$' | '$$$' | '$$$$';
  sustainability?: 'low' | 'medium' | 'high';
  material?: string;                 // Primary material
  waterResistance?: 'None' | 'Light' | 'Medium' | 'High' | 'Waterproof';
  insulation?: 'None' | 'Light' | 'Medium' | 'Heavy';
  durability?: 'Low' | 'Medium' | 'High' | 'Very High';
  weight?: 'Light' | 'Medium' | 'Heavy';
  seasonality?: string[];           // e.g., ["Spring", "Summer"]
  features?: string[];              // e.g., ["Breathable", "Quick Dry"]
  
  // Trend-related fields
  trending?: boolean;               // Is this item trending?
  trendingScore?: number;           // 1-10 popularity score
  trendSeason?: string;             // e.g., "Spring 2024"
  popularityChange?: 'up' | 'down' | 'stable'; // Trending direction
}

export interface ClothingCategory {
  id: string;
  name: string;
  icon: string;
  description?: string;
  tags?: string[];
  
  // NEW: Category trends
  trendingStyles?: string[];        // Popular styles in this category
  season?: 'All' | 'Spring' | 'Summer' | 'Fall' | 'Winter';
}

// NEW: Brand/Company type
export interface Brand {
  id: string;
  name: string;
  description: string;
  website?: string;
  sustainabilityRating?: 1 | 2 | 3 | 4 | 5;
  specialty?: string[];             // e.g., ["Outdoor", "Techwear", "Luxury"]
  priceRange?: '$' | '$$' | '$$$' | '$$$$';
  popularProducts?: string[];       // IDs of popular clothing items
}

// NEW: Trend type
export interface Trend {
  id: string;
  name: string;
  description: string;
  season: string;                   // e.g., "Spring 2024"
  categories: string[];             // Category IDs this trend applies to
  featuredItems?: string[];         // Clothing item IDs
  inspirationImages?: string[];     // URLs for trend images
  colorPalette?: string[];          // Trend colors
  materials?: string[];             // Trending materials
}