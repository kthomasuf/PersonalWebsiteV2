import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/PersonalWebsiteV2/",
  plugins: [react()],
  optimizeDeps: {
    include: ["@react-three/drei", "three"],
  },
});
