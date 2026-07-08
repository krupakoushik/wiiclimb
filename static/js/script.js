const siteHeader = document.getElementById('siteHeader');
const siteNav = document.getElementById('siteNav');
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
});

const links = document.querySelectorAll('.nav-link');
links.forEach((link) => {
    link.addEventListener('click', () => {
        siteNav.classList.remove('open');
    });
});
