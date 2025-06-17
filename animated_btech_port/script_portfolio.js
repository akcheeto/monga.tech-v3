// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // DNA Loading Animation
    const loadingScreen = document.querySelector('.loading-screen');
    const dnaStrands = document.querySelectorAll('.dna-strand');
    const loadingText = document.querySelector('.loading-text');
    
    // Animate DNA strands
    anime({
        targets: dnaStrands,
        rotateZ: 360,
        duration: 2000,
        loop: true,
        easing: 'linear',
        delay: anime.stagger(200)
    });
    
    // Animate loading text
    anime({
        targets: loadingText,
        opacity: [0, 1],
        duration: 800,
        delay: 300,
        easing: 'easeInOutQuad'
    });
    
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        anime({
            targets: loadingScreen,
            opacity: [1, 0],
            duration: 600,
            easing: 'easeInOutQuad',
            complete: function() {
                loadingScreen.style.display = 'none';
                initializePageAnimations();
            }
        });
    }, 2000);
});

function initializePageAnimations() {
    // Animate main content fade in
    anime({
        targets: '.main-content',
        opacity: [0, 1],
        duration: 600,
        easing: 'easeInOutQuad'
    });
    
    // Header slide down animation
    anime({
        targets: '.header',
        translateY: [-100, 0],
        duration: 600,
        easing: 'easeInOutCubic'
    });
    
    // Logo fade in
    anime({
        targets: '.logo',
        opacity: [0, 1],
        duration: 500,
        delay: 200,
        easing: 'easeInOutQuad'
    });
    
    // Nav links stagger animation
    anime({
        targets: '.nav-links li',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 500,
        delay: anime.stagger(80, {start: 300}),
        easing: 'easeInOutQuad'
    });
    
    // Hero title animation
    anime({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        delay: 400,
        easing: 'easeInOutCubic'
    });
    
    // Add subtle glow to hero title
    anime({
        targets: '.hero-title',
        textShadow: [
            {value: '0 0 20px rgba(0, 245, 255, 0.5)', duration: 0},
            {value: '0 0 25px rgba(0, 245, 255, 0.6)', duration: 2000},
            {value: '0 0 20px rgba(0, 245, 255, 0.5)', duration: 2000}
        ],
        loop: true,
        delay: 1200,
        easing: 'easeInOutSine'
    });
    
    // Hero subtitle animation
    anime({
        targets: '.hero-subtitle',
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 700,
        delay: 500,
        easing: 'easeInOutCubic'
    });
    
    // Stat cards animation
    anime({
        targets: '.stat-card',
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.95, 1],
        duration: 600,
        delay: anime.stagger(100, {start: 600}),
        easing: 'easeInOutCubic'
    });
    
    // Animate stat numbers counting up
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((stat, index) => {
        const targetValue = parseInt(stat.getAttribute('data-value'));
        anime({
            targets: stat,
            innerHTML: [0, targetValue],
            round: 1,
            duration: 1500,
            delay: 700 + (index * 150),
            easing: 'easeInOutCubic',
            update: function() {
                stat.innerHTML = Math.round(stat.innerHTML) + '+';
            }
        });
    });
    
    // Resume button animation
    anime({
        targets: '#resumeToggleBtn',
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.95, 1],
        duration: 600,
        delay: 900,
        easing: 'easeInOutCubic'
    });
    
    // Initialize particles background
    createAnimatedParticles();
    
    // Set up scroll animations
    setupScrollAnimations();
}

// Enhanced particle animation with anime.js
function createAnimatedParticles() {
    const container = document.getElementById('bgAnimation');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        container.appendChild(particle);
        
        // Animate each particle with anime.js
        anime({
            targets: particle,
            translateY: [
                {value: -window.innerHeight * 1.2, duration: 12000 + Math.random() * 8000}
            ],
            translateX: [
                {value: anime.random(-80, 80), duration: 12000 + Math.random() * 8000}
            ],
            opacity: [
                {value: 0, duration: 0},
                {value: 1, duration: 1500},
                {value: 1, duration: 8000},
                {value: 0, duration: 1500}
            ],
            easing: 'linear',
            loop: true,
            delay: Math.random() * 8000
        });
    }
}

