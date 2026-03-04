# cPanel Deployment Guide for Appmaniazar Website

## 🚀 Quick Deployment Steps

### 1. Prepare the Build
```bash
# Run the deployment script
npm run deploy:cpanel
```

### 2. Upload Files to cPanel
1. Login to your cPanel File Manager
2. Navigate to `public_html` (or your desired subdirectory)
3. Upload all files from the `cpanel-deploy/` folder
4. Ensure the `.htaccess` file is uploaded

### 3. Verify Deployment
- Check that your website loads correctly
- Test all navigation links
- Verify images and assets load
- Test WhatsApp button functionality

## 📁 File Structure After Upload

```
public_html/
├── _next/           # Next.js static assets
├── images/          # All images including favicon
├── *.html           # Static HTML pages
├── *.js             # JavaScript bundles
├── *.css            # CSS files
├── privacy-policy.pdf
├── paia-manual.pdf
├── .htaccess        # Apache configuration
└── DEPLOYMENT_INFO.txt
```

## ⚙️ Important Configuration Notes

### .htaccess Features
- **URL Rewriting**: Handles client-side routing
- **Security Headers**: Adds security headers
- **Compression**: Gzips text files
- **Caching**: Sets browser cache for static assets

### Next.js Configuration
- **Static Export**: No server-side rendering
- **Unoptimized Images**: Images served as-is
- **Trailing Slash**: Consistent URL formatting

## 🔧 Troubleshooting

### Common Issues & Solutions

#### 1. 404 Errors on Navigation
**Problem**: Navigation links don't work
**Solution**: Ensure `.htaccess` is uploaded and Apache mod_rewrite is enabled

#### 2. Images Not Loading
**Problem**: Images show as broken
**Solution**: Check that `images/` folder is uploaded and paths are correct

#### 3. WhatsApp Button Not Working
**Problem**: WhatsApp link doesn't open
**Solution**: Verify the link format and that it's not blocked by browser

#### 4. Styles Not Applied
**Problem**: Website looks unstyled
**Solution**: Check CSS files are uploaded and `.htaccess` is working

### cPanel Requirements
- Apache web server with mod_rewrite
- Sufficient storage space (recommended: 100MB+)
- Support for .htaccess files

## 🌐 Domain Configuration

### Subdirectory Installation
If deploying to a subdirectory (e.g., `yourdomain.com/appmaniazar`):

1. Update `next.config.js`:
```javascript
basePath: '/appmaniazar',
assetPrefix: '/appmaniazar'
```

2. Update `.htaccess` RewriteRule:
```apache
RewriteRule ^(.*)$ /appmaniazar/index.html [L,QSA]
```

### SSL Certificate
- Ensure your domain has SSL enabled
- Update all HTTP links to HTTPS if needed

## 📱 Mobile & Performance

### Optimization Features
- Gzip compression enabled
- Browser caching configured
- Images unoptimized for compatibility
- Static files for fast loading

### Testing Checklist
- [ ] Website loads on mobile devices
- [ ] All navigation works
- [ ] Images display correctly
- [ ] WhatsApp button functions
- [ ] External links open properly
- [ ] Forms and CTAs work

## 🔄 Updates & Maintenance

### Updating the Website
1. Make changes to your code
2. Run `npm run deploy:cpanel`
3. Upload new files to cPanel
4. Clear browser cache if needed

### Backup Strategy
- Keep a copy of the `cpanel-deploy/` folder
- Backup your cPanel files regularly
- Document any custom modifications

## 🆘 Support

If you encounter issues:
1. Check browser console for errors
2. Verify file permissions (755 for folders, 644 for files)
3. Ensure .htaccess is properly formatted
4. Contact your hosting provider if Apache modules are missing

## 📊 Performance Monitoring

After deployment, monitor:
- Page load speeds
- Mobile responsiveness
- Error logs in cPanel
- User feedback on functionality

---

**Note**: This is a static export build optimized for cPanel shared hosting. All functionality is client-side JavaScript.
