<!-- src/lib/components/DesktopNav.svelte -->
<script lang="ts">
  import { clothingCategories } from '$lib/data/clothingCategories';
  
  export let isCategoriesOpen = false;
  export let toggleCategories: () => void;
</script>

<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
  <NavLink href="/" desktop>Home</NavLink>
  
  <!-- Clothing Dropdown -->
  <div class="categories-dropdown relative">
    <button
      on:click={toggleCategories}
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

    {#if isCategoriesOpen}
      <ClothingDropdown on:close={() => toggleCategories()} />
    {/if}
  </div>
  
  <NavLink href="/fabrics" desktop>All Fabrics</NavLink>
  <NavLink href="/compare" desktop>Compare</NavLink>
  <NavLink href="/clothing/one-piece" desktop class="text-indigo-600 hover:text-indigo-800">
    One-Piece Guide
    </NavLink>
</div>

<script lang="ts" context="module">
  import NavLink from './NavLink.svelte';
  import ClothingDropdown from './ClothingDropdown.svelte';
</script>