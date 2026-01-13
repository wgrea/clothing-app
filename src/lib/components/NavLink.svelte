<!-- src/lib/components/NavLink.svelte -->
<script lang="ts">
  export let href: string;
  export let desktop = false;
  
  // For custom class additions
  let className = '';
  export { className as class };
</script>

{#if desktop}
  <a 
    {href} 
    class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium {className}"
    data-sveltekit-prefetch
    on:click
  >
    <slot />
  </a>
{:else}
  <a 
    {href} 
    class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 {className}"
    data-sveltekit-prefetch
    on:click
  >
    <slot />
  </a>
{/if}