import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to '/' for User Pages (e.g. username.github.io)
  base: '/',
})