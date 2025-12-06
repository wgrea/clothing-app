// src/lib/types/fabric.ts
export interface Fabric {
  id: string;
  name: string;
  description: string;
  category: 'natural' | 'synthetic' | 'animal' | 'plant-based';
  properties: string[];
  alsoKnownAs: string[];
  overlapsWith: string[];
  keyDifferences: {
    comparedTo: string;
    differences: string[];
  }[];
  commonUses: string[];
  bestFor: string[];
  notRecommendedFor: string[];
  careInstructions: string[];
  sustainability: 'high' | 'medium' | 'low';
  breathability: 1 | 2 | 3 | 4 | 5;
  stretchiness: 1 | 2 | 3 | 4 | 5;
  durability: 1 | 2 | 3 | 4 | 5;
  careDifficulty: 1 | 2 | 3 | 4 | 5; // Add this line
}

export type FabricCategory = Fabric['category'];