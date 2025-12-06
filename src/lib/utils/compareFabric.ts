// src/lib/utils/compareFabric.ts
import type { Fabric } from '$lib/types/fabric';

export interface ComparisonResult {
  overlaps: string[];
  differences: string[];
  fabricAStrengths: string[];
  fabricBStrengths: string[];
  commonConfusions: string[];
  sharedUses: string[];
  uniqueUses: {
    fabricA: string[];
    fabricB: string[];
  };
}

export function compareFabrics(fabricA: Fabric, fabricB: Fabric): ComparisonResult {
  const overlaps: string[] = [];
  const differences: string[] = [];
  const fabricAStrengths: string[] = [];
  const fabricBStrengths: string[] = [];
  const commonConfusions: string[] = [];
  const sharedUses: string[] = [];
  
  // Check if they overlap with each other
  if (fabricA.overlapsWith.includes(fabricB.id) || fabricB.overlapsWith.includes(fabricA.id)) {
    commonConfusions.push(`"${fabricA.name}" and "${fabricB.name}" are commonly confused`);
  }
  
  // Find shared properties
  const sharedProperties = fabricA.properties.filter(prop => 
    fabricB.properties.includes(prop)
  );
  
  if (sharedProperties.length > 0) {
    overlaps.push(`Both are: ${sharedProperties.join(', ')}`);
  }
  
  // Find unique properties
  const uniqueToA = fabricA.properties.filter(prop => 
    !fabricB.properties.includes(prop)
  );
  const uniqueToB = fabricB.properties.filter(prop => 
    !fabricA.properties.includes(prop)
  );
  
  if (uniqueToA.length > 0) {
    fabricAStrengths.push(`Unique properties: ${uniqueToA.join(', ')}`);
  }
  
  if (uniqueToB.length > 0) {
    fabricBStrengths.push(`Unique properties: ${uniqueToB.join(', ')}`);
  }
  
  // Find shared uses
  const usesA = [...fabricA.commonUses, ...fabricA.bestFor];
  const usesB = [...fabricB.commonUses, ...fabricB.bestFor];
  
  sharedUses.push(...usesA.filter(use => usesB.includes(use)));
  
  // Find differences from keyDifferences
  const keyDiff = fabricA.keyDifferences.find(diff => diff.comparedTo === fabricB.id);
  if (keyDiff) {
    differences.push(...keyDiff.differences);
  }
  
  // Also check the other way
  const reverseKeyDiff = fabricB.keyDifferences.find(diff => diff.comparedTo === fabricA.id);
  if (reverseKeyDiff) {
    differences.push(...reverseKeyDiff.differences);
  }
  
  return {
    overlaps,
    differences: [...new Set(differences)], // Remove duplicates
    fabricAStrengths,
    fabricBStrengths,
    commonConfusions,
    sharedUses: [...new Set(sharedUses)],
    uniqueUses: {
      fabricA: usesA.filter(use => !usesB.includes(use)),
      fabricB: usesB.filter(use => !usesA.includes(use))
    }
  };
}