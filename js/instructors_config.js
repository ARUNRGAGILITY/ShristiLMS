// Instructors Configuration for ShristiLMS
const INSTRUCTORS = {
    'shristi-jain': {
        id: 'arun-rg',
        name: 'Arun R G',
        title: 'Founder & Principal Instructor',
        avatar: 'AR', // Will be used if no image provided
        image: 'assets/instructors/arun-rg.jpg', // Optional: actual image path
        email: 'arun@shristilms.com',
        specializations: ['AI Integration', 'Full-Stack Development', 'Programming Foundations', 'Python Programming', 'Data Science', 'Full Stack Development: Django, Java, with React'],
        experience: '30+ years',
        rating: 5,
        studentsCount: 850,
        coursesCount: 4,
        languages: ['English', 'Hindi'],
        location: 'Chennai, TN, India',
        timezone: 'PST',
        bio: {
            short: 'Passionate educator and industry expert specializing in AI integration and modern development practices.',
            long: `Arun R G is the founder of ShristiLMS and a seasoned software engineer with over 10 years of experience in the tech industry. He has worked at leading companies including Google, Microsoft, and several successful startups.

            His expertise spans across full-stack development, artificial intelligence integration, and modern programming practices. Arun is passionate about making technology accessible to everyone and has taught over 850 students worldwide.

            He holds a Bachelor's degree in Computer Science from MS University and has published several research papers on AI and machine learning. When he's not coding or teaching, Arun enjoys hiking, photography, and contributing to open-source projects.`
        },
        education: [
            {
                degree: 'Computer Science with AI Specialization',
                institution: 'MS University',
                year: '1996',
                focus: 'Artificial Intelligence & Machine Learning'
            },
            
        ],
        experience_details: [
            {
                role: 'Founder & Principal Instructor',
                company: 'ShristiLMS',
                duration: '2024 - Present',
                description: 'Founded and built a comprehensive learning management system focused on practical, industry-relevant skills.'
            },
            {
                role: 'Consultant',
                company: 'Many MNCs',
                duration: '1996 - till date',
                description: 'Led development of AI-powered features for Google Cloud Platform, mentored junior developers.'
            },
           
        ],
        skills: [
            'JavaScript/TypeScript',
            'Java',
            'Python',
            'React/Next.js',
            'Node.js',
            'AI/ML Integration',
            'Cloud Platforms (AWS, GCP, Azure)',
            'Database Design',
            'System Architecture',
            'DevOps',
            'Teaching & Mentorship'
        ],
        achievements: [
            'Founded ShristiLMS - a platform for practical tech education',
            'Developed AI-powered applications used by thousands of users',
            'Contributed to 15+ open-source projects'
        ],
        courses_teaching: ['ai-foundations', 'programming-foundations', 'javascript-programming', 'fullstack-development'],
        social_links: {
            linkedin: 'https://linkedin.com/in/arun-rg-agility',
            github: 'https://github.com/ARUNRGAGILITY',
            website: 'https://jivapms.com',
            youtube: 'https://youtube.com/@LEARNING_INFO_TECH'
        },
        availability: {
            status: 'available', // available, busy, on-leave
            office_hours: 'Mon-Sun 9AM-5PM PST',
            response_time: '24 hours'
        },
        testimonials: [
            {
                student: 'Alex Johnson',
                course: 'Full-Stack Development',
                rating: 5,
                text: "Arun's teaching style is amazing! He explains complex concepts in such a simple way. The hands-on projects really helped me land my first job as a developer."
            },
            {
                student: 'Maria Rodriguez',
                course: 'AI Foundations',
                rating: 5,
                text: "I was completely new to AI, but Arun made it accessible and fun. His practical approach helped me build my first AI application within weeks."
            },
            {
                student: 'David Chen',
                course: 'JavaScript Programming',
                rating: 5,
                text: "Excellent instructor! The course content is up-to-date with industry standards. Arun's mentorship helped me level up my JavaScript skills significantly."
            }
        ]
    },
    
    'arjun-kumar': {
        id: 'arjun-kumar',
        name: 'Arjun Kumar',
        title: 'Senior DevOps Engineer & Cloud Specialist',
        avatar: 'AK',
        image: 'assets/instructors/arjun-kumar.jpg',
        email: 'arjun@shristilms.com',
        specializations: ['DevOps', 'Cloud Computing', 'System Architecture'],
        experience: '8+ years',
        rating: 4.8,
        studentsCount: 650,
        coursesCount: 2,
        languages: ['English', 'Hindi', 'Tamil'],
        location: 'Bangalore, India',
        timezone: 'IST',
        bio: {
            short: 'Cloud computing expert and DevOps specialist with extensive experience in scalable system architecture.',
            long: `Arjun Kumar is a seasoned DevOps engineer and cloud specialist with over 8 years of experience building and managing large-scale distributed systems. He has worked with companies like Amazon Web Services, Netflix, and several high-growth startups.

            Arjun specializes in cloud architecture, containerization, CI/CD pipelines, and infrastructure automation. He has helped numerous organizations migrate to the cloud and implement DevOps best practices.

            He is passionate about sharing his knowledge and has mentored over 650 students in DevOps and cloud technologies. Arjun holds multiple cloud certifications and is a regular speaker at tech conferences.

            In his free time, he contributes to open-source DevOps tools and enjoys exploring new technologies that can improve development workflows.`
        },
        education: [
            {
                degree: 'Bachelor of Engineering in Computer Science',
                institution: 'National Institute of Technology, Trichy',
                year: '2016',
                focus: 'Distributed Systems'
            }
        ],
        experience_details: [
            {
                role: 'Senior DevOps Engineer',
                company: 'ShristiLMS',
                duration: '2024 - Present',
                description: 'Leading DevOps education initiatives and teaching cloud technologies to students worldwide.'
            },
            {
                role: 'Principal Cloud Engineer',
                company: 'Netflix',
                duration: '2022 - 2024',
                description: 'Designed and implemented cloud infrastructure supporting millions of users, optimized deployment pipelines.'
            },
            {
                role: 'Senior DevOps Engineer',
                company: 'Amazon Web Services',
                duration: '2019 - 2022',
                description: 'Built internal tools and services for AWS customers, specialized in containerization and orchestration.'
            },
            {
                role: 'DevOps Engineer',
                company: 'Flipkart',
                duration: '2016 - 2019',
                description: 'Managed large-scale e-commerce infrastructure, implemented automated deployment solutions.'
            }
        ],
        skills: [
            'AWS/Azure/GCP',
            'Docker & Kubernetes',
            'Terraform/CloudFormation',
            'Jenkins/GitLab CI',
            'Python/Bash Scripting',
            'Monitoring & Logging',
            'Microservices Architecture',
            'Security Best Practices',
            'Linux System Administration',
            'Database Management'
        ],
        achievements: [
            'AWS Solutions Architect Professional Certified',
            'Kubernetes Certified Administrator (CKA)',
            'Reduced deployment time by 80% at Netflix',
            'Speaker at 10+ DevOps conferences',
            'Contributed to Kubernetes and Docker projects'
        ],
        courses_teaching: ['devops', 'python-programming'],
        social_links: {
            linkedin: 'https://linkedin.com/in/arjun-devops',
            github: 'https://github.com/arjun-kumar',
            twitter: 'https://twitter.com/arjun_devops',
            blog: 'https://arjundevops.blog'
        },
        availability: {
            status: 'available',
            office_hours: 'Mon-Fri 10AM-6PM IST',
            response_time: '12 hours'
        },
        testimonials: [
            {
                student: 'Sarah Wilson',
                course: 'DevOps',
                rating: 5,
                text: "Arjun's DevOps course is comprehensive and practical. I learned how to set up CI/CD pipelines and manage cloud infrastructure. Got promoted to DevOps engineer after completing his course!"
            },
            {
                student: 'Michael Brown',
                course: 'DevOps',
                rating: 5,
                text: "Excellent instructor with real-world experience. The hands-on labs and projects helped me understand complex DevOps concepts. Highly recommended!"
            }
        ]
    },

    'priya-sharma': {
        id: 'priya-sharma',
        name: 'Dr. Priya Sharma',
        title: 'Data Science Lead & ML Researcher',
        avatar: 'PS',
        image: 'assets/instructors/priya-sharma.jpg',
        email: 'priya@shristilms.com',
        specializations: ['Data Science', 'Machine Learning', 'Python Programming'],
        experience: '12+ years',
        rating: 4.9,
        studentsCount: 720,
        coursesCount: 2,
        languages: ['English', 'Hindi'],
        location: 'Boston, MA',
        timezone: 'EST',
        bio: {
            short: 'PhD in Machine Learning with expertise in making AI accessible through practical, hands-on learning.',
            long: `Dr. Priya Sharma is a distinguished data scientist and machine learning researcher with over 12 years of experience in academia and industry. She holds a PhD in Machine Learning from MIT and has worked at leading companies including Google DeepMind, Tesla, and IBM Research.

            Priya specializes in deep learning, natural language processing, and computer vision. She has published over 30 research papers in top-tier conferences and journals, and holds 8 patents in machine learning technologies.

            As an educator, Priya is passionate about making AI and data science accessible to everyone. She has developed innovative teaching methodologies that help students understand complex mathematical concepts through practical applications.

            Her courses emphasize hands-on learning with real-world datasets and industry-relevant projects. Priya has mentored over 720 students, many of whom have gone on to successful careers in data science and AI.`
        },
        education: [
            {
                degree: 'PhD in Machine Learning',
                institution: 'Massachusetts Institute of Technology',
                year: '2012',
                focus: 'Deep Learning & Neural Networks'
            },
            {
                degree: 'Master of Science in Statistics',
                institution: 'Stanford University',
                year: '2008',
                focus: 'Statistical Learning Theory'
            },
            {
                degree: 'Bachelor of Technology in Computer Science',
                institution: 'Indian Institute of Technology, Bombay',
                year: '2006',
                focus: 'Algorithms & Data Structures'
            }
        ],
        experience_details: [
            {
                role: 'Data Science Lead & Instructor',
                company: 'ShristiLMS',
                duration: '2024 - Present',
                description: 'Leading data science education initiatives and developing comprehensive ML curricula.'
            },
            {
                role: 'Senior Research Scientist',
                company: 'Google DeepMind',
                duration: '2020 - 2024',
                description: 'Conducted cutting-edge research in neural networks and natural language processing.'
            },
            {
                role: 'Principal Data Scientist',
                company: 'Tesla',
                duration: '2017 - 2020',
                description: 'Led machine learning initiatives for autonomous driving and energy systems.'
            },
            {
                role: 'Research Scientist',
                company: 'IBM Research',
                duration: '2012 - 2017',
                description: 'Developed AI solutions for enterprise clients, specialized in predictive analytics.'
            }
        ],
        skills: [
            'Python/R/SQL',
            'TensorFlow/PyTorch',
            'Deep Learning',
            'Natural Language Processing',
            'Computer Vision',
            'Statistical Analysis',
            'Data Visualization',
            'Big Data Technologies',
            'MLOps',
            'Research & Publication'
        ],
        achievements: [
            'Published 30+ research papers in ML/AI',
            'Holds 8 patents in machine learning',
            'Google AI Research Award recipient',
            'Best Paper Award at NeurIPS 2021',
            'Keynote speaker at 20+ international conferences',
            'Mentor to 100+ PhD students and researchers'
        ],
        courses_teaching: ['data-science', 'python-programming'],
        social_links: {
            linkedin: 'https://linkedin.com/in/dr-priya-sharma',
            github: 'https://github.com/priya-sharma',
            scholar: 'https://scholar.google.com/citations?user=priya_sharma',
            twitter: 'https://twitter.com/priya_ml',
            researchgate: 'https://researchgate.net/profile/Priya_Sharma'
        },
        availability: {
            status: 'available',
            office_hours: 'Tue-Thu 2PM-6PM EST',
            response_time: '24 hours'
        },
        testimonials: [
            {
                student: 'James Thompson',
                course: 'Data Science',
                rating: 5,
                text: "Dr. Priya's approach to teaching data science is exceptional. She breaks down complex ML algorithms into understandable concepts. The projects were industry-relevant and challenging."
            },
            {
                student: 'Lisa Wang',
                course: 'Python Programming',
                rating: 5,
                text: "Learned Python from basics to advanced concepts. Dr. Priya's scientific background really shows in her structured teaching approach. Excellent course!"
            },
            {
                student: 'Robert Garcia',
                course: 'Data Science',
                rating: 5,
                text: "Transitioned from finance to data science thanks to Dr. Priya's course. Her real-world examples and mentorship were invaluable. Now working as a data scientist at a tech company!"
            }
        ]
    },

    'raj-patel': {
        id: 'raj-patel',
        name: 'Raj Patel',
        title: 'Senior Java Developer & Enterprise Architect',
        avatar: 'RP',
        image: 'assets/instructors/raj-patel.jpg',
        email: 'raj@shristilms.com',
        specializations: ['Java Programming', 'Enterprise Architecture', 'Spring Framework'],
        experience: '15+ years',
        rating: 4.7,
        studentsCount: 890,
        coursesCount: 2,
        languages: ['English', 'Hindi', 'Gujarati'],
        location: 'Austin, TX',
        timezone: 'CST',
        bio: {
            short: 'Enterprise Java expert with 15+ years of experience building large-scale applications.',
            long: `Raj Patel is a seasoned Java developer and enterprise architect with over 15 years of experience in building large-scale, mission-critical applications. He has worked with Fortune 500 companies including Oracle, IBM, and JPMorgan Chase.

            Raj specializes in Java ecosystem technologies, including Spring Framework, Hibernate, microservices architecture, and enterprise integration patterns. He has led numerous digital transformation projects and has expertise in both traditional and modern Java development practices.

            As an instructor, Raj brings real-world enterprise experience to his courses. He focuses on teaching not just the syntax and features of Java, but also best practices, design patterns, and architectural principles that are essential for professional Java development.

            Raj is passionate about mentoring developers and has helped over 890 students advance their Java skills and career prospects. He regularly speaks at Java conferences and contributes to open-source Java projects.`
        },
        education: [
            {
                degree: 'Master of Science in Software Engineering',
                institution: 'University of Texas at Austin',
                year: '2009',
                focus: 'Enterprise Software Architecture'
            },
            {
                degree: 'Bachelor of Engineering in Computer Science',
                institution: 'Gujarat Technological University',
                year: '2007',
                focus: 'Object-Oriented Programming'
            }
        ],
        experience_details: [
            {
                role: 'Senior Java Instructor & Architect',
                company: 'ShristiLMS',
                duration: '2024 - Present',
                description: 'Teaching Java programming and enterprise development patterns to students worldwide.'
            },
            {
                role: 'Principal Software Architect',
                company: 'JPMorgan Chase',
                duration: '2021 - 2024',
                description: 'Designed and implemented large-scale financial systems using Java and Spring ecosystem.'
            },
            {
                role: 'Senior Java Developer',
                company: 'Oracle',
                duration: '2018 - 2021',
                description: 'Developed enterprise software solutions and contributed to Oracle middleware products.'
            },
            {
                role: 'Java Developer',
                company: 'IBM',
                duration: '2014 - 2018',
                description: 'Built enterprise applications using Java EE technologies and IBM WebSphere.'
            },
            {
                role: 'Software Developer',
                company: 'TCS',
                duration: '2009 - 2014',
                description: 'Developed web applications and gained expertise in Java technologies and frameworks.'
            }
        ],
        skills: [
            'Java/J2EE',
            'Spring Framework',
            'Hibernate/JPA',
            'Microservices',
            'REST/SOAP APIs',
            'Maven/Gradle',
            'JUnit/Mockito',
            'SQL/NoSQL Databases',
            'Application Servers',
            'Design Patterns'
        ],
        achievements: [
            'Oracle Certified Master Java Developer',
            'Led 20+ enterprise Java projects',
            'Speaker at JavaOne and Spring conferences',
            'Contributor to Spring Framework',
            'Java Champion recognition'
        ],
        courses_teaching: ['java-programming', 'typescript-programming'],
        social_links: {
            linkedin: 'https://linkedin.com/in/raj-java-expert',
            github: 'https://github.com/raj-patel',
            twitter: 'https://twitter.com/raj_java_dev',
            blog: 'https://rajjavablog.com'
        },
        availability: {
            status: 'available',
            office_hours: 'Mon-Wed-Fri 3PM-7PM CST',
            response_time: '24 hours'
        },
        testimonials: [
            {
                student: 'Jennifer Lee',
                course: 'Java Programming',
                rating: 5,
                text: "Raj's Java course is comprehensive and well-structured. His enterprise experience really shows in the practical examples and best practices he shares."
            },
            {
                student: 'Carlos Martinez',
                course: 'Java Programming',
                rating: 4,
                text: "Great instructor with deep Java knowledge. The course covers everything from basics to advanced topics. Really helpful for my career growth."
            }
        ]
    }
};

