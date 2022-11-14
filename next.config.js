const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '89.223.67.173',
        port: '',
        pathname: '/media/**'
      }
    ]
  }
}

module.exports = nextConfig
