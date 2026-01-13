<!-- src/lib/components/Navigation.svelte -->
<script lang="ts">
  import { clothingCategories } from '$lib/data/clothingCategories';
  import { onMount } from 'svelte';
  
  let isCategoriesOpen = false;
  let isMobileMenuOpen = false;
  
  // Close dropdown when clicking outside
  function handleClickOutside(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.categories-dropdown')) {
      isCategoriesOpen = false;
    }
    if (!(event.target as HTMLElement).closest('.mobile-menu')) {
      isMobileMenuOpen = false;
    }
  }
  
  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<nav class="bg-white shadow-sm border-b border-gray-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex">
        <!-- Logo -->
        <div class="shrink-0 flex items-center">
          <a href="/" class="flex items-center" data-sveltekit-prefetch>
            <span class="text-2xl mr-2">👕</span>
            <span class="text-xl font-bold text-gray-900">Fabric Guide</span>
          </a>
        </div>

        <!-- Desktop Navigation Links -->
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <a 
            href="/" 
            class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            data-sveltekit-prefetch
          >
            Home
          </a>
          
          <!-- Clothing Dropdown -->
          <div class="categories-dropdown relative">
            <button
              on:click={() => isCategoriesOpen = !isCategoriesOpen}
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Clothing
              <svg 
                class={`ml-1 h-4 w-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            {#if isCategoriesOpen}
              <div class="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div class="py-1" role="menu">
                  <!-- View All Clothing -->
                  <a 
                    href="/clothing" 
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium"
                    on:click={() => isCategoriesOpen = false}
                    data-sveltekit-prefetch
                  >
                    👕 All Clothing Items
                  </a>
                  
                  <div class="border-t border-gray-100 my-1"></div>
                  
                  <!-- Popular Categories -->
                  <div class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Popular Categories
                  </div>
                  
                  {#each clothingCategories.slice(0, 5) as category}
                    <a 
                      href="/clothing/{category.id}" 
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      on:click={() => isCategoriesOpen = false}
                      data-sveltekit-prefetch
                    >
                      <span class="mr-2">{category.icon}</span>
                      {category.name}
                    </a>
                  {/each}
                  
                  <!-- Specialized Categories -->
                  <div class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mt-2">
                    Specialized
                  </div>
                  
                  {#each clothingCategories.filter(c => 
                    c.id === 'travel-suits' || 
                    c.id === 'rave-suits' || 
                    c.id === 'protective-suits'
                  ) as category}
                    <a 
                      href="/clothing/{category.id}" 
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      on:click={() => isCategoriesOpen = false}
                      data-sveltekit-prefetch
                    >
                      <span class="mr-2">{category.icon}</span>
                      {category.name}
                    </a>
                  {/each}
                  
                  <div class="border-t border-gray-100 mt-2 pt-2">
                    <a 
                      href="/clothing" 
                      class="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 font-medium"
                      on:click={() => isCategoriesOpen = false}
                      data-sveltekit-prefetch
                    >
                      View All Categories →
                    </a>
                  </div>
                </div>
              </div>
            {/if}
          </div>
          
          <a 
            href="/fabrics" 
            class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            data-sveltekit-prefetch
          >
            All Fabrics
          </a>
          
          <a 
            href="/compare" 
            class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            data-sveltekit-prefetch
          >
            Compare
          </a>
          
          <!-- Travel Recommendations Link -->
          <a 
            href="/travel-recommendations" 
            class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            data-sveltekit-prefetch
          >
            Travel Guide
          </a>
          
          <!-- Fabric Combinations Link -->
          <a 
            href="/combinations" 
            class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            data-sveltekit-prefetch
          >
            Fabric Combos
          </a>

          <a 
            href="/clothing/one-piece" 
            class="border-transparent text-indigo-600 hover:border-indigo-300 hover:text-indigo-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            data-sveltekit-prefetch
          >
            One-Piece Guide
          </a>
        </div>
      </div>
      
      <!-- Mobile menu button -->
      <div class="flex items-center sm:hidden">
        <button
          on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
        >
          <span class="sr-only">Open main menu</span>
          <svg 
            class="h-6 w-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {#if isMobileMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>
  
  <!-- Mobile menu -->
  {#if isMobileMenuOpen}
    <div class="mobile-menu sm:hidden bg-white border-t border-gray-200">
      <div class="pt-2 pb-3 space-y-1">
        <a 
          href="/" 
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
          on:click={() => isMobileMenuOpen = false}
          data-sveltekit-prefetch
        >
          Home
        </a>
        
        <!-- Mobile Clothing Categories -->
        <div>
          <div class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500">
            Clothing Categories
          </div>
          <div class="pl-6">
            <a 
              href="/clothing" 
              class="block pr-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              on:click={() => isMobileMenuOpen = false}
              data-sveltekit-prefetch
            >
              👕 All Clothing Items
            </a>
            
            {#each clothingCategories.slice(0, 6) as category}
              <a 
                href="/clothing/{category.id}" 
                class="block pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                on:click={() => isMobileMenuOpen = false}
                data-sveltekit-prefetch
              >
                <span class="mr-2">{category.icon}</span>
                {category.name}
              </a>
            {/each}
            
            <a 
              href="/clothing" 
              class="block pr-4 py-2 text-sm font-medium text-blue-600 hover:bg-gray-50"
              on:click={() => isMobileMenuOpen = false}
              data-sveltekit-prefetch
            >
              View All Categories →
            </a>
          </div>
        </div>
        
        <a 
          href="/fabrics" 
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
          on:click={() => isMobileMenuOpen = false}
          data-sveltekit-prefetch
        >
          All Fabrics
        </a>
        
        <a 
          href="/compare" 
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
          on:click={() => isMobileMenuOpen = false}
          data-sveltekit-prefetch
        >
          Compare
        </a>
        
        <a 
          href="/travel-recommendations" 
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
          on:click={() => isMobileMenuOpen = false}
          data-sveltekit-prefetch
        >
          Travel Guide
        </a>
        
        <a 
          href="/combinations" 
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
          on:click={() => isMobileMenuOpen = false}
          data-sveltekit-prefetch
        >
          Fabric Combos
        </a>

        <a 
          href="/clothing/one-piece" 
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300"
          on:click={() => isMobileMenuOpen = false}
          data-sveltekit-prefetch
        >
          One-Piece Guide
        </a>
      </div>
    </div>
  {/if}
</nav>

<style>
  /* KEEP ONLY ONE .text-indigo-600 rule */
  /* Remove this empty one (or the first one if both are empty): */
  .text-indigo-600 {
    color: rgb(79 70 229); /* Keep this one if you want custom color */
  }
  
  /* Keep your other styles: */
  .categories-dropdown .dropdown-enter {
    opacity: 0;
    transform: translateY(-10px);
  }
  
  .categories-dropdown .dropdown-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 150ms ease-out, transform 150ms ease-out;
  }
  
  .categories-dropdown .dropdown-leave {
    opacity: 1;
    transform: translateY(0);
  }
  
  .categories-dropdown .dropdown-leave-active {
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 150ms ease-in, transform 150ms ease-in;
  }
</style>