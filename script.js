
const button = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-mobile-menu]');
if (button && menu) {
  button.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    button.textContent = open ? '×' : '☰';
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      button.textContent = '☰';
      button.setAttribute('aria-expanded', 'false');
    });
  });
}
