// Clean Minimalistic Theme Management System
class ThemeManager {
    constructor() {
        this.currentTheme = this.getStoredTheme() || window.CONFIG?.defaultTheme || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupThemeToggle();
        this.setupSystemThemeListener();
    }

    getStoredTheme() {
        try {
            return localStorage.getItem('shristilms-theme');
        } catch (e) {
            console.warn('localStorage not available');
            return null;
        }
    }

    setStoredTheme(theme) {
        try {
            localStorage.setItem('shristilms-theme', theme);
        } catch (e) {
            console.warn('localStorage not available');
        }
    }

    applyTheme(theme) {
        if (theme !== 'light' && theme !== 'dark') {
            theme = 'light';
        }

        document.documentElement.setAttribute('data-theme', theme);
        document.body.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        this.setStoredTheme(theme);
        this.updateThemeToggle();
        this.updateMetaThemeColor(theme);
        
        window.dispatchEvent(new CustomEvent('themeChanged', { 
            detail: { theme } 
        }));
    }

    updateMetaThemeColor(theme) {
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }
        
        const color = theme === 'dark' ? '#1f2937' : '#2563eb';
        metaThemeColor.content = color;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }

    setupThemeToggle() {
        this.createThemeToggleIfNeeded();
        
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) {
            // Remove existing listeners
            toggleBtn.replaceWith(toggleBtn.cloneNode(true));
            const newToggleBtn = document.getElementById('themeToggle');
            
            newToggleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
            
            this.updateThemeToggle();
        }
    }

    createThemeToggleIfNeeded() {
        if (document.getElementById('themeToggle')) return;
        
        const navActions = document.getElementById('navActions');
        if (!navActions) return;
        
        // Add clean toggle styles
        if (!document.getElementById('clean-theme-toggle-styles')) {
            const style = document.createElement('style');
            style.id = 'clean-theme-toggle-styles';
            style.textContent = `
                .theme-toggle {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border: none;
                    background: transparent;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    color: var(--text-color, #374151);
                    font-size: 16px;
                    outline: none;
                    -webkit-tap-highlight-color: transparent;
                    overflow: hidden;
                    flex-shrink: 0;
                }

                .theme-toggle:hover {
                    transform: scale(1.05);
                }

                .theme-toggle:active {
                    transform: scale(0.95);
                }

                .theme-toggle:focus-visible {
                    box-shadow: 0 0 0 2px var(--focus-ring, #3b82f6);
                }

                .theme-toggle i {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 14px;
                    line-height: 1;
                    display: inline-block;
                }

                .theme-toggle .fa-sun {
                    opacity: 1;
                    transform: translate(-50%, -50%) rotate(0deg) scale(1);
                }

                .theme-toggle .fa-moon {
                    opacity: 0;
                    transform: translate(-50%, -50%) rotate(180deg) scale(0.8);
                }

                .theme-toggle.dark .fa-sun {
                    opacity: 0;
                    transform: translate(-50%, -50%) rotate(-180deg) scale(0.8);
                }

                .theme-toggle.dark .fa-moon {
                    opacity: 1;
                    transform: translate(-50%, -50%) rotate(0deg) scale(1);
                }

                /* Dark theme colors */
                [data-theme="dark"] .theme-toggle {
                    color: #d1d5db;
                }

                /* Smooth pulse animation on theme change */
                .theme-toggle.changing {
                    animation: themePulse 0.6s ease-out;
                }

                @keyframes themePulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.2); box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
                    100% { transform: scale(1); }
                }

                /* Accessibility improvements */
                @media (prefers-reduced-motion: reduce) {
                    .theme-toggle,
                    .theme-toggle i {
                        transition: none;
                    }
                    
                    .theme-toggle.changing {
                        animation: none;
                    }
                }

                /* High contrast mode support */
                @media (prefers-contrast: high) {
                    .theme-toggle {
                        border: 1px solid currentColor;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // Ensure Font Awesome is loaded
        this.ensureFontAwesome();
        
        // Create the clean toggle button
        const toggleButton = document.createElement('button');
        toggleButton.id = 'themeToggle';
        toggleButton.className = 'theme-toggle';
        toggleButton.setAttribute('aria-label', 'Toggle theme');
        toggleButton.setAttribute('title', 'Switch between light and dark theme');
        toggleButton.innerHTML = `
            <i class="fas fa-sun" aria-hidden="true"></i>
            <i class="fas fa-moon" aria-hidden="true"></i>
        `;
        
        navActions.appendChild(toggleButton);
    }

    ensureFontAwesome() {
        // Check if Font Awesome is already loaded
        if (document.querySelector('link[href*="font-awesome"]') || 
            document.querySelector('link[href*="fontawesome"]')) {
            return;
        }

        // Add Font Awesome CSS
        const fontAwesomeLink = document.createElement('link');
        fontAwesomeLink.rel = 'stylesheet';
        fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        fontAwesomeLink.crossOrigin = 'anonymous';
        fontAwesomeLink.referrerPolicy = 'no-referrer';
        document.head.appendChild(fontAwesomeLink);
    }

    updateThemeToggle() {
        const toggleBtn = document.getElementById('themeToggle');
        if (!toggleBtn) return;

        // Add changing animation
        toggleBtn.classList.add('changing');
        setTimeout(() => toggleBtn.classList.remove('changing'), 600);

        if (this.currentTheme === 'dark') {
            toggleBtn.classList.add('dark');
            toggleBtn.setAttribute('aria-label', 'Switch to light theme');
            toggleBtn.setAttribute('title', 'Switch to light theme');
        } else {
            toggleBtn.classList.remove('dark');
            toggleBtn.setAttribute('aria-label', 'Switch to dark theme');
            toggleBtn.setAttribute('title', 'Switch to dark theme');
        }
    }

    setupSystemThemeListener() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            
            const handleSystemThemeChange = (e) => {
                if (!this.getStoredTheme()) {
                    this.applyTheme(e.matches ? 'dark' : 'light');
                }
            };

            if (mediaQuery.addEventListener) {
                mediaQuery.addEventListener('change', handleSystemThemeChange);
            } else {
                mediaQuery.addListener(handleSystemThemeChange);
            }
        }
    }

    getSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    getCurrentTheme() {
        return this.currentTheme;
    }

    setTheme(theme) {
        if (theme === 'light' || theme === 'dark') {
            this.applyTheme(theme);
        }
    }

    resetToSystemTheme() {
        try {
            localStorage.removeItem('shristilms-theme');
        } catch (e) {
            console.warn('localStorage not available');
        }
        this.applyTheme(this.getSystemTheme());
    }
}

// Brand Management System (unchanged)
class BrandManager {
    constructor() {
        this.config = window.CONFIG || {};
        this.init();
    }

    init() {
        this.updateBrandElements();
        this.makeLogoClickable();
    }

    updateBrandElements() {
        const brandNameElements = document.querySelectorAll('[data-brand="name"]');
        brandNameElements.forEach(el => {
            el.textContent = this.config.brandName || 'ShristiLMS';
        });

        const brandLogoElements = document.querySelectorAll('[data-brand="logo"]');
        brandLogoElements.forEach(el => {
            el.textContent = this.config.brandLogo || 'S';
        });

        if (document.title.includes('VidyaLMS') || document.title.includes('ShristiLMS')) {
            const newTitle = document.title
                .replace('VidyaLMS', this.config.brandName || 'ShristiLMS')
                .replace('ShristiLMS', this.config.brandName || 'ShristiLMS');
            document.title = newTitle;
        }

        const footerElements = document.querySelectorAll('[data-brand="footer"]');
        footerElements.forEach(el => {
            el.textContent = this.config.footerText || '© 2025 ShristiLMS. Empowering learners worldwide.';
        });

        this.replaceTextContent('VidyaLMS', this.config.brandName || 'ShristiLMS');
    }

    makeLogoClickable() {
        const logoContainers = document.querySelectorAll('.flex.items-center.space-x-2');
        logoContainers.forEach(container => {
            const hasLogo = container.querySelector('[data-brand="logo"]') || 
                          container.querySelector('.bg-white.rounded-full') ||
                          container.querySelector('.w-8.h-8, .w-10.h-10');
            
            if (hasLogo && !container.closest('a')) {
                const link = document.createElement('a');
                link.href = this.config.homeUrl || 'index.html';
                link.className = 'flex items-center space-x-2 hover:opacity-80 transition-opacity';
                link.title = `Go to ${this.config.brandName || 'ShristiLMS'} Home`;
                
                const containerHTML = container.innerHTML;
                container.innerHTML = '';
                link.innerHTML = containerHTML;
                container.appendChild(link);
            }
        });
    }

    replaceTextContent(oldText, newText) {
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    if (node.parentElement.tagName === 'SCRIPT' || 
                        node.parentElement.tagName === 'STYLE') {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            },
            false
        );

        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            if (node.textContent.includes(oldText)) {
                textNodes.push(node);
            }
        }

        textNodes.forEach(textNode => {
            textNode.textContent = textNode.textContent.replace(new RegExp(oldText, 'g'), newText);
        });
    }

    updateBrandElement(selector, type) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            switch(type) {
                case 'name':
                    el.textContent = this.config.brandName || 'ShristiLMS';
                    break;
                case 'logo':
                    el.textContent = this.config.brandLogo || 'S';
                    break;
                case 'footer':
                    el.textContent = this.config.footerText || '© 2025 ShristiLMS. Empowering learners worldwide.';
                    break;
            }
        });
    }
}

// Utility functions
function ensureManagersInitialized() {
    if (!window.themeManager) {
        window.themeManager = new ThemeManager();
    }
    if (!window.brandManager) {
        window.brandManager = new BrandManager();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const initManagers = () => {
        try {
            window.themeManager = new ThemeManager();
            window.brandManager = new BrandManager();
            console.log('Theme and Brand managers initialized successfully');
        } catch (error) {
            console.error('Error initializing managers:', error);
        }
    };

    if (window.CONFIG) {
        initManagers();
    } else {
        setTimeout(() => {
            if (!window.CONFIG) {
                console.warn('CONFIG not loaded, using defaults');
                window.CONFIG = {
                    brandName: 'ShristiLMS',
                    brandLogo: 'S',
                    defaultTheme: 'light'
                };
            }
            initManagers();
        }, 100);
    }
});

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (!document.hidden && window.themeManager) {
        window.themeManager.applyTheme(window.themeManager.getCurrentTheme());
    }
});

// Export for global use
if (typeof window !== 'undefined') {
    window.ThemeManager = ThemeManager;
    window.BrandManager = BrandManager;
    window.ensureManagersInitialized = ensureManagersInitialized;
}