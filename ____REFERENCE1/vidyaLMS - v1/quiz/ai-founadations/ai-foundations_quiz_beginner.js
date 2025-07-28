// AI Foundations - Beginner Level Quiz
window.quizQuestions = [
    {
        type: 'mcq',
        question: 'What does AI stand for?',
        options: ['Artificial Intelligence', 'Advanced Internet', 'Automated Information', 'Applied Integration'],
        answer: 0,
        explanation: 'AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines that are programmed to think and learn like humans.',
        tips: 'AI is one of the most transformative technologies of our time, impacting everything from healthcare to transportation.'
    },
    {
        type: 'scq',
        question: 'Machine Learning is a subset of AI.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Machine Learning is indeed a subset of Artificial Intelligence that focuses on algorithms that can learn from and make decisions based on data.',
        tips: 'Think of AI as the broader field, with ML being one of its most important branches.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is NOT a type of machine learning?',
        options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Systematic Learning'],
        answer: 3,
        explanation: 'Systematic Learning is not a recognized type of machine learning. The three main types are Supervised Learning (with labeled data), Unsupervised Learning (finding patterns in unlabeled data), and Reinforcement Learning (learning through trial and error).',
        tips: 'Remember the three main ML paradigms: Supervised, Unsupervised, and Reinforcement Learning.'
    },
    {
        type: 'mcq',
        question: 'In supervised learning, what do we need to train a model?',
        options: ['Only input data', 'Only output data', 'Both input and output data', 'Neither input nor output data'],
        answer: 2,
        explanation: 'Supervised learning requires both input data (features) and output data (labels/targets) to train the model. The algorithm learns the mapping from inputs to outputs.',
        tips: 'The "supervision" comes from having the correct answers (labels) during training.'
    },
    {
        type: 'scq',
        question: 'Neural networks are inspired by the human brain.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Neural networks are indeed inspired by the structure and function of biological neural networks in the human brain, with artificial neurons mimicking biological neurons.',
        tips: 'This biological inspiration is what gave neural networks their name and basic architecture.'
    },
    {
        type: 'mcq',
        question: 'Which type of AI do we currently have in real-world applications?',
        options: ['Artificial General Intelligence (AGI)', 'Artificial Super Intelligence (ASI)', 'Artificial Narrow Intelligence (ANI)', 'All of the above'],
        answer: 2,
        explanation: 'Currently, we only have Artificial Narrow Intelligence (ANI), which is AI designed for specific tasks like image recognition, language translation, or playing chess. AGI and ASI are still theoretical.',
        tips: 'ANI is also called "Weak AI" - it excels at specific tasks but cannot transfer knowledge across different domains like humans can.'
    },
    {
        type: 'mcq',
        question: 'Which of these is an example of unsupervised learning?',
        options: ['Email spam detection', 'Customer segmentation', 'Medical diagnosis', 'Stock price prediction'],
        answer: 1,
        explanation: 'Customer segmentation is an example of unsupervised learning because it involves finding hidden patterns to group customers without predefined categories. The other examples require labeled data (supervised learning).',
        tips: 'Unsupervised learning discovers hidden patterns in data without being told what to look for.'
    },
    {
        type: 'scq',
        question: 'Deep learning requires large amounts of data to work effectively.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Deep learning models typically require large datasets to train effectively because they have many parameters to learn. With insufficient data, they may not generalize well to new examples.',
        tips: 'This is why deep learning became popular with the rise of big data and powerful computing resources.'
    },
    {
        type: 'mcq',
        question: 'What is the most commonly used activation function in modern neural networks?',
        options: ['Sigmoid', 'Tanh', 'ReLU', 'Linear'],
        answer: 2,
        explanation: 'ReLU (Rectified Linear Unit) is the most commonly used activation function in modern neural networks because it helps solve the vanishing gradient problem and is computationally efficient.',
        tips: 'ReLU simply outputs the input if positive, and zero if negative: f(x) = max(0, x).'
    },
    {
        type: 'mcq',
        question: 'Which field uses AI for autonomous vehicles?',
        options: ['Natural Language Processing', 'Computer Vision', 'Speech Recognition', 'Recommendation Systems'],
        answer: 1,
        explanation: 'Computer Vision is the primary AI field used in autonomous vehicles to process and understand visual information from cameras and sensors to navigate safely.',
        tips: 'Autonomous vehicles also use other AI techniques, but computer vision is essential for "seeing" and understanding the environment.'
    },
    {
        type: 'scq',
        question: 'AI can only work with numerical data.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'AI can work with many types of data including text, images, audio, and video. Modern AI systems can process and learn from diverse data formats, not just numbers.',
        tips: 'Think about chatbots (text), image recognition (images), and voice assistants (audio) - all use non-numerical data.'
    },
    {
        type: 'mcq',
        question: 'What does "training" a machine learning model mean?',
        options: ['Teaching humans to use the model', 'Setting up the computer hardware', 'Adjusting model parameters using data', 'Writing the program code'],
        answer: 2,
        explanation: 'Training a machine learning model means using data to automatically adjust the model\'s internal parameters so it can make accurate predictions on new, unseen data.',
        tips: 'Think of training as the learning phase where the model discovers patterns in the data.'
    },
    {
        type: 'mcq',
        question: 'Which Python library is most commonly used for machine learning?',
        options: ['NumPy', 'Scikit-learn', 'Matplotlib', 'Pandas'],
        answer: 1,
        explanation: 'Scikit-learn is the most popular Python library specifically designed for machine learning, providing easy-to-use tools for classification, regression, clustering, and more.',
        tips: 'While NumPy, Pandas, and Matplotlib are important for data science, scikit-learn is specialized for ML algorithms.'
    },
    {
        type: 'scq',
        question: 'Overfitting occurs when a model performs well on training data but poorly on new data.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Overfitting occurs when a model learns the training data too well, including noise and specific details, making it perform poorly on new, unseen data. It\'s like memorizing answers instead of understanding concepts.',
        tips: 'Overfitting is a common problem in ML. Techniques like cross-validation and regularization help prevent it.'
    },
    {
        type: 'mcq',
        question: 'What is the primary goal of artificial intelligence?',
        options: ['Replace all human jobs', 'Create robots', 'Simulate human intelligence in machines', 'Make computers faster'],
        answer: 2,
        explanation: 'The primary goal of artificial intelligence is to create machines that can simulate human intelligence - including reasoning, learning, perception, and decision-making capabilities.',
        tips: 'AI aims to augment human capabilities, not necessarily replace humans entirely.'
    },
    {
        type: 'mcq',
        question: 'Which of these is an example of reinforcement learning?',
        options: ['Predicting house prices', 'Grouping customers', 'Game-playing AI', 'Image classification'],
        answer: 2,
        explanation: 'Game-playing AI (like AlphaGo or chess programs) uses reinforcement learning, where the AI learns through trial and error, receiving rewards for good moves and penalties for bad ones.',
        tips: 'Reinforcement learning is like learning to ride a bike - you improve through practice and feedback.'
    },
    {
        type: 'scq',
        question: 'AI algorithms can be biased based on the data they are trained on.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'AI algorithms can indeed be biased if they are trained on biased data. Since AI learns patterns from data, any biases in the training data will be reflected in the model\'s decisions.',
        tips: 'This is why diverse, representative datasets and ethical AI practices are crucial for fair AI systems.'
    },
    {
        type: 'mcq',
        question: 'What is a neural network layer?',
        options: ['A type of computer hardware', 'A group of connected neurons/nodes', 'A programming language', 'A database structure'],
        answer: 1,
        explanation: 'A neural network layer is a group of connected neurons (nodes) that process information together. Neural networks typically have input layers, hidden layers, and output layers.',
        tips: 'Think of layers as processing stages - each layer transforms the data and passes it to the next layer.'
    },
    {
        type: 'mcq',
        question: 'Which application is NOT typically associated with AI?',
        options: ['Voice assistants like Siri', 'Recommendation systems on Netflix', 'Basic calculator functions', 'Autonomous driving'],
        answer: 2,
        explanation: 'Basic calculator functions use simple mathematical operations and don\'t require AI. They follow predefined rules rather than learning from data or simulating intelligence.',
        tips: 'AI applications involve learning, adaptation, or complex decision-making, not simple rule-following.'
    },
    {
        type: 'scq',
        question: 'The accuracy of a machine learning model is the only metric that matters.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'While accuracy is important, other metrics like precision, recall, F1-score, and specificity are also crucial depending on the problem. For example, in medical diagnosis, avoiding false negatives might be more important than overall accuracy.',
        tips: 'Different problems require different metrics. Consider what type of errors are most costly in your specific application.'
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.quizQuestions;
}