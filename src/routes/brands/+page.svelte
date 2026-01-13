<!-- src/routes/brands/+page.svelte -->
<script lang="ts">
  import { brands } from '$lib/data/brands';
  import BrandCard from '$lib/components/BrandCard.svelte';
</script>

<svelte:head>
  <title>Clothing Brands | Fabric Guide</title>
  <meta name="description" content="Discover brands and companies behind specialized clothing and fabrics." />
</svelte:head>

<div class="min-h-screen bg-gray-50">
  <div class="container mx-auto px-4 py-12">
    <!-- Hero Section -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Clothing Brands</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Discover the companies behind your favorite specialized clothing and fabrics. 
        Learn about their sustainability efforts, specialties, and popular products.
      </p>
    </div>
    
    <!-- Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      <div class="bg-white rounded-lg shadow p-6 text-center">
        <div class="text-3xl font-bold text-blue-600">{brands.length}</div>
        <div class="text-gray-600">Total Brands</div>
      </div>
      <div class="bg-white rounded-lg shadow p-6 text-center">
        <div class="text-3xl font-bold text-green-600">
          {brands.filter(b => b.sustainabilityRating && b.sustainabilityRating >= 4).length}
        </div>
        <div class="text-gray-600">Sustainable Brands</div>
      </div>
      <div class="bg-white rounded-lg shadow p-6 text-center">
        <div class="text-3xl font-bold text-purple-600">
          {new Set(brands.flatMap(b => b.specialty || [])).size}
        </div>
        <div class="text-gray-600">Specialties</div>
      </div>
      <div class="bg-white rounded-lg shadow p-6 text-center">
        <div class="text-3xl font-bold text-orange-600">
          {brands.filter(b => b.priceRange === '$$$$').length}
        </div>
        <div class="text-gray-600">Premium Brands</div>
      </div>
    </div>
    
    <!-- Brands Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each brands as brand}
        <div id="{brand.id}">
          <BrandCard {brand} />
        </div>
      {/each}
    </div>
    
    <!-- Call to Action -->
    <div class="mt-16 text-center">
      <div class="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Looking for specific clothing?</h2>
        <p class="text-gray-600 mb-6">
          Browse our complete clothing collection to find items from these brands.
        </p>
        <a 
          href="/clothing" 
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-lg"
        >
          Browse Clothing Collection
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>