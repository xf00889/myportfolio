# Implementation Plan: Static Portfolio Website

## Overview

This implementation plan breaks down the static portfolio website into discrete coding tasks. The website will be built using HTML5, TailwindCSS, DaisyUI, and vanilla JavaScript. Each task builds incrementally, starting with project setup, then implementing each section, and finally adding interactive enhancements and deployment configuration.

## Tasks

- [x] 1. Set up project structure and dependencies
  - Create directory structure (assets/img, assets/pdf, css, js)
  - Initialize package.json with TailwindCSS and DaisyUI dependencies
  - Create tailwind.config.js with dark theme configuration
  - Create base HTML structure with semantic sections
  - Set up Google Fonts (Poppins) import
  - _Requirements: 11.1, 11.2, 10.2, 10.3, 10.4_

- [x] 2. Implement navigation bar component
  - [x] 2.1 Create fixed navigation bar with logo and menu items
    - Build navbar HTML structure with DaisyUI navbar component
    - Add anchor links for all seven sections (Hero, Experience, Education, Projects, Hobbies, Contact)
    - Implement responsive hamburger menu for mobile devices (<1024px)
    - Add sticky positioning and z-index for persistent visibility
    - _Requirements: 1.1, 1.2, 1.4, 1.5_
  
  - [ ]* 2.2 Write unit tests for navigation structure
    - Test that all seven navigation links are present
    - Test mobile menu toggle functionality
    - _Requirements: 1.1, 1.2_

- [x] 3. Implement hero section
  - [x] 3.1 Create hero section layout and content
    - Build hero section HTML with centered layout
    - Add circular profile picture (270px diameter) with ring styling
    - Display name "Juby Neil Valiao" and title "Web Developer"
    - Add bio text "Transforming ideas into exceptional digital experiences"
    - Create skill badges for Python, Django, PHP, Laravel, JavaScript
    - Add three CTA buttons: "View Projects", "Contact Me", "Download CV"
    - Add social media links (LinkedIn, GitHub, Facebook) with target="_blank"
    - Implement gradient background with TailwindCSS
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9_
  
  - [ ]* 3.2 Write unit tests for hero section elements
    - Test profile picture dimensions and alt text
    - Test all five skill badges are present
    - Test CTA button links and download attribute
    - Test social media links open in new tab
    - _Requirements: 2.1, 2.5, 2.6, 2.7, 2.8, 2.9_

- [x] 4. Implement experience section
  - [x] 4.1 Create experience section with timeline cards
    - Build experience section HTML with card layout
    - Add "Full Stack Developer" at "Freelance" (Feb 2025 – Present)
    - Add "Intern" at "NORSU-BSC" (July 2024 – March 2025)
    - Display entries in chronological order with responsive layout
    - Use DaisyUI card component with badge for duration
    - _Requirements: 3.1, 3.2, 3.3, 3.4_
  
  - [ ]* 4.2 Write unit tests for experience entries
    - Test both experience entries are present
    - Test chronological ordering
    - Test responsive layout classes
    - _Requirements: 3.1, 3.2, 3.3_

- [x] 5. Implement education section
  - [x] 5.1 Create education section with card grid
    - Build education section HTML with 2-column grid layout
    - Add "B.S. in Information Technology" from "NORSU-BSC" (2020–2025) with "Profecient in Desktop Development" badge
    - Add "General Academic Strand" from "Miguel L. Daclan National High School" (2016–2018) with "With Honors" badge
    - Add "Vicente Z. Badon Campus" (2012–2016) with "with honors" badge
    - Add "Bongalonan Elementary School" (2008–2012) with "Valedictorian" Badge
    - Display in reverse chronological order with responsive grid
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7_
  
  - [ ]* 5.2 Write unit tests for education entries
    - Test all four education entries are present
    - Test honor badges for first two entries
    - Test reverse chronological ordering
    - _Requirements: 4.1, 4.2, 4.3, 4.6_

- [ ] 6. Checkpoint - Verify core sections render correctly
  - Ensure all sections display properly across mobile, tablet, and desktop breakpoints. Ask the user if questions arise.

- [x] 7. Implement projects section
  - [x] 7.1 Create projects section with card grid
    - Build projects section HTML with responsive grid (1/2/3 columns)
    - Create project card template with title, description, tech badges, and GitHub link
    - Add all seven projects with their respective data:
      - Portfolio Website (HTML5, TailwindCSS, DaisyUI)
      - NORSU Alumni Web Portal (PHP, Laravel, MySQL)
      - CTTMO Traffic Violation Management System (PHP, Laravel, MySQL)
      - Pharmacy Inventory Management System (PHP, Laravel, MySQL)
      - CRUD To Do List with Email Updates (Python, Django, PostgreSQL)
      - Django Payroll Management System with QR & Face Recognition (Python, Django, OpenCV)
      - Laravel Chatbot (PHP, Laravel, AI/ML)
    - Add hover effects with shadow elevation
    - Ensure GitHub links open in new tab with rel="noopener"
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_
  
  - [ ]* 7.2 Write unit tests for projects section
    - Test all seven project cards are present
    - Test each card has title, description, tech badges, and GitHub link
    - Test responsive grid layout classes
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [x] 8. Implement hobbies section
  - [x] 8.1 Create hobbies section with icon cards
    - Build hobbies section HTML with 3-column grid
    - Add three hobby cards: Gaming, Reading, Badminton
    - Include SVG icons for each hobby
    - Center-align content in cards
    - _Requirements: 6.1, 6.2_
  
  - [ ]* 8.2 Write unit tests for hobbies section
    - Test all three hobby cards are present
    - Test responsive grid layout
    - _Requirements: 6.1, 6.2_

