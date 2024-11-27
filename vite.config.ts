import { defineConfig } from "vite";
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },

  preview: { host: "0.0.0.0", port: 3000 },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
