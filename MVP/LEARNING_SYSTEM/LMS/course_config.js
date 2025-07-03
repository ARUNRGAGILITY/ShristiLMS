// config.js - Course Configuration
const COURSE_CONFIG = {
    // Available courses and their metadata
    courses: {
        git: {
            id: 'git',
            title: 'Git Version Control',
            icon: '🔧',
            description: 'Master Git and version control fundamentals',
            difficulty: 'Beginner',
            duration: '11 Chapters',
            available: true,
            contentVariable: 'GIT_CONTENT' // Variable name that contains the course data
        },
        python: {
            id: 'python',
            title: 'Python Programming',
            icon: '🐍',
            description: 'Learn Python from basics to advanced concepts',
            difficulty: 'Beginner',
            duration: '12 Chapters',
            available: true,
            contentVariable: 'PYTHON_CONTENT'
        },
        java: {
            id: 'java',
            title: 'Java Programming',
            icon: '☕',
            description: 'Object-oriented programming with Java',
            difficulty: 'Intermediate',
            duration: '15 Chapters',
            available: false, // Set to true when content is ready
            contentVariable: 'JAVA_CONTENT'
        },
        javascript: {
            id: 'javascript',
            title: 'JavaScript Programming',
            icon: '🟨',
            description: 'Modern JavaScript development',
            difficulty: 'Beginner',
            duration: '14 Chapters',
            available: false,
            contentVariable: 'JAVASCRIPT_CONTENT'
        },
        react: {
            id: 'react',
            title: 'React Framework',
            icon: '⚛️',
            description: 'Build modern web applications with React',
            difficulty: 'Intermediate',
            duration: '16 Chapters',
            available: false,
            contentVariable: 'REACT_CONTENT'
        },
        nodejs: {
            id: 'nodejs',
            title: 'Node.js Backend',
            icon: '🟢',
            description: 'Server-side JavaScript with Node.js',
            difficulty: 'Intermediate',
            duration: '13 Chapters',
            available: false,
            contentVariable: 'NODEJS_CONTENT'
        }
    },

    // System settings
    settings: {
        defaultCourse: 'git',
        enableProgressSaving: true,
        animationDuration: 300,
        scrollOffset: 80
    },

    // Get course content by ID
    getCourseContent: function(courseId) {
        const course = this.courses[courseId];
        if (!course || !course.available) {
            return null;
        }

        // Get the content from the global variable
        const contentVariable = course.contentVariable;
        if (window[contentVariable]) {
            return window[contentVariable];
        }

        console.error(`Content variable ${contentVariable} not found for course ${courseId}`);
        return null;
    },

    // Get available courses for display
    getAvailableCourses: function() {
        return Object.values(this.courses).filter(course => course.available);
    },

    // Get all courses (including unavailable ones)
    getAllCourses: function() {
        return Object.values(this.courses);
    },

    // Check if course is available
    isCourseAvailable: function(courseId) {
        const course = this.courses[courseId];
        return course && course.available;
    }
};