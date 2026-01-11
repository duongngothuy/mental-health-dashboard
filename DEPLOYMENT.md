# Deployment Guide for Mental Health Dashboard

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Step 1: Prepare Your Project
```bash
cd mental-health-dashboard
npm run build
```

### Step 2: Deploy Using Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (follow the prompts)
vercel

# For production deployment
vercel --prod
```

### Step 3: Using Vercel Dashboard (Alternative)
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect it's a Vite project
6. Click "Deploy"

**Build Settings (if needed):**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

## Option 2: Deploy to Netlify

### Method A: Drag and Drop
1. Build your project: `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag and drop your `dist` folder
4. Your site is live!

### Method B: Using Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Method C: Connect GitHub Repository
1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

---

## Option 3: Deploy to GitHub Pages

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json
Add these scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/mental-health-dashboard"
}
```

### Step 3: Update vite.config.js
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/mental-health-dashboard/'
})
```

### Step 4: Deploy
```bash
npm run deploy
```

### Step 5: Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages"
3. Source: Deploy from a branch
4. Branch: gh-pages / root
5. Save

---

## Option 4: Deploy to Render

1. Go to https://render.com
2. Click "New" → "Static Site"
3. Connect your GitHub repository
4. Configure:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Click "Create Static Site"

---

## Post-Deployment Checklist

✅ Test the live site thoroughly
✅ Check all filters work correctly
✅ Verify data loads properly
✅ Test on mobile devices
✅ Check browser console for errors
✅ Verify all charts render correctly
✅ Update README with live URL
✅ Share your portfolio link!

---

## Custom Domain Setup

### Vercel
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS (Netlify provides DNS hosting)

---

## Environment Variables (if needed in the future)

For Vercel:
```bash
vercel env add
```

For Netlify:
1. Site settings → Environment variables
2. Add variables

---

## Troubleshooting

### Build Fails
- Check Node version (should be 16+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for any missing dependencies

### Data Not Loading
- Ensure data files are in `public/data/` directory
- Check browser console for 404 errors
- Verify JSON files are valid

### 404 on Refresh
- Add a `_redirects` file (Netlify) or `vercel.json` (Vercel) for SPA routing

For Netlify (_redirects):
```
/*    /index.html   200
```

For Vercel (vercel.json):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## Performance Optimization

1. **Image Optimization**: All images should be optimized
2. **Code Splitting**: Consider lazy loading components
3. **Bundle Analysis**: Run `npm run build -- --analyze`
4. **CDN**: Both Vercel and Netlify provide global CDN

---

## Monitoring

- Use Vercel Analytics or Netlify Analytics
- Set up Google Analytics if needed
- Monitor Core Web Vitals

---

**Recommended:** Start with Vercel for the easiest deployment experience!
