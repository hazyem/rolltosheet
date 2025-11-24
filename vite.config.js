import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'toilet-roll.png', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Roll to Sheet Calculator',
        short_name: 'SheetCalc',
        description: 'Calculate paper roll to sheet costing with real-time calculations',
        theme_color: '#2563eb',
        background_color: '#f8fafc',
        display: 'standalone',
        orientation: 'portrait',
        scope: './',
        start_url: './',
        icons: [
          {
            src: 'toilet-roll.png',
            sizes: 'any',
            type: 'image/png'
          },
          {
            src: 'toilet-roll.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'toilet-roll.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'toilet-roll.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
  base: './',
})

