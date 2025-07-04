
// chapters/libraries.js
console.log('Loading libraries chapter...');

window.PYTHON_CONTENT.chapters.libraries = {
    title: 'Popular Libraries',
    content: `
        <h1>📚 Popular Python Libraries</h1>
        
        <div class="theory-box">
            <h4>Extending Python's Capabilities</h4>
            <p>Python's strength lies not just in the language itself, but in its vast ecosystem of libraries. These libraries provide pre-built functionality for almost every task imaginable, from web development and data analysis to machine learning and scientific computing.</p>
        </div>

        <h2>Requests - HTTP for Humans</h2>
        <p>The most popular library for making HTTP requests in Python.</p>

        <div class="code-block">
            <span class="comment"># Install: pip install requests</span>
            <div class="command">import requests</div>
            <div class="command">import json</div>
            
            <span class="comment"># Simple GET request</span>
            <div class="command">response = requests.get('https://api.github.com/users/octocat')</div>
            <div class="command">print(f"Status Code: {response.status_code}")</div>
            <div class="command">print(f"Content Type: {response.headers['content-type']}")</div>
            
            <span class="comment"># JSON response</span>
            <div class="command">if response.status_code == 200:</div>
            <div class="command">    user_data = response.json()</div>
            <div class="command">    print(f"Name: {user_data['name']}")</div>
            <div class="command">    print(f"Public Repos: {user_data['public_repos']}")</div>
            
            <span class="comment"># POST request with data</span>
            <div class="command">post_data = {</div>
            <div class="command">    'title': 'Test Post',</div>
            <div class="command">    'body': 'This is a test post',</div>
            <div class="command">    'userId': 1</div>
            <div class="command">}</div>
            
            <div class="command">post_response = requests.post(</div>
            <div class="command">    'https://jsonplaceholder.typicode.com/posts',</div>
            <div class="command">    json=post_data</div>
            <div class="command">)</div>
            <div class="command">print(f"Post Status: {post_response.status_code}")</div>
            
            <div class="output">Status Code: 200</div>
            <div class="output">Content Type: application/json; charset=utf-8</div>
            <div class="output">Name: The Octocat</div>
            <div class="output">Public Repos: 8</div>
            <div class="output">Post Status: 201</div>
        </div>

        <h2>NumPy - Numerical Computing</h2>
        <div class="code-block">
            <span class="comment"># Install: pip install numpy</span>
            <div class="command">import numpy as np</div>
            
            <span class="comment"># Creating arrays</span>
            <div class="command">arr1 = np.array([1, 2, 3, 4, 5])</div>
            <div class="command">arr2 = np.array([[1, 2, 3], [4, 5, 6]])</div>
            <div class="command">zeros = np.zeros((3, 3))</div>
            <div class="command">ones = np.ones((2, 4))</div>
            <div class="command">range_arr = np.arange(0, 10, 2)</div>
            
            <div class="command">print(f"Array 1: {arr1}")</div>
            <div class="command">print(f"Array 2 shape: {arr2.shape}")</div>
            <div class="command">print(f"Range array: {range_arr}")</div>
            
            <span class="comment"># Array operations</span>
            <div class="command">numbers = np.array([1, 2, 3, 4, 5])</div>
            <div class="command">squared = numbers ** 2</div>
            <div class="command">doubled = numbers * 2</div>
            
            <div class="command">print(f"Original: {numbers}")</div>
            <div class="command">print(f"Squared: {squared}")</div>
            <div class="command">print(f"Doubled: {doubled}")</div>
            
            <span class="comment"># Statistical operations</span>
            <div class="command">data = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])</div>
            <div class="command">print(f"Mean: {np.mean(data)}")</div>
            <div class="command">print(f"Standard deviation: {np.std(data)}")</div>
            
            <div class="output">Array 1: [1 2 3 4 5]</div>
            <div class="output">Array 2 shape: (2, 3)</div>
            <div class="output">Range array: [0 2 4 6 8]</div>
            <div class="output">Original: [1 2 3 4 5]</div>
            <div class="output">Squared: [ 1  4  9 16 25]</div>
            <div class="output">Doubled: [ 2  4  6  8 10]</div>
            <div class="output">Mean: 5.5</div>
            <div class="output">Standard deviation: 2.8722813232690143</div>
        </div>

        <h2>Pandas - Data Analysis</h2>
        <div class="code-block">
            <span class="comment"># Install: pip install pandas</span>
            <div class="command">import pandas as pd</div>
            <div class="command">import numpy as np</div>
            
            <span class="comment"># Creating DataFrames</span>
            <div class="command">data = {</div>
            <div class="command">    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],</div>
            <div class="command">    'Age': [25, 30, 35, 28, 32],</div>
            <div class="command">    'City': ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'],</div>
            <div class="command">    'Salary': [50000, 60000, 55000, 52000, 58000]</div>
            <div class="command">}</div>
            
            <div class="command">df = pd.DataFrame(data)</div>
            <div class="command">print("DataFrame:")</div>
            <div class="command">print(df)</div>
            <div class="command">print(f"\\nDataFrame shape: {df.shape}")</div>
            
            <span class="comment"># Data selection and filtering</span>
            <div class="command">print(f"\\nNames: {df['Name'].tolist()}")</div>
            <div class="command">print(f"Average age: {df['Age'].mean()}")</div>
            
            <span class="comment"># Filtering data</span>
            <div class="command">high_earners = df[df['Salary'] > 55000]</div>
            <div class="command">print(f"\\nHigh earners:\\n{high_earners}")</div>
            
            <div class="output">DataFrame:</div>
            <div class="output">      Name  Age      City  Salary</div>
            <div class="output">0    Alice   25  New York   50000</div>
            <div class="output">1      Bob   30    London   60000</div>
            <div class="output">2  Charlie   35     Tokyo   55000</div>
            <div class="output">3    Diana   28     Paris   52000</div>
            <div class="output">4      Eve   32    Sydney   58000</div>
            <div class="output"></div>
            <div class="output">DataFrame shape: (5, 4)</div>
            <div class="output">Names: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve']</div>
            <div class="output">Average age: 30.0</div>
        </div>

        <div class="exercise">
            <h4>🎯 Exercise 10: Data Analysis Project</h4>
            <div class="exercise-step">
                <strong>Step 1:</strong> Use requests to fetch data from a public API (e.g., weather, stock prices, or GitHub repos)
            </div>
            <div class="exercise-step">
                <strong>Step 2:</strong> Use pandas to clean and analyze the data
            </div>
            <div class="exercise-step">
                <strong>Step 3:</strong> Create visualizations using matplotlib
            </div>
            <div class="exercise-step">
                <strong>Step 4:</strong> Save your analysis as a CSV file and create a summary report
            </div>
            <div class="exercise-step">
                <strong>Step 5:</strong> Package everything into a reusable script with proper error handling
            </div>
        </div>

        <div class="tip">
            <strong>💡 Library Selection Tips:</strong>
            <ul>
                <li>Start with the most popular libraries in each category</li>
                <li>Read documentation and examples before choosing</li>
                <li>Consider the library's maintenance and community support</li>
                <li>Use virtual environments to manage dependencies</li>
                <li>Keep track of library versions for reproducible environments</li>
                <li>Explore alternatives - sometimes newer libraries offer better features</li>
            </ul>
        </div>
    `
};
