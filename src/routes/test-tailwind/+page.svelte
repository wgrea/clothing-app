<!-- src/routes/test-tailwind/+page.svelte -->
<script lang="ts">
  // Test data for the page
  const testFabric = {
    name: "Test Material",
    category: "synthetic",
    description: "A sample material for testing Tailwind CSS styles",
    properties: ["waterproof", "durable", "lightweight", "breathable", "stretchy"],
    bestFor: ["Outdoor gear", "Sportswear", "Rain jackets"],
    stats: {
      breathability: 4,
      durability: 5,
      stretchiness: 3
    }
  };
</script>

<div class="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-6">
  <!-- Header -->
  <header class="max-w-6xl mx-auto mb-12 text-center">
    <h1 class="text-5xl font-bold text-gray-900 mb-4">
      🎨 Tailwind CSS v4 Test Page
    </h1>
    <p class="text-xl text-gray-600">
      Testing Tailwind CSS v4 for your clothing app
    </p>
  </header>

  <div class="max-w-6xl mx-auto">
    <!-- Color Palette -->
    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Color Palette</h2>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div class="bg-primary-50 p-4 rounded-xl border">Primary-50</div>
        <div class="bg-primary-100 p-4 rounded-xl border">Primary-100</div>
        <div class="bg-primary-200 p-4 rounded-xl border">Primary-200</div>
        <div class="bg-primary-300 p-4 rounded-xl border">Primary-300</div>
        <div class="bg-primary-400 p-4 rounded-xl border">Primary-400</div>
        <div class="bg-primary-500 p-4 rounded-xl border text-white">Primary-500</div>
        <div class="bg-primary-600 p-4 rounded-xl border text-white">Primary-600</div>
        <div class="bg-primary-700 p-4 rounded-xl border text-white">Primary-700</div>
        <div class="bg-primary-800 p-4 rounded-xl border text-white">Primary-800</div>
        <div class="bg-primary-900 p-4 rounded-xl border text-white">Primary-900</div>
      </div>
    </section>

    <!-- Buttons -->
    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Buttons</h2>
      <div class="flex flex-wrap gap-4 mb-6">
        <button class="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
          Primary Button
        </button>
        <button class="px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          Secondary Button
        </button>
        <button class="px-6 py-3 bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
          Gradient Button
        </button>
        <button class="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors" disabled>
          Disabled Button
        </button>
      </div>
    </section>

    <!-- Cards -->
    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Card Components</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Simple Card -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 p-6">
          <h3 class="text-xl font-bold mb-3">Simple Card</h3>
          <p class="text-gray-600 mb-4">This is a simple card with hover effects.</p>
          <button class="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
            Learn More
          </button>
        </div>

        <!-- Fabric Card -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-bold">{testFabric.name}</h3>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mt-1">
                {testFabric.category}
              </span>
            </div>
            <span class="text-3xl">🧪</span>
          </div>
          <p class="text-gray-600 mb-4">{testFabric.description}</p>
          <div class="mb-4">
            <div class="text-sm font-semibold text-gray-500 mb-2">PROPERTIES</div>
            <div class="flex flex-wrap gap-2">
              {#each testFabric.properties as property}
                <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm border border-gray-200 hover:bg-gray-200 transition-colors">
                  {property}
                </span>
              {/each}
            </div>
          </div>
        </div>

        <!-- Stats Card -->
        <div class="bg-linear-to-br from-primary-500 to-primary-700 text-white rounded-2xl p-6">
          <h3 class="text-xl font-bold mb-4">Material Stats</h3>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span>Breathability</span>
                <span>{testFabric.stats.breathability}/5</span>
              </div>
              <div class="w-full bg-primary-300 rounded-full h-2">
                <div class="bg-white h-2 rounded-full" style="width: 80%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span>Durability</span>
                <span>{testFabric.stats.durability}/5</span>
              </div>
              <div class="w-full bg-primary-300 rounded-full h-2">
                <div class="bg-white h-2 rounded-full" style="width: 100%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span>Stretch</span>
                <span>{testFabric.stats.stretchiness}/5</span>
              </div>
              <div class="w-full bg-primary-300 rounded-full h-2">
                <div class="bg-white h-2 rounded-full" style="width: 60%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Form Elements -->
    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Form Elements</h2>
      <div class="max-w-md space-y-6">
        <div>
          <label for="text-input" class="block text-sm font-medium text-gray-700 mb-2">Text Input</label>
          <input id="text-input" type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 outline-none" placeholder="Enter material name">
        </div>
        <div>
          <label for="category-select" class="block text-sm font-medium text-gray-700 mb-2">Select Dropdown</label>
          <select id="category-select" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 outline-none">
            <option value="">Select a category</option>
            <option value="natural">Natural</option>
            <option value="synthetic">Synthetic</option>
            <option value="animal">Animal</option>
          </select>
        </div>
      </div>
    </section>

    <!-- Badges -->
    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Badges</h2>
      <div class="flex flex-wrap gap-2">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">Natural</span>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">Synthetic</span>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">Animal</span>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">Waterproof</span>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">Breathable</span>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">Durable</span>
      </div>
    </section>
  </div>

  <!-- Success Message -->
  <div class="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-xl shadow-lg">
    <div class="flex items-center">
      <span class="text-xl mr-2">🎉</span>
      <div>
        <div class="font-bold">Tailwind CSS v4 is working!</div>
        <div class="text-sm opacity-90">All utility classes are properly styled</div>
      </div>
    </div>
  </div>
</div>