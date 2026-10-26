/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/voisage-ai-landing-page' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/voisage-ai-landing-page' : '',
  },
};

module.exports = nextConfig;
