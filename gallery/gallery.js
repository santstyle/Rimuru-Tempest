// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Search Toggle
const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search-container');

searchBtn.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
});

// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change icon
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});



galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const data = imageData[id];

        modalImage.src = data.src;
        modalArtistAvatar.src = data.artistAvatar;
        modalArtistName.textContent = data.artistName;
        modalWorkTitle.textContent = data.title;
        modalLikeCount.textContent = `${data.likes} likes`;

        // Check if already liked
        const likeBtn = item.querySelector('.like-btn');
        if (likeBtn.querySelector('i').classList.contains('fas')) {
            modalLikeBtn.innerHTML = '<i class="fas fa-heart"></i><span>Liked</span>';
            modalLikeBtn.classList.add('active');
        } else {
            modalLikeBtn.innerHTML = '<i class="far fa-heart"></i><span>Like</span>';
            modalLikeBtn.classList.remove('active');
        }

        imageModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close Modal
closeModal.addEventListener('click', () => {
    imageModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Like Button in Modal
modalLikeBtn.addEventListener('click', () => {
    const isActive = modalLikeBtn.classList.contains('active');
    const likeCount = parseInt(modalLikeCount.textContent);

    if (isActive) {
        modalLikeBtn.innerHTML = '<i class="far fa-heart"></i><span>Like</span>';
        modalLikeBtn.classList.remove('active');
        modalLikeCount.textContent = `${likeCount - 1} likes`;
    } else {
        modalLikeBtn.innerHTML = '<i class="fas fa-heart"></i><span>Liked</span>';
        modalLikeBtn.classList.add('active');
        modalLikeCount.textContent = `${likeCount + 1} likes`;
    }
});

// Like Button in Gallery
const likeBtns = document.querySelectorAll('.like-btn');

likeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const icon = btn.querySelector('i');
        const countSpan = btn.querySelector('.like-count');
        let count = parseInt(countSpan.textContent);

        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            countSpan.textContent = count + 1;
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            countSpan.textContent = count - 1;
        }
    });
});

// Submit Work Button
const submitWorkBtn = document.getElementById('submit-work-btn');

submitWorkBtn.addEventListener('click', () => {
    alert('Submission form would open here! In a real implementation, this would show a form to upload artwork or cosplay photos.');
});

// Prevent download buttons from triggering gallery item click
const downloadBtns = document.querySelectorAll('.download-btn');

downloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        alert('Download would start here! In a real implementation, this would trigger a file download.');
    });
});