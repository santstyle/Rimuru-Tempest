// Gallery Image Click
const galleryItems = document.querySelectorAll('.gallery-item');
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalArtistAvatar = document.getElementById('modal-artist-avatar');
const modalArtistName = document.getElementById('modal-artist-name');
const modalWorkTitle = document.getElementById('modal-work-title');
const modalLikeCount = document.getElementById('modal-like-count');
const modalLikeBtn = document.getElementById('modal-like-btn');
const closeModal = document.getElementById('close-modal');
const modalWorkDescription = document.getElementById('modal-work-description');

const imageData = {
    1: {
        src: 'https://i.pinimg.com/736x/e8/e0/ea/e8e0ea742995275bf3dfea7ad0faa7d0.jpg',
        artistAvatar: 'https://i.pinimg.com/736x/a6/98/d0/a698d0785a66b287597a05b72822ca77.jpg',
        artistName: '#anhnguyen',
        title: 'Rimuru',
        likes: 248,
        description: 'Fanart Rimuru dengan gaya yang unik dan penuh warna, menampilkan karakter utama dalam pose yang dinamis.'
    },
    2: {
        src: 'https://i.pinimg.com/736x/b2/65/00/b26500197b857664a62ff329d7c3b91a.jpg',
        artistAvatar: 'https://i.pinimg.com/736x/f3/8d/1f/f38d1f5376425be629a5501da37bad48.jpg',
        artistName: 'Rimuru Tempest',
        title: 'Rimuru Tempest',
        likes: 187,
        description: 'Ilustrasi resmi Rimuru Tempest dengan detail yang mengagumkan dari seri Tensei Shitara Slime Datta Ken.'
    },
    3: {
        src: 'https://i.pinimg.com/736x/96/b4/4d/96b44d83371bc13bdbfea5f86e7f86fa.jpg',
        artistAvatar: 'https://i.pinimg.com/736x/f3/63/9a/f3639a4cdac46089a8cac00d15841b6f.jpg',
        artistName: '✨ Black Rose✨',
        title: 'Rimuru & Ciel',
        likes: 312,
        description: 'Fanart manis yang menampilkan Rimuru bersama Ciel dalam gaya chibi yang menggemaskan.'
    },
    4: {
        src: 'https://i.pinimg.com/736x/f6/77/16/f6771629686c040abe9b8020e59e8713.jpg',
        artistAvatar: 'https://i.pinimg.com/736x/62/b8/a7/62b8a79633df6e29d75a31fb06f4f874.jpg',
        artistName: 'Daynylu',
        title: 'Rimuru Tempest',
        likes: 156,
        description: 'Karya seni digital yang menampilkan Rimuru dalam bentuk manusia dengan detail yang indah.'
    },
    5: {
        src: 'https://i.pinimg.com/736x/4f/d9/86/4fd986002c31c092bff3c2d96addf77c.jpg',
        artistAvatar: 'https://i.pinimg.com/736x/06/0a/a4/060aa457041e5cf4b1aa25c32f157d9d.jpg',
        artistName: 'Rei',
        title: 'Rimuru Tempest',
        likes: 98,
        description: 'Ilustrasi Rimuru dengan gaya semi-realistik yang menakjubkan.'
    },
    6: {
        src: 'https://cdn.suruga-ya.com/database/pics_webp/game/605020240.jpg.webp',
        artistAvatar: 'https://i.pinimg.com/736x/eb/20/35/eb2035d0057ae72e447d2c6c466104d5.jpg',
        artistName: 'Rimuru.x.Ciel',
        title: 'Rimuru',
        likes: 276,
        description: 'Karya seni resmi dari merchandise yang menampilkan Rimuru dalam pose yang elegan.'
    },
    7: {
        src: 'https://i.pinimg.com/736x/cd/0f/ee/cd0fee32068849f5f1dd8db03116f667.jpg',
        artistAvatar: 'https://i.pinimg.com/736x/23/5b/54/235b545c67873be05c35721b659941cc.jpg',
        artistName: 'El Mieruko (Pinterest)',
        title: 'Rimuru & Friends',
        likes: 421,
        description: 'Wallpaper HD yang menampilkan Rimuru bersama teman-temannya dari Jura Tempest Federation.'
    },
    8: {
        src: 'https://images4.alphacoders.com/135/thumbbig-1357925.webp',
        artistAvatar: 'https://i.pinimg.com/736x/6b/9a/c5/6b9ac5cbe047f9070ba2ab5ce7946d0d.jpg',
        artistName: 'alphacoders.com',
        title: 'Rimuru Tempest',
        likes: 387,
        description: 'Wallpaper resmi dengan resolusi tinggi menampilkan Rimuru dalam pose epik.'
    },
    9: {
        src: 'https://images6.alphacoders.com/991/thumbbig-991880.webp',
        artistAvatar: 'https://i.pinimg.com/736x/79/d0/7f/79d07f3e2a931b8abb946f3b81e774c8.jpg',
        artistName: 'alphacoders.com',
        title: 'Rimuru x Shizue',
        likes: 354,
        description: 'Wallpaper emosional yang menampilkan Rimuru bersama Shizue dalam momen yang mengharukan.'
    },
    10: {
        src: 'https://www.ixpap.com/images/2021/08/Rimuru-Tempest-HD-Wallpaper.jpg',
        artistAvatar: 'https://i.pinimg.com/736x/32/c0/99/32c0995516a2a0ef176677df1fc775eb.jpg',
        artistName: 'ixpap.com',
        title: 'Rimuru Tempest',
        likes: 512,
        description: 'Wallpaper HD Rimuru dalam bentuk Demon Lord dengan kualitas gambar yang sangat tajam.'
    },
    11: {
        src: 'https://i.pinimg.com/736x/a9/84/6b/a9846bad58b55f943a2e05b4a803a050.jpg',
        artistAvatar: 'https://i.pinimg.com/736x/ef/32/eb/ef32eb5ab074b32c7a192439d1fa2131.jpg',
        artistName: 'Fanny',
        title: 'Luminous Valentine',
        likes: 298,
        description: 'Fanart Luminous Valentine, salah satu karakter penting dalam cerita Tensei Shitara Slime Datta Ken.'
    },
    12: {
        src: 'https://i.pinimg.com/736x/67/a5/1c/67a51c527f554a55c227b7a60726881f.jpg',
        artistAvatar: 'https://i.pinimg.com/736x/68/5b/3f/685b3ff5b54143448b53eacc02a76517.jpg',
        artistName: '𝕄𝕒ℕ𝔾𝕒☆•°°𝕍ℕ',
        title: 'Myulan',
        likes: 267,
        description: 'Karya seni yang menampilkan Myulan, karakter pendukung dalam cerita dengan detail yang indah.'
    },
    13: {
        src: 'https://i.pinimg.com/736x/5f/31/e5/5f31e5d948db1d3158c9db6015cf31a8.jpg',
        artistAvatar: 'https://i.pinimg.com/736x/92/ac/c2/92acc2c9047808052d94e614fd053647.jpg',
        artistName: 'Vinicius Almeida',
        title: 'Testarossa',
        likes: 189,
        description: 'Fanart Testarossa, salah satu Primordial Demon yang mengabdi pada Rimuru.'
    },
    14: {
        src: 'https://i.pinimg.com/736x/ee/50/8e/ee508ecee5000d08173ffa064fc83065.jpg',
        artistAvatar: 'https://i.pinimg.com/736x/7a/eb/52/7aeb526f6958b6fe856c944585bc9b3c.jpg',
        artistName: 'July Vejo',
        title: 'Velzard',
        likes: 156,
        description: 'Ilustrasi Velzard, salah satu Dragon Lords yang kuat dalam cerita Tensei Shitara Slime Datta Ken.'
    }
};

