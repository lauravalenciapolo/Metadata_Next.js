/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["https://stalak-images.s3.amazonaws.com"]
  },
}

module.exports = nextConfig
