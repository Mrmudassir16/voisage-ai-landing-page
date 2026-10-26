/** @type {import('next').NextConfig} */
// Only apply the repo subpath on GitHub Actions (for GitHub Pages).
// On Vercel, localhost, or custom domains, basePath remains empty ('').
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubPages ? '/voisage-ai-landing-page' : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
