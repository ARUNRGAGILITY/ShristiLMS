/**
 * courses.js - Course Configuration
 * 
 * This file contains all course data and utility functions for the VidyaLMS platform.
 * Each course object includes metadata, prerequisites, learning outcomes, and instructor information.
 * 
 * @author VidyaLMS Team
 * @version 1.0
 */

// ===== COURSE DATA =====
// Array of all available courses with complete metadata
const courses = [
    {
        id: 'ai-foundations',
        name: 'AI',
        description: 'Master AI fundamentals — machine learning, neural networks, and deep learning basics.',
        duration: '8 weeks',
        type: 'Foundation',
        difficulty: 'Beginner',
        modules: 12,
        prerequisites: [],
        learningOutcomes: [
            'Understand core AI concepts and terminology',
            'Learn machine learning algorithms and applications',
            'Explore neural networks and deep learning basics',
            'Hands-on experience with AI tools and frameworks'
        ],
        instructor: 'Dr. Sarah Johnson',
        rating: 4.8,
        enrollments: 2500
    },
    {
        id: 'programming-foundations',
        name: 'Programming',
        description: 'Build programming foundations — algorithms, data structures, and problem-solving skills.',
        duration: '6 weeks',
        type: 'Foundation',
        difficulty: 'Beginner',
        modules: 10,
        prerequisites: [],
        learningOutcomes: [
            'Understand fundamental programming concepts',
            'Learn algorithms and data structures',
            'Develop problem-solving skills',
            'Write efficient and clean code'
        ],
        instructor: 'Prof. Michael Chen',
        rating: 4.9,
        enrollments: 3200
        },
    {
        id: 'python-programming',
        name: 'Python',
        description: 'Learn Python programming — from basics to advanced libraries, frameworks, and real-world apps.',
        duration: '10 weeks',
        type: 'Programming',
        difficulty: 'Intermediate',
        modules: 15,
        prerequisites: ['programming-foundations'],
        learningOutcomes: [
            'Master Python syntax and core concepts',
            'Work with Python libraries and frameworks',
            'Build real-world Python applications',
            'Understand object-oriented programming in Python'
        ],
        instructor: 'Emily Rodriguez',
        rating: 4.7,
        enrollments: 2800
    },
    {
        id: 'java-programming',
        name: 'Java ',
        description: 'Learn core Java — from basics to advanced OOP, collections, and enterprise dev.',
        duration: '12 weeks',
        type: 'Programming',
        difficulty: 'Intermediate',
        modules: 18,
        prerequisites: ['programming-foundations'],
        learningOutcomes: [
            'Master Java programming fundamentals',
            'Understand object-oriented programming principles',
            'Work with Java collections and frameworks',
            'Build enterprise-grade applications'
        ],
        instructor: 'David Kumar',
        rating: 4.6,
        enrollments: 2100
    },
    {
        id: 'javascript-programming',
        name: 'JavaScript ',
        description: 'Master modern JS — ES6+, DOM, async programming, and frameworks.',
        duration: '8 weeks',
        type: 'Programming',
        difficulty: 'Intermediate',
        modules: 14,
        prerequisites: ['programming-foundations'],
        learningOutcomes: [
            'Master modern JavaScript features',
            'Understand asynchronous programming',
            'Manipulate DOM and handle events',
            'Work with JavaScript frameworks'
        ],
        instructor: 'Lisa Thompson',
        rating: 4.8,
        enrollments: 3500
    },
    {
        id: 'typescript-programming',
        name: 'TypeScript',
        description: 'Build type-safe JS apps with TypeScript — advanced features and tooling.',
        duration: '6 weeks',
        type: 'Programming',
        difficulty: 'Advanced',
        modules: 12,
        prerequisites: ['javascript-programming'],
        learningOutcomes: [
            'Understand TypeScript type system',
            'Convert JavaScript projects to TypeScript',
            'Use advanced TypeScript features',
            'Build scalable applications with TypeScript'
        ],
        instructor: 'Ryan Wilson',
        rating: 4.5,
        enrollments: 1800
    },
    {
        id: 'fullstack-development',
        name: 'Full Stack Development',
        description: 'Build complete web apps — frontend, backend, databases, and deployment.',
        duration: '16 weeks',
        type: 'Specialization',
        difficulty: 'Advanced',
        modules: 24,
        prerequisites: ['javascript-programming', 'python-programming'],
        learningOutcomes: [
            'Build complete web applications',
            'Master frontend and backend technologies',
            'Work with databases and APIs',
            'Deploy applications to production'
        ],
        instructor: 'Alex Martinez',
        rating: 4.9,
        enrollments: 1500
    },
    {
        id: 'devops',
        name: 'DevOps',
        description: 'Master CI/CD, containers, orchestration, and cloud deployment.',
        duration: '12 weeks',
        type: 'Specialization',
        difficulty: 'Advanced',
        modules: 20,
        prerequisites: ['programming-foundations'],
        learningOutcomes: [
            'Understand DevOps principles and practices',
            'Implement CI/CD pipelines',
            'Work with containers and orchestration',
            'Deploy applications to cloud platforms'
        ],
        instructor: 'Sophie Brown',
        rating: 4.7,
        enrollments: 1200
    },
    {
        id: 'data-science',
        name: 'Data Science',
        description: 'Master data science pipeline — statistics, ML, and data-driven insights with Python.',
        duration: '12 weeks',
        type: 'Foundation',
        difficulty: 'Intermediate',
        modules: 16,
        prerequisites: ['programming-foundations'],
        learningOutcomes: [
            'Master statistical analysis and probability theory',
            'Learn data manipulation with Pandas and NumPy',
            'Build machine learning models with Scikit-learn',
            'Create compelling data visualizations',
            'Conduct A/B testing and hypothesis testing',
            'Deploy data science projects to production'
        ],
        instructor: 'Samanta Green',
        rating: 4.9,
        enrollments: 1850
    }
];

// ===== UTILITY FUNCTIONS =====

/**
 * Retrieves a course by its unique identifier
 * @param {string} id - The course ID to search for
 * @returns {Object|null} Course object if found, null otherwise
 */
function getCourseById(id) {
    return courses.find(course => course.id === id);
}

/**
 * Filters courses by their type/category
 * @param {string} type - Course type ('Foundation', 'Programming', 'Specialization')
 * @returns {Array} Array of courses matching the type
 */
function getCoursesByType(type) {
    return courses.filter(course => course.type === type);
}

/**
 * Filters courses by difficulty level
 * @param {string} difficulty - Difficulty level ('Beginner', 'Intermediate', 'Advanced')
 * @returns {Array} Array of courses matching the difficulty
 */
function getCoursesByDifficulty(difficulty) {
    return courses.filter(course => course.difficulty === difficulty);
}

/**
 * Gets all prerequisite courses for a given course
 * @param {string} courseId - ID of the course to get prerequisites for
 * @returns {Array} Array of prerequisite course objects
 */
function getPrerequisiteCourses(courseId) {
    const course = getCourseById(courseId);
    if (!course || !course.prerequisites) return [];
    
    return course.prerequisites.map(prereqId => getCourseById(prereqId));
}

// ===== MODULE EXPORTS =====
// Export functions for use in other files (Node.js compatibility)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        courses, 
        getCourseById, 
        getCoursesByType, 
        getCoursesByDifficulty,
        getPrerequisiteCourses 
    };
}