document.addEventListener('DOMContentLoaded', function() {
    function initNavigation() {
        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mainNav = document.querySelector('.main-nav');
        
        if (mobileMenuBtn && mainNav) {
            mobileMenuBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                mainNav.classList.toggle('active');
                
                // Toggle icon
                const icon = this.querySelector('i');
                if (mainNav.classList.contains('active')) {
                    icon.classList.replace('fa-bars', 'fa-times');
                } else {
                    icon.classList.replace('fa-times', 'fa-bars');
                }
            });
            
            document.addEventListener('click', function(e) {
                if (!mainNav.contains(e.target) && e.target !== mobileMenuBtn) {
                    mainNav.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    if (icon) icon.classList.replace('fa-times', 'fa-bars');
                }
            });
        }

        // Search Toggle
        const searchBtn = document.querySelector('.search-btn');
        const searchContainer = document.querySelector('.search-container');
        
        if (searchBtn && searchContainer) {
            searchBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                searchContainer.classList.toggle('active');
                
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    if (icon) icon.classList.replace('fa-times', 'fa-bars');
                }
            });
            

            document.addEventListener('click', function(e) {
                if (!searchContainer.contains(e.target) && e.target !== searchBtn) {
                    searchContainer.classList.remove('active');
                }
            });
        }

        // Dark Mode Toggle
        const themeToggle = document.querySelector('.theme-toggle');
        
        if (themeToggle) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const currentTheme = localStorage.getItem('theme');
            
            if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
                document.body.classList.add('dark-mode');
                document.body.classList.remove('light-mode');
                const icon = themeToggle.querySelector('i');
                if (icon) icon.classList.replace('fa-moon', 'fa-sun');
            } else {
                document.body.classList.add('light-mode');
                document.body.classList.remove('dark-mode');
                const icon = themeToggle.querySelector('i');
                if (icon) icon.classList.replace('fa-sun', 'fa-moon');
            }
            
            themeToggle.addEventListener('click', function() {
                const isDark = document.body.classList.contains('dark-mode');
                const icon = this.querySelector('i');
                
                if (isDark) {
                    document.body.classList.remove('dark-mode');
                    document.body.classList.add('light-mode');
                    if (icon) icon.classList.replace('fa-sun', 'fa-moon');
                    localStorage.setItem('theme', 'light');
                } else {
                    document.body.classList.remove('light-mode');
                    document.body.classList.add('dark-mode');
                    if (icon) icon.classList.replace('fa-moon', 'fa-sun');
                    localStorage.setItem('theme', 'dark');
                }
            });
        }

        // Highlight Link Aktif
        const navLinks = document.querySelectorAll('.nav-link');
        const currentPage = location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop();
            if (linkPath === currentPage) {
                link.classList.add('active');
            }
        });
    }

    initNavigation();
    
    const navContainer = document.querySelector('.main-nav-container');
    if (navContainer) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    initNavigation();
                }
            });
        });
        
        observer.observe(navContainer, {
            childList: true,
            subtree: true
        });
    }
});