import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 設置別名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@comps': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@tools': path.resolve(__dirname, 'src/tools'),
      '@plugins': path.resolve(__dirname, 'src/plugins'),
      '@icon': path.resolve(__dirname, 'src/icons'),
      '@css': path.resolve(__dirname, 'src/css'),
    },
  },
  plugins: [
      react(),
      svgr(),
  ]
})
