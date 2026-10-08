const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  siteNav?.classList.toggle('open', !isOpen);
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('open');
  });
});

const filterButtons = [...document.querySelectorAll('.filter')];
const productCards = [...document.querySelectorAll('.product-card')];

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    const filter = button.dataset.filter;
    productCards.forEach((card) => {
      card.hidden = filter !== 'todos' && card.dataset.kind !== filter;
    });
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
