import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/black_square',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})