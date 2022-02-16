import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  build: {
	  minify: 'esbuild',
	  plugins: [viteCompression()],
  }
})
