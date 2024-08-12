import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', // Adresse IP à laquelle le serveur écoute
    port: 8000, // Port utilisé par le serveur de développement
    open: true, // Ouvre automatiquement le navigateur à la racine du projet
    strictPort: true, // Si le port est déjà pris, ne passe pas à un autre
    hmr: {
      port: 8000, // Port utilisé pour les connexions WebSocket
      host: '127.0.0.1',
      protocol: 'ws', // Utilisation de WebSocket
      path: '/ws', // Chemin de l'URL WebSocket
    },
  },
})
