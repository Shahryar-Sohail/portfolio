import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', // 👈 This is required for GitHub Pages
  plugins: [react()],
})
