/**
 * Shared Navigation Component for VidyaLMS
 * 
 * This class provides consistent navigation behavior across all pages of the VidyaLMS platform.
 * It handles mobile responsiveness, active page highlighting, navigation utilities, and theme management.
 * 
 * @author VidyaLMS Team
 * @version 1.0
 */

class VidyaLMSNavigation {
    /**
     * Constructor - initializes the navigation component
     */
    constructor() {
        this.init();
    }

    /**
     * Initialize all navigation functionality
     */
    init() {
        // Setup core navigation features
        this.setupMobileNavigation();
        this.setupActivePageHighlighting();
        this.setupThemeManagement();
    }

    /**
     * Sets up mobile navigation functionality
     * Handles responsive behavior and mobile-specific interactions
     */
    setupMobileNavigation() {
        // Handle mobile navigation interactions
        const nav = document.querySelector('nav');
        if (nav) {
            // Setup mobile-specific navigation behavior
            this.handleMobileNavResponsiveness();
        }
    }

    /**
     * Highlights the current page in the navigation menu
     * Provides visual feedback to users about their current location
     */
    setupActivePageHighlighting() {
        // Get current page from URL
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('nav a[href]');
        
        // Check each navigation link and highlight if it matches current page
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

    /**
     * Sets up theme management functionality
     * Handles theme switching, persistence, and UI updates
     */
    setupThemeManagement() {
        // Initialize theme from localStorage or default to dark
        this.currentTheme = localStorage.getItem('vidyaLMS-theme') || 'dark';
        
        // Apply theme immediately to prevent flash of unstyled content
        this.applyTheme(this.currentTheme);
        
        // Add theme toggle button to all navigation bars
        this.addThemeToggleToNavbars();
        
        // Setup theme toggle event listeners
        this.setupThemeToggleListeners();
    }

    /**
     * Adds theme toggle button to all navigation bars
     */
    addThemeToggleToNavbars() {
        const navbars = document.querySelectorAll('nav .flex.items-center.space-x-2.sm\\:space-x-4');
        
        navbars.forEach(navbar => {
            // Check if theme toggle already exists
            if (!navbar.querySelector('.theme-toggle-btn')) {
                const themeToggle = this.createThemeToggleButton();
                navbar.appendChild(themeToggle);
            }
        });
    }

    /**
     * Creates the theme toggle button element
     * @returns {HTMLElement} Theme toggle button
     */
    createThemeToggleButton() {
        const button = document.createElement('button');
        button.className = 'theme-toggle-btn mobile-btn ripple-btn transition text-xs sm:text-sm hover:scale-105 hover:shadow-lg';
        button.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        button.setAttribute('aria-label', 'Toggle theme');
        button.setAttribute('title', 'Toggle dark/light mode');
        
        // Set initial icon based on current theme
        const icon = this.currentTheme === 'dark' ? 'fa-sun' : 'fa-moon';
        button.innerHTML = `<i class="fas ${icon}"></i> <span class="hidden sm:inline">Theme</span>`;
        
        return button;
    }

    /**
     * Sets up event listeners for theme toggle buttons
     */
    setupThemeToggleListeners() {
        document.addEventListener('click', (event) => {
            if (event.target.closest('.theme-toggle-btn')) {
                this.toggleTheme();
            }
        });
    }

    /**
     * Toggles between dark and light themes
     */
    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
    }

