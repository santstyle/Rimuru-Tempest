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
        { title: 'Episode 1 - Reinkarnasi Sang Slime', thumb: 'https://i.ytimg.com/vi/Lys5vkiv0RA/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/Lys5vkiv0RA?si=e1X_0-ICc2aftavk', page: '1.html' },
        { title: 'Episode 2 - Pertemuan dengan Veldora', thumb: 'https://i.ytimg.com/vi/R6JuMf5XkQc/hq720.jpg', videoUrl: 'https://www.youtube.com/embed/R6JuMf5XkQc?si=cBVtsC5rH1Ldufiz', page: '2.html' },
        { title: 'Episode 3 - Goblin dan Sang Pemimpin', thumb: 'https://i.ytimg.com/vi/LGD1DVe8BAo/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/LGD1DVe8BAo?si=d-_EGUfjTmWy2-1A', page: '3.html' },
        { title: 'Episode 4 - Di Kerajaan Dwarf Dwargon', thumb: 'https://i.ytimg.com/vi/KGRK1GE1IG8/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/KGRK1GE1IG8?si=sDIF4kVZijR7W7V4', page: '4.html' },
        { title: 'Episode 5 - Pertemuan dengan Raja Dwarf', thumb: 'https://i.ytimg.com/vi/N6Wix6v4oa4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/N6Wix6v4oa4?si=ebBzrImD35ke2Pg1', page: '5.html' },
        { title: 'Episode 6 - Shizu dan Masa Lalu', thumb: 'https://i.ytimg.com/vi/SrLj-eSbJbo/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/SrLj-eSbJbo?si=85czwm5iDqboI4Tl', page: '6.html' },
        { title: 'Episode 7 - Penakluk Api', thumb: 'https://i.ytimg.com/vi/Kzz9-_b5ebw/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/Kzz9-_b5ebw?si=xIHWUiXGacjd_3Sf', page: '7.html' },
        { title: 'Episode 8 - Warisan Shizu', thumb: 'https://i.ytimg.com/vi/RvWhoeXXeZg/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/RvWhoeXXeZg?si=ntK-5TQK63SVsXGz', page: '8.html' },
        { title: 'Episode 9 - Serangan Ras Ogre', thumb: 'https://i.ytimg.com/vi/HZTj6j6Iaqk/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/HZTj6j6Iaqk?si=pXajfm9kIzy_jWl7', page: '9.html' },
        { title: 'Episode 10 - Pertempuran Memutuskan Nasib', thumb: 'https://i.ytimg.com/vi/QhQl9H9RlPc/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/QhQl9H9RlPc?si=GR5ulRFZs6r-wijt', page: '10.html' },
        { title: 'Episode 11 - Aliansi Badai Besar', thumb: 'https://i.ytimg.com/vi/AgOs5zAli0E/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/AgOs5zAli0E?si=M-i9R8OMD7ZCj78d', page: '11.html' },
        { title: 'Episode 12 - Pengepungan Badai', thumb: 'https://i.ytimg.com/vi/PebLJymSvvU/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/PebLJymSvvU?si=iEnIHFjenduFgZlg', page: '12.html' },
        { title: 'Episode 13 - Pertempuran Tempest', thumb: 'https://i.ytimg.com/vi/4VhKfsaExLg/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/4VhKfsaExLg?si=S1OZtAI8y9DITZm_', page: '13.html' },
        { title: 'Episode 14 - Ancaman Baru Muncul', thumb: 'https://i.ytimg.com/vi/-FF9jQHKwiI/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/-FF9jQHKwiI?si=dRwUDG9cdJDfBwXB', page: '14.html' },
        { title: 'Episode 15 - Penguasa Badai', thumb: 'https://i.ytimg.com/vi/lEevvSAlpAA/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/lEevvSAlpAA?si=OoyMTeCnqXY30BD0', page: '15.html' },
        { title: 'Episode 16 - Raja Iblis Milim', thumb: 'https://i.ytimg.com/vi/bIlh8qr-zks/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/bIlh8qr-zks?si=VlBhk9ND1abubwLY', page: '16.html' },
        { title: 'Episode 17 - Badai yang Mengumpulkan', thumb: 'https://i.ytimg.com/vi/ro3Y7H9OiBs/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/ro3Y7H9OiBs?si=G2u2QQI1YCuRvmY4', page: '17.html' },
        { title: 'Episode 18 - Invasi Dimulai', thumb: 'https://i.ytimg.com/vi/h_w8nnX4am8/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/h_w8nnX4am8?si=_WCnicNDBBf98wb0', page: '18.html' },
        { title: 'Episode 19 - Rahasia Hutan', thumb: 'https://i.ytimg.com/vi/J0k0s4mIvCY/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/J0k0s4mIvCY?si=CsWNsP2JKCTp79yl', page: '19.html' },
        { title: 'Episode 20 - Kemenangan dan Kalah', thumb: 'https://i.ytimg.com/vi/pwXVOhZZzMY/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/pwXVOhZZzMY?si=01GhiDPQXvs-NZOR', page: '20.html' },
        { title: 'Episode 21 - Keinginan Shizu', thumb: 'https://i.ytimg.com/vi/064azkNzM60/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/064azkNzM60?si=sF5y_32ZIXRX8B9B', page: '21.html' },
        { title: 'Episode 22 - Konspirasi dalam Bayangan', thumb: 'https://i.ytimg.com/vi/kv2fuuZs03A/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/kv2fuuZs03A?si=oofgyFmdkDihzKkh', page: '22.html' },
        { title: 'Episode 23 - Pertempuran Terakhir Musim 1', thumb: 'https://i.ytimg.com/vi/cmPcEMYlra0/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/cmPcEMYlra0?si=ORTEtL4yvF7uaxRv', page: '23.html' },
        { title: 'Episode 24 - Tekad Sebuah Bangsa', thumb: 'https://i.ytimg.com/vi/9kiwAAlDf7w/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/9kiwAAlDf7w?si=jzm4k0BkrCb89umn', page: '24.html' },
        { title: 'Episode 24.5 - Ekstra: Hitam dan Topeng', thumb: 'https://i.ytimg.com/vi/QmsW_P5WTWE/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/QmsW_P5WTWE?si=Hudq7JwVZJTX5qce', page: '24.5.html' },
        { title: 'Episode 24.9 - Selingan: Hinata Sakaguchi', thumb: 'https://i.ytimg.com/vi/WL57cb8Pb7Q/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/WL57cb8Pb7Q?si=f22ym6ACwMBzocNW', page: '24.9.html' }
    ],
    'Season 2': [
        { title: 'Episode 25 - Fajar Era Baru', thumb: 'https://i.ytimg.com/vi/aJHP4T-IA1s/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/aJHP4T-IA1s?si=e0U7zOIVC0DxFvGm', page: 's2-25.html' },
        { title: 'Episode 26 - Munculnya Para Raja Iblis', thumb: 'https://i.ytimg.com/vi/_UI-AaXsgB0/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/_UI-AaXsgB0?si=5NFscxsTurceip61', page: 's2-26.html' },
        { title: 'Episode 27 - Aliansi yang Terbentuk dari Pertempuran', thumb: 'https://i.ytimg.com/vi/Mx9DDlaV9d0/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/Mx9DDlaV9d0?si=LQanF0X000vcAd8p', page: 's2-27.html' },
        { title: 'Episode 28 - Tempest Diserang', thumb: 'https://i.ytimg.com/vi/_yJWcvObsv8/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/_yJWcvObsv8?si=zVuJCF8wI6JVno7U', page: 's2-28.html' },
        { title: 'Episode 29 - Pengorbanan Seorang Pahlawan', thumb: 'https://i.ytimg.com/vi/ioYpKl3TMEk/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/ioYpKl3TMEk?si=yLJ_Nc1GWJGdvwY3', page: 's2-29.html' },
        { title: 'Episode 30 - Pesona yang Menggerakkan', thumb: 'https://i.ytimg.com/vi/vhV7Qvtjxkc/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/vhV7Qvtjxkc?si=AQDCcYaaQZhWFdvm', page: 's2-30.html' },
        { title: 'Episode 31 - Dalam Keputusasaan', thumb: 'https://i.ytimg.com/vi/ppdoLoPYO_E/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/ppdoLoPYO_E?si=Tud-IbfrFTOkX6_1', page: 's2-31.html' },
        { title: 'Episode 32 - Cahaya Harapan', thumb: 'https://i.ytimg.com/vi/EoqnXeOj0lk/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/EoqnXeOj0lk?si=dAfj2VsufMOTYVVk', page: 's2-32.html' },
        { title: 'Episode 33 - Segalanya Dipertaruhkan', thumb: 'https://i.ytimg.com/vi/hU_t-ns5P0o/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/hU_t-ns5P0o?si=YUlG1cv9VVXxy4EM', page: 's2-33.html' },
        { title: 'Episode 34 - Megiddo: Keajaiban Terakhir', thumb: 'https://i.ytimg.com/vi/ewnX3FbqH1w/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/ewnX3FbqH1w?si=TPkW1jh17sVxxZBt', page: 's2-34.html' },
        { title: 'Episode 35 - Kelahiran Seorang Raja Iblis', thumb: 'https://i.ytimg.com/vi/MbHLc5yM77k/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/MbHLc5yM77k?si=Y7qlNGHy6pXWCqJI', page: 's2-35.html' },
        { title: 'Episode 36 - Kebebasan yang Liar', thumb: 'https://i.ytimg.com/vi/hUn6Q_xQZxM/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/hUn6Q_xQZxM?si=A8eUUGbEwm4fVR5g', page: 's2-36.html' },
        { title: 'Episode 36.5 - Kisah: Jurnal Veldora 2', thumb: 'https://i.ytimg.com/vi/dvYATg3_Djs/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/dvYATg3_Djs?si=pYukMEdKRD-Vn9rS', page: 's2-36.5.html' },
        { title: 'Episode 37 - Kebebasan yang Liar', thumb: 'https://i.ytimg.com/vi/exBMThLUkK4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/exBMThLUkK4?si=kzrum6Bf-xAD5BAW', page: 's2-37.html' },
        { title: 'Episode 38 - Pertemuan Manusia dan Monster', thumb: 'https://i.ytimg.com/vi/MIfcBejEKfM/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/MIfcBejEKfM?si=Em6CS8uWJFug-wF5', page: 's2-38.html' },
        { title: 'Episode 39 - Peringatan Ramiris', thumb: 'https://i.ytimg.com/vi/T8liu1P3470/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/T8liu1P3470?si=sZ9IrII78mcFvzZX', page: 's2-39.html' },
        { title: 'Episode 40 - Kongres Besar', thumb: 'https://i.ytimg.com/vi/GDK2wAMPaAI/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/GDK2wAMPaAI?si=6SnV_AIFQcvWMpQm', page: 's2-40.html' },
        { title: 'Episode 41 - Malam Sebelum Pertempuran', thumb: 'https://i.ytimg.com/vi/bewGkbGcRS4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/bewGkbGcRS4?si=RdlS_mI5GbwPm-mI', page: 's2-41.html' },
        { title: 'Episode 42 - Para Raja Iblis Berkumpul', thumb: 'https://i.ytimg.com/vi/N4siTgkHnlk/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/N4siTgkHnlk?si=Mwis3QnezGVItIQf', page: 's2-42.html' },
        { title: 'Episode 43 - Isyarat Dimulainya Jamuan', thumb: 'https://i.ytimg.com/vi/crnDMISXW7s/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/crnDMISXW7s?si=PaYBRM1G9KNNNiLz', page: 's2-43.html' },
        { title: 'Episode 44 - Di Tanah yang Penuh Takdir', thumb: 'https://i.ytimg.com/vi/_7J73qOnb7g/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/_7J73qOnb7g?si=3TJ524HzAJBS3ryU', page: 's2-44.html' },
        { title: 'Episode 45 - Pertarungan di Gerbang', thumb: 'https://i.ytimg.com/vi/9lPV4_YXUm8/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/9lPV4_YXUm8?si=GZu7w7jr2v7zphIp', page: 's2-45.html' },
        { title: 'Episode 46 - Jamuan Para Demon Lord - Walpurgis', thumb: 'https://i.ytimg.com/vi/0Bca_ji7PJU/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/0Bca_ji7PJU?si=A_4rEi6G207etV0P', page: 's2-46.html' },
        { title: 'Episode 47 - Kebangkitan dari Ambang Kematian', thumb: 'https://i.ytimg.com/vi/GbsimJrsiVw/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/GbsimJrsiVw?si=kCgT5PwZDJOBMF1A', page: 's2-47.html' },
        { title: 'Episode 48 - Simbol Delapan Bintang', thumb: 'https://i.ytimg.com/vi/dPBNPzQSHvw/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/dPBNPzQSHvw?si=yxk6tgmI2VE4gWva', page: 's2-48.html' },
        { title: 'Episode 48.5 - Catatan Rimuru: Rekap Santai', thumb: 'https://i.ytimg.com/vi/2ItB2pom0WE/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/2ItB2pom0WE?si=iof95EgJnCtKI-RT', page: 's2-48.5.html' }
    ],
    'Season 3': [
        { title: 'Episode 49 - Rencana Tersembunyi', thumb: 'https://i.ytimg.com/vi/Hhr8iqbazf0/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/Hhr8iqbazf0?si=gwjdRTY00c3Gibnq', page: 's3-49.html' },
        { title: 'Episode 50 - Pertemuan Suci', thumb: 'https://i.ytimg.com/vi/8HQnsKhY0eA/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/8HQnsKhY0eA?si=HOtHMGRUiB3oUEUh', page: 's3-50.html' },
        { title: 'Episode 51 - Perpecahan yang Muncul', thumb: 'https://i.ytimg.com/vi/gMTbHergFrw/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/gMTbHergFrw?si=coO3c0KpjlNtD9NZ', page: 's3-51.html' },
        { title: 'Episode 52 - Pusaran Konspirasi', thumb: 'https://i.ytimg.com/vi/2Lb_o3YWpIg/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/2Lb_o3YWpIg?si=p7PGiCPALJUcT8b6', page: 's3-52.html' },
        { title: 'Episode 53 - Jalan Para Raja', thumb: 'https://i.ytimg.com/vi/YCkrzyvIp6w/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/YCkrzyvIp6w?si=Br6rvh8GDbjnIRNp', page: 's3-53.html' },
        { title: 'Episode 54 - Sang Raja Pedang', thumb: 'https://i.ytimg.com/vi/bLuqBrG_Knk/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/bLuqBrG_Knk?si=hZZ5S9u5ObxUUtMz', page: 's3-54.html' },
        { title: 'Episode 55 - Cahaya dalam Kegelapan', thumb: 'https://i.ytimg.com/vi/XPd-2JjypGg/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/XPd-2JjypGg?si=SM9A7TedYWkolSfs', page: 's3-55.html' },
        { title: 'Episode 56 - Pilar Keadilan', thumb: 'https://i.ytimg.com/vi/BsjJN7dkdEM/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/BsjJN7dkdEM?si=JeBEGUO_mg3bfgyN', page: 's3-56.html' },
        { title: 'Episode 57 - Simfoni Kekacauan', thumb: 'https://i.ytimg.com/vi/5GuQs9izuoA/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/5GuQs9izuoA?si=IvAX1qg6hQzSgpZM', page: 's3-57.html' },
        { title: 'Episode 58 - Hati Sang Raja Iblis', thumb: 'https://i.ytimg.com/vi/EbBcMdABoK0/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/EbBcMdABoK0?si=-eZ7bTwTrBve-W43', page: 's3-58.html' },
        { title: 'Episode 59 - Kebangkitan Raja Baru', thumb: 'https://i.ytimg.com/vi/PWfUfVTm5V8/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/PWfUfVTm5V8?si=_8OnGWzHDHrDV9R3', page: 's3-59.html' },
        { title: 'Episode 60 - Cakrawala Dunia Baru', thumb: 'https://i.ytimg.com/vi/MXpug_FH6gE/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/MXpug_FH6gE?si=nmwOoWbe1O7036z4', page: 's3-60.html' },
        { title: 'Episode 61 - Undangan Segala Bangsa', thumb: 'https://i.ytimg.com/vi/dGz-s3VJffw/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/dGz-s3VJffw?si=YH8Z-GuGb7Glv0AT', page: 's3-61.html' },
        { title: 'Episode 62 - Labirin & Naga Badai', thumb: 'https://i.ytimg.com/vi/dFalaiLX0sA/hq720.jpg', videoUrl: 'https://www.youtube.com/embed/dFalaiLX0sA?si=H9EMJEQrhM95a1Kr', page: 's3-62.html' },
        { title: 'Episode 63 - Upacara Audiensi', thumb: 'https://i.ytimg.com/vi/9tJqkE0nQjA/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/9tJqkE0nQjA?si=xKrxyZl7i8Telk-G', page: 's3-63.html' },
        { title: 'Episode 64 - Ujian Benimaru', thumb: 'https://i.ytimg.com/vi/B3j6DSJrPDU/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/B3j6DSJrPDU?si=HjT9qMqJ-GihPd2c', page: 's3-64.html' },
        { title: 'Episode 65 - Pahlawan Cahaya Kilat', thumb: 'https://i.ytimg.com/vi/_wGHyn3BTis/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/_wGHyn3BTis?si=_VmDbZKl715lu1GB', page: 's3-65.html' },
        { title: 'Episode 65.5 - Refleksi Tempest: Rekap Perjalanan', thumb: 'https://i.ytimg.com/vi/2t1NA0gicCE/hq720.jpg', videoUrl: 'https://www.youtube.com/embed/2t1NA0gicCE?si=l2hnpDUuA0RgVGi0', page: 's3-65.5.html' },
        { title: 'Episode 66 - Kedatangan Para Tamu', thumb: 'https://i.ytimg.com/vi/xT__inC0VHI/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/xT__inC0VHI?si=mGrT9iGDjUBx-Ppk', page: 's3-66.html' },
        { title: 'Episode 67 - Malam Festival', thumb: 'https://i.ytimg.com/vi/MJnsBFYekeI/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/MJnsBFYekeI?si=waAXwQirw8bKjJEt', page: 's3-67.html' },
        { title: 'Episode 68 - Hari Pembukaan Festival', thumb: 'https://i.ytimg.com/vi/7uvoFKZHSDM/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/7uvoFKZHSDM?si=KN7gW2ZnRcIdqL_M', page: 's3-68.html' },
        { title: 'Episode 69 - Turnamen Seni Bela Diri', thumb: 'https://i.ytimg.com/vi/X6qLm78njVg/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/X6qLm78njVg?si=UnyHfqH-VGlx9QAG', page: 's3-69.html' },
        { title: 'Episode 70 - Penyelesaian dengan Sang Pahlawan', thumb: 'https://i.ytimg.com/vi/lpfegUBNEgc/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/lpfegUBNEgc?si=caCvZ3kIit6sWlP2', page: 's3-70.html' },
        { title: 'Episode 71 - Pembukaan Labirin', thumb: 'https://i.ytimg.com/vi/Ougee_5FAvE/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/Ougee_5FAvE?si=FgPkoiKQ0aNxm4SV', page: 's3-71.html' },
        { title: 'Episode 72 - Pasca Festival', thumb: 'https://i.ytimg.com/vi/OZhlZBi8RaE/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/OZhlZBi8RaE?si=ouCsWRca-fpwuCg8', page: 's3-72.html' }
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
        '1.html': 'https://www.youtube.com/embed/Lys5vkiv0RA?si=e1X_0-ICc2aftavk',
        '2.html': 'https://www.youtube.com/embed/R6JuMf5XkQc?si=cBVtsC5rH1Ldufiz',
        '3.html': 'https://www.youtube.com/embed/LGD1DVe8BAo?si=d-_EGUfjTmWy2-1A',
        '4.html': 'https://www.youtube.com/embed/KGRK1GE1IG8?si=sDIF4kVZijR7W7V4',
        '5.html': 'https://www.youtube.com/embed/N6Wix6v4oa4?si=ebBzrImD35ke2Pg1',
        '6.html': 'https://www.youtube.com/embed/SrLj-eSbJbo?si=85czwm5iDqboI4Tl',
        '7.html': 'https://www.youtube.com/embed/Kzz9-_b5ebw?si=xIHWUiXGacjd_3Sf',
        '8.html': 'https://www.youtube.com/embed/RvWhoeXXeZg?si=ntK-5TQK63SVsXGz',
        '9.html': 'https://www.youtube.com/embed/HZTj6j6Iaqk?si=pXajfm9kIzy_jWl7',
        '10.html': 'https://www.youtube.com/embed/QhQl9H9RlPc?si=GR5ulRFZs6r-wijt',
        '11.html': 'https://www.youtube.com/embed/AgOs5zAli0E?si=M-i9R8OMD7ZCj78d',
        '12.html': 'https://www.youtube.com/embed/PebLJymSvvU?si=iEnIHFjenduFgZlg',
        '13.html': 'https://www.youtube.com/embed/4VhKfsaExLg?si=S1OZtAI8y9DITZm_',
        '14.html': 'https://www.youtube.com/embed/-FF9jQHKwiI?si=dRwUDG9cdJDfBwXB',
        '15.html': 'https://www.youtube.com/embed/lEevvSAlpAA?si=OoyMTeCnqXY30BD0',
        '16.html': 'https://www.youtube.com/embed/bIlh8qr-zks?si=VlBhk9ND1abubwLY',
        '17.html': 'https://www.youtube.com/embed/ro3Y7H9OiBs?si=G2u2QQI1YCuRvmY4',
        '18.html': 'https://www.youtube.com/embed/h_w8nnX4am8?si=_WCnicNDBBf98wb0',
        '19.html': 'https://www.youtube.com/embed/J0k0s4mIvCY?si=CsWNsP2JKCTp79yl',
        '20.html': 'https://www.youtube.com/embed/pwXVOhZZzMY?si=01GhiDPQXvs-NZOR',
        '21.html': 'https://www.youtube.com/embed/064azkNzM60?si=sF5y_32ZIXRX8B9B',
        '22.html': 'https://www.youtube.com/embed/kv2fuuZs03A?si=oofgyFmdkDihzKkh',
        '23.html': 'https://www.youtube.com/embed/cmPcEMYlra0?si=ORTEtL4yvF7uaxRv',
        '24.html': 'https://www.youtube.com/embed/9kiwAAlDf7w?si=jzm4k0BkrCb89umn',
        '24.5.html': 'https://www.youtube.com/embed/QmsW_P5WTWE?si=Hudq7JwVZJTX5qce',
        '24.9.html': 'https://www.youtube.com/embed/WL57cb8Pb7Q?si=f22ym6ACwMBzocNW',
        's2-25.html': 'https://www.youtube.com/embed/aJHP4T-IA1s?si=e0U7zOIVC0DxFvGm',
        's2-26.html': 'https://www.youtube.com/embed/_UI-AaXsgB0?si=5NFscxsTurceip61',
        's2-27.html': 'https://www.youtube.com/embed/Mx9DDlaV9d0?si=LQanF0X000vcAd8p',
        's2-28.html': 'https://www.youtube.com/embed/_yJWcvObsv8?si=zVuJCF8wI6JVno7U',
        's2-29.html': 'https://www.youtube.com/embed/ioYpKl3TMEk?si=yLJ_Nc1GWJGdvwY3',
        's2-30.html': 'https://www.youtube.com/embed/vhV7Qvtjxkc?si=AQDCcYaaQZhWFdvm',
        's2-31.html': 'https://www.youtube.com/embed/ppdoLoPYO_E?si=Tud-IbfrFTOkX6_1',
        's2-32.html': 'https://www.youtube.com/embed/EoqnXeOj0lk?si=dAfj2VsufMOTYVVk',
        's2-33.html': 'https://www.youtube.com/embed/hU_t-ns5P0o?si=YUlG1cv9VVXxy4EM',
        's2-34.html': 'https://www.youtube.com/embed/ewnX3FbqH1w?si=TPkW1jh17sVxxZBt',
        's2-35.html': 'https://www.youtube.com/embed/MbHLc5yM77k?si=Y7qlNGHy6pXWCqJI',
        's2-36.html': 'https://www.youtube.com/embed/hUn6Q_xQZxM?si=A8eUUGbEwm4fVR5g',
        's2-36.5.html': 'https://www.youtube.com/embed/dvYATg3_Djs?si=pYukMEdKRD-Vn9rS',
        's2-37.html': 'https://www.youtube.com/embed/exBMThLUkK4?si=kzrum6Bf-xAD5BAW',
        's2-38.html': 'https://www.youtube.com/embed/MIfcBejEKfM?si=Em6CS8uWJFug-wF5',
        's2-39.html': 'https://www.youtube.com/embed/T8liu1P3470?si=sZ9IrII78mcFvzZX',
        's2-40.html': 'https://www.youtube.com/embed/GDK2wAMPaAI?si=6SnV_AIFQcvWMpQm',
        's2-41.html': 'https://www.youtube.com/embed/bewGkbGcRS4?si=RdlS_mI5GbwPm-mI',
        's2-42.html': 'https://www.youtube.com/embed/N4siTgkHnlk?si=Mwis3QnezGVItIQf',
        's2-43.html': 'https://www.youtube.com/embed/crnDMISXW7s?si=PaYBRM1G9KNNNiLz',
        's2-44.html': 'https://www.youtube.com/embed/_7J73qOnb7g?si=3TJ524HzAJBS3ryU',
        's2-45.html': 'https://www.youtube.com/embed/9lPV4_YXUm8?si=GZu7w7jr2v7zphIp',
        's2-46.html': 'https://www.youtube.com/embed/0Bca_ji7PJU?si=A_4rEi6G207etV0P',
        's2-47.html': 'https://www.youtube.com/embed/GbsimJrsiVw?si=kCgT5PwZDJOBMF1A',
        's2-48.html': 'https://www.youtube.com/embed/dPBNPzQSHvw?si=yxk6tgmI2VE4gWva',
        's2-48.5.html': 'https://www.youtube.com/embed/2ItB2pom0WE?si=iof95EgJnCtKI-RT',
        's3-49.html': 'https://www.youtube.com/embed/Hhr8iqbazf0?si=gwjdRTY00c3Gibnq',
        's3-50.html': 'https://www.youtube.com/embed/8HQnsKhY0eA?si=HOtHMGRUiB3oUEUh',
        's3-51.html': 'https://www.youtube.com/embed/gMTbHergFrw?si=coO3c0KpjlNtD9NZ',
        's3-52.html': 'https://www.youtube.com/embed/2Lb_o3YWpIg?si=p7PGiCPALJUcT8b6',
        's3-53.html': 'https://www.youtube.com/embed/YCkrzyvIp6w?si=Br6rvh8GDbjnIRNp',
        's3-54.html': 'https://www.youtube.com/embed/bLuqBrG_Knk?si=hZZ5S9u5ObxUUtMz',
        's3-55.html': 'https://www.youtube.com/embed/XPd-2JjypGg?si=SM9A7TedYWkolSfs',
        's3-56.html': 'https://www.youtube.com/embed/BsjJN7dkdEM?si=JeBEGUO_mg3bfgyN',
        's3-57.html': 'https://www.youtube.com/embed/5GuQs9izuoA?si=IvAX1qg6hQzSgpZM',
        's3-58.html': 'https://www.youtube.com/embed/EbBcMdABoK0?si=-eZ7bTwTrBve-W43',
        's3-59.html': 'https://www.youtube.com/embed/PWfUfVTm5V8?si=_8OnGWzHDHrDV9R3',
        's3-60.html': 'https://www.youtube.com/embed/MXpug_FH6gE?si=nmwOoWbe1O7036z4',
        's3-61.html': 'https://www.youtube.com/embed/dGz-s3VJffw?si=YH8Z-GuGb7Glv0AT',
        's3-62.html': 'https://www.youtube.com/embed/dFalaiLX0sA?si=H9EMJEQrhM95a1Kr',
        's3-63.html': 'https://www.youtube.com/embed/9tJqkE0nQjA?si=xKrxyZl7i8Telk-G',
        's3-64.html': 'https://www.youtube.com/embed/B3j6DSJrPDU?si=HjT9qMqJ-GihPd2c',
        's3-65.html': 'https://www.youtube.com/embed/_wGHyn3BTis?si=_VmDbZKl715lu1GB',
        's3-65.5.html': 'https://www.youtube.com/embed/2t1NA0gicCE?si=l2hnpDUuA0RgVGi0',
        's3-66.html': 'https://www.youtube.com/embed/xT__inC0VHI?si=mGrT9iGDjUBx-Ppk',
        's3-67.html': 'https://www.youtube.com/embed/MJnsBFYekeI?si=waAXwQirw8bKjJEt',
        's3-68.html': 'https://www.youtube.com/embed/7uvoFKZHSDM?si=KN7gW2ZnRcIdqL_M',
        's3-69.html': 'https://www.youtube.com/embed/X6qLm78njVg?si=UnyHfqH-VGlx9QAG',
        's3-70.html': 'https://www.youtube.com/embed/lpfegUBNEgc?si=caCvZ3kIit6sWlP2',
        's3-71.html': 'https://www.youtube.com/embed/Ougee_5FAvE?si=FgPkoiKQ0aNxm4SV',
        's3-72.html': 'https://www.youtube.com/embed/OZhlZBi8RaE?si=ouCsWRca-fpwuCg8'
    },
    server2: {
    '1.html': '/streaming/server2n.html',
    '2.html': '/streaming/server2n.html',
    '3.html': '/streaming/server2n.html',
    '4.html': '/streaming/server2n.html',
    '5.html': '/streaming/server2n.html',
    '6.html': '/streaming/server2n.html',
    '7.html': '/streaming/server2n.html',
    '8.html': '/streaming/server2n.html',
    '9.html': '/streaming/server2n.html',
    '10.html': '/streaming/server2n.html',
    '11.html': '/streaming/server2n.html',
    '12.html': '/streaming/server2n.html',
    '13.html': '/streaming/server2n.html',
    '14.html': '/streaming/server2n.html',
    '15.html': '/streaming/server2n.html',
    '16.html': '/streaming/server2n.html',
    '17.html': '/streaming/server2n.html',
    '18.html': '/streaming/server2n.html',
    '19.html': '/streaming/server2n.html',
    '20.html': '/streaming/server2n.html',
    '21.html': '/streaming/server2n.html',
    '22.html': '/streaming/server2n.html',
    '23.html': '/streaming/server2n.html',
    '24.html': '/streaming/server2n.html',
    '24.5.html': '/streaming/server2n.html',
    '24.9.html': '/streaming/server2n.html',
    's2-25.html': '/streaming/server2n.html',
    's2-26.html': '/streaming/server2n.html',
    's2-27.html': '/streaming/server2n.html',
    's2-28.html': '/streaming/server2n.html',
    's2-29.html': '/streaming/server2n.html',
    's2-30.html': '/streaming/server2n.html',
    's2-31.html': '/streaming/server2n.html',
    's2-32.html': '/streaming/server2n.html',
    's2-33.html': '/streaming/server2n.html',
    's2-34.html': '/streaming/server2n.html',
    's2-35.html': '/streaming/server2n.html',
    's2-36.html': '/streaming/server2n.html',
    's2-36.5.html': '/streaming/server2n.html',
    's2-37.html': '/streaming/server2n.html',
    's2-38.html': '/streaming/server2n.html',
    's2-39.html': '/streaming/server2n.html',
    's2-40.html': '/streaming/server2n.html',
    's2-41.html': '/streaming/server2n.html',
    's2-42.html': '/streaming/server2n.html',
    's2-43.html': '/streaming/server2n.html',
    's2-44.html': '/streaming/server2n.html',
    's2-45.html': '/streaming/server2n.html',
    's2-46.html': '/streaming/server2n.html',
    's2-47.html': '/streaming/server2n.html',
    's2-48.html': '/streaming/server2n.html',
    's2-48.5.html': '/streaming/server2n.html',
    's3-49.html': '/streaming/server2n.html',
    's3-50.html': '/streaming/server2n.html',
    's3-51.html': '/streaming/server2n.html',
    's3-52.html': '/streaming/server2n.html',
    's3-53.html': '/streaming/server2n.html',
    's3-54.html': '/streaming/server2n.html',
    's3-55.html': '/streaming/server2n.html',
    's3-56.html': '/streaming/server2n.html',
    's3-57.html': '/streaming/server2n.html',
    's3-58.html': '/streaming/server2n.html',
    's3-59.html': '/streaming/server2n.html',
    's3-60.html': '/streaming/server2n.html',
    's3-61.html': '/streaming/server2n.html',
    's3-62.html': '/streaming/server2n.html',
    's3-63.html': '/streaming/server2n.html',
    's3-64.html': '/streaming/server2n.html',
    's3-65.html': '/streaming/server2n.html',
    's3-65.5.html': '/streaming/server2n.html',
    's3-66.html': '/streaming/server2n.html',
    's3-67.html': '/streaming/server2n.html',
    's3-68.html': '/streaming/server2n.html',
    's3-69.html': '/streaming/server2n.html',
    's3-70.html': '/streaming/server2n.html',
    's3-71.html': '/streaming/server2n.html',
    's3-72.html': '/streaming/server2n.html'
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
