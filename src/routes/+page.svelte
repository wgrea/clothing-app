<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { clothingItems } from '$lib/data/clothingItems';
  import ClothingCard from '$lib/components/ClothingCard.svelte';
  import { getOnePieceCategories, getRegularCategories } from '$lib/data/clothingCategories';
  
  // Get featured items (mix of one-piece and regular)
  const featuredItems = clothingItems.slice(0, 6);
  const onePieceCategories = getOnePieceCategories();
  const regularCategories = getRegularCategories().slice(0, 8);
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
      <a href="/clothing" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center" data-sveltekit-prefetch>
        All Clothing Items →
      </a>
    </div>
  </header>

  <main class="max-w-6xl mx-auto">
    <!-- One-Piece Categories (Featured) -->
    <section class="mb-12">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900">Specialized One-Piece Suits</h2>
        <a href="/clothing/one-piece" class="text-indigo-600 hover:text-indigo-800 font-medium" data-sveltekit-prefetch>
          Explore all one-piece →
        </a>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {#each onePieceCategories.slice(0, 4) as category}
          <a 
            href="/clothing/{category.id}" 
            class="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow hover:border-indigo-300 flex flex-col items-center text-center"
            data-sveltekit-prefetch
          >
            <div class="text-2xl mb-2">{category.icon}</div>
            <h3 class="font-medium text-gray-900">{category.name}</h3>
            <p class="text-xs text-gray-500 mt-1 line-clamp-2">{category.description}</p>
          </a>
        {/each}
      </div>
    </section>

    <!-- Regular Clothing Categories -->
    <section class="mb-12">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900">Regular Clothing Types</h2>
        <a href="/clothing" class="text-primary-600 hover:text-primary-800 font-medium" data-sveltekit-prefetch>
          View all categories →
        </a>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {#each regularCategories as category}
          <a 
            href="/clothing/{category.id}" 
            class="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow hover:border-primary-300 flex flex-col items-center text-center"
            data-sveltekit-prefetch
          >
            <div class="text-2xl mb-2">{category.icon}</div>
            <h3 class="font-medium text-gray-900">{category.name}</h3>
            <p class="text-xs text-gray-500 mt-1 line-clamp-2">{category.description}</p>
          </a>
        {/each}
      </div>
    </section>

    <!-- Featured Clothing Items -->
    <section class="mb-12">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900">Featured Items</h2>
        <a href="/clothing" class="text-primary-600 hover:text-primary-800 font-medium" data-sveltekit-prefetch>
          View all items →
        </a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each featuredItems as item}
          <ClothingCard {item} />
        {/each}
      </div>
    </section>

    <!-- Quick Tips -->
    <section class="mb-12">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Quick Tips</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="text-center p-4 bg-blue-50 rounded-lg">
            <div class="text-2xl mb-2">🛡️</div>
            <h3 class="font-medium mb-2">Protective Suits</h3>
            <p class="text-sm text-gray-600">For industrial or hazardous environments</p>
          </div>
          <div class="text-center p-4 bg-purple-50 rounded-lg">
            <div class="text-2xl mb-2">✨</div>
            <h3 class="font-medium mb-2">Rave & Party</h3>
            <p class="text-sm text-gray-600">Glow-in-the-dark and UV-reactive materials</p>
          </div>
          <div class="text-center p-4 bg-green-50 rounded-lg">
            <div class="text-2xl mb-2">🧳</div>
            <h3 class="font-medium mb-2">Travel Comfort</h3>
            <p class="text-sm text-gray-600">Breathable, wrinkle-resistant fabrics</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>