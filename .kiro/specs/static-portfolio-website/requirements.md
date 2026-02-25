# Requirements Document

## Introduction

This document specifies the requirements for a static portfolio website for Juby Neil Valiao. The website will showcase professional experience, education, projects, and contact information using modern web technologies (HTML5, TailwindCSS, DaisyUI) with no backend dependencies. The site will be fully responsive, deployment-ready for Vercel, and optimized for performance.

## Glossary

- **Portfolio_Website**: The static HTML-based website system that displays professional information
- **Hero_Section**: The primary landing area of the website containing profile information and call-to-action elements
- **Navigation_Bar**: The top navigation component that provides links to different sections
- **Project_Card**: A visual component displaying individual project information
- **Contact_Form**: A static form component for collecting visitor messages
- **Responsive_Layout**: A layout that adapts to different screen sizes (mobile, tablet, desktop)
- **Dark_Mode**: A color scheme with dark backgrounds and light text
- **Static_Asset**: Files such as images, PDFs, or fonts that do not require server processing
- **Deployment_Package**: The complete set of files ready for hosting on Vercel

## Requirements

### Requirement 1: Website Structure and Navigation

**User Story:** As a visitor, I want to navigate between different sections of the portfolio, so that I can easily find specific information about Juby Neil Valiao.

#### Acceptance Criteria

1. THE Portfolio_Website SHALL contain seven distinct sections: Hero, Experience, Education, Projects, Hobbies, Contact, and Footer
2. THE Navigation_Bar SHALL provide anchor links to all seven sections
3. WHEN a visitor clicks a navigation link, THE Portfolio_Website SHALL scroll smoothly to the corresponding section
4. THE Portfolio_Website SHALL display the Navigation_Bar at the top of the viewport on all pages
5. THE Responsive_Layout SHALL adapt the Navigation_Bar for mobile devices with screen width less than 768px

### Requirement 2: Hero Section Display

**User Story:** As a visitor, I want to see an engaging introduction with profile information, so that I can quickly understand who Juby Neil Valiao is and what they do.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a circular profile picture with diameter of 270px
2. THE Hero_Section SHALL display the name "Juby Neil Valiao" as the primary heading
3. THE Hero_Section SHALL display the title "Web Developer" as the secondary heading
4. THE Hero_Section SHALL display the bio text "Transforming ideas into exceptional digital experiences"
5. THE Hero_Section SHALL display skill badges for Python, Django, PHP, Laravel, and JavaScript
6. THE Hero_Section SHALL provide three call-to-action buttons: "View Projects", "Contact Me", and "Download CV"
7. THE Hero_Section SHALL display social media links for LinkedIn, GitHub, and Facebook
8. WHEN a visitor clicks the "Download CV" button, THE Portfolio_Website SHALL initiate download of the resume PDF file
9. WHEN a visitor clicks a social media link, THE Portfolio_Website SHALL open the corresponding profile in a new browser tab

### Requirement 3: Experience Section Display

**User Story:** As a visitor, I want to view professional experience information, so that I can understand Juby Neil Valiao's work history.

#### Acceptance Criteria

1. THE Portfolio_Website SHALL display two experience entries in chronological order
2. THE Portfolio_Website SHALL display the position "Intern" at "NORSU-BSC" with duration "July 2024 – March 2025"
3. THE Portfolio_Website SHALL display the position "Full Stack Developer" at "Freelance" with duration "Feb 2025 – Present"
4. THE Responsive_Layout SHALL display experience entries in a timeline or card layout format

### Requirement 4: Education Section Display

**User Story:** As a visitor, I want to view educational background and achievements, so that I can understand Juby Neil Valiao's academic qualifications.

#### Acceptance Criteria

1. THE Portfolio_Website SHALL display four educational institutions in reverse chronological order
2. THE Portfolio_Website SHALL display "B.S. in Information Technology" from "NORSU-BSC" with years "2020–2025"
3. THE Portfolio_Website SHALL display "General Academic Strand" from "Miguel L. Daclan National High School" with years "2016–2018"
4. THE Portfolio_Website SHALL display "Vicente Z. Badon Campus" with years "2012–2016"
5. THE Portfolio_Website SHALL display "Bongalonan Elementary School" with years "2008–2012"
6. THE Portfolio_Website SHALL display academic honors including "Salutatorian" and "Valedictorian" with their corresponding institutions
7. THE Responsive_Layout SHALL display education entries in a card layout format

### Requirement 5: Projects Section Display

**User Story:** As a visitor, I want to view completed projects with technical details, so that I can assess Juby Neil Valiao's technical capabilities and experience.

#### Acceptance Criteria

1. THE Portfolio_Website SHALL display seven project entries
2. FOR EACH project, THE Project_Card SHALL display the project name, description, and technology stack badges
3. FOR EACH project, THE Project_Card SHALL provide a GitHub repository link
4. THE Portfolio_Website SHALL display the following projects: Portfolio Website, NORSU Alumni Web Portal, CTTMO Traffic Violation Management System, Pharmacy Inventory Management System, CRUD To Do List with Email Updates, Django Payroll Management System with QR & Face Recognition, and Laravel Chatbot
5. WHEN a visitor clicks a GitHub link, THE Portfolio_Website SHALL open the repository in a new browser tab
6. THE Responsive_Layout SHALL display projects in a grid layout that adapts from 3 columns on desktop to 1 column on mobile

