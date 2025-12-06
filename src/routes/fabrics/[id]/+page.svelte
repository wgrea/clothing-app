<!-- src/routes/fabrics/[id]/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { fabrics } from '$lib/data/fabrics';
  
  const fabricId = $page.params.id;
  const fabric = fabrics.find(f => f.id === fabricId);
  
  // Category colors for styling
  const categoryColors = {
    'natural': 'bg-green-100 text-green-800',
    'synthetic': 'bg-blue-100 text-blue-800',
    'animal': 'bg-amber-100 text-amber-800',
    'plant-based': 'bg-emerald-100 text-emerald-800'
  };
  
  // Find related fabrics
  const relatedFabrics = fabric 
    ? fabrics.filter(f => 
        f.id !== fabricId && 
        (fabric.overlapsWith.includes(f.id) || 
         fabric.keyDifferences.some(diff => diff.comparedTo === f.id))
      ).slice(0, 3)
    : [];
</script>

<div class="min-h-screen bg-gray-50 p-4 md:p-8">
  {#if !fabric}
    <div class="max-w-4xl mx-auto text-center py-16">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Fabric Not Found</h1>
      <p class="text-gray-600 mb-6">The material you're looking for doesn't exist.</p>
      <a href="/" class="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
        Back to Home
      </a>
    </div>
  {:else}
    <div class="max-w-6xl mx-auto">
      <!-- Breadcrumb -->
      <nav class="mb-6">
        <a href="/" class="text-gray-500 hover:text-gray-700">Home</a>
        <span class="mx-2 text-gray-400">/</span>
        <a href="/fabrics" class="text-gray-500 hover:text-gray-700">Fabrics</a>
        <span class="mx-2 text-gray-400">/</span>
        <span class="text-gray-900 font-medium">{fabric.name}</span>
      </nav>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column - Fabric Info -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
            <!-- Header -->
            <div class="flex flex-col md:flex-row md:items-start justify-between mb-6">
              <div>
                <h1 class="text-3xl font-bold text-gray-900 mb-2">{fabric.name}</h1>
                <div class="flex items-center gap-3 mb-4">
                  <span class={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[fabric.category] || 'bg-gray-100 text-gray-800'}`}>
                    {fabric.category}
                  </span>
                  <span class="text-gray-500">•</span>
                  <span class="text-gray-600">Sustainability: {fabric.sustainability}</span>
                </div>
              </div>
              <a 
                href={`/compare?fabricA=${fabric.id}`} 
                class="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 mt-4 md:mt-0 inline-block"
              >
                Compare This Material
              </a>
            </div>

            <!-- Description -->
            <div class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-3">Description</h2>
              <p class="text-gray-700">{fabric.description}</p>
            </div>

            <!-- Properties Grid -->
            <div class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4">Properties</h2>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                {#each fabric.properties as property}
                  <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div class="font-medium text-gray-900">{property}</div>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Best For & Not Recommended -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 class="text-xl font-bold text-gray-900 mb-3">✅ Best For</h2>
                <div class="flex flex-wrap gap-2">
                  {#each fabric.bestFor as use}
                    <span class="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm border border-green-200">
                      {use}
                    </span>
                  {/each}
                </div>
              </div>
              <div>
                <h2 class="text-xl font-bold text-gray-900 mb-3">❌ Not Recommended For</h2>
                <div class="flex flex-wrap gap-2">
                  {#each fabric.notRecommendedFor as use}
                    <span class="px-3 py-2 bg-red-50 text-red-700 rounded-lg text-sm border border-red-200">
                      {use}
                    </span>
                  {/each}
                </div>
              </div>
            </div>

            <!-- Key Differences -->
            {#if fabric.keyDifferences.length > 0}
              <div class="mb-8">
                <h2 class="text-xl font-bold text-gray-900 mb-4">Key Differences From Other Materials</h2>
                <div class="space-y-4">
                  {#each fabric.keyDifferences as diff}
                    <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div class="font-bold text-gray-900 mb-2">Compared to: {diff.comparedTo}</div>
                      <ul class="space-y-1">
                        {#each diff.differences as difference}
                          <li class="flex items-start">
                            <span class="text-yellow-500 mr-2">•</span>
                            <span class="text-gray-700">{difference}</span>
                          </li>
                        {/each}
                      </ul>
                    </div>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        </div>

        <!-- Right Column - Sidebar -->
        <div class="space-y-6">
          <!-- Quick Stats -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Quick Stats</h2>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">Breathability</span>
                  <span class="font-medium">{fabric.breathability}/5</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-500 h-2 rounded-full" style={`width: ${fabric.breathability * 20}%`}></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">Durability</span>
                  <span class="font-medium">{fabric.durability}/5</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-green-500 h-2 rounded-full" style={`width: ${fabric.durability * 20}%`}></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">Stretchiness</span>
                  <span class="font-medium">{fabric.stretchiness}/5</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-purple-500 h-2 rounded-full" style={`width: ${fabric.stretchiness * 20}%`}></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">Care Difficulty</span>
                  <span class="font-medium">{fabric.careDifficulty}/5</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-orange-500 h-2 rounded-full" style={`width: ${fabric.careDifficulty * 20}%`}></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Care Instructions -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Care Instructions</h2>
            <ul class="space-y-2">
              {#each fabric.careInstructions as instruction}
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">•</span>
                  <span class="text-gray-700">{instruction}</span>
                </li>
              {/each}
            </ul>
          </div>

          <!-- Also Known As -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Also Known As</h2>
            <div class="flex flex-wrap gap-2">
              {#each fabric.alsoKnownAs as alias}
                <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                  {alias}
                </span>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <!-- Related Fabrics -->
      {#if relatedFabrics.length > 0}
        <div class="mt-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Related Materials</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {#each relatedFabrics as relatedFabric}
              <a 
                href={`/fabrics/${relatedFabric.id}`}
                class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-5"
              >
                <div class="flex justify-between items-start mb-3">
                  <h3 class="text-lg font-bold text-gray-900">{relatedFabric.name}</h3>
                  <span class={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[relatedFabric.category]}`}>
                    {relatedFabric.category}
                  </span>
                </div>
                <p class="text-gray-600 text-sm mb-3 line-clamp-2">
                  {relatedFabric.description}
                </p>
                <div class="text-primary-600 text-sm font-medium">
                  View details →
                </div>
              </a>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  {/if}
</div>