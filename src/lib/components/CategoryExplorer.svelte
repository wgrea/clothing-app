<!-- src/lib/components/CategoryExplorer.svelte -->
<script lang="ts">
  import type { ClothingItem } from '$lib/types/clothing';
  
  export let suits: ClothingItem[];
  export let category: string;
  
  // Group by subcategory if available
  $: groupedSuits = suits
    .filter(s => s.category === category)
    .reduce((acc, suit) => {
      const key = suit.subcategory || 'general';
      if (!acc[key]) acc[key] = [];
      acc[key].push(suit);
      return acc;
    }, {} as Record<string, ClothingItem[]>);
</script>

<div class="mb-12">
  <h3 class="text-xl font-semibold mb-6 text-slate-800">
    {category.replace('-', ' ').toUpperCase()}: Variety Explorer
  </h3>
  
  {#each Object.entries(groupedSuits) as [subcategory, items]}
    <div class="mb-8">
      <h4 class="text-lg font-medium text-slate-700 mb-4 capitalize">
        {subcategory === 'general' ? 'General' : subcategory.replace('-', ' ')}
        <span class="text-sm text-slate-500 ml-2">({items.length})</span>
      </h4>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each items as suit}
          <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h5 class="font-medium text-slate-900 mb-2">{suit.name}</h5>
            <p class="text-sm text-slate-600 mb-3">{suit.description}</p>
            
            <!-- Era badge -->
            {#if suit.era}
              <span class="inline-block px-2 py-1 text-xs bg-slate-200 text-slate-700 rounded mr-2">
                {suit.era}
              </span>
            {/if}
            
            <!-- Colors -->
            {#if suit.colorOptions}
              <div class="mt-3">
                <span class="text-xs text-slate-500">Colors:</span>
                <div class="flex flex-wrap gap-1 mt-1">
                  {#each suit.colorOptions.slice(0, 3) as color}
                    <span 
                      class="w-6 h-6 rounded-full border border-slate-300"
                      style="background-color: {color.toLowerCase()};"
                      title={color}
                    ></span>
                  {/each}
                  {#if suit.colorOptions.length > 3}
                    <span class="text-xs text-slate-500">+{suit.colorOptions.length - 3} more</span>
                  {/if}
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>