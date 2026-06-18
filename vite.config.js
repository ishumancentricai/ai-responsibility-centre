import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base so assets resolve at ANY path — both the custom domain root
// (ai-responsibility-centre.eu, pinned via public/CNAME) and the GitHub Pages
// project URL (…github.io/ai-responsibility-centre/). Safe because the app
// uses HashRouter, so there are no real server sub-paths.
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
