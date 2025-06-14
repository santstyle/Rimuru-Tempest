
function getParticlesConfig(theme) {
    return {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": theme === 'light' ? "#333333" : "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": theme === 'light' ? "#3b82f6" : "#4a6bff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    };
}

// Inisialisasi partikel
function initParticles() {
    if (document.getElementById('particles-js')) {
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        particlesJS('particles-js', getParticlesConfig(theme));
    }
}


document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    

    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            setTimeout(() => {
                if (window.pJSDom && window.pJSDom.length > 0) {
                    window.pJSDom[0].pJS.fn.vendors.destroypJS();
                    const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
                    particlesJS('particles-js', getParticlesConfig(newTheme));
                }
            }, 100); 
        });
    }
});
function initParticles() {
    console.log("Initializing particles...");
    const canvas = document.getElementById('particles-js');
    if (canvas) {
        console.log("Particles canvas found");
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        console.log("Current theme:", theme);
        particlesJS('particles-js', getParticlesConfig(theme));
        console.log("Particles initialized");
    } else {
        console.error("Particles canvas not found");
    }
}