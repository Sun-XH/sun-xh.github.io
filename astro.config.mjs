import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sun-xh.github.io",
  output: "static",
  devToolbar: {
    enabled: false
  },
  build: {
    format: "file"
  }
});
