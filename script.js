// Typewriter effect
const roles = ["Customer Success Manager", "Full Stack Developer", "Cloud Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const typewriterEl = document.getElementById('typewriter');

function typeLoop() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeLoop, 1500);
      return;
    }
  } else {
    typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 50 : 100);
}

typeLoop();

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '60px';
  navLinks.style.right = '0';
  navLinks.style.flexDirection = 'column';
  navLinks.style.background = '#0a1929';
  navLinks.style.padding = '1.5rem';
  navLinks.style.borderRadius = '0 0 0 8px';
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.style.display = 'none';
    }
  });
});

// Scroll-triggered fade-in animation for section titles
const observerOptions = { threshold: 0.3 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.section-title').forEach(title => {
  observer.observe(title);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.4)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});