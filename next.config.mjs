/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repository name is "lunar-lab", uncomment these lines:
  basePath: '/lunar-lab',
  assetPrefix: '/lunar-lab',
};

export default nextConfig;
