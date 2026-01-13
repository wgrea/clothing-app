<!-- src/routes/test-data/+page.svelte -->
<script lang="ts">
  import { clothingCategories } from '$lib/data/clothingCategories';
  import { clothingItems } from '$lib/data/clothingItems';
  
  console.log('=== TEST DATA PAGE ===');
  console.log('Categories:', clothingCategories);
  console.log('Items:', clothingItems);
  console.log('Water suit items:', clothingItems.filter(i => i.category === 'water-suits'));
</script>

<h1>Test Data</h1>
<p>Categories loaded: {clothingCategories.length}</p>
<p>Items loaded: {clothingItems.length}</p>
<p>Water suit items: {clothingItems.filter(i => i.category === 'water-suits').length}</p>