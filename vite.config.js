import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/countdown-timer',
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets')
    }
  }
})
