// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

// Mobile Menu Toggle
const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (menuToggle) {
        menuToggle.classList.remove('is-active');
        navLinks.classList.remove('active');
    }
}));

// Navbar Scroll Effect
window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}