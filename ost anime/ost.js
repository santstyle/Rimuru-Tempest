// Sample music data
const musicData = [
    {
        title: "Storyteller",
        artist: "TRUE",
        duration: "4:31",
        thumbnail: "https://i.pinimg.com/736x/9b/5e/84/9b5e84e9e4d298d9085dc06696d11edb.jpg",
        audio: "/asset/Ost/【TRUE】「Storyteller」Music Video（TVアニメ『転生したらスライムだった件 第2期』オープニング主題歌）.mp3",
        rating: 5,
        featured: true,
        popular: true
    },
    {
        title: "Nameless Story",
        artist: "Takuma Terashima",
        duration: "4:07",
        thumbnail: "https://i.pinimg.com/736x/ac/f1/c9/acf1c92b618c43de04f99150bb5444d2.jpg",
        audio: "/asset/Ost/Takuma Terashima  Nameless Story Music Clip (That Time I Got Reincarnated as a Slime OP).mp3",
        rating: 4,
        featured: true,
        popular: true
    },
    {
        title: "Megurumono",
        artist: "Takuma Terashima",
        duration: "5:07",
        thumbnail: "https://i.pinimg.com/736x/ce/0e/bd/ce0ebd0865f5a96ba32900a4854a77f9.jpg",
        audio: "/asset/Ost/Takuma Terashima  Megurumono Music Clip (That Time I Got Reincarnated as a Slime OP Part2).mp3",
        rating: 4,
        featured: true,
        popular: false
    },
    {
        title: "Another colony",
        artist: "TRUE",
        duration: "4:07",
        thumbnail: "https://i.pinimg.com/736x/b0/d8/32/b0d8323e661a5859a6caedb55cd61c6f.jpg",
        audio: "/asset/Ost/TRUEAnother colonyMusic VideoTVアニメ転生したらスライムだった件エンディング主題歌.mp3",
        rating: 4,
        featured: false,
        popular: true
    },
    {
        title: "Brand new diary",
        artist: "熊田茜音",
        duration: "4:11",
        thumbnail: "https://i.pinimg.com/736x/25/e7/ac/25e7acc682dcf760983538ea82ed4dc9.jpg",
        audio: "/asset/Ost/Brand new diary (TVアニメ転生したらスライムだった件 転スラ日記オープニング主題歌)  熊田茜音Official Music Video].mp3",
        rating: 4,
        featured: true,
        popular: false
    },
    {
        title: "Like Flames",
        artist: "MindaRyn",
        duration: "4:21",
        thumbnail: "https://i.pinimg.com/736x/22/8e/37/228e37f50986260386e20dac27997446.jpg",
        audio: "/asset/Ost/MindaRyn - Like Flames (That Time I Got Reincarnated as a Slime Opening Theme Song)  Music Video.mp3",
        rating: 5,
        featured: true,
        popular: true
    },
    {
        title: "Kamona Tempest",
        artist: "Miho Okasaki",
        duration: "3:49",
        thumbnail: "https://i.pinimg.com/736x/72/2e/4e/722e4ebf9e0014e5d59f3e075b9c6ffd.jpg",
        audio: "/asset/Ost/Tensura Nikki_ Tensura Ending Season 1 [Tensura Nikki CAST - Kamona Tempest] Lirik & Terjemahan.mp3",
        rating: 4,
        featured: false,
        popular: true
    },
    {
        title: "Oyasumi Orange",
        artist: "Miho Okasaki",
        duration: "4:50",
        thumbnail: "https://i.pinimg.com/736x/6f/32/c8/6f32c8f1c546dca18104127165cd2a76.jpg",
        audio: "/asset/Ost/MAD轉生史萊姆日記 ED2おやすみオレンジ利姆露 (CV.岡咲美保)完整版.mp3",
        rating: 4,
        featured: false,
        popular: false
    },
    {
        title: "STORYSEEKER",
        artist: "STEREO DIVE FOUNDATION",
        duration: "3:59",
        thumbnail: "https://i.pinimg.com/736x/4d/ee/00/4dee00ad2a72dafe7376914ab3e0b85c.jpg",
        audio: "/asset/Ost/STORYSEEKERTVアニメ転生したらスライムだった件 第2期エンディング主題歌- STEREO DIVE FOUNDATION - [Official Video].mp3",
        rating: 4,
        featured: true,
        popular: true
    },
    {
        title: "Reincarnate",
        artist: "Takuma Terashima",
        duration: "4:08",
        thumbnail: "https://i.pinimg.com/736x/3b/0d/14/3b0d1420a4555ad823735b3c99c41be5.jpg",
        audio: "/asset/Ost/Takuma Terashima   Reincarnate Music Clip (That Time I Got Reincarnated As a Slime ED).mp3",
        rating: 4,
        featured: false,
        popular: false
    },
    {
        title: "Little Soldier",
        artist: "Azusa Tadokoro",
        duration: "3:57",
        thumbnail: "https://i.pinimg.com/736x/7c/1a/5e/7c1a5ea7f050ae6d348b3fafcba758ca.jpg",
        audio: "/asset/Ost/田所あずさ  リトルソルジャー -Music Video-.mp3",
        rating: 4,
        featured: false,
        popular: true
    }
];

