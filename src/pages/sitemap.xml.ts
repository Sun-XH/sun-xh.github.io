const pages = ["", "index.html", "pubs.html", "news.html", "experience.html", "contact.html", "about.html"];
const site = "https://sun-xh.github.io";

export function GET() {
  const urls = pages
    .map((page) => {
      const loc = page ? `${site}/${page}` : `${site}/`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>2026-05-13</lastmod>\n    <priority>${page === "" ? "1.00" : "0.80"}</priority>\n  </url>`;
    })
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
