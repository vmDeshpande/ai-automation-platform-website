/** @type {import('next').NextConfig} */
const repoName = "ai-automation-platform-website"; // 👈 CHANGE THIS

const nextConfig = {
  output: "export",

  // Required for GitHub Pages
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : "",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  // Optional but useful for docs-heavy sites
  reactStrictMode: true,

  // Keep this ONLY because you’re iterating fast on UI/docs
  // Remove later once everything is stable
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
