import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'Scaffold',
      fileName: 'scaffold.js'
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@emotion/styled', '@emotion/react', '@mui/material'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@emotion/styled': 'styled',
          '@emotion/react': 'emotionReact',
          '@mui/material': 'material'
        }
      }
    }
  }
})
