import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://DanielAcevedoVega.github.io/proyectoConsultasMedicas/tree/git-page",
})
