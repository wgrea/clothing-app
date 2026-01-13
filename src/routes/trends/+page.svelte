<!-- src/routes/trends/+page.svelte -->
<script lang="ts">
  import { trends } from '$lib/data/trends';
  import TrendCard from '$lib/components/TrendCard.svelte';
</script>

<svelte:head>
  <title>Fashion Trends | Fabric Guide</title>
  <meta name="description" content="Current and upcoming trends in specialized clothing and fabrics." />
</svelte:head>

<div class="min-h-screen bg-gray-50">
  <div class="container mx-auto px-4 py-12">
    <!-- Hero Section -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Fashion Trends</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Stay updated with the latest trends in specialized clothing, from techwear to sustainable swimwear.
      </p>
    </div>
    
    <!-- Current Season Trends -->
    <div class="mb-12">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-900">Current Season Trends</h2>
        <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          {new Date().getFullYear()} Season
        </span>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each trends as trend}
          <TrendCard {trend} />
        {/each}
      </div>
    </div>
    
    <!-- Trend Categories -->
    <div class="bg-white rounded-xl shadow-lg p-8 mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Trend Categories</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-linear-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
          <div class="text-blue-600 text-2xl mb-3">🌱</div>
          <h3 class="text-lg font-semibold mb-2">Sustainable Fashion</h3>
          <p class="text-gray-600 text-sm">
            Eco-friendly materials and ethical production methods gaining popularity.
          </p>
        </div>
        
        <div class="bg-linear-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
          <div class="text-purple-600 text-2xl mb-3">⚡</div>
          <h3 class="text-lg font-semibold mb-2">Techwear</h3>
          <p class="text-gray-600 text-sm">
            Functional, technical clothing merging with urban fashion aesthetics.
          </p>
        </div>
        
        <div class="bg-linear-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
          <div class="text-green-600 text-2xl mb-3">🔄</div>
          <h3 class="text-lg font-semibold mb-2">Multi-Functional</h3>
          <p class="text-gray-600 text-sm">
            Clothing designed for multiple uses and adaptable to different contexts.
          </p>
        </div>
      </div>
    </div>
    
    <!-- Call to Action -->
    <div class="text-center">
      <div class="bg-linear-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Find Trendy Clothing</h2>
        <p class="text-gray-600 mb-6">
          Browse our clothing collection to find items that match current trends.
        </p>
        <a 
          href="/clothing" 
          class="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium text-lg"
        >
          Explore Clothing
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>