import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: [ "**/*.jpg"],
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        sourceMap: false,
        includePaths: [
          // @ts-ignore
            path.join(__dirname, 'src'),
            // @ts-ignore
            path.join(__dirname, 'src/app/share'),
            // @ts-ignore
            path.join(__dirname, 'src/app/components'),
            // @ts-ignore
            path.join(__dirname, 'src/app/@company'),
            // @ts-ignore
            path.join(__dirname, 'src/app/@professionals')
        ],
      }
    }
  }
})

