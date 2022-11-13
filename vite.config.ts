/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    })
  ],
  test: {
    environment: 'happy-dom'
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Scaffold',
      fileName: 'scaffold'
    },
    rollupOptions: {
      external: [
        '@emotion/react',
        '@emotion/styled',
        '@mui/material',
        'nanoid',
        'react',
        'react-dom',
        'recoil'
      ],
      output: {
        globals: {
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'styled',
          '@mui/material': 'MaterialUI',
          nanoid: 'nanoid',
          react: 'React',
          'react-dom': 'ReactDOM',
          recoil: 'Recoil'
        }
      }
    }
  }
})
