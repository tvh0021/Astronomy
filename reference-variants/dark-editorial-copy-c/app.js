const button = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');

if (button && menu) {
  const closeMenu = () => {
    menu.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = 'Menu';
  };

  button.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'Close' : 'Menu';
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
      button.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav')) closeMenu();
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
}
