/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/testing',
        destination: '/test',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
