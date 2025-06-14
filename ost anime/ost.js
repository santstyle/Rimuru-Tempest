        // Sample music data
        const musicData = [
            {
                title: "Storyteller",
                artist: "TRUE",
                duration: "4:31",
                thumbnail: "https://i.pinimg.com/736x/9b/5e/84/9b5e84e9e4d298d9085dc06696d11edb.jpg",
                audio: "https://www.dropbox.com/scl/fi/swtrjjwplt8dh7n79ghtb/TRUE-Storyteller-Music-Video-TV-2.mp3?rlkey=hhgtsqeroavlwcmwt1yjhrxmy&st=ufiy93p7&dl=0",
                rating: 5,
                featured: true,
                popular: true
            },
            {
                title: "Nameless Story",
                artist: "Takuma Terashima",
                duration: "4:07",
                thumbnail: "https://i.pinimg.com/736x/ac/f1/c9/acf1c92b618c43de04f99150bb5444d2.jpg",
                audio: "https://www.dropbox.com/scl/fi/8c9bnueoaeu3pk2lmlbc4/Takuma-Terashima-Nameless-Story-Music-Clip-That-Time-I-Got-Reincarnated-as-a-Slime-OP.mp3?rlkey=cuugq9amalzzqay7zqtitauei&st=240f5dhs&dl=0",
                rating: 4,
                featured: false,
                popular: true
            },
            {
                title: "Megurumono",
                artist: "Takuma Terashima",
                duration: "5:07",
                thumbnail: "https://i.pinimg.com/736x/ce/0e/bd/ce0ebd0865f5a96ba32900a4854a77f9.jpg",
                audio: "https://www.dropbox.com/scl/fi/r8mmi47bo57ords9z9el5/Takuma-Terashima-Megurumono-Music-Clip-That-Time-I-Got-Reincarnated-as-a-Slime-OP-Part2.mp3?rlkey=beh2hfd47c5tsyb7jzrthhi9o&st=e1347mcz&dl=0",
                rating: 4,
                featured: false,
                popular: true
            },
            {
                title: "Another colony",
                artist: "TRUE",
                duration: "4:07",
                thumbnail: "https://i.pinimg.com/736x/b0/d8/32/b0d8323e661a5859a6caedb55cd61c6f.jpg",
                audio: "https://www.dropbox.com/scl/fi/oop5r7tucqpwjcdwvtq7h/TRUEAnother-colonyMusic-VideoTV.mp3?rlkey=e1q4q98szpnw0t87kttasnrdu&st=rslzg88v&dl=0",
                rating: 4,
                featured: false,
                popular: true
            },
            {
                title: "Brand new diary",
                artist: "熊田茜音",
                duration: "4:11",
                thumbnail: "https://i.pinimg.com/736x/25/e7/ac/25e7acc682dcf760983538ea82ed4dc9.jpg",
                audio: "https://www.dropbox.com/scl/fi/ou9xmkdf98hhcelhdvd8l/Brand-new-diary-TV-Official-Music-Video.mp3?rlkey=1qoqtfly9rxftawyfa9vdvjyg&st=f4vsmadx&dl=0",
                rating: 4,
                featured: false,
                popular: true
            },
            {
                title: "Like Flames",
                artist: "MindaRyn",
                duration: "4:21",
                thumbnail: "https://i.pinimg.com/736x/22/8e/37/228e37f50986260386e20dac27997446.jpg",
                audio: "https://www.dropbox.com/scl/fi/ec2t452n0shwhjcn8wc76/MindaRyn-Like-Flames-That-Time-I-Got-Reincarnated-as-a-Slime-Opening-Theme-Song-Music-Video.mp3?rlkey=vvfnbgh2ncjzpvrqbryx88q0a&st=uzk2skwk&dl=0",
                rating: 5,
                featured: true,
                popular: true
            },
            {
                title: "Kamona Tempest",
                artist: "Miho Okasaki",
                duration: "3:49",
                thumbnail: "https://i.pinimg.com/736x/72/2e/4e/722e4ebf9e0014e5d59f3e075b9c6ffd.jpg",
                audio: "https://www.dropbox.com/scl/fi/6lmzahqdy2v682l6y2zh9/Tensura-Nikki_-Tensura-Ending-Season-1-Tensura-Nikki-CAST-Kamona-Tempest-Lirik-Terjemahan.mp3?rlkey=wbdmym8zk08ixx2sakse00137&st=thq5d25o&dl=0",
                rating: 4,
                featured: false,
                popular: true
            },
            {
                title: "Oyasumi Orange",
                artist: "Miho Okasaki",
                duration: "4:50",
                thumbnail: "https://i.pinimg.com/736x/6f/32/c8/6f32c8f1c546dca18104127165cd2a76.jpg",
                audio: "https://www.dropbox.com/scl/fi/i5xz481w0yf8n4jlc9iqd/MAD-ED2-CV..mp3?rlkey=c0xgymgsmqtnaxfsfbaa1a0b8&st=corsba0x&dl=0",
                rating: 4,
                featured: false,
                popular: true
            },
            {
                title: "STORYSEEKER",
                artist: "STEREO DIVE FOUNDATION",
                duration: "3:59",
                thumbnail: "https://i.pinimg.com/736x/4d/ee/00/4dee00ad2a72dafe7376914ab3e0b85c.jpg",
                audio: "https://www.dropbox.com/scl/fi/qfj7rganjmq3x0meyxchx/STORYSEEKERTV-2-STEREO-DIVE-FOUNDATION-Official-Video.mp3?rlkey=rc99k6pxnahpmp06z2prx6845&st=zlbh1eo5&dl=0",
                rating: 4,
                featured: false,
                popular: true
            },
            {
                title: "Reincarnate",
                artist: "Takuma Terashima",
                duration: "4:08",
                thumbnail: "https://i.pinimg.com/736x/3b/0d/14/3b0d1420a4555ad823735b3c99c41be5.jpg",
                audio: "https://www.dropbox.com/scl/fi/x11g2htl4rqdl7hmaq1ln/Takuma-Terashima-Reincarnate-Music-Clip-That-Time-I-Got-Reincarnated-As-a-Slime-ED.mp3?rlkey=z4l0rox5xlbsx5y3w38tv8v6x&st=js9mxnkz&dl=0",
                rating: 4,
                featured: false,
                popular: true
            },
            {
                title: "Little Soldier",
                artist: "Azusa Tadokoro",
                duration: "3:57",
                thumbnail: "https://i.pinimg.com/736x/7c/1a/5e/7c1a5ea7f050ae6d348b3fafcba758ca.jpg",
                audio: "https://www.dropbox.com/scl/fi/l0atj1dodl5yxfadlxho9/Music-Video.mp3?rlkey=exba1hkrelvd06vf94n4f3frp&st=r7rrhqx3&dl=0",
                rating: 4,
                featured: false,
                popular: true
            },
            {
                title: "Boku no Naka no Kimi e",
                artist: "TRUE",
                duration: "4:22",
                thumbnail: "https://i.pinimg.com/736x/a7/0a/c3/a70ac37e19a687e4eb272b126647440a.jpg",
                audio: "https://www.dropbox.com/scl/fi/6fmhxai74368vbpkw6lzv/Tensei-Shitara-Slime-Datta-Ken-ORIGINAL-OST-Boku-no-Naka-no-Kimi-e.mp3?rlkey=hznfyl61rnyeqsr51y8wuc3ww&st=tzpe6w49&dl=0",
                rating: 4,
                featured: false,
                popular: true
            },
            {
                title: "Reimei",
                artist: "TRUE",
                duration: "4:42",
                thumbnail: "https://i.pinimg.com/736x/dd/54/b9/dd54b95bc294e367cbbc995768c02160.jpg",
                audio: "https://www.dropbox.com/scl/fi/hd8ywkknyg0y6ovm4nax3/Reimei.mp3?rlkey=cypx1rlf73dw4zgrm2ecdzw5u&st=g5l5x2v9&dl=0",
                rating: 4,
                featured: false,
                popular: true
            },
            {
                title: "PEACEKEEPER",
                artist: "STEREO DIVE FOUNDATION",
                duration: "3:28",
                thumbnail: "https://i.pinimg.com/736x/a9/dc/64/a9dc6489ad7665f2fd25df679728be79.jpg",
                audio: "https://www.dropbox.com/scl/fi/jekqzxid0hll4c1jbm93v/PEACEKEEPER.mp3?rlkey=faq93jng27apokv2oo6zll1c5&st=vskwyucx&dl=0",
                rating: 5,
                featured: true,
                popular: true
            },
            {
                title: "Believer",
                artist: "Rin Kurusu",
                duration: "3:16",
                thumbnail: "https://i.pinimg.com/736x/67/a8/e2/67a8e2bd434e59837538d21136780368.jpg",
                audio: "https://www.dropbox.com/scl/fi/02rxf30ki7sbxoxnys1a9/Believer.mp3?rlkey=7vi79xmg2jdr433ani037oxqv&st=6ixcp76o&dl=0",
                rating: 4,
                featured: false,
                popular: true
            },
            {
                title: "Renacer Serenade",
                artist: "Momoiro Clover Z",
                duration: "4:12",
                thumbnail: "https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwAnW-0W7PGdzfDYmeUdjdDz35SBiKlUN2GBaqsDdJJuH",
                audio: "https://www.dropbox.com/scl/fi/iwx8sq8zev6hjs10uq6cq/Renacer-Serenade.mp3?rlkey=t8nkqeygwrhq87sre51akttaf&st=ih7qiiw1&dl=0",
                rating: 5,
                featured: true,
                popular: true
            },
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
        const playerThumbnail = document.getElementById('player-thumbnail');
        const playerSongTitle = document.getElementById('player-song-title');
        const playerSongArtist = document.getElementById('player-song-artist');
        const errorMessage = document.getElementById('error-message');

        // Player state 
        let currentSongIndex = 0;
        let isPlaying = false;
        let isShuffle = false;
        let isRepeat = false;
        let originalMusicData = [...musicData];
        let hoverPreviewEnabled = true;
        let userInteracted = false;

        // Show error message
        function showError(message) {
            errorMessage.textContent = message;
            errorMessage.classList.add('show');
            setTimeout(() => {
                errorMessage.classList.remove('show');
            }, 3000);
        }


async function isValidAudioSource(url) {
    // For external URLs, skip HEAD request due to CORS and streaming issues
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return true;
    }
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok && response.headers.get('content-type').includes('audio');
    } catch {
        return false;
    }
}

        // Initialize the page
        async function init() {
            loadPlayerState();
            createMusicCards();
            await loadSong(currentSongIndex);

            // Removed automatic playback to comply with browser policies
            // Only play if explicitly requested by user interaction
            if (sessionStorage.getItem('isPlaying') === 'true' && userInteracted) {
                playSong();
            }

            // Event listeners
            setupEventListeners();

            // Mark user interaction after first click/touch
            document.addEventListener('click', () => {
                userInteracted = true;
            }, { once: true });
            document.addEventListener('touchstart', () => {
                userInteracted = true;
            }, { once: true });
        }

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
                        <i></i>
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

            musicCard.addEventListener('click', async () => {
                const actualIndex = originalMusicData.findIndex(s => s.title === song.title);
                await loadSong(actualIndex);
                playSong();
                showNowPlaying();
            });

            musicCard.addEventListener('mouseenter', async () => {
                if (hoverPreviewEnabled && window.innerWidth > 768 && !isPlaying) {
                    const actualIndex = originalMusicData.findIndex(s => s.title === song.title);
                    if (actualIndex !== currentSongIndex) {
                        if (await isValidAudioSource(song.audio)) {
                            audioPlayer.src = song.audio;
                            audioPlayer.currentTime = 10;
                            audioPlayer.volume = 0.3;
                            audioPlayer.play().catch(() => {
                                // Silently handle preview playback errors
                            });
                            audioPlayer.addEventListener('ended', () => {
                                audioPlayer.currentTime = 10;
                                audioPlayer.play().catch(() => {});
                            }, { once: true });
                        }
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

        // Load song
        async function loadSong(index) {
            currentSongIndex = index;
            const song = originalMusicData[index];

            // Check if audio source is valid
            if (!(await isValidAudioSource(song.audio))) {
                showError(`Cannot load audio for "${song.title}". Please check the file path.`);
                return;
            }

            // Update active card
            document.querySelectorAll('.music-card').forEach(card => {
                card.classList.remove('active');
            });



            // Update audio player
            audioPlayer.src = song.audio;
            audioPlayer.volume = volumeSlider.value;

            // Update now playing info
            nowPlayingImg.src = song.thumbnail;
            nowPlayingTitle.textContent = song.title;
            nowPlayingArtist.textContent = song.artist;

            // Update player info
            playerThumbnail.src = song.thumbnail;
            playerSongTitle.textContent = song.title;
            playerSongArtist.textContent = song.artist;

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
            if (!userInteracted) {
                showError('Sabar sayang kalau belum bisa tolong tekan lagi yah.');
                return;
            }

            isPlaying = true;
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
            audioPlayer.play().catch(error => {
                isPlaying = false;
                playIcon.classList.remove('fa-pause');
                playIcon.classList.add('fa-play');
                showError('Playback failed. Please check the audio file or try another song.');
                console.error('Playback failed:', error);
            });
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
        async function nextSong() {
            if (isShuffle) {
                let newIndex;
                do {
                    newIndex = Math.floor(Math.random() * originalMusicData.length);
                } while (newIndex === currentSongIndex && originalMusicData.length > 1);
                currentSongIndex = newIndex;
            } else {
                currentSongIndex = (currentSongIndex + 1) % originalMusicData.length;
            }
            await loadSong(currentSongIndex);
            if (isPlaying) {
                playSong();
            }
        }

        // Play previous song
        async function prevSong() {
            if (isShuffle) {
                let newIndex;
                do {
                    newIndex = Math.floor(Math.random() * originalMusicData.length);
                } while (newIndex === currentSongIndex && originalMusicData.length > 1);
                currentSongIndex = newIndex;
            } else {
                currentSongIndex = (currentSongIndex - 1 + originalMusicData.length) % originalMusicData.length;
            }
            await loadSong(currentSongIndex);
            if (isPlaying) {
                playSong();
            }
        }

        // Toggle shuffle
        function toggleShuffle() {
            isShuffle = !isShuffle;
            shuffleBtn.classList.toggle('active', isShuffle);
            savePlayerState();
        }

        // Toggle repeat
        function toggleRepeat() {
            isRepeat = !isRepeat;
            repeatBtn.classList.toggle('active', isRepeat);
            savePlayerState();
        }

        // Update progress bar
        function updateProgress(e) {
            const { duration, currentTime } = e.srcElement;
            const progressPercent = duration ? (currentTime / duration) * 100 : 0;
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
            if (currentTime % 5 < 0.1) {
                savePlayerState();
            }
        }

        // Set progress bar
        function setProgress(e) {
            const width = this.clientWidth;
            const clickX = e.offsetX;
            const duration = audioPlayer.duration;
            audioPlayer.currentTime = duration ? (clickX / width) * duration : 0;
        }

        // Setup event listeners
        function setupEventListeners() {
            // Player controls
            audioPlayer.addEventListener('timeupdate', updateProgress);
            audioPlayer.addEventListener('ended', () => {
                if (isRepeat) {
                    audioPlayer.currentTime = 0;
                    audioPlayer.play().catch(error => {
                        showError('Playback failed after repeat.');
                        console.error('Playback failed:', error);
                    });
                } else {
                    nextSong();
                }
            });

            audioPlayer.addEventListener('error', () => {
                showError('Error loading audio. Please try another song.');
                isPlaying = false;
                playIcon.classList.remove('fa-pause');
                playIcon.classList.add('fa-play');
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

            // Now playing controls
            closeNowPlaying.addEventListener('click', hideNowPlaying);

            // Keyboard shortcuts
            document.addEventListener('keydown', (e) => {
                switch(e.code) {
                    case 'Space':
                        e.preventDefault();
                        isPlaying ? pauseSong() : playSong();
                        break;
                    case 'ArrowRight':
                        nextSong();
                        break;
                    case 'ArrowLeft':
                        prevSong();
                        break;
                    case 'ArrowUp':
                        audioPlayer.volume = Math.min(1, audioPlayer.volume + 0.1);
                        volumeSlider.value = audioPlayer.volume;
                        savePlayerState();
                        break;
                    case 'ArrowDown':
                        audioPlayer.volume = Math.max(0, audioPlayer.volume - 0.1);
                        volumeSlider.value = audioPlayer.volume;
                        savePlayerState();
                        break;
                    case 'KeyR':
                        toggleRepeat();
                        break;
                    case 'KeyS':
                        toggleShuffle();
                        break;
                }
            });

            // Mobile touch events for progress bar
            let isDragging = false;

            progressContainer.addEventListener('touchstart', (e) => {
                isDragging = true;
                const touch = e.touches[0];
                const rect = progressContainer.getBoundingClientRect();
                const clickX = touch.clientX - rect.left;
                const width = rect.width;
                const duration = audioPlayer.duration;
                audioPlayer.currentTime = duration ? (clickX / width) * duration : 0;
            });

            progressContainer.addEventListener('touchmove', (e) => {
                if (isDragging) {
                    const touch = e.touches[0];
                    const rect = progressContainer.getBoundingClientRect();
                    const clickX = touch.clientX - rect.left;
                    const width = rect.width;
                    const duration = audioPlayer.duration;
                    audioPlayer.currentTime = duration ? (clickX / width) * duration : 0;
                }
            });

            progressContainer.addEventListener('touchend', () => {
                isDragging = false;
            });

            // Save state when leaving page
            window.addEventListener('beforeunload', savePlayerState);
        }

        // Load navigation
        async function loadNavigation() {
            try {
                const response = await fetch('/navigation.html');
                if (!response.ok) throw new Error('Network response was not ok');
                const navHTML = await response.text();
                document.querySelector('.main-nav-container').innerHTML = navHTML;

                // Initialize navigation if function exists
                if (typeof initNavigation === 'function') {
                    initNavigation();
                }

            } catch (error) {
                console.error('Error loading navigation:', error);
            }
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            loadNavigation();
            init();
        });