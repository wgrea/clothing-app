// src/lib/utils/fabricCombinations.ts
import type { Fabric } from '../types/fabric';
import type { ClothingItem } from '../types/clothing';
import { clothingItems } from '../data/clothingItems';
import { fabrics } from '../data/fabrics';

export interface FabricClothingCombo {
  fabric: Fabric;
  clothingItem: ClothingItem;
  score: number;
  benefits: string[];
  drawbacks: string[];
  bestFor: string[];
}

export function generateFabricClothingCombinations(): FabricClothingCombo[] {
  const combinations: FabricClothingCombo[] = [];
  
  for (const fabric of fabrics) {
    for (const item of clothingItems) {
      if (item.compatibleFabrics.includes(fabric.id) || 
          item.compatibleFabrics.includes('all')) {
        
        const combo: FabricClothingCombo = {
          fabric,
          clothingItem: item,
          score: calculateCompatibilityScore(fabric, item),
          benefits: getBenefits(fabric, item),
          drawbacks: getDrawbacks(fabric, item),
          bestFor: getBestUseCases(fabric, item)
        };
        
        combinations.push(combo);
      }
    }
  }
  
  return combinations.sort((a, b) => b.score - a.score);
}

function calculateCompatibilityScore(fabric: Fabric, item: ClothingItem): number {
  let score = 50; // Base score
  
  // Breathability compatibility
  if (item.bestContexts.includes('summer') && fabric.breathability >= 4) score += 15;
  if (item.bestContexts.includes('hot-weather') && fabric.breathability >= 4) score += 15;
  
  // Durability for workwear
  if (item.category.includes('protective') && fabric.durability >= 4) score += 15;
  if (item.category === 'snow-suits' && fabric.durability >= 4) score += 10;
  
  // Stretch for form-fitting items
  if (item.name.toLowerCase().includes('catsuit') && fabric.stretchiness >= 4) score += 15;
  if (item.name.toLowerCase().includes('rave') && fabric.stretchiness >= 3) score += 10;
  
  // Care difficulty penalty
  if (fabric.careDifficulty >= 4 && item.bestContexts.includes('travel')) score -= 10;
  
  return Math.min(Math.max(score, 0), 100);
}

function getBenefits(fabric: Fabric, item: ClothingItem): string[] {
  const benefits: string[] = [];
  
  if (fabric.durability >= 4) benefits.push('Highly durable');
  if (fabric.breathability >= 4) benefits.push('Excellent breathability');
  if (fabric.stretchiness >= 4) benefits.push('Great stretch and flexibility');
  
  // Specific fabric benefits
  if (fabric.properties.includes('water-resistant') && item.category === 'water-suits') {
    benefits.push('Water resistance');
  }
  
  if (fabric.properties.includes('insulating') && item.category === 'snow-suits') {
    benefits.push('Good insulation');
  }
  
  if (fabric.careDifficulty <= 2 && item.bestContexts.includes('travel')) {
    benefits.push('Easy to care for while traveling');
  }
  
  if (fabric.sustainability === 'high') {
    benefits.push('Eco-friendly choice');
  }
  
  return benefits;
}

function getDrawbacks(fabric: Fabric, item: ClothingItem): string[] {
  const drawbacks: string[] = [];
  
  if (fabric.breathability <= 2 && item.bestContexts.includes('summer')) {
    drawbacks.push('Poor breathability for summer');
  }
  
  if (fabric.careDifficulty >= 4 && item.bestContexts.includes('everyday')) {
    drawbacks.push('High maintenance for everyday use');
  }
  
  if (fabric.sustainability === 'low' && fabric.category !== 'synthetic') {
    drawbacks.push('Low sustainability');
  }
  
  if (fabric.notRecommendedFor.some(reason => 
    reason.toLowerCase().includes('hot') && item.bestContexts.includes('summer')
  )) {
    drawbacks.push('Not ideal for hot weather');
  }
  
  if (item.bestContexts.includes('travel') && fabric.careInstructions.some(instruction => 
    instruction.toLowerCase().includes('dry clean')
  )) {
    drawbacks.push('Difficult to care for while traveling');
  }
  
  return drawbacks;
}

function getBestUseCases(fabric: Fabric, item: ClothingItem): string[] {
  const uses: string[] = [];
  
  // Based on fabric category
  if (fabric.category === 'natural' || fabric.category === 'plant-based') {
    uses.push('Breathable comfort');
    uses.push('Eco-conscious choices');
  }
  
  if (fabric.category === 'synthetic') {
    uses.push('Performance wear');
    uses.push('Durable applications');
  }
  
  if (fabric.category === 'animal') {
    uses.push('Luxury items');
    uses.push('Natural materials');
  }
  
  // Based on clothing category
  if (item.category === 'travel-suits') {
    uses.push('Travel clothing');
    uses.push('Multi-purpose wear');
  }
  
  if (item.category === 'protective-suits') {
    uses.push('Safety applications');
    uses.push('Professional use');
  }
  
  if (item.category === 'rave-suits') {
    uses.push('Party wear');
    uses.push('Festival clothing');
  }
  
  if (item.category === 'water-suits') {
    uses.push('Water activities');
    uses.push('Aquatic sports');
  }
  
  if (item.category === 'snow-suits') {
    uses.push('Winter sports');
    uses.push('Cold weather activities');
  }
  
  return uses.slice(0, 3); // Limit to 3 best uses
}