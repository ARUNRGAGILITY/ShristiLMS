// courses.js - Course Configuration
const courses = [
    {
        id: 'ai-foundations',
        name: 'AI Foundations',
        description: 'Learn the fundamentals of Artificial Intelligence including machine learning, neural networks, and deep learning concepts. Perfect for beginners starting their AI journey.',
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
        name: 'Programming Foundations',
        description: 'Master the core concepts of programming including algorithms, data structures, and problem-solving techniques. Essential foundation for any programming language.',
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
        name: 'Python Programming',
        description: 'Comprehensive Python course covering syntax, libraries, frameworks, and real-world applications. From basics to advanced Python development.',
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
        name: 'Java Programming',
        description: 'Learn Java from basics to advanced concepts including OOP, collections, and enterprise development. Industry-standard programming language.',
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
        name: 'JavaScript Programming',
        description: 'Master modern JavaScript including ES6+, DOM manipulation, async programming, and frameworks. Essential for web development.',
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
        name: 'TypeScript Programming',
        description: 'Learn TypeScript for type-safe JavaScript development with advanced features and tooling. Perfect for large-scale applications.',
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
        description: 'Complete web development course covering frontend, backend, databases, and deployment. Build modern web applications end-to-end.',
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
        description: 'Learn DevOps practices including CI/CD, containerization, orchestration, and cloud deployment. Modern software development lifecycle.',
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
    }
];

// Function to get course by ID
function getCourseById(id) {
    return courses.find(course => course.id === id);
}

// Function to get courses by type
function getCoursesByType(type) {
    return courses.filter(course => course.type === type);
}

// Function to get courses by difficulty
function getCoursesByDifficulty(difficulty) {
    return courses.filter(course => course.difficulty === difficulty);
}

// Function to get prerequisite courses
function getPrerequisiteCourses(courseId) {
    const course = getCourseById(courseId);
    if (!course || !course.prerequisites) return [];
    
    return course.prerequisites.map(prereqId => getCourseById(prereqId));
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        courses, 
        getCourseById, 
        getCoursesByType, 
        getCoursesByDifficulty,
        getPrerequisiteCourses 
    };
}