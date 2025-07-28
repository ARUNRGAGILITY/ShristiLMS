// Shared Navigation Component for VidyaLMS
// This ensures consistent navigation behavior across all pages

class VidyaLMSNavigation {
    constructor() {
        this.init();
    }

    init() {
        // Add any shared navigation functionality here
        this.setupMobileNavigation();
        this.setupActivePageHighlighting();
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
                document.title = `VidyaLMS - ${course.name}`;
            }
        }
    }

    // Helper method to get course data (if available)
    getCourseById(courseId) {
        // This would typically access the courses data
        // For now, return null - this should be implemented based on your course data structure
        return null;
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.vidyaLMSNav = new VidyaLMSNavigation();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VidyaLMSNavigation;
} 