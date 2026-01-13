// src/routes/clothing/[category]/+page.ts
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
  console.log('✅ LOAD FUNCTION: params =', params);
  console.log('✅ LOAD FUNCTION: category =', params.category);
  
  // Return directly - SvelteKit will handle this
  return {
    category: params.category || ''
  };
};