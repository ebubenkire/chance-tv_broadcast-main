/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/chance-tv_broadcast-main',
  assetPrefix: '/chance-tv_broadcast-main/',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 