    /**
     * Applies the specified theme to the document
     * @param {string} theme - Theme to apply ('dark' or 'light')
     */
    applyTheme(theme) {
        this.currentTheme = theme;
        
        // Update document attributes
        document.documentElement.setAttribute('data-theme', theme);
        document.body.setAttribute('data-theme', theme);
        
        // Update CSS custom properties
        if (theme === 'light') {
            document.documentElement.style.setProperty('--background', '#ffffff');
            document.documentElement.style.setProperty('--surface', '#f8fafc');
            document.documentElement.style.setProperty('--surface-light', '#e2e8f0');
            document.documentElement.style.setProperty('--border', '#cbd5e1');
            document.documentElement.style.setProperty('--text-primary', '#1e293b');
            document.documentElement.style.setProperty('--text-secondary', '#475569');
            document.documentElement.style.setProperty('--accent', '#3b82f6');
            document.documentElement.style.setProperty('--accent-light', '#60a5fa');
        } else {
            document.documentElement.style.setProperty('--background', '#0f172a');
            document.documentElement.style.setProperty('--surface', '#1e293b');
            document.documentElement.style.setProperty('--surface-light', '#334155');
            document.documentElement.style.setProperty('--border', '#475569');
            document.documentElement.style.setProperty('--text-primary', '#f8fafc');
            document.documentElement.style.setProperty('--text-secondary', '#cbd5e1');
            document.documentElement.style.setProperty('--accent', '#3b82f6');
            document.documentElement.style.setProperty('--accent-light', '#60a5fa');
        }
        
        // Update body classes
        if (theme === 'light') {
            document.body.classList.remove('bg-slate-900', 'text-white');
            document.body.classList.add('bg-white', 'text-slate-900');
        } else {
            document.body.classList.remove('bg-white', 'text-slate-900');
            document.body.classList.add('bg-slate-900', 'text-white');
        }
        
        // Update all elements that need theme-specific styling
        this.updateThemeSpecificElements(theme);
        
        // Update navigation bar styling
        this.updateNavbarTheme(theme);
        
        // Update theme toggle button icons
        this.updateThemeToggleIcons(theme);
        
        // Persist theme preference
        localStorage.setItem('vidyaLMS-theme', theme);
    }

    /**
     * Updates navigation bar styling based on theme
     * @param {string} theme - Current theme
     */
    updateNavbarTheme(theme) {
        const navbars = document.querySelectorAll('nav');
        
        navbars.forEach(navbar => {
            if (theme === 'light') {
                navbar.classList.remove('bg-slate-900/80', 'text-white');
                navbar.classList.add('bg-white/80', 'text-slate-900');
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            } else {
                navbar.classList.remove('bg-white/80', 'text-slate-900');
                navbar.classList.add('bg-slate-900/80', 'text-white');
                navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
            }
        });
    }