// DOM elements
const musicGrid = document.getElementById('music-grid');
const popularGrid = document.getElementById('popular-grid');
const audioPlayer = document.getElementById('audio-player');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const playIcon = document.getElementById('play-icon');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const nowPlaying = document.getElementById('now-playing');
const nowPlayingImg = document.getElementById('now-playing-img');
const nowPlayingTitle = document.getElementById('now-playing-title');
const nowPlayingArtist = document.getElementById('now-playing-artist');
const closeNowPlaying = document.getElementById('close-now-playing');
const volumeDownBtn = document.getElementById('volume-down-btn');
const volumeUpBtn = document.getElementById('volume-up-btn');
const volumeSlider = document.getElementById('volume-slider');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const sidebar = document.querySelector('.sidebar');

// Player state
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let originalMusicData = [...musicData];
let filteredMusicData = [...musicData];
let hoverPreviewEnabled = true;

// Initialize the page
function init() {
    // Load player state from sessionStorage if available
    loadPlayerState();
    
    createMusicCards();
    createVisualizerBars();
    loadSong(currentSongIndex);
    
    // If music was playing when page was left, continue playing
    if (sessionStorage.getItem('isPlaying') === 'true') {
        playSong();
    }
    
    // Event listeners
    setupEventListeners();
}

// Load player state from sessionStorage
function loadPlayerState() {
    const savedIndex = sessionStorage.getItem('currentSongIndex');
    const savedIsPlaying = sessionStorage.getItem('isPlaying');
    const savedCurrentTime = sessionStorage.getItem('currentTime');
    const savedVolume = sessionStorage.getItem('volume');
    
    if (savedIndex !== null) {
        currentSongIndex = parseInt(savedIndex);
    }
    
    if (savedCurrentTime !== null) {
        audioPlayer.currentTime = parseFloat(savedCurrentTime);
    }
    
    if (savedVolume !== null) {
        audioPlayer.volume = parseFloat(savedVolume);
        volumeSlider.value = audioPlayer.volume;
    }
}

// Save player state to sessionStorage
function savePlayerState() {
    sessionStorage.setItem('currentSongIndex', currentSongIndex);
    sessionStorage.setItem('isPlaying', isPlaying);
    sessionStorage.setItem('currentTime', audioPlayer.currentTime);
    sessionStorage.setItem('volume', audioPlayer.volume);
}

// Create music cards
function createMusicCards() {
    musicGrid.innerHTML = '';
    popularGrid.innerHTML = '';
    
    // Featured tracks
    const featuredTracks = originalMusicData.filter(song => song.featured);
    featuredTracks.forEach((song, index) => {
        createMusicCard(song, index, musicGrid);
    });
    
    // Popular tracks
    const popularTracks = originalMusicData.filter(song => song.popular);
    popularTracks.forEach((song, index) => {
        createMusicCard(song, index, popularGrid);
    });
}

