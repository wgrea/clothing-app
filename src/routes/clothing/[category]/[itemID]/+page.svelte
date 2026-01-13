<!-- src/routes/clothing/[category]/[itemID]/+page.svelte -->
<script lang="ts">
  import { redirect } from '@sveltejs/kit';
  import { clothingCategories } from '$lib/data/clothingCategories';
  import { clothingItems } from '$lib/data/clothingItems';
  import { fabrics } from '$lib/data/fabrics';
  import { brands } from '$lib/data/brands';
  
  export let data: { category: string; itemID: string };
  
  const { category, itemID } = data;
  const item = clothingItems.find(i => i.id === itemID && i.category === category);
  const categoryInfo = clothingCategories.find(c => c.id === category);
  
  // Redirect if item not found
  if (!item) {
    redirect(302, '/clothing');
  }
  
  // Get fabric details for compatible fabrics
  const compatibleFabrics = fabrics.filter(f => item.compatibleFabrics.includes(f.id));
  
  // Similar items (same category)
  const similarItems = clothingItems
    .filter(i => i.id !== itemID && i.category === category)
    .slice(0, 3);
  
  // Items with similar fabrics
  const fabricSimilarItems = clothingItems
    .filter(i => i.id !== itemID && i.category !== category)
    .filter(i => i.compatibleFabrics.some(f => item.compatibleFabrics.includes(f)))
    .slice(0, 3);

  // Find the brand
  const itemBrand = brands.find(b => b.id === item.brand);
</script>

