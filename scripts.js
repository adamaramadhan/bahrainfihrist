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
    
    // Hide header on scroll down, show on scroll up
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    let scrollThreshold = 10; // Minimum scroll distance before showing/hiding header
    
    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Check if we've scrolled more than the threshold
        if (Math.abs(lastScrollTop - currentScroll) > scrollThreshold) {
            // Scrolling down and not at the top
            if (currentScroll > lastScrollTop && currentScroll > header.offsetHeight) {
                header.classList.add('hidden');
            } 
            // Scrolling up or at the top
            else {
                header.classList.remove('hidden');
            }
            lastScrollTop = currentScroll;
        }
    }, { passive: true });
});
