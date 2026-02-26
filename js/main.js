// js/main.js - Premium Interactive Portfolio Enhancements

// ============================================
// 1. Custom Cursor Implementation
// ============================================
const cursor = document.createElement('div');
const cursorFollower = document.createElement('div');
cursor.className = 'custom-cursor';
cursorFollower.className = 'custom-cursor-follower';
document.body.appendChild(cursor);
document.body.appendChild(cursorFollower);

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

// Smooth follower animation
function animateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  cursorFollower.style.left = followerX + 'px';
  cursorFollower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Cursor hover effects
document.querySelectorAll('a, button, .btn').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(1.5)';
    cursorFollower.style.transform = 'scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursorFollower.style.transform = 'scale(1)';
  });
});

// ============================================
// 2. Loading Animation
// ============================================
window.addEventListener('load', () => {
  const loadingBar = document.createElement('div');
  loadingBar.className = 'loading-bar';
  document.body.appendChild(loadingBar);
  
  setTimeout(() => {
    loadingBar.style.transform = 'scaleX(1)';
    setTimeout(() => {
      loadingBar.style.opacity = '0';
      setTimeout(() => loadingBar.remove(), 300);
    }, 500);
  }, 100);
});

// ============================================
// 3. Particle Background System
// ============================================
function createParticles() {
  const heroSection = document.querySelector('#hero');
  if (!heroSection) return;
  
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  heroSection.appendChild(particlesContainer);
  
  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particlesContainer.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 25000);
  }
  
  // Create initial particles
  for (let i = 0; i < 50; i++) {
    setTimeout(createParticle, i * 100);
  }
  
  // Continue creating particles
  setInterval(createParticle, 500);
}

// ============================================
// 4. Mobile Menu Implementation
// ============================================
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

function openMobileMenu() {
  mobileMenu.classList.add('menu-open');
  mobileMenuOverlay.classList.add('overlay-open');
  document.body.classList.add('menu-open');
  hamburgerIcon.classList.add('hidden');
  closeIcon.classList.remove('hidden');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('menu-open');
  mobileMenuOverlay.classList.remove('overlay-open');
  document.body.classList.remove('menu-open');
  hamburgerIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
}

// Toggle menu on button click
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    if (mobileMenu.classList.contains('menu-open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
}

// Close menu on close button click
if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', closeMobileMenu);
}

// Close menu on overlay click
if (mobileMenuOverlay) {
  mobileMenuOverlay.addEventListener('click', closeMobileMenu);
}

// Close menu when clicking on a link
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('menu-open')) {
    closeMobileMenu();
  }
});

// ============================================
// 5. Premium Smooth Scroll with Offset
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
// 6. Premium Navbar with Glassmorphism
// ============================================
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

// ============================================
// 7. Advanced Scroll Reveal with Stagger
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('active');
      }, index * 100); // Stagger animation
    }
  });
}, observerOptions);

// Observe elements with different reveal types
document.querySelectorAll('section').forEach(el => {
  el.classList.add('scroll-reveal');
  observer.observe(el);
});

document.querySelectorAll('.card, .glass-card, .card-premium').forEach((el, index) => {
  if (index % 2 === 0) {
    el.classList.add('scroll-reveal-left');
  } else {
    el.classList.add('scroll-reveal-right');
  }
  observer.observe(el);
});

// ============================================
// 8. Typing Animation for Hero Text
// ============================================
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// ============================================
// 9. Premium Form Handler with Animation
// ============================================
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Add loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form processing
    setTimeout(() => {
      submitBtn.textContent = 'Message Sent!';
      submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
        contactForm.reset();
        
        // Show notification
        showNotification('This is a static form. Please email directly to hutchiejn@gmail.com');
      }, 2000);
    }, 1500);
  });
}

// ============================================
// 10. Notification System
// ============================================
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 p-4 rounded-lg glass z-50 transform translate-x-full transition-transform duration-300`;
  notification.style.background = 'rgba(59, 130, 246, 0.1)';
  notification.style.border = '1px solid rgba(59, 130, 246, 0.3)';
  notification.innerHTML = `
    <div class="flex items-center space-x-2">
      <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <span class="text-white">${message}</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(full)';
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// ============================================
// 11. Parallax Effect for Hero Section
// ============================================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('#hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ============================================
// 12. Initialize Premium Features
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Create particles
  createParticles();
  
  // Add premium classes to existing elements
  document.querySelectorAll('.navbar').forEach(el => {
    el.classList.add('navbar-premium');
  });
  
  document.querySelectorAll('.card').forEach(el => {
    el.classList.add('glass-card');
  });
  
  // Initialize typing animation for hero subtitle
  const heroSubtitle = document.querySelector('#hero p');
  if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    setTimeout(() => {
      typeWriter(heroSubtitle, originalText, 50);
    }, 1000);
  }
  
  // Add floating animation to profile picture
  const profilePic = document.querySelector('.avatar');
  if (profilePic) {
    profilePic.classList.add('floating');
  }
});

// ============================================
// 13. Performance Optimization
// ============================================
// Throttle scroll events
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
  // Scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);
