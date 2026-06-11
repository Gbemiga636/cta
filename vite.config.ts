import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/cta/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})