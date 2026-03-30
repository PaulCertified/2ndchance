/**
 * Writes public/sitemap.xml and public/robots.txt before build.
 * Set VITE_SITE_URL in .env (e.g. https://www.yourdomain.com — no trailing slash).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function loadEnvFile() {
  try {
    const raw = readFileSync(join(root, ".env"), "utf8");
    for (const line of raw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let val = trimmed.slice(eq + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (!process.env[key]) process.env[key] = val;
    }
  } catch {
    /* no .env */
  }
}

loadEnvFile();

const baseRaw = process.env.VITE_SITE_URL?.trim() || "https://REPLACE_WITH_YOUR_LIVE_DOMAIN.com";
const base = baseRaw.replace(/\/$/, "");

const postsPath = join(root, "src/content/blog/posts.ts");
const postsSource = readFileSync(postsPath, "utf8");
const slugs = [...postsSource.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

const urls = [
  { loc: `${base}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${base}/blog`, changefreq: "weekly", priority: "0.9" },
  ...slugs.map((slug) => ({
    loc: `${base}/blog/${slug}`,
    changefreq: "monthly",
    priority: "0.8",
  })),
];

const escapeXml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: ${escapeXml(`${base}/sitemap.xml`)}
`;

writeFileSync(join(root, "public/sitemap.xml"), sitemap, "utf8");
writeFileSync(join(root, "public/robots.txt"), robots, "utf8");

if (base.includes("REPLACE_WITH_YOUR_LIVE_DOMAIN")) {
  console.warn(
    "[sitemap] Set VITE_SITE_URL in .env to your real HTTPS domain before deploying (then rebuild).",
  );
} else {
  console.log(`[sitemap] Wrote ${urls.length} URLs for ${base}`);
}
