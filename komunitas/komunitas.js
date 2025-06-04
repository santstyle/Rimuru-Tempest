document.addEventListener('DOMContentLoaded', function() {
    // MOBILE MENU TOGGLER
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // TOMBOL SEARCH
    const searchBtn = document.querySelector('.search-btn');
    const searchContainer = document.querySelector('.search-container');
    
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        searchContainer.classList.toggle('active');
    });
    
    // TOMBOL DARK MODE
    const themeToggle = document.querySelector('.theme-toggle');
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const icon = this.querySelector('i');
        
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
    
    // CLOSE MOBILE MENU TOGGLER
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });
});

// Thread Sorting
const sortButtons = document.querySelectorAll('.sort-btn');

sortButtons.forEach(button => {
    button.addEventListener('click', () => {
        sortButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Here you would typically sort the threads based on the selected option
        // For this example, we'll just log the selected sort option
        console.log(`Sorting by: ${button.textContent}`);
    });
});

// Create Thread Button
const createThreadBtn = document.querySelector('.create-thread-btn');

createThreadBtn.addEventListener('click', () => {
    // Here you would typically open a thread creation modal or navigate to a new page
    alert('Thread creation form would open here!');
});