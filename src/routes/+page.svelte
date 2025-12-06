<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { fabrics } from '$lib/data/fabrics';
  import FabricCard from '$lib/components/FabricCard.svelte';
</script>

<div class="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 md:p-8">
  <!-- Hero Section -->
  <header class="max-w-6xl mx-auto mb-12">
    <div class="text-center mb-10">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        👕 Clothing Material Guide
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Understand the differences between materials like <span class="font-semibold text-primary-600">PVC</span>, 
        <span class="font-semibold text-primary-600">latex</span>, and <span class="font-semibold text-primary-600">leather</span>.
      </p>
    </div>

    <!-- Quick Actions -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <a 
        href="/compare" 
        class="btn-primary text-center"
      >
        Compare Materials →
      </a>
      <a 
        href="/test-tailwind" 
        class="btn-secondary text-center"
      >
        Test Tailwind Styles
      </a>
    </div>
  </header>

  <!-- Main Content -->
  <main class="max-w-6xl mx-auto">
    <!-- Featured Materials -->
    <section class="mb-12">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900">Featured Materials</h2>
        <a href="/compare" class="text-primary-600 hover:text-primary-800 font-medium flex items-center">
          Compare all
          <span class="ml-1">→</span>
        </a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each fabrics as fabric}
          <FabricCard {fabric} />
        {/each}
      </div>
    </section>

    <!-- Quick Guide -->
    <section class="mb-12">
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Quick Material Guide</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Common Confusions</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">•</span>
                <span><span class="font-medium">PVC vs Vinyl:</span> PVC is thicker, vinyl is more flexible</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">•</span>
                <span><span class="font-medium">Latex vs Rubber:</span> Latex is liquid rubber before processing</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">•</span>
                <span><span class="font-medium">Pleather vs Vegan Leather:</span> Pleather is a type of synthetic leather</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Material Categories</h3>
            <div class="flex flex-wrap gap-2">
              <span class="badge badge-natural">Natural</span>
              <span class="badge badge-synthetic">Synthetic</span>
              <span class="badge badge-animal">Animal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-200">
    <p class="text-center text-gray-500">
      Clothing Material Guide • Built with SvelteKit & Tailwind CSS
    </p>
  </footer>
</div>