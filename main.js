document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.top   o a').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkPage = href.split('/').pop();
    if (linkPage === currentPage) {
      link.classList.add('ativo');
    }
  });
});
