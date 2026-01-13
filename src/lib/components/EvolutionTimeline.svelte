<!-- src/lib/components/EvolutionTimeline.svelte -->
<script lang="ts">
  import type { ClothingItem } from '$lib/types/clothing';
  
  export let suits: ClothingItem[] = [];
  export let category: string;
  
  // Filter suits by category and sort by era/year
  $: timelineSuits = suits
    .filter(s => s.category === category && s.era)
    .sort((a, b) => {
      const eraOrder: Record<string, number> = { 
        vintage: 1, 
        retro: 2, 
        classic: 3, 
        modern: 4, 
        futuristic: 5 
      };
      return (eraOrder[a.era!] || 0) - (eraOrder[b.era!] || 0);
    });
</script>

<div class="mb-12">
  <h3 class="text-xl font-semibold mb-6 text-slate-800">
    Evolution Timeline: {category.replace('-', ' ').toUpperCase()}
  </h3>
  
  {#if timelineSuits.length === 0}
    <p class="text-slate-500 italic">No evolution data available for this category.</p>
  {:else}
    <div class="relative pl-8 border-l-2 border-slate-300">
      {#each timelineSuits as suit, index}
        <div class="mb-8 relative">
          <!-- Timeline dot -->
          <div class="absolute -left-[11px] w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
          
          <!-- Content -->
          <div class="ml-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                {suit.era?.toUpperCase()}
              </span>
              {#if suit.yearIntroduced}
                <span class="text-slate-500 text-sm">({suit.yearIntroduced})</span>
              {/if}
            </div>
            
            <h4 class="text-lg font-medium text-slate-900 mb-1">{suit.name}</h4>
            
            {#if suit.evolutionNotes}
              <p class="text-slate-600 mb-2 text-sm">{suit.evolutionNotes}</p>
            {/if}
            
            <!-- Key features -->
            <div class="flex flex-wrap gap-2 mt-3">
              {#each suit.features?.slice(0, 3) || [] as feature}
                <span class="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                  {feature}
                </span>
              {/each}
            </div>
            
            <!-- Materials -->
            {#if suit.compatibleFabrics}
              <div class="mt-2">
                <span class="text-sm text-slate-500">Materials: </span>
                <span class="text-sm text-slate-700">
                  {suit.compatibleFabrics.slice(0, 3).join(', ')}
                  {#if suit.compatibleFabrics.length > 3}...{/if}
                </span>
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>