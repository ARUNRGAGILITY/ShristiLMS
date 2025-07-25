// chapters/intro.js
console.log('Loading intro chapter...');

window.PYTHON_CONTENT.chapters.intro = {
    title: 'Introduction to Python',
    content: `
        <h1>🐍 Introduction to Python</h1>
        
        <div class="theory-box">
            <h4>What is Python?</h4>
            <p>Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python emphasizes code readability with its notable use of significant whitespace. It supports multiple programming paradigms including procedural, object-oriented, and functional programming.</p>
        </div>

        <h2>Why Learn Python?</h2>
        <p>Python has become one of the most popular programming languages in the world, and for good reason:</p>

        <div class="practice-box">
            <h4>Python's Key Advantages</h4>
            <ul>
                <li><strong>Easy to Learn:</strong> Simple, readable syntax that resembles English</li>
                <li><strong>Versatile:</strong> Used in web development, data science, AI, automation, and more</li>
                <li><strong>Large Community:</strong> Extensive libraries and frameworks available</li>
                <li><strong>Cross-Platform:</strong> Runs on Windows, Mac, Linux, and more</li>
                <li><strong>High Demand:</strong> One of the most sought-after skills in tech</li>
            </ul>
        </div>

        <div class="scenario-box">
            <h4>Real-World Applications</h4>
            <ul>
                <li><strong>Web Development:</strong> Django, Flask - Used by Instagram, Pinterest</li>
                <li><strong>Data Science:</strong> NumPy, Pandas, Matplotlib - Netflix, Spotify analytics</li>
                <li><strong>Machine Learning:</strong> TensorFlow, PyTorch - Google, Tesla AI</li>
                <li><strong>Automation:</strong> Selenium, Beautiful Soup - DevOps, testing</li>
                <li><strong>Game Development:</strong> Pygame - Indie games, prototyping</li>
            </ul>
        </div>

        <h2>Python Philosophy: The Zen of Python</h2>
        <div class="code-block">
            <span class="comment"># Try this in Python interpreter</span>
            <div class="command">>>> import this</div>
            <div class="output">The Zen of Python, by Tim Peters</div>
            <div class="output"></div>
            <div class="output">Beautiful is better than ugly.</div>
            <div class="output">Explicit is better than implicit.</div>
            <div class="output">Simple is better than complex.</div>
            <div class="output">Complex is better than complicated.</div>
            <div class="output">Readability counts.</div>
            <div class="output">...</div>
        </div>

        <h2>Setting Up Python</h2>
        <div class="mermaid-container">
            <div class="mermaid">
            graph TD
                A[Install Python] --> B[Choose IDE/Editor]
                B --> C[Write First Program]
                C --> D[Run and Test]
                
                A --> E[Python.org]
                A --> F[Anaconda]
                A --> G[Package Manager]
                
                B --> H[VS Code]
                B --> I[PyCharm]
                B --> J[Jupyter Notebook]
                
                style A fill:#4caf50
                style B fill:#ff9800
                style C fill:#2196f3
            </div>
        </div>

        <h3>Installation Options</h3>
        <div class="code-block">
            <span class="comment"># Check if Python is installed</span>
            <div class="command">$ python --version</div>
            <div class="output">Python 3.9.7</div>
            
            <span class="comment"># Alternative command</span>
            <div class="command">$ python3 --version</div>
            <div class="output">Python 3.9.7</div>
            
            <span class="comment"># Start Python interpreter</span>
            <div class="command">$ python</div>
            <div class="output">Python 3.9.7 (default, Sep 16 2021, 16:59:28)</div>
            <div class="output">>>> </div>
        </div>

        <h2>Your First Python Program</h2>
        <div class="code-block">
            <span class="comment"># hello_world.py</span>
            <div class="command">print("Hello, World!")</div>
            <div class="command">print("Welcome to Python programming!")</div>
            <div class="command">print("Let's start coding! 🐍")</div>
            
            <span class="comment"># Run the program</span>
            <div class="command">$ python hello_world.py</div>
            <div class="output">Hello, World!</div>
            <div class="output">Welcome to Python programming!</div>
            <div class="output">Let's start coding! 🐍</div>
        </div>

        <div class="exercise">
            <h4>🎯 Exercise 1: Getting Started</h4>
            <div class="exercise-step">
                <strong>Step 1:</strong> Install Python from python.org or using a package manager
            </div>
            <div class="exercise-step">
                <strong>Step 2:</strong> Verify installation by checking the version
            </div>
            <div class="exercise-step">
                <strong>Step 3:</strong> Create a file called 'my_first_program.py'
            </div>
            <div class="exercise-step">
                <strong>Step 4:</strong> Write a program that prints your name and favorite hobby
            </div>
            <div class="exercise-step">
                <strong>Step 5:</strong> Run your program from the command line
            </div>
        </div>

        <h2>Python vs Other Languages</h2>
        <div class="mermaid-container">
            <div class="mermaid">
                graph LR
                    A["Hello World Comparison"] --> B["Python: 1 line"]
                    A --> C["Java: 5+ lines"]
                    A --> D["C++: 6+ lines"]
                    A --> E["JavaScript: 1 line"]
                    
                    B --> F["Python Code"]
                    F --> G["print('Hello, World!')"]
                    
                    style B fill:#4caf50
                    style F fill:#c8e6c9
                    style G fill:#f0f4c3
            </div>
        </div>
        <div class="practice-box">
            <h4>Language Comparison</h4>
            <p><strong>Python:</strong> Simple, readable, great for beginners</p>
            <div class="code-block">
                <div class="command">print("Hello, World!")</div>
            </div>
            <p><strong>Java:</strong> Verbose, strongly typed, enterprise-focused</p>
            <div class="code-block">
                <div class="command">public class HelloWorld {</div>
                <div class="command">    public static void main(String[] args) {</div>
                <div class="command">        System.out.println("Hello, World!");</div>
                <div class="command">    }</div>
                <div class="command">}</div>
            </div>
        </div>

        <div class="tip">
            <strong>💡 Pro Tip:</strong> Python's philosophy of "There should be one obvious way to do it" makes it easier to write clean, maintainable code. This is why Python is often recommended as a first programming language.
        </div>

        <div class="warning">
            <strong>⚠️ Python 2 vs Python 3:</strong> Always use Python 3 (3.6+) for new projects. Python 2 reached end-of-life in 2020 and is no longer supported.
        </div>
    `
};