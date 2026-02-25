// js/main.js - Interactive enhancements for portfolio website

// ============================================
// 1. Smooth Scroll with Offset for Fixed Navbar
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const targetPosition = target.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// 2. Navbar Shrink on Scroll (after 100px)
// ============================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add navbar-shrink class when scrolled past 100px
  if (currentScroll > 100) {
    navbar.classList.add('navbar-shrink');
  } else {
    navbar.classList.remove('navbar-shrink');
  }
  
  lastScroll = currentScroll;
});

// ============================================
// 3. Scroll Reveal Animation using Intersection Observer
// ============================================
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

// Observe all sections and cards for scroll reveal
document.querySelectorAll('section, .card').forEach(el => {
  el.classList.add('scroll-reveal');
  observer.observe(el);
});

// ============================================
// 4. Static Form Submit Handler
// ============================================
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('This is a static form. Please email directly to hutchiejn@gmail.com');
  });
}
