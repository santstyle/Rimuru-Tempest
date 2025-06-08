const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Search toggle
const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search-container');

searchBtn.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
});

// Season selector functionality
const seasonBtns = document.querySelectorAll('.season-btn');
const episodeListContainer = document.querySelector('.episode-list');

// Episode List Data
const episodesData = {
    'Season 1': [
        { title: 'Episode 1 - Reinkarnasi Sang Slime', thumb: 'https://i.ytimg.com/vi/Lys5vkiv0RA/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/Lys5vkiv0RA?si=e1X_0-ICc2aftavk', page: '1.html' },
        { title: 'Episode 2 - Pertemuan dengan Veldora', thumb: 'https://i.ytimg.com/vi/R6JuMf5XkQc/hq720.jpg', videoUrl: 'https://www.youtube.com/embed/R6JuMf5XkQc', page: '2.html' },
        { title: 'Episode 3 - Goblin dan Sang Pemimpin', thumb: 'https://i.ytimg.com/vi/LGD1DVe8BAo/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/LGD1DVe8BAo', page: '3.html' },
        { title: 'Episode 4 - Di Kerajaan Dwarf Dwargonl', thumb: 'https://i.ytimg.com/vi/KGRK1GE1IG8/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/KGRK1GE1IG8', page: '4.html' },
        { title: 'Episode 5 - Pertemuan dengan Raja Dwarf', thumb: 'https://i.ytimg.com/vi/N6Wix6v4oa4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/N6Wix6v4oa4', page: '5.html' },
        { title: 'Episode 6 - Shizu dan Masa Lalu', thumb: 'https://i.ytimg.com/vi/SrLj-eSbJbo/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/SrLj-eSbJbo', page: '6.html' },
        { title: 'Episode 7 - Penakluk Api', thumb: 'https://i.ytimg.com/vi/Kzz9-_b5ebw/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/Kzz9-_b5ebw', page: '7.html' },
        { title: 'Episode 8 - Warisan Shizu', thumb: 'https://i.ytimg.com/vi/RvWhoeXXeZg/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/RvWhoeXXeZg', page: '8.html' },
        { title: 'Episode 9 - Serangan Ras Ogre', thumb: 'https://i.ytimg.com/vi/HZTj6j6Iaqk/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/HZTj6j6Iaqk', page: '9.html' },
        { title: 'Episode 10 - Pertempuran Memutuskan Nasib', thumb: 'https://i.ytimg.com/vi/QhQl9H9RlPc/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/QhQl9H9RlPc', page: '10.html' },
        { title: 'Episode 11 - Aliansi Badai Besar', thumb: 'https://i.ytimg.com/vi/AgOs5zAli0E/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/AgOs5zAli0E', page: '11.html' },
        { title: 'Episode 12 - Pengepungan Badai', thumb: 'https://i.ytimg.com/vi/PebLJymSvvU/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/PebLJymSvvU', page: '12.html' },
        { title: 'Episode 13 - Pertempuran Tempest', thumb: 'https://i.ytimg.com/vi/4VhKfsaExLg/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/4VhKfsaExLg', page: '13.html' },
        { title: 'Episode 14 - Ancaman Baru Muncul', thumb: 'https://i.ytimg.com/vi/-FF9jQHKwiI/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/-FF9jQHKwiI', page: '14.html' },
        { title: 'Episode 15 - Penguasa Badai', thumb: 'https://i.ytimg.com/vi/lEevvSAlpAA/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/lEevvSAlpAA', page: '15.html' }
    ],
    'Season 2': [
        { title: 'Episode 1 - ', thumb: '', videoUrl: '', page: 's2-1.html' },
        { title: 'Episode 2 - ', thumb: '', videoUrl: '', page: 's2-2.html' }
    ],
    'Season 3': [
        { title: 'Episode 1 - ', thumb: '', videoUrl: '', page: 's3-1.html' },
        { title: 'Episode 2 - ', thumb: '', videoUrl: '', page: 's3-2.html' }
    ]
};

function getCurrentEpisodeFromURL() {
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf('/') + 1);
    return file || '1.html'; // default to 1.html if no file found
}

function renderEpisodes(season) {
    const episodes = episodesData[season];
    episodeListContainer.innerHTML = '';
    const currentEpisode = getCurrentEpisodeFromURL();

    episodes.forEach((ep, index) => {
        const episodeItem = document.createElement('div');
        episodeItem.classList.add('episode-item');
        if (ep.page === currentEpisode) episodeItem.classList.add('active');

        episodeItem.innerHTML = `
            <a href="${ep.page}" class="episode-link">
                <img src="${ep.thumb}" alt="${ep.title}" class="episode-thumb" />
                <div class="episode-info">
                    <div class="episode-name">${ep.title}</div>
                </div>
            </a>
        `;
        episodeListContainer.appendChild(episodeItem);
    });
}

function loadCurrentEpisodeVideo() {
    const currentEpisode = getCurrentEpisodeFromURL();
    let found = false;
    for (const season in episodesData) {
        const episodes = episodesData[season];
        for (const ep of episodes) {
            if (ep.page === currentEpisode) {
                const videoPlayer = document.getElementById('video-player');
                const videoTitle = document.querySelector('.video-title');
                if (videoPlayer && videoTitle) {
                    videoPlayer.src = ep.videoUrl;
                    videoTitle.textContent = ep.title;
                }
                found = true;
                break;
            }
        }
        if (found) break;
    }
}

seasonBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        seasonBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderEpisodes(btn.textContent.trim());
    });
});

// Initialize
const currentEpisode = getCurrentEpisodeFromURL();
let currentSeason = 'Season 1';
for (const season in episodesData) {
    if (episodesData[season].some(ep => ep.page === currentEpisode)) {
        currentSeason = season;
        break;
    }
}
seasonBtns.forEach(b => b.classList.remove('active'));
const activeSeasonBtn = Array.from(seasonBtns).find(b => b.textContent.trim() === currentSeason);
if (activeSeasonBtn) activeSeasonBtn.classList.add('active');

renderEpisodes(currentSeason);
loadCurrentEpisodeVideo();
