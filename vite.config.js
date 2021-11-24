import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  react(),
  VitePWA({
    base: '/',
    registerType: 'autoUpdate',
    manifest: {
      name: 'Instablam',
      short_name: 'IB',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'icon-192x192.png',
          sizes: '192x192',
          type : 'image/png',
        },
        {
          src: 'icon-512x512',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'icon-512x512',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    }
  })
  ]
})
