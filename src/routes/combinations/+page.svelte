<script lang="ts">
  import { onMount } from 'svelte';
  import { generateFabricClothingCombinations } from '$lib/utils/fabricCombination'; // Note: singular
  import type { FabricClothingCombo } from '$lib/utils/fabricCombination'; // Note: singular
  
  let combinations: FabricClothingCombo[] = [];
  let filteredCombinations: FabricClothingCombo[] = [];
  let selectedCategory = 'all';
  let minScore = 70;
  
  onMount(() => {
    combinations = generateFabricClothingCombinations();
    filteredCombinations = combinations;
  });
  
  function filterCombinations() {
    filteredCombinations = combinations.filter(combo => {
      const matchesCategory = selectedCategory === 'all' || 
        combo.clothingItem.category === selectedCategory;
      const matchesScore = combo.score >= minScore;
      return matchesCategory && matchesScore;
    });
  }
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-6">Fabric & Clothing Combinations</h1>
  <p class="text-gray-600 mb-8">Discover the best fabric choices for different types of clothing</p>
  
  <!-- Filters -->
  <div class="bg-white p-6 rounded-lg shadow mb-8">
    <h2 class="text-xl font-semibold mb-4">Filter Combinations</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label for="category-select" class="block text-sm font-medium mb-2">Clothing Category</label>
        <select 
          id="category-select"
          bind:value={selectedCategory}
          on:change={filterCombinations}
          class="w-full p-2 border rounded"
        >
          <option value="all">All Categories</option>
          <option value="jumpsuits">Jumpsuits & Catsuits</option>
          <option value="water-suits">Water Suits</option>
          <option value="snow-suits">Snow Suits</option>
          <option value="protective-suits">Protective Suits</option>
          <option value="costume-suits">Costume Suits</option>
          <option value="rave-suits">Rave & Party Suits</option>
          <option value="travel-suits">Travel Suits</option>
          <option value="shirts">Shirts & Tops</option>
          <option value="jackets">Jackets & Outerwear</option>
          <option value="pants">Pants & Legwear</option>
          <option value="shorts">Shorts</option>
          <option value="shoes">Shoes</option>
          <option value="boots">Boots</option>
        </select>
      </div>
      <div>
        <label for="score-slider" class="block text-sm font-medium mb-2">Minimum Compatibility Score: {minScore}</label>
        <input 
          id="score-slider"
          type="range" 
          min="0" 
          max="100" 
          bind:value={minScore}
          on:input={filterCombinations}
          class="w-full"
        />
      </div>
    </div>
  </div>
  
  <!-- Results -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each filteredCombinations as combo}
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-lg font-semibold">{combo.clothingItem.name}</h3>
              <p class="text-gray-600 text-sm">with {combo.fabric.name}</p>
            </div>
            <div class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              {combo.score}%
            </div>
          </div>
          
          <div class="mb-4">
            <div class="flex items-center mb-2">
              <span class="text-sm font-medium mr-2">Best for:</span>
              <span class="text-sm text-gray-600">{combo.bestFor.join(', ')}</span>
            </div>
          </div>
          
          <div class="space-y-3">
            {#if combo.benefits.length > 0}
              <div>
                <h4 class="text-sm font-medium text-green-700 mb-1">Benefits</h4>
                <ul class="text-sm">
                  {#each combo.benefits as benefit}
                    <li class="text-green-600">✓ {benefit}</li>
                  {/each}
                </ul>
              </div>
            {/if}
            
            {#if combo.drawbacks.length > 0}
              <div>
                <h4 class="text-sm font-medium text-red-700 mb-1">Drawbacks</h4>
                <ul class="text-sm">
                  {#each combo.drawbacks as drawback}
                    <li class="text-red-600">⚠️ {drawback}</li>
                  {/each}
                </ul>
              </div>
            {/if}
          </div>
          
          <div class="mt-4 pt-4 border-t">
            <div class="text-xs text-gray-500">
              <span class="font-medium">Category:</span> {combo.clothingItem.category}
            </div>
          </div>
        </div>
      </div>
    {:else}
      <div class="col-span-full text-center py-12">
        <p class="text-gray-500">No combinations found with the current filters.</p>
        <button 
          on:click={() => { selectedCategory = 'all'; minScore = 70; filterCombinations(); }}
          class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Reset Filters
        </button>
      </div>
    {/each}
  </div>
</div>