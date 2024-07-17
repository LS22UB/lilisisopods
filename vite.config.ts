import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default () => {
  const env = loadEnv("dev", process.cwd());
  return defineConfig({
    base: `./`,
    plugins: [react()],
    build: {
      rollupOptions: {
        input: {
          app: './src/index.html',
        },
      },
      outDir: "dist",
    },
    publicDir: 'public',
  });
  
};