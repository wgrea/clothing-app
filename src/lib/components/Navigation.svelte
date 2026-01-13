<!-- src/lib/components/Navigation.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import MobileMenu from './MobileMenu.svelte';
  import DesktopNav from './DesktopNav.svelte';
  
  let isCategoriesOpen = false;
  let isMobileMenuOpen = false;
  
  function toggleCategories() {
    isCategoriesOpen = !isCategoriesOpen;
  }
  
  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
  
  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }
  
  // Close dropdown when clicking outside
  function handleClickOutside(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.categories-dropdown')) {
      isCategoriesOpen = false;
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
      <!-- Logo -->
      <div class="flex items-center">
        <a href="/" class="flex items-center" data-sveltekit-prefetch>
          <span class="text-2xl mr-2">👕</span>
          <span class="text-xl font-bold text-gray-900">Fabric Guide</span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <DesktopNav {isCategoriesOpen} {toggleCategories} />
      
      <!-- Mobile menu button -->
      <div class="flex items-center sm:hidden">
        <button
          on:click={toggleMobileMenu}
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {#if isMobileMenuOpen}
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {:else}
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>
  
  <!-- Mobile Menu -->
  <MobileMenu isOpen={isMobileMenuOpen} closeMenu={closeMobileMenu} />
</nav>