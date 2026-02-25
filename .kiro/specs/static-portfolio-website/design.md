# Design Document: Static Portfolio Website

## Overview

This design document specifies the technical architecture and implementation approach for a static portfolio website for Juby Neil Valiao. The website is a single-page application (SPA) built with vanilla HTML5, TailwindCSS, and DaisyUI, featuring smooth scrolling navigation between sections, responsive layouts, and subtle interactive enhancements.

### Technology Stack

- **HTML5**: Semantic markup for content structure
- **TailwindCSS v3.x**: Utility-first CSS framework for styling
- **DaisyUI v4.x**: Component library built on TailwindCSS
- **Vanilla JavaScript**: Lightweight interactions (scroll animations, navbar shrinking, smooth scrolling)
- **Google Fonts**: Poppins or Inter for typography
- **Vercel**: Static site hosting platform

### Design Principles

1. **Static-First**: No backend dependencies, all content embedded in HTML
2. **Mobile-First Responsive**: Design adapts from mobile (320px) to desktop (1920px+)
3. **Performance-Optimized**: Minimal JavaScript, optimized assets, fast load times
4. **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation support
5. **Dark Theme**: Modern dark color scheme with high contrast for readability

## Architecture

### High-Level Structure

The portfolio website follows a single-page architecture with anchor-based navigation:

```
┌─────────────────────────────────────┐
│         Navigation Bar              │ ← Fixed/Sticky positioning
├─────────────────────────────────────┤
│         Hero Section                │
├─────────────────────────────────────┤
│         Experience Section          │
├─────────────────────────────────────┤
│         Education Section           │
├─────────────────────────────────────┤
│         Projects Section            │
├─────────────────────────────────────┤
│         Hobbies Section             │
├─────────────────────────────────────┤
│         Contact Section             │
├─────────────────────────────────────┤
│         Footer                      │
└─────────────────────────────────────┘
```

### File Structure

```
static-portfolio-website/
├── index.html                 # Main HTML file
├── assets/
│   ├── img/
│   │   ├── profile.jpg        # Profile picture (270px diameter)
│   │   └── projects/          # Project screenshots (optional)
│   └── pdf/
│       └── resume.pdf         # Downloadable CV
├── css/
│   └── styles.css             # Compiled TailwindCSS + DaisyUI + custom styles
├── js/
│   └── main.js                # Interactive enhancements
├── tailwind.config.js         # TailwindCSS configuration
├── package.json               # Dependencies (TailwindCSS, DaisyUI)
└── vercel.json                # Vercel deployment configuration (optional)
```

### Navigation Strategy

The website uses anchor-based navigation with smooth scrolling:

1. Each section has a unique `id` attribute (e.g., `id="hero"`, `id="experience"`)
2. Navigation links use `href="#section-id"` format
3. JavaScript enhances with `scroll-behavior: smooth` and optional offset for fixed navbar
4. No routing library required (single HTML page)

## Components and Interfaces

### 1. Navigation Bar Component

**Purpose**: Provides persistent navigation to all sections

**Structure**:
```html
<nav class="navbar bg-base-100 sticky top-0 z-50 transition-all duration-300">
  <div class="navbar-start">
    <div class="dropdown"> <!-- Mobile menu -->
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg>...</svg> <!-- Hamburger icon -->
      </label>
      <ul class="menu menu-sm dropdown-content">
        <!-- Mobile nav links -->
      </ul>
    </div>
    <a class="btn btn-ghost text-xl">Juby Neil Valiao</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="#hero">Home</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#hobbies">Hobbies</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>
```

**Responsive Behavior**:
- Desktop (≥1024px): Horizontal menu in center
- Tablet/Mobile (<1024px): Hamburger menu with dropdown

**Interactive Features**:
- Shrinks height on scroll (via JavaScript class toggle)
- Smooth scroll to sections with offset compensation

### 2. Hero Section Component

**Purpose**: Primary landing area with profile, bio, and CTAs

