import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Altere 'seu-usuario' e 'portfolio-eduarda' para os nomes corretos
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-pessoal/',
})
