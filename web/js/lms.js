// lms.js - Updated to use config.js and fix progress marking
class LearningSystem {
    constructor() {
        this.currentCourse = null;
        this.currentChapter = null;
        this.chapters = [];
        this.courseData = null;
        this.contentLoadingPromises = new Map();
        this.init();
    }

    init() {
        // Check if COURSE_CONFIG is available
        if (typeof COURSE_CONFIG === 'undefined') {
            console.error('❌ COURSE_CONFIG not found. Make sure config.js is loaded before lms.js');
            return;
        }

        this.initializeMermaid();
        this.setupContentLoaders();
        this.setupEventListeners();
        this.generateCourseCards();
        this.showCourseSelection();
    }

    initializeMermaid() {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            flowchart: {
                curve: 'basis'
            }
        });
    }

    setupContentLoaders() {
        // Listen for Python content ready event
        window.addEventListener('pythonContentReady', (event) => {
            console.log('Python content loaded successfully!');
            this.contentLoadingPromises.set('python', Promise.resolve(event.detail.content));
        });

        // Check if other content is already available
        if (typeof TEST_CONTENT !== 'undefined') {
            this.contentLoadingPromises.set('test', Promise.resolve(TEST_CONTENT));
        }
        
        if (typeof GIT_CONTENT !== 'undefined') {
            this.contentLoadingPromises.set('git', Promise.resolve(GIT_CONTENT));
        }

        // Check if Python content is already loaded
        if (typeof PYTHON_CONTENT !== 'undefined' && Object.keys(PYTHON_CONTENT.chapters || {}).length > 0) {
            this.contentLoadingPromises.set('python', Promise.resolve(PYTHON_CONTENT));
        }
    }

    generateCourseCards() {
        const courseGrid = document.querySelector('.course-grid');
        if (!courseGrid) return;

        courseGrid.innerHTML = '';

        // Get courses from config.js instead of hardcoded array
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

    setupEventListeners() {
        // Course selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.course-card') && !e.target.closest('.coming-soon')) {
                const courseCard = e.target.closest('.course-card');
                const courseId = courseCard.dataset.course;
                this.loadCourse(courseId);
            }
        });

        // Table of contents navigation
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('toc-item')) {
                const chapterId = e.target.dataset.chapter;
                this.navigateToChapter(chapterId);
            }
        });

        // Scroll tracking
        this.setupScrollTracking();
    }

    async loadCourse(courseId) {
        try {
            this.showLoading();
            
            console.log("Loading course: " + courseId);
            
            // Check if course is available using config
            if (!COURSE_CONFIG.isCourseAvailable(courseId)) {
                throw new Error(`Course ${courseId} is not available`);
            }
            
            // Wait for content to be available
            await this.waitForContent(courseId);
            
            // Get course content using config
            this.courseData = COURSE_CONFIG.getCourseContent(courseId);
            
            if (!this.courseData) {
                throw new Error(`Course content not found for ${courseId}`);
            }
            
            this.currentCourse = courseId;
            this.chapters = Object.keys(this.courseData.chapters);
            
            this.updateNavigation();
            this.generateTableOfContents();
            this.renderCourseContent();
            this.showCourseContent();
            
            this.hideLoading();
        } catch (error) {
            console.error('Error loading course:', error);
            this.showError(`Failed to load course content: ${error.message}`);
        }
    }

    async waitForContent(courseId) {
        const maxWaitTime = 10000; // 10 seconds
        const startTime = Date.now();

        while (Date.now() - startTime < maxWaitTime) {
            // Check if content is ready
            if (this.contentLoadingPromises.has(courseId)) {
                return await this.contentLoadingPromises.get(courseId);
            }

            // For Python, check if the content is being loaded
            if (courseId === 'python') {
                if (typeof PYTHON_CONTENT !== 'undefined') {
                    // If chapters are being loaded dynamically, wait a bit
                    if (Object.keys(PYTHON_CONTENT.chapters || {}).length === 0) {
                        console.log('Waiting for Python chapters to load...');
                        await new Promise(resolve => setTimeout(resolve, 500));
                        continue;
                    } else {
                        // Chapters are loaded
                        this.contentLoadingPromises.set('python', Promise.resolve(PYTHON_CONTENT));
                        return PYTHON_CONTENT;
                    }
                }
            }

            await new Promise(resolve => setTimeout(resolve, 100));
        }

        throw new Error(`Timeout waiting for ${courseId} content to load`);
    }

    updateNavigation() {
        const courseIcon = document.getElementById('courseIcon');
        const courseTitle = document.getElementById('courseTitle');
        const currentTopic = document.getElementById('currentTopic');
        
        courseIcon.textContent = this.courseData.icon;
        courseTitle.textContent = this.courseData.title;
        currentTopic.textContent = this.courseData.chapters[this.chapters[0]].title;
    }

    generateTableOfContents() {
        const tocContainer = document.getElementById('tocContainer');
        tocContainer.innerHTML = '';
        
        this.chapters.forEach((chapterId, index) => {
            const chapter = this.courseData.chapters[chapterId];
            const tocItem = document.createElement('div');
            tocItem.className = 'toc-item';
            tocItem.dataset.chapter = chapterId;
            tocItem.textContent = `${index + 1}. ${chapter.title}`;
            
            if (index === 0) {
                tocItem.classList.add('active');
                this.currentChapter = chapterId;
            }
            
            tocContainer.appendChild(tocItem);
        });
    }

    renderCourseContent() {
        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = '';
        
        this.chapters.forEach(chapterId => {
            const chapter = this.courseData.chapters[chapterId];
            const chapterElement = document.createElement('div');
            chapterElement.className = 'chapter';
            chapterElement.id = chapterId;
            chapterElement.innerHTML = chapter.content;
            
            mainContent.appendChild(chapterElement);
        });
        
        // Re-initialize Mermaid for new content
        mermaid.init();
        
        // Setup fade-in animations
        this.setupFadeInAnimations();
    }

    navigateToChapter(chapterId) {
        const element = document.getElementById(chapterId);
        if (element) {
            const navbarHeight = 70;
            const elementPosition = element.offsetTop - navbarHeight;
            window.scrollTo({ 
                top: elementPosition, 
                behavior: 'smooth' 
            });
        }
    }

    setupScrollTracking() {
        const observer = new IntersectionObserver((entries) => {
            let mostVisibleEntry = null;
            let maxIntersectionRatio = 0;
            
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
                    maxIntersectionRatio = entry.intersectionRatio;
                    mostVisibleEntry = entry;
                }
            });
            
            if (mostVisibleEntry) {
                const chapterId = mostVisibleEntry.target.id;
                this.updateActiveChapter(chapterId);
            }
        }, { 
            threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
            rootMargin: '-80px 0px -20% 0px'
        });

        // Store observer for later use
        this.scrollObserver = observer;
    }

    updateActiveChapter(chapterId) {
        if (this.currentChapter === chapterId) return;
        
        this.currentChapter = chapterId;
        
        // Update current topic
        if (this.courseData && this.courseData.chapters[chapterId]) {
            document.getElementById('currentTopic').textContent = 
                this.courseData.chapters[chapterId].title;
        }
        
        // Update progress
        this.updateProgress();
        
        // Update active TOC item
        document.querySelectorAll('.toc-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.chapter === chapterId) {
                item.classList.add('active');
            }
        });
        
        // Mark completed chapters (including the last one)
        this.markCompletedChapters();
    }

    updateProgress() {
        const currentIndex = this.chapters.indexOf(this.currentChapter);
        const progress = ((currentIndex + 1) / this.chapters.length) * 100;
        document.getElementById('progressBar').style.width = progress + '%';
    }

    markCompletedChapters() {
        const currentIndex = this.chapters.indexOf(this.currentChapter);
        
        this.chapters.forEach((chapterId, index) => {
            const tocItem = document.querySelector(`[data-chapter="${chapterId}"]`);
            if (tocItem) {
                // Mark as completed if it's before current chapter
                if (index < currentIndex) {
                    tocItem.classList.add('completed');
                    tocItem.classList.remove('active');
                } 
                // Mark current chapter as active
                else if (index === currentIndex) {
                    tocItem.classList.add('active');
                    tocItem.classList.remove('completed');
                    
                    // FIXED: Mark last chapter as completed when we reach it
                    if (index === this.chapters.length - 1) {
                        // Add a slight delay to show completion of the last chapter
                        setTimeout(() => {
                            tocItem.classList.add('completed');
                        }, 1000);
                    }
                } 
                // Remove completed and active from future chapters
                else {
                    tocItem.classList.remove('completed', 'active');
                }
            }
        });
        
        // FIXED: Additional check for when user has scrolled to the very end
        this.checkIfAtEnd();
    }

    checkIfAtEnd() {
        // Check if user has scrolled to the bottom of the page
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // If we're near the bottom (within 100px), mark the last chapter as completed
        if (scrollTop + windowHeight >= documentHeight - 100) {
            const lastChapterId = this.chapters[this.chapters.length - 1];
            const lastTocItem = document.querySelector(`[data-chapter="${lastChapterId}"]`);
            
            if (lastTocItem && this.currentChapter === lastChapterId) {
                lastTocItem.classList.add('completed');
                
                // Update progress to 100%
                document.getElementById('progressBar').style.width = '100%';
                
                // Show completion message
                this.showCompletionMessage();
            }
        }
    }

    showCompletionMessage() {
        // Only show once per course load
        if (this.completionMessageShown) return;
        this.completionMessageShown = true;
        
        // Create completion notification
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

    setupFadeInAnimations() {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.chapter').forEach(chapter => {
            fadeObserver.observe(chapter);
        });

        // Start observing for scroll tracking
        if (this.scrollObserver) {
            document.querySelectorAll('.chapter').forEach(chapter => {
                this.scrollObserver.observe(chapter);
            });
        }
    }

    showCourseSelection() {
        document.getElementById('courseSelector').style.display = 'flex';
        document.getElementById('sidebar').style.display = 'none';
        document.getElementById('mainContent').classList.remove('with-sidebar');
        document.getElementById('currentTopic').textContent = 'Select a Course';
        document.getElementById('progressBar').style.width = '0%';
        
        // Reset completion flag
        this.completionMessageShown = false;
    }

    showCourseContent() {
        document.getElementById('courseSelector').style.display = 'none';
        document.getElementById('sidebar').style.display = 'block';
        document.getElementById('mainContent').classList.add('with-sidebar');
        
        // Scroll to first chapter
        setTimeout(() => {
            this.navigateToChapter(this.chapters[0]);
        }, 100);
    }

    showLoading() {
        document.getElementById('loadingIndicator').classList.add('show');
    }

    hideLoading() {
        document.getElementById('loadingIndicator').classList.remove('show');
    }

    showError(message) {
        this.hideLoading();
        
        // Create a better error display
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
            <button onclick="this.parentElement.remove(); learningSystem.showCourseSelection();" 
                    style="background: #e53e3e; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                Back to Course Selection
            </button>
        `;
        
        document.body.appendChild(errorDiv);
    }
}

// Global functions
function scrollToTop() {
    if (window.learningSystem && window.learningSystem.chapters.length > 0) {
        window.learningSystem.navigateToChapter(window.learningSystem.chapters[0]);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function goBackToCourseSelection() {
    if (!window.learningSystem) return;
    
    window.learningSystem.showCourseSelection();
    window.learningSystem.currentCourse = null;
    window.learningSystem.currentChapter = null;
    window.learningSystem.chapters = [];
    window.learningSystem.courseData = null;
    
    // Reset navigation
    document.getElementById('courseIcon').textContent = '📚';
    document.getElementById('courseTitle').textContent = 'Interactive Learning System';
    document.getElementById('currentTopic').textContent = 'Select a Course';
    document.getElementById('progressBar').style.width = '0%';
}

// Interactive demo functions (for courses that need them)
function showStatus(type) {
    const output = document.getElementById('statusOutput');
    if (!output) return;
    
    const statuses = {
        'clean': 'On branch main<br>nothing to commit, working tree clean',
        'modified': 'On branch main<br>Changes not staged for commit:<br>&nbsp;&nbsp;modified:   index.html<br>&nbsp;&nbsp;modified:   styles.css',
        'staged': 'On branch main<br>Changes to be committed:<br>&nbsp;&nbsp;modified:   index.html<br>&nbsp;&nbsp;new file:   styles.css',
        'committed': 'On branch main<br>nothing to commit, working tree clean<br><br>[main 1a2b3c4] Update homepage design<br>&nbsp;2 files changed, 15 insertions(+), 3 deletions(-)'
    };
    output.innerHTML = statuses[type] || statuses['clean'];
}

function showBranch(stage) {
    const output = document.getElementById('branchOutput');
    if (!output) return;
    
    const stages = {
        'initial': 'main: A --- B --- C',
        'branch': 'main: A --- B --- C<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\<br>feature:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C',
        'commits': 'main: A --- B --- C<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\<br>feature:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D --- E',
        'merge': 'main: A --- B --- C -------- F<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<br>feature:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D --- E'
    };
    output.innerHTML = stages[stage] || stages['initial'];
}

// Note: LearningSystem will be initialized from index.html after all dependencies are loaded