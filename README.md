# Easygoing

A simple Vite-powered site.

## Local Development

### Preview Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

To build the site for production:

```bash
npm run build
```

This will generate the production-ready files in the `docs/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment is handled by the GitHub Actions workflow defined in `.github/workflows/pages.yml`.

The site will be available at: https://ejhawkins.github.io/easygoing/

## Project Structure

- `index.html` - Main HTML entry point
- `src/main.js` - JavaScript entry point
- `vite.config.js` - Vite configuration for GitHub Pages
- `.github/workflows/pages.yml` - GitHub Actions workflow for deployment 
