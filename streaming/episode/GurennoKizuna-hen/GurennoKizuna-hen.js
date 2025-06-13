

// Season selector functionality
const seasonBtns = document.querySelectorAll('.season-btn');
const episodeListContainer = document.querySelector('.episode-list');
// Episode List Data
const episodesData = {
    'Episode': [
        { title: 'Tensei Shitara Slime Datta Ken Movie: Guren no Kizuna-hen', thumb: 'https://i.ytimg.com/vi/H_QHm39_tJQ/hq720.jpg', videoUrl: 'https://www.youtube.com/embed/H_QHm39_tJQ?si=gZWrhzDNdB9o_gI-', page: 'GurennoKizuna-hen.html' }
    ],
};
function getCurrentEpisodeFromURL() {
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf('/') + 1);
    return file || 'GurennoKizuna-hen.html';
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
        'GurennoKizuna-hen.html': 'https://www.youtube.com/embed/H_QHm39_tJQ?si=gZWrhzDNdB9o_gI-',
    },
    server2: {
        'GurennoKizuna-hen.html': '/streaming/server2n.html',
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
