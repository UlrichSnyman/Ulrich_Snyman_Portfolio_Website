import type { Config, Context } from "@netlify/edge-functions";

// robots.txt is only advisory, so known scrapers are refused at the edge.
const BLOCKED_AGENTS = [
  "gptbot", "chatgpt-user", "oai-searchbot", "claudebot", "claude-web", "anthropic-ai",
  "ccbot", "perplexitybot", "bytespider", "amazonbot", "meta-externalagent", "facebookbot",
  "diffbot", "cohere-ai", "imagesiftbot", "omgili", "youbot", "timpibot",
  "ahrefsbot", "semrushbot", "mj12bot", "dotbot", "blexbot", "petalbot", "dataforseobot",
  "serpstatbot", "megaindex", "scrapy", "python-requests", "python-urllib", "aiohttp",
  "httpx", "go-http-client", "libwww-perl", "wget", "curl/", "java/", "okhttp",
  "headlesschrome", "phantomjs", "masscan", "zgrab", "nikto", "sqlmap", "nmap",
];

export default async (request: Request, context: Context) => {
  const ua = (request.headers.get("user-agent") || "").toLowerCase();

  if (!ua || BLOCKED_AGENTS.some((bot) => ua.includes(bot))) {
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