**Structure**:
```html
<section id="hero" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-300 to-base-100">
  <div class="container mx-auto px-4 text-center">
    <!-- Profile Picture -->
    <div class="avatar mb-6">
      <div class="w-[270px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="assets/img/profile.jpg" alt="Juby Neil Valiao" />
      </div>
    </div>
    
    <!-- Name and Title -->
    <h1 class="text-5xl md:text-6xl font-bold mb-2">Juby Neil Valiao</h1>
    <h2 class="text-2xl md:text-3xl text-primary mb-4">Web Developer</h2>
    <p class="text-lg md:text-xl text-base-content/70 mb-6">
      Transforming ideas into exceptional digital experiences
    </p>
    
    <!-- Skill Badges -->
    <div class="flex flex-wrap justify-center gap-2 mb-8">
      <span class="badge badge-primary badge-lg">Python</span>
      <span class="badge badge-primary badge-lg">Django</span>
      <span class="badge badge-primary badge-lg">PHP</span>
      <span class="badge badge-primary badge-lg">Laravel</span>
      <span class="badge badge-primary badge-lg">JavaScript</span>
    </div>
    
    <!-- CTA Buttons -->
    <div class="flex flex-wrap justify-center gap-4 mb-8">
      <a href="#projects" class="btn btn-primary btn-lg">View Projects</a>
      <a href="#contact" class="btn btn-outline btn-lg">Contact Me</a>
      <a href="assets/pdf/resume.pdf" download class="btn btn-secondary btn-lg">
        Download CV
      </a>
    </div>
    
    <!-- Social Links -->
    <div class="flex justify-center gap-4">
      <a href="https://linkedin.com/in/[profile]" target="_blank" rel="noopener" class="btn btn-circle btn-ghost">
        <svg>...</svg> <!-- LinkedIn icon -->
      </a>
      <a href="https://github.com/[username]" target="_blank" rel="noopener" class="btn btn-circle btn-ghost">
        <svg>...</svg> <!-- GitHub icon -->
      </a>
      <a href="https://facebook.com/[profile]" target="_blank" rel="noopener" class="btn btn-circle btn-ghost">
        <svg>...</svg> <!-- Facebook icon -->
      </a>
    </div>
  </div>
</section>
```

**Responsive Behavior**:
- Mobile: Single column, smaller text sizes
- Desktop: Larger text, more spacing

**Optional Enhancements**:
- Particle.js background animation
- Gradient animation using CSS keyframes

### 3. Experience Section Component

**Purpose**: Display professional work history

**Structure**:
```html
<section id="experience" class="py-20 bg-base-200">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-12">Experience</h2>
    
    <div class="space-y-8 max-w-4xl mx-auto">
      <!-- Experience Card 1 -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h3 class="card-title text-2xl">Full Stack Developer</h3>
              <p class="text-primary font-semibold">Freelance</p>
            </div>
            <div class="badge badge-outline mt-2 md:mt-0">Feb 2025 – Present</div>
          </div>
        </div>
      </div>
      
      <!-- Experience Card 2 -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h3 class="card-title text-2xl">Intern</h3>
              <p class="text-primary font-semibold">NORSU-BSC</p>
            </div>
            <div class="badge badge-outline mt-2 md:mt-0">July 2024 – March 2025</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Responsive Behavior**:
- Mobile: Stacked layout, date badge below title
- Desktop: Horizontal layout with date badge aligned right

### 4. Education Section Component

**Purpose**: Display academic background and achievements

**Structure**:
```html
<section id="education" class="py-20 bg-base-100">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-12">Education</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      <!-- Education Card 1 -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">B.S. in Information Technology</h3>
          <p class="text-primary font-semibold">NORSU-BSC</p>
          <p class="text-sm text-base-content/70">2020–2025</p>
          <div class="badge badge-success mt-2">Salutatorian</div>
        </div>
      </div>
      
      <!-- Education Card 2 -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">General Academic Strand</h3>
          <p class="text-primary font-semibold">Miguel L. Daclan National High School</p>
          <p class="text-sm text-base-content/70">2016–2018</p>
          <div class="badge badge-success mt-2">Valedictorian</div>
        </div>
      </div>
      
      <!-- Education Card 3 -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Vicente Z. Badon Campus</h3>
          <p class="text-sm text-base-content/70">2012–2016</p>
        </div>
      </div>
      
      <!-- Education Card 4 -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Bongalonan Elementary School</h3>
          <p class="text-sm text-base-content/70">2008–2012</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Responsive Behavior**:
