// Smooth scroll
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Simple welcome message
console.log("Portfolio Loaded Successfully 🚀");
