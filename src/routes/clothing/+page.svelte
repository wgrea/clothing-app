<!-- src/routes/clothing/+page.svelte -->
<script lang="ts">
  import { clothingCategories } from '$lib/data/clothingCategories';
  import { clothingItems } from '$lib/data/clothingItems';
  
  // Count items per category - make sure categories exist
  const categoryCounts = clothingCategories.map(category => {
    const count = clothingItems.filter(item => item.category === category.id).length;
    return {
      ...category,
      count
    };
  });
  
  // Log for debugging
  console.log('Category counts:', categoryCounts.map(c => ({ name: c.name, id: c.id, count: c.count })));
</script>

<svelte:head>
  <title>Clothing Items</title>
  <meta name="description" content="Browse clothing items by category" />
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-2">Clothing Items</h1>
  <p class="text-gray-600 mb-8">Browse clothing items by category</p>
  
  <!-- Categories Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
    {#each categoryCounts as category}
      <a 
        href="/clothing/{category.id}" 
        class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
      >
        <div class="flex items-center mb-4">
          <span class="text-2xl mr-3">{category.icon}</span>
          <div>
            <h2 class="text-xl font-semibold">{category.name}</h2>
            <p class="text-gray-600 text-sm">{category.count} {category.count === 1 ? 'item' : 'items'}</p>
          </div>
        </div>
        <div class="text-right">
          <span class="text-blue-600 hover:text-blue-800 font-medium">Browse →</span>
        </div>
      </a>
    {/each}
  </div>
  
  <!-- Debug info if needed -->
  {#if categoryCounts.some(c => c.count === 0)}
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <h3 class="font-semibold text-blue-800 mb-2">Note:</h3>
      <p class="text-sm text-blue-700">
        Some categories show 0 items. Check your browser console (F12) for debugging information.
      </p>
    </div>
  {/if}
  
  <!-- Featured Items -->
  <div>
    <h2 class="text-2xl font-semibold mb-6">Featured Clothing Items</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each clothingItems.slice(0, 6) as item}
        <a 
          href="/clothing/{item.category}/{item.id}" 
          class="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-lg font-semibold">{item.name}</h3>
                <p class="text-gray-600 text-sm">{item.description}</p>
              </div>
              <span class="text-lg">
                {clothingCategories.find(c => c.id === item.category)?.icon || '👕'}
              </span>
            </div>
            
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
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>