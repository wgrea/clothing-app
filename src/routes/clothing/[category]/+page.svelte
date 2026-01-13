<!-- src/routes/clothing/[category]/+page.svelte -->
<script lang="ts">
  import { clothingCategories } from '$lib/data/clothingCategories';
  import { clothingItems } from '$lib/data/clothingItems';
  
  // Simple structure
  export let data: { category: string };
  
  console.log('📦 Data received:', data);
  
  const category = data?.category || '';
  const categoryInfo = clothingCategories.find(c => c.id === category);
  const categoryItems = clothingItems.filter(item => item.category === category);
  
  console.log('🎯 Category:', category);
  console.log('🔍 Category info:', categoryInfo);
  console.log('👕 Items found:', categoryItems);
</script>

<svelte:head>
  <title>{categoryInfo?.name || category || 'Category'} - Clothing</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <!-- Debug Banner (temporary) -->
  <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
    <div class="font-bold mb-1">✅ Fixed Structure:</div>
    <div class="text-sm">
      <div>Data: {JSON.stringify(data)}</div>
      <div>Category: "{category}"</div>
      <div>Category exists: {categoryInfo ? 'Yes' : 'No'}</div>
      <div>Items count: {categoryItems.length}</div>
    </div>
  </div>
  
  <!-- Breadcrumb -->
  <nav class="flex items-center text-sm text-gray-600 mb-6">
    <a href="/clothing" class="hover:text-blue-600">Clothing</a>
    <span class="mx-2">/</span>
    <span class="font-medium">{categoryInfo?.name || category || 'Unknown Category'}</span>
  </nav>
  
  <!-- Category Header -->
  <div class="flex items-center mb-8">
    <span class="text-4xl mr-4">{categoryInfo?.icon || '📁'}</span>
    <div>
      <h1 class="text-3xl font-bold">{categoryInfo?.name || category || 'Category'}</h1>
      <p class="text-gray-600">{categoryItems.length} items</p>
    </div>
  </div>
  
  <!-- Items Grid -->
  {#if categoryItems.length === 0}
    <div class="text-center py-12">
      <p class="text-gray-500 mb-4">No items in this category yet.</p>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each categoryItems as item}
        <a 
          href="/clothing/{category}/{item.id}" 
          class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
        >
          <h3 class="text-lg font-semibold mb-2">{item.name}</h3>
          <p class="text-gray-600 text-sm mb-4">{item.description}</p>
          
          <div class="mb-4">
            <h4 class="text-sm font-medium mb-2">Compatible Fabrics:</h4>
            <div class="flex flex-wrap gap-2">
              {#each item.compatibleFabrics.slice(0, 3) as fabric}
                <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                  {fabric}
                </span>
              {/each}
            </div>
          </div>
          
          <div>
            <h4 class="text-sm font-medium mb-2">Best For:</h4>
            <div class="flex flex-wrap gap-2">
              {#each item.bestContexts.slice(0, 3) as context}
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                  {context}
                </span>
              {/each}
            </div>
          </div>
        </a>
      {/each}
    </div>
  {/if}
</div>