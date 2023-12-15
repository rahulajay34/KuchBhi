import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/KuchBhi/",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
  build: {
    outDir: "dist",
    assetsDir: "assets", // Use relative paths for assets
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks: undefined, // Let Vite handle code splitting
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
