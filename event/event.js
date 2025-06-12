document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // Search Toggle
    const searchBtn = document.querySelector('.search-btn');
    const searchContainer = document.querySelector('.search-container');
    
    if (searchBtn && searchContainer) {
        searchBtn.addEventListener('click', () => {
            searchContainer.classList.toggle('active');
        });
    }

    // Dark Mode Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const icon = themeToggle.querySelector('i');
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.replace('fa-moon', 'fa-sun');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
            }
        });
    }

    // Category Filters
    const categoryFilters = document.querySelectorAll('.category-filter');
    
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            categoryFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            const category = filter.dataset.category;
            const eventCards = document.querySelectorAll('.event-card');

            eventCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'flex'; // Ubah ke flex untuk tampilan yang lebih baik
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // View Toggle
    const listViewBtn = document.getElementById('list-view-btn');
    const listView = document.getElementById('list-view');
    
    if (listViewBtn && listView) {
        // Set default view
        listViewBtn.classList.add('active');
        listView.style.display = 'block';
    }

    // Pastikan file CSS event.css ada di folder /event/
});