- Mobile: 1 column grid
- Tablet: 2 column grid
- Desktop: 2 column grid with larger cards

### 5. Projects Section Component

**Purpose**: Showcase completed projects with technical details

**Structure**:
```html
<section id="projects" class="py-20 bg-base-200">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-12">Projects</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Project Card Template -->
      <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div class="card-body">
          <h3 class="card-title">Portfolio Website</h3>
          <p class="text-sm text-base-content/70">
            A modern, responsive portfolio website built with HTML5, TailwindCSS, and DaisyUI.
          </p>
          
          <!-- Tech Stack Badges -->
          <div class="flex flex-wrap gap-2 mt-4">
            <span class="badge badge-sm">HTML5</span>
            <span class="badge badge-sm">TailwindCSS</span>
            <span class="badge badge-sm">DaisyUI</span>
          </div>
          
          <!-- GitHub Link -->
          <div class="card-actions justify-end mt-4">
            <a href="https://github.com/[username]/[repo]" target="_blank" rel="noopener" 
               class="btn btn-primary btn-sm">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      
      <!-- Repeat for all 7 projects -->
    </div>
  </div>
</section>
```

**Project Data** (to be embedded in HTML):
1. Portfolio Website - HTML5, TailwindCSS, DaisyUI
2. NORSU Alumni Web Portal - PHP, Laravel, MySQL
3. CTTMO Traffic Violation Management System - PHP, Laravel, MySQL
4. Pharmacy Inventory Management System - PHP, Laravel, MySQL
5. CRUD To Do List with Email Updates - Python, Django, PostgreSQL
6. Django Payroll Management System with QR & Face Recognition - Python, Django, OpenCV
7. Laravel Chatbot - PHP, Laravel, AI/ML

**Responsive Behavior**:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

**Interactive Features**:
- Hover effect: shadow elevation increase
- Smooth transitions on hover

### 6. Hobbies Section Component

**Purpose**: Display personal interests

**Structure**:
```html
<section id="hobbies" class="py-20 bg-base-100">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-12">Hobbies & Interests</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <!-- Hobby Card 1 -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body items-center text-center">
          <svg class="w-16 h-16 mb-4 text-primary">...</svg> <!-- Gaming icon -->
          <h3 class="card-title">Gaming</h3>
        </div>
      </div>
      
      <!-- Hobby Card 2 -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body items-center text-center">
          <svg class="w-16 h-16 mb-4 text-primary">...</svg> <!-- Reading icon -->
          <h3 class="card-title">Reading</h3>
        </div>
      </div>
      
      <!-- Hobby Card 3 -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body items-center text-center">
          <svg class="w-16 h-16 mb-4 text-primary">...</svg> <!-- Badminton icon -->
          <h3 class="card-title">Badminton</h3>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Responsive Behavior**:
- Mobile: 1 column
- Tablet/Desktop: 3 columns

### 7. Contact Section Component

**Purpose**: Display contact information and static form

**Structure**:
```html
<section id="contact" class="py-20 bg-base-200">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-12">Get In Touch</h2>
    
    <div class="max-w-2xl mx-auto">
      <!-- Contact Info -->
      <div class="text-center mb-8">
        <p class="text-lg mb-4">
          <span class="font-semibold">Email:</span> 
          <a href="mailto:hutchiejn@gmail.com" class="link link-primary">hutchiejn@gmail.com</a>
        </p>
        
        <!-- Social Links -->
        <div class="flex justify-center gap-4">
          <a href="https://linkedin.com/in/[profile]" target="_blank" rel="noopener" class="btn btn-circle btn-outline">
            <svg>...</svg>
          </a>
          <a href="https://github.com/[username]" target="_blank" rel="noopener" class="btn btn-circle btn-outline">
            <svg>...</svg>
          </a>
          <a href="https://facebook.com/[profile]" target="_blank" rel="noopener" class="btn btn-circle btn-outline">
            <svg>...</svg>
          </a>
        </div>
      </div>
      
      <!-- Static Contact Form -->
      <form class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input type="text" placeholder="Your name" class="input input-bordered" required />
          </div>
          
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" placeholder="your.email@example.com" class="input input-bordered" required />
          </div>
          
          <div class="form-control">
            <label class="label">
              <span class="label-text">Message</span>
            </label>
            <textarea class="textarea textarea-bordered h-32" placeholder="Your message" required></textarea>
          </div>
          
          <div class="form-control mt-6">
            <button type="submit" class="btn btn-primary">Send Message</button>
          </div>
          
          <p class="text-sm text-center text-base-content/70 mt-4">
            Note: This is a static form. Please use the email address above to contact directly.
          </p>
        </div>
      </form>
    </div>
  </div>
