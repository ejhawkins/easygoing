// Main JavaScript entry point for Easygoing

const app = document.getElementById('app');

if (app) {
  app.innerHTML = `
    <div style="padding: 20px; font-family: system-ui, sans-serif;">
      <h2>Getting Started</h2>
      <p>This is a simple Vite-powered site for the Easygoing project.</p>
      
      <h3>Local Development</h3>
      <ul>
        <li><strong>Install dependencies:</strong> <code>npm install</code></li>
        <li><strong>Start dev server:</strong> <code>npm run dev</code></li>
        <li><strong>Build for production:</strong> <code>npm run build</code></li>
        <li><strong>Preview production build:</strong> <code>npm run preview</code></li>
      </ul>
      
      <h3>Deployment</h3>
      <p>This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch.</p>
    </div>
  `;
}

console.log('Easygoing site loaded successfully!');
