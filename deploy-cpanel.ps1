# cPanel Deployment Script for Appmaniazar Website (Windows PowerShell)
# This script prepares the Next.js app for cPanel static hosting

Write-Host "Starting cPanel deployment preparation..." -ForegroundColor Green

# Clean previous build
Write-Host "Cleaning previous build..." -ForegroundColor Yellow
if (Test-Path ".next") { Remove-Item -Recurse -Force ".next" }
if (Test-Path "out") { Remove-Item -Recurse -Force "out" }
if (Test-Path "dist") { Remove-Item -Recurse -Force "dist" }

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

# Build the project for static export
Write-Host "Building for static export..." -ForegroundColor Yellow
npm run build

# The static files are now in the 'out' directory automatically
Write-Host "Static export completed..." -ForegroundColor Green

# Create cPanel-ready directory structure
Write-Host "Creating cPanel directory structure..." -ForegroundColor Yellow
if (Test-Path "cpanel-deploy") { Remove-Item -Recurse -Force "cpanel-deploy" }
New-Item -ItemType Directory -Path "cpanel-deploy" | Out-Null

# Copy out directory contents
if (Test-Path "out") {
    Copy-Item -Path "out\*" -Destination "cpanel-deploy" -Recurse -Force
}

# Copy public directory contents
if (Test-Path "public") {
    Copy-Item -Path "public\*" -Destination "cpanel-deploy" -Recurse -Force
}

# Copy .htaccess to root
if (Test-Path "public\.htaccess") {
    Copy-Item -Path "public\.htaccess" -Destination "cpanel-deploy\.htaccess" -Force
}

# Create deployment info file
Write-Host "Creating deployment info..." -ForegroundColor Yellow
$deploymentDate = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$nextVersion = npm list next 2>$null | Select-String "next@" | ForEach-Object { $_ -replace '.*@([0-9.]+).*', '$1' }

$deploymentInfo = @"
Appmaniazar Website - cPanel Deployment
==========================================

Deployment Date: $deploymentDate
Next.js Version: $nextVersion
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
"@

Set-Content -Path "cpanel-deploy\DEPLOYMENT_INFO.txt" -Value $deploymentInfo -Encoding UTF8

Write-Host "cPanel deployment preparation complete!" -ForegroundColor Green
Write-Host "Files ready in: cpanel-deploy\" -ForegroundColor Cyan
Write-Host "Upload all files from cpanel-deploy\ to your cPanel File Manager" -ForegroundColor Cyan
Write-Host "See DEPLOYMENT_INFO.txt for detailed instructions" -ForegroundColor Cyan

# Ask if user wants to open the deployment folder
$openFolder = Read-Host "Would you like to open the cpanel-deploy folder? (y/n)"
if ($openFolder -eq "y" -or $openFolder -eq "Y") {
    Start-Process "cpanel-deploy"
}
