// Data Science - Advanced Level Quiz (150 Questions)
window.quizQuestions = [
    {
        type: 'mcq',
        question: 'What is the mathematical foundation behind the kernel trick in SVMs?',
        options: ['Mercer\'s theorem', 'Bayes\' theorem', 'Central limit theorem', 'Law of large numbers'],
        answer: 0,
        explanation: 'Mercer\'s theorem provides the mathematical foundation for the kernel trick, ensuring that kernel functions correspond to inner products in some higher-dimensional space.',
        tips: 'Mercer\'s theorem guarantees that valid kernel functions can be decomposed into eigenvalues and eigenfunctions.'
    },
    {
        type: 'mcq',
        question: 'In variational inference, what does the ELBO represent?',
        options: ['Expected log-likelihood bound', 'Evidence lower bound', 'Estimated latent bound optimization', 'Exponential likelihood bound optimization'],
        answer: 1,
        explanation: 'ELBO (Evidence Lower Bound) is the objective function maximized in variational inference to approximate intractable posterior distributions.',
        tips: 'ELBO consists of a reconstruction term and a KL divergence term that acts as regularization.'
    },
    {
        type: 'mcq',
        question: 'Which technique addresses the problem of mode collapse in GANs?',
        options: ['Dropout', 'Batch normalization', 'Wasserstein loss', 'L2 regularization'],
        answer: 2,
        explanation: 'Wasserstein GANs (WGANs) use Wasserstein distance instead of JS divergence, which helps address mode collapse by providing more meaningful gradients.',
        tips: 'WGAN-GP (with gradient penalty) further stabilizes training by enforcing Lipschitz constraints.'
    },
    {
        type: 'scq',
        question: 'The expectation-maximization (EM) algorithm is guaranteed to converge to the global optimum.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'EM algorithm is guaranteed to converge to a local optimum but not necessarily the global optimum, as it can get stuck in local maxima.',
        tips: 'Use multiple random initializations to increase chances of finding the global optimum with EM.'
    },
    {
        type: 'mcq',
        question: 'What is the key insight behind the attention mechanism in Transformers?',
        options: ['Parallel processing', 'Self-attention allows each position to attend to all positions', 'Reduced computational complexity', 'Better gradient flow'],
        answer: 1,
        explanation: 'Self-attention allows each position in the sequence to attend to all other positions, capturing long-range dependencies without sequential processing.',
        tips: 'Multi-head attention allows the model to attend to different types of relationships simultaneously.'
    },
    {
        type: 'mcq',
        question: 'In causal inference, what does the backdoor criterion help identify?',
        options: ['Confounding variables', 'Mediating variables', 'Collider variables', 'All confounders that need to be controlled'],
        answer: 3,
        explanation: 'The backdoor criterion provides a systematic way to identify the minimal set of variables that need to be controlled to estimate causal effects.',
        tips: 'Pearl\'s causal hierarchy includes association, intervention, and counterfactual reasoning.'
    },
    {
        type: 'mcq',
        question: 'What is the primary advantage of using spectral clustering over k-means?',
        options: ['Faster computation', 'Can handle non-convex clusters', 'Requires fewer parameters', 'Better interpretability'],
        answer: 1,
        explanation: 'Spectral clustering can identify non-convex clusters by working in the eigenspace of the similarity matrix, unlike k-means which assumes spherical clusters.',
        tips: 'Spectral clustering transforms the clustering problem into a graph partitioning problem.'
    },
    {
        type: 'scq',
        question: 'In deep learning, skip connections primarily help with the vanishing gradient problem.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Skip connections (residual connections) allow gradients to flow directly through shortcuts, helping alleviate the vanishing gradient problem in deep networks.',
        tips: 'ResNets demonstrated that very deep networks can be trained effectively using skip connections.'
    },
    {
        type: 'mcq',
        question: 'What is the mathematical relationship between mutual information and entropy?',
        options: ['MI(X;Y) = H(X) + H(Y)', 'MI(X;Y) = H(X) - H(X|Y)', 'MI(X;Y) = H(X) * H(Y)', 'MI(X;Y) = H(X) / H(Y)'],
        answer: 1,
        explanation: 'Mutual information MI(X;Y) = H(X) - H(X|Y) = H(Y) - H(Y|X), representing the reduction in uncertainty about X when Y is known.',
        tips: 'Mutual information is symmetric: MI(X;Y) = MI(Y;X) and is always non-negative.'
    },
    {
        type: 'mcq',
        question: 'In reinforcement learning, what does the Bellman equation express?',
        options: ['Policy gradient', 'Value function recursion', 'Action probability', 'Reward function'],
        answer: 1,
        explanation: 'The Bellman equation expresses the recursive relationship for value functions: V(s) = R(s) + γ max_a Σ P(s\'|s,a)V(s\').',
        tips: 'The Bellman equation is fundamental to dynamic programming approaches in RL.'
    },
    {
        type: 'mcq',
        question: 'What is the key difference between variational autoencoders (VAEs) and standard autoencoders?',
        options: ['VAEs use more layers', 'VAEs learn a probabilistic latent representation', 'VAEs are faster to train', 'VAEs require less data'],
        answer: 1,
        explanation: 'VAEs learn a probabilistic distribution in the latent space rather than deterministic encodings, enabling generation of new samples.',
        tips: 'VAEs use the reparameterization trick to make the sampling process differentiable.'
    },
    {
        type: 'scq',
        question: 'The central limit theorem requires the original distribution to be normal.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'The central limit theorem states that sample means approach normality regardless of the original distribution shape, given sufficient sample size.',
        tips: 'CLT is one of the most important theorems in statistics and forms the basis for many statistical tests.'
    },
    {
        type: 'mcq',
        question: 'In information theory, what does the KL divergence measure?',
        options: ['Distance between distributions', 'Similarity between distributions', 'Information gained when updating beliefs', 'Entropy difference'],
        answer: 2,
        explanation: 'KL divergence measures the information gained when updating from a prior distribution to a posterior distribution, though it\'s often interpreted as measuring distributional difference.',
        tips: 'KL divergence is not symmetric: KL(P||Q) ≠ KL(Q||P) and is always non-negative.'
    },
    {
        type: 'mcq',
        question: 'What is the primary challenge addressed by few-shot learning?',
        options: ['Computational efficiency', 'Learning from limited labeled examples', 'Handling high-dimensional data', 'Dealing with noisy labels'],
        answer: 1,
        explanation: 'Few-shot learning aims to enable models to generalize to new tasks or classes with only a few labeled examples, mimicking human learning abilities.',
        tips: 'Meta-learning (learning to learn) is a common approach to few-shot learning.'
    },
    {
        type: 'mcq',
        question: 'In graph neural networks, what is the key idea behind message passing?',
        options: ['Parallel processing', 'Nodes aggregate information from neighbors', 'Faster convergence', 'Reduced memory usage'],
        answer: 1,
        explanation: 'Message passing allows nodes to aggregate and update their representations based on information from neighboring nodes in the graph.',
        tips: 'Different GNN architectures (GCN, GraphSAGE, GAT) use different message passing and aggregation strategies.'
    },
    {
        type: 'scq',
        question: 'Batch normalization always improves model performance.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'While batch normalization often improves performance and training stability, it can sometimes hurt performance, especially in small batch settings or certain architectures.',
        tips: 'Layer normalization or group normalization might be better alternatives in some cases.'
    },
    {
        type: 'mcq',
        question: 'What is the mathematical basis for Principal Component Analysis?',
        options: ['Singular Value Decomposition', 'QR decomposition', 'Cholesky decomposition', 'LU decomposition'],
        answer: 0,
        explanation: 'PCA is mathematically based on Singular Value Decomposition (SVD) of the data matrix, which finds the principal components as the eigenvectors of the covariance matrix.',
        tips: 'SVD provides a numerically stable way to compute PCA, especially for high-dimensional data.'
    },
    {
        type: 'mcq',
        question: 'In ensemble methods, what does "diversity" refer to?',
        options: ['Different data types', 'Models making different types of errors', 'Different algorithms', 'Different hyperparameters'],
        answer: 1,
        explanation: 'Diversity in ensembles refers to models making different types of errors, so their combination can achieve better overall performance than individual models.',
        tips: 'The bias-variance-covariance decomposition shows why diversity is crucial for ensemble effectiveness.'
    },
    {
        type: 'mcq',
        question: 'What is the key innovation in attention mechanisms that led to the Transformer architecture?',
        options: ['Positional encoding', 'Self-attention', 'Multi-head attention', 'Scaled dot-product attention'],
        answer: 1,
        explanation: 'Self-attention allows the model to relate different positions within the same sequence, eliminating the need for recurrent or convolutional layers.',
        tips: 'Self-attention enables full parallelization and better capture of long-range dependencies.'
    },
    {
        type: 'scq',
        question: 'In Bayesian machine learning, the posterior distribution can always be computed analytically.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'The posterior distribution can only be computed analytically in special cases (conjugate priors). Most real-world problems require approximation methods.',
        tips: 'Variational inference and MCMC are common approximation methods for intractable posteriors.'
    },
    {
        type: 'mcq',
        question: 'What is the primary advantage of using Wasserstein distance in GANs?',
        options: ['Faster training', 'More stable gradients', 'Better sample quality', 'Reduced memory usage'],
        answer: 1,
        explanation: 'Wasserstein distance provides more stable gradients than JS divergence, especially when distributions have little overlap, leading to more stable GAN training.',
        tips: 'WGAN addresses issues with vanishing gradients that plague traditional GANs.'
    },
    {
        type: 'mcq',
        question: 'In causal inference, what is a confounder?',
        options: ['A variable that causes the outcome', 'A variable that affects both treatment and outcome', 'A variable that is affected by treatment', 'A variable that mediates the effect'],
        answer: 1,
        explanation: 'A confounder is a variable that affects both the treatment/exposure and the outcome, potentially creating spurious associations if not controlled.',
        tips: 'Confounders create backdoor paths between treatment and outcome in causal graphs.'
    },
    {
        type: 'mcq',
        question: 'What is the key insight behind neural architecture search (NAS)?',
        options: ['Manual design is inefficient', 'Automatically finding optimal architectures', 'Reducing computational cost', 'Improving interpretability'],
        answer: 1,
        explanation: 'NAS automates the process of finding optimal neural network architectures for specific tasks, potentially discovering architectures better than human-designed ones.',
        tips: 'NAS can use reinforcement learning, evolutionary algorithms, or differentiable approaches.'
    },
    {
        type: 'scq',
        question: 'The curse of dimensionality affects all machine learning algorithms equally.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Different algorithms are affected differently by high dimensionality. Distance-based methods suffer more, while some methods like linear models can handle high dimensions better.',
        tips: 'Tree-based methods and linear models are often more robust to high dimensionality than distance-based methods.'
    },
    {
        type: 'mcq',
        question: 'In deep reinforcement learning, what problem does experience replay address?',
        options: ['Exploration vs exploitation', 'Sample efficiency and correlation', 'Continuous action spaces', 'Partial observability'],
        answer: 1,
        explanation: 'Experience replay stores past experiences and samples them randomly, improving sample efficiency and breaking temporal correlations in the data.',
        tips: 'Experience replay is crucial for stable training of deep Q-networks (DQN).'
    },
    {
        type: 'mcq',
        question: 'What is the mathematical relationship in matrix factorization techniques like SVD?',
        options: ['A = UΣV^T', 'A = UV^T', 'A = UΣU^T', 'A = VΣV^T'],
        answer: 0,
        explanation: 'SVD decomposes a matrix A into three matrices: A = UΣV^T, where U and V are orthogonal matrices and Σ is diagonal.',
        tips: 'SVD is used in PCA, recommender systems, and noise reduction applications.'
    },
    {
        type: 'mcq',
        question: 'In information bottleneck theory, what trade-off does it formalize?',
        options: ['Bias vs variance', 'Compression vs prediction', 'Speed vs accuracy', 'Interpretability vs performance'],
        answer: 1,
        explanation: 'Information bottleneck theory formalizes the trade-off between compressing input information and retaining information relevant for prediction.',
        tips: 'This theory helps understand why deep networks learn hierarchical representations.'
    },
    {
        type: 'scq',
        question: 'Gradient clipping is primarily used to address the exploding gradient problem.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Gradient clipping caps gradient magnitudes to prevent exploding gradients, which can destabilize training in deep networks, especially RNNs.',
        tips: 'Gradient clipping is particularly important in training recurrent neural networks and Transformers.'
    },
    {
        type: 'mcq',
        question: 'What is the key difference between discriminative and generative models in terms of what they learn?',
        options: ['Speed of training', 'P(y|x) vs P(x,y)', 'Accuracy', 'Computational complexity'],
        answer: 1,
        explanation: 'Discriminative models learn P(y|x) directly for prediction, while generative models learn P(x,y) = P(x|y)P(y) and can generate new samples.',
        tips: 'Generative models can be used for data augmentation and understanding data distribution.'
    },
    {
        type: 'mcq',
        question: 'In meta-learning, what is the distinction between support and query sets?',
        options: ['Training vs validation', 'Few-shot training vs testing within a task', 'Different domains', 'Different algorithms'],
        answer: 1,
        explanation: 'In meta-learning, the support set contains few examples for learning a new task, while the query set tests performance on that task.',
        tips: 'This mimics the few-shot learning scenario where models must adapt quickly to new tasks.'
    },
    {
        type: 'mcq',
        question: 'What mathematical property makes ReLU activation functions computationally efficient?',
        options: ['Differentiability', 'Non-linearity', 'Sparsity and simple computation', 'Bounded output'],
        answer: 2,
        explanation: 'ReLU\'s simple max(0,x) computation and tendency to produce sparse activations make it computationally efficient and help with gradient flow.',
        tips: 'ReLU\'s simplicity also helps alleviate the vanishing gradient problem compared to sigmoid/tanh.'
    },
    {
        type: 'scq',
        question: 'Transfer learning is only effective when source and target tasks are very similar.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Transfer learning can be effective even with dissimilar tasks, especially in the lower layers that learn general features. Fine-tuning strategies can bridge domain gaps.',
        tips: 'Pre-trained models on ImageNet are useful even for medical images, despite domain differences.'
    },
    {
        type: 'mcq',
        question: 'In variational inference, what does the KL divergence term in the ELBO represent?',
        options: ['Reconstruction error', 'Regularization penalty', 'Data likelihood', 'Model complexity'],
        answer: 1,
        explanation: 'The KL divergence term acts as a regularization penalty, keeping the learned posterior close to the prior distribution.',
        tips: 'This prevents the model from using the latent space arbitrarily and encourages meaningful representations.'
    },
    {
        type: 'mcq',
        question: 'What is the key insight behind adversarial training?',
        options: ['Faster convergence', 'Robustness through worst-case examples', 'Better generalization', 'Reduced overfitting'],
        answer: 1,
        explanation: 'Adversarial training improves model robustness by training on adversarially perturbed examples that represent worst-case scenarios.',
        tips: 'This is based on the minimax principle: minimize loss over parameters while maximizing over perturbations.'
    },
    {
        type: 'mcq',
        question: 'In graph neural networks, what problem does over-smoothing address?',
        options: ['Overfitting', 'Node features becoming too similar after many layers', 'Computational complexity', 'Memory usage'],
        answer: 1,
        explanation: 'Over-smoothing occurs when node representations become indistinguishable after many message-passing layers, losing important structural information.',
        tips: 'Techniques like residual connections, dropout, and careful architecture design help mitigate over-smoothing.'
    },
    {
        type: 'scq',
        question: 'The Universal Approximation Theorem guarantees that neural networks can learn any function perfectly.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'The Universal Approximation Theorem states that neural networks can approximate any continuous function arbitrarily well, but this doesn\'t guarantee perfect learning in practice.',
        tips: 'The theorem doesn\'t address learnability, generalization, or the amount of data/computation required.'
    },
    {
        type: 'mcq',
        question: 'What is the primary motivation behind using normalizing flows?',
        options: ['Faster training', 'Exact likelihood computation for generative models', 'Better interpretability', 'Reduced memory usage'],
        answer: 1,
        explanation: 'Normalizing flows enable exact likelihood computation by using invertible transformations, unlike VAEs or GANs which use approximations.',
        tips: 'Normalizing flows transform simple distributions into complex ones through invertible mappings.'
    },
    {
        type: 'mcq',
        question: 'In deep learning optimization, what problem does momentum address?',
        options: ['Overfitting', 'Slow convergence and oscillations', 'Memory usage', 'Gradient computation'],
        answer: 1,
        explanation: 'Momentum helps accelerate convergence by accumulating gradients and reducing oscillations around the optimum.',
        tips: 'Momentum can be thought of as adding inertia to the optimization process.'
    },
    {
        type: 'mcq',
        question: 'What is the key difference between BERT and GPT in their training objectives?',
        options: ['Model size', 'Bidirectional vs unidirectional language modeling', 'Number of layers', 'Attention mechanism'],
        answer: 1,
        explanation: 'BERT uses bidirectional masked language modeling while GPT uses unidirectional (left-to-right) autoregressive language modeling.',
        tips: 'BERT\'s bidirectional nature makes it better for understanding tasks, while GPT\'s autoregressive nature makes it better for generation.'
    },
    {
        type: 'scq',
        question: 'In Bayesian neural networks, weight uncertainty is modeled through probability distributions.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Bayesian neural networks place probability distributions over weights rather than point estimates, enabling uncertainty quantification.',
        tips: 'This allows BNNs to express uncertainty in predictions, crucial for safety-critical applications.'
    },
    {
        type: 'mcq',
        question: 'What mathematical concept underlies the success of kernel methods?',
        options: ['Linear algebra', 'Reproducing Kernel Hilbert Spaces (RKHS)', 'Probability theory', 'Information theory'],
        answer: 1,
        explanation: 'Kernel methods are based on RKHS theory, which provides the mathematical framework for the kernel trick and feature space mappings.',
        tips: 'RKHS theory ensures that kernel functions correspond to valid inner products in some feature space.'
    },
    {
        type: 'mcq',
        question: 'In continual learning, what is catastrophic forgetting?',
        options: ['Memory overflow', 'Loss of performance on old tasks when learning new ones', 'Gradient explosion', 'Model complexity'],
        answer: 1,
        explanation: 'Catastrophic forgetting occurs when neural networks lose performance on previously learned tasks when trained on new tasks.',
        tips: 'Techniques like elastic weight consolidation and memory replay help mitigate catastrophic forgetting.'
    },
    {
        type: 'mcq',
        question: 'What is the fundamental assumption of Independent Component Analysis (ICA)?',
        options: ['Components are normally distributed', 'Components are statistically independent', 'Components are linearly related', 'Components have equal variance'],
        answer: 1,
        explanation: 'ICA assumes that observed signals are linear mixtures of statistically independent source components.',
        tips: 'ICA is particularly useful for blind source separation problems like separating mixed audio signals.'
    },
    {
        type: 'scq',
        question: 'Double descent phenomenon suggests that bigger models always generalize better.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Double descent shows that generalization error can decrease again after initial increase with model size, but this doesn\'t mean bigger is always better.',
        tips: 'Double descent challenges traditional bias-variance tradeoff intuitions and is still an active research area.'
    },
    {
        type: 'mcq',
        question: 'In reinforcement learning, what does the policy gradient theorem establish?',
        options: ['Optimal policy existence', 'Gradient of expected return with respect to policy parameters', 'Convergence guarantees', 'Sample complexity bounds'],
        answer: 1,
        explanation: 'The policy gradient theorem provides the mathematical foundation for computing gradients of expected return with respect to policy parameters.',
        tips: 'This enables direct optimization of policies without needing to estimate value functions explicitly.'
    },
    {
        type: 'mcq',
        question: 'What is the key innovation in self-supervised learning?',
        options: ['No human supervision', 'Learning representations from data structure itself', 'Faster training', 'Better interpretability'],
        answer: 1,
        explanation: 'Self-supervised learning creates learning objectives from the data itself, using tasks like predicting masked tokens or future frames.',
        tips: 'Self-supervised learning has been particularly successful in NLP (BERT, GPT) and computer vision (SimCLR, MAE).'
    },
    {
        type: 'mcq',
        question: 'In neural ODEs, what mathematical concept replaces discrete layers?',
        options: ['Continuous functions', 'Differential equations', 'Integral equations', 'Stochastic processes'],
        answer: 1,
        explanation: 'Neural ODEs parameterize continuous dynamics with neural networks, replacing discrete layers with continuous differential equations.',
        tips: 'This allows for adaptive computation and potentially more parameter-efficient models.'
    },
    {
        type: 'scq',
        question: 'The lottery ticket hypothesis suggests that sparse subnetworks can achieve similar performance to dense networks.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'The lottery ticket hypothesis proposes that dense networks contain sparse "winning ticket" subnetworks that can achieve comparable accuracy.',
        tips: 'This has implications for neural network pruning and understanding why certain initializations work better.'
    },
    {
        type: 'mcq',
        question: 'What is the mathematical foundation of Gaussian processes?',
        options: ['Central limit theorem', 'Bayesian inference over function spaces', 'Maximum likelihood estimation', 'Kernel density estimation'],
        answer: 1,
        explanation: 'Gaussian processes provide a Bayesian framework for inference over function spaces, placing prior distributions over functions.',
        tips: 'GPs are particularly useful for uncertainty quantification and small data regimes.'
    },
    {
        type: 'mcq',
        question: 'In federated learning, what is the primary challenge addressed?',
        options: ['Model accuracy', 'Privacy-preserving distributed learning', 'Computational efficiency', 'Data storage'],
        answer: 1,
        explanation: 'Federated learning enables training machine learning models across decentralized data without centralizing sensitive data.',
        tips: 'Challenges include non-IID data, communication constraints, and privacy preservation.'
    },
    {
        type: 'mcq',
        question: 'What is the key insight behind the attention mechanism in terms of memory?',
        options: ['Faster access', 'Content-addressable memory', 'Larger capacity', 'Lower complexity'],
        answer: 1,
        explanation: 'Attention mechanisms implement content-addressable memory, where retrieval is based on content similarity rather than fixed addresses.',
        tips: 'This allows models to dynamically focus on relevant information based on current context.'
    },
    {
        type: 'scq',
        question: 'Generative adversarial networks require explicit likelihood computation.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'GANs learn to generate samples without explicit likelihood computation, using adversarial training between generator and discriminator.',
        tips: 'This implicit approach makes GANs powerful but also makes evaluation and training stability challenging.'
    },
    {
        type: 'mcq',
        question: 'In probabilistic programming, what is the primary advantage?',
        options: ['Faster computation', 'Expressing complex probabilistic models declaratively', 'Better accuracy', 'Lower memory usage'],
        answer: 1,
        explanation: 'Probabilistic programming languages allow expressing complex probabilistic models declaratively, separating model specification from inference.',
        tips: 'Examples include Stan, PyMC, and Pyro, which handle inference automatically.'
    },
    {
        type: 'mcq',
        question: 'What mathematical property makes convex optimization attractive in machine learning?',
        options: ['Global optimum guaranteed', 'Faster computation', 'Better interpretability', 'Lower memory usage'],
        answer: 0,
        explanation: 'Convex optimization guarantees that any local optimum is also a global optimum, ensuring reliable convergence to the best solution.',
        tips: 'Linear regression, logistic regression, and SVMs are examples of convex optimization problems.'
    },
    {
        type: 'mcq',
        question: 'In neural architecture search, what does the search space define?',
        options: ['Training data', 'Set of possible architectures', 'Hyperparameters', 'Optimization methods'],
        answer: 1,
        explanation: 'The search space in NAS defines the set of possible neural network architectures that can be explored and evaluated.',
        tips: 'Well-designed search spaces balance expressiveness with computational feasibility.'
    },
    {
        type: 'scq',
        question: 'Transformer models require positional encodings because attention is permutation invariant.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'Since attention operations are permutation invariant, positional encodings are needed to provide information about sequence order.',
        tips: 'Different positional encoding schemes (sinusoidal, learned, relative) can affect model performance.'
    },
    {
        type: 'mcq',
        question: 'What is the key difference between online and offline reinforcement learning?',
        options: ['Model complexity', 'Data availability during learning vs fixed dataset', 'Computational requirements', 'Algorithm types'],
        answer: 1,
        explanation: 'Online RL learns from interactions with the environment, while offline RL learns from a fixed dataset without environment interaction.',
        tips: 'Offline RL is useful when environment interaction is expensive or risky, like in healthcare or robotics.'
    },
    {
        type: 'mcq',
        question: 'In representation learning, what does disentanglement refer to?',
        options: ['Faster computation', 'Learning separate factors of variation', 'Better accuracy', 'Reduced overfitting'],
        answer: 1,
        explanation: 'Disentangled representations separate different factors of variation in the data into distinct dimensions of the representation space.',
        tips: 'Disentanglement can improve interpretability and generalization, though it\'s challenging to achieve and evaluate.'
    },
    {
        type: 'mcq',
        question: 'What mathematical concept underlies the reparameterization trick in VAEs?',
        options: ['Chain rule', 'Change of variables', 'Integration by parts', 'L\'Hôpital\'s rule'],
        answer: 1,
        explanation: 'The reparameterization trick uses change of variables to move stochasticity outside the gradient computation, enabling backpropagation through sampling.',
        tips: 'This allows VAEs to be trained end-to-end using standard gradient-based optimization.'
    },
    {
        type: 'scq',
        question: 'Graph neural networks can only be applied to static graphs.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'GNNs can be extended to dynamic graphs through techniques like temporal graph networks and continuous-time approaches.',
        tips: 'Dynamic GNNs are important for applications like social network analysis and traffic prediction.'
    },
    {
        type: 'mcq',
        question: 'In multi-task learning, what does negative transfer refer to?',
        options: ['Faster training', 'When learning multiple tasks hurts individual task performance', 'Better generalization', 'Reduced computational cost'],
        answer: 1,
        explanation: 'Negative transfer occurs when jointly learning multiple tasks results in worse performance compared to learning tasks independently.',
        tips: 'Task relatedness and proper architecture design are crucial to avoid negative transfer.'
    },
    {
        type: 'mcq',
        question: 'What is the primary advantage of using mixture of experts (MoE) models?',
        options: ['Simpler training', 'Conditional computation and scalability', 'Better interpretability', 'Faster inference'],
        answer: 1,
        explanation: 'MoE models use conditional computation where only a subset of experts are activated for each input, enabling efficient scaling.',
        tips: 'MoE models can achieve better performance with similar computational cost by increasing model capacity.'
    },
    {
        type: 'mcq',
        question: 'In adversarial machine learning, what is the difference between white-box and black-box attacks?',
        options: ['Attack strength', 'Knowledge of model internals vs treating model as black box', 'Target type', 'Success rate'],
        answer: 1,
        explanation: 'White-box attacks have full knowledge of the model (architecture, weights), while black-box attacks only have access to input-output behavior.',
        tips: 'Black-box attacks are more realistic but generally require more queries to succeed.'
    },
    {
        type: 'scq',
        question: 'Dropout during inference improves model performance.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Dropout is typically turned off during inference. However, Monte Carlo dropout can be used during inference to estimate uncertainty.',
        tips: 'Standard dropout during inference would add unnecessary noise and hurt performance.'
    },
    {
        type: 'mcq',
        question: 'What is the key insight behind contrastive learning?',
        options: ['Faster training', 'Learning representations by comparing similar and dissimilar examples', 'Better accuracy', 'Lower computational cost'],
        answer: 1,
        explanation: 'Contrastive learning learns representations by pulling similar examples together and pushing dissimilar examples apart in the embedding space.',
        tips: 'SimCLR, SwAV, and other self-supervised methods use contrastive learning principles.'
    },
    {
        type: 'mcq',
        question: 'In causal discovery, what do edges in a causal graph represent?',
        options: ['Correlations', 'Direct causal relationships', 'Temporal order', 'Statistical dependencies'],
        answer: 1,
        explanation: 'Edges in causal graphs represent direct causal relationships between variables, not just statistical associations.',
        tips: 'Causal graphs encode assumptions about the data-generating process and enable causal reasoning.'
    },
    {
        type: 'mcq',
        question: 'What is the mathematical foundation of the EM algorithm?',
        options: ['Maximum likelihood estimation', 'Bayesian inference', 'Variational inference', 'Information theory'],
        answer: 0,
        explanation: 'EM algorithm maximizes the likelihood of observed data in the presence of latent variables by alternating between E-step and M-step.',
        tips: 'EM is guaranteed to increase likelihood at each iteration but may converge to local optima.'
    },
    {
        type: 'scq',
        question: 'Residual connections in deep networks always improve performance.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'While residual connections often help with training deeper networks, they don\'t always improve performance and can sometimes hurt efficiency.',
        tips: 'The effectiveness of residual connections depends on the architecture, task, and dataset.'
    },
    {
        type: 'mcq',
        question: 'In neural machine translation, what problem does the attention mechanism solve?',
        options: ['Slow training', 'Information bottleneck in encoder-decoder architectures', 'Memory usage', 'Gradient vanishing'],
        answer: 1,
        explanation: 'Attention mechanisms address the bottleneck of compressing entire input sequences into fixed-size context vectors in encoder-decoder models.',
        tips: 'Attention allows the decoder to directly access relevant parts of the input sequence.'
    },
    {
        type: 'mcq',
        question: 'What is the key difference between model-based and model-free reinforcement learning?',
        options: ['Computational complexity', 'Whether the environment model is learned vs using direct policy/value learning', 'Sample efficiency', 'Algorithm type'],
        answer: 1,
        explanation: 'Model-based RL learns a model of the environment dynamics, while model-free RL directly learns policies or value functions without modeling the environment.',
        tips: 'Model-based RL can be more sample efficient but is sensitive to model errors.'
    },
    {
        type: 'mcq',
        question: 'In deep generative models, what is the fundamental trade-off in the rate-distortion theory?',
        options: ['Speed vs accuracy', 'Compression vs reconstruction quality', 'Memory vs computation', 'Interpretability vs performance'],
        answer: 1,
        explanation: 'Rate-distortion theory formalizes the trade-off between compression rate (how much the data is compressed) and distortion (reconstruction quality).',
        tips: 'This theory helps understand the fundamental limits of lossy compression and representation learning.'
    },
    {
        type: 'scq',
        question: 'Variational inference always provides exact posterior distributions.',
        options: ['True', 'False'],
        answer: 1,
        explanation: 'Variational inference provides approximate posterior distributions by optimizing a tractable family of distributions to be close to the true posterior.',
        tips: 'The quality of approximation depends on the choice of variational family and optimization procedure.'
    },
    {
        type: 'mcq',
        question: 'What is the primary motivation behind neural program synthesis?',
        options: ['Faster execution', 'Automatically generating programs from specifications', 'Better debugging', 'Lower memory usage'],
        answer: 1,
        explanation: 'Neural program synthesis aims to automatically generate programs that satisfy given specifications or input-output examples.',
        tips: 'This combines ideas from programming languages, machine learning, and formal methods.'
    },
    {
        type: 'mcq',
        question: 'In multi-agent reinforcement learning, what is the key challenge?',
        options: ['Computational complexity', 'Non-stationary environment due to other learning agents', 'Memory requirements', 'Communication overhead'],
        answer: 1,
        explanation: 'The primary challenge is that the environment appears non-stationary from each agent\'s perspective because other agents are also learning and changing their policies.',
        tips: 'Techniques include opponent modeling, centralized training with decentralized execution, and game-theoretic approaches.'
    },
    {
        type: 'mcq',
        question: 'What mathematical concept underlies the success of convolutional neural networks for image processing?',
        options: ['Fourier transforms', 'Translation equivariance and local connectivity', 'Linear algebra', 'Probability theory'],
        answer: 1,
        explanation: 'CNNs exploit translation equivariance (shifting input shifts output predictably) and local connectivity, matching the structure of visual data.',
        tips: 'These inductive biases make CNNs particularly effective for images compared to fully connected networks.'
    },
    {
        type: 'scq',
        question: 'The no free lunch theorem implies that all machine learning algorithms perform equally well on average.',
        options: ['True', 'False'],
        answer: 0,
        explanation: 'The no free lunch theorem states that averaged over all possible problems, all algorithms perform equally well, highlighting the importance of problem-specific algorithm choice.',
        tips: 'This theorem emphasizes why domain knowledge and appropriate inductive biases are crucial.'
    },
    {
        type: 'mcq',
        question: 'In neural rendering, what is the key innovation of Neural Radiance Fields (NeRF)?',
        options: ['Faster rendering', 'Representing scenes as continuous functions', 'Better image quality', 'Lower memory usage'],
        answer: 1,
        explanation: 'NeRF represents 3D scenes as continuous neural functions that map 3D coordinates to colors and densities, enabling novel view synthesis.',
        tips: 'NeRF uses volume rendering techniques combined with neural networks to generate photorealistic novel views.'
    },
    {
        type: 'mcq',
        question: 'What is the fundamental assumption of linear discriminant analysis (LDA)?',
        options: ['Classes have equal means', 'Classes have equal covariance matrices', 'Features are independent', 'Data is normally distributed'],
        answer: 1,
        explanation: 'LDA assumes that all classes share the same covariance matrix, which allows for optimal linear decision boundaries under Gaussian assumptions.',
        tips: 'When this assumption is violated, Quadratic Discriminant Analysis (QDA) might be more appropriate.'
    },
    {
        type: 'mcq',
        question: 'In deep learning theory, what does the lottery ticket hypothesis suggest about network initialization?',
        options: ['Random initialization is optimal', 'Some initializations contain "winning" sparse subnetworks', 'Initialization doesn\'t matter', 'Larger networks are always better'],
        answer: 1,
        explanation: 'The lottery ticket hypothesis suggests that dense networks contain rare sparse subnetworks that can achieve comparable accuracy when trained from the right initialization.',
        tips: 'This has implications for network pruning and understanding why some initializations work better than others.'
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.quizQuestions;
}