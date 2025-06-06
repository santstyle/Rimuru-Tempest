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

// Sample data for modal (in a real app, this would come from a database)
const imageData = {
    1: {
        src: 'https://i.pinimg.com/736x/8e/2d/8e/8e2d8e2a3a3c5b1b3e3e3b3e3e3b3e3e.jpg',
        artistAvatar: 'https://randomuser.me/api/portraits/women/43.jpg',
        artistName: 'SlimeArtist99',
        title: 'Rimuru\'s Evolution',
        likes: 248,
        description: 'This artwork showcases Rimuru\'s transformation from slime to demon lord with detailed background elements from the Jura Tempest Federation.'
    },
    2: {
        src: 'https://i.pinimg.com/736x/7e/2d/8e/7e2d8e2a3a3c5b1b3e3e3b3e3e3b3e3e.jpg',
        artistAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        artistName: 'TempestPainter',
        title: 'Tempest Nation',
        likes: 187,
        description: 'A group portrait of the main characters from Tensei Shitara Slime Datta Ken in the style of official artwork.'
    },
    3: {
        src: 'https://i.pinimg.com/736x/ce/7c/4f/ce7c4f26992bf10f6d428722bd2a90b4.jpg',
        artistAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        artistName: 'ChibiMaster',
        title: 'Chibi Rimuru',
        likes: 312,
        description: 'Cute chibi version of Rimuru Tempest in his slime form with kawaii expression.'
    },
    4: {
        src: 'https://i.pinimg.com/736x/f6/77/16/f6771629686c040abe9b8020e59e8713.jpg',
        artistAvatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        artistName: 'DragonArtist',
        title: 'Milim\'s Power',
        likes: 156,
        description: 'Dynamic artwork of Milim Nava showing her incredible dragon powers.'
    },
    5: {
        src: 'https://i.pinimg.com/736x/07/4c/30/074c30be8cc5d813b1a465bfb6715ff1.jpg',
        artistAvatar: 'https://randomuser.me/api/portraits/women/25.jpg',
        artistName: 'FireArtStudio',
        title: 'Benimaru\'s Flame',
        likes: 98,
        description: 'Benimaru in action with his signature flame attacks, created with vibrant colors.'
    },
    6: {
        src: 'https://i.pinimg.com/736x/8e/2d/8e/8e2d8e2a3a3c5b1b3e3e3b3e3e3b3e3e.jpg',
        artistAvatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        artistName: 'GroupArtTeam',
        title: 'Tempest Council',
        likes: 276,
        description: 'Official style artwork featuring Rimuru with his trusted subordinates in the Tempest council room.'
    },
    7: {
        src: 'https://i.pinimg.com/736x/ce/7c/4f/ce7c4f26992bf10f6d428722bd2a90b4.jpg',
        artistAvatar: 'https://randomuser.me/api/portraits/women/33.jpg',
        artistName: 'Official Art',
        title: 'Rimuru Blue',
        likes: 421,
        description: 'Official wallpaper featuring Rimuru in his signature blue color scheme.'
    },
    8: {
        src: 'https://i.pinimg.com/736x/f6/77/16/f6771629686c040abe9b8020e59e8713.jpg',
        artistAvatar: 'https://randomuser.me/api/portraits/men/22.jpg',
        artistName: 'Official Art',
        title: 'Tempest Capital',
        likes: 387,
        description: 'HD wallpaper of the capital city of the Jura Tempest Federation.'
    },
    9: {
        src: 'https://i.pinimg.com/736x/07/4c/30/074c30be8cc5d813b1a465bfb6715ff1.jpg',
        artistAvatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        artistName: 'Official Art',
        title: 'Milim Nava',
        likes: 354,
        description: 'Official artwork of Milim Nava in her powerful form.'
    },
    10: {
        src: 'https://i.pinimg.com/736x/7e/2d/8e/7e2d8e2a3a3c5b1b3e3e3b3e3e3b3e3e.jpg',
        artistAvatar: 'https://randomuser.me/api/portraits/men/88.jpg',
        artistName: 'Official Art',
        title: 'Demon Lord Rimuru',
        likes: 512,
        description: 'High quality official artwork of Rimuru in his demon lord attire.'
    },
    11: {
        src: 'https://i.pinimg.com/736x/8e/2d/8e/8e2d8e2a3a3c5b1b3e3e3b3e3e3b3e3e.jpg',
        artistAvatar: 'https://randomuser.me/api/portraits/women/12.jpg',
        artistName: 'CosplaySlime',
        title: 'Rimuru Cosplay',
        likes: 298,
        description: 'Detailed cosplay of Rimuru Tempest with handmade costume and props.'
    },
    12: {
        src: 'https://i.pinimg.com/736x/7e/2d/8e/7e2d8e2a3a3c5b1b3e3e3b3e3e3b3e3e.jpg',
        artistAvatar: 'https://randomuser.me/api/portraits/women/77.jpg',
        artistName: 'DragonCos',
        title: 'Milim Cosplay',
        likes: 267,
        description: 'Energetic Milim Nava cosplay with custom wig and dragon details.'
    },
    13: {
        src: 'https://i.pinimg.com/736x/ce/7c/4f/ce7c4f26992bf10f6d428722bd2a90b4.jpg',
        artistAvatar: 'https://randomuser.me/api/portraits/women/34.jpg',
        artistName: 'TempestCos',
        title: 'Shion Cosplay',
        likes: 189,
        description: 'Accurate Shion cosplay with detailed armor and weapon replica.'
    },
    14: {
        src: 'https://i.pinimg.com/736x/f6/77/16/f6771629686c040abe9b8020e59e8713.jpg',
        artistAvatar: 'https://randomuser.me/api/portraits/men/66.jpg',
        artistName: 'FlameCosplayer',
        title: 'Benimaru Cosplay',
        likes: 156,
        description: 'Powerful Benimaru cosplay with flame effects and authentic costume.'
    }
};