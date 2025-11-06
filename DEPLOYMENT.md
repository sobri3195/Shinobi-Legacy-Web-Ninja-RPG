# 🚀 Deployment Guide - Shinobi Legacy

Panduan lengkap untuk deploy Shinobi Legacy ke berbagai platform hosting.

---

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Build Configuration](#build-configuration)
- [Netlify Deployment](#netlify-deployment)
- [Vercel Deployment](#vercel-deployment)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Custom Server (VPS)](#custom-server-vps)
- [Environment Variables](#environment-variables)
- [CI/CD Setup](#cicd-setup)
- [Troubleshooting](#troubleshooting)

---

## ✅ Prerequisites

Sebelum deploy, pastikan:

- ✅ Project sudah di-build tanpa error
- ✅ Environment variables sudah dikonfigurasi
- ✅ Assets (images, sounds) sudah dioptimasi
- ✅ Testing sudah selesai
- ✅ Git repository sudah di-push

```bash
# Test build locally
npm run build
npm run preview
```

---

## ⚙️ Build Configuration

### Vite Configuration

File: `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Change if deploying to subdirectory
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Set to true for debugging
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'game-engine': ['./src/utils/gameLogic', './src/utils/battleSystem'],
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true
  }
})
```

---

## 🌐 Netlify Deployment

### Method 1: Netlify CLI (Recommended)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize project
netlify init

# Build and deploy
npm run build
netlify deploy --prod
```

### Method 2: Git Integration (Auto Deploy)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select repository
   
3. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Branch**: `main`

4. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add all variables from `.env.example`

5. **Deploy**
   - Netlify will auto-deploy on every push

### Method 3: Drag & Drop

```bash
# Build project
npm run build

# Go to Netlify dashboard
# Drag & drop 'dist' folder
```

### Netlify Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## ⚡ Vercel Deployment

### Method 1: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Method 2: Git Integration

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add environment variables
6. Deploy

### Vercel Configuration

Create `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "env": {
    "NODE_VERSION": "18"
  }
}
```

---

## 📄 GitHub Pages Deployment

### Setup GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          VITE_GAME_VERSION: ${{ github.sha }}
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './dist'
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

### Update vite.config.js

```javascript
export default defineConfig({
  base: '/shinobi-legacy/', // Repository name
  // ... rest of config
})
```

### Enable GitHub Pages

1. Go to repository Settings
2. Pages → Source → GitHub Actions
3. Push to main branch to trigger deployment

---

## 🖥️ Custom Server (VPS)

### Using Nginx

```bash
# Install Nginx
sudo apt update
sudo apt install nginx

# Build project
npm run build

# Copy files to web root
sudo cp -r dist/* /var/www/shinobi-legacy/

# Configure Nginx
sudo nano /etc/nginx/sites-available/shinobi-legacy
```

Nginx config:

```nginx
server {
    listen 80;
    server_name shinobi-legacy.com www.shinobi-legacy.com;
    root /var/www/shinobi-legacy;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

Enable and restart:

```bash
sudo ln -s /etc/nginx/sites-available/shinobi-legacy /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d shinobi-legacy.com -d www.shinobi-legacy.com
```

---

## 🔐 Environment Variables

### Production Variables

```env
# Production Environment
VITE_GAME_VERSION=1.0.0
VITE_GAME_NAME=Shinobi Legacy
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_SOUND=true

# Feature Flags
VITE_ENABLE_PVP=true
VITE_ENABLE_SHOP=true
VITE_DEBUG_MODE=false
```

### Securing Variables

**Never commit `.env` files!**

✅ Add to `.gitignore`:
```
.env
.env.local
.env.production
```

✅ Use platform-specific environment variable management:
- Netlify: Site settings → Environment variables
- Vercel: Project settings → Environment Variables
- GitHub: Repository settings → Secrets

---

## 🔄 CI/CD Setup

### GitHub Actions - Full Pipeline

Create `.github/workflows/ci-cd.yml`:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --prod
```

---

## 🐛 Troubleshooting

### Common Issues

#### 1. Blank Page After Deploy

**Solution**: Check base URL in `vite.config.js`

```javascript
base: '/' // For root domain
base: '/repo-name/' // For GitHub Pages subdirectory
```

#### 2. 404 on Page Refresh

**Solution**: Configure redirects for SPA

Netlify: Add to `netlify.toml`
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 3. Environment Variables Not Working

**Solution**: 
- Prefix with `VITE_` for Vite
- Redeploy after changing variables
- Check platform-specific env var settings

#### 4. Assets Not Loading

**Solution**: Use relative paths
```javascript
// ❌ Wrong
<img src="/assets/image.png" />

// ✅ Correct
import image from './assets/image.png'
<img src={image} />
```

#### 5. Build Size Too Large

**Solution**: 
- Enable code splitting
- Lazy load routes
- Compress images
- Use production build

```javascript
// Lazy load routes
const Battle = lazy(() => import('./pages/Battle'))
```

---

## 📊 Performance Optimization

### Pre-Deploy Checklist

- [ ] Minify assets
- [ ] Enable gzip compression
- [ ] Optimize images (WebP format)
- [ ] Remove console.logs
- [ ] Enable caching headers
- [ ] Test on slow connections
- [ ] Check Lighthouse score

### Lighthouse Targets

- **Performance**: >90
- **Accessibility**: >95
- **Best Practices**: >90
- **SEO**: >90

---

## 🔍 Monitoring

### Setup Analytics

```javascript
// Google Analytics
window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID)

// Custom event tracking
gtag('event', 'battle_start', {
  'event_category': 'gameplay',
  'event_label': 'pvp'
})
```

### Error Tracking (Sentry)

```javascript
import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
})
```

---

## 📝 Post-Deployment

1. ✅ Test all features in production
2. ✅ Verify environment variables
3. ✅ Check analytics integration
4. ✅ Monitor error logs
5. ✅ Test on multiple devices/browsers
6. ✅ Update documentation
7. ✅ Announce release

---

## 🎉 Success!

Your game is now live! 🥷✨

**Live URL**: https://shinobi-legacy.netlify.app

Share with friends and start collecting feedback!

---

[🔙 Back to README](README.md)
