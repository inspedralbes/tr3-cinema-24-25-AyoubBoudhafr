/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  output: "export",
  images: {
    unoptimized: true // Necesario si usas `next/image`
  }
};

export default nextConfig;
