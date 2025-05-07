// Smooth scroll per ancore interne (se presenti)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Mobile menu toggle (se hai menu mobile)
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
  
  // AOS init moved to HTML footer for immediate execution
  