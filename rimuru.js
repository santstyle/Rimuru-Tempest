
// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Random visitor 
setInterval(() => {
    const baseCount = 1245;
    const randomFactor = Math.floor(Math.random() * 50);
    document.getElementById('visitor-count').textContent = (baseCount + randomFactor).toLocaleString();
}, 3000);


if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}


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

// Check stats view
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

document.addEventListener('DOMContentLoaded', function() {
    const popupBubble = document.getElementById('popupBubble');
    const disclaimerModal = document.getElementById('disclaimerModal');
    const closeModal = document.getElementById('closeModal');

    if (!popupBubble) {
        console.error('Popup bubble element not found');
        return;
    }
    if (!disclaimerModal) {
        console.error('Disclaimer modal element not found');
        return;
    }
    if (!closeModal) {
        console.error('Close modal button element not found');
        return;
    }

    popupBubble.style.display = 'flex';

    // Open bubble 
    popupBubble.addEventListener('click', function() {
        disclaimerModal.style.display = 'flex';
        popupBubble.style.display = 'none';
    });

    // Close
    closeModal.addEventListener('click', function() {
        disclaimerModal.style.display = 'none';
        popupBubble.style.display = 'flex';
    });
    disclaimerModal.addEventListener('click', function(event) {
        if (event.target === disclaimerModal) {
            disclaimerModal.style.display = 'none';
            popupBubble.style.display = 'flex';
        }
    });
});
