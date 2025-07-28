import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": Path.resolve(__dirname, "./src"),
      "@components": Path.resolve(__dirname, "./src/components"),
    },
  },
  // Add this to enable SPA fallback for dev server
  server: {
    historyApiFallback: true,
  },
  build: {
    outDir: "dist", // default, can be omitted if you like
  },
});
