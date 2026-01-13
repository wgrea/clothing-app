<script lang="ts">
  import type { Trend } from '$lib/types/clothing';
  export let trend: Trend;
</script>

<div class="bg-linear-to-r from-purple-50 to-pink-50 rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
  <div class="flex justify-between items-start mb-4">
    <div>
      <h3 class="text-lg font-semibold mb-1">{trend.name}</h3>
      <p class="text-sm text-gray-600">{trend.season}</p>
    </div>
    <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
      Trending
    </span>
  </div>
  
  <p class="text-gray-700 mb-4">{trend.description}</p>
  
  <div class="flex flex-wrap gap-2 mb-4">
    {#each trend.colorPalette?.slice(0, 4) || [] as color}
      <div 
        class="w-6 h-6 rounded-full border border-gray-300"
        style="background-color: {color}"
        title="{color}"
      ></div>
    {/each}
  </div>
  
  <div class="text-sm text-gray-600">
    Materials: {trend.materials?.join(', ')}
  </div>
</div>