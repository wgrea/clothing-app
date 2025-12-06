<!-- src/lib/components/FabricCard.svelte -->
<script lang="ts">
  import type { Fabric, FabricCategory } from '$lib/types/fabric';
  export let fabric: Fabric;
  
  // Type-safe category colors
  const categoryColors: Record<FabricCategory, string> = {
    'natural': 'bg-green-100 text-green-800',
    'synthetic': 'bg-blue-100 text-blue-800',
    'animal': 'bg-amber-100 text-amber-800',
    'plant-based': 'bg-emerald-100 text-emerald-800'
  };
  
  // Get color class safely
  function getCategoryColor(category: FabricCategory): string {
    return categoryColors[category] || 'bg-gray-100 text-gray-800';
  }
</script>

<a 
  href={`/fabrics/${fabric.id}`}
  class="block bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 overflow-hidden group hover:border-gray-300"
>
  <div class="p-5">
    <!-- Header -->
    <div class="flex justify-between items-start mb-3">
      <div>
        <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {fabric.name}
        </h3>
        <div class="flex items-center gap-2 mt-1">
          <span class={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(fabric.category)}`}>
            {fabric.category}
          </span>
          {#each fabric.alsoKnownAs.slice(0, 2) as alias}
            <span class="text-xs text-gray-500">aka {alias}</span>
          {/each}
        </div>
      </div>
      <div class="text-2xl opacity-70 group-hover:opacity-100 transition-opacity">
        {#if fabric.category === 'natural'}
          🌿
        {:else if fabric.category === 'synthetic'}
          🧪
        {:else if fabric.category === 'animal'}
          🐮
        {:else}
          🌱
        {/if}
      </div>
    </div>

    <!-- Description -->
    <p class="text-gray-600 text-sm mb-4 line-clamp-2">
      {fabric.description}
    </p>

    <!-- Properties -->
    <div class="mb-4">
      <div class="text-xs font-semibold text-gray-500 mb-2">KEY PROPERTIES</div>
      <div class="flex flex-wrap gap-1">
        {#each fabric.properties.slice(0, 4) as property}
          <span class="px-2 py-1 bg-gray-50 text-gray-700 rounded-md text-xs border border-gray-200">
            {property}
          </span>
        {/each}
        {#if fabric.properties.length > 4}
          <span class="px-2 py-1 bg-gray-50 text-gray-500 rounded-md text-xs border border-gray-200">
            +{fabric.properties.length - 4} more
          </span>
        {/if}
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="grid grid-cols-3 gap-3 mb-4">
      <div class="text-center">
        <div class="text-xs text-gray-500 mb-1">Breathability</div>
        <div class="flex justify-center">
          {#each Array(fabric.breathability).fill(0) as _, i}
            <div class="w-2 h-2 bg-blue-500 rounded-full mx-0.5"></div>
          {/each}
          {#each Array(5 - fabric.breathability).fill(0) as _, i}
            <div class="w-2 h-2 bg-gray-200 rounded-full mx-0.5"></div>
          {/each}
        </div>
      </div>
      <div class="text-center">
        <div class="text-xs text-gray-500 mb-1">Durability</div>
        <div class="flex justify-center">
          {#each Array(fabric.durability).fill(0) as _, i}
            <div class="w-2 h-2 bg-green-500 rounded-full mx-0.5"></div>
          {/each}
          {#each Array(5 - fabric.durability).fill(0) as _, i}
            <div class="w-2 h-2 bg-gray-200 rounded-full mx-0.5"></div>
          {/each}
        </div>
      </div>
      <div class="text-center">
        <div class="text-xs text-gray-500 mb-1">Stretch</div>
        <div class="flex justify-center">
          {#each Array(fabric.stretchiness).fill(0) as _, i}
            <div class="w-2 h-2 bg-purple-500 rounded-full mx-0.5"></div>
          {/each}
          {#each Array(5 - fabric.stretchiness).fill(0) as _, i}
            <div class="w-2 h-2 bg-gray-200 rounded-full mx-0.5"></div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Best For -->
    <div>
      <div class="text-xs font-semibold text-gray-500 mb-2">BEST FOR</div>
      <div class="flex flex-wrap gap-1">
        {#each fabric.bestFor.slice(0, 3) as use}
          <span class="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">
            {use}
          </span>
        {/each}
        {#if fabric.bestFor.length > 3}
          <span class="px-2 py-1 bg-gray-50 text-gray-500 rounded-md text-xs">
            +{fabric.bestFor.length - 3} more
          </span>
        {/if}
      </div>
    </div>
  </div>
</a>