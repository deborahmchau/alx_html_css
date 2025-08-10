// Select hamburger button and nav menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');

hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');

  // Update aria-expanded attribute for accessibility
  hamburger.setAttribute('aria-expanded', isOpen);
});
