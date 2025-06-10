        // Toggle between login and register forms
        const loginToggle = document.getElementById('login-toggle');
        const registerToggle = document.getElementById('register-toggle');
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const switchToRegister = document.getElementById('switch-to-register');
        const switchToLogin = document.getElementById('switch-to-login');
        const formTitle = document.getElementById('form-title');
        const formSubtitle = document.getElementById('form-subtitle');
        const formToggle = document.getElementById('form-toggle');
        
        function showLoginForm() {
            loginToggle.classList.add('active');
            registerToggle.classList.remove('active');
            loginForm.classList.add('active');
            registerForm.classList.remove('active');
            formTitle.textContent = 'Masuk ke Dunia Tempest';
            formSubtitle.textContent = 'Bergabunglah dengan komunitas penggemar Rimuru dan nikmati konten eksklusif kami.';
            formToggle.classList.remove('register-active');
        }
        
        function showRegisterForm() {
            registerToggle.classList.add('active');
            loginToggle.classList.remove('active');
            registerForm.classList.add('active');
            loginForm.classList.remove('active');
            formTitle.textContent = 'Daftar Akun Baru';
            formSubtitle.textContent = 'Buat akun dan mulailah perjalanan Anda di dunia Tempest.';
            formToggle.classList.add('register-active');
        }
        
        loginToggle.addEventListener('click', showLoginForm);
        registerToggle.addEventListener('click', showRegisterForm);
        switchToRegister.addEventListener('click', (e) => {
            e.preventDefault();
            showRegisterForm();
        });
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            showLoginForm();
        });
        
        // Form submission
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            alert(`Kode OTP telah dikirim ke ${email}. Silakan periksa email Anda.`);
        });
        
        document.getElementById('register-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('register-email').value;
            alert(`Kode verifikasi telah dikirim ke ${email}. Silakan periksa email Anda untuk menyelesaikan pendaftaran.`);
        });
        
        // Google login/register
        document.querySelectorAll('.btn-google').forEach(btn => {
            btn.addEventListener('click', () => {
                alert('Maaf sayangnya halaman ini masih belum berfungsi, jadi kamu bisa kembali ke halaman utama lagi ya');
            });
        });
        
        // Help button
        document.getElementById('help-btn').addEventListener('click', () => {
            alert('Hai! Saya SantStyle. Ada yang bisa saya bantu?\n\Silakan hubungi contact untuk bantuan lebih lanjut.');
        });
        
// FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    alert('Maaf sayangnya halaman ini masih belum berfungsi, jadi kamu bisa kembali ke halaman utama lagi ya');
});
