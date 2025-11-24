# Roll to Sheet Calculator

A modern React application for calculating paper roll to sheet costing with real-time calculations.

## Features

- Calculate paper cost per sheet based on roll dimensions
- Real-time calculation updates
- Detailed breakdown of calculation steps
- Responsive design with Tailwind CSS
- Modern UI with Lucide React icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd "Roll To Sheet "
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages in your repository:**

   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Push your code:**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Automatic Deployment:**

   - The GitHub Actions workflow will automatically build and deploy your site on every push to the `main` branch
   - You can also manually trigger deployment from the **Actions** tab

4. **Access your site:**

   - Your site will be available at: `https://<your-username>.github.io/<repository-name>/`
   - For example: `https://username.github.io/roll-to-sheet-calculator/`

5. **Note on Base Path:**
   - The current configuration uses relative paths (`base: './'` in `vite.config.js`)
   - This works for most GitHub Pages setups
   - If your site is at a subdirectory (e.g., `username.github.io/repo-name`), you may need to update `vite.config.js`:
   ```js
   base: '/repository-name/',  // Replace with your actual repository name
   ```

### Manual Deployment (Alternative)

If you prefer manual deployment using the `gh-pages` package:

1. Install the GitHub Pages deployment plugin:

```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy:

```bash
npm run deploy
```

**Note:** The automatic GitHub Actions workflow is recommended as it provides better CI/CD integration.

## Project Structure

```
├── src/
│   ├── components/
│   │   └── PaperCalculator.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Lucide React (Icons)

## License

MIT
