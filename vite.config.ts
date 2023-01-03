import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import svgr from 'vite-plugin-svgr';
import { rmSync } from 'node:fs';
import electron from 'vite-electron-plugin';
import { customStart, loadViteEnv } from 'vite-electron-plugin/plugin';
import renderer from 'vite-plugin-electron-renderer';
import pkg from './package.json';
import qiankun from 'vite-plugin-qiankun';

rmSync(path.join(__dirname, 'dist-electron'), { recursive: true, force: true });

const isDevelopment = process.env.NODE_ENV === 'development' || !!process.env.VSCODE_DEBUG;
const isProduction = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
  },
  optimizeDeps: {
    include: ['react/jsx-runtime'],
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
    qiankun('remote-assistance-code', {
      // 微前端應用名,主應用接口名需一致
      useDevMode: true
    }),
    electron({
      include: ['electron'],
      transformOptions: {
        sourcemap: isDevelopment
      },
      plugins: [
        ...(!!process.env.VSCODE_DEBUG
          ? [
              // Will start Electron via VSCode Debug
              customStart(() =>
                debounce(() => console.log(/* For `.vscode/.debug.script.mjs` */ '[startup] Electron App'))
              )
            ]
          : []),
        loadViteEnv()
      ]
    }),
    renderer({
      nodeIntegration: true
    })
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
