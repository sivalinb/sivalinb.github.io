import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.PORTFOLIO_SITE_URL || "https://sivalinb.github.io",
  base: process.env.PORTFOLIO_BASE_PATH || "/",
  output: "static",
  trailingSlash: "always",
});
