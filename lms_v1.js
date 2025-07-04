// learning-system.js
class LearningSystem {
    constructor() {
        this.currentCourse = null;
        this.currentChapter = null;
        this.chapters = [];
        this.courseData = null;
        this.init();
    }

    init() {
        this.initializeMermaid();
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

    generateCourseCards() {
        const courseGrid = document.querySelector('.course-grid');
        if (!courseGrid) return;

        // Clear existing cards except the "coming soon" card
        const comingSoonCard = courseGrid.querySelector('.coming-soon');
        courseGrid.innerHTML = '';

        // Generate cards for all courses
        COURSE_CONFIG.getAllCourses().forEach(course => {
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

        // Add the "More Coming Soon" card at the end
        if (comingSoonCard) {
            courseGrid.appendChild(comingSoonCard);
        } else {
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

    loadCourse(courseId) {
        try {
            this.showLoading();
            
            console.log("Loading course: " + courseId);
            
            // Check if course is available
            if (!COURSE_CONFIG.isCourseAvailable(courseId)) {
                throw new Error(`Course ${courseId} is not available`);
            }

            // Get course content from configuration
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

        // Observe chapters when they're loaded
        this.observeChapters = (observer) => {
            document.querySelectorAll('.chapter').forEach(chapter => {
                observer.observe(chapter);
            });
        };

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
        
        // Mark completed chapters
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
            if (index < currentIndex) {
                tocItem.classList.add('completed');
            } else if (index > currentIndex) {
                tocItem.classList.remove('completed');
            }
        });
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
            this.observeChapters(this.scrollObserver);
        }
    }

    showCourseSelection() {
        document.getElementById('courseSelector').style.display = 'flex';
        document.getElementById('sidebar').style.display = 'none';
        document.getElementById('mainContent').classList.remove('with-sidebar');
        document.getElementById('currentTopic').textContent = 'Select a Course';
        document.getElementById('progressBar').style.width = '0%';
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
    if (learningSystem.chapters.length > 0) {
        learningSystem.navigateToChapter(learningSystem.chapters[0]);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function goBackToCourseSelection() {
    learningSystem.showCourseSelection();
    learningSystem.currentCourse = null;
    learningSystem.currentChapter = null;
    learningSystem.chapters = [];
    learningSystem.courseData = null;
    
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

// Initialize the learning system
const learningSystem = new LearningSystem();