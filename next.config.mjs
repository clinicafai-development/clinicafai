/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable network access from other devices
  experimental: {
    // This allows the dev server to be accessible from other devices on the network
  },
  // Configure the server to listen on all network interfaces
  async rewrites() {
    return [];
  },
  // Configure external image domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jnksxvamrbsxfahkbxgi.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;
