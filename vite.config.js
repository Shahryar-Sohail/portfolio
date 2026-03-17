import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";  // ← This is the correct import!

export default defineConfig({
  plugins: [react(), tailwindcss()],   // ← Now it will resolve
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});