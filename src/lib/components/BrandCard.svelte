<script lang="ts">
  import type { Brand } from '$lib/types/clothing';
  export let brand: Brand;
</script>

<div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
  <h3 class="text-lg font-semibold mb-2">{brand.name}</h3>
  <p class="text-gray-600 text-sm mb-4">{brand.description}</p>
  
  <div class="flex justify-between items-center mb-4">
    <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
      {brand.priceRange}
    </span>
    <div class="flex items-center">
      {#each Array(brand.sustainabilityRating || 0) as _, i}
        <span class="text-green-500">★</span>
      {/each}
      {#each Array(5 - (brand.sustainabilityRating || 0)) as _, i}
        <span class="text-gray-300">★</span>
      {/each}
    </div>
  </div>
  
  <div class="text-sm text-gray-500">
    Specialty: {brand.specialty?.join(', ')}
  </div>
</div>