<svelte:head>
  <title>{item.name} - {categoryInfo?.name || 'Clothing Item'}</title>
  <meta name="description" content="{item.description}" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
  <div class="container mx-auto px-4 py-8">
    <!-- Breadcrumb -->
    <nav class="flex items-center text-sm text-gray-600 mb-6">
      <a href="/clothing" class="hover:text-blue-600">Clothing</a>
      <span class="mx-2">/</span>
      <a href="/clothing/{category}" class="hover:text-blue-600">{categoryInfo?.name}</a>
      <span class="mx-2">/</span>
      <span class="font-medium">{item.name}</span>
    </nav>
    
    <!-- Item Header -->
    <div class="flex items-start justify-between mb-8">
      <div class="flex items-start">
        <span class="text-4xl mr-4">{categoryInfo?.icon}</span>
        <div>
          <h1 class="text-3xl font-bold">{item.name}</h1>
          <p class="text-gray-600 text-lg mt-2">{item.description}</p>
        </div>
      </div>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Content -->
      <div class="lg:col-span-2">
        <!-- Fabric Compatibility Section -->
        <div class="bg-white rounded-lg shadow p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Compatible Fabrics</h2>
          <p class="text-gray-600 mb-6">This clothing item works well with these fabrics:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each compatibleFabrics as fabric}
              <a 
                href="/fabrics/{fabric.id}" 
                class="border rounded-lg p-4 hover:shadow-md transition-shadow hover:border-blue-500"
              >
                <div class="flex justify-between items-start mb-3">
                  <h3 class="font-semibold text-lg">{fabric.name}</h3>
                  <span class="text-sm px-2 py-1 rounded"
                    class:bg-green-100={fabric.sustainability === 'high'}
                    class:text-green-800={fabric.sustainability === 'high'}
                    class:bg-yellow-100={fabric.sustainability === 'medium'}
                    class:text-yellow-800={fabric.sustainability === 'medium'}
                    class:bg-red-100={fabric.sustainability === 'low'}
                    class:text-red-800={fabric.sustainability === 'low'}
                  >
                    {fabric.sustainability || 'medium'} sustainability
                  </span>
                </div>
                
                <p class="text-gray-600 text-sm mb-4">{fabric.description}</p>
                
                <!-- Quick Stats -->
                <div class="grid grid-cols-4 gap-2 text-center text-xs mb-4">
                  <div class="bg-gray-50 p-2 rounded">
                    <div class="font-bold">{fabric.breathability || 3}/5</div>
                    <div class="text-gray-500">Breath</div>
                  </div>
                  <div class="bg-gray-50 p-2 rounded">
                    <div class="font-bold">{fabric.durability || 3}/5</div>
                    <div class="text-gray-500">Durable</div>
                  </div>
                  <div class="bg-gray-50 p-2 rounded">
                    <div class="font-bold">{fabric.stretchiness || 3}/5</div>
                    <div class="text-gray-500">Stretch</div>
                  </div>
                  <div class="bg-gray-50 p-2 rounded">
                    <div class="font-bold">{fabric.careDifficulty || 3}/5</div>
                    <div class="text-gray-500">Care</div>
                  </div>
                </div>
                
                <div class="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                  View fabric details 
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            {/each}
          </div>
          
          <!-- Compare Fabrics Button -->
          {#if compatibleFabrics.length >= 2}
            <div class="mt-6 pt-6 border-t">
              <a 
                href="/compare/{compatibleFabrics[0].id}/{compatibleFabrics[1].id}" 
                class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Compare Top Fabrics
              </a>
            </div>
          {/if}
        </div>
        
        <!-- Best Uses Section -->
        <div class="bg-white rounded-lg shadow p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Best Uses & Contexts</h2>
          <div class="flex flex-wrap gap-3">
            {#each item.bestContexts as context}
              <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                {context}
              </span>
            {/each}
          </div>
        </div>
        
        <!-- Brand Section -->
        {#if itemBrand}
          <div class="bg-white rounded-lg shadow p-6 mb-8">
            <h2 class="text-xl font-semibold mb-4">Manufacturer</h2>
            <div class="flex flex-col sm:flex-row sm:items-center gap-4">
              <div class="flex-1">
                <h3 class="text-lg font-medium mb-2">{itemBrand.name}</h3>
                <p class="text-gray-600 text-sm mb-3">{itemBrand.description}</p>
                
                <!-- Brand details -->
                <div class="flex flex-wrap gap-4 text-sm">
                  {#if itemBrand.sustainabilityRating}
                    <div class="flex items-center">
                      <span class="mr-2">Sustainability:</span>
                      <div class="flex">
                        {#each Array(itemBrand.sustainabilityRating) as _, i}
                          <span class="text-green-500">★</span>
                        {/each}
                        {#each Array(5 - itemBrand.sustainabilityRating) as _, i}
                          <span class="text-gray-300">★</span>
                        {/each}
                      </div>
                    </div>
                  {/if}
                  
                  {#if itemBrand.priceRange}
                    <div>
                      <span class="text-gray-500 mr-2">Price Range:</span>
                      <span class="font-medium">{itemBrand.priceRange}</span>
                    </div>
                  {/if}
                  
                  {#if itemBrand.specialty}
                    <div>
                      <span class="text-gray-500 mr-2">Specialty:</span>
                      <span class="font-medium">{itemBrand.specialty.join(', ')}</span>
                    </div>
                  {/if}
                </div>
              </div>
              
              <a 
                href="/brands#{itemBrand.id}" 
                class="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium whitespace-nowrap"
              >
                View Brand Details
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        {/if}
      </div>
      
      <!-- Sidebar -->
      <div>
        <!-- Category Info -->
        <div class="bg-white rounded-lg shadow p-6 mb-6">
          <h3 class="font-semibold mb-4">Category Information</h3>
          <div class="flex items-center mb-4">
            <span class="text-2xl mr-3">{categoryInfo?.icon}</span>
            <div>
              <h4 class="font-medium">{categoryInfo?.name}</h4>
              <p class="text-gray-600 text-sm">
                {categoryInfo?.description || 'Specialized clothing category'}
              </p>
            </div>
          </div>
          <a 
            href="/clothing/{category}" 
            class="block w-full text-center py-3 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg font-medium"
          >
            View all {categoryInfo?.name}
          </a>
        </div>
        
        <!-- Quick Actions -->
        <div class="bg-white rounded-lg shadow p-6 mb-6">
          <h3 class="font-semibold mb-4">Quick Actions</h3>
          <div class="space-y-3">
            <a 
              href="/combinations?clothing={item.id}" 
              class="block w-full text-center py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
            >
              Create Fabric Combination
            </a>
            <a 
              href="/travel-recommendations?item={item.id}" 
              class="block w-full text-center py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium"
            >
              Get Travel Recommendations
            </a>
            <button 
              class="block w-full text-center py-3 border border-gray-300 hover:bg-gray-50 rounded-lg font-medium"
            >
              Save to Favorites
            </button>
          </div>
        </div>
        
        <!-- Fabric Recommendations -->
        {#if compatibleFabrics.length > 0}
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="font-semibold mb-4">Top Fabric Recommendations</h3>
            <div class="space-y-4">
              {#each compatibleFabrics.slice(0, 3) as fabric}
                <a 
                  href="/fabrics/{fabric.id}" 
                  class="block border-b pb-4 last:border-0 last:pb-0 hover:bg-gray-50 -mx-3 px-3 py-2 rounded"
                >
                  <div class="flex justify-between items-center mb-1">
                    <h4 class="font-medium">{fabric.name}</h4>
                    <span class="text-xs px-2 py-1 rounded"
                      class:bg-green-100={(fabric.breathability || 0) >= 4}
                      class:text-green-800={(fabric.breathability || 0) >= 4}
                      class:bg-yellow-100={(fabric.breathability || 0) === 3}
                      class:text-yellow-800={(fabric.breathability || 0) === 3}
                      class:bg-red-100={(fabric.breathability || 0) <= 2}
                      class:text-red-800={(fabric.breathability || 0) <= 2}
                    >
                      Breath: {fabric.breathability || 3}/5
                    </span>
                  </div>
                  <div class="flex justify-between text-sm text-gray-600">
                    <span>Durability: {fabric.durability || 3}/5</span>
                    <span>Care: {fabric.careDifficulty || 3}/5</span>
                  </div>
                </a>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>
    
    <!-- Similar Items -->
    {#if similarItems.length > 0}
      <div class="mt-12">
        <h2 class="text-2xl font-semibold mb-6">Similar {categoryInfo?.name}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {#each similarItems as similarItem}
            <a 
              href="/clothing/{category}/{similarItem.id}" 
              class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <h3 class="font-semibold mb-2">{similarItem.name}</h3>
              <p class="text-gray-600 text-sm mb-4">{similarItem.description}</p>
              <div class="flex flex-wrap gap-2">
                {#each similarItem.compatibleFabrics.slice(0, 2) as fabricId}
                  <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                    {fabricId}
                  </span>
                {/each}
              </div>
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>

<script context="module">
  export async function load({ params }: { params: { category: string; itemID: string } }) {
    return {
      props: {
        category: params.category,
        itemID: params.itemID
      }
    };
  }
</script>