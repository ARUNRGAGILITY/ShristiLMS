// Shared Navigation Component for Shristi
// This ensures consistent navigation behavior across all pages

class ShristiNavigation {
    constructor() {
        this.init();
    }

    init() {
        // Add any shared navigation functionality here
        this.setupMobileNavigation();
        this.setupActivePageHighlighting();
        this.setupThemeToggle();
        this.setupNavbarScroll();
    }

    setupMobileNavigation() {
        // Handle mobile navigation interactions
        const nav = document.querySelector('nav');
        if (nav) {
            // Add any mobile-specific navigation behavior
            this.handleMobileNavResponsiveness();
        }
    }

    setupActivePageHighlighting() {
        // Highlight the current page in navigation
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('nav a[href]');
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || 
                (currentPage === 'index.html' && linkPage === 'index.html') ||
                (currentPage.includes('learning.html') && linkPage.includes('learning.html')) ||
                (currentPage.includes('quiz.html') && linkPage.includes('quiz.html'))) {
                link.classList.add('bg-blue-800');
                link.classList.remove('bg-blue-700');
            }
        });
    }

    handleMobileNavResponsiveness() {
        // Handle mobile navigation responsiveness
        const handleResize = () => {
            const nav = document.querySelector('nav');
            if (nav) {
                // Add any responsive behavior here
                if (window.innerWidth < 640) {
                    // Mobile-specific behavior
                    nav.classList.add('mobile-nav');
                } else {
                    nav.classList.remove('mobile-nav');
                }
            }
        };

        // Initial call
        handleResize();
        
        // Listen for resize events
        window.addEventListener('resize', handleResize);
    }

    // Method to navigate to a specific page
    navigateTo(page, params = {}) {
        let url = page;
        if (Object.keys(params).length > 0) {
            const searchParams = new URLSearchParams(params);
            url += '?' + searchParams.toString();
        }
        window.location.href = url;
    }

    // Method to get current course ID from URL
    getCurrentCourseId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('course');
    }

    // Method to update navigation based on current context
    updateNavigationContext() {
        const currentCourseId = this.getCurrentCourseId();
        if (currentCourseId) {
            // Update page title or other context-specific elements
            const course = this.getCourseById(currentCourseId);
            if (course) {
                document.title = `ShristiLMS - ${course.name}`;
            }
        }
    }

    // Helper method to get course data (if available)
    getCourseById(courseId) {
        // This would typically access the courses data
        // For now, return null - this should be implemented based on your course data structure
        return null;
    }

    // Setup theme toggle functionality
    setupThemeToggle() {
        const themeToggle = document.getElementById("themeToggle");
        const themeIcon = document.getElementById("themeIcon");

        console.log('Setting up theme toggle:', { themeToggle, themeIcon });

        if (themeToggle && themeIcon) {
            // Load saved theme or default to light
            const savedTheme = localStorage.getItem("theme") || "light";
            console.log('Loading saved theme:', savedTheme);
            this.setTheme(savedTheme);

            themeToggle.addEventListener("click", () => {
                const currentTheme = document.body.getAttribute("data-theme");
                const newTheme = currentTheme === "dark" ? "light" : "dark";
                console.log('Theme toggle clicked:', { currentTheme, newTheme });
                this.setTheme(newTheme);
            });
        } else {
            console.warn('Theme toggle elements not found:', { themeToggle, themeIcon });
        }
    }

    // Set theme function
    setTheme(theme) {
        console.log('Setting theme to:', theme);
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        
        const themeIcon = document.getElementById("themeIcon");
        if (themeIcon) {
            themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
            console.log('Updated theme icon to:', themeIcon.className);
        } else {
            console.warn('Theme icon not found');
        }
    }

    // Setup navbar scroll effects
    setupNavbarScroll() {
        const navbar = document.querySelector('.navbar-theme');
        if (navbar) {
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            };

            window.addEventListener('scroll', handleScroll);
            // Initial check
            handleScroll();
        }
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.shristiLMSNav = new ShristiLMSNavigation();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ShristiLMSNavigation;
} 