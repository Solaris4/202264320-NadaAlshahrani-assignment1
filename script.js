// ===============================================
// Smooth Scrolling Navigation
// ===============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===============================================
// Dark/Light Theme Toggle
// ===============================================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Save theme preference
    const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    // Add animation effect
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

// ===============================================
// Dynamic Greeting by Time of Day
// ===============================================
function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greeting;
    
    if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning! ☀️';
    } else if (hour >= 12 && hour < 17) {
        greeting = 'Good Afternoon! 🌤️';
    } else if (hour >= 17 && hour < 21) {
        greeting = 'Good Evening! 🌆';
    } else {
        greeting = 'Good Night! 🌙';
    }
    
    greetingElement.textContent = greeting;
}

// Set greeting on page load
setGreeting();

// ===============================================
// Navbar Background on Scroll
// ===============================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add background when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(115, 165, 198, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(115, 165, 198, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===============================================
// Contact Form Handling
// ===============================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !message) {
        showFormMessage('Please fill in all fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission (no backend)
    showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
    
    // Log form data to console (for demonstration)
    console.log('Form submitted:', { name, email, message });
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Auto-hide success message after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ===============================================
// Scroll Animations (Fade in on scroll)
// ===============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.project-card, .skill-card, .timeline-item, .about-text, .contact-info'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===============================================
// Interactive Project Cards
// ===============================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ===============================================
// Active Navigation Link Highlight
// ===============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--color-primary)';
        }
    });
});

// ===============================================
// Form Input Animations
// ===============================================
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.style.transition = 'transform 0.2s ease';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// ===============================================
// Prevent Empty Form Submission
// ===============================================
const formButton = document.querySelector('.contact-form button[type="submit"]');

formButton.addEventListener('click', (e) => {
    const inputs = document.querySelectorAll('.contact-form input[required], .contact-form textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#dc3545';
            setTimeout(() => {
                input.style.borderColor = 'var(--color-border)';
            }, 2000);
        }
    });
});

// ===============================================
// Skill Card Hover Effect Enhancement
// ===============================================
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderLeft = '4px solid var(--color-primary)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderLeft = 'none';
    });
});

// ===============================================
// Console Welcome Message
// ===============================================
console.log('%c👋 Welcome to my Portfolio!', 'color: #73A5C6; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ by Nada Alshahrani', 'color: #5B8FA3; font-size: 14px;');
console.log('%cInterested in the code? Check out the GitHub repository!', 'color: #73A5C6; font-size: 12px;');

// ===============================================
// Performance Optimization: Debounce Scroll Events
// ===============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll event listeners for better performance
const debouncedScrollHandler = debounce(() => {
    // Scroll-related functionality already handled above
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);