</section>
```

**Responsive Behavior**:
- Mobile: Full-width inputs
- Desktop: Constrained width (max-w-2xl)

**Note**: Form is static (no backend). Consider adding FormSpree or similar service for actual submissions.

### 8. Footer Component

**Purpose**: Display copyright and social links

**Structure**:
```html
<footer class="footer footer-center p-10 bg-base-300 text-base-content">
  <div>
    <p class="font-bold text-lg">Juby Neil Valiao</p>
    <p>Thank you for visiting my portfolio!</p>
  </div>
  <div>
    <div class="grid grid-flow-col gap-4">
      <a href="https://linkedin.com/in/[profile]" target="_blank" rel="noopener">
        <svg class="w-6 h-6">...</svg>
      </a>
      <a href="https://github.com/[username]" target="_blank" rel="noopener">
        <svg class="w-6 h-6">...</svg>
      </a>
      <a href="https://facebook.com/[profile]" target="_blank" rel="noopener">
        <svg class="w-6 h-6">...</svg>
      </a>
    </div>
  </div>
  <div>
    <p>Copyright © 2025 - All rights reserved</p>
  </div>
</footer>
```

## Data Models

### Project Data Structure

Since this is a static site, project data will be embedded directly in HTML. For maintainability, consider using a JavaScript array that renders to HTML:

```javascript
const projects = [
  {
    name: "Portfolio Website",
    description: "A modern, responsive portfolio website built with HTML5, TailwindCSS, and DaisyUI.",
    technologies: ["HTML5", "TailwindCSS", "DaisyUI"],
    githubUrl: "https://github.com/[username]/portfolio"
  },
  {
    name: "NORSU Alumni Web Portal",
    description: "A comprehensive web portal for alumni management and networking.",
    technologies: ["PHP", "Laravel", "MySQL"],
    githubUrl: "https://github.com/[username]/norsu-alumni"
  },
  // ... remaining 5 projects
];
```

### Experience Data Structure

```javascript
const experiences = [
  {
    position: "Full Stack Developer",
    company: "Freelance",
    duration: "Feb 2025 – Present",
    current: true
  },
  {
    position: "Intern",
    company: "NORSU-BSC",
    duration: "July 2024 – March 2025",
    current: false
  }
];
```

### Education Data Structure

```javascript
const education = [
  {
    degree: "B.S. in Information Technology",
    institution: "NORSU-BSC",
    years: "2020–2025",
    honor: "Salutatorian"
  },
  {
    degree: "General Academic Strand",
    institution: "Miguel L. Daclan National High School",
    years: "2016–2018",
    honor: "Valedictorian"
  },
  {
    degree: null,
    institution: "Vicente Z. Badon Campus",
    years: "2012–2016",
    honor: null
  },
  {
    degree: null,
    institution: "Bongalonan Elementary School",
    years: "2008–2012",
    honor: null
  }
];
```

### Hobby Data Structure

```javascript
const hobbies = [
  { name: "Gaming", icon: "gamepad" },
  { name: "Reading", icon: "book" },
  { name: "Badminton", icon: "sports" }
];
```

## Styling System and Theme Implementation

### TailwindCSS Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#3b82f6",      // Blue
          "secondary": "#8b5cf6",    // Purple
          "accent": "#10b981",       // Green
          "neutral": "#1f2937",      // Dark gray
          "base-100": "#111827",     // Darkest background
          "base-200": "#1f2937",     // Medium background
          "base-300": "#374151",     // Lighter background
          "info": "#3b82f6",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444"
        }
      }
    ]
  }
}
```

