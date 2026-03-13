// 1. Preloader Logic
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500); // Simulated luxury loading time
});

// 2. Mega Menu Toggle
const toggleMenu = document.getElementById('toggleMenu');
const megaMenu = document.getElementById('megaMenu');

toggleMenu.addEventListener('click', () => {
    megaMenu.classList.toggle('active');
    toggleMenu.classList.toggle('open');
});

// 3. Scroll Reveal Engine
const revealItems = document.querySelectorAll('.reveal');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

revealItems.forEach(item => scrollObserver.observe(item));