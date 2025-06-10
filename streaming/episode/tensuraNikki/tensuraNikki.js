// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Season selector functionality
const seasonBtns = document.querySelectorAll('.season-btn');
const episodeListContainer = document.querySelector('.episode-list');

// Episode List Data
const episodesData = {
    'Season 1': [
        { title: 'Episode 1 – “Hari-Hari Tenang di Tempest”', thumb: '', videoUrl: '', page: 'tensuranikki1.html' },
        { title: 'Episode 2 – “Musim Semi, Musim Sibuk”', thumb: '', videoUrl: '', page: 'tensuranikki2.html' },
        { title: 'Episode 3 – “Panen Bahagia”', thumb: '', videoUrl: '', page: 'tensuranikki3.html' },
        { title: 'Episode 4 – “Petualangan Masak-Memasak”', thumb: '', videoUrl: '', page: 'tensuranikki4.html' },
        { title: 'Episode 5 – “Persahabatan di Tengah Festival”', thumb: '', videoUrl: '', page: 'tensuranikki5.html' },
        { title: 'Episode 6 – “Momen Santai Bersama Rimuru”', thumb: '', videoUrl: '', page: 'tensuranikki6.html' },
        { title: 'Episode 7 – “Hari Hujan dan Rahasia Ramiris”', thumb: '', videoUrl: '', page: 'tensuranikki7.html' },
        { title: 'Episode 8 – “Persiapan Musim Panas”', thumb: '', videoUrl: '', page: 'tensuranikki8.html' },
        { title: 'Episode 9 – “Petualangan Ramiris dan Veldora”', thumb: '', videoUrl: '', page: 'tensuranikki9.html' },
        { title: 'Episode 10 – “Musim Gugur yang Sibuk”', thumb: '', videoUrl: '', page: '1tensuranikki10.html' },
        { title: 'Episode 11 – “Kejutan Musim Dingin”', thumb: '', videoUrl: '', page: 'tensuranikki11.html' },
        { title: 'Episode 12 – “Hari Baru, Harapan Baru”i', thumb: '', videoUrl: '', page: 'tensuranikki12.html' },
    ]
};

function getCurrentEpisodeFromURL() {
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf('/') + 1);
    return file || '1.html';
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

// Server Switching 
const serverBtns = document.querySelectorAll('.server-btn');
const videoPlayer = document.getElementById('video-player');
const serverStatus = document.querySelector('.server-status');
const statusIndicator = document.querySelector('.status-indicator');

// server sources 
const serverSources = {
    server1: {
        'tensuranikki1.html': '/streaming/server2n.html',
        'tensuranikki2.html': '/streaming/server2n.html',
        'tensuranikki3.html': '/streaming/server2n.html',
        'tensuranikki4.html': '/streaming/server2n.html',
        'tensuranikki5.html': '/streaming/server2n.html',
        'tensuranikki6.htmll': '/streaming/server2n.html',
        'tensuranikki7.html': '/streaming/server2n.html',
        'tensuranikki8.html': '/streaming/server2n.html',
        'tensuranikki9.html': '/streaming/server2n.html',
        'tensuranikki10.html': '/streaming/server2n.html',
        'tensuranikki11.html': '/streaming/server2n.html',
        'tensuranikki12.html': '/streaming/server2n.html',
    },
    server2: {
    'tensuranikki1.html': '/streaming/server2n.html',
    'tensuranikki2.html': '/streaming/server2n.html',
    'tensuranikki3.html': '/streaming/server2n.html',
    'tensuranikki4.html': '/streaming/server2n.html',
    'tensuranikki5.html': '/streaming/server2n.html',
    'tensuranikki6.html': '/streaming/server2n.html',
    'tensuranikki7.html': '/streaming/server2n.html',
    'tensuranikki8.html': '/streaming/server2n.html',
    'tensuranikki9.html': '/streaming/server2n.html',
    'tensuranikki10.html': '/streaming/server2n.html',
    'tensuranikki11.html': '/streaming/server2n.html',
    'tensuranikki12.html': '/streaming/server2n.html',
    }
};

let currentServer = 'server1';

serverBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const server = btn.dataset.server;

        if (serverSources[server]) {
            serverBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentServer = server;

            const currentEpisode = getCurrentEpisodeFromURL();
            const newSrc = serverSources[server][currentEpisode] || '';

            if (newSrc) {
                videoPlayer.src = newSrc;
                serverStatus.querySelector('span:last-child').textContent = `Server aktif: ${btn.textContent.trim()}`;
                statusIndicator.classList.remove('error');
            } else {
                statusIndicator.classList.add('error');
                serverStatus.querySelector('span:last-child').textContent = 'Server sedang gangguan';
            }
        }
    });
});

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

// Load video for current episode and server
const initialSrc = serverSources[currentServer][currentEpisode] || '';
if (initialSrc) {
    videoPlayer.src = initialSrc;
}
loadCurrentEpisodeVideo();

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
