const hero = document.querySelector('.hero');
window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 8;
  const y = (e.clientY / window.innerHeight - 0.5) * -8;
  hero.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
});
