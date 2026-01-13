import type { Trend } from '$lib/types/clothing';

export const trends: Trend[] = [
  {
    id: 'techwear-2024',
    name: 'Techwear Revolution',
    description: 'Functional, technical clothing meets urban fashion',
    season: 'Spring 2024',
    categories: ['jackets', 'pants', 'protective-suits'],
    featuredItems: ['cyberpunk-suit', 'shell-snowsuit'],
    colorPalette: ['#000000', '#2D2D2D', '#4A4A4A', '#6B6B6B'],
    materials: ['gore-tex', 'cordura', 'technical-polyester']
  },
  {
    id: 'sustainable-swim',
    name: 'Sustainable Swimwear',
    description: 'Eco-friendly materials for water sports',
    season: 'Summer 2024',
    categories: ['water-suits', 'shorts'],
    featuredItems: ['wetsuit', 'rash-guard'],
    colorPalette: ['#1E88E5', '#26C6DA', '#4CAF50', '#81C784'],
    materials: ['recycled-polyester', 'econyl', 'organic-cotton']
  },
  {
    id: 'winter-performance',
    name: 'Advanced Winter Performance',
    description: 'High-tech insulation and weather protection',
    season: 'Winter 2024',
    categories: ['snow-suits', 'jackets'],
    featuredItems: ['insulated-snowsuit', 'one-piece-snowsuit'],
    colorPalette: ['#FFFFFF', '#E3F2FD', '#90CAF9', '#2196F3'],
    materials: ['primaloft', 'gore-tex', 'merino-wool']
  },
  {
    id: 'festival-fashion',
    name: 'Festival & Rave Fashion',
    description: 'Bold, expressive clothing for music events',
    season: 'Summer 2024',
    categories: ['rave-suits', 'costume-suits'],
    featuredItems: ['light-up-ravesuit', 'kandi-suit'],
    colorPalette: ['#E91E63', '#9C27B0', '#FF9800', '#FFEB3B'],
    materials: ['latex', 'pvc', 'spandex', 'mesh']
  }
];