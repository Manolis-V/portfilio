// Toggle Mobile Menu
const toggleMenu = () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
};

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
