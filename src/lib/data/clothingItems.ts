// src/lib/data/clothingItems.ts
import type { ClothingItem } from '$lib/types/clothing';

export const clothingItems: ClothingItem[] = [
  // Jumpsuits Category
  {
    id: 'latex-catsuit',
    name: 'Latex Catsuit',
    category: 'jumpsuits',
    compatibleFabrics: ['latex', 'pvc'],
    description: 'Full-body form-fitting garment',
    bestContexts: ['alternative-fashion', 'parties', 'costumes'],
    
    // NEW FIELDS:
    brand: 'libidex',
    priceRange: '$$$',
    sustainability: 'low',
    material: 'latex',
    waterResistance: 'None',
    durability: 'Medium',
    weight: 'Light',
    trending: true,
    trendingScore: 7,
    trendSeason: 'Spring 2024',
    popularityChange: 'stable'
  },
  // Water Suits Category
  {
    id: 'wetsuit',
    name: 'Wetsuit',
    category: 'water-suits',
    compatibleFabrics: ['neoprene', 'spandex'],
    description: 'Insulated suit for water sports and diving',
    bestContexts: ['scuba-diving', 'surfing', 'water-sports', 'cold-water'],
    
    // NEW FIELDS:
    brand: 'patagonia',
    priceRange: '$$$',
    sustainability: 'high',
    material: 'neoprene',
    waterResistance: 'Waterproof',
    insulation: 'Medium',
    durability: 'High',
    weight: 'Medium',
    trending: true,
    trendingScore: 8,
    trendSeason: 'Summer 2024',
    popularityChange: 'up'
  },
  {
    id: 'drysuit',
    name: 'Drysuit',
    category: 'water-suits',
    compatibleFabrics: ['gore-tex', 'nylon', 'rubber'],
    description: 'Waterproof suit for extreme cold water or hazardous environments',
    bestContexts: ['ice-diving', 'industrial-work', 'kayaking', 'scientific']
  },
  {
    id: 'rash-guard',
    name: 'Rash Guard',
    category: 'water-suits',
    compatibleFabrics: ['spandex', 'polyester', 'lycra'],
    description: 'Tight-fitting shirt for protection against sun and chafing',
    bestContexts: ['surfing', 'swimming', 'snorkeling', 'water-park']
  },
  
  // Snow Suits Category
  {
    id: 'insulated-snowsuit',
    name: 'Insulated Snowsuit',
    category: 'snow-suits',
    compatibleFabrics: ['gore-tex', 'polyester', 'fleece'],
    description: 'Heavily insulated suit for extreme cold',
    bestContexts: ['skiing', 'snowboarding', 'arctic-travel', 'winter-sports']
  },
  {
    id: 'shell-snowsuit',
    name: 'Shell Snowsuit',
    category: 'snow-suits',
    compatibleFabrics: ['gore-tex', 'nylon'],
    description: 'Waterproof outer layer worn over insulation',
    bestContexts: ['variable-temperatures', 'layering-system', 'backcountry']
  },
  {
    id: 'softshell-snowsuit',
    name: 'Softshell Snowsuit',
    category: 'snow-suits',
    compatibleFabrics: ['fleece', 'polyester'],
    description: 'Breathable, flexible suit for active snow sports',
    bestContexts: ['ski-touring', 'cross-country', 'active-winter-sports']
  },
  {
    id: 'bib-snowsuit',
    name: 'Bib Snowsuit',
    category: 'snow-suits',
    compatibleFabrics: ['gore-tex', 'nylon', 'polyester'],
    description: 'Suspender-style snow pants with attached bib',
    bestContexts: ['deep-snow', 'snowmobiling', 'kids-winter-wear']
  },
  {
    id: 'one-piece-snowsuit',
    name: 'One-Piece Snowsuit',
    category: 'snow-suits',
    compatibleFabrics: ['gore-tex', 'polyester', 'fleece'],
    description: 'Complete suit eliminating cold gaps',
    bestContexts: ['extreme-cold', 'childrens-wear', 'ski-patrol']
  },
  {
    id: 'performance-race-suit',
    name: 'Alpine Speed Racer Suit',
    category: 'snow-suits',
    brand: 'spyder',
    compatibleFabrics: ['lycra', 'polyester-pique'],
    description: 'Anatomically designed aerodynamic suit for competitive racing.',
    bestContexts: ['ski-racing', 'slalom', 'speed-trials'],
    priceRange: '$$$$',
    sustainability: 'medium',
    material: 'Micro-Pique Knit',
    waterResistance: 'Light',
    insulation: 'None',
    durability: 'High',
    weight: 'Light',
    trending: false,
    trendingScore: 5,
    features: ['Aerodynamic', 'Grip-Elastic Hem', 'Removable Padding']
  },
  {
    id: 'luxury-illusion-suit',
    name: 'Sommet Belted One-Piece',
    category: 'snow-suits',
    brand: 'cordova',
    compatibleFabrics: ['softshell', 'fleece', 'nylon'],
    description: 'Bonded fleece-lined suit with a puffer-style top and sculpted trousers.',
    bestContexts: ['après-ski', 'resort-skiing', 'winter-fashion'],
    priceRange: '$$$$',
    sustainability: 'medium',
    material: 'Italian Bonded Fabric',
    waterResistance: 'High',
    insulation: 'Medium',
    durability: 'Medium',
    weight: 'Medium',
    trending: true,
    trendingScore: 9,
    trendSeason: 'Winter 2025',
    popularityChange: 'up',
    features: ['Waterproof Membrane', '4-Way Stretch', 'Oversized Collar']
  },
  {
    id: 'retro-puffer-suit',
    name: 'The Neon Shredder',
    category: 'snow-suits',
    brand: 'tipsy-elves',
    compatibleFabrics: ['polyester', 'synthetic-down'],
    description: 'Bright 80s-inspired insulated jumpsuit with bold geometric patterns.',
    bestContexts: ['themed-ski-days', 'snow-tubing', 'social-skiing'],
    priceRange: '$$',
    sustainability: 'low',
    material: 'Polyester',
    waterResistance: 'Medium',
    insulation: 'Heavy',
    durability: 'Medium',
    weight: 'Heavy',
    trending: true,
    trendingScore: 8,
    trendSeason: 'Winter 2024',
    popularityChange: 'stable',
    features: ['Hidden Pass Pocket', 'Waist Cinch', 'High Visibility']
  },
  
  // Protective Suits Category
  {
    id: 'hazmat-suit',
    name: 'Hazmat Suit',
    category: 'protective-suits',
    compatibleFabrics: ['tyvek', 'pvc', 'rubber'],
    description: 'Full-body protection against hazardous materials',
    bestContexts: ['chemical-handling', 'biohazard', 'industrial-cleanup', 'emergency-response']
  },
  {
    id: 'firefighter-suit',
    name: 'Firefighter Turnout Gear',
    category: 'protective-suits',
    compatibleFabrics: ['nomex', 'kevlar', 'pbi'],
    description: 'Heat and flame resistant protective suit',
    bestContexts: ['firefighting', 'industrial-fire', 'rescue-operations']
  },
  {
    id: 'welding-suit',
    name: 'Welding Suit',
    category: 'protective-suits',
    compatibleFabrics: ['leather', 'fire-resistant-cotton'],
    description: 'Protection against sparks and heat',
    bestContexts: ['welding', 'metalwork', 'foundry-work']
  },
  {
    id: 'racing-suit',
    name: 'Racing Suit',
    category: 'protective-suits',
    compatibleFabrics: ['nomex', 'fire-resistant-polyester'],
    description: 'Fire-resistant suit for motorsports',
    bestContexts: ['auto-racing', 'motocross', 'motorcycle-racing']
  },
  
  // Costume Suits Category
  {
    id: 'superhero-suit',
    name: 'Superhero Suit',
    category: 'costume-suits',
    compatibleFabrics: ['spandex', 'latex', 'pvc'],
    description: 'Form-fitting costume with character design',
    bestContexts: ['cosplay', 'halloween', 'comic-con', 'film-production']
  },
  {
    id: 'mascot-suit',
    name: 'Mascot Suit',
    category: 'costume-suits',
    compatibleFabrics: ['faux-fur', 'polyester', 'foam'],
    description: 'Character costume with padding and structure',
    bestContexts: ['sports-events', 'theme-parks', 'promotional-events']
  },
  {
    id: 'medieval-armor',
    name: 'Medieval Armor Costume',
    category: 'costume-suits',
    compatibleFabrics: ['pleather', 'metal', 'chainmail'],
    description: 'Historical or fantasy armor reproduction',
    bestContexts: ['renaissance-faires', 'larping', 'theater', 'historical-reenactment']
  },
  
  // Rave & Party Suits Category
  {
    id: 'light-up-ravesuit',
    name: 'Light-Up Ravesuit',
    category: 'rave-suits',
    compatibleFabrics: ['spandex', 'latex', 'pvc'],
    description: 'Electroluminescent or LED-equipped suit',
    bestContexts: ['raves', 'music-festivals', 'parties', 'night-clubs']
  },
  {
    id: 'cyberpunk-suit',
    name: 'Cyberpunk Suit',
    category: 'rave-suits',
    compatibleFabrics: ['latex', 'pleather', 'pvc', 'spandex'],
    description: 'Futuristic outfit with tech elements',
    bestContexts: ['cyberpunk-events', 'futuristic-parties', 'tech-raves']
  },
  {
    id: 'glow-in-dark-suit',
    name: 'Glow-in-the-Dark Suit',
    category: 'rave-suits',
    compatibleFabrics: ['spandex', 'polyester'],
    description: 'Phosphorescent or UV-reactive fabric',
    bestContexts: ['blacklight-parties', 'glow-parties', 'night-raves']
  },
  {
    id: 'kandi-suit',
    name: 'Kandi Suit',
    category: 'rave-suits',
    compatibleFabrics: ['spandex', 'mesh'],
    description: 'Suit decorated with beaded bracelets and accessories',
    bestContexts: ['plur-events', 'edm-festivals', 'kandi-kid-culture']
  },
  
  // Travel Suits Category
  {
    id: 'travel-jumpsuit',
    name: 'Travel Jumpsuit',
    category: 'travel-suits',
    compatibleFabrics: ['linen', 'cotton', 'merino-wool', 'polyester'],
    description: 'Comfortable, wrinkle-resistant one-piece for travel',
    bestContexts: ['long-flights', 'train-travel', 'backpacking', 'minimalist-travel']
  },
  {
    id: 'pocket-jumpsuit',
    name: 'Pocket Jumpsuit',
    category: 'travel-suits',
    compatibleFabrics: ['cotton', 'polyester-blend'],
    description: 'Jumpsuit with multiple secure pockets for travel essentials',
    bestContexts: ['city-travel', 'photography-trips', 'hands-free-travel']
  },
  {
    id: 'convertible-jumpsuit',
    name: 'Convertible Jumpsuit',
    category: 'travel-suits',
    compatibleFabrics: ['linen', 'cotton'],
    description: 'Transforms into different clothing items for versatility',
    bestContexts: ['multi-climate-travel', 'pack-light-travel', 'extended-trips']
  },
  
  // Shirts & Tops Category
  {
    id: 'cotton-shirt',
    name: 'Cotton T-Shirt',
    category: 'shirts',
    compatibleFabrics: ['cotton', 'linen'],
    description: 'Basic comfortable top',
    bestContexts: ['casual', 'everyday', 'summer', 'travel']
  },
  {
    id: 'merino-wool-base-layer',
    name: 'Merino Wool Base Layer',
    category: 'shirts',
    compatibleFabrics: ['merino-wool'],
    description: 'Temperature regulating undershirt',
    bestContexts: ['hiking', 'travel', 'cold-weather', 'multi-day-trips']
  },
  
  // Jackets & Outerwear Category
  {
    id: 'denim-jacket',
    name: 'Denim Jacket',
    category: 'jackets',
    compatibleFabrics: ['denim', 'cotton'],
    description: 'Classic casual outerwear',
    bestContexts: ['casual', 'outdoor', 'concerts', 'everyday']
  },
  {
    id: 'linen-blazer',
    name: 'Linen Blazer',
    category: 'jackets',
    compatibleFabrics: ['linen'],
    description: 'Lightweight summer jacket',
    bestContexts: ['summer-weddings', 'smart-casual', 'tropical', 'business-casual']
  },
  
  // Pants & Legwear Category
  {
    id: 'linen-pants',
    name: 'Linen Pants',
    category: 'pants',
    compatibleFabrics: ['linen', 'linen-cotton-blend'],
    description: 'Breathable summer trousers',
    bestContexts: ['summer', 'tropical-travel', 'casual', 'beach']
  },
  {
    id: 'corduroy-pants',
    name: 'Corduroy Pants',
    category: 'pants',
    compatibleFabrics: ['corduroy'],
    description: 'Warm textured trousers',
    bestContexts: ['fall', 'winter', 'casual', 'vintage-style']
  }
];