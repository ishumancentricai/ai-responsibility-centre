import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `BASE_PATH` lets us deploy under a sub-path on GitHub Pages
// (e.g. /ai-responsibility-centre/) while keeping it at "/" for a
// custom domain later. The deploy workflow sets it automatically.
const base = process.env.BASE_PATH ?? '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
