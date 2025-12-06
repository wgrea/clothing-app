<!-- src/routes/fabrics/+page.svelte -->
<script lang="ts">
  import { fabrics } from '$lib/data/fabrics';
  import FabricCard from '$lib/components/FabricCard.svelte';
  
  // Group by category
  const fabricsByCategory = fabrics.reduce((acc, fabric) => {
    if (!acc[fabric.category]) {
      acc[fabric.category] = [];
    }
    acc[fabric.category].push(fabric);
    return acc;
  }, {} as Record<string, typeof fabrics>);
  
  const categories = Object.keys(fabricsByCategory);
</script>

<div class="min-h-screen bg-gray-50 p-4 md:p-8">
  <div class="max-w-6xl mx-auto">
    <!-- Header -->
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">All Materials</h1>
      <p class="text-lg text-gray-600">
        Browse through {fabrics.length} different clothing materials and fabrics
      </p>
    </header>

    <!-- Category Filter -->
    <div class="mb-8">
      <div class="flex flex-wrap gap-2">
        <a 
          href="/fabrics" 
          class="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium"
        >
          All ({fabrics.length})
        </a>
        {#each categories as category}
          <a 
            href={`/fabrics/category/${category}`}
            class="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 font-medium"
          >
            {category} ({fabricsByCategory[category].length})
          </a>
        {/each}
      </div>
    </div>

    <!-- All Fabrics Grid -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">All Materials</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each fabrics as fabric}
          <FabricCard {fabric} />
        {/each}
      </div>
    </div>

    <!-- By Category -->
    {#each categories as category}
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">
          {category.charAt(0).toUpperCase() + category.slice(1)} Materials
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each fabricsByCategory[category] as fabric}
            <FabricCard {fabric} />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>