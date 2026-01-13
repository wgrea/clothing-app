<!-- src/lib/components/OnePieceFilter.svelte -->
<script lang="ts">
  import type { ClothingItem } from '$lib/types/clothing';
  
  export let suits: ClothingItem[] = [];
  
  let selectedType = 'all';
  let selectedFabric = 'all';
  let selectedSeason = 'all';
  
  // Generate unique values
  const types = ['all', ...new Set(suits.map(s => s.category))];
  const fabrics = ['all', ...new Set(suits.flatMap(s => s.compatibleFabrics))];
  const seasons = ['all', 'Spring', 'Summer', 'Fall', 'Winter'];
  
  // Emit filtered results
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  $: {
    const filteredSuits = suits.filter(suit => {
      if (selectedType !== 'all' && suit.category !== selectedType) return false;
      if (selectedFabric !== 'all' && !suit.compatibleFabrics.includes(selectedFabric)) return false;
      if (selectedSeason !== 'all' && suit.season !== selectedSeason && suit.season !== 'All') return false;
      return true;
    });
    
    dispatch('filter', { suits: filteredSuits });
  }
</script>

<div class="mb-8">
  <div class="flex flex-wrap gap-4 mb-6 p-4 bg-slate-50 rounded-lg">
    <!-- Type Filter -->
    <div class="flex-1 min-w-[200px]">
      <label for="type-filter" class="block text-sm font-medium text-slate-700 mb-1">
        Category
      </label>
      <select 
        id="type-filter"
        bind:value={selectedType} 
        class="w-full px-3 py-2 border border-slate-300 rounded-md bg-white"
        aria-label="Filter by category type"
      >
        {#each types as type}
          <option value={type}>
            {type === 'all' ? 'All Categories' : type.replace('-', ' ')}
          </option>
        {/each}
      </select>
    </div>
    
    <!-- Fabric Filter -->
    <div class="flex-1 min-w-[200px]">
      <label for="fabric-filter" class="block text-sm font-medium text-slate-700 mb-1">
        Fabric
      </label>
      <select 
        id="fabric-filter"
        bind:value={selectedFabric} 
        class="w-full px-3 py-2 border border-slate-300 rounded-md bg-white"
        aria-label="Filter by fabric type"
      >
        {#each fabrics as fabric}
          <option value={fabric}>
            {fabric === 'all' ? 'All Fabrics' : fabric}
          </option>
        {/each}
      </select>
    </div>
    
    <!-- Season Filter -->
    <div class="flex-1 min-w-[200px]">
      <label for="season-filter" class="block text-sm font-medium text-slate-700 mb-1">
        Season
      </label>
      <select 
        id="season-filter"
        bind:value={selectedSeason} 
        class="w-full px-3 py-2 border border-slate-300 rounded-md bg-white"
        aria-label="Filter by season"
      >
        {#each seasons as season}
          <option value={season}>
            {season === 'all' ? 'All Seasons' : season}
          </option>
        {/each}
      </select>
    </div>
  </div>
</div>