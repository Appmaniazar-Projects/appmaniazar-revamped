/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for cPanel hosting
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Set trailing slash for consistency
  trailingSlash: true,
  
  // Asset prefix for cPanel (if needed)
  // assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Base path (if deploying to subdirectory)
  // basePath: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Ensure proper static generation
  generateStaticParams: false,
  
  // Disable server-side features for static export
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig
