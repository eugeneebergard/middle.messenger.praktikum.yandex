import { defineConfig } from 'vite';
import { resolve } from 'path'
// @ts-ignore
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  resolve: {
    alias: { "@": resolve(__dirname, './src') },
  },
  plugins: [handlebars()],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  preview: { host: "0.0.0.0", port: 3000 },
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern-compiler'
      }
    }
  }
});
