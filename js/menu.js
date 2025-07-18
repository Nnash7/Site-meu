const hamburger = document.getElementById('hamburger');
const menuLinks = document.getElementById('menuLinks');

hamburger.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
});
