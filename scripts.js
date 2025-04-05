document.addEventListener('DOMContentLoaded', function() {
    // Initialize dropdown buttons
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
    
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Toggle the dropdown content display
            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
    
    // Header scroll behavior
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    let scrollingDown = true;
    let ticking = false;
    
    function onScroll() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY <= 0) {
            // At the top of page, always show header
            header.classList.remove('header-hidden');
        } else {
            // Determine scroll direction
            scrollingDown = currentScrollY > lastScrollY;
            
            // Hide on scroll down, show on scroll up
            if (scrollingDown) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    // Throttle scroll events for better performance
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });
});
