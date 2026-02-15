# 🚀 Quick Deployment Commands - Copy & Paste into Git Bash

## One-Time Setup (First Time Only)

```bash
# Navigate to your project
cd d:/Github\ Projects/uzairashfaq85.github.io

# Install all dependencies
npm install

# Install gh-pages if missing
npm install --save-dev gh-pages
```

---

## Option 1: Full Deployment (Recommended)

Copy and paste this entire block into Git Bash:

```bash
# Pull latest changes
git pull origin main

# Install dependencies (if needed)
npm install

# Build and deploy in one command
npm run deploy

# Wait 2-3 minutes for GitHub Pages to update
echo "✅ Deployment complete! Visit: https://uzairashfaq85.github.io"
```

---

## Option 2: Step-by-Step Deployment

```bash
# Step 1: Navigate to project
cd d:/Github\ Projects/uzairashfaq85.github.io

# Step 2: Pull latest
git pull origin main

# Step 3: Build
npm run build

# Step 4: Stage changes
git add .

# Step 5: Commit
git commit -m "Production build: Responsive design and SEO updates"

# Step 6: Push to GitHub
git push origin main

# Step 7: Deploy to GitHub Pages
npm run deploy

# Done! Wait 2-3 minutes, then visit: https://uzairashfaq85.github.io
```

---

## Option 3: Quick Update (After Minor Changes)

```bash
cd "d:/Github Projects/uzairashfaq85.github.io"
git add .
git commit -m "Update: [describe your changes]"
git push origin main
npm run deploy
```

---

## Verify Deployment

### Check Status in Git Bash
```bash
# View deployment history
npm run deploy -- --list

# Check git log
git log --oneline -5
```

### View in Browser
1. Visit: https://uzairashfaq85.github.io
2. If old content shows, hard refresh:
   - Windows: Ctrl+Shift+Delete (clear cache) → F5
   - Mac: Cmd+Shift+R
3. Check GitHub repository → Settings → Pages

---

## Emergency: Force Rebuild

If deployment shows old content:

```bash
cd "d:/Github Projects/uzairashfaq85.github.io"

# Remove build directory
rm -rf build

# Rebuild
npm run build

# Deploy
npm run deploy

# Wait 3-5 minutes for GitHub to update
```

---

## Environment Variables (If Needed)

Create `.env` file in project root:

```
REACT_APP_GITHUB_TOKEN=ghp_your_token_here
GITHUB_USERNAME=uzairashfaq85
USE_GITHUB_DATA=true
MEDIUM_USERNAME=your_medium_username
```

To get GitHub token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `public_repo` scope
3. Copy token and paste in `.env`

---

## Troubleshooting Commands

### Verify Node/npm Installation
```bash
node --version
npm --version
```

### Fix Permission Issues
```bash
# Windows: Run Git Bash as Administrator, then:
npm run deploy

# Or use alternative:
npx gh-pages -d build
```

### Clear npm Cache
```bash
npm cache clean --force
npm install
npm run build
npm run deploy
```

### Check GitHub Pages Settings
```bash
# View remote URL
git remote -v

# Should show: https://github.com/uzairashfaq85/uzairashfaq85.github.io.git
```

---

## Full Production Checklist

```bash
# 1. Check git status
git status

# 2. Pull latest
git pull origin main

# 3. Install dependencies
npm install

# 4. Build
npm run build

# 5. Test build locally (optional)
npx serve -s build

# 6. If tests pass, commit changes
git add .
git commit -m "Production: Full responsive redesign + SEO"

# 7. Push to GitHub
git push origin main

# 8. Deploy to GitHub Pages
npm run deploy

# 9. Wait and verify
# Visit: https://uzairashfaq85.github.io
```

---

## Useful Git Commands

```bash
# View recent commits
git log --oneline -10

# View branch status
git branch -a

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# View what will be committed
git diff --cached

# Switch branch
git checkout main

# Create new branch
git checkout -b feature/new-feature
```

---

## After Deployment Verification

- [ ] Site loads at https://uzairashfaq85.github.io
- [ ] Mobile view works (resize browser to test)
- [ ] Navigation menu opens on mobile
- [ ] Dark mode toggle works
- [ ] All links functional
- [ ] No console errors (F12 → Console)

---

## 🎉 Final Command (All-in-One)

Save this as a quick reference:

```bash
# The single most important command:
npm run deploy
```

This automatically:
1. Fetches latest GitHub data (if enabled)
2. Builds the project
3. Deploys to gh-pages branch
4. Makes site live at: https://uzairashfaq85.github.io

---

## Need Help?

### Check These Files
- Portfolio content: `src/portfolio.js`
- Styles: `src/App.scss` and component `.scss` files
- SEO: `public/index.html`
- Environment: `.env`

### Common Issues
- **Blank page**: Run `npm run deploy` again (cache issue)
- **Old content**: Hard refresh browser (Ctrl+Shift+Delete)
- **Build fails**: `npm install` then `npm run build`
- **Permission denied**: Run Git Bash as Administrator

---

**Deploy Now:** Copy any command block above and paste into Git Bash! 🚀
