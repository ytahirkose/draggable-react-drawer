import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      'draggable-react-drawer': path.resolve(__dirname, '../src/index.ts')
    }
  },
  optimizeDeps: {
    include: ['antd-mobile']
  }
})