// Create individual music card
function createMusicCard(song, index, container) {
    const musicCard = document.createElement('div');
    musicCard.className = 'music-card';
    musicCard.dataset.index = index;
    
    // Create rating stars
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < song.rating) {
            stars += '<i class="fas fa-star star"></i>';
        } else {
            stars += '<i class="far fa-star star"></i>';
        }
    }
    
    musicCard.innerHTML = `
        <div class="thumbnail">
            <img src="${song.thumbnail}" alt="${song.title}">
            <div class="play-overlay">
                <i class="fas fa-play"></i>
            </div>
        </div>
        <div class="music-info">
            <div class="music-title">${song.title}</div>
            <div class="music-artist">${song.artist}</div>
            <div class="music-duration">
                <i class="far fa-clock"></i> ${song.duration}
            </div>
            <div class="rating">${stars}</div>
        </div>
    `;
    
    musicCard.addEventListener('click', () => {
        const actualIndex = originalMusicData.findIndex(s => s.title === song.title);
        loadSong(actualIndex);
        playSong();
        showNowPlaying();
    });
    
    musicCard.addEventListener('mouseenter', () => {
        // Only preview if hover preview is enabled and not currently playing
        if (hoverPreviewEnabled && window.innerWidth > 768 && !isPlaying) {
            const actualIndex = originalMusicData.findIndex(s => s.title === song.title);
            if (actualIndex !== currentSongIndex) {
                audioPlayer.src = song.audio;
                audioPlayer.currentTime = 10; // Preview starts at 10 seconds
                audioPlayer.play();
                audioPlayer.volume = 0.3;
                audioPlayer.addEventListener('ended', () => {
                    audioPlayer.currentTime = 10;
                    audioPlayer.play();
                }, { once: true });
            }
        }
    });
    
    musicCard.addEventListener('mouseleave', () => {
        if (hoverPreviewEnabled && window.innerWidth > 768 && !isPlaying) {
            const actualIndex = originalMusicData.findIndex(s => s.title === song.title);
            if (actualIndex !== currentSongIndex) {
                audioPlayer.pause();
                audioPlayer.currentTime = 0;
            }
        }
    });
    
    container.appendChild(musicCard);
}

// Create visualizer bars
function createVisualizerBars() {
    const visualizer = document.querySelector('.visualizer-bars');
    if (!visualizer) return;
    
    visualizer.innerHTML = '';
    
    for (let i = 0; i < 40; i++) {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${Math.random() * 30 + 10}px`;
        visualizer.appendChild(bar);
    }
}

// Load song
function loadSong(index) {
    currentSongIndex = index;
    const song = originalMusicData[index];
    
    // Update active card
    document.querySelectorAll('.music-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Find and activate the card in both grids
    const allCards = document.querySelectorAll('.music-card');
    allCards.forEach(card => {
        const cardTitle = card.querySelector('.music-title').textContent;
        if (cardTitle === song.title) {
            card.classList.add('active');
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
    
    // Update audio player
    audioPlayer.src = song.audio;
    audioPlayer.volume = volumeSlider.value;
    
    // Update now playing info
    nowPlayingImg.src = song.thumbnail;
    nowPlayingTitle.textContent = song.title;
    nowPlayingArtist.textContent = song.artist;
    
    // Update duration display
    audioPlayer.addEventListener('loadedmetadata', () => {
        const duration = audioPlayer.duration;
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
        }
        
        if (duration) {
            durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
        }
    }, { once: true });
    
    // Disable hover preview while playing
    hoverPreviewEnabled = false;
    
    // Save state
    savePlayerState();
}

// Play song
function playSong() {
    isPlaying = true;
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
    audioPlayer.play();
    showNowPlaying();
    
    // Disable hover preview while playing
    hoverPreviewEnabled = false;
    
    // Save state
    savePlayerState();
}

// Pause song
function pauseSong() {
    isPlaying = false;
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    audioPlayer.pause();
    
    // Enable hover preview when not playing
    hoverPreviewEnabled = true;
    
    // Save state
    savePlayerState();
}

// Show now playing info
function showNowPlaying() {
    nowPlaying.classList.add('show');
}

// Hide now playing info
function hideNowPlaying() {
    nowPlaying.classList.remove('show');
}

// Play next song
function nextSong() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * originalMusicData.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % originalMusicData.length;
    }
    loadSong(currentSongIndex);
    if (isPlaying) {
        playSong();
    }
}

// Play previous song
function prevSong() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * originalMusicData.length);
    } else {
        currentSongIndex = (currentSongIndex - 1 + originalMusicData.length) % originalMusicData.length;
    }
    loadSong(currentSongIndex);
    if (isPlaying) {
        playSong();
    }
}

// Toggle shuffle
function toggleShuffle() {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active', isShuffle);
}

// Toggle repeat
function toggleRepeat() {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle('active', isRepeat);
}

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    
    // Update time display
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`;
    }
    
    if (duration) {
        durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    
    // Save current time periodically
    if (currentTime % 5 < 0.1) { // Save every ~5 seconds
        savePlayerState();
    }
}

// Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickX / width) * duration;
}

