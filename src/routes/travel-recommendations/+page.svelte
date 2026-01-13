<!-- src/routes/travel-recommendations/+page.svelte -->
<script lang="ts">
  import type { TravelRecommendation } from '$lib/utils/travelFabrics';
  
  export let fabric: TravelRecommendation;
</script>

<div class="bg-white rounded-lg shadow p-6 h-full">
  <div class="flex items-start justify-between mb-4">
    <div>
      <h3 class="text-xl font-semibold mb-1">{fabric.fabric.name}</h3>
      <p class="text-gray-600 mb-3">{fabric.reason}</p>
    </div>
    <div class="flex items-center space-x-1">
      {#each Array.from({length: fabric.fabric.breathability})}
        <div class="w-2 h-4 bg-green-500 rounded"></div>
      {/each}
      {#each Array.from({length: 5 - fabric.fabric.breathability})}
        <div class="w-2 h-4 bg-gray-200 rounded"></div>
      {/each}
      <span class="text-xs text-gray-500 ml-2">Breath</span>
    </div>
  </div>
  
  <div class="mb-4">
    <h4 class="font-medium mb-2">Best For:</h4>
    <div class="flex flex-wrap gap-2">
      {#each fabric.bestFor as use}
        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          {use}
        </span>
      {/each}
    </div>
  </div>
  
  <div class="mb-4">
    <h4 class="font-medium mb-2">Travel Scenarios:</h4>
    <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
      {#each fabric.travelScenarios as scenario}
        <li>{scenario}</li>
      {/each}
    </ul>
  </div>
  
  <div>
    <h4 class="font-medium mb-2">Packing Tips:</h4>
    <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
      {#each fabric.packingTips as tip}
        <li>{tip}</li>
      {/each}
    </ul>
  </div>
  
  <div class="mt-4 pt-4 border-t">
    <div class="flex justify-between text-sm">
      <span class="text-gray-500">
        Durability: 
        <span class="font-medium">{fabric.fabric.durability}/5</span>
      </span>
      <span class="text-gray-500">
        Care: 
        <span class="font-medium">{fabric.fabric.careDifficulty}/5</span>
      </span>
      <span class="text-gray-500">
        Stretch: 
        <span class="font-medium">{fabric.fabric.stretchiness}/5</span>
      </span>
    </div>
  </div>
</div>