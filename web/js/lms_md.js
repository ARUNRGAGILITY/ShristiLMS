// lms_md.js - Learning Management System for Markdown Content

// MarkdownRenderer class (embedded)
class MarkdownRenderer {
    constructor(options = {}) {
        this.options = {
            container: options.container || 'markdown-content',
            enableMermaid: options.enableMermaid !== false,
            enableTOC: options.enableTOC !== false,
            enableScrollspy: options.enableScrollspy !== false,
            enableSyntaxHighlight: options.enableSyntaxHighlight !== false,
            theme: options.theme || 'default',
            ...options
        };
        
        this.tocItems = [];
        this.currentSection = null;
        this.scrollObserver = null;
        this.events = {};
        
        this.init();
    }

    init() {
        this.setupContainer();
        this.setupMermaid();
        this.setupScrollspy();
    }

    setupContainer() {
        const container = document.getElementById(this.options.container);
        if (!container) {
            console.error(`Container element with id '${this.options.container}' not found`);
            return;
        }
        
        container.className = `markdown-container ${this.options.theme}-theme`;
    }

    setupMermaid() {
        if (this.options.enableMermaid && typeof mermaid !== 'undefined') {
            mermaid.initialize({
                startOnLoad: false,
                theme: 'default',
                flowchart: {
                    curve: 'basis',
                    htmlLabels: true
                }
            });
        }
    }

    setupScrollspy() {
        if (!this.options.enableScrollspy) return;

        this.scrollObserver = new IntersectionObserver((entries) => {
            let mostVisibleEntry = null;
            let maxIntersectionRatio = 0;
            
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
                    maxIntersectionRatio = entry.intersectionRatio;
                    mostVisibleEntry = entry;
                }
            });
            
