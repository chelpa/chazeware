import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Custom domain: https://chazeware.cl/
  base: '/',
  plugins: [react()],
})
