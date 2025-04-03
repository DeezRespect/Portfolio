// Suavizado de scroll para la navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Manejo básico del formulario de contacto
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    this.reset();
  });
  