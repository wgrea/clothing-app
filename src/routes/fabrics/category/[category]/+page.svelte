<!-- src/routes/fabrics/category/[category]/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { fabrics } from '$lib/data/fabrics';
  import FabricCard from '$lib/components/FabricCard.svelte';
  
  // Safely get category with fallback
  const category = $page.params.category || '';
  const isValidCategory = category && ['natural', 'synthetic', 'animal', 'plant-based'].includes(category);
  
  // Filter fabrics by category
  const categoryFabrics = isValidCategory 
    ? fabrics.filter(fabric => fabric.category.toLowerCase() === category.toLowerCase())
    : [];
  
  const categoryDisplayName = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Unknown';
</script>

<div class="min-h-screen bg-gray-50 p-4 md:p-8">
  <div class="max-w-6xl mx-auto">
    <!-- Breadcrumb -->
    <nav class="mb-6">
      <a href="/" class="text-gray-500 hover:text-gray-700">Home</a>
      <span class="mx-2 text-gray-400">/</span>
      <a href="/fabrics" class="text-gray-500 hover:text-gray-700">Fabrics</a>
      {#if category}
        <span class="mx-2 text-gray-400">/</span>
        <span class="text-gray-900 font-medium">{categoryDisplayName}</span>
      {/if}
    </nav>

    {#if !isValidCategory}
      <!-- Invalid Category -->
      <div class="text-center py-16">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Invalid Category</h1>
        <p class="text-gray-600 mb-6">The category "{category}" doesn't exist.</p>
        <div class="space-y-3">
          <p class="text-gray-700">Available categories:</p>
          <div class="flex flex-wrap gap-2 justify-center">
            <a href="/fabrics/category/natural" class="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-medium">Natural</a>
            <a href="/fabrics/category/synthetic" class="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-medium">Synthetic</a>
            <a href="/fabrics/category/animal" class="px-4 py-2 bg-amber-100 text-amber-800 rounded-lg font-medium">Animal</a>
            <a href="/fabrics/category/plant-based" class="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-lg font-medium">Plant-based</a>
          </div>
        </div>
        <div class="mt-8">
          <a href="/fabrics" class="btn-primary">Browse All Materials</a>
        </div>
      </div>
    {:else}
      <!-- Valid Category Content -->
      <header class="mb-10">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{categoryDisplayName} Materials</h1>
        <p class="text-lg text-gray-600">
          Browse {categoryFabrics.length} {categoryDisplayName.toLowerCase()} material{#if categoryFabrics.length !== 1}s{/if}
        </p>
      </header>

      <!-- Category Description -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 class="text-xl font-bold text-gray-900 mb-3">About {categoryDisplayName} Materials</h2>
        <p class="text-gray-700 mb-4">
          {#if category === 'natural'}
            Natural materials come from plants, animals, or minerals. They're often breathable, biodegradable, and have unique textures.
          {:else if category === 'synthetic'}
            Synthetic materials are human-made, often from petroleum-based products. They're durable, consistent, and often more affordable.
          {:else if category === 'animal'}
            Animal-based materials come from animal sources. They're often durable, warm, and develop character over time.
          {:else if category === 'plant-based'}
            Plant-based materials come from renewable plant sources. They're often eco-friendly and biodegradable.
          {:else}
            Materials in this category share common characteristics.
          {/if}
        </p>
        <div class="flex items-center text-sm text-gray-600">
          <span class="font-medium mr-2">Common properties:</span>
          {#if category === 'natural'}
            Breathable, Biodegradable, Renewable
          {:else if category === 'synthetic'}
            Durable, Consistent, Water-resistant
          {:else if category === 'animal'}
            Durable, Warm, Ages beautifully
          {:else if category === 'plant-based'}
            Eco-friendly, Biodegradable, Renewable
          {/if}
        </div>
      </div>

      <!-- Fabrics Grid -->
      {#if categoryFabrics.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each categoryFabrics as fabric}
            <FabricCard {fabric} />
          {/each}
        </div>
      {:else}
        <div class="text-center py-12 bg-white rounded-2xl border border-gray-200">
          <div class="text-4xl mb-4">😕</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">No {categoryDisplayName} Materials Found</h3>
          <p class="text-gray-600 mb-6">We don't have any materials in this category yet.</p>
          <a href="/fabrics" class="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">Browse All Materials</a>
        </div>
      {/if}

      <!-- Back to All -->
      <div class="mt-12 text-center">
        <a href="/fabrics" class="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium">
          <span class="mr-2">←</span>
          Back to All Materials
        </a>
      </div>
    {/if}
  </div>
</div>