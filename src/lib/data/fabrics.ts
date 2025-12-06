// src/lib/data/fabrics.ts
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
  careDifficulty: 1 | 2 | 3 | 4 | 5;
}

export const fabrics: Fabric[] = [
  {
    id: 'latex',
    name: 'Latex',
    description: 'Natural rubber material known for its form-fitting properties and high shine',
    category: 'natural',
    properties: ['form-fitting', 'water-resistant', 'high-shine', 'stretchy'],
    alsoKnownAs: ['rubber', 'patent'],
    overlapsWith: ['pvc', 'vinyl', 'pleather'],
    keyDifferences: [
      {
        comparedTo: 'pvc',
        differences: ['Latex is natural rubber', 'PVC is synthetic plastic', 'Latex is more stretchy']
      }
    ],
    commonUses: ['catsuits', 'gloves', 'accessories'],
    bestFor: ['Form-fitting garments', 'Fetish wear', 'Water-resistant items'],
    notRecommendedFor: ['Everyday outerwear', 'Hot climates'],
    careInstructions: ['Store away from heat', 'Use talcum powder', 'Clean with mild soap'],
    sustainability: 'medium',
    breathability: 2,
    stretchiness: 5,
    durability: 3,
    careDifficulty: 4
  },
  {
    id: 'pvc',
    name: 'PVC',
    description: 'Polyvinyl chloride, a synthetic plastic polymer with glossy finish',
    category: 'synthetic',
    properties: ['waterproof', 'glossy', 'durable', 'stiff'],
    alsoKnownAs: ['vinyl', 'plastic'],
    overlapsWith: ['latex', 'vinyl', 'pleather'],
    keyDifferences: [
      {
        comparedTo: 'latex',
        differences: ['PVC is less stretchy', 'PVC is more affordable', 'PVC is easier to clean']
      },
      {
        comparedTo: 'leather',
        differences: ['PVC is vegan', 'PVC is lighter weight', 'PVC has uniform texture']
      }
    ],
    commonUses: ['raincoats', 'statement pieces', 'protective wear'],
    bestFor: ['Rainwear', 'Costume pieces', 'Easy-to-clean items'],
    notRecommendedFor: ['Breathable clothing', 'Comfort-focused garments'],
    careInstructions: ['Wipe clean with damp cloth', 'Avoid high heat'],
    sustainability: 'low',
    breathability: 1,
    stretchiness: 1,
    durability: 4,
    careDifficulty: 2
  },
  {
    id: 'leather',
    name: 'Leather',
    description: 'Treated animal hide, known for durability and developing character over time',
    category: 'animal',
    properties: ['durable', 'breathable', 'ages-well'],
    alsoKnownAs: ['genuine-leather', 'real-leather'],
    overlapsWith: ['pleather', 'suede', 'pvc'],
    keyDifferences: [
      {
        comparedTo: 'pleather',
        differences: ['Leather is natural', 'Pleather is synthetic', 'Leather develops patina']
      }
    ],
    commonUses: ['jackets', 'boots', 'accessories'],
    bestFor: ['Long-lasting items', 'Breathable outerwear', 'Investment pieces'],
    notRecommendedFor: ['Vegan wardrobes', 'Wet climates'],
    careInstructions: ['Condition regularly', 'Keep away from moisture'],
    sustainability: 'low',
    breathability: 4,
    stretchiness: 2,
    durability: 5,
    careDifficulty: 3
  },
  {
    id: 'pleather',
    name: 'Pleather',
    description: 'Plastic leather, a synthetic material designed to imitate real leather',
    category: 'synthetic',
    properties: ['vegan', 'affordable', 'water-resistant', 'consistent'],
    alsoKnownAs: ['faux leather', 'synthetic leather', 'vegan leather'],
    overlapsWith: ['leather', 'pvc', 'vinyl'],
    keyDifferences: [
      {
        comparedTo: 'leather',
        differences: ['Pleather is synthetic', 'Pleather is more affordable', 'Pleather doesn\'t develop patina', 'Pleather is vegan']
      }
    ],
    commonUses: ['jackets', 'bags', 'furniture', 'accessories'],
    bestFor: ['Vegan fashion', 'Budget-friendly items', 'Easy maintenance'],
    notRecommendedFor: ['High-heat environments', 'Items that need to age beautifully'],
    careInstructions: ['Wipe clean with damp cloth', 'Avoid abrasive cleaners', 'Store away from direct heat'],
    sustainability: 'low',
    breathability: 1,
    stretchiness: 1,
    durability: 3,
    careDifficulty: 2
  },
  {
    id: 'suede',
    name: 'Suede',
    description: 'Type of leather with a napped finish, commonly made from the underside of animal skin',
    category: 'animal',
    properties: ['soft', 'textured', 'matte-finish', 'delicate'],
    alsoKnownAs: ['nubuck', 'velvet leather'],
    overlapsWith: ['leather', 'velvet'],
    keyDifferences: [
      {
        comparedTo: 'leather',
        differences: ['Suede has a napped finish', 'Suede is more delicate', 'Suede stains more easily', 'Suede has a matte appearance']
      }
    ],
    commonUses: ['shoes', 'jackets', 'handbags', 'furniture'],
    bestFor: ['Luxury items', 'Soft textures', 'Matte finishes'],
    notRecommendedFor: ['Rainy weather', 'High-traffic items', 'Low-maintenance wardrobes'],
    careInstructions: ['Use suede brush regularly', 'Protect with suede protector spray', 'Clean stains immediately'],
    sustainability: 'low',
    breathability: 3,
    stretchiness: 2,
    durability: 3,
    careDifficulty: 4
  },
  {
    id: 'denim',
    name: 'Denim',
    description: 'Durable cotton twill fabric, typically indigo-dyed',
    category: 'plant-based',
    properties: ['durable', 'sturdy', 'fades-over-time', 'gets-softer-with-wear'],
    alsoKnownAs: ['jean', 'cotton-twill'],
    overlapsWith: ['cotton', 'canvas', 'corduroy'],
    keyDifferences: [
      {
        comparedTo: 'cotton',
        differences: ['Denim is heavier weight', 'Denim has diagonal weave pattern', 'Denim fades distinctively']
      },
      {
        comparedTo: 'corduroy',
        differences: ['Denim has smooth surface', 'Corduroy has ribbed texture', 'Denim is more breathable']
      }
    ],
    commonUses: ['jeans', 'jackets', 'overalls', 'skirts'],
    bestFor: ['Workwear', 'Casual clothing', 'Durable items', 'Everyday wear'],
    notRecommendedFor: ['Formal occasions', 'Very hot/humid weather', 'Lightweight summer clothing'],
    careInstructions: ['Wash inside out', 'Use cold water', 'Air dry to prevent shrinking', 'Wash infrequently to preserve color'],
    sustainability: 'medium',
    breathability: 3,
    stretchiness: 1,
    durability: 5,
    careDifficulty: 2
  },
  {
    id: 'linen',
    name: 'Linen',
    description: 'Lightweight, breathable fabric made from flax plant fibers',
    category: 'plant-based',
    properties: ['breathable', 'absorbent', 'wrinkles-easily', 'gets-softer-with-washing', 'lightweight'],
    alsoKnownAs: ['flax-fabric'],
    overlapsWith: ['cotton', 'ramie'],
    keyDifferences: [
      {
        comparedTo: 'cotton',
        differences: ['Linen is more breathable', 'Linen wrinkles more easily', 'Linen has natural texture', 'Linen is stronger when wet']
      }
    ],
    commonUses: ['summer-suits', 'dresses', 'shirts', 'pants', 'bedding'],
    bestFor: ['Hot weather', 'Travel clothing', 'Summer suits', 'Breathable garments'],
    notRecommendedFor: ['Low-maintenance wardrobes', 'Winter clothing', 'Items needing crisp appearance'],
    careInstructions: ['Machine wash gentle', 'Iron while damp', 'Use medium heat', 'Line dry'],
    sustainability: 'high',
    breathability: 5,
    stretchiness: 1,
    durability: 4,
    careDifficulty: 3
  },
  {
    id: 'corduroy',
    name: 'Corduroy',
    description: 'Textured fabric with vertical ridges (cords or wales)',
    category: 'plant-based',
    properties: ['textured', 'warm', 'durable', 'soft'],
    alsoKnownAs: ['cord', 'needlecord', 'pincord'],
    overlapsWith: ['velvet', 'denim', 'wool'],
    keyDifferences: [
      {
        comparedTo: 'velvet',
        differences: ['Corduroy has ribs', 'Velvet has smooth pile', 'Corduroy is more casual', 'Corduroy is warmer']
      }
    ],
    commonUses: ['pants', 'jackets', 'skirts', 'blazers'],
    bestFor: ['Fall/winter clothing', 'Casual wear', 'Vintage styles', 'Warm pants/jackets'],
    notRecommendedFor: ['Summer heat', 'Formal wear', 'Water activities'],
    careInstructions: ['Machine wash cold', 'Use gentle cycle', 'Air dry', 'Iron inside out'],
    sustainability: 'medium',
    breathability: 2,
    stretchiness: 1,
    durability: 4,
    careDifficulty: 2
  },
  {
    id: 'neoprene',
    name: 'Neoprene',
    description: 'Synthetic rubber with excellent insulation and stretch properties',
    category: 'synthetic',
    properties: ['waterproof', 'insulating', 'stretchy', 'buoyant'],
    alsoKnownAs: ['polychloroprene', 'scuba-fabric'],
    overlapsWith: ['latex', 'spandex', 'rubber'],
    keyDifferences: [
      {
        comparedTo: 'latex',
        differences: ['Neoprene is thicker', 'Neoprene is more insulating', 'Latex is more form-fitting', 'Neoprene is less shiny']
      }
    ],
    commonUses: ['wetsuits', 'laptop-sleeves', 'lunch-bags', 'sportswear'],
    bestFor: ['Water sports', 'Insulated accessories', 'Protective gear', 'Athletic wear'],
    notRecommendedFor: ['Hot weather', 'Breathable clothing', 'Formal wear'],
    careInstructions: ['Rinse with fresh water after use', 'Air dry away from sunlight', 'Avoid high heat'],
    sustainability: 'low',
    breathability: 1,
    stretchiness: 4,
    durability: 4,
    careDifficulty: 2
  },
  {
    id: 'gore-tex',
    name: 'Gore-Tex',
    description: 'Waterproof, breathable membrane technology',
    category: 'synthetic',
    properties: ['waterproof', 'breathable', 'windproof', 'technical'],
    alsoKnownAs: ['gtx', 'waterproof-membrane'],
    overlapsWith: ['polyester', 'nylon'],
    keyDifferences: [
      {
        comparedTo: 'polyester',
        differences: ['Gore-Tex is waterproof', 'Gore-Tex has membrane technology', 'Polyester is not inherently waterproof']
      }
    ],
    commonUses: ['rain-jackets', 'ski-suits', 'hiking-gear', 'outdoor-apparel'],
    bestFor: ['Outdoor activities', 'Rainy weather', 'Technical gear', 'All-season outerwear'],
    notRecommendedFor: ['Casual everyday wear', 'Formal occasions', 'Hot humid weather'],
    careInstructions: ['Wash with technical cleaner', 'Reapply DWR coating periodically', 'Tumble dry low to restore'],
    sustainability: 'medium',
    breathability: 4,
    stretchiness: 1,
    durability: 5,
    careDifficulty: 3
  },
  {
    id: 'fleece',
    name: 'Fleece',
    description: 'Soft, warm synthetic fabric with insulating properties',
    category: 'synthetic',
    properties: ['warm', 'soft', 'lightweight', 'quick-drying'],
    alsoKnownAs: ['polar-fleece', 'microfleece'],
    overlapsWith: ['wool', 'sherpa'],
    keyDifferences: [
      {
        comparedTo: 'wool',
        differences: ['Fleece is synthetic', 'Fleece dries faster', 'Wool is naturally moisture-wicking', 'Fleece is less itchy']
      }
    ],
    commonUses: ['jackets', 'sweaters', 'blankets', 'activewear'],
    bestFor: ['Outdoor activities', 'Cold weather', 'Casual wear', 'Travel clothing'],
    notRecommendedFor: ['Formal wear', 'Hot weather', 'Wind protection without shell'],
    careInstructions: ['Machine wash cold', 'Use mild detergent', 'Air dry or tumble dry low', 'Avoid fabric softener'],
    sustainability: 'low',
    breathability: 3,
    stretchiness: 2,
    durability: 4,
    careDifficulty: 1
  },
  {
    id: 'merino-wool',
    name: 'Merino Wool',
    description: 'Fine, soft wool from Merino sheep with excellent temperature regulation',
    category: 'animal',
    properties: ['temperature-regulating', 'moisture-wicking', 'odor-resistant', 'soft'],
    alsoKnownAs: ['merino', 'fine-wool'],
    overlapsWith: ['wool', 'cashmere'],
    keyDifferences: [
      {
        comparedTo: 'regular-wool',
        differences: ['Merino is softer', 'Merino is less itchy', 'Merino has better moisture-wicking', 'Merino is finer']
      }
    ],
    commonUses: ['base-layers', 'socks', 'travel-clothing', 'activewear'],
    bestFor: ['Travel clothing', 'All-season wear', 'Odor control', 'Comfortable layering'],
    notRecommendedFor: ['Machinery areas (can melt)', 'High-abrasion activities', 'Budget-conscious buyers'],
    careInstructions: ['Hand wash or gentle cycle', 'Use wool-specific detergent', 'Lay flat to dry', 'Avoid high heat'],
    sustainability: 'medium',
    breathability: 5,
    stretchiness: 3,
    durability: 3,
    careDifficulty: 3
  },
  {
    id: 'polyester',
    name: 'Polyester',
    description: 'Synthetic fabric known for durability, wrinkle resistance, and quick drying',
    category: 'synthetic',
    properties: ['durable', 'wrinkle-resistant', 'quick-drying', 'colorfast'],
    alsoKnownAs: ['poly', 'dacron', 'microfiber'],
    overlapsWith: ['nylon', 'rayon'],
    keyDifferences: [
      {
        comparedTo: 'cotton',
        differences: ['Polyester dries faster', 'Polyester is more durable', 'Cotton is more breathable', 'Polyester is synthetic']
      }
    ],
    commonUses: ['activewear', 'travel-clothing', 'outdoor-gear', 'blends'],
    bestFor: ['Travel clothing', 'Activewear', 'Outdoor gear', 'Easy-care items'],
    notRecommendedFor: ['Hot humid weather', 'Sensitive skin', 'Natural fiber purists'],
    careInstructions: ['Machine washable', 'Tumble dry low', 'Iron on low if needed', 'Avoid high heat'],
    sustainability: 'low',
    breathability: 2,
    stretchiness: 1,
    durability: 5,
    careDifficulty: 1
  },
  {
    id: 'spandex',
    name: 'Spandex',
    description: 'Highly elastic synthetic fiber also known as Lycra or elastane',
    category: 'synthetic',
    properties: ['stretchy', 'form-fitting', 'durable', 'lightweight'],
    alsoKnownAs: ['lycra', 'elastane'],
    overlapsWith: ['latex', 'nylon'],
    keyDifferences: [
      {
        comparedTo: 'latex',
        differences: ['Spandex is more breathable', 'Spandex is less shiny', 'Latex is waterproof', 'Spandex is more common in blends']
      }
    ],
    commonUses: ['activewear', 'swimwear', 'shapewear', 'dancewear'],
    bestFor: ['Form-fitting clothing', 'Activewear', 'Comfortable stretch', 'Blends with other fabrics'],
    notRecommendedFor: ['Heat exposure', 'Chlorine exposure (in pure form)', 'High-friction areas without protection'],
    careInstructions: ['Wash in cold water', 'Avoid bleach', 'Line dry', 'Use gentle detergent'],
    sustainability: 'low',
    breathability: 3,
    stretchiness: 5,
    durability: 4,
    careDifficulty: 2
  }
];