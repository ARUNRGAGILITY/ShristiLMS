// config.js
console.log('Loading config.js...');

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
            contentVariable: 'TEST_CONTENT'
        },
        git: {
            id: 'git',
            title: 'Git Version Control',
            icon: '🔧',
            description: 'Master Git and version control fundamentals',
            difficulty: 'Beginner',
            duration: '6 Chapters',
            available: true,
            contentVariable: 'GIT_CONTENT'
        }
    },

    settings: {
        defaultCourse: 'test',
        enableProgressSaving: true,
        animationDuration: 300,
        scrollOffset: 80
    },

    getCourseContent: function(courseId) {
        console.log('🔍 getCourseContent called with courseId:', courseId);
        
        const course = this.courses[courseId];
        console.log('📋 Found course config:', course);
        
        if (!course || !course.available) {
            console.log('❌ Course not available:', courseId);
            return null;
        }

        const contentVariable = course.contentVariable;
        console.log('🔍 Looking for content variable:', contentVariable);
        
        // Debug: List all global variables that contain 'CONTENT'
        const contentVars = Object.keys(window).filter(key => key.includes('CONTENT'));
        console.log('🌐 Available CONTENT variables:', contentVars);
        
        // Try multiple ways to access the variable
        console.log('🔍 Direct window access:', window[contentVariable]);
        console.log('🔍 Global this access:', this[contentVariable]);
        console.log('🔍 globalThis access:', globalThis[contentVariable]);
        
        if (window[contentVariable]) {
            console.log('✅ Found content variable successfully:', contentVariable);
            return window[contentVariable];
        }

        console.error('❌ Content variable not found:', contentVariable);
        return null;
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
    }
};

// Attach to window
window.COURSE_CONFIG = COURSE_CONFIG;

console.log('✅ COURSE_CONFIG loaded successfully');
console.log('📚 Available courses:', COURSE_CONFIG.getAllCourses().map(c => c.id));