- [x] 9. Implement contact section
  - [x] 9.1 Create contact section with form and contact info
    - Build contact section HTML with centered layout
    - Display email address "hutchiejn@gmail.com" with mailto link
    - Add social media links (LinkedIn, GitHub, Facebook)
    - Create static contact form with Name, Email, and Message fields
    - Add form validation attributes (required)
    - Include note that form is static
    - Implement full-width inputs on mobile
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_
  
  - [ ]* 9.2 Write unit tests for contact section
    - Test email address is displayed correctly
    - Test form has all three input fields
    - Test form fields have required attributes
    - _Requirements: 7.1, 7.3, 7.4_

- [x] 10. Implement footer component
  - [x] 10.1 Create footer with copyright and social links
    - Build footer HTML with DaisyUI footer component
    - Display "Juby Neil Valiao" and thank you message
    - Add social media links
    - Display copyright information
    - _Requirements: 8.1, 8.2, 8.3, 8.4_
  
  - [ ]* 10.2 Write unit tests for footer
    - Test footer displays name and thank you message
    - Test social links are present
    - Test copyright text is present
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [ ] 11. Checkpoint - Verify all sections are complete
  - Ensure all sections render correctly and content is accurate. Ask the user if questions arise.

- [x] 12. Implement responsive design and styling
  - [x] 12.1 Apply responsive breakpoints and dark theme
    - Configure TailwindCSS with mobile-first responsive classes
    - Apply dark theme colors using DaisyUI theme configuration
    - Ensure all sections adapt to mobile (<768px), tablet (768-1023px), and desktop (≥1024px)
    - Add smooth transition effects for hover states
    - Verify navigation bar adapts to mobile with hamburger menu
    - Test project grid adapts from 3 columns to 1 column
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 10.1, 10.5, 10.6_
  
  - [ ]* 12.2 Write property test for responsive layout
    - **Property 1: Layout consistency across breakpoints**
    - **Validates: Requirements 9.1, 9.2, 9.3, 9.5**
    - Test that all sections maintain proper layout at different viewport widths
    - Test that no content overflows or breaks at any breakpoint

- [x] 13. Implement JavaScript interactive enhancements
  - [x] 13.1 Add smooth scrolling and navbar shrinking
    - Create main.js file with smooth scroll functionality
    - Implement smooth scroll with offset for fixed navbar
    - Add navbar shrink effect on scroll (after 100px)
    - Add scroll reveal animations using Intersection Observer
    - Implement static form submit handler with alert message
    - _Requirements: 1.3, 14.1, 14.2, 14.3_
  
  - [ ]* 13.2 Write unit tests for JavaScript functionality
    - Test smooth scroll event listeners are attached
    - Test navbar shrink class toggle on scroll
    - Test form submit handler prevents default and shows alert
    - _Requirements: 1.3, 14.2, 14.3_

- [x] 14. Optimize assets and build for production
  - [x] 14.1 Optimize images and compile CSS
    - Optimize profile picture to ~100KB at 270x270px
    - Create placeholder resume.pdf in assets/pdf directory
    - Compile TailwindCSS with minification for production
    - Ensure all asset paths use relative references
    - _Requirements: 11.3, 11.4, 11.5, 11.6, 12.3, 12.4_
  
  - [ ]* 14.2 Write property test for asset optimization
    - **Property 2: Asset loading performance**
    - **Validates: Requirements 12.1, 12.2, 12.3, 12.4**
    - Test that all assets load without 404 errors
    - Test that image file sizes are optimized

- [-] 15. Configure deployment for Vercel
  - [-] 15.1 Create deployment configuration files
    - Create vercel.json with static site configuration
    - Initialize git repository with .gitignore
    - Add README.md with deployment instructions
    - Verify all files are in root directory for static hosting
    - _Requirements: 13.1, 13.2, 13.3, 13.4_
  
  - [ ]* 15.2 Write deployment verification tests
    - Test that all required files are present in deployment package
    - Test that vercel.json is valid JSON
    - _Requirements: 13.1, 13.2_

- [ ] 16. Final checkpoint - Complete testing and validation
  - Run all tests, verify responsive design across devices, ensure all links work correctly, and confirm deployment readiness. Ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at key milestones
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- All social media links should use placeholder URLs (e.g., [username], [profile]) to be replaced with actual URLs
- The contact form is static and will show an alert; consider integrating FormSpree or similar service for actual submissions
