document.addEventListener('DOMContentLoaded', function() {

    const videoCards = document.querySelectorAll('.video-card');
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const closeModal = document.querySelector('.close-modal');

    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video');
            videoFrame.src = videoUrl;
            videoModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', function() {
        videoModal.style.display = 'none';
        videoFrame.src = '';
        document.body.style.overflow = 'auto'; 
    });
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            videoFrame.src = ''; 
            document.body.style.overflow = 'auto'; 
        }
    });
});