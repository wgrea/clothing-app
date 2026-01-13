<!-- Revised src/routes/+page.svelte -->
<script lang="ts">
  import { clothingItems } from '$lib/data/clothingItems';
  import ClothingCard from '$lib/components/ClothingCard.svelte';
  import { clothingCategories } from '$lib/data/clothingCategories';
  
  // Get featured items
  const featuredItems = clothingItems.slice(0, 6);
  const popularCategories = clothingCategories.slice(0, 4);
</script>

<div class="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 md:p-8">
  <!-- Hero -->
  <header class="max-w-6xl mx-auto mb-12">
    <div class="text-center mb-10">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        👕 Clothing Planner
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Plan your perfect outfit. Compare materials, find clothing items, and get travel-ready recommendations.
      </p>
    </div>

    <!-- Quick Actions -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <a href="/compare" class="btn-primary text-center" data-sveltekit-prefetch>
        Compare Materials →
      </a>
      <a href="/clothing/one-piece" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center" data-sveltekit-prefetch>
        One-Piece Guide →
      </a>
      <a href="/test-tailwind" class="btn-secondary text-center" data-sveltekit-prefetch>
        Test Tailwind Styles
      </a>
    </div>

    <!-- Update the "Compare all" link: -->
    <a href="/compare" class="text-primary-600 hover:text-primary-800 font-medium flex items-center" data-sveltekit-prefetch>
      Compare all
      <span class="ml-1">→</span>
    </a>
  </header>

  <main class="max-w-6xl mx-auto">
    <!-- Featured Clothing -->
    <section class="mb-12">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900">Featured Clothing Items</h2>
        <a href="/clothing" class="text-primary-600 hover:text-primary-800 font-medium">
          View all →
        </a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each featuredItems as item}
          <ClothingCard {item} />
        {/each}
      </div>
    </section>

    <!-- Browse by Category -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {#each popularCategories as category}
          <a 
            href="/clothing/{category.id}" 
            class="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <div class="text-xl mb-2">{category.icon}</div>
            <h3 class="font-medium text-gray-900">{category.name}</h3>
          </a>
        {/each}
      </div>
    </section>

    <!-- Quick Material Guide (Keep but smaller) -->
    <section class="mb-12">
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Quick Material Tips</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="text-center p-4 bg-blue-50 rounded-lg">
            <div class="text-2xl mb-2">🌡️</div>
            <h3 class="font-medium mb-2">For Cold Weather</h3>
            <p class="text-sm text-gray-600">Merino wool, fleece, Gore-Tex</p>
          </div>
          <div class="text-center p-4 bg-green-50 rounded-lg">
            <div class="text-2xl mb-2">☀️</div>
            <h3 class="font-medium mb-2">For Hot Weather</h3>
            <p class="text-sm text-gray-600">Linen, cotton, breathable synthetics</p>
          </div>
          <div class="text-center p-4 bg-amber-50 rounded-lg">
            <div class="text-2xl mb-2">💧</div>
            <h3 class="font-medium mb-2">For Rain</h3>
            <p class="text-sm text-gray-600">PVC, Gore-Tex, waterproof synthetics</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>