// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Header hiding on scroll
let lastScrollPosition = 0;
const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
        // Scrolling down - hide header
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up - show header
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollPosition = currentScrollPosition;
});

// Accordion functionality for Fihrist page
document.addEventListener('DOMContentLoaded', () => {
    const accordionTitles = document.querySelectorAll('.accordion-title');
    
    if (accordionTitles) {
        accordionTitles.forEach(title => {
            title.addEventListener('click', () => {
                const accordion = title.parentElement;
                accordion.classList.toggle('accordion-open');
            });
        });
    }
});
