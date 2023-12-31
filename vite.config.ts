import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import DefineOptions from "unplugin-vue-define-options/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), DefineOptions()],
  css: {
    postcss: {
      plugins: [
        require("postcss-each-variables"),
        require("postcss-nested"),
        require("postcss-each")({
          plugins: {
            beforeEach: [require("postcss-for"), require("postcss-color-mix")],
          },
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
