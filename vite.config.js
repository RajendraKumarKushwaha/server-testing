import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  ssr: {
    external: ['react', 'react-dom'], // External dependencies for SSR
  },
})
