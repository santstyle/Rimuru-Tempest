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

//SLIDER
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const slider = document.querySelector('.slider');
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    const dotsContainer = document.querySelector('.slider-dots');
    
    // State variables
    let currentIndex = 0;
    let slideInterval;
    const slideCount = slides.length;
    const slideDuration = 5000; // 5 seconds
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;

    // Initialize slider
    function initSlider() {
        // Create navigation dots
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'slider-dot';
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        // Set initial active dot
        updateDots();
        
        // Set up touch events for mobile
        setupTouchEvents();
        
        // Start autoplay
        startAutoplay();
    }

    // Update slide position
    function updateSliderPosition() {
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Go to specific slide
    function goToSlide(index) {
        // Don't animate if already on this slide
        if (index === currentIndex) return;
        
        currentIndex = index;
        updateSliderPosition();
        updateActiveSlide();
        updateDots();
        
        // Reset autoplay timer when manually navigating
        resetAutoplay();
    }

    // Update active slide
    function updateActiveSlide() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
    }

    // Update navigation dots
    function updateDots() {
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Navigation functions
    function nextSlide() {
        const nextIndex = (currentIndex + 1) % slideCount;
        goToSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentIndex - 1 + slideCount) % slideCount;
        goToSlide(prevIndex);
    }

    // Autoplay control
    function startAutoplay() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    function resetAutoplay() {
        clearInterval(slideInterval);
        startAutoplay();
    }

    function pauseAutoplay() {
        clearInterval(slideInterval);
    }

    // Touch event setup
    function setupTouchEvents() {
        slidesContainer.addEventListener('touchstart', touchStart, { passive: true });
        slidesContainer.addEventListener('touchend', touchEnd, { passive: true });
        slidesContainer.addEventListener('touchmove', touchMove, { passive: true });
        
        // Mouse events for desktop
        slidesContainer.addEventListener('mousedown', mouseStart);
        slidesContainer.addEventListener('mouseup', mouseEnd);
        slidesContainer.addEventListener('mouseleave', mouseEnd);
        slidesContainer.addEventListener('mousemove', mouseMove);
    }

    // Touch handlers
    function touchStart(e) {
        startPos = e.touches[0].clientX;
        isDragging = true;
        pauseAutoplay();
        cancelAnimationFrame(animationID);
    }

    function touchEnd() {
        if (!isDragging) return;
        isDragging = false;
        const movedBy = currentTranslate - prevTranslate;
        
        if (movedBy < -50 && currentIndex < slideCount - 1) {
            nextSlide();
        } else if (movedBy > 50 && currentIndex > 0) {
            prevSlide();
        }
        
        startAutoplay();
    }

    function touchMove(e) {
        if (!isDragging) return;
        const currentPosition = e.touches[0].clientX;
        currentTranslate = prevTranslate + currentPosition - startPos;
    }

    // Mouse handlers
    function mouseStart(e) {
        startPos = e.clientX;
        isDragging = true;
        pauseAutoplay();
        cancelAnimationFrame(animationID);
        e.preventDefault();
    }

    function mouseEnd() {
        if (!isDragging) return;
        isDragging = false;
        const movedBy = currentTranslate - prevTranslate;
        
        if (movedBy < -50 && currentIndex < slideCount - 1) {
            nextSlide();
        } else if (movedBy > 50 && currentIndex > 0) {
            prevSlide();
        }
        
        startAutoplay();
    }

    function mouseMove(e) {
        if (!isDragging) return;
        const currentPosition = e.clientX;
        currentTranslate = prevTranslate + currentPosition - startPos;
    }

    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });

    // Pause on hover
    slider.addEventListener('mouseenter', pauseAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);

    // Initialize the slider
    initSlider();
});
//FOOTER
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    const randomVisitors = Math.floor(Math.random() * 2000) + 500;
    document.getElementById('visitor-count').textContent = randomVisitors.toLocaleString();
    const slimeIcon = document.querySelector('.slime-icon');
    let clickCount = 0;
    
    slimeIcon.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount >= 5) {
            const notification = document.createElement('div');
            notification.className = 'slime-notification';
            notification.innerHTML = `
                <div class="notification-content">
                    <span class="slime-emoji">🌀</span>
                    <p>Rimuru-sama senpai noticed you!</p>
                </div>
            `;
            
            document.body.appendChild(notification);
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }, 3000);
            
            clickCount = 0;
        }
    });
    
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

const style = document.createElement('style');
style.textContent = `
    .slime-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(10, 31, 68, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        border-left: 4px solid var(--rimuru-blue);
        z-index: 1000;
        transition: opacity 0.5s ease;
        animation: slideIn 0.5s ease;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .slime-emoji {
        font-size: 1.5rem;
        animation: bounce 1s infinite;
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
    
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
    }
`;
document.head.appendChild(style);