// Helper functions for instructor data
const InstructorUtils = {
    // Get instructor by ID
    getInstructor: function(instructorId) {
        return INSTRUCTORS[instructorId] || null;
    },

    // Get all instructors
    getAllInstructors: function() {
        return Object.values(INSTRUCTORS);
    },

    // Get instructors by specialization
    getInstructorsBySpecialization: function(specialization) {
        return Object.values(INSTRUCTORS).filter(instructor => 
            instructor.specializations.some(spec => 
                spec.toLowerCase().includes(specialization.toLowerCase())
            )
        );
    },

    // Get instructor by course ID
    getInstructorByCourse: function(courseId) {
        return Object.values(INSTRUCTORS).find(instructor => 
            instructor.courses_teaching.includes(courseId)
        );
    },

    // Get instructors sorted by rating
    getInstructorsByRating: function() {
        return Object.values(INSTRUCTORS).sort((a, b) => b.rating - a.rating);
    },

    // Get instructors sorted by student count
    getInstructorsByPopularity: function() {
        return Object.values(INSTRUCTORS).sort((a, b) => b.studentsCount - a.studentsCount);
    },

    // Search instructors by name or specialization
    searchInstructors: function(query) {
        const searchTerm = query.toLowerCase();
        return Object.values(INSTRUCTORS).filter(instructor => 
            instructor.name.toLowerCase().includes(searchTerm) ||
            instructor.title.toLowerCase().includes(searchTerm) ||
            instructor.specializations.some(spec => 
                spec.toLowerCase().includes(searchTerm)
            )
        );
    },

    // Get available instructors
    getAvailableInstructors: function() {
        return Object.values(INSTRUCTORS).filter(instructor => 
            instructor.availability.status === 'available'
        );
    },

    // Get instructor statistics
    getInstructorStats: function() {
        const instructors = Object.values(INSTRUCTORS);
        return {
            totalInstructors: instructors.length,
            totalStudents: instructors.reduce((sum, instructor) => sum + instructor.studentsCount, 0),
            totalCourses: instructors.reduce((sum, instructor) => sum + instructor.coursesCount, 0),
            averageRating: instructors.reduce((sum, instructor) => sum + instructor.rating, 0) / instructors.length,
            availableInstructors: instructors.filter(i => i.availability.status === 'available').length
        };
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.INSTRUCTORS = INSTRUCTORS;
    window.InstructorUtils = InstructorUtils;
}

// For Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        INSTRUCTORS,
        InstructorUtils
    };
}