/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Это нужно, чтобы lucide-react иконки работали без ошибок
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
