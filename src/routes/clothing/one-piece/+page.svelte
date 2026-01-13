<!-- src/routes/clothing/one-piece/+page.svelte -->
<script lang="ts">
  import { getOnePieceSuits, getSnowsuits } from '$lib/utils/suitFilters';
  import ClothingCard from '$lib/components/ClothingCard.svelte';
  import SnowsuitComparison from '$lib/components/SnowsuitComparison.svelte';
  import OnePieceFilter from '$lib/components/OnePieceFilter.svelte';
  import EvolutionTimeline from '$lib/components/EvolutionTimeline.svelte'; // ADD THIS
  
  const allSuits = getOnePieceSuits();
  const snowsuits = getSnowsuits();
  
  let filteredSuits = allSuits;
  
  // Get unique values for filter dropdowns
  const types = ['all', ...new Set(allSuits.map(s => s.category))];
  const fabrics = ['all', ...new Set(allSuits.flatMap(s => s.compatibleFabrics))];
  
  // Handle filter changes
  function handleFilterChange(event: CustomEvent<{ 
    type: string; 
    fabric: string; 
    season: string;
  }>) {
    const { type, fabric, season } = event.detail;
    
    filteredSuits = allSuits.filter(suit => {
      if (type !== 'all' && suit.category !== type) return false;
      if (fabric !== 'all' && !suit.compatibleFabrics.includes(fabric)) return false;
      if (season !== 'all' && suit.season !== season && suit.season !== 'All') return false;
      return true;
    });
  }
  
  // Group by category
  const suitsByCategory = allSuits.reduce((acc, suit) => {
    if (!acc[suit.category]) acc[suit.category] = [];
    acc[suit.category].push(suit);
    return acc;
  }, {} as Record<string, typeof allSuits>);
</script>

<div class="p-8 max-w-7xl mx-auto">
  <!-- ... existing header and filter ... -->
  
  <!-- Evolution Section -->
  <section id="evolution" class="mb-16">
    <h2 class="text-2xl font-semibold mb-8 text-slate-800">📜 Evolution of One-Piece Suits</h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Only show timelines for categories that have era data -->
      {#if allSuits.filter(s => s.category === 'catsuits' && s.era).length > 0}
        <EvolutionTimeline 
          suits={allSuits} 
          category="catsuits" 
        />
      {/if}
      
      {#if allSuits.filter(s => s.category === 'protective-suits' && s.era).length > 0}
        <EvolutionTimeline 
          suits={allSuits} 
          category="protective-suits" 
        />
      {/if}
      
      {#if allSuits.filter(s => s.category === 'jumpsuits' && s.era).length > 0}
        <EvolutionTimeline 
          suits={allSuits} 
          category="jumpsuits" 
        />
      {/if}
      
      {#if allSuits.filter(s => s.category === 'snow-suits' && s.era).length > 0}
        <EvolutionTimeline 
          suits={allSuits} 
          category="snow-suits" 
        />
      {/if}
    </div>
  </section>
  
  <!-- ... rest of your page ... -->
</div>