<script lang="ts">
  import type { ClothingItem } from '$lib/types/clothing';
  
  export let snowsuits: ClothingItem[];
  
  const types = [
    { id: 'insulated', label: 'Insulated', icon: '🧊' },
    { id: 'shell', label: 'Shell', icon: '🧥' },
    { id: 'softshell', label: 'Softshell', icon: '🤸' },
    { id: 'bib', label: 'Bib', icon: '👖' },
    { id: 'one-piece', label: 'One-Piece', icon: '👕' }
  ] as const;
  
  type SnowsuitType = typeof types[number]['id'];
  
  const temperatureRanges: Record<SnowsuitType, string> = {
    'insulated': 'Below -10°C (14°F)',
    'shell': '-10°C to 0°C (14°F to 32°F)',
    'softshell': '-5°C to 5°C (23°F to 41°F)',
    'bib': 'Variable with layering',
    'one-piece': 'Below -5°C (23°F)'
  };
  
  const bestActivities: Record<SnowsuitType, string[]> = {
    'insulated': ['Downhill skiing', 'Snowboarding in extreme cold', 'Snowmobiling'],
    'shell': ['Variable conditions', 'Layering systems', 'Backcountry touring'],
    'softshell': ['Cross-country skiing', 'Ski touring', 'Active winter sports'],
    'bib': ['Deep snow activities', 'Kids play', 'Snowmobiling'],
    'one-piece': ['Extreme cold', 'Children\'s wear', 'Ski patrol']
  };
</script>

<div class="bg-white rounded-lg shadow p-6">
  <h2 class="text-2xl font-bold mb-4">Snowsuit Types Comparison</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
    {#each types as type (type.id)}
      <div class="border rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
        <div class="text-3xl mb-2">{type.icon}</div>
        <h3 class="font-semibold mb-1">{type.label}</h3>
        <p class="text-sm text-gray-600">
          {snowsuits.filter(s => s.name.toLowerCase().includes(type.id)).length} options
        </p>
      </div>
    {/each}
  </div>
  
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Temperature Range</th>
          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Best For</th>
          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Key Features</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        {#each types as type (type.id)}
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-3">
              <div class="flex items-center">
                <span class="text-xl mr-2">{type.icon}</span>
                <span class="font-medium">{type.label}</span>
              </div>
            </td>
            <td class="px-4 py-3">
              <span class="text-sm">{temperatureRanges[type.id]}</span>
            </td>
            <td class="px-4 py-3">
              <ul class="text-sm">
                {#each bestActivities[type.id] as activity (activity)}
                  <li class="mb-1">• {activity}</li>
                {/each}
              </ul>
            </td>
            <td class="px-4 py-3">
              <div class="text-sm">
                {#if type.id === 'insulated'}
                  Built-in insulation, warmest option
                {:else if type.id === 'shell'}
                  Waterproof outer layer, versatile layering
                {:else if type.id === 'softshell'}
                  Breathable, flexible, active-friendly
                {:else if type.id === 'bib'}
                  Snow protection, adjustable fit
                {:else}
                  Complete coverage, no cold gaps
                {/if}
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>