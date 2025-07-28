// Data Science - Intermediate Level Quiz (125 Questions)
window.quizQuestions = [
    {
        type: 'mcq',
        question: 'Which regularization technique adds the sum of absolute values of parameters to the cost function?',
        options: ['Ridge (L2)', 'Lasso (L1)', 'Elastic Net', 'Dropout'],
        answer: 1,
        explanation: 'Lasso (L1) regularization adds the sum of absolute values of parameters to the cost function, which can drive some coefficients to exactly zero, effectively performing feature selection.',
        tips: 'L1 = Lasso = feature selection; L2 = Ridge = shrinkage without elimination.'
    },
    {
        type: 'mcq',
        question: 'What is the main difference between bagging and boosting?',
        options: ['Bagging trains models in parallel, boosting trains them sequentially', 'Bagging is faster than boosting', 'Bagging uses more data than boosting', 'There is no difference'],
        answer: 0,
        explanation: 'Bagging trains multiple models independently in parallel on different subsets of data, while boosting trains models sequentially, where each model tries to correct the errors of the previous ones.',
        tips: 'Bagging reduces variance (Random Forest), boosting reduces bias (AdaBoost, Gradient Boosting).'
    },
    {
        type: 'mcq',
        question: 'Which metric is most appropriate for evaluating a highly imbalanced classification problem?',
        options: ['Accuracy', 'Precision and Recall', 'R-squared', 'Mean Squared Error'],
        answer: 1,
        explanation: 'For imbalanced datasets, precision and recall (or F1-score, AUC-ROC) are more appropriate than accuracy because accuracy can be misleadingly high when most samples belong to the majority class.',
        tips: 'Accuracy can be 99% in a 99:1 imbalanced dataset by always predicting the majority class.'
    },
    {
        type: 'scq',
        question: 'Principal Component Analysis (PCA) is a supervised dimensionality reduction technique.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'PCA is an unsupervised dimensionality reduction technique that finds principal components based on variance in the data without using target labels.',
        tips: 'PCA only looks at features, not labels, making it unsupervised.'
    },
    {
        type: 'mcq',
        question: 'What is the curse of dimensionality?',
        options: ['Having too few features', 'The exponential increase in volume as dimensions increase', 'Using the wrong algorithm', 'Having missing data'],
        answer: 1,
        explanation: 'The curse of dimensionality refers to the phenomenon where high-dimensional spaces become exponentially large, making data sparse and algorithms less effective.',
        tips: 'As dimensions increase, data points become increasingly distant from each other, making similarity measures less meaningful.'
    },
    {
        type: 'mcq',
        question: 'Which algorithm is most suitable for handling categorical features without extensive preprocessing?',
        options: ['Linear Regression', 'SVM', 'Decision Trees', 'k-NN'],
        answer: 2,
        explanation: 'Decision trees can naturally handle categorical features without requiring encoding, as they can split on categorical values directly.',
        tips: 'Tree-based algorithms (Decision Trees, Random Forest, XGBoost) handle mixed data types well.'
    },
    {
        type: 'mcq',
        question: 'What does the ROC curve plot?',
        options: ['Precision vs Recall', 'True Positive Rate vs False Positive Rate', 'Accuracy vs Error Rate', 'Sensitivity vs Specificity'],
        answer: 1,
        explanation: 'The ROC (Receiver Operating Characteristic) curve plots True Positive Rate (Sensitivity) on the y-axis against False Positive Rate (1-Specificity) on the x-axis.',
        tips: 'ROC curve helps evaluate binary classifiers across different threshold values.'
    },
    {
        type: 'scq',
        question: 'k-means clustering requires you to specify the number of clusters beforehand.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'k-means clustering requires you to specify the number of clusters (k) as a parameter before running the algorithm.',
        tips: 'Use methods like elbow method or silhouette analysis to help choose the optimal k.'
    },
    {
        type: 'mcq',
        question: 'Which technique is used to handle multicollinearity in linear regression?',
        options: ['Feature scaling', 'Ridge regression', 'Data imputation', 'Cross-validation'],
        answer: 1,
        explanation: 'Ridge regression (L2 regularization) helps handle multicollinearity by shrinking correlated coefficients, making the model more stable.',
        tips: 'Multicollinearity occurs when features are highly correlated with each other.'
    },
    {
        type: 'mcq',
        question: 'What is the main assumption of linear regression?',
        options: ['Features are categorical', 'Relationship between features and target is linear', 'Data is normally distributed', 'Features are independent'],
        answer: 1,
        explanation: 'The main assumption of linear regression is that there is a linear relationship between the independent variables (features) and the dependent variable (target).',
        tips: 'Other assumptions include independence of errors, homoscedasticity, and normality of residuals.'
    },
    {
        type: 'mcq',
        question: 'Which sampling technique ensures each subgroup is represented proportionally?',
        options: ['Simple random sampling', 'Systematic sampling', 'Stratified sampling', 'Cluster sampling'],
        answer: 2,
        explanation: 'Stratified sampling divides the population into subgroups (strata) and samples from each stratum proportionally, ensuring representation of all subgroups.',
        tips: 'Stratified sampling is useful when you want to ensure minority groups are adequately represented.'
    },
    {
        type: 'scq',
        question: 'Support Vector Machines work well with high-dimensional data.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'SVMs work well with high-dimensional data because they use the kernel trick and only depend on support vectors, not the full dimensionality.',
        tips: 'SVMs are particularly effective when the number of features is greater than the number of samples.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of the validation set in machine learning?',
        options: ['To train the model', 'To tune hyperparameters', 'To test final performance', 'To clean the data'],
        answer: 1,
        explanation: 'The validation set is used to tune hyperparameters and make decisions about model architecture without contaminating the test set.',
        tips: 'Train set = model training; Validation set = hyperparameter tuning; Test set = final evaluation.'
    },
    {
        type: 'mcq',
        question: 'Which distance metric is used by default in k-NN algorithm?',
        options: ['Manhattan distance', 'Euclidean distance', 'Cosine distance', 'Hamming distance'],
        answer: 1,
        explanation: 'k-NN typically uses Euclidean distance by default, which calculates the straight-line distance between points in multidimensional space.',
        tips: 'Different distance metrics can be used depending on the type of data and problem domain.'
    },
    {
        type: 'mcq',
        question: 'What is feature engineering?',
        options: ['Removing features', 'Creating new features from existing ones', 'Scaling features', 'Selecting the best features'],
        answer: 1,
        explanation: 'Feature engineering is the process of creating new features from existing data to improve model performance, often using domain knowledge.',
        tips: 'Good feature engineering can be more valuable than trying different algorithms.'
    },
    {
        type: 'scq',
        question: 'Random Forest is more prone to overfitting than a single decision tree.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Random Forest is less prone to overfitting than a single decision tree because it averages predictions from multiple trees, reducing variance.',
        tips: 'Ensemble methods like Random Forest typically reduce overfitting compared to individual models.'
    },
    {
        type: 'mcq',
        question: 'Which technique is used to handle missing values by predicting them using other features?',
        options: ['Forward fill', 'Backward fill', 'Multiple imputation', 'Dropping rows'],
        answer: 2,
        explanation: 'Multiple imputation predicts missing values using statistical models based on other features, creating multiple complete datasets.',
        tips: 'Multiple imputation is more sophisticated than simple methods like mean/median imputation.'
    },
    {
        type: 'mcq',
        question: 'What is the difference between Type I and Type II errors?',
        options: ['Type I is worse than Type II', 'Type I is false positive, Type II is false negative', 'Type I is for regression, Type II is for classification', 'There is no difference'],
        answer: 1,
        explanation: 'Type I error is a false positive (rejecting a true null hypothesis), and Type II error is a false negative (accepting a false null hypothesis).',
        tips: 'Remember: Type I = False Positive; Type II = False Negative.'
    },
    {
        type: 'mcq',
        question: 'Which algorithm is most interpretable?',
        options: ['Random Forest', 'Neural Network', 'Linear Regression', 'SVM with RBF kernel'],
        answer: 2,
        explanation: 'Linear regression is highly interpretable because coefficients directly show the relationship between each feature and the target variable.',
        tips: 'There\'s often a trade-off between model interpretability and performance.'
    },
    {
        type: 'scq',
        question: 'Gradient descent always finds the global minimum.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Gradient descent can get stuck in local minima, especially for non-convex functions. It only guarantees finding global minimum for convex functions.',
        tips: 'Use techniques like random restarts or different optimizers to escape local minima.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of cross-validation?',
        options: ['To increase dataset size', 'To estimate model performance on unseen data', 'To clean the data', 'To select features'],
        answer: 1,
        explanation: 'Cross-validation estimates how well a model will generalize to unseen data by training and testing on different subsets of the available data.',
        tips: 'k-fold cross-validation is the most common technique, with k=5 or k=10 being popular choices.'
    },
    {
        type: 'mcq',
        question: 'Which technique helps prevent overfitting in neural networks?',
        options: ['Adding more layers', 'Dropout', 'Increasing learning rate', 'Using more epochs'],
        answer: 1,
        explanation: 'Dropout randomly sets some neurons to zero during training, preventing the network from relying too heavily on specific neurons and reducing overfitting.',
        tips: 'Other regularization techniques for neural networks include L1/L2 regularization and early stopping.'
    },
    {
        type: 'mcq',
        question: 'What is the bias-variance tradeoff?',
        options: ['A choice between two algorithms', 'The tradeoff between model complexity and simplicity', 'The tradeoff between underfitting and overfitting', 'A statistical test'],
        answer: 2,
        explanation: 'The bias-variance tradeoff describes the relationship between underfitting (high bias) and overfitting (high variance) as model complexity changes.',
        tips: 'High bias = underfitting; High variance = overfitting; Sweet spot = balanced complexity.'
    },
    {
        type: 'scq',
        question: 'Ensemble methods always perform better than individual models.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'While ensemble methods often perform better, they don\'t always guarantee improvement. If base models are highly correlated or poor quality, ensembles may not help.',
        tips: 'Ensemble methods work best when base models are diverse and reasonably good.'
    },
    {
        type: 'mcq',
        question: 'Which algorithm is most sensitive to feature scaling?',
        options: ['Decision Trees', 'k-NN', 'Random Forest', 'Naive Bayes'],
        answer: 1,
        explanation: 'k-NN is highly sensitive to feature scaling because it relies on distance calculations. Features with larger scales will dominate the distance metric.',
        tips: 'Distance-based algorithms (k-NN, SVM, k-means) require feature scaling.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of feature selection?',
        options: ['To increase model complexity', 'To reduce dimensionality and improve performance', 'To add more features', 'To clean the data'],
        answer: 1,
        explanation: 'Feature selection removes irrelevant or redundant features to reduce dimensionality, improve model performance, and reduce computational cost.',
        tips: 'Feature selection can improve interpretability and reduce overfitting.'
    },
    {
        type: 'mcq',
        question: 'Which metric is rotation-invariant for measuring similarity between vectors?',
        options: ['Euclidean distance', 'Manhattan distance', 'Cosine similarity', 'Hamming distance'],
        answer: 2,
        explanation: 'Cosine similarity measures the angle between vectors and is invariant to rotation and scaling, making it useful for text and high-dimensional data.',
        tips: 'Cosine similarity focuses on direction rather than magnitude, useful for document similarity.'
    },
    {
        type: 'scq',
        question: 'Logistic regression can be used for multi-class classification.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Logistic regression can handle multi-class classification using techniques like one-vs-rest or multinomial logistic regression.',
        tips: 'One-vs-rest trains one classifier per class; multinomial extends logistic regression directly to multiple classes.'
    },
    {
        type: 'mcq',
        question: 'What is the main advantage of using ensemble methods?',
        options: ['Faster training', 'Better interpretability', 'Reduced variance and improved accuracy', 'Less memory usage'],
        answer: 2,
        explanation: 'Ensemble methods combine multiple models to reduce variance, decrease overfitting, and often achieve better accuracy than individual models.',
        tips: 'The wisdom of crowds: multiple diverse models often outperform single models.'
    },
    {
        type: 'mcq',
        question: 'Which technique is used to convert categorical variables to numerical?',
        options: ['Normalization', 'One-hot encoding', 'Standardization', 'PCA'],
        answer: 1,
        explanation: 'One-hot encoding converts categorical variables to numerical by creating binary columns for each category.',
        tips: 'Other encoding techniques include label encoding, target encoding, and binary encoding.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of the learning rate in gradient descent?',
        options: ['To control the number of iterations', 'To control the step size in parameter updates', 'To control the batch size', 'To control the regularization'],
        answer: 1,
        explanation: 'The learning rate controls how big steps the algorithm takes when updating parameters. Too high can overshoot, too low can be slow to converge.',
        tips: 'Learning rate is a crucial hyperparameter - consider using learning rate schedules or adaptive optimizers.'
    },
    {
        type: 'scq',
        question: 'Decision trees can handle both numerical and categorical features naturally.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Decision trees can naturally handle both numerical and categorical features without requiring preprocessing like encoding or scaling.',
        tips: 'This is one of the advantages of tree-based algorithms over distance-based methods.'
    },
    {
        type: 'mcq',
        question: 'Which algorithm is most suitable for online learning?',
        options: ['Random Forest', 'k-NN', 'Stochastic Gradient Descent', 'Decision Trees'],
        answer: 2,
        explanation: 'Stochastic Gradient Descent (SGD) is well-suited for online learning because it can update parameters incrementally as new data arrives.',
        tips: 'Online learning algorithms can adapt to new data without retraining from scratch.'
    },
    {
        type: 'mcq',
        question: 'What is the main difference between generative and discriminative models?',
        options: ['Speed of training', 'Generative models learn P(X,Y), discriminative models learn P(Y|X)', 'Accuracy', 'Interpretability'],
        answer: 1,
        explanation: 'Generative models learn the joint probability P(X,Y) and can generate new data, while discriminative models learn P(Y|X) to make predictions.',
        tips: 'Generative: Naive Bayes, HMM; Discriminative: Logistic Regression, SVM.'
    },
    {
        type: 'mcq',
        question: 'Which technique is used to handle outliers in robust statistics?',
        options: ['Mean', 'Median', 'Mode', 'Standard deviation'],
        answer: 1,
        explanation: 'Median is more robust to outliers than mean because it\'s not affected by extreme values, making it useful in robust statistics.',
        tips: 'Robust statistics use measures that are less sensitive to outliers and distributional assumptions.'
    },
    {
        type: 'scq',
        question: 'Increasing the number of features always improves model performance.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Adding more features can lead to overfitting, increased computational cost, and the curse of dimensionality. Quality matters more than quantity.',
        tips: 'Focus on relevant, informative features rather than just adding more features.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of batch normalization in neural networks?',
        options: ['To prevent overfitting', 'To normalize inputs and stabilize training', 'To increase model complexity', 'To reduce training time'],
        answer: 1,
        explanation: 'Batch normalization normalizes inputs to each layer, which stabilizes training, allows higher learning rates, and often improves performance.',
        tips: 'Batch normalization helps address internal covariate shift in deep networks.'
    },
    {
        type: 'mcq',
        question: 'Which resampling technique is used for imbalanced datasets?',
        options: ['Cross-validation', 'SMOTE', 'Bootstrapping', 'Holdout validation'],
        answer: 1,
        explanation: 'SMOTE (Synthetic Minority Oversampling Technique) generates synthetic examples of minority classes to balance the dataset.',
        tips: 'Other techniques for imbalanced data include undersampling, cost-sensitive learning, and ensemble methods.'
    },
    {
        type: 'mcq',
        question: 'What is the difference between parametric and non-parametric models?',
        options: ['Speed of training', 'Parametric models have fixed number of parameters, non-parametric adapt to data complexity', 'Accuracy', 'Memory usage'],
        answer: 1,
        explanation: 'Parametric models have a fixed number of parameters regardless of training data size, while non-parametric models\' complexity grows with data.',
        tips: 'Parametric: Linear Regression, Logistic Regression; Non-parametric: k-NN, Decision Trees.'
    },
    {
        type: 'scq',
        question: 'Feature importance in Random Forest is always reliable for feature selection.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Random Forest feature importance can be biased toward high-cardinality features and may not capture feature interactions properly.',
        tips: 'Use multiple feature selection methods and validate results for robust feature selection.'
    },
    {
        type: 'mcq',
        question: 'Which technique is used to reduce the impact of irrelevant features?',
        options: ['Feature scaling', 'Feature selection', 'Data augmentation', 'Cross-validation'],
        answer: 1,
        explanation: 'Feature selection identifies and removes irrelevant or redundant features, reducing noise and improving model performance.',
        tips: 'Feature selection methods include filter, wrapper, and embedded approaches.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of stratified sampling in cross-validation?',
        options: ['To increase dataset size', 'To ensure each fold has similar class proportions', 'To reduce computation time', 'To handle missing values'],
        answer: 1,
        explanation: 'Stratified sampling ensures that each fold in cross-validation maintains the same proportion of classes as the original dataset.',
        tips: 'Stratified CV is especially important for imbalanced datasets to ensure reliable performance estimates.'
    },
    {
        type: 'mcq',
        question: 'Which algorithm is most suitable for high-dimensional sparse data?',
        options: ['k-NN', 'Linear SVM', 'Decision Trees', 'Naive Bayes'],
        answer: 1,
        explanation: 'Linear SVM works well with high-dimensional sparse data (like text) because it finds linear decision boundaries and handles sparse features efficiently.',
        tips: 'Sparse data is common in text mining and genomics applications.'
    },
    {
        type: 'scq',
        question: 'The elbow method always provides a clear indication of the optimal number of clusters.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'The elbow method doesn\'t always show a clear "elbow" point, especially when clusters are not well-separated or data is noisy.',
        tips: 'Use multiple cluster validation metrics like silhouette score and gap statistic for better decisions.'
    },
    {
        type: 'mcq',
        question: 'What is the main assumption of Naive Bayes classifier?',
        options: ['Features are normally distributed', 'Features are independent given the class', 'Classes are balanced', 'Data is linearly separable'],
        answer: 1,
        explanation: 'Naive Bayes assumes that features are conditionally independent given the class, which is why it\'s called "naive."',
        tips: 'Despite the strong independence assumption, Naive Bayes often works well in practice, especially for text classification.'
    },
    {
        type: 'mcq',
        question: 'Which technique is used to visualize high-dimensional data in 2D?',
        options: ['PCA', 't-SNE', 'UMAP', 'All of the above'],
        answer: 3,
        explanation: 'PCA, t-SNE, and UMAP are all techniques used to visualize high-dimensional data by reducing it to 2D or 3D while preserving important relationships.',
        tips: 'PCA is linear, t-SNE and UMAP are non-linear and better at preserving local structure.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of early stopping in neural network training?',
        options: ['To save time', 'To prevent overfitting', 'To reduce memory usage', 'To increase accuracy'],
        answer: 1,
        explanation: 'Early stopping monitors validation performance and stops training when it starts to degrade, preventing overfitting.',
        tips: 'Early stopping is a form of regularization that doesn\'t require changing the model architecture.'
    },
    {
        type: 'scq',
        question: 'Grid search always finds the optimal hyperparameters.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Grid search only searches within the specified parameter ranges and grid points. The optimal parameters might lie outside this range or between grid points.',
        tips: 'Consider random search or Bayesian optimization for more efficient hyperparameter tuning.'
    },
    {
        type: 'mcq',
        question: 'Which distance metric is most appropriate for binary features?',
        options: ['Euclidean distance', 'Manhattan distance', 'Hamming distance', 'Cosine similarity'],
        answer: 2,
        explanation: 'Hamming distance counts the number of positions where binary features differ, making it most appropriate for binary data.',
        tips: 'Hamming distance is also used for categorical data and error-correcting codes.'
    },
    {
        type: 'mcq',
        question: 'What is the main advantage of using ensemble methods like XGBoost?',
        options: ['Faster training', 'Better handling of missing values and high performance', 'Simpler interpretation', 'Less memory usage'],
        answer: 1,
        explanation: 'XGBoost handles missing values naturally, provides excellent performance through gradient boosting, and includes built-in regularization.',
        tips: 'XGBoost is often a top choice for tabular data competitions due to its performance and robustness.'
    },
    {
        type: 'mcq',
        question: 'Which technique is used to handle class imbalance in the algorithm level?',
        options: ['Oversampling', 'Undersampling', 'Cost-sensitive learning', 'Feature selection'],
        answer: 2,
        explanation: 'Cost-sensitive learning modifies the algorithm to penalize misclassification of minority classes more heavily, addressing imbalance at the algorithm level.',
        tips: 'Cost-sensitive learning assigns different costs to different types of errors.'
    },
    {
        type: 'scq',
        question: 'Correlation matrices can help identify multicollinearity.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Correlation matrices show pairwise correlations between features, helping identify highly correlated features that indicate multicollinearity.',
        tips: 'Look for correlations > 0.8 or < -0.8 as potential multicollinearity indicators.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of dimensionality reduction?',
        options: ['To increase model complexity', 'To reduce computational cost and remove noise', 'To add more features', 'To improve interpretability only'],
        answer: 1,
        explanation: 'Dimensionality reduction reduces computational cost, removes noise, helps with visualization, and can prevent overfitting by reducing the curse of dimensionality.',
        tips: 'Common techniques include PCA, LDA, t-SNE, and feature selection methods.'
    },
    {
        type: 'mcq',
        question: 'Which algorithm is most suitable for anomaly detection?',
        options: ['Linear Regression', 'Isolation Forest', 'Naive Bayes', 'k-means'],
        answer: 1,
        explanation: 'Isolation Forest is specifically designed for anomaly detection by isolating anomalies through random partitioning, requiring fewer splits for outliers.',
        tips: 'Other anomaly detection methods include One-Class SVM, Local Outlier Factor, and statistical methods.'
    },
    {
        type: 'mcq',
        question: 'What is the difference between online and batch learning?',
        options: ['Speed of training', 'Online learns incrementally, batch learns from entire dataset', 'Accuracy', 'Memory usage'],
        answer: 1,
        explanation: 'Online learning updates the model incrementally as new data arrives, while batch learning trains on the entire dataset at once.',
        tips: 'Online learning is useful for streaming data and large datasets that don\'t fit in memory.'
    },
    {
        type: 'scq',
        question: 'Feature scaling affects the performance of all machine learning algorithms equally.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Feature scaling primarily affects distance-based algorithms (k-NN, SVM, k-means) and gradient-based algorithms, but not tree-based algorithms.',
        tips: 'Tree-based algorithms make splits based on feature values, so scaling doesn\'t change their decisions.'
    },
    {
        type: 'mcq',
        question: 'Which technique is used to handle the cold start problem in recommendation systems?',
        options: ['Collaborative filtering', 'Content-based filtering', 'Matrix factorization', 'Popularity-based recommendations'],
        answer: 3,
        explanation: 'Popularity-based recommendations suggest popular items to new users or for new items, helping handle the cold start problem when there\'s insufficient interaction data.',
        tips: 'Hybrid approaches combining multiple techniques often work best for recommendation systems.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of word embeddings in NLP?',
        options: ['To clean text data', 'To represent words as dense vectors capturing semantic meaning', 'To count word frequencies', 'To remove stop words'],
        answer: 1,
        explanation: 'Word embeddings represent words as dense vectors in a continuous space where semantically similar words are closer together.',
        tips: 'Popular word embeddings include Word2Vec, GloVe, and FastText.'
    },
    {
        type: 'mcq',
        question: 'Which evaluation metric is most appropriate for ranking problems?',
        options: ['Accuracy', 'RMSE', 'NDCG', 'F1-score'],
        answer: 2,
        explanation: 'NDCG (Normalized Discounted Cumulative Gain) is designed for ranking problems as it considers both relevance and position in the ranking.',
        tips: 'Other ranking metrics include MAP (Mean Average Precision) and MRR (Mean Reciprocal Rank).'
    },
    {
        type: 'scq',
        question: 'Gradient boosting algorithms are resistant to overfitting.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Gradient boosting algorithms can overfit, especially with too many iterations or complex base learners. Regularization and early stopping help prevent this.',
        tips: 'Modern implementations like XGBoost and LightGBM include regularization to combat overfitting.'
    },
    {
        type: 'mcq',
        question: 'What is the main purpose of feature hashing?',
        options: ['To encrypt features', 'To reduce memory usage in high-dimensional sparse data', 'To improve accuracy', 'To handle missing values'],
        answer: 1,
        explanation: 'Feature hashing (hashing trick) maps high-dimensional sparse features to a lower-dimensional space, reducing memory usage while maintaining most information.',
        tips: 'Feature hashing is commonly used in text processing and online learning with very high-dimensional data.'
    },
    {
        type: 'mcq',
        question: 'Which technique is used to handle concept drift in streaming data?',
        options: ['Batch retraining', 'Adaptive learning algorithms', 'Feature selection', 'Data normalization'],
        answer: 1,
        explanation: 'Adaptive learning algorithms can detect and adapt to concept drift by updating the model when the underlying data distribution changes.',
        tips: 'Concept drift occurs when the relationship between features and target changes over time.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of attention mechanisms in deep learning?',
        options: ['To prevent overfitting', 'To focus on relevant parts of the input', 'To reduce computational cost', 'To handle missing data'],
        answer: 1,
        explanation: 'Attention mechanisms allow models to focus on different parts of the input when making predictions, improving performance on sequential and structured data.',
        tips: 'Attention is crucial in modern NLP models like Transformers and BERT.'
    },
    {
        type: 'scq',
        question: 'Transfer learning can only be applied to image recognition tasks.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Transfer learning can be applied to various domains including NLP, speech recognition, and even tabular data, not just image recognition.',
        tips: 'Transfer learning leverages knowledge from pre-trained models to improve performance on related tasks.'
    },
    {
        type: 'mcq',
        question: 'Which technique is most effective for handling high-cardinality categorical features?',
        options: ['One-hot encoding', 'Target encoding', 'Label encoding', 'Binary encoding'],
        answer: 1,
        explanation: 'Target encoding (mean encoding) replaces categorical values with the mean target value for that category, effectively handling high-cardinality features.',
        tips: 'Be careful with target encoding to avoid overfitting - use cross-validation or regularization techniques.'
    },
    {
        type: 'mcq',
        question: 'What is the main advantage of using LightGBM over traditional gradient boosting?',
        options: ['Better accuracy', 'Faster training and lower memory usage', 'Better interpretability', 'Handles missing values better'],
        answer: 1,
        explanation: 'LightGBM uses histogram-based algorithms and leaf-wise tree growth, making it significantly faster and more memory-efficient than traditional gradient boosting.',
        tips: 'LightGBM is particularly effective for large datasets and high-dimensional data.'
    },
    {
        type: 'mcq',
        question: 'Which technique is used to handle temporal dependencies in time series data?',
        options: ['PCA', 'LSTM networks', 'k-means clustering', 'Linear regression'],
        answer: 1,
        explanation: 'LSTM (Long Short-Term Memory) networks are designed to handle temporal dependencies and long-term patterns in sequential data like time series.',
        tips: 'Other time series techniques include ARIMA, Prophet, and Transformer-based models.'
    },
    {
        type: 'scq',
        question: 'Autoencoders can be used for both dimensionality reduction and anomaly detection.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Autoencoders learn to compress and reconstruct data, making them useful for dimensionality reduction and anomaly detection (high reconstruction error indicates anomalies).',
        tips: 'Variational autoencoders (VAEs) can also generate new data similar to the training set.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of batch size in neural network training?',
        options: ['To control model complexity', 'To determine how many samples are processed before updating weights', 'To set the learning rate', 'To prevent overfitting'],
        answer: 1,
        explanation: 'Batch size determines how many training samples are processed before the model\'s internal parameters are updated.',
        tips: 'Larger batches provide more stable gradients but require more memory; smaller batches are noisier but can escape local minima.'
    },
    {
        type: 'mcq',
        question: 'Which technique is most suitable for multi-label classification?',
        options: ['One-vs-rest', 'Binary relevance', 'Classifier chains', 'All of the above'],
        answer: 3,
        explanation: 'Multi-label classification can use binary relevance (independent classifiers), classifier chains (considers label dependencies), or ensemble approaches.',
        tips: 'Multi-label is different from multi-class - samples can belong to multiple classes simultaneously.'
    },
    {
        type: 'mcq',
        question: 'What is the main difference between L1 and L2 regularization?',
        options: ['L1 is faster than L2', 'L1 can drive coefficients to zero, L2 shrinks them', 'L1 is more accurate than L2', 'There is no difference'],
        answer: 1,
        explanation: 'L1 regularization can drive coefficients to exactly zero (feature selection), while L2 regularization shrinks coefficients toward zero without eliminating them.',
        tips: 'L1 creates sparse models, L2 creates models with small but non-zero coefficients.'
    },
    {
        type: 'scq',
        question: 'Hyperparameter tuning should be done on the test set.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Hyperparameter tuning should be done on a separate validation set, not the test set, to avoid data leakage and overly optimistic performance estimates.',
        tips: 'Use the test set only for final model evaluation to get unbiased performance estimates.'
    },
    {
        type: 'mcq',
        question: 'Which technique is used to handle imbalanced time series forecasting?',
        options: ['SMOTE', 'Weighted loss functions', 'Undersampling', 'Feature selection'],
        answer: 1,
        explanation: 'Weighted loss functions assign higher penalties to minority class errors in time series forecasting, addressing class imbalance without disrupting temporal structure.',
        tips: 'Traditional resampling techniques can disrupt the temporal order in time series data.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of word2vec in natural language processing?',
        options: ['To count word frequencies', 'To create dense vector representations of words', 'To remove stop words', 'To perform sentiment analysis'],
        answer: 1,
        explanation: 'Word2vec creates dense vector representations of words that capture semantic relationships, enabling mathematical operations on word meanings.',
        tips: 'Word2vec uses either skip-gram or continuous bag-of-words (CBOW) architecture to learn embeddings.'
    },
    {
        type: 'mcq',
        question: 'Which technique is most effective for handling missing values in time series?',
        options: ['Forward fill', 'Mean imputation', 'Linear interpolation', 'Dropping rows'],
        answer: 2,
        explanation: 'Linear interpolation considers the temporal structure and estimates missing values based on surrounding time points, preserving trends.',
        tips: 'For time series, temporal-aware imputation methods work better than static methods like mean imputation.'
    },
    {
        type: 'scq',
        question: 'Deep learning models always outperform traditional machine learning on tabular data.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Traditional ML methods like XGBoost often outperform deep learning on tabular data, especially with limited data or when interpretability is important.',
        tips: 'Deep learning excels with unstructured data (images, text, audio) but isn\'t always best for structured tabular data.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of knowledge distillation in machine learning?',
        options: ['To reduce training time', 'To transfer knowledge from a large model to a smaller one', 'To handle missing data', 'To prevent overfitting'],
        answer: 1,
        explanation: 'Knowledge distillation transfers knowledge from a large, complex teacher model to a smaller, faster student model while maintaining performance.',
        tips: 'Knowledge distillation is useful for deploying models in resource-constrained environments.'
    },
    {
        type: 'mcq',
        question: 'Which metric is most appropriate for evaluating clustering quality?',
        options: ['Accuracy', 'Silhouette score', 'RMSE', 'F1-score'],
        answer: 1,
        explanation: 'Silhouette score measures how well-separated clusters are and how similar objects are within clusters, making it appropriate for clustering evaluation.',
        tips: 'Other clustering metrics include Calinski-Harabasz index and Davies-Bouldin index.'
    },
    {
        type: 'mcq',
        question: 'What is the main challenge in few-shot learning?',
        options: ['Too much data', 'Learning from very few examples', 'Computational complexity', 'Data quality'],
        answer: 1,
        explanation: 'Few-shot learning aims to train models that can generalize well from very few training examples, which is challenging due to limited data.',
        tips: 'Few-shot learning often uses meta-learning or transfer learning approaches.'
    },
    {
        type: 'scq',
        question: 'Bayesian optimization is more efficient than grid search for hyperparameter tuning.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Bayesian optimization uses probabilistic models to guide the search toward promising regions, making it more efficient than exhaustive grid search.',
        tips: 'Bayesian optimization is particularly useful when hyperparameter evaluation is expensive.'
    },
    {
        type: 'mcq',
        question: 'Which technique is used to handle catastrophic forgetting in neural networks?',
        options: ['Dropout', 'Elastic Weight Consolidation', 'Batch normalization', 'Early stopping'],
        answer: 1,
        explanation: 'Elastic Weight Consolidation (EWC) prevents catastrophic forgetting by constraining important weights when learning new tasks.',
        tips: 'Catastrophic forgetting occurs when neural networks forget old tasks while learning new ones.'
    },
    {
        type: 'mcq',
        question: 'What is the purpose of adversarial training in machine learning?',
        options: ['To speed up training', 'To improve model robustness against adversarial attacks', 'To reduce overfitting', 'To handle missing data'],
        answer: 1,
        explanation: 'Adversarial training exposes models to adversarial examples during training, improving their robustness against attacks and edge cases.',
        tips: 'Adversarial examples are inputs designed to fool machine learning models with small perturbations.'
    },
    {
        type: 'mcq',
        question: 'Which technique is most suitable for handling non-linear relationships in data?',
        options: ['Linear regression', 'Polynomial features with linear regression', 'Logistic regression', 'Ridge regression'],
        answer: 1,
        explanation: 'Polynomial features transform linear models to capture non-linear relationships by creating polynomial combinations of original features.',
        tips: 'Other non-linear techniques include kernel methods, tree-based models, and neural networks.'
    },
    {
        type: 'scq',
        question: 'Cross-entropy loss is only used for classification problems.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'While cross-entropy is commonly used for classification, it can also be used in other contexts like language modeling and generative models.',
        tips: 'Cross-entropy measures the difference between predicted and actual probability distributions.'
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.quizQuestions;
}