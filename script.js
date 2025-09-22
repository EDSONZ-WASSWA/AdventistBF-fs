// Form handling and dynamic content loading
document.addEventListener('DOMContentLoaded', function() {
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you within 24 hours.');
            contactForm.reset();
        });
    }

    // Obituary form
    const obituaryForm = document.getElementById('obituary-form');
    if (obituaryForm) {
        obituaryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Your obituary submission has been received. We will review it and contact you if needed.');
            obituaryForm.reset();
        });
    }

    // Saving scheme application form
    const savingForm = document.getElementById('saving-application-form');
    if (savingForm) {
        savingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest in Ekijja Omannyi Saving Scheme. We will contact you within 24 hours to discuss your application.');
            savingForm.reset();
        });
    }

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Accessibility: Add keyboard navigation for forms
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });

    // Lazy loading for images (placeholder for future optimization)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // Update aria-expanded for accessibility
            const isExpanded = navMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            // Change button text/icon
            menuToggle.textContent = isExpanded ? '✕' : '☰';
        });

        // Close menu when clicking outside or on a link
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.textContent = '☰';
            }
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.textContent = '☰';
            });
        });
    }

    // Analytics placeholder (for future implementation)
    console.log('ABF Funeral Services website loaded');
});