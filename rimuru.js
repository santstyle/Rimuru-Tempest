// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Random visitor 
setInterval(() => {
    const baseCount = 1245;
    const randomFactor = Math.floor(Math.random() * 50);
    document.getElementById('visitor-count').textContent = (baseCount + randomFactor).toLocaleString();
}, 3000);

// Dark mode toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});


if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Search toggle
const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search-container');

searchBtn.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
});


// Animate stats on scroll
const animateStats = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 30;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                stat.textContent = target;
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 30);
    });
};

// Check if stats are in view
const statsSection = document.querySelector('.stats-grid');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    observer.observe(statsSection);
}