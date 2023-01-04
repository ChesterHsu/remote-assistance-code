import react from '@vitejs/plugin-react';
import * as path from 'path';
import svgr from 'vite-plugin-svgr';
import qiankun from 'vite-plugin-qiankun';
import electron from 'vite-electron-plugin';
import requireTransform from 'vite-plugin-require-transform';
import { customStart, loadViteEnv } from 'vite-electron-plugin/plugin';
import { defineConfig } from 'vite';
import { rmSync } from 'node:fs';
import viteCompression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa'
import pkg from './package.json';


rmSync(path.join(__dirname, 'dist-electron'), { recursive: true, force: true });

const isDevelopment = process.env.NODE_ENV === 'development' || !!process.env.VSCODE_DEBUG;
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  build: {
    sourcemap: true,
    outDir: 'dist',
    assetsDir: 'static/img/',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const arr = id.toString().split('node_modules/')[1].split('/')
            switch(arr[0]) {
              case '@react':
                return '_' + arr[0]
                break
              default :
                return '__vendor'
                break
            }
          }
        },
        chunkFileNames: 'static/js1/[name]-[hash].js',
        entryFileNames: 'static/js2/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      },
    }
  },
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
      '@css': path.resolve(__dirname, 'src/css')
    }
  },
  plugins: [
    react(),
    svgr(),
    requireTransform({}),
    qiankun('remote-assistance-code', {
      // 微前端應用名,主應用接口名需一致
      useDevMode: true
    }),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }
    }),
    electron({
      include: ['electron'],
      transformOptions: {
        sourcemap: isDevelopment
      },
      plugins: [
        ...(!!process.env.VSCODE_DEBUG
          ? [
              customStart(() =>
                debounce(() => console.log(/* For `.vscode/.debug.script.mjs` */ '[startup] Electron App'))
              )
            ]
          : []),
        loadViteEnv()
      ]
    }),
    viteCompression(),
  ],
  server: !!process.env.VSCODE_DEBUG
      ? (() => {
        const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL);
        return {
          host: url.hostname,
          port: +url.port
        };
      })()
      : undefined,
  clearScreen: false
});

function debounce<Fn extends (...args: any[]) => void>(fn: Fn, delay = 299): Fn {
  let t: NodeJS.Timeout;
  return ((...args: Parameters<Fn>) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  }) as Fn;
}
