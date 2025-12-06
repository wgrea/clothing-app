<!-- src/routes/compare/[fabricA]/[fabricB]/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { fabrics } from '$lib/data/fabrics';
  import { compareFabrics } from '$lib/utils/compareFabric';
  import FabricCard from '$lib/components/FabricCard.svelte';
  
  const fabricAId = $page.params.fabricA;
  const fabricBId = $page.params.fabricB;
  
  const fabricA = fabrics.find(f => f.id === fabricAId);
  const fabricB = fabrics.find(f => f.id === fabricBId);
  
  const comparison = fabricA && fabricB 
    ? compareFabrics(fabricA, fabricB)
    : null;
</script>

<div class="min-h-screen bg-gray-50 p-4 md:p-8">
  {#if !fabricA || !fabricB}
    <div class="max-w-4xl mx-auto text-center py-16">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Comparison Error</h1>
      <p class="text-gray-600 mb-6">One or both materials could not be found.</p>
      <a href="/compare" class="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
        Back to Comparison
      </a>
    </div>
  {:else}
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <header class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">
          Comparing: {fabricA.name} vs {fabricB.name}
        </h1>
        <p class="text-lg text-gray-600">
          Side-by-side comparison to understand overlaps and differences
        </p>
      </header>

      <!-- Quick Comparison Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <FabricCard fabric={fabricA} />
        <FabricCard fabric={fabricB} />
      </div>

      {#if comparison}
        <!-- Overlaps & Differences -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <!-- Overlaps -->
          <div class="bg-white rounded-2xl shadow-sm border border-green-200 p-6">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <span class="text-green-600 text-xl">↔️</span>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Overlaps & Similarities</h2>
            </div>
            {#if comparison.overlaps.length > 0}
              <ul class="space-y-3">
                {#each comparison.overlaps as overlap}
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2 mt-1">✓</span>
                    <span class="text-gray-700">{overlap}</span>
                  </li>
                {/each}
              </ul>
            {:else}
              <p class="text-gray-500 italic">No significant overlaps found</p>
            {/if}
          </div>

          <!-- Differences -->
          <div class="bg-white rounded-2xl shadow-sm border border-red-200 p-6">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                <span class="text-red-600 text-xl">⚡</span>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Key Differences</h2>
            </div>
            {#if comparison.differences.length > 0}
              <ul class="space-y-3">
                {#each comparison.differences as difference}
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2 mt-1">•</span>
                    <span class="text-gray-700">{difference}</span>
                  </li>
                {/each}
              </ul>
            {:else}
              <p class="text-gray-500 italic">No major differences found</p>
            {/if}
          </div>
        </div>

        <!-- Best Uses Comparison -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <!-- Fabric A Best For -->
          <div class="bg-white rounded-2xl shadow-sm border border-blue-200 p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              {fabricA.name} Best Uses
            </h2>
            <div class="flex flex-wrap gap-2">
              {#each fabricA.bestFor as use}
                <span class="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm border border-blue-200">
                  {use}
                </span>
              {/each}
            </div>
          </div>

          <!-- Fabric B Best For -->
          <div class="bg-white rounded-2xl shadow-sm border border-purple-200 p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              {fabricB.name} Best Uses
            </h2>
            <div class="flex flex-wrap gap-2">
              {#each fabricB.bestFor as use}
                <span class="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm border border-purple-200">
                  {use}
                </span>
              {/each}
            </div>
          </div>
        </div>

        <!-- When to Choose Which -->
        <div class="bg-white rounded-2xl shadow-sm border border-yellow-200 p-8 mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">When to Choose Which?</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="mr-2">✅</span> Choose {fabricA.name} when:
              </h3>
              <ul class="space-y-2">
                {#each fabricA.bestFor as use}
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span class="text-gray-700">{use}</span>
                  </li>
                {/each}
                {#each comparison.fabricAStrengths as strength}
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span class="text-gray-700">{strength}</span>
                  </li>
                {/each}
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="mr-2">✅</span> Choose {fabricB.name} when:
              </h3>
              <ul class="space-y-2">
                {#each fabricB.bestFor as use}
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span class="text-gray-700">{use}</span>
                  </li>
                {/each}
                {#each comparison.fabricBStrengths as strength}
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span class="text-gray-700">{strength}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      {/if}

      <!-- Comparison Actions -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/compare" class="px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          Compare Other Materials
        </a>
        <a href={`/fabrics/${fabricA.id}`} class="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
          View {fabricA.name} Details
        </a>
        <a href={`/fabrics/${fabricB.id}`} class="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
          View {fabricB.name} Details
        </a>
      </div>
    </div>
  {/if}
</div>