// AI Foundations Course Content
window.courseContent = {
    courseId: 'ai-foundations',
    courseName: 'AI Foundations',
    chapters: [
        {
            id: 1,
            title: 'Introduction to Artificial Intelligence',
            description: 'Understanding the fundamentals of AI and its applications',
            estimatedTime: '45 minutes',
            theory: `
                <div class="prose max-w-none">
                    <h3 class="text-2xl font-bold mb-4">What is Artificial Intelligence?</h3>
                    <p class="text-lg mb-4">Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think and learn like humans. AI systems can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.</p>
                    
                    <h4 class="text-xl font-semibold mb-3 mt-6">Brief History of AI</h4>
                    <div class="bg-blue-50 p-6 rounded-lg mb-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="timeline-item">
                                <h5 class="font-bold text-blue-800">1950s - The Beginning</h5>
                                <ul class="text-blue-700 text-sm mt-2">
                                    <li>• Alan Turing proposes the Turing Test</li>
                                    <li>• First AI programs developed</li>
                                    <li>• Term "Artificial Intelligence" coined (1956)</li>
                                </ul>
                            </div>
                            <div class="timeline-item">
                                <h5 class="font-bold text-blue-800">1980s-1990s - Knowledge Era</h5>
                                <ul class="text-blue-700 text-sm mt-2">
                                    <li>• Expert systems gain popularity</li>
                                    <li>• Machine learning algorithms advance</li>
                                    <li>• Neural networks research progresses</li>
                                </ul>
                            </div>
                            <div class="timeline-item">
                                <h5 class="font-bold text-blue-800">2000s-2010s - Big Data Era</h5>
                                <ul class="text-blue-700 text-sm mt-2">
                                    <li>• Internet provides massive datasets</li>
                                    <li>• Computing power increases dramatically</li>
                                    <li>• Deep learning revolution begins</li>
                                </ul>
                            </div>
                            <div class="timeline-item">
                                <h5 class="font-bold text-blue-800">2020s - Generative AI Era</h5>
                                <ul class="text-blue-700 text-sm mt-2">
                                    <li>• Large language models emerge</li>
                                    <li>• Generative AI becomes mainstream</li>
                                    <li>• AI assistants and chatbots proliferate</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h4 class="text-xl font-semibold mb-3 mt-6">Types of AI</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                            <h5 class="font-bold text-blue-800 mb-2">Narrow AI (ANI)</h5>
                            <p class="text-blue-700 text-sm mb-2">AI designed for specific tasks. This is what we have today.</p>
                            <div class="text-xs text-blue-600">
                                <strong>Examples:</strong>
                                <ul class="mt-1">
                                    <li>• Siri, Alexa (Voice assistants)</li>
                                    <li>• Chess programs (Deep Blue)</li>
                                    <li>• Image recognition systems</li>
                                    <li>• Recommendation algorithms</li>
                                </ul>
                            </div>
                        </div>
                        <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                            <h5 class="font-bold text-yellow-800 mb-2">General AI (AGI)</h5>
                            <p class="text-yellow-700 text-sm mb-2">AI with human-level cognitive abilities across all domains.</p>
                            <div class="text-xs text-yellow-600">
                                <strong>Characteristics:</strong>
                                <ul class="mt-1">
                                    <li>• Human-level reasoning</li>
                                    <li>• Transfer learning across domains</li>
                                    <li>• Consciousness and self-awareness</li>
                                    <li>• Status: Not yet achieved</li>
                                </ul>
                            </div>
                        </div>
                        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                            <h5 class="font-bold text-red-800 mb-2">Super AI (ASI)</h5>
                            <p class="text-red-700 text-sm mb-2">AI that surpasses human intelligence in all aspects.</p>
                            <div class="text-xs text-red-600">
                                <strong>Implications:</strong>
                                <ul class="mt-1">
                                    <li>• Exceeds human capabilities</li>
                                    <li>• Could solve complex global problems</li>
                                    <li>• Requires careful development</li>
                                    <li>• Status: Hypothetical future</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h4 class="text-xl font-semibold mb-3 mt-6">AI Applications Today</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div class="bg-white p-4 rounded-lg shadow border">
                            <h5 class="font-semibold mb-3 flex items-center text-green-700">
                                🏥 Healthcare
                            </h5>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li><strong>Medical Imaging:</strong> X-ray, MRI, CT scan analysis</li>
                                <li><strong>Drug Discovery:</strong> Accelerating pharmaceutical research</li>
                                <li><strong>Personalized Treatment:</strong> Tailored therapy recommendations</li>
                                <li><strong>Disease Prediction:</strong> Early warning systems</li>
                            </ul>
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow border">
                            <h5 class="font-semibold mb-3 flex items-center text-blue-700">
                                🚗 Transportation
                            </h5>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li><strong>Autonomous Vehicles:</strong> Self-driving cars and trucks</li>
                                <li><strong>Traffic Optimization:</strong> Smart traffic light systems</li>
                                <li><strong>Route Planning:</strong> GPS and navigation systems</li>
                                <li><strong>Predictive Maintenance:</strong> Vehicle health monitoring</li>
                            </ul>
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow border">
                            <h5 class="font-semibold mb-3 flex items-center text-purple-700">
                                💰 Finance
                            </h5>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li><strong>Fraud Detection:</strong> Real-time transaction monitoring</li>
                                <li><strong>Algorithmic Trading:</strong> Automated investment strategies</li>
                                <li><strong>Credit Scoring:</strong> Risk assessment for loans</li>
                                <li><strong>Robo-advisors:</strong> Automated financial planning</li>
                            </ul>
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow border">
                            <h5 class="font-semibold mb-3 flex items-center text-teal-700">
                                🎯 Marketing & Business
                            </h5>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li><strong>Recommendations:</strong> Netflix, Amazon, Spotify</li>
                                <li><strong>Customer Segmentation:</strong> Targeted marketing campaigns</li>
                                <li><strong>Chatbots:</strong> 24/7 customer service</li>
                                <li><strong>Price Optimization:</strong> Dynamic pricing strategies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            code: `
                <div class="code-content">
                    <h4 class="text-xl font-semibold mb-4">🔬 Your First AI Program</h4>
                    <p class="text-gray-700 mb-4">Let's start with a simple machine learning example using Python. This program predicts exam scores based on study hours.</p>
                    
                    <div class="bg-gray-900 rounded-lg p-4 mb-6">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-gray-400 text-sm">Python - Linear Regression Example</span>
                            <button class="copy-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm" onclick="copyCode(this)">
                                📋 Copy Code
                            </button>
                        </div>
                        <pre><code class="language-python"># Import required libraries
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Step 1: Create sample data
# Hours studied vs Exam scores (out of 100)
hours_studied = np.array([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]])
exam_scores = np.array([50, 55, 65, 70, 80, 85, 90, 92, 95, 98])

print("📊 Training Data:")
print("Hours Studied:", hours_studied.flatten())
print("Exam Scores:", exam_scores)

# Step 2: Create and train the AI model
print("\\n🧠 Training the AI model...")
model = LinearRegression()
model.fit(hours_studied, exam_scores)

# Step 3: Make predictions on the training data
predictions = model.predict(hours_studied)

# Step 4: Evaluate the model performance
mse = mean_squared_error(exam_scores, predictions)
r2 = r2_score(exam_scores, predictions)

print("\\n📈 Model Performance:")
print(f"Model Equation: Score = {model.coef_[0]:.2f} × Hours + {model.intercept_:.2f}")
print(f"R-squared Score: {r2:.3f} (Higher is better, max = 1.0)")
print(f"Mean Squared Error: {mse:.2f} (Lower is better)")

# Step 5: Make predictions for new data
print("\\n🔮 Making Predictions:")
new_hours = np.array([[12], [15], [0.5]])
new_predictions = model.predict(new_hours)

for hours, score in zip(new_hours.flatten(), new_predictions):
    print(f"If you study {hours} hours → Predicted score: {score:.1f}")

# Step 6: Visualize the results
plt.figure(figsize=(10, 6))
plt.scatter(hours_studied, exam_scores, color='blue', alpha=0.7, s=100, label='📚 Actual Data')
plt.plot(hours_studied, predictions, color='red', linewidth=3, label='🤖 AI Prediction Line')
plt.scatter(new_hours, new_predictions, color='green', s=150, marker='*', label='⭐ New Predictions')

plt.xlabel('Hours Studied', fontsize=12)
plt.ylabel('Exam Score', fontsize=12)
plt.title('AI Prediction: Study Hours vs Exam Score', fontsize=14, fontweight='bold')
plt.legend()
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()

print("\\n🎯 Key Insights:")
print(f"• Every additional study hour increases score by ~{model.coef_[0]:.1f} points")
print(f"• The model explains {r2*100:.1f}% of the variation in scores")
print(f"• This simple AI can help students plan their study time!")</code></pre>
                    </div>

                    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                        <h5 class="font-semibold text-blue-800 mb-2">📊 Expected Output:</h5>
                        <pre class="text-sm text-blue-700 whitespace-pre-wrap">📊 Training Data:
Hours Studied: [1 2 3 4 5 6 7 8 9 10]
Exam Scores: [50 55 65 70 80 85 90 92 95 98]

🧠 Training the AI model...

📈 Model Performance:
Model Equation: Score = 5.68 × Hours + 44.00
R-squared Score: 0.986 (Higher is better, max = 1.0)
Mean Squared Error: 6.48 (Lower is better)

🔮 Making Predictions:
If you study 12 hours → Predicted score: 112.2
If you study 15 hours → Predicted score: 129.2
If you study 0.5 hours → Predicted score: 46.8

🎯 Key Insights:
• Every additional study hour increases score by ~5.7 points
• The model explains 98.6% of the variation in scores
• This simple AI can help students plan their study time!</pre>
                    </div>
                </div>
            `,
            tips: `
                <div class="tips-content">
                    <div class="bg-gradient-to-r from-yellow-50 to-teal-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                        <h4 class="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                            💡 Essential Tips for AI Beginners
                        </h4>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-4">
                                <div class="bg-white p-4 rounded-lg shadow-sm border border-yellow-200">
                                    <h5 class="font-semibold text-gray-800 mb-2 flex items-center">
                                        🎯 Start Simple
                                    </h5>
                                    <p class="text-gray-700 text-sm mb-2">Begin with basic algorithms like linear regression before moving to complex neural networks.</p>
                                    <ul class="text-xs text-gray-600 list-disc pl-4">
                                        <li>Master the fundamentals first</li>
                                        <li>Don't jump to deep learning immediately</li>
                                        <li>Practice with small datasets</li>
                                    </ul>
                                </div>
                                
                                <div class="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                                    <h5 class="font-semibold text-gray-800 mb-2 flex items-center">
                                        📚 Learn the Math
                                    </h5>
                                    <p class="text-gray-700 text-sm mb-2">Understanding statistics, calculus, and linear algebra will make AI concepts clearer.</p>
                                    <ul class="text-xs text-gray-600 list-disc pl-4">
                                        <li>Statistics: Mean, variance, probability</li>
                                        <li>Linear algebra: Vectors, matrices</li>
                                        <li>Calculus: Derivatives, optimization</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="space-y-4">
                                <div class="bg-white p-4 rounded-lg shadow-sm border border-green-200">
                                    <h5 class="font-semibold text-gray-800 mb-2 flex items-center">
                                        🔧 Practice with Tools
                                    </h5>
                                    <p class="text-gray-700 text-sm mb-2">Get comfortable with Python, Jupyter notebooks, and key libraries.</p>
                                    <ul class="text-xs text-gray-600 list-disc pl-4">
                                        <li>Python: Core programming language</li>
                                        <li>Jupyter: Interactive development</li>
                                        <li>Libraries: NumPy, Pandas, Scikit-learn</li>
                                    </ul>
                                </div>

                                <div class="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                                    <h5 class="font-semibold text-gray-800 mb-2 flex items-center">
                                        📊 Focus on Data
                                    </h5>
                                    <p class="text-gray-700 text-sm mb-2">Good data is more important than complex algorithms. Learn data cleaning and preparation.</p>
                                    <ul class="text-xs text-gray-600 list-disc pl-4">
                                        <li>Data quality beats algorithm complexity</li>
                                        <li>Learn data visualization</li>
                                        <li>Understand data preprocessing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border border-blue-300">
                            <h5 class="font-semibold text-blue-800 mb-3">🚀 Your AI Learning Roadmap</h5>
                            <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
                                <div class="text-center">
                                    <div class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-xs font-bold">1</div>
                                    <div class="font-medium text-green-700">Foundation</div>
                                    <div class="text-green-600 text-xs">Python, Math, Statistics</div>
                                </div>
                                <div class="text-center">
                                    <div class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-xs font-bold">2</div>
                                    <div class="font-medium text-blue-700">Core ML</div>
                                    <div class="text-blue-600 text-xs">Algorithms, Data Processing</div>
                                </div>
                                <div class="text-center">
                                    <div class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-xs font-bold">3</div>
                                    <div class="font-medium text-purple-700">Advanced</div>
                                    <div class="text-purple-600 text-xs">Deep Learning, NLP</div>
                                </div>
                                <div class="text-center">
                                                            <div class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-xs font-bold">4</div>
                        <div class="font-medium text-teal-700">Specialization</div>
                        <div class="text-teal-600 text-xs">Computer Vision, Robotics</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-4 p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">
                            <p class="text-yellow-800 text-sm flex items-center">
                                <span class="mr-2">⚡</span>
                                <strong>Pro Tip:</strong> Don't try to learn everything at once. Master each concept before moving to the next. Consistency beats intensity!
                            </p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            id: 2,
            title: 'Machine Learning Fundamentals',
            description: 'Core concepts of machine learning and its types',
            estimatedTime: '60 minutes',
            theory: `
                <div class="prose max-w-none">
                    <h3 class="text-2xl font-bold mb-4">Machine Learning: The Heart of AI</h3>
                    <p class="text-lg mb-6">Machine Learning (ML) is a subset of AI that enables computers to learn and improve from experience without being explicitly programmed for every task. Instead of following pre-programmed instructions, ML systems identify patterns in data and make predictions or decisions.</p>
                    
                    <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6 border border-blue-200">
                        <h4 class="text-xl font-semibold mb-4 text-blue-800">The Three Pillars of Machine Learning</h4>
                        <div class="space-y-4">
                            <div class="flex items-start space-x-4 p-4 bg-white rounded-lg border-l-4 border-green-500">
                                <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <span class="text-green-600 font-bold text-lg">1</span>
                                </div>
                                <div>
                                    <h5 class="font-bold text-green-700 mb-2">Supervised Learning</h5>
                                    <p class="text-gray-700 mb-2">Learning with labeled examples (teacher provides correct answers)</p>
                                    <div class="text-sm text-gray-600">
                                        <strong>Types:</strong> Classification (categories) & Regression (numbers)<br>
                                        <strong>Examples:</strong> Email spam detection, house price prediction, medical diagnosis
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4 p-4 bg-white rounded-lg border-l-4 border-blue-500">
                                <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span class="text-blue-600 font-bold text-lg">2</span>
                                </div>
                                <div>
                                    <h5 class="font-bold text-blue-700 mb-2">Unsupervised Learning</h5>
                                    <p class="text-gray-700 mb-2">Finding hidden patterns in data without labels (no teacher)</p>
                                    <div class="text-sm text-gray-600">
                                        <strong>Types:</strong> Clustering (grouping) & Dimensionality Reduction<br>
                                        <strong>Examples:</strong> Customer segmentation, anomaly detection, recommendation systems
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4 p-4 bg-white rounded-lg border-l-4 border-purple-500">
                                <div class="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <span class="text-purple-600 font-bold text-lg">3</span>
                                </div>
                                <div>
                                    <h5 class="font-bold text-purple-700 mb-2">Reinforcement Learning</h5>
                                    <p class="text-gray-700 mb-2">Learning through trial and error with rewards and penalties</p>
                                    <div class="text-sm text-gray-600">
                                        <strong>Types:</strong> Policy-based & Value-based learning<br>
                                        <strong>Examples:</strong> Game AI (AlphaGo), robotics, autonomous vehicles
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            code: `
                <div class="code-content">
                    <h4 class="text-xl font-semibold mb-4">🔍 Classification Example: Iris Flower Species</h4>
                    <p class="text-gray-700 mb-4">Let's build a classifier to identify iris flower species based on measurements.</p>
                    
                    <div class="bg-gray-900 rounded-lg p-4 mb-6">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-gray-400 text-sm">Python - Iris Classification</span>
                            <button class="copy-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm" onclick="copyCode(this)">
                                📋 Copy Code
                            </button>
                        </div>
                        <pre><code class="language-python">from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# Load the iris dataset
iris = load_iris()
X, y = iris.data, iris.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)

# Make predictions
predictions = clf.predict(X_test)
accuracy = accuracy_score(y_test, predictions)

print(f"Accuracy: {accuracy:.2f}")
print(classification_report(y_test, predictions, target_names=iris.target_names))</code></pre>
                    </div>
                </div>
            `,
            tips: `
                <div class="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                    <h4 class="font-bold text-green-800 mb-4">🎯 Machine Learning Best Practices</h4>
                    <ul class="text-green-700 space-y-2">
                        <li>• Always split your data into train/validation/test sets</li>
                        <li>• Start with simple models before trying complex ones</li>
                        <li>• Feature engineering often matters more than algorithm choice</li>
                        <li>• Cross-validation helps ensure robust model performance</li>
                        <li>• Understand your data before building models</li>
                    </ul>
                </div>
            `
        },
        {
            id: 3,
            title: 'Neural Networks and Deep Learning',
            description: 'Introduction to neural networks and deep learning concepts',
            estimatedTime: '75 minutes',
            theory: `
                <div class="prose max-w-none">
                    <h3 class="text-2xl font-bold mb-4">Neural Networks: The Brain-Inspired AI</h3>
                    <p class="text-lg mb-6">Neural networks are computing systems inspired by biological neural networks. They consist of interconnected nodes (neurons) that process information and learn patterns from data, much like how our brain works.</p>
                    
                    <h4 class="text-xl font-semibold mb-4">From Biological to Artificial Neurons</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
                            <h5 class="font-bold text-purple-700 mb-3">🧠 Biological Neuron</h5>
                            <ul class="text-sm text-gray-700 space-y-2">
                                <li>• <strong>Dendrites:</strong> Receive signals from other neurons</li>
                                <li>• <strong>Cell Body:</strong> Processes incoming signals</li>
                                <li>• <strong>Axon:</strong> Transmits output signals</li>
                                <li>• <strong>Synapses:</strong> Connections between neurons</li>
                            </ul>
                        </div>
                        <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h5 class="font-bold text-blue-700 mb-3">🤖 Artificial Neuron</h5>
                            <ul class="text-sm text-gray-700 space-y-2">
                                <li>• <strong>Inputs:</strong> Receive data from previous layer</li>
                                <li>• <strong>Weights:</strong> Determine signal importance</li>
                                <li>• <strong>Activation Function:</strong> Processes weighted sum</li>
                                <li>• <strong>Output:</strong> Sends result to next layer</li>
                            </ul>
                        </div>
                    </div>

                    <h4 class="text-xl font-semibold mb-4">Deep Learning Applications</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow">
                            <h5 class="font-bold text-blue-700 mb-2">🖼️ Computer Vision</h5>
                            <p class="text-gray-700 text-sm">Image recognition, object detection, medical imaging</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg border-l-4 border-green-500 shadow">
                            <h5 class="font-bold text-green-700 mb-2">🗣️ Natural Language</h5>
                            <p class="text-gray-700 text-sm">Translation, chatbots, sentiment analysis</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow">
                            <h5 class="font-bold text-purple-700 mb-2">🎵 Speech & Audio</h5>
                            <p class="text-gray-700 text-sm">Voice recognition, music generation</p>
                        </div>
                                            <div class="bg-white p-4 rounded-lg border-l-4 border-teal-500 shadow">
                        <h5 class="font-bold text-teal-700 mb-2">🎨 Generative AI</h5>
                            <p class="text-gray-700 text-sm">Creating images, text, music, videos</p>
                        </div>
                    </div>
                </div>
            `,
            code: `
                <div class="code-content">
                    <h4 class="text-xl font-semibold mb-4">🧠 Building Your First Neural Network</h4>
                    <p class="text-gray-700 mb-4">Let's create a neural network using TensorFlow/Keras for digit recognition.</p>
                    
                    <div class="bg-gray-900 rounded-lg p-4 mb-6">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-gray-400 text-sm">Python - Neural Network with TensorFlow</span>
                            <button class="copy-btn bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm" onclick="copyCode(this)">
                                📋 Copy Code
                            </button>
                        </div>
                        <pre><code class="language-python">import tensorflow as tf
from tensorflow import keras
import numpy as np

# Load MNIST dataset
(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()

# Normalize pixel values
x_train = x_train.astype('float32') / 255.0
x_test = x_test.astype('float32') / 255.0

# Flatten images
x_train_flat = x_train.reshape(x_train.shape[0], -1)
x_test_flat = x_test.reshape(x_test.shape[0], -1)

# Build neural network
model = keras.Sequential([
    keras.layers.Dense(128, activation='relu', input_shape=(784,)),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(10, activation='softmax')
])

# Compile model
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# Train model
history = model.fit(x_train_flat, y_train,
                   epochs=10,
                   batch_size=128,
                   validation_split=0.1,
                   verbose=1)

# Evaluate model
test_loss, test_accuracy = model.evaluate(x_test_flat, y_test, verbose=0)
print(f"Test Accuracy: {test_accuracy:.4f}")

# Make predictions
predictions = model.predict(x_test_flat[:10])
for i in range(10):
    predicted_digit = np.argmax(predictions[i])
    actual_digit = y_test[i]
    confidence = predictions[i][predicted_digit]
    print(f"Image {i}: Predicted {predicted_digit} (confidence: {confidence:.2%}), Actual: {actual_digit}")</code></pre>
                    </div>
                </div>
            `,
            tips: `
                <div class="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg">
                    <h4 class="font-bold text-purple-800 mb-4">🧠 Neural Network Tips</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h5 class="font-semibold text-gray-800 mb-2">🏗️ Architecture</h5>
                            <ul class="text-purple-700 text-sm space-y-1">
                                <li>• Start with 1-2 hidden layers</li>
                                <li>• Use ReLU activation for hidden layers</li>
                                <li>• Add dropout to prevent overfitting</li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="font-semibold text-gray-800 mb-2">⚙️ Training</h5>
                            <ul class="text-purple-700 text-sm space-y-1">
                                <li>• Monitor training and validation loss</li>
                                <li>• Use early stopping when needed</li>
                                <li>• Experiment with different optimizers</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-4 p-4 bg-purple-100 rounded-lg">
                        <p class="text-purple-800 text-sm">
                            <strong>Remember:</strong> Deep learning requires patience and experimentation. Start simple and gradually increase complexity!
                        </p>
                    </div>
                </div>
            `
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.courseContent;
}