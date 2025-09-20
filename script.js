
        // DOM Content Loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            
            if (hamburger && navMenu) {
                hamburger.addEventListener('click', function() {
                    navMenu.classList.toggle('active');
                });
            }
            
            // Smooth Scrolling for Navigation Links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        // Close mobile menu if open
                        if (navMenu && navMenu.classList.contains('active')) {
                            navMenu.classList.remove('active');
                        }
                        
                        const headerHeight = document.querySelector('header').offsetHeight;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Scroll to Top Button
            const scrollToTopBtn = document.querySelector('.scroll-to-top');
            
            if (scrollToTopBtn) {
                window.addEventListener('scroll', function() {
                    if (window.pageYOffset > 300) {
                        scrollToTopBtn.classList.add('active');
                    } else {
                        scrollToTopBtn.classList.remove('active');
                    }
                });
                
                scrollToTopBtn.addEventListener('click', function() {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }
            
            // Modal functionality
            const modal = document.querySelector('.modal');
            const modalClose = document.querySelector('.modal-close');
            const ctaButtons = document.querySelectorAll('.cta-btn, .btn[href="#quote"]');
            
            // Open modal when clicking CTA buttons
            ctaButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (modal) {
                        modal.classList.add('active');
                        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
                    }
                });
            });
            
            // Close modal
            if (modalClose && modal) {
                modalClose.addEventListener('click', function() {
                    modal.classList.remove('active');
                    document.body.style.overflow = ''; // Re-enable scrolling
                });
                
                // Close modal when clicking outside
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        modal.classList.remove('active');
                        document.body.style.overflow = ''; // Re-enable scrolling
                    }
                });
                
                // Close modal with Escape key
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape' && modal.classList.contains('active')) {
                        modal.classList.remove('active');
                        document.body.style.overflow = ''; // Re-enable scrolling
                    }
                });
            }
            
            // Form submissions
            const contactForm = document.getElementById('contactForm');
            const quoteForm = document.getElementById('quoteForm');
            
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    // Here you would normally send the form data to a server
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                });
            }
            
            if (quoteForm) {
                quoteForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    // Here you would normally send the form data to a server
                    alert('Thank you for your quote request! We will contact you shortly.');
                    quoteForm.reset();
                    
                    // Close the modal after submission
                    if (modal) {
                        modal.classList.remove('active');
                        document.body.style.overflow = ''; // Re-enable scrolling
                    }
                });
            }
            
            // Animation on scroll for feature cards
            function animateOnScroll() {
                const elements = document.querySelectorAll('.feature-card');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (elementPosition < screenPosition) {
                        element.classList.add('visible');
                    }
                });
            }
            
            // Initialize elements for animation
            const animatedElements = document.querySelectorAll('.feature-card');
            
            // Run on load and scroll
            window.addEventListener('load', animateOnScroll);
            window.addEventListener('scroll', animateOnScroll);
        });
    