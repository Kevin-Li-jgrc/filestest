import type { NextConfig } from "next";

// GitHub Pages serves the site at /<repo-name>/, so the CI build sets GITHUB_PAGES=true
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? "/filestest" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