// Add click event to each gallery item
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageId = item.getAttribute('data-id');
        const data = imageData[imageId];
        
        if (data) {
            modalImage.src = data.src;
            modalArtistAvatar.src = data.artistAvatar;
            modalArtistName.textContent = data.artistName;
            modalWorkTitle.textContent = data.title;
            modalLikeCount.textContent = data.likes + ' suka';
            modalWorkDescription.textContent = data.description;
            
            // Check if like button is already clicked (from localStorage)
            const isLiked = localStorage.getItem(`image_${imageId}_liked`) === 'true';
            if (isLiked) {
                modalLikeBtn.innerHTML = '<i class="fas fa-heart"></i><span>Disukai</span>';
                modalLikeBtn.classList.add('liked');
            } else {
                modalLikeBtn.innerHTML = '<i class="far fa-heart"></i><span>Suka</span>';
                modalLikeBtn.classList.remove('liked');
            }
            
            // Update like button click event
            modalLikeBtn.onclick = function() {
                if (isLiked) {
                    data.likes--;
                    localStorage.removeItem(`image_${imageId}_liked`);
                    modalLikeBtn.innerHTML = '<i class="far fa-heart"></i><span>Suka</span>';
                    modalLikeBtn.classList.remove('liked');
                } else {
                    data.likes++;
                    localStorage.setItem(`image_${imageId}_liked`, 'true');
                    modalLikeBtn.innerHTML = '<i class="fas fa-heart"></i><span>Disukai</span>';
                    modalLikeBtn.classList.add('liked');
                }
                modalLikeCount.textContent = data.likes + ' suka';
                
                // Update the like count in the gallery item
                const likeCountElement = item.querySelector('.like-count');
                if (likeCountElement) {
                    likeCountElement.textContent = data.likes;
                }
            };
            
            imageModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal when clicking X button
closeModal.addEventListener('click', () => {
    imageModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside the modal content
imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal.style.display === 'block') {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});