import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  // The site is served from https://teaganpal.github.io/ (the root), so base is "/".
  // If you ever move it to a project repo (e.g. github.io/portfolio/), set base: "/portfolio/".
  base: "/",
  plugins: [
    // Generates src/routeTree.gen.ts from the files in src/routes. Must come before react().
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
