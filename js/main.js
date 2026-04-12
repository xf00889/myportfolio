/* ===== CANVAS NOISE BACKGROUND ===== */
function initNoise() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, frame = 0;

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  function drawNoise() {
    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255;
      data[i] = data[i+1] = data[i+2] = v;
      data[i+3] = 18; // very subtle
    }
    ctx.putImageData(imageData, 0, 0);
    frame++;
    requestAnimationFrame(drawNoise);
  }
  drawNoise();
}
initNoise();

/* ===== LIVE CLOCK ===== */
function updateClock() {
  const el = document.getElementById('hero-time');
  if (!el) return;
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  el.textContent = `${h}:${m}:${s} PHT`;
}
updateClock();
setInterval(updateClock, 1000);

/* ===== TEXT SCRAMBLE ===== */
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const old = this.el.innerText;
    const len = Math.max(old.length, newText.length);
    const promise = new Promise(res => this.resolve = res);
    this.queue = [];
    for (let i = 0; i < len; i++) {
      const from = old[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 12);
      const end = start + Math.floor(Math.random() * 12);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameReq);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
        }
        output += `<span class="scramble-char">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameReq = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}

// Run scramble on headline words after slide-up animation
setTimeout(() => {
  document.querySelectorAll('[data-scramble]').forEach(el => {
    const target = el.dataset.scramble;
    const fx = new TextScramble(el);
    fx.setText(target);
  });
}, 900);

/* ===== TYPEWRITER ANIMATION ===== */
(function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const roles = [
    'Full Stack Developer',
    'Python / Django Dev',
    'PHP / Laravel Dev',
    'UI / UX Enthusiast',
    'Problem Solver',
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const TYPING_SPEED   = 80;   // ms per character when typing
  const DELETING_SPEED = 40;   // ms per character when deleting
  const PAUSE_AFTER    = 1800; // ms pause at full word
  const PAUSE_BEFORE   = 300;  // ms pause before typing next word

  function tick() {
    const current = roles[roleIndex];

    if (!isDeleting) {
      // Typing
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        // Finished typing — pause then start deleting
        isDeleting = true;
        setTimeout(tick, PAUSE_AFTER);
        return;
      }
      setTimeout(tick, TYPING_SPEED + Math.random() * 40);
    } else {
      // Deleting
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        // Finished deleting — move to next role
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(tick, PAUSE_BEFORE);
        return;
      }
      setTimeout(tick, DELETING_SPEED);
    }
  }

  // Start after hero intro animations settle
  setTimeout(tick, 1400);
})();

/* ===== 3D CARD TILT ===== */
const heroCard = document.getElementById('hero-card');
if (heroCard) {
  heroCard.addEventListener('mousemove', (e) => {
    const rect = heroCard.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotX = y * -18;
    const rotY = x * 18;
    heroCard.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03,1.03,1.03)`;
    // Move glow with mouse
    const glow = heroCard.querySelector('.card-glow');
    if (glow) {
      glow.style.background = `radial-gradient(circle at ${(x+0.5)*100}% ${(y+0.5)*100}%, rgba(99,102,241,0.3), transparent 60%)`;
      glow.style.opacity = '1';
    }
  });
  heroCard.addEventListener('mouseleave', () => {
    heroCard.style.transform = '';
    const glow = heroCard.querySelector('.card-glow');
    if (glow) { glow.style.opacity = '0'; }
  });
}


const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
const trail = document.getElementById('cursor-trail');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;
let trailX = 0, trailY = 0;
let isVisible = false;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (!isVisible) {
    isVisible = true;
    dot.style.opacity = '1';
    ring.style.opacity = '1';
    trail.style.opacity = '0.4';
  }

  dot.style.left = mouseX + 'px';
  dot.style.top = mouseY + 'px';
});

document.addEventListener('mouseleave', () => {
  dot.style.opacity = '0';
  ring.style.opacity = '0';
  trail.style.opacity = '0';
  isVisible = false;
});

// Smooth ring & trail follow with lerp
function lerp(a, b, t) { return a + (b - a) * t; }

function animateCursor() {
  ringX = lerp(ringX, mouseX, 0.12);
  ringY = lerp(ringY, mouseY, 0.12);
  ring.style.left = ringX + 'px';
  ring.style.top = ringY + 'px';

  trailX = lerp(trailX, mouseX, 0.06);
  trailY = lerp(trailY, mouseY, 0.06);
  trail.style.left = trailX + 'px';
  trail.style.top = trailY + 'px';

  requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor state changes
document.querySelectorAll('[data-cursor="link"], a, button').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-link'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-link'));
});
document.querySelectorAll('[data-cursor="button"]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    document.body.classList.remove('cursor-link');
    document.body.classList.add('cursor-button');
  });
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-button'));
});
document.querySelectorAll('[data-cursor="image"]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    document.body.classList.remove('cursor-link');
    document.body.classList.add('cursor-image');
  });
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-image'));
});
document.querySelectorAll('[data-cursor="card"]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    document.body.classList.remove('cursor-link');
    document.body.classList.add('cursor-card');
  });
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-card'));
});

// Click ripple on cursor
document.addEventListener('mousedown', () => {
  ring.style.transform = 'translate(-50%, -50%) scale(0.8)';
});
document.addEventListener('mouseup', () => {
  ring.style.transform = 'translate(-50%, -50%) scale(1)';
});

/* ===== MOBILE MENU ===== */
const menuBtn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  mobileNav.classList.toggle('open');
});
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.style.background = 'rgba(8,8,8,0.95)';
    navbar.style.borderBottomColor = 'rgba(255,255,255,0.1)';
  } else {
    navbar.style.background = 'rgba(8,8,8,0.8)';
    navbar.style.borderBottomColor = 'rgba(255,255,255,0.07)';
  }
}, { passive: true });

/* ===== ACTIVE NAV LINK ===== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.45 });

sections.forEach(s => sectionObserver.observe(s));

/* ===== SCROLL REVEAL ===== */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ===== COUNTER ANIMATION ===== */
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = target === 100 ? '%' : '+';
  const duration = 1800;
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  let frame = 0;

  const timer = setInterval(() => {
    frame++;
    // Ease out
    const progress = frame / steps;
    const eased = 1 - Math.pow(1 - progress, 3);
    current = Math.round(target * eased);

    el.textContent = current + (frame >= steps ? suffix : '');
    if (frame >= steps) {
      el.textContent = target + suffix;
      clearInterval(timer);
    }
  }, duration / steps);
}

const statsGrid = document.querySelector('.stats-grid');
if (statsGrid) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-num').forEach((el, i) => {
          setTimeout(() => animateCounter(el), i * 150);
        });
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  counterObserver.observe(statsGrid);
}

/* ===== CONTACT FORM ===== */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const span = btn.querySelector('span');
    const originalText = span.textContent;
    span.textContent = 'Message Sent!';
    btn.style.background = '#22c55e';
    btn.style.boxShadow = '0 12px 28px rgba(34,197,94,0.3)';
    setTimeout(() => {
      span.textContent = originalText;
      btn.style.background = '';
      btn.style.boxShadow = '';
      form.reset();
    }, 3500);
  });
}

/* ===== MAGNETIC BUTTONS ===== */
document.querySelectorAll('.btn-primary, .btn-ghost, .nav-cta').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px) translateY(-2px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});
