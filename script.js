let lastScrollTop = 0;
const header = document.getElementById('header');

// Header hide/show on scroll
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.classList.add('hidden');
    } else {
        // Scrolling up
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

// Dropdown functionality
function toggleDropdown(header) {
    const dropdown = header.parentElement;
    const content = dropdown.querySelector('.dropdown-content');
    
    // Close other open dropdowns first
    const openDropdowns = document.querySelectorAll('.dropdown.open');
    openDropdowns.forEach(openDropdown => {
        if (openDropdown !== dropdown) {
            openDropdown.classList.remove('open');
        }
    });
    
    // Toggle current dropdown
    if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
    } else {
        // Get the natural height of the content
        dropdown.classList.add('open');
        const height = content.scrollHeight;
        content.style.height = '0px';
        
        // Force a reflow
        content.offsetHeight;
        
        // Animate to the natural height
        content.style.height = height + 'px';
        
        // Clean up after animation
        setTimeout(() => {
            content.style.height = 'auto';
        }, 200);
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        const openDropdowns = document.querySelectorAll('.dropdown.open');
        openDropdowns.forEach(dropdown => dropdown.classList.remove('open'));
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