### Responsive Breakpoints

TailwindCSS default breakpoints:
- `sm`: 640px (small tablets)
- `md`: 768px (tablets)
- `lg`: 1024px (laptops)
- `xl`: 1280px (desktops)
- `2xl`: 1536px (large desktops)

Usage pattern:
```html
<!-- Mobile-first approach -->
<div class="text-sm md:text-base lg:text-lg">
  <!-- Small text on mobile, medium on tablet, large on desktop -->
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- 1 column on mobile, 2 on tablet, 3 on desktop -->
</div>
```

### DaisyUI Component Usage

Key DaisyUI components used:
- `navbar`: Navigation bar with dropdown support
- `card`: Content containers for projects, education, experience
- `badge`: Skill tags and status indicators
- `btn`: Call-to-action buttons with variants (primary, outline, ghost)
- `form-control`, `input`, `textarea`: Form elements
- `avatar`: Profile picture container
- `menu`: Navigation menu items
- `dropdown`: Mobile navigation menu
- `footer`: Footer layout

### Custom CSS

```css
/* css/styles.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Navbar shrink animation */
.navbar-shrink {
  @apply py-2 shadow-lg;
}

/* Scroll reveal animation */
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Hover effects */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

/* Hero background animation (optional) */
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero-gradient {
  background: linear-gradient(-45deg, #111827, #1f2937, #374151, #1f2937);
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
}
```

## JavaScript Functionality

### main.js Implementation

```javascript
// js/main.js

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Navbar shrink on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.classList.add('navbar-shrink');
  } else {
    navbar.classList.remove('navbar-shrink');
  }
  
  lastScroll = currentScroll;
});

// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .card').forEach(el => {
  el.classList.add('scroll-reveal');
  observer.observe(el);
});

// Static form handling (show alert since no backend)
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('This is a static form. Please email directly to hutchiejn@gmail.com');
  });
}

// Optional: Particle.js initialization for hero background
// Requires including particle.js library
// particlesJS('hero', { /* config */ });
```

### Optional Enhancements

1. **Particle.js Background**: Add animated particles to hero section
2. **Typed.js**: Animated typing effect for bio text
3. **AOS (Animate On Scroll)**: More sophisticated scroll animations
4. **Loading Animation**: Fade-in effect on page load

## Deployment Configuration

### Vercel Configuration

Create `vercel.json` (optional, Vercel auto-detects static sites):

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

### Build Process

1. **Development**:
   ```bash
   npm install
   npx tailwindcss -i ./css/styles.css -o ./css/output.css --watch
   ```

2. **Production Build**:
   ```bash
   npx tailwindcss -i ./css/styles.css -o ./css/output.css --minify
   ```

3. **Deployment**:
   - Push to GitHub repository
   - Connect repository to Vercel
   - Vercel auto-deploys on push to main branch
   - No build command needed (static HTML)

### GitHub Repository Setup

1. Initialize repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/[username]/portfolio.git
   git push -u origin main
   ```

2. Connect to Vercel:
   - Import project from GitHub
   - Framework Preset: Other (static)
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: ./

### Asset Optimization

1. **Images**:
   - Profile picture: Optimize to ~100KB, 270x270px
   - Use WebP format for better compression
   - Add lazy loading: `loading="lazy"`

2. **CSS**:
   - Minify TailwindCSS output
   - Remove unused styles with PurgeCSS (built into Tailwind)

3. **JavaScript**:
   - Minify main.js for production
   - Consider inlining small scripts

