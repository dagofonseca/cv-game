import { defineConfig } from "vite";

export default defineConfig({
    base: "/cv-game",
    build: {
        minify: "terser"
    }
})