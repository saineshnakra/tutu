
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://tutu-app-199983032721.us-central1.run.app/api/:path*', // Proxy to external API
      },
    ];
  },
};

export default nextConfig;