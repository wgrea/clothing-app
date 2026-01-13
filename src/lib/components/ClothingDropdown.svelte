<!-- src/lib/components/ClothingDropdown.svelte -->
<script lang="ts">
  import { clothingCategories } from '$lib/data/clothingCategories';
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  function close() {
    dispatch('close');
  }
</script>

<div class="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
  <div class="py-1" role="menu">
    <a 
      href="/clothing" 
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium"
      on:click={close}
      data-sveltekit-prefetch
    >
      👕 All Clothing Items
    </a>
    
    <div class="border-t border-gray-100 my-1"></div>
    
    <div class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
      Popular Categories
    </div>
    
    {#each clothingCategories.slice(0, 5) as category}
      <a 
        href="/clothing/{category.id}" 
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        on:click={close}
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
        on:click={close}
        data-sveltekit-prefetch
      >
        View All Categories →
      </a>
    </div>
  </div>
</div>