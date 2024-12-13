import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/Cartoon-site/", // Updated to match your repository name
  build: {
    outDir: "build", // Ensure the build output directory is 'build'
  },
});
