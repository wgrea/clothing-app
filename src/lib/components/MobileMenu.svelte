<!-- src/lib/components/MobileMenu.svelte -->
<script lang="ts">
  import { clothingCategories } from '$lib/data/clothingCategories';
  
  export let isOpen = false;
  export let closeMenu: () => void;
</script>

{#if isOpen}
  <div class="mobile-menu sm:hidden bg-white border-t border-gray-200">
    <div class="pt-2 pb-3 space-y-1">
      <NavLink href="/" on:click={closeMenu}>Home</NavLink>
      
      <!-- Mobile Clothing Categories -->
      <div>
        <div class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500">
          Clothing Categories
        </div>
        <div class="pl-6">
          <NavLink href="/clothing" on:click={closeMenu} class="font-medium">
            👕 All Clothing Items
          </NavLink>
          
          {#each clothingCategories.slice(0, 6) as category}
            <NavLink 
              href="/clothing/{category.id}" 
              on:click={closeMenu}
              class="flex items-center"
            >
              <span class="mr-2">{category.icon}</span>
              {category.name}
            </NavLink>
          {/each}
          
          <NavLink href="/clothing" on:click={closeMenu} class="font-medium text-blue-600">
            View All Categories →
          </NavLink>
        </div>
      </div>
      
      <NavLink href="/fabrics" on:click={closeMenu}>All Fabrics</NavLink>
      <NavLink href="/compare" on:click={closeMenu}>Compare</NavLink>
      <NavLink href="/clothing/one-piece" on:click={closeMenu} class="text-indigo-600">
        One-Piece Guide
      </NavLink>
    </div>
  </div>
{/if}

<script lang="ts" context="module">
  import NavLink from './NavLink.svelte';
</script>