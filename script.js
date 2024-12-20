// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for sticky navbar
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Reveal Effect for Menu Items
ScrollReveal().reveal('.menu-item', {
    delay: 300,
    distance: '50px',
    duration: 1000,
    origin: 'bottom',
    interval: 200
});

// Scroll Reveal Effect for Titles
ScrollReveal().reveal('.title', {
    delay: 200,
    distance: '20px',
    duration: 800,
    origin: 'top'
});
