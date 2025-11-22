// Loading Screen Handler
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');

    // Hide loading screen after animation completes (3 seconds)
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            mainContent.classList.add('visible');
        }, 500);
    }, 3500);
});

// Action Buttons State Management
const actionButtons = document.querySelectorAll('.action-btn');

actionButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Reset all buttons to normal state
        actionButtons.forEach(btn => {
            btn.setAttribute('data-state', 'normal');
        });

        // Set clicked button to active state
        this.setAttribute('data-state', 'active');

        // Get button text and handle actions
        const buttonText = this.querySelector('.btn-text').textContent;
        handleButtonAction(buttonText);
    });

    // Hover state
    button.addEventListener('mouseenter', function() {
        if (this.getAttribute('data-state') !== 'active') {
            this.setAttribute('data-state', 'hover');
        }
    });

    button.addEventListener('mouseleave', function() {
        if (this.getAttribute('data-state') === 'hover') {
            this.setAttribute('data-state', 'normal');
        }
    });
});

// Handle Button Actions
function handleButtonAction(action) {
    switch(action) {
        case 'JOIN CREW':
            scrollToSection('contact');
            break;
        case 'BOOK RUN':
            scrollToSection('routes');
            break;
        case 'VIEW STATS':
            scrollToSection('gallery');
            break;
        case 'CONTACT US':
            scrollToSection('contact');
            break;
        default:
            console.log('Action:', action);
    }
}

// Smooth Scroll Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navigation Links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Announcement Cards Animation
const announcementCards = document.querySelectorAll('.announcement-card');
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

announcementCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    cardObserver.observe(card);
});

// Gallery Photo Frames Animation
const photoFrames = document.querySelectorAll('.photo-frame');
photoFrames.forEach((frame, index) => {
    frame.style.opacity = '0';
    frame.style.transform = 'scale(0.9)';
    frame.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
});

const frameObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
        }
    });
}, observerOptions);

photoFrames.forEach(frame => {
    frameObserver.observe(frame);
});

// Route Cards Animation
const routeCards = document.querySelectorAll('.route-card');
routeCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
});

const routeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

routeCards.forEach(card => {
    routeObserver.observe(card);
});

// Read More Buttons
const readMoreBtns = document.querySelectorAll('.read-more-btn');
readMoreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.announcement-card');
        const header = card.querySelector('.card-header').textContent;
        alert(`Opening: ${header}\n\nThis would typically open a detailed view or modal with more information.`);
    });
});

// View All Button
const viewAllBtn = document.querySelector('.view-all-btn');
if (viewAllBtn) {
    viewAllBtn.addEventListener('click', function() {
        alert('Opening full gallery view...\n\nThis would typically open a complete gallery page or lightbox.');
    });
}

// CTA Button Large
const ctaBtnLarge = document.querySelector('.cta-btn-large');
if (ctaBtnLarge) {
    ctaBtnLarge.addEventListener('click', function() {
        scrollToSection('contact');
    });
}

// Parallax Effect for Runner Silhouettes
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;

    const runnerHero = document.querySelector('.runner-silhouette-hero');
    const runnerAnnouncements = document.querySelector('.runner-silhouette-announcements');
    const runnerRoutes = document.querySelector('.runner-silhouette-routes');

    if (runnerHero) {
        runnerHero.style.transform = `translateY(${scrolled * 0.1}px)`;
    }

    if (runnerAnnouncements) {
        const announcementsOffset = document.querySelector('.announcements-section').offsetTop;
        if (scrolled > announcementsOffset - window.innerHeight) {
            runnerAnnouncements.style.transform = `translateY(${(scrolled - announcementsOffset) * 0.05}px)`;
        }
    }

    if (runnerRoutes) {
        const routesOffset = document.querySelector('.routes-section').offsetTop;
        if (scrolled > routesOffset - window.innerHeight) {
            runnerRoutes.style.transform = `translateY(${(scrolled - routesOffset) * 0.05}px)`;
        }
    }
});

// Gear Rotation Animation
const gearLarge = document.querySelector('.gear-large');
if (gearLarge) {
    let rotation = 0;
    setInterval(() => {
        rotation += 0.5;
        gearLarge.style.transform = `rotate(${rotation}deg)`;
    }, 50);
}

// Stats Sidebar Sticky Behavior
window.addEventListener('scroll', function() {
    const statsSidebar = document.querySelector('.stats-sidebar');
    const heroSection = document.querySelector('.hero-section');

    if (statsSidebar && heroSection && window.innerWidth > 768) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrolled = window.pageYOffset;

        if (scrolled > heroSection.offsetTop && scrolled < heroBottom - window.innerHeight / 2) {
            statsSidebar.style.position = 'fixed';
            statsSidebar.style.top = '50%';
            statsSidebar.style.right = '50px';
        } else {
            statsSidebar.style.position = 'absolute';
            statsSidebar.style.top = '50%';
        }
    }
});

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    // Escape key to reset button states
    if (e.key === 'Escape') {
        actionButtons.forEach(btn => {
            btn.setAttribute('data-state', 'normal');
        });
    }

    // Number keys 1-4 to trigger action buttons
    if (e.key >= '1' && e.key <= '4') {
        const index = parseInt(e.key) - 1;
        if (actionButtons[index]) {
            actionButtons[index].click();
        }
    }
});

// Performance Monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                console.log('🏃‍♂️ URBAN RUNNERS Performance Metrics');
                console.log('🏗️ Page Load Time:', Math.round(perfData.loadEventEnd - perfData.loadEventStart), 'ms');
                console.log('🧱 DOM Content Loaded:', Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart), 'ms');
            }
        }, 0);
    });
}

// Console Art
console.log('%c URBAN RUNNERS ', 'background: #FF6600; color: #FFFFFF; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c CONCRETE MILES // RAW SPEED ', 'background: #1A1A1A; color: #FF6600; font-size: 12px; padding: 5px;');
console.log('%c Industrial Running Crew ', 'color: #4A4A4A; font-size: 10px;');

// Prevent default drag behavior on images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', e => e.preventDefault());
});

// Add loading state to buttons
const allButtons = document.querySelectorAll('button');
allButtons.forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.textContent;

        // Visual feedback
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
});

// Intersection Observer for Stats Boxes
const statBoxes = document.querySelectorAll('.stat-box');
let hasAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animateStatBoxes();
        }
    });
}, { threshold: 0.5 });

if (statBoxes.length > 0) {
    statsObserver.observe(statBoxes[0]);
}

function animateStatBoxes() {
    statBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.transform = 'translateX(0)';
            box.style.opacity = '1';
        }, index * 100);
    });
}

// Initialize stat boxes hidden
statBoxes.forEach(box => {
    box.style.transform = 'translateX(20px)';
    box.style.opacity = '0';
    box.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
});

// Error Handling
window.addEventListener('error', function(e) {
    console.error('🚨 Error detected:', e.error);
});

// Mobile Menu Toggle (for future implementation)
function initMobileMenu() {
    if (window.innerWidth <= 768) {
        console.log('📱 Mobile view detected');
    }
}

window.addEventListener('resize', initMobileMenu);
initMobileMenu();

// Smooth Scroll Polyfill Check
if (!('scrollBehavior' in document.documentElement.style)) {
    console.warn('⚠️ Smooth scrolling not supported in this browser');
}

// Initialize all animations and interactions
function init() {
    console.log('✅ URBAN RUNNERS initialized');
    console.log('🏃 Ready to run!');
}

// Run initialization
init();
