// postcss.config.js - CORRECT for Tailwind v4
export default {
  plugins: {
    '@tailwindcss/postcss': {},  // <-- This is the correct plugin name for v4
    autoprefixer: {},
  },
}