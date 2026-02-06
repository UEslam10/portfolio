// Fade & move on scroll
const elements = document.querySelectorAll('section, .work');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * .75;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

// Initial state
elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(60px)';
  el.style.transition = 'all 1s ease';
});
 const cards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(40px)';
  card.style.transition = 'all .8s ease';
});
