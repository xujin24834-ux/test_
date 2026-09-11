const observer = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) target.classList.add('in-view');
  });
}, { threshold: .15 });

document.querySelectorAll('.terminal, .facts, .closing').forEach(observer.observe.bind(observer));