// Enhanced scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                
                if (entry.target.classList.contains('section-title')) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 600,
                        easing: 'easeInOutCubic'
                    });
                }
                
                if (entry.target.classList.contains('experience-card')) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateX: [-30, 0],
                        duration: 600,
                        easing: 'easeInOutCubic'
                    });
                    
                    // Animate experience highlights
                    anime({
                        targets: entry.target.querySelectorAll('.experience-highlights li'),
                        opacity: [0, 1],
                        translateX: [-15, 0],
                        duration: 500,
                        delay: anime.stagger(40, {start: 200}),
                        easing: 'easeInOutQuad'
                    });
                }
                
                if (entry.target.classList.contains('project-card')) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        scale: [0.97, 1],
                        duration: 600,
                        easing: 'easeInOutCubic'
                    });
                    
                    // Animate tech tags
                    anime({
                        targets: entry.target.querySelectorAll('.tech-tag'),
                        opacity: [0, 1],
                        scale: [0.8, 1],
                        duration: 400,
                        delay: anime.stagger(40, {start: 400}),
                        easing: 'easeInOutCubic'
                    });
                }
                
                if (entry.target.classList.contains('skill-category')) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        rotateX: [-5, 0],
                        duration: 600,
                        easing: 'easeInOutCubic'
                    });
                    
                    // Animate skill items
                    anime({
                        targets: entry.target.querySelectorAll('.skill-item'),
                        opacity: [0, 1],
                        scale: [0.9, 1],
                        rotate: [45, 0],
                        duration: 400,
                        delay: anime.stagger(25, {start: 300}),
                        easing: 'easeInOutCubic'
                    });
                }
                
                if (entry.target.classList.contains('contact-item')) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [15, 0],
                        duration: 500,
                        easing: 'easeInOutCubic'
                    });
                }
                
                if (entry.target.classList.contains('made-btn')) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 600,
                        easing: 'easeInOutCubic'
                    });
                }
                
                if (entry.target.classList.contains('footer')) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        duration: 600,
                        easing: 'easeInOutCubic'
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe all elements
    document.querySelectorAll('.section-title, .experience-card, .project-card, .skill-category, .contact-item, .made-btn, .footer').forEach(el => {
        observer.observe(el);
    });
}

// Enhanced modal animations
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Animate modal appearance
    anime({
        targets: modal,
        opacity: [0, 1],
        duration: 250,
        easing: 'easeInOutQuad'
    });
    
    anime({
        targets: modalContent,
        opacity: [0, 1],
        scale: [0.9, 1],
        rotateX: [10, 0],
        duration: 350,
        delay: 50,
        easing: 'easeInOutCubic'
    });
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');
    
    // Animate modal disappearance
    anime({
        targets: modalContent,
        opacity: [1, 0],
        scale: [1, 0.9],
        rotateX: [0, 10],
        duration: 250,
        easing: 'easeInOutCubic'
    });
    
    anime({
        targets: modal,
        opacity: [1, 0],
        duration: 250,
        delay: 50,
        easing: 'easeInOutQuad',
        complete: function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Enhanced header animation on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        anime({
            targets: header,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            duration: 200,
            easing: 'easeInOutQuad'
        });
    } else {
        anime({
            targets: header,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            duration: 200,
            easing: 'easeInOutQuad'
        });
    }
});

// Enhanced smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
            
            anime({
                targets: [document.documentElement, document.body],
                scrollTop: targetPosition,
                duration: 600,
                easing: 'easeInOutCubic'
            });
        }
    });
});

// Resume toggle function with animation
function toggleResume() {
    const resumeContainer = document.getElementById('resumeContainer');
    const toggleBtn = document.getElementById('resumeToggleBtn');
    
    if (resumeContainer.style.display === 'none' || resumeContainer.style.display === '') {
        resumeContainer.style.display = 'block';
        
        anime({
            targets: resumeContainer,
            opacity: [0, 1],
            translateY: [-15, 0],
            duration: 400,
            easing: 'easeInOutCubic'
        });
        
        toggleBtn.innerHTML = `
            <span style="display: flex; align-items: center; gap: 10px;">
                <img src="assets/AM Logo Inverted.png" alt="AM Logo Inverted" style="width: 2.5rem; height: auto; display: block;" />
                Hide Resume
            </span>
        `;
        
        setTimeout(() => {
            resumeContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    } else {
        anime({
            targets: resumeContainer,
            opacity: [1, 0],
            translateY: [0, -15],
            duration: 400,
            easing: 'easeInOutCubic',
            complete: function() {
                resumeContainer.style.display = 'none';
            }
        });
        
        toggleBtn.innerHTML = `
            <span style="display: flex; align-items: center; gap: 10px;">
                <img src="assets/AM Logo Inverted.png" alt="AM Logo Inverted" style="width: 2.5rem; height: auto; display: block;" />
                My Resume
            </span>
        `;
    }
}

// Close modal functionality
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        const modalId = event.target.id;
        closeModal(modalId);
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const openModal = document.querySelector('.modal[style*="block"]');
        if (openModal) {
            closeModal(openModal.id);
        }
    }
});