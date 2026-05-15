/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['vm-812kez314vuymjtxwktyemzn.vusercontent.net'],
}

export default nextConfig
