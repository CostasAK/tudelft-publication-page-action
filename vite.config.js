import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import svgrPlugin from "vite-plugin-svgr";
import webfontDownload from "vite-plugin-webfont-dl";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: "./env",
  assetsInclude: ["**/*.bib"],
  plugins: [
    react(),
    svgrPlugin(),
    ViteImageOptimizer({ test: /\.svg$/i }),
    webfontDownload(),
  ],
  test: { environment: "happy-dom" },
});
