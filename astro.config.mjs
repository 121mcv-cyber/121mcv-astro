import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://121mcv.com', // <--- ADD THIS LINE
  vite: {
    plugins: [tailwindcss()]
  }
});