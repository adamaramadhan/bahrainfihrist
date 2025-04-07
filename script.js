document.addEventListener('DOMContentLoaded', () => {
    // Header visibility on scroll
    const header = document.getElementById('site-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Show/hide header based on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down & past header
            header.classList.add('header-hidden');
        } else {
            // Scrolling up
            header.classList.remove('header-hidden');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Accordion functionality
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Toggle current accordion
            accordion.classList.toggle('active');
            
            // Optional: Close other accordions when opening one
            // accordions.forEach(item => {
            //     if (item !== accordion) {
            //         item.classList.remove('active');
            //     }
            // });
        });
    });
});
