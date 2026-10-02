/**
 * Main Interactive Script for Portfolio Website
 * Candidate: Nagulapati Akshitha Reddy
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollProgress();
    initBackToTop();
    initContactForm();
    setCurrentYear();
});

/* Dynamic Year Setup */
function setCurrentYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

/* Mobile & Active Link Navigation */
function initNavigation() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Toggle Mobile Navigation
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburgerBtn.classList.toggle('open');
        });
    }

    // Close Mobile Menu on Link Click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Active Section Detection on Scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');

            const targetLink = document.querySelector(`.nav-list a[href*="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (targetLink) targetLink.classList.add('active');
            } else {
                if (targetLink) targetLink.classList.remove('active');
            }
        });
    });
}

/* Top Scroll Progress Indicator */
function initScrollProgress() {
    const progressContainer = document.getElementById('scrollProgress');

    window.addEventListener('scroll', () => {
        const windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (windowScroll / height) * 100;

        if (progressContainer) {
            progressContainer.style.width = scrolled + '%';
        }
    });
}

/* Back to Top Control */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/* Mailto Form Fallback Handler */
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            const mailtoUri = `mailto:akshithareddy132@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
            
            window.location.href = mailtoUri;
        });
    }
}