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
