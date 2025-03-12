/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/chance-tv_broadcast-main',
  assetPrefix: '/chance-tv_broadcast-main/',
}

module.exports = nextConfig 