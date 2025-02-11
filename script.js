document.addEventListener('DOMContentLoaded', function() {
    // Gallery lightbox functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const projectDetails = document.getElementById('plantHealthProject');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            
            const img = item.querySelector('img').cloneNode();
            lightbox.appendChild(img);
            
            document.body.appendChild(lightbox);
            
            // Close lightbox on click
            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });

            // Show project details if it's the Plant Health project
            const projectTitle = item.querySelector('.text').textContent;
            if (projectTitle === 'Plant Health Evaluation') {
                const projectDetails = document.querySelector('.project-details');
                projectDetails.style.display = 'block';
                projectDetails.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state to button
            const submitButton = this.querySelector('button');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Simulate form submission (replace with actual form submission)
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                contactForm.reset();
            }, 1500);
        });
    }

    // Add fade-in animation to elements
    const fadeElements = document.querySelectorAll('.gallery-item, .about-content, .contact-content');
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transition = 'opacity 0.5s ease-in-out';
        
        // Check if element is in viewport
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        element.style.opacity = '1';
                    }, 100);
                }
            });
        });

        observer.observe(element);
    });

    // Add hover effect to navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Handle mobile menu
    const navHeader = document.querySelector('.nav-header');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
        navHeader.addEventListener('click', () => {
            navLinksContainer.classList.toggle('show-mobile');
        });
    }
});

// Add this to your CSS if you haven't already
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .nav-links {
            transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .nav-links.show-mobile {
                display: flex;
            }
            
            .nav-header {
                cursor: pointer;
            }
        }
        
        .gallery-item, .about-content, .contact-content {
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
    </style>
`);
