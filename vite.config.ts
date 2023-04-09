/// <reference types="vitest" />
import vue from "@vitejs/plugin-vue";

import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import { join } from "path";

import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: join("src", "auto-imports.d.ts"),
      eslintrc: {
        enabled: true,
        filepath: "eslintrc-auto-import.json",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  clearScreen: true,
  envPrefix: ["VITE_", "TAURI_"],
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: "./dist",
    // See https://tauri.app/v1/references/webview-versions for details
    target: ["es2021", "chrome100", "safari13"],
    minify: !process.env.TAURI_DEBUG,
    sourcemap: !!process.env.TAURI_DEBUG,
    emptyOutDir: true,
  },
  test: {
    include: ["tests/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
