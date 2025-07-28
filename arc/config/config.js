console.log('Loading config.js for Markdown System...');

const COURSE_CONFIG = {
    courses: {
        test: {
            id: 'test',
            title: 'Test Course',
            icon: '🧪',
            description: 'Simple test course for debugging',
            difficulty: 'Beginner',
            duration: '2 Chapters',
            available: true,
            contentType: 'markdown',
            contentPath: '../content/test_content.md'
        },
        git: {
            id: 'git',
            title: 'Git Version Control',
            icon: '🔧',
            description: 'Master Git and version control fundamentals',
            difficulty: 'Beginner',
            duration: '11 Chapters',
            available: true,
            contentType: 'markdown',
            contentPath: '../content/git_content.md'
        },
        python: {
            id: 'python',
            title: 'Python Programming',
            icon: '🐍',
            description: 'Master Python programming from basics to advanced',
            difficulty: 'Beginner',
            duration: '12 Chapters',
            available: true,
            contentType: 'markdown',
            contentPath: 'content/python_content.md'
        }
    },

    settings: {
        defaultCourse: 'git',
        enableProgressSaving: true,
        animationDuration: 300,
        scrollOffset: 80,
        enableMermaid: true,
        enableTOC: true,
        enableScrollspy: true,
        enableSyntaxHighlight: true,
        theme: 'default'
    },

    // Cache for loaded content
    contentCache: {},

    // Load content using XMLHttpRequest to avoid CORS issues
    loadMarkdownFile: function(filePath) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', filePath, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    } else {
                        reject(new Error(`Failed to load ${filePath}: ${xhr.status}`));
                    }
                }
            };
            xhr.send();
        });
    },

    async getCourseContent(courseId) {
        console.log('🔍 getCourseContent called with courseId:', courseId);
        
        const course = this.courses[courseId];
        console.log('📋 Found course config:', course);
        
        if (!course || !course.available) {
            console.log('❌ Course not available:', courseId);
            return null;
        }

        // Check cache first
        if (this.contentCache[courseId]) {
            console.log('✅ Found cached content for:', courseId);
            return this.contentCache[courseId];
        }

        try {
            console.log('📥 Loading content from:', course.contentPath);
            const markdownContent = await this.loadMarkdownFile(course.contentPath);
            
            console.log('✅ Successfully loaded markdown content:', markdownContent.length, 'characters');
            
            // Cache the content
            this.contentCache[courseId] = {
                ...course,
                markdownContent: markdownContent
            };
            
            return this.contentCache[courseId];
            
        } catch (error) {
            console.error('❌ Error loading course content:', error);
            return null;
        }
    },

    getAvailableCourses: function() {
        return Object.values(this.courses).filter(course => course.available);
    },

    getAllCourses: function() {
        return Object.values(this.courses);
    },

    isCourseAvailable: function(courseId) {
        const course = this.courses[courseId];
        const available = course && course.available;
        console.log(`🔍 Course ${courseId} available:`, available);
        return available;
    },

    // Clear cache - useful for development
    clearCache: function() {
        this.contentCache = {};
        console.log('🧹 Content cache cleared');
    },

    // Get course metadata without loading content
    getCourseMetadata: function(courseId) {
        const course = this.courses[courseId];
        if (!course) return null;
        
        return {
            id: course.id,
            title: course.title,
            icon: course.icon,
            description: course.description,
            difficulty: course.difficulty,
            duration: course.duration,
            available: course.available
        };
    }
};

// Attach to window
window.COURSE_CONFIG = COURSE_CONFIG;

console.log('✅ COURSE_CONFIG loaded successfully');
console.log('📚 Available courses:', COURSE_CONFIG.getAllCourses().map(c => `${c.icon} ${c.id}`));

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COURSE_CONFIG;
}