<!-- src/lib/components/ClothingCard.svelte -->
<script lang="ts">
  import type { ClothingItem } from '$lib/types/clothing';
  import { clothingCategories } from '$lib/data/clothingCategories';
  
  export let item: ClothingItem;
  export let showCategory = true;
  export let showFabrics = true;
  export let showContexts = true;
  export let compact = false;
  
  const categoryInfo = clothingCategories.find(c => c.id === item.category);
</script>

<a 
  href="/clothing/{item.category}/{item.id}" 
  class="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow {compact ? 'p-4' : 'p-6'}"
>
  <div class="flex justify-between items-start mb={compact ? '2' : '4'}">
    <div>
      {#if showCategory && categoryInfo}
        <div class="flex items-center mb={compact ? '1' : '2'}">
          <span class="text-lg mr-2">{categoryInfo.icon}</span>
          <span class="text-sm text-gray-600">{categoryInfo.name}</span>
        </div>
      {/if}
      <h3 class="{compact ? 'font-semibold' : 'text-lg font-semibold'}">{item.name}</h3>
      {#if !compact}
        <p class="text-gray-600 text-sm mt-1">{item.description}</p>
      {/if}
    </div>
  </div>
  
  {#if showFabrics && !compact}
    <div class="mb-4">
      <h4 class="text-sm font-medium mb-2">Compatible Fabrics:</h4>
      <div class="flex flex-wrap gap-2">
        {#each item.compatibleFabrics.slice(0, 3) as fabric}
          <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
            {fabric}
          </span>
        {/each}
        {#if item.compatibleFabrics.length > 3}
          <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
            +{item.compatibleFabrics.length - 3} more
          </span>
        {/if}
      </div>
    </div>
  {/if}
  
  {#if showContexts}
    <div>
      <h4 class="text-sm font-medium mb-2">Best For:</h4>
      <div class="flex flex-wrap gap-2">
        {#each item.bestContexts.slice(0, compact ? 2 : 3) as context}
          <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
            {context}
          </span>
        {/each}
      </div>
    </div>
  {/if}
</a>