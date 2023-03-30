/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stalak-images.s3.amazonaws.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://stalak.app/:path*', // Reemplaza con tu URL personalizada
        basePath: false,
      },
    ]
  },
}

module.exports = nextConfig