            if (mostVisibleEntry) {
                this.updateActiveSection(mostVisibleEntry.target.id);
            }
        }, { 
            threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
            rootMargin: '-80px 0px -20% 0px'
        });
    }

    updateActiveSection(sectionId) {
        if (this.currentSection === sectionId) return;
        
        this.currentSection = sectionId;
        
        // Update TOC if enabled
        if (this.options.enableTOC) {
            document.querySelectorAll('.toc-item').forEach(item => {
                item.classList.remove('active');
                if (item.dataset.section === sectionId) {
                    item.classList.add('active');
                }
            });
        }
        
        // Emit event for custom handling
        this.emit('sectionChange', { sectionId, element: document.getElementById(sectionId) });
    }

    async render(markdown) {
        const container = document.getElementById(this.options.container);
        if (!container) return;

        try {
            // Show loading state
            container.innerHTML = '<div class="loading">Loading content...</div>';
            
            // Parse markdown to HTML
            const html = this.parseMarkdown(markdown);
            
            // Render to container
            container.innerHTML = html;
            
            // Post-process the rendered content
            await this.postProcess(container);
            
            // Generate TOC if enabled
            if (this.options.enableTOC) {
                this.generateTOC(container);
            }
            
            // Setup scroll observation
            this.setupScrollObservation(container);
            
            // Emit render complete event
            this.emit('renderComplete', { container, markdown });
            
        } catch (error) {
            console.error('Error rendering markdown:', error);
            container.innerHTML = `<div class="error">Error rendering content: ${error.message}</div>`;
        }
    }

    parseMarkdown(markdown) {
        let html = markdown;
        
        // Headers with proper IDs
        html = html.replace(/^(#{1,6})\s+(.*$)/gm, (match, hashes, text) => {
            const level = hashes.length;
            const cleanId = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
            return `<h${level} id="${cleanId}">${text}</h${level}>`;
        });
        
        // Bold and italic
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Code blocks with language specification
        html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
            const language = lang || 'text';
            return `<pre data-language="${language}"><code class="language-${language}">${this.escapeHtml(code.trim())}</code></pre>`;
        });
        
        // Inline code
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
        
        // Mermaid diagrams
        html = html.replace(/```mermaid\n([\s\S]*?)```/g, (match, diagram) => {
            return `<div class="mermaid-container"><div class="mermaid">${diagram.trim()}</div></div>`;
        });
        
        // Special content boxes
        html = this.parseSpecialBoxes(html);
        
        // Lists (improved)
        html = html.replace(/^[\*\-\+]\s+(.*$)/gm, '<li>$1</li>');
        html = html.replace(/^\d+\.\s+(.*$)/gm, '<li>$1</li>');
        
        // Wrap consecutive list items in ul
        html = html.replace(/(<li>.*<\/li>)(\s*<li>.*<\/li>)*/g, (match) => {
            return `<ul>${match}</ul>`;
        });
        
        // Blockquotes
        html = html.replace(/^>\s+(.*$)/gm, '<blockquote>$1</blockquote>');
        
        // Links
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
        
        // Paragraphs (improved to avoid wrapping headers and other elements)
        html = html.replace(/^(?!<[hul]|<div|<blockquote|```|>)([^\n<]+)$/gm, '<p>$1</p>');
        
        // Clean up extra line breaks
        html = html.replace(/\n\s*\n/g, '\n');
        
        return html;
    }

    parseSpecialBoxes(html) {
        // Theory boxes
        html = html.replace(/>\s*\*\*([^*]+):\*\*\s*\n((?:>\s*.*\n?)*)/g, (match, title, content) => {
            const cleanContent = content.replace(/^>\s*/gm, '').trim();
            return `<div class="theory-box">
                <h4>${title}</h4>
                ${cleanContent}
            </div>`;
        });

        // Warning boxes
        html = html.replace(/>\s*⚠️\s*\*\*([^*]+):\*\*\s*\n((?:>\s*.*\n?)*)/g, (match, title, content) => {
            const cleanContent = content.replace(/^>\s*/gm, '').trim();
            return `<div class="warning-box">
                <h4>⚠️ ${title}</h4>
                ${cleanContent}
            </div>`;
        });

        // Practice boxes
        html = html.replace(/>\s*🛠️\s*\*\*([^*]+):\*\*\s*\n((?:>\s*.*\n?)*)/g, (match, title, content) => {
            const cleanContent = content.replace(/^>\s*/gm, '').trim();
            return `<div class="practice-box">
                <h4>🛠️ ${title}</h4>
                ${cleanContent}
            </div>`;
        });

        // Tip boxes
        html = html.replace(/>\s*💡\s*\*\*([^*]+):\*\*\s*\n((?:>\s*.*\n?)*)/g, (match, title, content) => {
            const cleanContent = content.replace(/^>\s*/gm, '').trim();
            return `<div class="tip-box">
                <h4>💡 ${title}</h4>
                ${cleanContent}
            </div>`;
        });

        // Exercise boxes
        html = html.replace(/###\s*🎯\s*Exercise\s*\d*:\s*([^\n]+)\n\n([\s\S]*?)(?=\n###|\n##|\n#|$)/g, (match, title, content) => {
            const steps = content.split(/\d+\.\s*\*\*Step\s*\d+:\*\*/).slice(1);
            const stepHtml = steps.map((step, index) => 
                `<div class="exercise-step">
                    <strong>Step ${index + 1}:</strong> ${step.trim()}
                </div>`
            ).join('');
            
            return `<div class="exercise-box">
                <h4>🎯 Exercise: ${title}</h4>
                ${stepHtml}
            </div>`;
        });

        return html;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    async postProcess(container) {
        // Process Mermaid diagrams
        if (this.options.enableMermaid && typeof mermaid !== 'undefined') {
            const mermaidElements = container.querySelectorAll('.mermaid');
            for (let i = 0; i < mermaidElements.length; i++) {
                const element = mermaidElements[i];
                try {
                    const id = `mermaid-${Date.now()}-${i}`;
                    const { svg } = await mermaid.render(id, element.textContent);
                    element.innerHTML = svg;
                } catch (error) {
                    console.error('Mermaid rendering error:', error);
                    element.innerHTML = `<div class="error">Error rendering diagram</div>`;
                }
            }
        }

        // Apply syntax highlighting
        if (this.options.enableSyntaxHighlight && typeof Prism !== 'undefined') {
            Prism.highlightAllUnder(container);
        }

        // Setup animations
        this.setupAnimations(container);

        // Process interactive elements
        this.processInteractiveElements(container);
    }

    setupAnimations(container) {
        // Fade in animation for content blocks
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        // Observe all major content blocks
        container.querySelectorAll('h1, h2, h3, .theory-box, .practice-box, .warning-box, .tip-box, .exercise-box, pre').forEach(element => {
            element.classList.add('fade-in');
            observer.observe(element);
        });
    }

    processInteractiveElements(container) {
        // Process code blocks with copy buttons
        container.querySelectorAll('pre code').forEach(codeBlock => {
            const pre = codeBlock.parentElement;
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-button';
            copyBtn.innerHTML = '📋 Copy';
            copyBtn.onclick = () => this.copyToClipboard(codeBlock.textContent, copyBtn);
            
            pre.style.position = 'relative';
            pre.appendChild(copyBtn);
        });
    }

    copyToClipboard(text, button) {
        navigator.clipboard.writeText(text).then(() => {
            const originalText = button.innerHTML;
            button.innerHTML = '✅ Copied!';
            button.style.background = '#4CAF50';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
            }, 2000);
        }).catch(err => {
            console.error('Copy failed:', err);
            button.innerHTML = '❌ Failed';
            setTimeout(() => {
                button.innerHTML = '📋 Copy';
            }, 2000);
        });
    }

    generateTOC(container) {
        const headers = container.querySelectorAll('h1, h2, h3, h4');
        this.tocItems = [];
        
        headers.forEach(header => {
            const level = parseInt(header.tagName.charAt(1));
            const text = header.textContent;
            const id = header.id || text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            
            if (!header.id) {
                header.id = id;
            }
            
            this.tocItems.push({
                level,
                text,
                id,
                element: header
            });
        });
        
        this.renderTOC();
    }

    renderTOC() {
        const tocContainer = document.getElementById('toc-container');
        if (!tocContainer || this.tocItems.length === 0) return;
        
        const tocHtml = this.tocItems.map(item => 
            `<div class="toc-item toc-level-${item.level}" data-section="${item.id}">
                ${item.text}
            </div>`
        ).join('');
        
        tocContainer.innerHTML = tocHtml;
        
        // Add click handlers
        tocContainer.querySelectorAll('.toc-item').forEach(item => {
            item.addEventListener('click', () => {
                const sectionId = item.dataset.section;
                this.scrollToSection(sectionId);
            });
        });
    }

    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Account for fixed header
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({ 
                top: elementPosition, 
                behavior: 'smooth' 
            });
        }
    }

    setupScrollObservation(container) {
        if (!this.scrollObserver) return;
        
        // Observe all headers for scrollspy
        container.querySelectorAll('h1, h2, h3, h4').forEach(header => {
            this.scrollObserver.observe(header);
        });
    }

    // Event system
    on(event, callback) {
        if (!this.events) this.events = {};
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(callback);
    }

    emit(event, data) {
        if (!this.events || !this.events[event]) return;
        this.events[event].forEach(callback => callback(data));
    }

    // Theme switching
    setTheme(theme) {
        this.options.theme = theme;
        const container = document.getElementById(this.options.container);
        if (container) {
            container.className = `markdown-container ${theme}-theme`;
        }
    }
}

console.log('✅ MarkdownRenderer class defined successfully');

// MarkdownLearningSystem class
class MarkdownLearningSystem {
    constructor() {
        this.currentCourse = null;
        this.currentSection = null;
        this.markdownRenderer = null;
        this.progress = {};
        this.completionMessageShown = false;
        
        this.init();
    }

    init() {
        // Check if COURSE_CONFIG is available
        if (typeof COURSE_CONFIG === 'undefined') {
            console.error('❌ COURSE_CONFIG not found. Make sure config.js is loaded before lms_md.js');
            return;
        }

        console.log('✅ Initializing Markdown Learning System...');
        
        this.setupEventListeners();
        this.generateCourseCards();
        this.showCourseSelection();
        this.loadProgress();
    }

    setupEventListeners() {
        // Course selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.course-card')) {
                const courseCard = e.target.closest('.course-card');
                const courseId = courseCard.dataset.course;
                if (courseId) {
                    this.loadCourse(courseId);
                }
            }
        });

        // TOC navigation
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('toc-item')) {
                const sectionId = e.target.dataset.section;
                this.scrollToSection(sectionId);
            }
        });

        // Progress tracking
        this.setupProgressTracking();
    }

    generateCourseCards() {
        const courseGrid = document.querySelector('.course-grid');
        if (!courseGrid) return;

        courseGrid.innerHTML = '';

        // Get courses from config.js
        const courses = COURSE_CONFIG.getAllCourses();
        
        courses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = course.available ? 'course-card' : 'course-card coming-soon';
            courseCard.dataset.course = course.id;
            
            courseCard.innerHTML = `
                <div class="course-icon">${course.icon}</div>
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span class="difficulty">${course.difficulty}</span>
                    ${course.available ? `<span class="duration">${course.duration}</span>` : '<span class="duration">Coming Soon</span>'}
                </div>
            `;

            courseGrid.appendChild(courseCard);
        });

        // Add "More Coming Soon" card
        const moreCourses = document.createElement('div');
        moreCourses.className = 'course-card coming-soon';
        moreCourses.innerHTML = `
            <div class="course-icon">🚀</div>
            <h3>More Coming Soon</h3>
            <p>Docker, Kubernetes, AWS and more...</p>
            <div class="course-meta">
                <span class="difficulty">Coming Soon</span>
            </div>
        `;
        courseGrid.appendChild(moreCourses);
    }

    async loadCourse(courseId) {
        try {
            this.showLoading();
            
            console.log("🔄 Loading course:", courseId);
            
            // Check if course is available
            if (!COURSE_CONFIG.isCourseAvailable(courseId)) {
                throw new Error(`Course ${courseId} is not available`);
            }
            
            // Get course content
            const courseData = await COURSE_CONFIG.getCourseContent(courseId);
            
            if (!courseData || !courseData.markdownContent) {
                throw new Error(`Failed to load content for course ${courseId}`);
            }
            
            this.currentCourse = courseId;
            
            // Update navigation
            this.updateNavigation(courseData);
            
            // Initialize markdown renderer if not already done
            if (!this.markdownRenderer) {
                this.markdownRenderer = new MarkdownRenderer({
                    container: 'markdown-content',
                    ...COURSE_CONFIG.settings
                });
                
                // Listen for section changes
                this.markdownRenderer.on('sectionChange', (data) => {
                    this.onSectionChange(data.sectionId);
                });
            }
            
            // Render the markdown content
            await this.markdownRenderer.render(courseData.markdownContent);
            
            // Show course content
            this.showCourseContent();
            
            // Reset completion flag
            this.completionMessageShown = false;
            
            this.hideLoading();
            
        } catch (error) {
            console.error('❌ Error loading course:', error);
            this.showError(`Failed to load course content: ${error.message}`);
        }
    }

    updateNavigation(courseData) {
        const courseIcon = document.getElementById('courseIcon');
        const courseTitle = document.getElementById('courseTitle');
        const currentTopic = document.getElementById('currentTopic');
        
        if (courseIcon) courseIcon.textContent = courseData.icon;
        if (courseTitle) courseTitle.textContent = courseData.title;
        if (currentTopic) currentTopic.textContent = courseData.title;
    }

    onSectionChange(sectionId) {
        this.currentSection = sectionId;
        
        // Update progress
        this.updateProgress();
        
        // Save progress
        this.saveProgress();
        
        // Check if completed
        this.checkCompletion();
    }

    updateProgress() {
        const tocItems = document.querySelectorAll('.toc-item');
        const currentIndex = Array.from(tocItems).findIndex(item => 
            item.classList.contains('active')
        );
        
        if (currentIndex >= 0 && tocItems.length > 0) {
            const progress = ((currentIndex + 1) / tocItems.length) * 100;
            const progressBar = document.getElementById('progressBar');
            if (progressBar) {
                progressBar.style.width = progress + '%';
            }
        }
    }

    checkCompletion() {
        // Check if user has scrolled to the bottom
        setTimeout(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            if (scrollTop + windowHeight >= documentHeight - 100) {
                this.markCourseComplete();
            }
        }, 1000);
    }

    markCourseComplete() {
        if (this.completionMessageShown) return;
        
        this.completionMessageShown = true;
        
        // Update progress to 100%
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = '100%';
        }
        
        // Show completion message
        this.showCompletionMessage();
        
        // Save completion
        this.saveProgress();
    }

    showCompletionMessage() {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #4CAF50, #45a049);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
            z-index: 1000;
            font-weight: bold;
            animation: slideIn 0.3s ease-out;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.2em;">🎉</span>
                <span>Course Completed!</span>
            </div>
        `;
        
        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 3000);
    }

    setupProgressTracking() {
        // Track scroll position for progress
        let ticking = false;
        
        const updateScrollProgress = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.checkCompletion();
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', updateScrollProgress);
    }

    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = COURSE_CONFIG.settings.scrollOffset || 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({ 
                top: elementPosition, 
                behavior: 'smooth' 
            });
        }
    }

    showCourseSelection() {
        const courseSelector = document.getElementById('courseSelector');
        const layout = document.querySelector('.layout');
        
        if (courseSelector) {
            courseSelector.style.display = 'flex';
        }
        
        if (layout) {
            layout.style.display = 'none';
        }
        
        // Update navigation
        const courseIcon = document.getElementById('courseIcon');
        const courseTitle = document.getElementById('courseTitle');
        const currentTopic = document.getElementById('currentTopic');
        const progressBar = document.getElementById('progressBar');
        
        if (courseIcon) courseIcon.textContent = '📚';
        if (courseTitle) courseTitle.textContent = 'Interactive Learning System';
        if (currentTopic) currentTopic.textContent = 'Select a Course';
        if (progressBar) progressBar.style.width = '0%';
        
        // Reset state
        this.currentCourse = null;
        this.currentSection = null;
        this.completionMessageShown = false;
    }

    showCourseContent() {
        const courseSelector = document.getElementById('courseSelector');
        const layout = document.querySelector('.layout');
        const sidebar = document.querySelector('.sidebar');
        
        if (courseSelector) {
            courseSelector.style.display = 'none';
        }
        
        if (layout) {
            layout.style.display = 'grid';
        }
        
        if (sidebar) {
            sidebar.classList.add('show');
        }
        
        // Scroll to top after a brief delay
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }

    showLoading() {
        const loadingIndicator = document.getElementById('loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.classList.add('show');
        }
    }

    hideLoading() {
        const loadingIndicator = document.getElementById('loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.classList.remove('show');
        }
    }

    showError(message) {
        this.hideLoading();
        
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border: 2px solid #e53e3e;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            z-index: 3000;
            text-align: center;
            max-width: 400px;
        `;
        
        errorDiv.innerHTML = `
            <div style="color: #e53e3e; font-size: 2em; margin-bottom: 15px;">⚠️</div>
            <h3 style="color: #e53e3e; margin-bottom: 15px;">Error Loading Course</h3>
            <p style="margin-bottom: 20px;">${message}</p>
            <button onclick="this.parentElement.remove(); window.markdownLearningSystem.showCourseSelection();" 
                    style="background: #e53e3e; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                Back to Course Selection
            </button>
        `;
        
        document.body.appendChild(errorDiv);
    }

    // Progress persistence
    saveProgress() {
        if (!COURSE_CONFIG.settings.enableProgressSaving) return;
        
        const progressData = {
            currentCourse: this.currentCourse,
            currentSection: this.currentSection,
            completed: this.completionMessageShown,
            timestamp: Date.now()
        };
        
        try {
            localStorage.setItem('lms_progress', JSON.stringify(progressData));
        } catch (error) {
            console.warn('Failed to save progress:', error);
        }
    }

    loadProgress() {
        if (!COURSE_CONFIG.settings.enableProgressSaving) return;
        
        try {
            const savedProgress = localStorage.getItem('lms_progress');
            if (savedProgress) {
                this.progress = JSON.parse(savedProgress);
                console.log('📊 Loaded saved progress:', this.progress);
            }
        } catch (error) {
            console.warn('Failed to load progress:', error);
        }
    }

    // Theme switching
    setTheme(theme) {
        if (this.markdownRenderer) {
            this.markdownRenderer.setTheme(theme);
        }
    }

    // Utility methods
    exportProgress() {
        return {
            currentCourse: this.currentCourse,
            progress: this.progress,
            timestamp: Date.now()
        };
    }

    clearProgress() {
        this.progress = {};
        localStorage.removeItem('lms_progress');
        console.log('🧹 Progress cleared');
    }
}

console.log('✅ MarkdownLearningSystem class defined successfully');

// Global functions for HTML onclick handlers
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBackToCourseSelection() {
    if (window.markdownLearningSystem) {
        window.markdownLearningSystem.showCourseSelection();
    }
}

// Initialize when DOM is loaded (if not already initialized)
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM loaded...');
    if (!window.markdownLearningSystem) {
        console.log('🔄 Auto-initializing Markdown Learning System...');
        setTimeout(() => {
            if (window.initializeSystem) {
                window.initializeSystem();
            }
        }, 100);
    }
});

// Attach to window for global access
window.MarkdownLearningSystem = MarkdownLearningSystem;

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MarkdownLearningSystem;
}

console.log('✅ MarkdownLearningSystem class loaded and attached to window');