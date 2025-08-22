document.addEventListener('DOMContentLoaded', () => {
  // Scroll suave
  const links = document.querySelectorAll('nav a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if(targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Animação de fade-in dos cards
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        requestAnimationFrame(() => { // otimização
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target) // otimização
        })
      }
    });
  }, { threshold: 0.3 }); // otimização 

  cards.forEach(card => observer.observe(card));
});
