<script lang="ts">
  import { clothingCategories } from '$lib/data/clothingCategories';
  import { clothingItems } from '$lib/data/clothingItems';
  import { fabrics } from '$lib/data/fabrics';
  
  export let data: { category: string; itemID: string };
  
  const { category, itemID } = data;
  const item = clothingItems.find(i => i.id === itemID && i.category === category);
  const categoryInfo = clothingCategories.find(c => c.id === category);
  
  // Get fabric details for compatible fabrics
  const compatibleFabrics = fabrics.filter(f => item?.compatibleFabrics.includes(f.id));
  
  // Similar items
  const similarItems = clothingItems
    .filter(i => i.id !== itemID && i.category === category)
    .slice(0, 3);
</script>

{#if item}
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
                class="border rounded-lg p-4 hover:shadow-md transition-shadow"
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
                    {fabric.sustainability} sustainability
                  </span>
                </div>
                
                <p class="text-gray-600 text-sm mb-4">{fabric.description}</p>
                
                <!-- Quick Stats -->
                <div class="grid grid-cols-4 gap-2 text-center text-xs mb-4">
                  <div class="bg-gray-50 p-2 rounded">
                    <div class="font-bold">{fabric.breathability}/5</div>
                    <div class="text-gray-500">Breath</div>
                  </div>
                  <div class="bg-gray-50 p-2 rounded">
                    <div class="font-bold">{fabric.durability}/5</div>
                    <div class="text-gray-500">Durable</div>
                  </div>
                  <div class="bg-gray-50 p-2 rounded">
                    <div class="font-bold">{fabric.stretchiness}/5</div>
                    <div class="text-gray-500">Stretch</div>
                  </div>
                  <div class="bg-gray-50 p-2 rounded">
                    <div class="font-bold">{fabric.careDifficulty}/5</div>
                    <div class="text-gray-500">Care</div>
                  </div>
                </div>
                
                <div class="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  View fabric details →
                </div>
              </a>
            {/each}
          </div>
        </div>
        
        <!-- Best Uses Section -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Best Uses & Contexts</h2>
          <div class="flex flex-wrap gap-3">
            {#each item.bestContexts as context}
              <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                {context}
              </span>
            {/each}
          </div>
        </div>
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
                {categoryInfo?.id === 'jumpsuits' && 'Full-body garments and specialized suits'}
                {categoryInfo?.id === 'water-suits' && 'Aquatic and water-resistant clothing'}
                {categoryInfo?.id === 'snow-suits' && 'Winter sports and cold weather gear'}
                {categoryInfo?.id === 'protective-suits' && 'Safety and protective clothing'}
                {categoryInfo?.id === 'costume-suits' && 'Character and theatrical costumes'}
                {categoryInfo?.id === 'rave-suits' && 'Festival and party clothing'}
                {categoryInfo?.id === 'travel-suits' && 'Comfortable and practical travel wear'}
                {categoryInfo?.id === 'shirts' && 'Upper body garments'}
                {categoryInfo?.id === 'jackets' && 'Outerwear and coats'}
                {categoryInfo?.id === 'pants' && 'Lower body garments'}
                {categoryInfo?.id === 'shorts' && 'Shorter legwear'}
                {categoryInfo?.id === 'shoes' && 'Footwear'}
                {categoryInfo?.id === 'boots' && 'Heavy-duty footwear'}
              </p>
            </div>
          </div>
          <a 
            href="/clothing/{category}" 
            class="block w-full text-center py-2 bg-gray-100 hover:bg-gray-200 rounded font-medium"
          >
            View all {categoryInfo?.name}
          </a>
        </div>
        
        <!-- Fabric Recommendations -->
        <div class="bg-white rounded-lg shadow p-6 mb-6">
          <h3 class="font-semibold mb-4">Top Fabric Recommendations</h3>
          <div class="space-y-4">
            {#each compatibleFabrics.slice(0, 3) as fabric}
              <div class="border-b pb-4 last:border-0 last:pb-0">
                <div class="flex justify-between items-center mb-2">
                  <h4 class="font-medium">{fabric.name}</h4>
                  <span class="text-xs px-2 py-1 rounded"
                    class:bg-green-100={fabric.breathability >= 4}
                    class:text-green-800={fabric.breathability >= 4}
                    class:bg-yellow-100={fabric.breathability === 3}
                    class:text-yellow-800={fabric.breathability === 3}
                    class:bg-red-100={fabric.breathability <= 2}
                    class:text-red-800={fabric.breathability <= 2}
                  >
                    Breath: {fabric.breathability}/5
                  </span>
                </div>
                <div class="flex justify-between text-sm text-gray-600">
                  <span>Durability: {fabric.durability}/5</span>
                  <span>Care: {fabric.careDifficulty}/5</span>
                </div>
              </div>
            {/each}
          </div>
        </div>
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
{:else}
  <div class="container mx-auto px-4 py-16 text-center">
    <h1 class="text-3xl font-bold mb-4">Item Not Found</h1>
    <p class="text-gray-600 mb-8">The clothing item you're looking for doesn't exist.</p>
    <a 
      href="/clothing" 
      class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
    >
      Browse All Clothing Items
    </a>
  </div>
{/if}

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