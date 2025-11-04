window.addEventListener('scroll', () => {
  const nav = document.querySelector('header');
  if (window.scrollY > 50) {
    nav.style.background = '#0a0a0a';
  } else {
    nav.style.background = '#111';
  }
});

