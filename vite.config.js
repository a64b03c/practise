import path from "node:path";
import { defineConfig } from "vite";
import createVitePlugins from "./vite/plugins";

export default defineConfig({
  plugins: createVitePlugins(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
