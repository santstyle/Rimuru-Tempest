        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mainNav = document.querySelector('.main-nav');
        
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
        
        // Search Toggle
        const searchBtn = document.querySelector('.search-btn');
        const searchContainer = document.querySelector('.search-container');
        
        searchBtn.addEventListener('click', () => {
            searchContainer.classList.toggle('active');
        });
        
        // Dark Mode Toggle
        const themeToggle = document.querySelector('.theme-toggle');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
        
        // Star rating functionality
        const stars = document.querySelectorAll('.rating-stars i');
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = this.getAttribute('data-rating');
                stars.forEach((s, index) => {
                    if (index < rating) {
                        s.classList.add('active');
                        s.classList.remove('far');
                        s.classList.add('fas');
                    } else {
                        s.classList.remove('active');
                        s.classList.add('far');
                        s.classList.remove('fas');
                    }
                });
            });
            
            star.addEventListener('mouseover', function() {
                const rating = this.getAttribute('data-rating');
                stars.forEach((s, index) => {
                    if (index < rating) {
                        s.classList.add('hover');
                    } else {
                        s.classList.remove('hover');
                    }
                });
            });
            
            star.addEventListener('mouseout', function() {
                stars.forEach(s => {
                    s.classList.remove('hover');
                });
            });
        });
        
        // Slider functionality
        const sliderContainer = document.querySelector('.slider-container');
        const sliderDots = document.querySelectorAll('.slider-dot');
        let currentSlide = 0;
        
        function updateSlider() {
            const slideWidth = document.querySelector('.featured-card').offsetWidth + 32; // card width + gap
            sliderContainer.scrollTo({
                left: currentSlide * slideWidth,
                behavior: 'smooth'
            });
            
            sliderDots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        sliderDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlider();
            });
        });
        
        // Auto slide change
        setInterval(() => {
            currentSlide = (currentSlide + 1) % sliderDots.length;
            updateSlider();
        }, 5000);