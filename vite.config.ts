import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
// @ts-ignore
import autoprefixer from 'autoprefixer'

export default defineConfig({
    plugins: [react(), svgr()],
    css: {
        postcss: {
            plugins: [autoprefixer]
        }
    }
})