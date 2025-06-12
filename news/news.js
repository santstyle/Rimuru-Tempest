document.addEventListener('DOMContentLoaded', function() {
    // Pilih semua video card
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        const thumbnail = card.querySelector('.video-thumbnail');
        const playButton = card.querySelector('.play-button');
        
        // Tambahkan event listener
        [thumbnail, playButton].forEach(element => {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Dapatkan info video (gunakan data attributes untuk URL sebenarnya)
                const videoSrc = card.dataset.video || "https://www.youtube.com/embed/Xf73IT2cnGE";
                const videoTitle = card.querySelector('.video-info h3').textContent;
                
                // Sembunyikan konten utama
                document.body.style.overflow = 'hidden';
                const mainContent = document.querySelector('main');
                if (mainContent) mainContent.style.display = 'none';
                
                // Buat container video fullscreen
                const videoFullscreen = document.createElement('div');
                videoFullscreen.className = 'video-fullscreen';
                
                // Buat iframe untuk video YouTube
                const iframe = document.createElement('iframe');
                iframe.src = videoSrc + "?autoplay=1";
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;
                iframe.className = 'fullscreen-video';
                
                // Buat header video
                const videoHeader = document.createElement('div');
                videoHeader.className = 'video-header';
                
                const backButton = document.createElement('button');
                backButton.className = 'back-button';
                backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Kembali';
                
                const titleElement = document.createElement('h2');
                titleElement.className = 'video-fullscreen-title';
                titleElement.textContent = videoTitle;
                
                videoHeader.appendChild(backButton);
                videoHeader.appendChild(titleElement);
                
                // Susun elemen
                videoFullscreen.appendChild(videoHeader);
                videoFullscreen.appendChild(iframe);
                document.body.appendChild(videoFullscreen);
                
                // Event listener untuk tombol kembali
                backButton.addEventListener('click', function() {
                    videoFullscreen.remove();
                    document.body.style.overflow = '';
                    if (mainContent) mainContent.style.display = '';
                });
                
                // Event listener untuk tombol escape
                document.addEventListener('keydown', function closeOnEscape(e) {
                    if (e.key === 'Escape') {
                        videoFullscreen.remove();
                        document.body.style.overflow = '';
                        if (mainContent) mainContent.style.display = '';
                        document.removeEventListener('keydown', closeOnEscape);
                    }
                });
            });
        });
    });
});