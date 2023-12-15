import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: "./env",
  assetsInclude: ["**/*.bib"],
  plugins: [react(), svgrPlugin(), ViteImageOptimizer({ test: /\.svg$/i })],
  test: { environment: "happy-dom" },
});
