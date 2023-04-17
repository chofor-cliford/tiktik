/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "cdn.pixabay.com",
      "p16-amd-va.tiktokcdn.com",
      "image.shutterstock.com",
      "randomuser.me",
    ],
  },
};

module.exports = nextConfig;
