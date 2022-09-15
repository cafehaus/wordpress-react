import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      styl: {
        javascriptEnabled: true,
        // additionalData: `@import "@/styles/var.styl";`
        additionalData: `@import "${path.resolve(__dirname, './src/styles/var.styl')}"`
      }
    }
  },
  server: {
    proxy: {
      '/api-dev': {
        target: 'http://192.168.2.5:8088/wp-json/cafe/v1/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-dev/, '')
      }
    }
  }
})
