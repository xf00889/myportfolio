# Static Portfolio Website

A modern, responsive portfolio website for Juby Neil Valiao built with HTML5, TailwindCSS, and DaisyUI.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Dark theme with modern color palette
- Seven sections: Hero, Experience, Education, Projects, Hobbies, Contact, Footer
- Smooth scrolling navigation
- Interactive animations and hover effects
- Static HTML (no backend required)

## Technology Stack

- HTML5
- TailwindCSS v3.x
- DaisyUI v4.x
- Vanilla JavaScript
- Google Fonts (Poppins)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build CSS for development (with watch mode):
   ```bash
   npm run dev
   ```

3. Build CSS for production (minified):
   ```bash
   npm run build
   ```

4. Open `index.html` in your browser

## Project Structure

```
static-portfolio-website/
├── index.html              # Main HTML file
├── assets/
│   ├── img/               # Images (profile, projects)
│   └── pdf/               # Resume PDF
├── css/
│   ├── styles.css         # Source CSS with Tailwind directives
│   └── output.css         # Compiled CSS (generated)
├── js/
│   └── main.js            # JavaScript for interactions
├── tailwind.config.js     # TailwindCSS configuration
└── package.json           # Dependencies
```

## Deployment

This website is configured for deployment on Vercel with automatic deployment on push.

### Prerequisites

Before deployment, ensure you have:

- `assets/img/profile.jpg` - Profile picture (270x270px recommended)
- `assets/pdf/resume.pdf` - Resume/CV file
- All social media links updated in `index.html`

### Deployment Steps

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project settings:
     - Framework Preset: **Other** (static site)
     - Root Directory: `./` (leave as default)
     - Build Command: (leave empty)
     - Output Directory: `./` (leave as default)
   - Click "Deploy"

3. **Automatic Deployments**:
   - Every push to the `main` branch will trigger automatic deployment
   - Preview deployments are created for pull requests

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Vercel Configuration

The `vercel.json` file is configured for static site hosting:

- Uses `@vercel/static` builder for HTML files
- Routes all requests to their corresponding files
- Compatible with Vercel's static HTML preset

### Post-Deployment

After deployment:

1. Verify all sections load correctly
2. Test navigation links and smooth scrolling
3. Check responsive design on mobile, tablet, and desktop
4. Test all external links (social media, GitHub)
5. Verify CV download functionality
6. Test form submission alert

### Custom Domain (Optional)

To add a custom domain:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed by Vercel

### Environment Notes

- This is a static site with no backend dependencies
- No environment variables required
- No build step needed (CSS is pre-compiled)
- All assets are served from the root directory

## License

MIT
