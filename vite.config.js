import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages project site: https://chelpa.github.io/chazeware/
  base: '/chazeware/',
  plugins: [react()],
})
