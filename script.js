let lastScrollTop = 0;
const header = document.getElementById('header');

// Header hide/show on scroll
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.classList.add('hidden');
        // Close mobile menu if open
        closeMobileMenu();
    } else {
        // Scrolling up
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

// Mobile menu functionality
function toggleMobileMenu() {
    const navOverlay = document.getElementById('navOverlay');
    const hamburger = document.querySelector('.hamburger');
    
    navOverlay.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Prevent body scrolling when menu is open
    if (navOverlay.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMobileMenu() {
    const navOverlay = document.getElementById('navOverlay');
    const hamburger = document.querySelector('.hamburger');
    
    navOverlay.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
}

// Dropdown functionality
function toggleDropdown(header) {
    const dropdown = header.parentElement;
    dropdown.classList.toggle('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        const openDropdowns = document.querySelectorAll('.dropdown.open');
        openDropdowns.forEach(dropdown => dropdown.classList.remove('open'));
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navOverlay = document.getElementById('navOverlay');
    const hamburger = document.querySelector('.hamburger');
    
    if (navOverlay && navOverlay.classList.contains('active') && 
        !event.target.closest('.hamburger') && 
        !event.target.closest('.nav-overlay')) {
        closeMobileMenu();
    }
});

// Smooth scrolling for anchor links (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
