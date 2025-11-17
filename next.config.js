/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress.j0w0.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "http",
        hostname: "j0w0-wordpress.j0w0",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "j0w0-wordpress.j0w0",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
