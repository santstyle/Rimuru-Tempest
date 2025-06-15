const seasonSelect = document.getElementById('season');
const episodeCards = document.querySelectorAll('.episode-card');

seasonSelect.addEventListener('change', () => {
    const selected = seasonSelect.value;

    episodeCards.forEach(card => {
        const episodeNumberSpan = card.querySelector('.episode-number');
        if (!episodeNumberSpan) return;

        const epText = episodeNumberSpan.textContent.trim();
        const epNumStr = epText.replace('EP ', '');
        const epNum = parseFloat(epNumStr);

        let show = false;
        if (selected === 'all') {
            show = true;
        } else if (selected === '1') {
            // Season 1: episodes 1 to 24.9
            show = epNum >= 1 && epNum <= 24.9;
        } else if (selected === '2') {
            // Season 2: episodes 25 to 48.5
            show = epNum >= 25 && epNum <= 48.5;
        } else if (selected === 'ova') {
            // Season 3: episodes 49 to 72
            show = epNum >= 49 && epNum <= 72;
        }

        if (show) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});

// Mouse drag scroll 
const slider = document.querySelector('.slider-container');
let isDown = false;
let startX;
let scrollLeft;

if (slider) {
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
}
