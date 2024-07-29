document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navigation a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        if (href === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const testElements = document.querySelectorAll('.test');
    const url = 'https://www.youtube.com';
    testElements.forEach(element => {
        element.addEventListener('click', () => {
            window.location.href = url;
        });
    });
});

