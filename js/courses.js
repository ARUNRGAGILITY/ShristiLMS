// courses.js - Course Configuration
const courses = [
    {
        id: 'ai-foundations',
        name: 'AI Foundations',
        description: 'Master AI fundamentals, machine learning, and neural networks. Build a solid foundation for your AI career with hands-on projects and real-world applications.',
        duration: '8 weeks',
        type: 'Foundation',
        difficulty: 'Beginner',
        modules: 6,
        prerequisites: [],
        learningOutcomes: [
            'Understand core AI concepts and terminology',
            'Learn machine learning algorithms and applications',
            'Explore neural networks and deep learning basics',
            'Hands-on experience with AI tools and frameworks'
        ],
        instructor: 'Emmanuel Muttavanchery',
        rating: 4.8,
        enrollments: 2500
    },
    {
        id: 'programming-foundations',
        name: 'Programming Foundations',
        description: 'Learn core programming concepts, algorithms, and problem-solving techniques. Essential foundation for any programming language with practical coding exercises.',
        duration: '6 weeks',
        type: 'Foundation',
        difficulty: 'Beginner',
        modules: 6,
        prerequisites: [],
        learningOutcomes: [
            'Understand fundamental programming concepts',
            'Learn algorithms and data structures',
            'Develop problem-solving skills',
            'Write efficient and clean code'
        ],
        instructor: 'Emmanuel Muttavanchery',
        rating: 4.9,
        enrollments: 3200
    },
    {
        id: 'python-programming',
        name: 'Python Programming',
        description: 'Master Python from basics to advanced development with real-world applications. Learn syntax, libraries, and build practical projects that showcase your skills.',
        duration: '10 weeks',
        type: 'Programming',
        difficulty: 'Intermediate',
        modules: 6,
        prerequisites: ['programming-foundations'],
        learningOutcomes: [
            'Master Python syntax and core concepts',
            'Work with Python libraries and frameworks',
            'Build real-world Python applications',
            'Understand object-oriented programming in Python'
        ],
        instructor: 'Emmanuel Muttavanchery',
        rating: 4.7,
        enrollments: 2800
    },
    {
        id: 'java-programming',
        name: 'Java Programming',
        description: 'Learn Java from basics to enterprise development with industry-standard practices. Master OOP, collections, and build scalable applications.',
        duration: '12 weeks',
        type: 'Programming',
        difficulty: 'Intermediate',
        modules: 6,
        prerequisites: ['programming-foundations'],
        learningOutcomes: [
            'Master Java programming fundamentals',
            'Understand object-oriented programming principles',
            'Work with Java collections and frameworks',
            'Build enterprise-grade applications'
        ],
        instructor: 'Emmanuel Muttavanchery',
        rating: 4.6,
        enrollments: 2100
    },
    {
        id: 'javascript-programming',
        name: 'JavaScript Programming',
        description: 'Master modern JavaScript with ES6+, DOM manipulation, and async programming. Essential for web development and dynamic applications.',
        duration: '8 weeks',
        type: 'Programming',
        difficulty: 'Intermediate',
        modules: 6,
        prerequisites: ['programming-foundations'],
        learningOutcomes: [
            'Master modern JavaScript features',
            'Understand asynchronous programming',
            'Manipulate DOM and handle events',
            'Work with JavaScript frameworks'
        ],
        instructor: 'Emmanuel Muttavanchery',
        rating: 4.8,
        enrollments: 3500
    },
    {
        id: 'typescript-programming',
        name: 'TypeScript Programming',
        description: 'Learn TypeScript for type-safe JavaScript development and scalable applications. Master advanced features and enterprise-level coding practices.',
        duration: '6 weeks',
        type: 'Programming',
        difficulty: 'Advanced',
        modules: 6,
        prerequisites: ['javascript-programming'],
        learningOutcomes: [
            'Understand TypeScript type system',
            'Convert JavaScript projects to TypeScript',
            'Use advanced TypeScript features',
            'Build scalable applications with TypeScript'
        ],
        instructor: 'Emmanuel Muttavanchery',
        rating: 4.5,
        enrollments: 1800
    },
    {
        id: 'fullstack-development',
        name: 'Full Stack Development',
        description: 'Build complete web applications from frontend to backend with deployment. Master databases, APIs, and modern web technologies.',
        duration: '16 weeks',
        type: 'Specialization',
        difficulty: 'Advanced',
        modules: 0,
        prerequisites: ['javascript-programming', 'python-programming'],
        learningOutcomes: [
            'Build complete web applications',
            'Master frontend and backend technologies',
            'Work with databases and APIs',
            'Deploy applications to production'
        ],
        instructor: 'Emmanuel Muttavanchery',
        rating: 4.9,
        enrollments: 1500
    },
    {
        id: 'devops',
        name: 'DevOps',
        description: 'Master DevOps practices including CI/CD, containerization, and cloud deployment. Streamline software development and deployment processes.',
        duration: '12 weeks',
        type: 'Specialization',
        difficulty: 'Advanced',
        modules: 0,
        prerequisites: ['programming-foundations'],
        learningOutcomes: [
            'Understand DevOps principles and practices',
            'Implement CI/CD pipelines',
            'Work with containers and orchestration',
            'Deploy applications to cloud platforms'
        ],
        instructor: 'Emmanuel Muttavanchery',
        rating: 4.7,
        enrollments: 1200
    },
    {
        id: 'data-science',
        name: 'Data Science Foundations',
        description: 'Master data science from statistics to machine learning for data-driven decisions. Learn to extract insights and build predictive models.',
        duration: '12 weeks',
        type: 'Foundation',
        difficulty: 'Intermediate',
        modules: 0,
        prerequisites: ['programming-foundations'],
        learningOutcomes: [
            'Master statistical analysis and probability theory',
            'Learn data manipulation with Pandas and NumPy',
            'Build machine learning models with Scikit-learn',
            'Create compelling data visualizations',
            'Conduct A/B testing and hypothesis testing',
            'Deploy data science projects to production'
        ],
        instructor: 'Emmanuel Muttavanchery',
        rating: 4.9,
        enrollments: 1850
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