// Animate visualizer
function animateVisualizer() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const newHeight = Math.random() * 60 + 10;
        bar.style.height = `${newHeight}px`;
        bar.style.opacity = Math.random() * 0.5 + 0.5;
    });
}

// Setup event listeners
function setupEventListeners() {
    // Player controls
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('ended', () => {
        if (isRepeat) {
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } else {
            nextSong();
        }
    });
    
    progressContainer.addEventListener('click', setProgress);
    
    playBtn.addEventListener('click', () => {
        isPlaying ? pauseSong() : playSong();
    });
    
    nextBtn.addEventListener('click', nextSong);
    prevBtn.addEventListener('click', prevSong);
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);
    
    // Volume controls
    volumeDownBtn.addEventListener('click', () => {
        audioPlayer.volume = Math.max(0, audioPlayer.volume - 0.1);
        volumeSlider.value = audioPlayer.volume;
        savePlayerState();
    });
    
    volumeUpBtn.addEventListener('click', () => {
        audioPlayer.volume = Math.min(1, audioPlayer.volume + 0.1);
        volumeSlider.value = audioPlayer.volume;
        savePlayerState();
    });
    
    volumeSlider.addEventListener('input', () => {
        audioPlayer.volume = volumeSlider.value;
        savePlayerState();
    });
    
    // Show volume slider on hover
    volumeSlider.style.opacity = '1'; // Always show now
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            e.target !== mobileMenuToggle) {
            sidebar.classList.remove('expanded');
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            isPlaying ? pauseSong() : playSong();
        } else if (e.code === 'ArrowRight') {
            nextSong();
        } else if (e.code === 'ArrowLeft') {
            prevSong();
        } else if (e.code === 'ArrowUp') {
            // Volume up
            audioPlayer.volume = Math.min(1, audioPlayer.volume + 0.1);
            volumeSlider.value = audioPlayer.volume;
            savePlayerState();
        } else if (e.code === 'ArrowDown') {
            // Volume down
            audioPlayer.volume = Math.max(0, audioPlayer.volume - 0.1);
            volumeSlider.value = audioPlayer.volume;
            savePlayerState();
        }
    });
    
    // Now playing controls
    closeNowPlaying.addEventListener('click', hideNowPlaying);
    
    // Mobile touch events for progress bar
    let isDragging = false;
    
    progressContainer.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        const rect = progressContainer.getBoundingClientRect();
        const clickX = touch.clientX - rect.left;
        const width = rect.width;
        const duration = audioPlayer.duration;
        audioPlayer.currentTime = (clickX / width) * duration;
    });
    
    progressContainer.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            const rect = progressContainer.getBoundingClientRect();
            const clickX = touch.clientX - rect.left;
            const width = rect.width;
            const duration = audioPlayer.duration;
            audioPlayer.currentTime = (clickX / width) * duration;
        }
    });
    
    progressContainer.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    // Handle mobile viewport resize
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('.sidebar').style.width = '100%';
        } else {
            document.querySelector('.sidebar').style.width = '80px';
        }
    });
    
    // Save state when leaving page
    window.addEventListener('beforeunload', savePlayerState);
}

// Animate visualizer
let visualizerInterval = setInterval(animateVisualizer, 100);

// Initialize the page
init();