<!-- src/routes/compare/+page.svelte -->
<script lang="ts">
  import { fabrics } from '$lib/data/fabrics';
  import { goto } from '$app/navigation';
  
  let selectedFabricA = '';
  let selectedFabricB = '';
  
  function compare() {
    if (selectedFabricA && selectedFabricB && selectedFabricA !== selectedFabricB) {
      goto(`/compare/${selectedFabricA}/${selectedFabricB}`);
    }
  }
  
  // Get top 3 most overlapped fabrics
  const mostConfused = fabrics
    .map(fabric => ({
      ...fabric,
      overlapCount: fabric.overlapsWith.length
    }))
    .sort((a, b) => b.overlapCount - a.overlapCount)
    .slice(0, 3);
</script>

<div class="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-6">
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <header class="text-center mb-10">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Compare Materials</h1>
      <p class="text-xl text-gray-600">
        Side-by-side comparison to understand the real differences
      </p>
    </header>

    <!-- Comparison Form -->
    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Fabric A Selector -->
        <div>
          <label for="fabric-a-select" class="block text-lg font-semibold text-gray-900 mb-4">
            First Material
          </label>
          <select 
            id="fabric-a-select"
            bind:value={selectedFabricA}
            class="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
          >
            <option value="">Select a material...</option>
            {#each fabrics as fabric}
              <option value={fabric.id}>
                {fabric.name} ({fabric.category})
              </option>
            {/each}
          </select>
          {#if selectedFabricA}
            <div class="mt-4 p-4 bg-blue-50 rounded-lg">
              {#each fabrics.filter(f => f.id === selectedFabricA) as fabric}
                <div class="text-sm text-gray-700">
                  <div class="font-medium mb-1">Selected: {fabric.name}</div>
                  <div>Often confused with: 
                    {#each fabric.overlapsWith as overlapId, i}
                      {fabrics.find(f => f.id === overlapId)?.name}
                      {i < fabric.overlapsWith.length - 1 ? ', ' : ''}
                    {/each}
                  </div>
                </div>
              {/each}
            </div>
          {/if}
        </div>

        <!-- Fabric B Selector -->
        <div>
          <label for="fabric-b-select" class="block text-lg font-semibold text-gray-900 mb-4">
            Second Material
          </label>
          <select 
            id="fabric-b-select"
            bind:value={selectedFabricB}
            class="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
          >
            <option value="">Select a material...</option>
            {#each fabrics as fabric}
              <option value={fabric.id}>
                {fabric.name} ({fabric.category})
              </option>
            {/each}
          </select>
          {#if selectedFabricB}
            <div class="mt-4 p-4 bg-green-50 rounded-lg">
              {#each fabrics.filter(f => f.id === selectedFabricB) as fabric}
                <div class="text-sm text-gray-700">
                  <div class="font-medium mb-1">Selected: {fabric.name}</div>
                  <div>Often confused with: 
                    {#each fabric.overlapsWith as overlapId, i}
                      {fabrics.find(f => f.id === overlapId)?.name}
                      {i < fabric.overlapsWith.length - 1 ? ', ' : ''}
                    {/each}
                  </div>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      </div>

      <!-- Compare Button -->
      <div class="mt-8 text-center">
        <button 
          on:click={compare}
          disabled={!selectedFabricA || !selectedFabricB || selectedFabricA === selectedFabricB}
          class="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
        >
          <span class="mr-3">⚖️</span>
          Compare Materials
          <span class="ml-3">→</span>
        </button>
        {#if selectedFabricA && selectedFabricA === selectedFabricB}
          <p class="text-red-500 mt-2 text-sm">
            Please select two different materials to compare
          </p>
        {/if}
      </div>
    </div>

    <!-- Most Confused Section -->
    <div class="bg-linear-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">
        Most Commonly Confused Materials
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each mostConfused as fabric}
          <div class="bg-white p-6 rounded-xl border border-purple-200">
            <div class="flex items-center mb-3">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <span class="text-lg">🤔</span>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">{fabric.name}</h3>
                <div class="text-sm text-gray-500">Confused with {fabric.overlapCount} others</div>
              </div>
            </div>
            <div class="text-sm text-gray-600">
              Often mistaken for: 
              {#each fabric.overlapsWith as overlapId, index}
                {#if index < 2}
                  <span class="font-medium text-purple-600">
                    {fabrics.find(f => f.id === overlapId)?.name}
                    {index < fabric.overlapsWith.length - 1 && index < 1 ? ', ' : ''}
                  </span>
                {/if}
              {/each}
              {#if fabric.overlapsWith.length > 2}
                <span class="text-gray-500"> and {fabric.overlapsWith.length - 2} more</span>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>