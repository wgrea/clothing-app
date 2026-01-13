<!-- src/routes/clothing/one-piece/+page.svelte -->
<script lang="ts">
    import { getOnePieceSuits } from '$lib/utils/suitFilters';
    import ClothingCard from '$lib/components/ClothingCard.svelte';
    import SnowsuitComparison from '$lib/components/SnowsuitComparison.svelte';

    const suits = getOnePieceSuits();
</script>

<div class="p-8 max-w-7xl mx-auto">
    <header class="mb-10">
        <h1 class="text-4xl font-bold text-slate-900">One-Piece Suit Guide</h1>
        <p class="text-lg text-slate-600">From arctic exploration to high-fashion latex.</p>
    </header>

    <section class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">Technical Comparison</h2>
        <SnowsuitComparison snowsuits={suits} />
    </section>

    <section>
        <h2 class="text-2xl font-semibold mb-6">Explore by Category</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each suits as suit}
                <ClothingCard item={suit} />
            {/each}
        </div>
    </section>
</div>