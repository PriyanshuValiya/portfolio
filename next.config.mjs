/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "seeklogo.com",
      "wikipedia.org",
      "cdn3d.iconscout.com",
      "w7.pngwing.com",
      "gimgs2.nohat.cc",
      "encrypted-tbn0.gstatic.com"
    ],
  },
};

export default nextConfig;
