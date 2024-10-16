import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://hirrd-backend.onrender.com',
        changeOrigin: true,
        secure: false,  // Ignore self-signed certs for development
        ws: true,  // WebSocket support if needed
      }
    },
  },

})
