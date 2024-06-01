import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-playground/",
  build: {
    outDir: "https://github.com/Kacper99999/goit-react-hw-01-components",
  },
});
