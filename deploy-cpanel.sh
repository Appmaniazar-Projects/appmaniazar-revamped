#!/bin/bash

# cPanel Deployment Script for Appmaniazar Website
# This script prepares the Next.js app for cPanel static hosting

echo "🚀 Starting cPanel deployment preparation..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf .next out dist

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project for static export (export happens automatically)
echo "🏗️ Building for static export..."
npm run build

# The static files are now in the 'out' directory automatically
echo "📤 Static export completed..."

# Create cPanel-ready directory structure
echo "📁 Creating cPanel directory structure..."
mkdir -p cpanel-deploy
cp -r out/* cpanel-deploy/
cp -r public/* cpanel-deploy/

# Copy .htaccess to root
cp public/.htaccess cpanel-deploy/

# Create deployment info file
echo "📋 Creating deployment info..."
cat > cpanel-deploy/DEPLOYMENT_INFO.txt << EOF
Appmaniazar Website - cPanel Deployment
==========================================

Deployment Date: $(date)
Next.js Version: $(npm list next | grep next | cut -d'@' -f2)
Build Mode: Static Export (output: export)

Files to Upload:
- All files in this directory
- Upload to your cPanel public_html or desired subdirectory
- Ensure .htaccess file is uploaded

Post-Upload Steps:
1. Verify .htaccess is working (check URL routing)
2. Test all navigation links
3. Verify images and assets load correctly
4. Test WhatsApp button functionality
5. Test all external links

Notes:
- This is a static export build (Next.js 16+)
- No server-side rendering
- All routing is client-side
- Images are in the images/ folder
- PDFs are in the root folder

For support, check the Next.js static export documentation.
EOF

echo "✅ cPanel deployment preparation complete!"
echo "📂 Files ready in: cpanel-deploy/"
echo "🌐 Upload all files from cpanel-deploy/ to your cPanel File Manager"
echo "📋 See DEPLOYMENT_INFO.txt for detailed instructions"
