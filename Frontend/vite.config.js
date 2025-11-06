import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // proxy /api/* to your backend (change target as needed)
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '') // remove /api prefix if backend doesn't expect it
      }
    }
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "setupTest.js"
  }
});
