import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const root = new URL(import.meta.env.BASE_URL, site);
  return new Response("User-agent: *\nAllow: /\nSitemap: " + new URL("sitemap.xml", root).href + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
