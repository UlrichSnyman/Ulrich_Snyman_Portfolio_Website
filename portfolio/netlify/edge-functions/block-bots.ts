import type { Config, Context } from "@netlify/edge-functions";

// robots.txt is only advisory, so known scrapers are refused at the edge.
const BLOCKED_AGENTS = [
  // AI training / answer-engine crawlers
  "gptbot", "chatgpt-user", "oai-searchbot", "claudebot", "claude-web", "anthropic-ai",
  "ccbot", "perplexitybot", "bytespider", "amazonbot", "meta-externalagent", "facebookbot",
  "diffbot", "cohere-ai", "imagesiftbot", "omgili", "youbot", "timpibot",
  // SEO and data-harvesting scrapers
  "ahrefsbot", "semrushbot", "mj12bot", "dotbot", "blexbot", "petalbot", "dataforseobot",
  "serpstatbot", "megaindex", "scrapy",
  // Vulnerability scanners
  "masscan", "zgrab", "nikto", "sqlmap", "nmap",
];
// Generic HTTP clients, headless browsers and empty user agents are deliberately
// allowed: corporate link scanners (Safe Links, Proofpoint, Mimecast, etc.) use
// them, and a 403 makes those scanners more likely to flag the site.

export default async (request: Request, context: Context) => {
  const ua = (request.headers.get("user-agent") || "").toLowerCase();

  if (ua && BLOCKED_AGENTS.some((bot) => ua.includes(bot))) {
    return new Response("Forbidden", {
      status: 403,
      headers: { "content-type": "text/plain", "cache-control": "no-store" },
    });
  }

  return context.next();
};

export const config: Config = {
  path: "/*",
  // Bots must still be able to read the rules they are expected to follow.
  excludedPath: ["/robots.txt", "/sitemap.xml", "/favicon.ico"],
};
