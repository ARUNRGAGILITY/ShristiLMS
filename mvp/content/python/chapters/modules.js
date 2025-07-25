// chapters/modules.js
console.log('Loading modules chapter...');

window.PYTHON_CONTENT.chapters.modules = {
    title: 'Modules and Packages',
    content: `
        <h1>📦 Modules and Packages</h1>
        
        <div class="theory-box">
            <h4>Organizing and Reusing Code</h4>
            <p>Modules and packages are Python's way of organizing code into reusable components. They allow you to break large programs into smaller, manageable files and reuse code across different projects. Understanding modules is crucial for writing maintainable and scalable Python applications.</p>
        </div>

        <h2>What are Modules?</h2>
        <p>A module is a file containing Python code that can define functions, classes, and variables. It can also include runnable code.</p>

        <h2>Creating and Using Modules</h2>
        <div class="code-block">
            <span class="comment"># math_utils.py - Our custom module</span>
            <div class="command">"""A module for mathematical utilities."""</div>
            
            <div class="command">PI = 3.14159</div>
            
            <div class="command">def add(a, b):</div>
            <div class="command">    """Add two numbers."""</div>
            <div class="command">    return a + b</div>
            
            <div class="command">def multiply(a, b):</div>
            <div class="command">    """Multiply two numbers."""</div>
            <div class="command">    return a * b</div>
            
            <div class="command">def circle_area(radius):</div>
            <div class="command">    """Calculate the area of a circle."""</div>
            <div class="command">    return PI * radius ** 2</div>
            
            <div class="command">if __name__ == "__main__":</div>
            <div class="command">    # This code runs only when the module is executed directly</div>
            <div class="command">    print("Testing math_utils module")</div>
            <div class="command">    print(f"5 + 3 = {add(5, 3)}")</div>
            <div class="command">    print(f"Area of circle with radius 2: {circle_area(2)}")</div>
        </div>

        <h2>Importing Modules</h2>
        <div class="code-block">
            <span class="comment"># Different ways to import</span>
            
            <span class="comment"># 1. Import entire module</span>
            <div class="command">import math_utils</div>
            <div class="command">result = math_utils.add(5, 3)</div>
            <div class="command">print(result)</div>
            
            <span class="comment"># 2. Import specific functions</span>
            <div class="command">from math_utils import add, multiply</div>
            <div class="command">result = add(10, 20)</div>
            <div class="command">print(result)</div>
            
            <span class="comment"># 3. Import with alias</span>
            <div class="command">import math_utils as math</div>
            <div class="command">result = math.circle_area(5)</div>
            <div class="command">print(result)</div>
            
            <div class="output">8</div>
            <div class="output">30</div>
            <div class="output">78.53975</div>
        </div>

        <h2>Built-in Modules</h2>
        <div class="code-block">
            <span class="comment"># Math module</span>
            <div class="command">import math</div>
            <div class="command">print(math.pi)</div>
            <div class="command">print(math.sqrt(16))</div>
            <div class="command">print(math.sin(math.pi / 2))</div>
            
            <span class="comment"># Random module</span>
            <div class="command">import random</div>
            <div class="command">print(random.randint(1, 10))</div>
            <div class="command">print(random.choice(['apple', 'banana', 'cherry']))</div>
            
            <span class="comment"># Datetime module</span>
            <div class="command">import datetime</div>
            <div class="command">now = datetime.datetime.now()</div>
            <div class="command">print(now.strftime("%Y-%m-%d %H:%M:%S"))</div>
            
            <div class="output">3.141592653589793</div>
            <div class="output">4.0</div>
            <div class="output">1.0</div>
            <div class="output">7</div>
            <div class="output">banana</div>
            <div class="output">2024-01-15 14:30:25</div>
        </div>

        <h2>Virtual Environments</h2>
        <div class="code-block">
            <span class="comment"># Create virtual environment</span>
            <div class="command">$ python -m venv myenv</div>
            
            <span class="comment"># Activate virtual environment</span>
            <div class="command"># On Windows:</div>
            <div class="command">$ myenv\\Scripts\\activate</div>
            <div class="command"># On macOS/Linux:</div>
            <div class="command">$ source myenv/bin/activate</div>
            
            <span class="comment"># Install packages in virtual environment</span>
            <div class="command">$ pip install requests pandas</div>
            
            <span class="comment"># Save dependencies</span>
            <div class="command">$ pip freeze > requirements.txt</div>
            
            <span class="comment"># Deactivate virtual environment</span>
            <div class="command">$ deactivate</div>
        </div>

        <div class="exercise">
            <h4>🎯 Exercise 7: Weather Information Module</h4>
            <div class="exercise-step">
                <strong>Step 1:</strong> Create a 'weather.py' module with functions to convert temperatures
            </div>
            <div class="exercise-step">
                <strong>Step 2:</strong> Add a class to store weather information (temperature, humidity, conditions)
            </div>
            <div class="exercise-step">
                <strong>Step 3:</strong> Create a main program that imports and uses your weather module
            </div>
            <div class="exercise-step">
                <strong>Step 4:</strong> Install the 'requests' package and fetch real weather data from an API
            </div>
            <div class="exercise-step">
                <strong>Step 5:</strong> Create a package structure with separate modules for different weather functions
            </div>
        </div>

        <div class="tip">
            <strong>💡 Module Best Practices:</strong>
            <ul>
                <li>Use descriptive module names that indicate their purpose</li>
                <li>Keep modules focused on a single responsibility</li>
                <li>Use 'if __name__ == "__main__":' for code that should only run when the module is executed directly</li>
                <li>Write docstrings for modules, classes, and functions</li>
                <li>Use virtual environments to manage dependencies</li>
                <li>Avoid circular imports between modules</li>
            </ul>
        </div>
    `
};
