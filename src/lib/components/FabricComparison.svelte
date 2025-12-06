<!-- src/lib/components/FabricComparison.svelte -->
<script lang="ts">
  import type { Fabric } from '$lib/types/fabric';
  export let fabricA: Fabric;
  export let fabricB: Fabric;
</script>

<div class="grid grid-cols-2 gap-4 p-4 border rounded-lg">
  <div>
    <h3 class="font-bold">{fabricA.name}</h3>
    <p class="text-sm text-gray-600">Also known as: {fabricA.alsoKnownAs.join(', ')}</p>
    <!-- Properties comparison -->
  </div>
  <div>
    <h3 class="font-bold">{fabricB.name}</h3>
    <p class="text-sm text-gray-600">Also known as: {fabricB.alsoKnownAs.join(', ')}</p>
    <!-- Properties comparison -->
  </div>
</div>