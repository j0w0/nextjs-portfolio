/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.j0w0.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "http",
        hostname: "j0w0.local",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
