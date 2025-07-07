// LMS JavaScript - Learning Management System
class LearningSystem {
    constructor() {
        this.currentCourse = null;
        this.currentChapter = null;
        this.chapters = [];
        this.courseData = null;
        this.completionMessageShown = false;
        this.init();
    }

    init() {
        this.initializeMermaid();
        this.setupEventListeners();
        this.showCourseSelection();
    }

    initializeMermaid() {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            flowchart: {
                curve: 'basis'
            },
            gitGraph: {
                theme: 'base',
                themeVariables: {
                    primaryColor: '#667eea',
                    primaryTextColor: '#fff',
                    primaryBorderColor: '#764ba2',
                    lineColor: '#667eea'
                }
            }
        });
    }

    setupEventListeners() {
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
            
            // Construct filename based on course ID
            const filename = `content/${courseId}_content.md`;
            
            // Load markdown content
            const response = await fetch(filename);
            
            if (!response.ok) {
                throw new Error(`Failed to load ${filename}: ${response.status} ${response.statusText}`);
            }
            
            const markdownContent = await response.text();
            
            // Parse markdown and extract chapters
            this.courseData = this.parseMarkdownIntoChapters(markdownContent, courseId);
            
            if (!this.courseData || Object.keys(this.courseData.chapters).length === 0) {
                throw new Error(`No chapters found in ${filename}`);
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

    parseMarkdownIntoChapters(markdown, courseId) {
        // Get course metadata
        const courseInfo = this.getCourseInfo(courseId);
        
        // Split markdown by H1 headers to create chapters
        const sections = markdown.split(/^# /m);
        const chapters = {};
        
        // Remove empty first section if it exists
        if (sections[0].trim() === '') {
            sections.shift();
        }
        
        sections.forEach((section, index) => {
            const lines = section.trim().split('\n');
            const title = lines[0];
            const content = this.parseMarkdown('# ' + section);
            
            const chapterId = `chapter-${index + 1}`;
            chapters[chapterId] = {
                title: title,
                content: content
            };
        });
        
        return {
            ...courseInfo,
            chapters: chapters
        };
    }

    getCourseInfo(courseId) {
        const courseInfo = {
            'git': {
                title: 'Git Version Control',
                icon: '🔄',
                description: 'Master Git workflows, branching, and collaboration'
            },
            'python': {
                title: 'Python Programming',
                icon: '🐍',
                description: 'Learn Python from basics to advanced concepts'
            }
        };
        
        return courseInfo[courseId] || {
            title: 'Unknown Course',
            icon: '📚',
            description: 'Course description not available'
        };
    }

    parseMarkdown(markdown) {
        let html = markdown;

        // Escape HTML first, but preserve special markers
        html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

        // Process special content boxes first
        html = this.processSpecialBoxes(html);

        // Process Mermaid diagrams
        html = this.processMermaidDiagrams(html);

        // Code blocks (do this before other processing)
        html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
            const languageLabel = lang ? `data-language="${lang}"` : '';
            return `<pre ${languageLabel}><code class="language-${lang || ''}">${code.trim()}</code><button class="copy-button" onclick="copyCode(this)">Copy</button></pre>`;
        });

        // Headers (order matters - do longer ones first)
        html = html.replace(/^###### (.*$)/gm, '<h6>$1</h6>');
        html = html.replace(/^##### (.*$)/gm, '<h5>$1</h5>');
        html = html.replace(/^#### (.*$)/gm, '<h4>$1</h4>');
        html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');

        // Bold and italic
        html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
        html = html.replace(/~~(.*?)~~/g, '<del>$1</del>');

        // Links
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

        // Images
        html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');

        // Inline code
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

        // Blockquotes
        html = html.replace(/^&gt; (.*$)/gm, '<blockquote>$1</blockquote>');

        // Horizontal rules
        html = html.replace(/^---$/gm, '<hr>');
        html = html.replace(/^\*\*\*$/gm, '<hr>');

        // Tables
        html = this.processMarkdownTables(html);

        // Lists
        html = this.processMarkdownLists(html);

        // Paragraphs - only wrap lines that aren't already HTML
        html = html.replace(/^([^<\n].+)$/gm, (match) => {
            return '<p>' + match + '</p>';
        });

        // Clean up multiple consecutive newlines
        html = html.replace(/\n\s*\n/g, '\n');

        return html;
    }

    processSpecialBoxes(html) {
        // Theory boxes
        html = html.replace(/:::theory\s*\n([\s\S]*?)\n:::/g, (match, content) => {
            return `<div class="theory-box">${content.trim()}</div>`;
        });

        // Practice boxes
        html = html.replace(/:::practice\s*\n([\s\S]*?)\n:::/g, (match, content) => {
            return `<div class="practice-box">${content.trim()}</div>`;
        });

        // Warning boxes
        html = html.replace(/:::warning\s*\n([\s\S]*?)\n:::/g, (match, content) => {
            return `<div class="warning-box">${content.trim()}</div>`;
        });

        // Tip boxes
        html = html.replace(/:::tip\s*\n([\s\S]*?)\n:::/g, (match, content) => {
            return `<div class="tip-box">${content.trim()}</div>`;
        });

        // Exercise boxes
        html = html.replace(/:::exercise\s*\n([\s\S]*?)\n:::/g, (match, content) => {
            return `<div class="exercise-box">${content.trim()}</div>`;
        });

        // Interactive demo boxes
        html = html.replace(/:::demo\s*\n([\s\S]*?)\n:::/g, (match, content) => {
            return `<div class="interactive-demo">${content.trim()}</div>`;
        });

        return html;
    }

    processMermaidDiagrams(html) {
        html = html.replace(/```mermaid\n([\s\S]*?)```/g, (match, diagram) => {
            return `<div class="mermaid-container"><div class="mermaid">${diagram.trim()}</div></div>`;
        });
        return html;
    }

    processMarkdownTables(html) {
        const lines = html.split('\n');
        let result = [];
        let inTable = false;
        let tableRows = [];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            if (line.match(/^\|(.+)\|$/)) {
                if (!inTable) {
                    inTable = true;
                    tableRows = [];
                }
                
                const cells = line.slice(1, -1).split('|').map(cell => cell.trim());
                
                // Check if this is a separator row
                if (cells.every(cell => cell.match(/^:?-+:?$/))) {
                    continue; // Skip separator rows
                }
                
                const isHeader = tableRows.length === 0;
                const tag = isHeader ? 'th' : 'td';
                const row = cells.map(cell => `<${tag}>${cell}</${tag}>`).join('');
                tableRows.push(`<tr>${row}</tr>`);
            } else {
                if (inTable) {
                    result.push(`<table>${tableRows.join('')}</table>`);
                    inTable = false;
                    tableRows = [];
                }
                result.push(line);
            }
        }

        if (inTable) {
            result.push(`<table>${tableRows.join('')}</table>`);
        }

        return result.join('\n');
    }

    processMarkdownLists(html) {
        const lines = html.split('\n');
        let result = [];
        let inList = false;
        let listType = null;
        let listItems = [];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            if (line.match(/^\s*\* (.+)$/)) {
                if (!inList || listType !== 'ul') {
                    if (inList) {
                        result.push(`<${listType}>${listItems.join('')}</${listType}>`);
                    }
                    inList = true;
                    listType = 'ul';
                    listItems = [];
                }
                listItems.push('<li>' + line.replace(/^\s*\* (.+)$/, '$1') + '</li>');
            } else if (line.match(/^\s*\d+\. (.+)$/)) {
                if (!inList || listType !== 'ol') {
                    if (inList) {
                        result.push(`<${listType}>${listItems.join('')}</${listType}>`);
                    }
                    inList = true;
                    listType = 'ol';
                    listItems = [];
                }
                listItems.push('<li>' + line.replace(/^\s*\d+\. (.+)$/, '$1') + '</li>');
            } else {
                if (inList) {
                    result.push(`<${listType}>${listItems.join('')}</${listType}>`);
                    inList = false;
                    listType = null;
                    listItems = [];
                }
                result.push(line);
            }
        }

        if (inList) {
            result.push(`<${listType}>${listItems.join('')}</${listType}>`);
        }

        return result.join('\n');
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
            const navbarHeight = 80;
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
                    
                    // Mark last chapter as completed when we reach it
                    if (index === this.chapters.length - 1) {
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
        
        // Check if user has scrolled to the very end
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

// Copy code functionality
function copyCode(button) {
    const codeBlock = button.previousElementSibling;
    const text = codeBlock.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        button.textContent = 'Error';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
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