function helloWorld() {
  return 'Hello, florencia!';
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const message = 'Una demostración de desarrollo web profesional con CI/CD, testing automatizado y despliegue continuo.';
  header.textContent = message;

  // Animación de entrada
  header.style.opacity = '0';
  header.style.transition = 'opacity 0.8s ease-in';
  
  setTimeout(() => {
    header.style.opacity = '1';
  }, 100);

  // Modal para ampliar imagen
  const pipelineImage = document.getElementById('pipelineImage');
  const imageModal = document.getElementById('imageModal');
  const closeModal = document.querySelector('.close-modal');

  // Abrir modal al hacer clic en la imagen
  if (pipelineImage) {
    pipelineImage.addEventListener('click', () => {
      imageModal.classList.add('active');
    });
  }

  // Cerrar modal al hacer clic en la X
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      imageModal.classList.remove('active');
    });
  }

  // Cerrar modal al hacer clic fuera de la imagen
  if (imageModal) {
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal) {
        imageModal.classList.remove('active');
      }
    });
  }

  // Cerrar modal con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      imageModal.classList.remove('active');
    }
  });
});

module.exports = { helloWorld };
