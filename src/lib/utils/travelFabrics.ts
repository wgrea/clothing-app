// src/lib/utils/travelFabrics.ts
import type { Fabric } from '../types/fabric';
import type { ClothingItem } from '../types/clothing';
import { fabrics } from '../data/fabrics';
import { clothingItems } from '../data/clothingItems';

export interface TravelRecommendation {
  fabric: Fabric;
  reason: string;
  bestFor: string[];
  travelScenarios: string[];
  packingTips: string[];
}

export function getTravelFriendlyFabrics(): TravelRecommendation[] {
  const travelFabrics = fabrics.filter(f => 
    f.id === 'merino-wool' || 
    f.id === 'linen' || 
    f.id === 'polyester' || 
    f.id === 'cotton' ||
    f.id === 'spandex'
  );
  
  return travelFabrics.map(fabric => {
    let recommendation: TravelRecommendation = {
      fabric,
      reason: '',
      bestFor: [],
      travelScenarios: [],
      packingTips: []
    };
    
    // Customize based on fabric type
    switch(fabric.id) {
      case 'merino-wool':
        recommendation = {
          ...recommendation,
          reason: 'Temperature regulation and odor resistance',
          bestFor: ['Base layers', 'Socks', 'Long-sleeve shirts', 'Underwear'],
          travelScenarios: ['Multi-day trips without laundry', 'Variable climates', 'Carry-on only travel'],
          packingTips: ['Can be worn multiple days without washing', 'Layers well', 'Lightweight']
        };
        break;
      case 'linen':
        recommendation = {
          ...recommendation,
          reason: 'Extreme breathability for hot climates',
          bestFor: ['Summer suits', 'Dresses', 'Shirts', 'Pants'],
          travelScenarios: ['Tropical destinations', 'Summer travel', 'Beach vacations'],
          packingTips: ['Embrace wrinkles as part of the look', 'Roll instead of fold', 'Steam in bathroom']
        };
        break;
      case 'polyester':
        recommendation = {
          ...recommendation,
          reason: 'Wrinkle resistance and quick drying',
          bestFor: ['Travel pants', 'Blouses', 'Dresses', 'Outerwear'],
          travelScenarios: ['Business travel', 'Quick-drying needs', 'Limited laundry access'],
          packingTips: ['Hang in bathroom steam to remove wrinkles', 'Dries overnight', 'Pack tightly']
        };
        break;
      case 'cotton':
        recommendation = {
          ...recommendation,
          reason: 'Comfortable and breathable natural fiber',
          bestFor: ['T-shirts', 'Casual shirts', 'Comfortable pants'],
          travelScenarios: ['Casual travel', 'Warm destinations', 'Everyday wear'],
          packingTips: ['Easy to wash', 'Comfortable for long wear', 'Natural feel']
        };
        break;
      case 'spandex':
        recommendation = {
          ...recommendation,
          reason: 'Stretch for comfort during travel',
          bestFor: ['Travel leggings', 'Compression socks', 'Comfortable tops'],
          travelScenarios: ['Long flights', 'Active travel days', 'Road trips'],
          packingTips: ['Great for layering', 'Minimizes wrinkles', 'Lightweight packing']
        };
        break;
    }
    
    return recommendation;
  });
}

export function getBestTravelClothing(): ClothingItem[] {
  return clothingItems.filter(item => 
    item.category === 'travel-suits' || 
    item.bestContexts.some(context => 
      context.includes('travel') || 
      context.includes('flight')
    )
  );
}

export function getTravelFabricCombo(fabricId: string, clothingType: string): string[] {
  const fabric = fabrics.find(f => f.id === fabricId);
  if (!fabric) return [];
  
  const benefits: string[] = [];
  
  if (fabric.breathability >= 4) benefits.push('Excellent breathability for comfort');
  if (fabric.careDifficulty <= 2) benefits.push('Easy care while traveling');
  if (fabric.durability >= 4) benefits.push('Durable for frequent use');
  
  if (fabric.properties.some(prop => 
    prop.includes('quick-dry') || prop.includes('wrinkle-resist')
  )) {
    benefits.push('Travel-friendly properties');
  }
  
  if (fabric.sustainability === 'high' || fabric.sustainability === 'medium') {
    benefits.push('Sustainable choice');
  }
  
  return benefits;
}