### Requirement 6: Hobbies and Interests Section Display

**User Story:** As a visitor, I want to learn about personal interests, so that I can understand Juby Neil Valiao beyond professional qualifications.

#### Acceptance Criteria

1. THE Portfolio_Website SHALL display three hobby entries: Gaming, Reading, and Badminton
2. THE Responsive_Layout SHALL display hobbies in a card layout format

### Requirement 7: Contact Section and Form

**User Story:** As a visitor, I want to see contact information and a message form, so that I can reach out to Juby Neil Valiao.

#### Acceptance Criteria

1. THE Portfolio_Website SHALL display the email address "hutchiejn@gmail.com"
2. THE Portfolio_Website SHALL display social media links for LinkedIn, GitHub, and Facebook
3. THE Contact_Form SHALL provide three input fields: Name, Email, and Message
4. THE Contact_Form SHALL be a static form without backend submission functionality
5. THE Responsive_Layout SHALL display the Contact_Form with full-width inputs on mobile devices

### Requirement 8: Footer Display

**User Story:** As a visitor, I want to see footer information with social links, so that I can access additional resources and copyright information.

#### Acceptance Criteria

1. THE Portfolio_Website SHALL display "Juby Neil Valiao" in the footer
2. THE Portfolio_Website SHALL display a thank you message in the footer
3. THE Portfolio_Website SHALL display social media links in the footer
4. THE Portfolio_Website SHALL display copyright information in the footer

### Requirement 9: Responsive Design Implementation

**User Story:** As a visitor using any device, I want the website to display correctly on my screen size, so that I can access all content regardless of my device.

#### Acceptance Criteria

1. THE Responsive_Layout SHALL adapt all sections for desktop screens with width greater than or equal to 1024px
2. THE Responsive_Layout SHALL adapt all sections for tablet screens with width between 768px and 1023px
3. THE Responsive_Layout SHALL adapt all sections for mobile screens with width less than 768px
4. THE Portfolio_Website SHALL use TailwindCSS utility classes for responsive breakpoints
5. THE Portfolio_Website SHALL maintain readability and usability across all screen sizes

### Requirement 10: Visual Styling and Theme

**User Story:** As a visitor, I want to experience a modern, visually appealing dark-themed interface, so that I can comfortably browse the portfolio.

#### Acceptance Criteria

1. THE Portfolio_Website SHALL implement a dark color scheme with dark backgrounds and light text
2. THE Portfolio_Website SHALL use Google Fonts "Poppins" or "Inter" for typography
3. THE Portfolio_Website SHALL use TailwindCSS utility classes for spacing, typography, and layout
4. THE Portfolio_Website SHALL use DaisyUI components for buttons, cards, and badges
5. WHEN a visitor hovers over interactive elements, THE Portfolio_Website SHALL display smooth transition effects
6. WHEN a visitor hovers over Project_Card elements, THE Portfolio_Website SHALL display visual feedback

### Requirement 11: Static Asset Management

**User Story:** As a developer, I want all assets organized in a clear structure, so that the website can be easily maintained and deployed.

#### Acceptance Criteria

1. THE Deployment_Package SHALL contain an assets directory with img and pdf subdirectories
2. THE Deployment_Package SHALL contain a css directory with compiled TailwindCSS and DaisyUI styles
3. THE Deployment_Package SHALL store the profile picture in the assets/img directory
4. THE Deployment_Package SHALL store the resume PDF in the assets/pdf directory
5. THE Deployment_Package SHALL store project images in the assets/img directory
6. THE Portfolio_Website SHALL reference all Static_Asset files using relative paths

### Requirement 12: Performance and Loading

**User Story:** As a visitor, I want the website to load quickly, so that I can access information without delays.

#### Acceptance Criteria

1. THE Portfolio_Website SHALL use only static HTML, CSS, and JavaScript files
2. THE Portfolio_Website SHALL load all critical content without requiring backend API calls
3. THE Portfolio_Website SHALL optimize all image Static_Asset files for web delivery
4. THE Portfolio_Website SHALL minimize CSS and JavaScript file sizes for production deployment

### Requirement 13: Deployment Configuration

**User Story:** As a developer, I want the website configured for Vercel deployment, so that it can be hosted and automatically updated.

#### Acceptance Criteria

1. THE Deployment_Package SHALL contain all files necessary for static site hosting
2. THE Deployment_Package SHALL use the root directory as the output directory
3. THE Portfolio_Website SHALL be compatible with Vercel's static HTML preset
4. THE Deployment_Package SHALL include a GitHub repository configuration for automatic deployment on push

### Requirement 14: Interactive Enhancements

**User Story:** As a visitor, I want subtle animations and interactive effects, so that the browsing experience feels polished and engaging.

#### Acceptance Criteria

1. WHERE scroll animations are implemented, THE Portfolio_Website SHALL animate elements when they enter the viewport
2. WHERE a shrinking navbar is implemented, THE Navigation_Bar SHALL reduce its height when the visitor scrolls down beyond 100px
3. THE Portfolio_Website SHALL use smooth scrolling behavior for all anchor link navigation
4. WHERE background animations are implemented, THE Hero_Section SHALL display subtle particle effects or gradient animations
