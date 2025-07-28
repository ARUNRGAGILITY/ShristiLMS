// AI Foundations - Intermediate Level Quiz
window.quizQuestions = [
    {
        type: 'mcq',
        question: 'What is the main difference between gradient descent and stochastic gradient descent?',
        options: [
            'Gradient descent uses the entire dataset, SGD uses individual samples', 
            'SGD is faster but less accurate than gradient descent',
            'Gradient descent is for classification, SGD is for regression',
            'There is no difference'
        ],
        answer: 0,
        explanation: 'Gradient descent uses the entire dataset to compute gradients in each iteration, while Stochastic Gradient Descent (SGD) uses individual samples or mini-batches, making it faster but with more noise in the optimization process.',
        tips: 'SGD is often preferred for large datasets because it\'s more computationally efficient and can escape local minima better.'
    },
    {
        type: 'mcq',
        question: 'In a neural network, what problem does the ReLU activation function help solve?',
        options: [
            'Overfitting',
            'Vanishing gradient problem',
            'Exploding gradient problem', 
            'Underfitting'
        ],
        answer: 1,
        explanation: 'ReLU (Rectified Linear Unit) helps solve the vanishing gradient problem because its derivative is either 0 or 1, preventing gradients from becoming exponentially small as they propagate backward through deep networks.',
        tips: 'The vanishing gradient problem made training deep networks very difficult before ReLU became popular.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of regularization in machine learning?',
        options: [
            'To increase model complexity',
            'To prevent overfitting by penalizing large weights',
            'To speed up training',
            'To reduce the number of features'
        ],
        answer: 1,
        explanation: 'Regularization techniques like L1 and L2 regularization add penalty terms to the loss function to discourage large weights, helping prevent overfitting and improve model generalization.',
        tips: 'L1 regularization can lead to sparse models, while L2 regularization tends to shrink weights evenly.'
    },
    {
        type: 'scq',
        question: 'Cross-validation is only useful for small datasets.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Cross-validation is useful for datasets of all sizes. It provides a more robust estimate of model performance by training and testing on different subsets of data, reducing dependence on a particular train-test split.',
        tips: 'K-fold cross-validation is especially valuable when you have limited data, but it\'s beneficial for larger datasets too.'
    },
    {
        type: 'mcq',
        question: 'What is the key innovation of Convolutional Neural Networks (CNNs) for image processing?',
        options: [
            'They use more layers than regular neural networks',
            'They apply filters/kernels to detect local features',
            'They process images faster than other methods',
            'They require less training data'
        ],
        answer: 1,
        explanation: 'CNNs use convolutional layers with learnable filters/kernels that can detect local features like edges, textures, and patterns, making them highly effective for image recognition tasks.',
        tips: 'The convolution operation preserves spatial relationships in images, which is crucial for visual understanding.'
    },
    {
        type: 'mcq',
        question: 'What does "feature engineering" mean in machine learning?',
        options: [
            'Selecting the best machine learning algorithm',
            'Creating or transforming input variables to improve model performance',
            'Tuning hyperparameters',
            'Cleaning the dataset'
        ],
        answer: 1,
        explanation: 'Feature engineering involves creating, selecting, or transforming input variables (features) to make them more useful for machine learning algorithms, often leading to significant performance improvements.',
        tips: 'Good feature engineering can be more impactful than choosing a sophisticated algorithm.'
    },
    {
        type: 'scq',
        question: 'Ensemble methods always perform better than individual models.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'While ensemble methods often improve performance by combining multiple models, they don\'t always guarantee better results. Success depends on model diversity, data quality, and proper ensemble design.',
        tips: 'Ensemble methods work best when individual models make different types of errors that can complement each other.'
    },
    {
        type: 'mcq',
        question: 'What is the primary challenge with the vanishing gradient problem in deep networks?',
        options: [
            'Training becomes too fast',
            'Gradients become too large in early layers',
            'Gradients become too small in early layers, slowing learning',
            'The network becomes too complex'
        ],
        answer: 2,
        explanation: 'In deep networks, gradients can become exponentially smaller as they propagate backward through layers, making it difficult for early layers to learn effectively and slowing overall training.',
        tips: 'This problem was a major obstacle to training deep networks before techniques like ReLU and batch normalization were developed.'
    },
    {
        type: 'mcq',
        question: 'What is the main advantage of using dropout in neural networks?',
        options: [
            'It makes training faster',
            'It reduces overfitting by randomly setting some neurons to zero',
            'It increases the number of parameters',
            'It simplifies the network architecture'
        ],
        answer: 1,
        explanation: 'Dropout randomly sets a fraction of neurons to zero during training, forcing the network to not rely too heavily on specific neurons and improving generalization by reducing overfitting.',
        tips: 'Dropout is only applied during training; during inference, all neurons are active but their outputs are scaled.'
    },
    {
        type: 'mcq',
        question: 'In the context of neural networks, what is backpropagation?',
        options: [
            'Moving data forward through the network',
            'An algorithm for computing gradients and updating weights',
            'A method for initializing weights',
            'A technique for data preprocessing'
        ],
        answer: 1,
        explanation: 'Backpropagation is an algorithm that computes gradients of the loss function with respect to network weights by propagating errors backward from output to input layers, enabling weight updates.',
        tips: 'Backpropagation uses the chain rule of calculus to efficiently compute gradients in multi-layer networks.'
    },
    {
        type: 'scq',
        question: 'Batch normalization is applied after the activation function in a neural network layer.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Batch normalization is typically applied before the activation function, not after. It normalizes the inputs to each layer, helping with training stability and speed.',
        tips: 'The exact placement of batch normalization (before or after activation) can vary, but before activation is more common in modern architectures.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of the softmax function in neural network output layers?',
        options: [
            'To speed up computation',
            'To convert outputs to probability distributions for multi-class classification',
            'To prevent overfitting',
            'To normalize input features'
        ],
        answer: 1,
        explanation: 'Softmax converts a vector of real numbers into a probability distribution where all values sum to 1, making it ideal for multi-class classification where we want class probabilities.',
        tips: 'Softmax is often used with categorical cross-entropy loss for multi-class classification problems.'
    },
    {
        type: 'mcq',
        question: 'What is transfer learning in deep learning?',
        options: [
            'Training multiple models simultaneously',
            'Using a pre-trained model as a starting point for a new task',
            'Transferring data between different datasets',
            'Converting models between different frameworks'
        ],
        answer: 1,
        explanation: 'Transfer learning involves taking a model pre-trained on one task (like ImageNet classification) and adapting it for a related task, often requiring less data and training time.',
        tips: 'Transfer learning is especially useful when you have limited data for your specific task.'
    },
    {
        type: 'mcq',
        question: 'In unsupervised learning, what is the goal of clustering algorithms?',
        options: [
            'To predict continuous values',
            'To classify data into predefined categories',
            'To group similar data points without predefined labels',
            'To reduce the dimensionality of data'
        ],
        answer: 2,
        explanation: 'Clustering algorithms aim to group similar data points together without using predefined labels, discovering hidden patterns or structures in the data.',
        tips: 'Popular clustering algorithms include K-means, hierarchical clustering, and DBSCAN.'
    },
    {
        type: 'scq',
        question: 'Principal Component Analysis (PCA) is a supervised learning technique.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'PCA is an unsupervised learning technique used for dimensionality reduction. It finds the principal components (directions of maximum variance) in data without using labels.',
        tips: 'PCA is often used for data visualization, noise reduction, and feature extraction before applying other ML algorithms.'
    },
    {
        type: 'mcq',
        question: 'What is the difference between precision and recall in classification?',
        options: [
            'Precision measures false positives, recall measures false negatives',
            'Precision is TP/(TP+FP), recall is TP/(TP+FN)',
            'Precision is for binary classification, recall is for multi-class',
            'There is no difference'
        ],
        answer: 1,
        explanation: 'Precision (TP/(TP+FP)) measures the fraction of positive predictions that are actually correct, while recall (TP/(TP+FN)) measures the fraction of actual positives that are correctly identified.',
        tips: 'High precision means few false alarms; high recall means few missed detections. Often there\'s a trade-off between them.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of attention mechanisms in neural networks?',
        options: [
            'To speed up training',
            'To allow the model to focus on relevant parts of the input',
            'To reduce model size',
            'To prevent overfitting'
        ],
        answer: 1,
        explanation: 'Attention mechanisms allow neural networks to dynamically focus on different parts of the input when making predictions, improving performance on tasks like machine translation and text summarization.',
        tips: 'Attention mechanisms are the foundation of Transformer architectures, which power models like BERT and GPT.'
    },
    {
        type: 'scq',
        question: 'Gradient clipping is used to address the exploding gradient problem.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Gradient clipping is indeed used to address the exploding gradient problem by setting a threshold and scaling down gradients that exceed this threshold, preventing unstable training.',
        tips: 'Exploding gradients can cause training to diverge, while vanishing gradients cause training to stagnate.'
    },
    {
        type: 'mcq',
        question: 'What is the main challenge in training Generative Adversarial Networks (GANs)?',
        options: [
            'They require too much computational power',
            'Balancing the training of generator and discriminator networks',
            'They can only generate images',
            'They need labeled data'
        ],
        answer: 1,
        explanation: 'GANs consist of two competing networks - a generator and discriminator. The main challenge is balancing their training so neither becomes too dominant, which can lead to mode collapse or training instability.',
        tips: 'GANs are notoriously difficult to train and often require careful hyperparameter tuning and training techniques.'
    },
    {
        type: 'mcq',
        question: 'What is the curse of dimensionality in machine learning?',
        options: [
            'Having too many classes to predict',
            'When high-dimensional data becomes sparse and difficult to analyze',
            'When models become too complex',
            'When training takes too long'
        ],
        answer: 1,
        explanation: 'The curse of dimensionality refers to problems that arise when working with high-dimensional data, where data becomes increasingly sparse and distances between points become less meaningful.',
        tips: 'Techniques like PCA, feature selection, and regularization help combat the curse of dimensionality.'
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.quizQuestions;
}