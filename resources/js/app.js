import './bootstrap';
import { initBrainNetwork } from './3d-network';
import { initTongkonan } from './3d-tongkonan';

document.addEventListener('DOMContentLoaded', () => {
    initBrainNetwork();
    initTongkonan();

    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Hanya animasi saat pertama kali muncul
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach((el) => {
        observer.observe(el);
    });
});
