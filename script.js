document.addEventListener('DOMContentLoaded', () => {
  const loader = document.createElement('div');
  loader.className = 'loader';
  loader.innerHTML = `
    <div class="spinner"></div>
    <div class="loader-text">Carregando magia solidária... 🌟</div>
  `;
  document.body.appendChild(loader);

  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); 
      loader.classList.add('active');
      setTimeout(() => {
        window.location.href = link.href;
      }, 2000);
    });
  });
});