    /**
     * Updates theme toggle button icons
     * @param {string} theme - Current theme
     */
    updateThemeToggleIcons(theme) {
        const themeToggles = document.querySelectorAll('.theme-toggle-btn');
        
        themeToggles.forEach(toggle => {
            const icon = toggle.querySelector('i');
            if (theme === 'dark') {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        });
    }

    /**
     * Updates theme-specific elements that need dynamic styling
     * @param {string} theme - Current theme
     */
    updateThemeSpecificElements(theme) {
        // Update footer styling
        const footers = document.querySelectorAll('footer');
        footers.forEach(footer => {
            if (theme === 'light') {
                footer.classList.remove('bg-slate-800');
                footer.classList.add('bg-slate-100');
            } else {
                footer.classList.remove('bg-slate-100');
                footer.classList.add('bg-slate-800');
            }
        });

        // Update mobile navigation styling
        const mobileNavs = document.querySelectorAll('.mobile-nav');
        mobileNavs.forEach(nav => {
            if (theme === 'light') {
                nav.classList.remove('bg-slate-900');
                nav.classList.add('bg-white');
            } else {
                nav.classList.remove('bg-white');
                nav.classList.add('bg-slate-900');
            }
        });

        // Update course grid background
        const courseGrids = document.querySelectorAll('#courseGrid');
        courseGrids.forEach(grid => {
            if (theme === 'light') {
                grid.classList.remove('bg-slate-900');
                grid.classList.add('bg-white');
            } else {
                grid.classList.remove('bg-white');
                grid.classList.add('bg-slate-900');
            }
        });

        // Update text colors for course cards and other elements
        this.updateTextColors(theme);
    }

    /**
     * Updates text colors based on theme
     * @param {string} theme - Current theme
     */
    updateTextColors(theme) {
        // Update course card text colors (but not buttons)
        const courseCards = document.querySelectorAll('.course-card, .course-list-item');
        courseCards.forEach(card => {
            const whiteTexts = card.querySelectorAll('.text-white:not(button):not(.mobile-btn):not(.ripple-btn)');
            whiteTexts.forEach(text => {
                if (theme === 'light') {
                    text.classList.remove('text-white');
                    text.classList.add('text-slate-900');
                } else {
                    text.classList.remove('text-slate-900');
                    text.classList.add('text-white');
                }
            });
        });

        // Update navigation text colors (but not buttons and links)
        const navTexts = document.querySelectorAll('nav .text-white:not(button):not(.mobile-btn):not(.ripple-btn):not(a)');
        navTexts.forEach(text => {
            if (theme === 'light') {
                text.classList.remove('text-white');
                text.classList.add('text-slate-900');
            } else {
                text.classList.remove('text-slate-900');
                text.classList.add('text-white');
            }
        });

        // Ensure navigation buttons and links stay white in light mode
        const navButtons = document.querySelectorAll('nav a.mobile-btn, nav a.ripple-btn, nav button.mobile-btn, nav button.ripple-btn, .theme-toggle-btn');
        navButtons.forEach(button => {
            if (theme === 'light') {
                button.classList.remove('text-slate-900');
                button.classList.add('text-white');
            }
        });

        // Update footer text colors
        const footerTexts = document.querySelectorAll('footer .text-white');
        footerTexts.forEach(text => {
            if (theme === 'light') {
                text.classList.remove('text-white');
                text.classList.add('text-slate-900');
            } else {
                text.classList.remove('text-slate-900');
                text.classList.add('text-white');
            }
        });

        // Update headings and titles
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(heading => {
            if (theme === 'light') {
                if (heading.classList.contains('text-white')) {
                    heading.classList.remove('text-white');
                    heading.classList.add('text-slate-900');
                }
            } else {
                if (heading.classList.contains('text-slate-900') && !heading.classList.contains('text-blue-400') && !heading.classList.contains('text-red-400')) {
                    heading.classList.remove('text-slate-900');
                    heading.classList.add('text-white');
                }
            }
        });

        // Update course element classes
        this.updateCourseElements(theme);
    }

    /**
     * Updates course element colors based on theme
     * @param {string} theme - Current theme
     */
    updateCourseElements(theme) {
        // Course elements are handled by CSS variables, but we can add additional logic here if needed
        const courseElements = document.querySelectorAll('.course-icon, .course-title, .course-description, .course-meta');
        
        // The CSS variables will handle the color changes automatically
        // This method is here for any future JavaScript-based color updates
    }

    /**
     * Handles responsive behavior for mobile navigation
     * Adjusts navigation styling based on screen size
     */
    handleMobileNavResponsiveness() {
        // Function to handle window resize events
        const handleResize = () => {
            const nav = document.querySelector('nav');
            if (nav) {
                // Apply mobile-specific styling for screens smaller than 640px
                if (window.innerWidth < 640) {
                    nav.classList.add('mobile-nav');
                } else {
                    nav.classList.remove('mobile-nav');
                }
            }
        };

        // Apply responsive behavior on initial load
        handleResize();
        
        // Listen for window resize events to update navigation styling
        window.addEventListener('resize', handleResize);
    }

    /**
     * Navigates to a specific page with optional parameters
     * @param {string} page - The page to navigate to
     * @param {Object} params - Optional URL parameters
     */
    navigateTo(page, params = {}) {
        let url = page;
        if (Object.keys(params).length > 0) {
            const searchParams = new URLSearchParams(params);
            url += '?' + searchParams.toString();
        }
        window.location.href = url;
    }

    /**
     * Gets the current course ID from the URL parameters
     * @returns {string|null} Course ID if present in URL, null otherwise
     */
    getCurrentCourseId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('course');
    }

    /**
     * Updates navigation context based on current course
     * Updates page title and other context-specific elements
     */
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

    /**
     * Helper method to get course data by ID
     * @param {string} courseId - The course ID to look up
     * @returns {Object|null} Course object if found, null otherwise
     */
    getCourseById(courseId) {
        // This would typically access the courses data
        // For now, return null - this should be implemented based on your course data structure
        return null;
    }
}

// ===== INITIALIZATION =====
// Initialize navigation when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    window.vidyaLMSNav = new VidyaLMSNavigation();
});

// ===== MODULE EXPORTS =====
// Export for use in other scripts (Node.js compatibility)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VidyaLMSNavigation;
} 