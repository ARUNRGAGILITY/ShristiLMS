// python_content.js
console.log('Loading python_content.js...');

const PYTHON_CONTENT = {
    icon: '🐍',
    title: 'Python Mastery',
    description: 'Master Python programming from basics to advanced concepts',
    chapters: {
        intro: {
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
                        A[Hello World Comparison] --> B[Python: 1 line]
                        A --> C[Java: 5+ lines]
                        A --> D[C++: 6+ lines]
                        A --> E[JavaScript: 1 line]
                        
                        B --> F[print("Hello, World!")]
                        
                        style B fill:#4caf50
                        style F fill:#c8e6c9
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
        },
        basics: {
            title: 'Python Basics',
            content: `
                <h1>📚 Python Basics</h1>
                
                <div class="theory-box">
                    <h4>Building Blocks of Python</h4>
                    <p>Every Python program is built using fundamental elements: variables, data types, operators, and basic input/output operations. Understanding these basics is crucial for writing any Python program.</p>
                </div>

                <h2>Variables and Assignment</h2>
                <p>Variables in Python are like containers that store data. Unlike many other languages, Python doesn't require you to declare the type of a variable explicitly.</p>

                <div class="code-block">
                    <span class="comment"># Variable assignment</span>
                    <div class="command">name = "Alice"</div>
                    <div class="command">age = 25</div>
                    <div class="command">height = 5.6</div>
                    <div class="command">is_student = True</div>
                    
                    <span class="comment"># Print variables</span>
                    <div class="command">print(f"Name: {name}")</div>
                    <div class="command">print(f"Age: {age}")</div>
                    <div class="command">print(f"Height: {height} feet")</div>
                    <div class="command">print(f"Is student: {is_student}")</div>
                    
                    <div class="output">Name: Alice</div>
                    <div class="output">Age: 25</div>
                    <div class="output">Height: 5.6 feet</div>
                    <div class="output">Is student: True</div>
                </div>

                <h2>Data Types</h2>
                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Python Data Types] --> B[Numbers]
                        A --> C[Strings]
                        A --> D[Booleans]
                        A --> E[Collections]
                        
                        B --> F[int: 42]
                        B --> G[float: 3.14]
                        B --> H[complex: 2+3j]
                        
                        C --> I[str: "Hello"]
                        
                        D --> J[bool: True/False]
                        
                        E --> K[list: [1,2,3]]
                        E --> L[dict: {key: value}]
                        E --> M[tuple: (1,2,3)]
                        E --> N[set: {1,2,3}]
                        
                        style A fill:#4caf50
                        style B fill:#ff9800
                        style C fill:#2196f3
                        style D fill:#9c27b0
                        style E fill:#f44336
                    </div>
                </div>

                <div class="code-block">
                    <span class="comment"># Numbers</span>
                    <div class="command">integer_num = 42</div>
                    <div class="command">float_num = 3.14159</div>
                    <div class="command">complex_num = 2 + 3j</div>
                    
                    <span class="comment"># Strings</span>
                    <div class="command">single_quotes = 'Hello'</div>
                    <div class="command">double_quotes = "World"</div>
                    <div class="command">multi_line = """This is a</div>
                    <div class="command">multi-line string"""</div>
                    
                    <span class="comment"># Booleans</span>
                    <div class="command">is_true = True</div>
                    <div class="command">is_false = False</div>
                    
                    <span class="comment"># Check types</span>
                    <div class="command">print(type(integer_num))</div>
                    <div class="command">print(type(single_quotes))</div>
                    <div class="command">print(type(is_true))</div>
                    
                    <div class="output">&lt;class 'int'&gt;</div>
                    <div class="output">&lt;class 'str'&gt;</div>
                    <div class="output">&lt;class 'bool'&gt;</div>
                </div>

                <h2>Operators</h2>
                <div class="practice-box">
                    <h4>Types of Operators</h4>
                    <ul>
                        <li><strong>Arithmetic:</strong> +, -, *, /, //, %, **</li>
                        <li><strong>Comparison:</strong> ==, !=, <, >, <=, >=</li>
                        <li><strong>Logical:</strong> and, or, not</li>
                        <li><strong>Assignment:</strong> =, +=, -=, *=, /=</li>
                    </ul>
                </div>

                <div class="code-block">
                    <span class="comment"># Arithmetic operators</span>
                    <div class="command">a = 10</div>
                    <div class="command">b = 3</div>
                    
                    <div class="command">print(f"Addition: {a + b}")</div>
                    <div class="command">print(f"Subtraction: {a - b}")</div>
                    <div class="command">print(f"Multiplication: {a * b}")</div>
                    <div class="command">print(f"Division: {a / b}")</div>
                    <div class="command">print(f"Floor division: {a // b}")</div>
                    <div class="command">print(f"Modulus: {a % b}")</div>
                    <div class="command">print(f"Exponentiation: {a ** b}")</div>
                    
                    <div class="output">Addition: 13</div>
                    <div class="output">Subtraction: 7</div>
                    <div class="output">Multiplication: 30</div>
                    <div class="output">Division: 3.3333333333333335</div>
                    <div class="output">Floor division: 3</div>
                    <div class="output">Modulus: 1</div>
                    <div class="output">Exponentiation: 1000</div>
                </div>

                <div class="code-block">
                    <span class="comment"># Comparison and logical operators</span>
                    <div class="command">x = 5</div>
                    <div class="command">y = 10</div>
                    
                    <div class="command">print(f"x == y: {x == y}")</div>
                    <div class="command">print(f"x < y: {x < y}")</div>
                    <div class="command">print(f"x > y: {x > y}")</div>
                    
                    <div class="command">print(f"x < y and x > 0: {x < y and x > 0}")</div>
                    <div class="command">print(f"x > y or x < 10: {x > y or x < 10}")</div>
                    <div class="command">print(f"not (x > y): {not (x > y)}")</div>
                    
                    <div class="output">x == y: False</div>
                    <div class="output">x < y: True</div>
                    <div class="output">x > y: False</div>
                    <div class="output">x < y and x > 0: True</div>
                    <div class="output">x > y or x < 10: True</div>
                    <div class="output">not (x > y): True</div>
                </div>

                <h2>String Operations</h2>
                <p>Strings are sequences of characters and are one of the most commonly used data types in Python.</p>

                <div class="code-block">
                    <span class="comment"># String creation and basic operations</span>
                    <div class="command">first_name = "John"</div>
                    <div class="command">last_name = "Doe"</div>
                    
                    <span class="comment"># String concatenation</span>
                    <div class="command">full_name = first_name + " " + last_name</div>
                    <div class="command">print(full_name)</div>
                    
                    <span class="comment"># String formatting</span>
                    <div class="command">age = 30</div>
                    <div class="command">message = f"My name is {full_name} and I am {age} years old"</div>
                    <div class="command">print(message)</div>
                    
                    <span class="comment"># String methods</span>
                    <div class="command">text = "Hello, World!"</div>
                    <div class="command">print(text.upper())</div>
                    <div class="command">print(text.lower())</div>
                    <div class="command">print(text.replace("World", "Python"))</div>
                    <div class="command">print(len(text))</div>
                    
                    <div class="output">John Doe</div>
                    <div class="output">My name is John Doe and I am 30 years old</div>
                    <div class="output">HELLO, WORLD!</div>
                    <div class="output">hello, world!</div>
                    <div class="output">Hello, Python!</div>
                    <div class="output">13</div>
                </div>

                <h2>Input and Output</h2>
                <div class="code-block">
                    <span class="comment"># Getting user input</span>
                    <div class="command">name = input("What's your name? ")</div>
                    <div class="command">age = int(input("How old are you? "))</div>
                    
                    <span class="comment"># Processing and output</span>
                    <div class="command">birth_year = 2024 - age</div>
                    <div class="command">print(f"Hello, {name}!")</div>
                    <div class="command">print(f"You were born in {birth_year}")</div>
                    
                    <span class="comment"># Multiple print options</span>
                    <div class="command">print("Hello", "World", sep="-")</div>
                    <div class="command">print("Loading", end="...")</div>
                    <div class="command">print("Done!")</div>
                    
                    <div class="output">What's your name? Alice</div>
                    <div class="output">How old are you? 25</div>
                    <div class="output">Hello, Alice!</div>
                    <div class="output">You were born in 1999</div>
                    <div class="output">Hello-World</div>
                    <div class="output">Loading...Done!</div>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 2: Calculator Program</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Create a simple calculator that takes two numbers as input
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Perform all basic arithmetic operations (+, -, *, /)
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Display the results using f-strings
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Add input validation to handle non-numeric input
                    </div>
                    <div class="exercise-step">
                        <strong>Step 5:</strong> Test your calculator with different numbers
                    </div>
                </div>

                <div class="scenario-box">
                    <h4>Common Beginner Mistakes</h4>
                    <ul>
                        <li><strong>Forgetting to convert input:</strong> 'input()' always returns a string</li>
                        <li><strong>Variable naming:</strong> Use descriptive names, not 'x' or 'data'</li>
                        <li><strong>Indentation:</strong> Python uses indentation to define code blocks</li>
                        <li><strong>String vs Number:</strong> "5" + "3" = "53", but 5 + 3 = 8</li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>💡 Best Practices:</strong>
                    <ul>
                        <li>Use meaningful variable names: 'student_name' instead of 'sn'</li>
                        <li>Add comments to explain complex logic</li>
                        <li>Use f-strings for string formatting (Python 3.6+)</li>
                        <li>Follow PEP 8 style guidelines</li>
                    </ul>
                </div>
            `
        },
        control_flow: {
            title: 'Control Flow',
            content: `
                <h1>🔄 Control Flow</h1>
                
                <div class="theory-box">
                    <h4>Making Decisions and Repeating Actions</h4>
                    <p>Control flow statements allow your program to make decisions and repeat actions. These are the building blocks that make your programs dynamic and interactive, enabling them to respond to different conditions and process data efficiently.</p>
                </div>

                <h2>Conditional Statements (if, elif, else)</h2>
                <p>Conditional statements allow your program to execute different code blocks based on certain conditions.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Start] --> B{Condition?}
                        B -->|True| C[Execute if block]
                        B -->|False| D{elif condition?}
                        D -->|True| E[Execute elif block]
                        D -->|False| F[Execute else block]
                        C --> G[Continue]
                        E --> G
                        F --> G
                        
                        style A fill:#4caf50
                        style B fill:#ff9800
                        style D fill:#ff9800
                        style G fill:#2196f3
                    </div>
                </div>

                <div class="code-block">
                    <span class="comment"># Basic if statement</span>
                    <div class="command">age = 18</div>
                    <div class="command">if age >= 18:</div>
                    <div class="command">    print("You are an adult")</div>
                    <div class="command">    print("You can vote")</div>
                    
                    <span class="comment"># if-else statement</span>
                    <div class="command">temperature = 25</div>
                    <div class="command">if temperature > 30:</div>
                    <div class="command">    print("It's hot today!")</div>
                    <div class="command">else:</div>
                    <div class="command">    print("It's not too hot")</div>
                    
                    <span class="comment"># if-elif-else statement</span>
                    <div class="command">score = 85</div>
                    <div class="command">if score >= 90:</div>
                    <div class="command">    grade = "A"</div>
                    <div class="command">elif score >= 80:</div>
                    <div class="command">    grade = "B"</div>
                    <div class="command">elif score >= 70:</div>
                    <div class="command">    grade = "C"</div>
                    <div class="command">elif score >= 60:</div>
                    <div class="command">    grade = "D"</div>
                    <div class="command">else:</div>
                    <div class="command">    grade = "F"</div>
                    
                    <div class="command">print(f"Your grade is: {grade}")</div>
                    
                    <div class="output">You are an adult</div>
                    <div class="output">You can vote</div>
                    <div class="output">It's not too hot</div>
                    <div class="output">Your grade is: B</div>
                </div>

                <h2>Loops</h2>
                <p>Loops allow you to repeat code multiple times, making your programs more efficient and powerful.</p>

                <h3>For Loops</h3>
                <div class="code-block">
                    <span class="comment"># Basic for loop</span>
                    <div class="command">for i in range(5):</div>
                    <div class="command">    print(f"Count: {i}")</div>
                    
                    <span class="comment"># For loop with range parameters</span>
                    <div class="command">for i in range(2, 10, 2):</div>
                    <div class="command">    print(f"Even number: {i}")</div>
                    
                    <span class="comment"># Loop through a list</span>
                    <div class="command">fruits = ["apple", "banana", "orange"]</div>
                    <div class="command">for fruit in fruits:</div>
                    <div class="command">    print(f"I like {fruit}")</div>
                    
                    <span class="comment"># Loop with index</span>
                    <div class="command">for index, fruit in enumerate(fruits):</div>
                    <div class="command">    print(f"{index}: {fruit}")</div>
                    
                    <div class="output">Count: 0</div>
                    <div class="output">Count: 1</div>
                    <div class="output">Count: 2</div>
                    <div class="output">Count: 3</div>
                    <div class="output">Count: 4</div>
                    <div class="output">Even number: 2</div>
                    <div class="output">Even number: 4</div>
                    <div class="output">Even number: 6</div>
                    <div class="output">Even number: 8</div>
                    <div class="output">I like apple</div>
                    <div class="output">I like banana</div>
                    <div class="output">I like orange</div>
                    <div class="output">0: apple</div>
                    <div class="output">1: banana</div>
                    <div class="output">2: orange</div>
                </div>

                <h3>While Loops</h3>
                <div class="code-block">
                    <span class="comment"># Basic while loop</span>
                    <div class="command">count = 0</div>
                    <div class="command">while count < 3:</div>
                    <div class="command">    print(f"Count is {count}")</div>
                    <div class="command">    count += 1</div>
                    
                    <span class="comment"># While loop with user input</span>
                    <div class="command">password = ""</div>
                    <div class="command">while password != "secret":</div>
                    <div class="command">    password = input("Enter password: ")</div>
                    <div class="command">    if password != "secret":</div>
                    <div class="command">        print("Incorrect password!")</div>
                    <div class="command">print("Access granted!")</div>
                    
                    <span class="comment"># Infinite loop with break</span>
                    <div class="command">while True:</div>
                    <div class="command">    user_input = input("Enter 'quit' to exit: ")</div>
                    <div class="command">    if user_input == 'quit':</div>
                    <div class="command">        break</div>
                    <div class="command">    print(f"You entered: {user_input}")</div>
                    
                    <div class="output">Count is 0</div>
                    <div class="output">Count is 1</div>
                    <div class="output">Count is 2</div>
                </div>

                <h2>Loop Control: break and continue</h2>
                <div class="code-block">
                    <span class="comment"># Using break to exit loop early</span>
                    <div class="command">for i in range(10):</div>
                    <div class="command">    if i == 5:</div>
                    <div class="command">        break</div>
                    <div class="command">    print(i)</div>
                    
                    <span class="comment"># Using continue to skip iteration</span>
                    <div class="command">for i in range(10):</div>
                    <div class="command">    if i % 2 == 0:</div>
                    <div class="command">        continue</div>
                    <div class="command">    print(f"Odd number: {i}")</div>
                    
                    <span class="comment"># Nested loops with break</span>
                    <div class="command">for i in range(3):</div>
                    <div class="command">    for j in range(3):</div>
                    <div class="command">        if i == j:</div>
                    <div class="command">            break</div>
                    <div class="command">        print(f"i={i}, j={j}")</div>
                    
                    <div class="output">0</div>
                    <div class="output">1</div>
                    <div class="output">2</div>
                    <div class="output">3</div>
                    <div class="output">4</div>
                    <div class="output">Odd number: 1</div>
                    <div class="output">Odd number: 3</div>
                    <div class="output">Odd number: 5</div>
                    <div class="output">Odd number: 7</div>
                    <div class="output">Odd number: 9</div>
                    <div class="output">i=1, j=0</div>
                    <div class="output">i=2, j=0</div>
                    <div class="output">i=2, j=1</div>
                </div>

                <h2>Match-Case Statement (Python 3.10+)</h2>
                <p>The match-case statement provides a cleaner way to handle multiple conditions, similar to switch statements in other languages.</p>

                <div class="code-block">
                    <span class="comment"># Match-case example</span>
                    <div class="command">def handle_status(status):</div>
                    <div class="command">    match status:</div>
                    <div class="command">        case "pending":</div>
                    <div class="command">            return "Please wait..."</div>
                    <div class="command">        case "approved":</div>
                    <div class="command">            return "Request approved!"</div>
                    <div class="command">        case "denied":</div>
                    <div class="command">            return "Request denied"</div>
                    <div class="command">        case _:</div>
                    <div class="command">            return "Unknown status"</div>
                    
                    <span class="comment"># Using the function</span>
                    <div class="command">print(handle_status("approved"))</div>
                    <div class="command">print(handle_status("unknown"))</div>
                    
                    <div class="output">Request approved!</div>
                    <div class="output">Unknown status</div>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 3: Number Guessing Game</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Generate a random number between 1 and 100
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Use a while loop to keep asking for guesses
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Use if-elif-else to give hints (too high, too low, correct)
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Count the number of attempts
                    </div>
                    <div class="exercise-step">
                        <strong>Step 5:</strong> Break the loop when the correct number is guessed
                    </div>
                </div>

                <div class="scenario-box">
                    <h4>Real-World Example: Password Validator</h4>
                    <div class="code-block">
                        <div class="command">def validate_password(password):</div>
                        <div class="command">    if len(password) < 8:</div>
                        <div class="command">        return False, "Password too short"</div>
                        <div class="command">    </div>
                        <div class="command">    has_upper = any(c.isupper() for c in password)</div>
                        <div class="command">    has_lower = any(c.islower() for c in password)</div>
                        <div class="command">    has_digit = any(c.isdigit() for c in password)</div>
                        <div class="command">    </div>
                        <div class="command">    if not (has_upper and has_lower and has_digit):</div>
                        <div class="command">        return False, "Password needs upper, lower, and digit"</div>
                        <div class="command">    </div>
                        <div class="command">    return True, "Password is valid"</div>
                    </div>
                </div>

                <div class="tip">
                    <strong>💡 Control Flow Best Practices:</strong>
                    <ul>
                        <li>Use meaningful conditions that are easy to understand</li>
                        <li>Avoid deeply nested if statements when possible</li>
                        <li>Use 'break' and 'continue' sparingly and document why</li>
                        <li>Consider using 'match-case' for complex conditional logic</li>
                        <li>Always ensure while loops have a way to terminate</li>
                    </ul>
                </div>

                <div class="warning">
                    <strong>⚠️ Common Pitfalls:</strong>
                    <ul>
                        <li><strong>Infinite loops:</strong> Always ensure your while loop condition can become False</li>
                        <li><strong>Off-by-one errors:</strong> Remember that 'range(5)' goes from 0 to 4, not 1 to 5</li>
                        <li><strong>Indentation:</strong> Python uses indentation to determine code blocks</li>
                    </ul>
                </div>
            `
        },
        data_structures: {
            title: 'Data Structures',
            content: `
                <h1>📦 Data Structures</h1>
                
                <div class="theory-box">
                    <h4>Organizing and Storing Data</h4>
                    <p>Data structures are ways to organize and store data so that it can be accessed and modified efficiently. Python provides several built-in data structures, each with their own strengths and use cases.</p>
                </div>

                <h2>Lists</h2>
                <p>Lists are ordered, mutable collections that can store items of different types.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph LR
                        A[List Features] --> B[Ordered]
                        A --> C[Mutable]
                        A --> D[Allow Duplicates]
                        A --> E[Mixed Types]
                        
                        B --> F[Index: 0,1,2,3...]
                        C --> G[Can Change Items]
                        D --> H[Same Value OK]
                        E --> I[Numbers, Strings, etc.]
                        
                        style A fill:#4caf50
                        style B fill:#ff9800
                        style C fill:#2196f3
                        style D fill:#9c27b0
                        style E fill:#f44336
                    </div>
                </div>

                <div class="code-block">
                    <span class="comment"># Creating lists</span>
                    <div class="command">fruits = ["apple", "banana", "orange"]</div>
                    <div class="command">numbers = [1, 2, 3, 4, 5]</div>
                    <div class="command">mixed = [1, "hello", 3.14, True]</div>
                    <div class="command">empty_list = []</div>
                    
                    <span class="comment"># Accessing elements</span>
                    <div class="command">print(fruits[0])        # First element</div>
                    <div class="command">print(fruits[-1])       # Last element</div>
                    <div class="command">print(fruits[1:3])      # Slicing</div>
                    
                    <span class="comment"># Modifying lists</span>
                    <div class="command">fruits[1] = "grape"     # Change element</div>
                    <div class="command">fruits.append("kiwi")   # Add to end</div>
                    <div class="command">fruits.insert(1, "mango")  # Insert at index</div>
                    <div class="command">fruits.remove("orange") # Remove by value</div>
                    <div class="command">popped = fruits.pop()   # Remove and return last</div>
                    
                    <span class="comment"># List methods</span>
                    <div class="command">print(len(fruits))      # Length</div>
                    <div class="command">print("apple" in fruits)  # Check membership</div>
                    <div class="command">fruits.sort()          # Sort in place</div>
                    <div class="command">fruits.reverse()       # Reverse in place</div>
                    
                    <div class="output">apple</div>
                    <div class="output">orange</div>
                    <div class="output">['banana', 'orange']</div>
                    <div class="output">4</div>
                    <div class="output">True</div>
                </div>

                <h2>Tuples</h2>
                <p>Tuples are ordered, immutable collections. They're perfect for storing related data that shouldn't change.</p>

                <div class="code-block">
                    <span class="comment"># Creating tuples</span>
                    <div class="command">coordinates = (10, 20)</div>
                    <div class="command">person = ("John", "Doe", 30)</div>
                    <div class="command">single_item = ("hello",)  # Note the comma</div>
                    <div class="command">empty_tuple = ()</div>
                    
                    <span class="comment"># Accessing elements</span>
                    <div class="command">print(coordinates[0])     # First element</div>
                    <div class="command">print(person[-1])        # Last element</div>
                    
                    <span class="comment"># Tuple unpacking</span>
                    <div class="command">x, y = coordinates</div>
                    <div class="command">first_name, last_name, age = person</div>
                    <div class="command">print(f"Name: {first_name} {last_name}, Age: {age}")</div>
                    
                    <span class="comment"># Tuple methods</span>
                    <div class="command">numbers = (1, 2, 3, 2, 4, 2)</div>
                    <div class="command">print(numbers.count(2))   # Count occurrences</div>
                    <div class="command">print(numbers.index(3))   # Find index</div>
                    
                    <div class="output">10</div>
                    <div class="output">30</div>
                    <div class="output">Name: John Doe, Age: 30</div>
                    <div class="output">3</div>
                    <div class="output">2</div>
                </div>

                <h2>Dictionaries</h2>
                <p>Dictionaries store key-value pairs, allowing you to access data using meaningful keys instead of numeric indices.</p>

                <div class="code-block">
                    <span class="comment"># Creating dictionaries</span>
                    <div class="command">student = {</div>
                    <div class="command">    "name": "Alice",</div>
                    <div class="command">    "age": 20,</div>
                    <div class="command">    "grades": [85, 92, 78]</div>
                    <div class="command">}</div>
                    
                    <span class="comment"># Accessing values</span>
                    <div class="command">print(student["name"])</div>
                    <div class="command">print(student.get("age", "Unknown"))</div>
                    
                    <span class="comment"># Modifying dictionaries</span>
                    <div class="command">student["age"] = 21          # Update value</div>
                    <div class="command">student["major"] = "Computer Science"  # Add new key</div>
                    <div class="command">del student["grades"]       # Remove key</div>
                    
                    <span class="comment"># Dictionary methods</span>
                    <div class="command">print(student.keys())       # All keys</div>
                    <div class="command">print(student.values())     # All values</div>
                    <div class="command">print(student.items())      # Key-value pairs</div>
                    
                    <span class="comment"># Iterating through dictionaries</span>
                    <div class="command">for key, value in student.items():</div>
                    <div class="command">    print(f"{key}: {value}")</div>
                    
                    <div class="output">Alice</div>
                    <div class="output">20</div>
                    <div class="output">dict_keys(['name', 'age', 'major'])</div>
                    <div class="output">dict_values(['Alice', 21, 'Computer Science'])</div>
                    <div class="output">dict_items([('name', 'Alice'), ('age', 21), ('major', 'Computer Science')])</div>
                    <div class="output">name: Alice</div>
                    <div class="output">age: 21</div>
                    <div class="output">major: Computer Science</div>
                </div>

                <h2>Sets</h2>
                <p>Sets are unordered collections of unique elements. They're perfect for removing duplicates and mathematical operations.</p>

                <div class="code-block">
                    <span class="comment"># Creating sets</span>
                    <div class="command">fruits = {"apple", "banana", "orange"}</div>
                    <div class="command">numbers = {1, 2, 3, 4, 5}</div>
                    <div class="command">empty_set = set()  # Note: {} creates an empty dict</div>
                    
                    <span class="comment"># Set operations</span>
                    <div class="command">fruits.add("grape")        # Add element</div>
                    <div class="command">fruits.remove("banana")    # Remove element</div>
                    <div class="command">fruits.discard("kiwi")     # Remove if exists</div>
                    
                    <span class="comment"># Set mathematics</span>
                    <div class="command">set1 = {1, 2, 3, 4}</div>
                    <div class="command">set2 = {3, 4, 5, 6}</div>
                    
                    <div class="command">print(set1 | set2)         # Union</div>
                    <div class="command">print(set1 & set2)         # Intersection</div>
                    <div class="command">print(set1 - set2)         # Difference</div>
                    <div class="command">print(set1 ^ set2)         # Symmetric difference</div>
                    
                    <span class="comment"># Remove duplicates from list</span>
                    <div class="command">numbers_with_duplicates = [1, 2, 2, 3, 3, 3, 4]</div>
                    <div class="command">unique_numbers = list(set(numbers_with_duplicates))</div>
                    <div class="command">print(unique_numbers)</div>
                    
                    <div class="output">{1, 2, 3, 4, 5, 6}</div>
                    <div class="output">{3, 4}</div>
                    <div class="output">{1, 2}</div>
                    <div class="output">{1, 2, 5, 6}</div>
                    <div class="output">[1, 2, 3, 4]</div>
                </div>

                <h2>List Comprehensions</h2>
                <p>List comprehensions provide a concise way to create lists based on existing lists or other iterables.</p>

                <div class="code-block">
                    <span class="comment"># Basic list comprehension</span>
                    <div class="command">squares = [x**2 for x in range(10)]</div>
                    <div class="command">print(squares)</div>
                    
                    <span class="comment"># List comprehension with condition</span>
                    <div class="command">even_squares = [x**2 for x in range(10) if x % 2 == 0]</div>
                    <div class="command">print(even_squares)</div>
                    
                    <span class="comment"># Processing strings</span>
                    <div class="command">words = ["hello", "world", "python"]</div>
                    <div class="command">lengths = [len(word) for word in words]</div>
                    <div class="command">upper_words = [word.upper() for word in words]</div>
                    
                    <span class="comment"># Nested list comprehension</span>
                    <div class="command">matrix = [[i*j for j in range(3)] for i in range(3)]</div>
                    <div class="command">print(matrix)</div>
                    
                    <span class="comment"># Dictionary comprehension</span>
                    <div class="command">word_lengths = {word: len(word) for word in words}</div>
                    <div class="command">print(word_lengths)</div>
                    
                    <div class="output">[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]</div>
                    <div class="output">[0, 4, 16, 36, 64]</div>
                    <div class="output">[[0, 0, 0], [0, 1, 2], [0, 2, 4]]</div>
                    <div class="output">{'hello': 5, 'world': 5, 'python': 6}</div>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 4: Student Grade Manager</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Create a dictionary to store student names and their grades (list of scores)
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Add functions to add new students, add grades, and calculate averages
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Use list comprehensions to find students with averages above 85
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Create a set of all unique grades across all students
                    </div>
                    <div class="exercise-step">
                        <strong>Step 5:</strong> Display the results in a formatted table
                    </div>
                </div>

                <div class="scenario-box">
                    <h4>Choosing the Right Data Structure</h4>
                    <ul>
                        <li><strong>List:</strong> When you need ordered, changeable data with possible duplicates</li>
                        <li><strong>Tuple:</strong> When you need ordered, unchangeable data (coordinates, database records)</li>
                        <li><strong>Dictionary:</strong> When you need key-value pairs for fast lookups</li>
                        <li><strong>Set:</strong> When you need unique elements or mathematical set operations</li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>💡 Performance Tips:</strong>
                    <ul>
                        <li>Use sets for membership testing - much faster than lists</li>
                        <li>Use dictionaries for key-based lookups</li>
                        <li>List comprehensions are often faster than traditional loops</li>
                        <li>Consider using 'collections.defaultdict' for dictionaries with default values</li>
                    </ul>
                </div>

                <div class="warning">
                    <strong>⚠️ Common Mistakes:</strong>
                    <ul>
                        <li><strong>Modifying lists while iterating:</strong> This can cause unexpected behavior</li>
                        <li><strong>Using mutable objects as dictionary keys:</strong> Only use immutable types</li>
                        <li><strong>Confusing '{}' with 'set()':</strong> '{}' creates an empty dict, not a set</li>
                    </ul>
                </div>
            `
        },
        functions: {
            title: 'Functions',
            content: `
                <h1>⚙️ Functions</h1>
                
                <div class="theory-box">
                    <h4>Reusable Code Blocks</h4>
                    <p>Functions are reusable blocks of code that perform specific tasks. They help organize code, reduce repetition, and make programs more modular and maintainable. Functions are the building blocks of larger programs.</p>
                </div>

                <h2>Defining and Calling Functions</h2>
                <p>Functions are defined using the 'def' keyword followed by the function name and parameters.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Function Definition] --> B[Function Name]
                        A --> C[Parameters]
                        A --> D[Function Body]
                        A --> E[Return Value]
                        
                        B --> F[def greet()]
                        C --> G[def greet(name)]
                        D --> H[print("Hello")]
                        E --> I[return result]
                        
                        style A fill:#4caf50
                        style B fill:#ff9800
                        style C fill:#2196f3
                        style D fill:#9c27b0
                        style E fill:#f44336
                    </div>
                </div>

                <div class="code-block">
                    <span class="comment"># Simple function without parameters</span>
                    <div class="command">def greet():</div>
                    <div class="command">    print("Hello, World!")</div>
                    
                    <span class="comment"># Function with parameters</span>
                    <div class="command">def greet_person(name):</div>
                    <div class="command">    print(f"Hello, {name}!")</div>
                    
                    <span class="comment"># Function with return value</span>
                    <div class="command">def add_numbers(a, b):</div>
                    <div class="command">    result = a + b</div>
                    <div class="command">    return result</div>
                    
                    <span class="comment"># Function with default parameters</span>
                    <div class="command">def greet_with_title(name, title="Mr."):</div>
                    <div class="command">    return f"Hello, {title} {name}!"</div>
                    
                    <span class="comment"># Calling functions</span>
                    <div class="command">greet()                    # No parameters</div>
                    <div class="command">greet_person("Alice")      # With parameter</div>
                    <div class="command">sum_result = add_numbers(5, 3)  # Store return value</div>
                    <div class="command">print(sum_result)</div>
                    
                    <div class="command">print(greet_with_title("Smith"))        # Use default</div>
                    <div class="command">print(greet_with_title("Jones", "Dr.")) # Override default</div>
                    
                    <div class="output">Hello, World!</div>
                    <div class="output">Hello, Alice!</div>
                    <div class="output">8</div>
                    <div class="output">Hello, Mr. Smith!</div>
                    <div class="output">Hello, Dr. Jones!</div>
                </div>

                <h2>Function Parameters and Arguments</h2>
                <p>Python functions support various types of parameters and arguments for maximum flexibility.</p>

                <div class="code-block">
                    <span class="comment"># Positional arguments</span>
                    <div class="command">def describe_pet(name, animal_type):</div>
                    <div class="command">    print(f"I have a {animal_type} named {name}")</div>
                    
                    <div class="command">describe_pet("Buddy", "dog")     # Positional order matters</div>
                    <div class="command">describe_pet("Whiskers", "cat")</div>
                    
                    <span class="comment"># Keyword arguments</span>
                    <div class="command">describe_pet(animal_type="dog", name="Buddy")  # Order doesn't matter</div>
                    
                    <span class="comment"># Default parameters</span>
                    <div class="command">def describe_pet_default(name, animal_type="dog"):</div>
                    <div class="command">    print(f"I have a {animal_type} named {name}")</div>
                    
                    <div class="command">describe_pet_default("Buddy")              # Use default</div>
                    <div class="command">describe_pet_default("Whiskers", "cat")   # Override default</div>
                    
                    <span class="comment"># Variable-length arguments (*args)</span>
                    <div class="command">def sum_all(*numbers):</div>
                    <div class="command">    total = 0</div>
                    <div class="command">    for num in numbers:</div>
                    <div class="command">        total += num</div>
                    <div class="command">    return total</div>
                    
                    <div class="command">print(sum_all(1, 2, 3, 4, 5))</div>
                    <div class="command">print(sum_all(10, 20))</div>
                    
                    <span class="comment"># Keyword arguments (**kwargs)</span>
                    <div class="command">def print_info(**info):</div>
                    <div class="command">    for key, value in info.items():</div>
                    <div class="command">        print(f"{key}: {value}")</div>
                    
                    <div class="command">print_info(name="Alice", age=25, city="New York")</div>
                    
                    <div class="output">I have a dog named Buddy</div>
                    <div class="output">I have a cat named Whiskers</div>
                    <div class="output">I have a dog named Buddy</div>
                    <div class="output">I have a dog named Buddy</div>
                    <div class="output">I have a cat named Whiskers</div>
                    <div class="output">15</div>
                    <div class="output">30</div>
                    <div class="output">name: Alice</div>
                    <div class="output">age: 25</div>
                    <div class="output">city: New York</div>
                </div>

                <h2>Return Values and Multiple Returns</h2>
                <div class="code-block">
                    <span class="comment"># Function returning a single value</span>
                    <div class="command">def calculate_area(radius):</div>
                    <div class="command">    area = 3.14159 * radius ** 2</div>
                    <div class="command">    return area</div>
                    
                    <span class="comment"># Function returning multiple values</span>
                    <div class="command">def get_name_parts(full_name):</div>
                    <div class="command">    names = full_name.split()</div>
                    <div class="command">    first_name = names[0]</div>
                    <div class="command">    last_name = names[-1]</div>
                    <div class="command">    return first_name, last_name</div>
                    
                    <span class="comment"># Function with conditional returns</span>
                    <div class="command">def divide_numbers(a, b):</div>
                    <div class="command">    if b == 0:</div>
                    <div class="command">        return None, "Cannot divide by zero"</div>
                    <div class="command">    return a / b, "Success"</div>
                    
                    <span class="comment"># Using the functions</span>
                    <div class="command">area = calculate_area(5)</div>
                    <div class="command">print(f"Area: {area}")</div>
                    
                    <div class="command">first, last = get_name_parts("John Doe")</div>
                    <div class="command">print(f"First: {first}, Last: {last}")</div>
                    
                    <div class="command">result, message = divide_numbers(10, 2)</div>
                    <div class="command">print(f"Result: {result}, Message: {message}")</div>
                    
                    <div class="output">Area: 78.53975</div>
                    <div class="output">First: John, Last: Doe</div>
                    <div class="output">Result: 5.0, Message: Success</div>
                </div>

                <h2>Local and Global Scope</h2>
                <p>Variables have different scopes - local variables exist only within functions, while global variables exist throughout the program.</p>

                <div class="code-block">
                    <span class="comment"># Global variable</span>
                    <div class="command">global_var = "I'm global"</div>
                    
                    <div class="command">def scope_example():</div>
                    <div class="command">    local_var = "I'm local"</div>
                    <div class="command">    print(f"Inside function: {global_var}")</div>
                    <div class="command">    print(f"Inside function: {local_var}")</div>
                    
                    <div class="command">def modify_global():</div>
                    <div class="command">    global global_var</div>
                    <div class="command">    global_var = "I'm modified"</div>
                    
                    <div class="command">print(f"Before function: {global_var}")</div>
                    <div class="command">scope_example()</div>
                    <div class="command">modify_global()</div>
                    <div class="command">print(f"After function: {global_var}")</div>
                    
                    <span class="comment"># This would cause an error:</span>
                    <span class="comment"># print(local_var)  # NameError: name 'local_var' is not defined</span>
                    
                    <div class="output">Before function: I'm global</div>
                    <div class="output">Inside function: I'm global</div>
                    <div class="output">Inside function: I'm local</div>
                    <div class="output">After function: I'm modified</div>
                </div>

                <h2>Lambda Functions</h2>
                <p>Lambda functions are small, anonymous functions that can be defined inline.</p>

                <div class="code-block">
                    <span class="comment"># Basic lambda function</span>
                    <div class="command">square = lambda x: x ** 2</div>
                    <div class="command">print(square(5))</div>
                    
                    <span class="comment"># Lambda with multiple parameters</span>
                    <div class="command">add = lambda x, y: x + y</div>
                    <div class="command">print(add(3, 7))</div>
                    
                    <span class="comment"># Using lambda with built-in functions</span>
                    <div class="command">numbers = [1, 2, 3, 4, 5]</div>
                    <div class="command">squared = list(map(lambda x: x ** 2, numbers))</div>
                    <div class="command">print(squared)</div>
                    
                    <div class="command">even_numbers = list(filter(lambda x: x % 2 == 0, numbers))</div>
                    <div class="command">print(even_numbers)</div>
                    
                    <span class="comment"># Lambda for sorting</span>
                    <div class="command">students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]</div>
                    <div class="command">students.sort(key=lambda student: student[1])  # Sort by grade</div>
                    <div class="command">print(students)</div>
                    
                    <div class="output">25</div>
                    <div class="output">10</div>
                    <div class="output">[1, 4, 9, 16, 25]</div>
                    <div class="output">[2, 4]</div>
                    <div class="output">[('Charlie', 78), ('Alice', 85), ('Bob', 92)]</div>
                </div>

                <h2>Decorators</h2>
                <p>Decorators are a way to modify or extend the behavior of functions without changing their code.</p>

                <div class="code-block">
                    <span class="comment"># Simple decorator</span>
                    <div class="command">def my_decorator(func):</div>
                    <div class="command">    def wrapper():</div>
                    <div class="command">        print("Something is happening before the function is called.")</div>
                    <div class="command">        func()</div>
                    <div class="command">        print("Something is happening after the function is called.")</div>
                    <div class="command">    return wrapper</div>
                    
                    <span class="comment"># Using the decorator</span>
                    <div class="command">@my_decorator</div>
                    <div class="command">def say_hello():</div>
                    <div class="command">    print("Hello!")</div>
                    
                    <div class="command">say_hello()</div>
                    
                    <span class="comment"># Timer decorator</span>
                    <div class="command">import time</div>
                    <div class="command">def timer(func):</div>
                    <div class="command">    def wrapper(*args, **kwargs):</div>
                    <div class="command">        start = time.time()</div>
                    <div class="command">        result = func(*args, **kwargs)</div>
                    <div class="command">        end = time.time()</div>
                    <div class="command">        print(f"{func.__name__} took {end - start:.4f} seconds")</div>
                    <div class="command">        return result</div>
                    <div class="command">    return wrapper</div>
                    
                    <div class="command">@timer</div>
                    <div class="command">def slow_function():</div>
                    <div class="command">    time.sleep(1)</div>
                    <div class="command">    return "Done!"</div>
                    
                    <div class="command">result = slow_function()</div>
                    
                    <div class="output">Something is happening before the function is called.</div>
                    <div class="output">Hello!</div>
                    <div class="output">Something is happening after the function is called.</div>
                    <div class="output">slow_function took 1.0012 seconds</div>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 5: Temperature Converter</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Create functions to convert between Celsius, Fahrenheit, and Kelvin
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Add parameter validation to ensure reasonable temperature values
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Create a main function that presents a menu to the user
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Use lambda functions to create a temperature validation function
                    </div>
                    <div class="exercise-step">
                        <strong>Step 5:</strong> Add a decorator to log all temperature conversions
                    </div>
                </div>

                <div class="scenario-box">
                    <h4>Real-World Function Example: Data Processing</h4>
                    <div class="code-block">
                        <div class="command">def process_student_data(students, min_grade=60):</div>
                        <div class="command">    """Process student data and return statistics."""</div>
                        <div class="command">    passing_students = [s for s in students if s['grade'] >= min_grade]</div>
                        <div class="command">    </div>
                        <div class="command">    if not passing_students:</div>
                        <div class="command">        return {"average": 0, "passing_count": 0, "pass_rate": 0}</div>
                        <div class="command">    </div>
                        <div class="command">    average = sum(s['grade'] for s in passing_students) / len(passing_students)</div>
                        <div class="command">    pass_rate = len(passing_students) / len(students) * 100</div>
                        <div class="command">    </div>
                        <div class="command">    return {</div>
                        <div class="command">        "average": round(average, 2),</div>
                        <div class="command">        "passing_count": len(passing_students),</div>
                        <div class="command">        "pass_rate": round(pass_rate, 2)</div>
                        <div class="command">    }</div>
                    </div>
                </div>

                <div class="tip">
                    <strong>💡 Function Best Practices:</strong>
                    <ul>
                        <li>Use descriptive function names that indicate what they do</li>
                        <li>Keep functions small and focused on a single task</li>
                        <li>Use docstrings to document function purpose and parameters</li>
                        <li>Avoid using global variables inside functions when possible</li>
                        <li>Use type hints for better code documentation</li>
                    </ul>
                </div>

                <div class="warning">
                    <strong>⚠️ Common Function Pitfalls:</strong>
                    <ul>
                        <li><strong>Mutable default arguments:</strong> Avoid 'def func(lst=[]):' - use 'None' instead</li>
                        <li><strong>Modifying global state:</strong> Functions should be predictable and not cause side effects</li>
                        <li><strong>Too many parameters:</strong> Consider using dictionaries or classes for complex data</li>
                    </ul>
                </div>
            `
        },
        oop: {
            title: 'Object-Oriented Programming',
            content: `
                <h1>🏗️ Object-Oriented Programming</h1>
                
                <div class="theory-box">
                    <h4>Organizing Code with Classes and Objects</h4>
                    <p>Object-Oriented Programming (OOP) is a programming paradigm that organizes code into classes and objects. It provides a way to structure programs so that properties and behaviors are bundled into individual objects, making code more modular, reusable, and easier to maintain.</p>
                </div>

                <h2>Classes and Objects</h2>
                <p>A class is a blueprint for creating objects. Objects are instances of classes that contain both data (attributes) and functions (methods).</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Class: Blueprint] --> B[Object 1: Instance]
                        A --> C[Object 2: Instance]
                        A --> D[Object 3: Instance]
                        
                        B --> E[Attributes: Data]
                        B --> F[Methods: Functions]
                        
                        C --> G[Attributes: Data]
                        C --> H[Methods: Functions]
                        
                        style A fill:#4caf50
                        style B fill:#ff9800
                        style C fill:#ff9800
                        style D fill:#ff9800
                    </div>
                </div>

                <div class="code-block">
                    <span class="comment"># Defining a class</span>
                    <div class="command">class Dog:</div>
                    <div class="command">    # Class variable (shared by all instances)</div>
                    <div class="command">    species = "Canis lupus"</div>
                    
                    <div class="command">    def __init__(self, name, age):</div>
                    <div class="command">        # Instance variables (unique to each object)</div>
                    <div class="command">        self.name = name</div>
                    <div class="command">        self.age = age</div>
                    
                    <div class="command">    def bark(self):</div>
                    <div class="command">        return f"{self.name} says Woof!"</div>
                    
                    <div class="command">    def celebrate_birthday(self):</div>
                    <div class="command">        self.age += 1</div>
                    <div class="command">        return f"{self.name} is now {self.age} years old!"</div>
                    
                    <div class="command">    def __str__(self):</div>
                    <div class="command">        return f"Dog(name='{self.name}', age={self.age})"</div>
                    
                    <span class="comment"># Creating objects (instances)</span>
                    <div class="command">dog1 = Dog("Buddy", 3)</div>
                    <div class="command">dog2 = Dog("Max", 5)</div>
                    
                    <span class="comment"># Accessing attributes and methods</span>
                    <div class="command">print(dog1.name)</div>
                    <div class="command">print(dog1.bark())</div>
                    <div class="command">print(dog1.celebrate_birthday())</div>
                    <div class="command">print(dog1)</div>
                    
                    <span class="comment"># Class variable access</span>
                    <div class="command">print(Dog.species)</div>
                    <div class="command">print(dog1.species)</div>
                    
                    <div class="output">Buddy</div>
                    <div class="output">Buddy says Woof!</div>
                    <div class="output">Buddy is now 4 years old!</div>
                    <div class="output">Dog(name='Buddy', age=4)</div>
                    <div class="output">Canis lupus</div>
                    <div class="output">Canis lupus</div>
                </div>

                <h2>Inheritance</h2>
                <p>Inheritance allows a class to inherit attributes and methods from another class, promoting code reuse and creating hierarchical relationships.</p>

                <div class="code-block">
                    <span class="comment"># Base class (Parent)</span>
                    <div class="command">class Animal:</div>
                    <div class="command">    def __init__(self, name, species):</div>
                    <div class="command">        self.name = name</div>
                    <div class="command">        self.species = species</div>
                    
                    <div class="command">    def make_sound(self):</div>
                    <div class="command">        return f"{self.name} makes a sound"</div>
                    
                    <div class="command">    def info(self):</div>
                    <div class="command">        return f"{self.name} is a {self.species}"</div>
                    
                    <span class="comment"># Derived class (Child)</span>
                    <div class="command">class Cat(Animal):</div>
                    <div class="command">    def __init__(self, name, breed):</div>
                    <div class="command">        super().__init__(name, "Feline")  # Call parent constructor</div>
                    <div class="command">        self.breed = breed</div>
                    
                    <div class="command">    def make_sound(self):  # Override parent method</div>
                    <div class="command">        return f"{self.name} says Meow!"</div>
                    
                    <div class="command">    def purr(self):  # New method specific to Cat</div>
                    <div class="command">        return f"{self.name} purrs contentedly"</div>
                    
                    <span class="comment"># Another derived class</span>
                    <div class="command">class Dog(Animal):</div>
                    <div class="command">    def __init__(self, name, breed):</div>
                    <div class="command">        super().__init__(name, "Canine")</div>
                    <div class="command">        self.breed = breed</div>
                    
                    <div class="command">    def make_sound(self):</div>
                    <div class="command">        return f"{self.name} says Woof!"</div>
                    
                    <div class="command">    def fetch(self):</div>
                    <div class="command">        return f"{self.name} fetches the ball"</div>
                    
                    <span class="comment"># Using inheritance</span>
                    <div class="command">cat = Cat("Whiskers", "Persian")</div>
                    <div class="command">dog = Dog("Buddy", "Golden Retriever")</div>
                    
                    <div class="command">print(cat.info())        # Inherited method</div>
                    <div class="command">print(cat.make_sound())  # Overridden method</div>
                    <div class="command">print(cat.purr())        # Cat-specific method</div>
                    
                    <div class="command">print(dog.info())        # Inherited method</div>
                    <div class="command">print(dog.make_sound())  # Overridden method</div>
                    <div class="command">print(dog.fetch())       # Dog-specific method</div>
                    
                    <div class="output">Whiskers is a Feline</div>
                    <div class="output">Whiskers says Meow!</div>
                    <div class="output">Whiskers purrs contentedly</div>
                    <div class="output">Buddy is a Canine</div>
                    <div class="output">Buddy says Woof!</div>
                    <div class="output">Buddy fetches the ball</div>
                </div>

                <h2>Encapsulation</h2>
                <p>Encapsulation is the bundling of data and methods within a class and controlling access to them using public, protected, and private attributes.</p>

                <div class="code-block">
                    <span class="comment"># Encapsulation example</span>
                    <div class="command">class BankAccount:</div>
                    <div class="command">    def __init__(self, account_number, initial_balance=0):</div>
                    <div class="command">        self.account_number = account_number  # Public</div>
                    <div class="command">        self._balance = initial_balance       # Protected (convention)</div>
                    <div class="command">        self.__pin = "1234"                  # Private</div>
                    
                    <div class="command">    def deposit(self, amount):</div>
                    <div class="command">        if amount > 0:</div>
                    <div class="command">            self._balance += amount</div>
                    <div class="command">            return f"Deposited ${amount}. New balance: ${self._balance}"</div>
                    <div class="command">        return "Invalid deposit amount"</div>
                    
                    <div class="command">    def withdraw(self, amount, pin):</div>
                    <div class="command">        if not self.__verify_pin(pin):</div>
                    <div class="command">            return "Invalid PIN"</div>
                    <div class="command">        if amount > self._balance:</div>
                    <div class="command">            return "Insufficient funds"</div>
                    <div class="command">        self._balance -= amount</div>
                    <div class="command">        return f"Withdrew ${amount}. New balance: ${self._balance}"</div>
                    
                    <div class="command">    def get_balance(self, pin):</div>
                    <div class="command">        if self.__verify_pin(pin):</div>
                    <div class="command">            return f"Balance: ${self._balance}"</div>
                    <div class="command">        return "Invalid PIN"</div>
                    
                    <div class="command">    def __verify_pin(self, pin):  # Private method</div>
                    <div class="command">        return pin == self.__pin</div>
                    
                    <div class="command">    @property</div>
                    <div class="command">    def balance(self):  # Getter property</div>
                    <div class="command">        return self._balance</div>
                    
                    <span class="comment"># Using encapsulation</span>
                    <div class="command">account = BankAccount("123456789", 1000)</div>
                    
                    <div class="command">print(account.deposit(500))</div>
                    <div class="command">print(account.withdraw(200, "1234"))</div>
                    <div class="command">print(account.get_balance("1234"))</div>
                    
                    <span class="comment"># Accessing through property</span>
                    <div class="command">print(f"Balance via property: ${account.balance}")</div>
                    
                    <span class="comment"># These would not work as expected:</span>
                    <span class="comment"># print(account.__pin)  # AttributeError</span>
                    <span class="comment"># account.__verify_pin("1234")  # AttributeError</span>
                    
                    <div class="output">Deposited $500. New balance: $1500</div>
                    <div class="output">Withdrew $200. New balance: $1300</div>
                    <div class="output">Balance: $1300</div>
                    <div class="output">Balance via property: $1300</div>
                </div>

                <h2>Polymorphism</h2>
                <p>Polymorphism allows objects of different classes to be treated as objects of a common base class, enabling the same interface to be used for different underlying forms.</p>

                <div class="code-block">
                    <span class="comment"># Polymorphism example</span>
                    <div class="command">class Shape:</div>
                    <div class="command">    def area(self):</div>
                    <div class="command">        raise NotImplementedError("Subclass must implement area method")</div>
                    
                    <div class="command">    def perimeter(self):</div>
                    <div class="command">        raise NotImplementedError("Subclass must implement perimeter method")</div>
                    
                    <div class="command">class Rectangle(Shape):</div>
                    <div class="command">    def __init__(self, width, height):</div>
                    <div class="command">        self.width = width</div>
                    <div class="command">        self.height = height</div>
                    
                    <div class="command">    def area(self):</div>
                    <div class="command">        return self.width * self.height</div>
                    
                    <div class="command">    def perimeter(self):</div>
                    <div class="command">        return 2 * (self.width + self.height)</div>
                    
                    <div class="command">class Circle(Shape):</div>
                    <div class="command">    def __init__(self, radius):</div>
                    <div class="command">        self.radius = radius</div>
                    
                    <div class="command">    def area(self):</div>
                    <div class="command">        return 3.14159 * self.radius ** 2</div>
                    
                    <div class="command">    def perimeter(self):</div>
                    <div class="command">        return 2 * 3.14159 * self.radius</div>
                    
                    <span class="comment"># Polymorphism in action</span>
                    <div class="command">shapes = [</div>
                    <div class="command">    Rectangle(5, 3),</div>
                    <div class="command">    Circle(4),</div>
                    <div class="command">    Rectangle(2, 8)</div>
                    <div class="command">]</div>
                    
                    <div class="command">for shape in shapes:</div>
                    <div class="command">    print(f"Area: {shape.area():.2f}, Perimeter: {shape.perimeter():.2f}")</div>
                    
                    <div class="output">Area: 15.00, Perimeter: 16.00</div>
                    <div class="output">Area: 50.27, Perimeter: 25.13</div>
                    <div class="output">Area: 16.00, Perimeter: 20.00</div>
                </div>

                <h2>Special Methods (Magic Methods)</h2>
                <p>Special methods (also called magic methods or dunder methods) allow you to define how objects of your class behave with built-in operations.</p>

                <div class="code-block">
                    <span class="comment"># Special methods example</span>
                    <div class="command">class Vector:</div>
                    <div class="command">    def __init__(self, x, y):</div>
                    <div class="command">        self.x = x</div>
                    <div class="command">        self.y = y</div>
                    
                    <div class="command">    def __str__(self):</div>
                    <div class="command">        return f"Vector({self.x}, {self.y})"</div>
                    
                    <div class="command">    def __repr__(self):</div>
                    <div class="command">        return f"Vector({self.x}, {self.y})"</div>
                    
                    <div class="command">    def __add__(self, other):</div>
                    <div class="command">        return Vector(self.x + other.x, self.y + other.y)</div>
                    
                    <div class="command">    def __mul__(self, scalar):</div>
                    <div class="command">        return Vector(self.x * scalar, self.y * scalar)</div>
                    
                    <div class="command">    def __len__(self):</div>
                    <div class="command">        return int((self.x ** 2 + self.y ** 2) ** 0.5)</div>
                    
                    <div class="command">    def __eq__(self, other):</div>
                    <div class="command">        return self.x == other.x and self.y == other.y</div>
                    
                    <span class="comment"># Using special methods</span>
                    <div class="command">v1 = Vector(3, 4)</div>
                    <div class="command">v2 = Vector(1, 2)</div>
                    
                    <div class="command">print(v1)              # __str__</div>
                    <div class="command">print(v1 + v2)         # __add__</div>
                    <div class="command">print(v1 * 2)          # __mul__</div>
                    <div class="command">print(len(v1))         # __len__</div>
                    <div class="command">print(v1 == v2)        # __eq__</div>
                    
                    <div class="output">Vector(3, 4)</div>
                    <div class="output">Vector(4, 6)</div>
                    <div class="output">Vector(6, 8)</div>
                    <div class="output">5</div>
                    <div class="output">False</div>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 6: Library Management System</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Create a 'Book' class with title, author, ISBN, and availability status
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Create a 'Member' class with name, member ID, and borrowed books list
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Create a 'Library' class that manages books and members
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Implement methods for borrowing, returning, and searching books
                    </div>
                    <div class="exercise-step">
                        <strong>Step 5:</strong> Add special methods for string representation and equality comparison
                    </div>
                </div>

                <div class="scenario-box">
                    <h4>Real-World OOP Example: E-commerce System</h4>
                    <div class="code-block">
                        <div class="command">class Product:</div>
                        <div class="command">    def __init__(self, name, price, stock):</div>
                        <div class="command">        self.name = name</div>
                        <div class="command">        self.price = price</div>
                        <div class="command">        self.stock = stock</div>
                        <div class="command">    </div>
                        <div class="command">    def is_available(self, quantity=1):</div>
                        <div class="command">        return self.stock >= quantity</div>
                        <div class="command">    </div>
                        <div class="command">    def purchase(self, quantity):</div>
                        <div class="command">        if self.is_available(quantity):</div>
                        <div class="command">            self.stock -= quantity</div>
                        <div class="command">            return True</div>
                        <div class="command">        return False</div>
                        <div class="command">    </div>
                        <div class="command">class ShoppingCart:</div>
                        <div class="command">    def __init__(self):</div>
                        <div class="command">        self.items = []</div>
                        <div class="command">    </div>
                        <div class="command">    def add_item(self, product, quantity):</div>
                        <div class="command">        if product.is_available(quantity):</div>
                        <div class="command">            self.items.append((product, quantity))</div>
                        <div class="command">            return True</div>
                        <div class="command">        return False</div>
                        <div class="command">    </div>
                        <div class="command">    def total_cost(self):</div>
                        <div class="command">        return sum(product.price * quantity for product, quantity in self.items)</div>
                    </div>
                </div>

                <div class="tip">
                    <strong>💡 OOP Best Practices:</strong>
                    <ul>
                        <li>Use meaningful class and method names</li>
                        <li>Keep classes focused on a single responsibility</li>
                        <li>Use inheritance to model "is-a" relationships</li>
                        <li>Use composition to model "has-a" relationships</li>
                        <li>Make instance variables private when appropriate</li>
                        <li>Use properties for controlled access to attributes</li>
                    </ul>
                </div>

                <div class="warning">
                    <strong>⚠️ Common OOP Pitfalls:</strong>
                    <ul>
                        <li><strong>Over-engineering:</strong> Don't create classes for everything; simple functions are often better</li>
                        <li><strong>Deep inheritance:</strong> Avoid inheritance hierarchies that are too deep</li>
                        <li><strong>Tight coupling:</strong> Classes should be loosely coupled and highly cohesive</li>
                        <li><strong>Ignoring composition:</strong> Sometimes composition is better than inheritance</li>
                    </ul>
                </div>
            `
        },
        modules: {
            title: 'Modules and Packages',
            content: `
                <h1>📦 Modules and Packages</h1>
                
                <div class="theory-box">
                    <h4>Organizing and Reusing Code</h4>
                    <p>Modules and packages are Python's way of organizing code into reusable components. They allow you to break large programs into smaller, manageable files and reuse code across different projects. Understanding modules is crucial for writing maintainable and scalable Python applications.</p>
                </div>

                <h2>What are Modules?</h2>
                <p>A module is a file containing Python code that can define functions, classes, and variables. It can also include runnable code.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Python Program] --> B[Module 1]
                        A --> C[Module 2]
                        A --> D[Module 3]
                        
                        B --> E[Functions]
                        B --> F[Classes]
                        B --> G[Variables]
                        
                        C --> H[Functions]
                        C --> I[Classes]
                        C --> J[Variables]
                        
                        style A fill:#4caf50
                        style B fill:#ff9800
                        style C fill:#ff9800
                        style D fill:#ff9800
                    </div>
                </div>

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
                    
                    <div class="command">class Calculator:</div>
                    <div class="command">    """A simple calculator class."""</div>
                    <div class="command">    </div>
                    <div class="command">    def __init__(self):</div>
                    <div class="command">        self.history = []</div>
                    
                    <div class="command">    def calculate(self, operation, a, b):</div>
                    <div class="command">        if operation == "add":</div>
                    <div class="command">            result = add(a, b)</div>
                    <div class="command">        elif operation == "multiply":</div>
                    <div class="command">            result = multiply(a, b)</div>
                    <div class="command">        else:</div>
                    <div class="command">            result = None</div>
                    <div class="command">        </div>
                    <div class="command">        self.history.append(f"{operation}({a}, {b}) = {result}")</div>
                    <div class="command">        return result</div>
                    
                    <div class="command">if __name__ == "__main__":</div>
                    <div class="command">    # This code runs only when the module is executed directly</div>
                    <div class="command">    print("Testing math_utils module")</div>
                    <div class="command">    print(f"5 + 3 = {add(5, 3)}")</div>
                    <div class="command">    print(f"Area of circle with radius 2: {circle_area(2)}")</div>
                </div>

                <h2>Importing Modules</h2>
                <p>There are several ways to import modules and their contents:</p>

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
                    
                    <span class="comment"># 4. Import everything (not recommended)</span>
                    <div class="command">from math_utils import *</div>
                    <div class="command">result = multiply(4, 6)</div>
                    <div class="command">print(result)</div>
                    
                    <span class="comment"># 5. Import with specific alias</span>
                    <div class="command">from math_utils import Calculator as Calc</div>
                    <div class="command">calculator = Calc()</div>
                    <div class="command">result = calculator.calculate("add", 7, 8)</div>
                    <div class="command">print(result)</div>
                    
                    <div class="output">8</div>
                    <div class="output">30</div>
                    <div class="output">78.53975</div>
                    <div class="output">24</div>
                    <div class="output">15</div>
                </div>

                <h2>Built-in Modules</h2>
                <p>Python comes with many built-in modules that provide useful functionality:</p>

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
                    <div class="command">numbers = [1, 2, 3, 4, 5]</div>
                    <div class="command">random.shuffle(numbers)</div>
                    <div class="command">print(numbers)</div>
                    
                    <span class="comment"># Datetime module</span>
                    <div class="command">import datetime</div>
                    <div class="command">now = datetime.datetime.now()</div>
                    <div class="command">print(now)</div>
                    <div class="command">print(now.strftime("%Y-%m-%d %H:%M:%S"))</div>
                    
                    <span class="comment"># OS module</span>
                    <div class="command">import os</div>
                    <div class="command">print(os.getcwd())  # Current working directory</div>
                    <div class="command">print(os.listdir('.'))  # List files in current directory</div>
                    
                    <div class="output">3.141592653589793</div>
                    <div class="output">4.0</div>
                    <div class="output">1.0</div>
                    <div class="output">7</div>
                    <div class="output">banana</div>
                    <div class="output">[3, 1, 5, 2, 4]</div>
                    <div class="output">2024-01-15 14:30:25.123456</div>
                    <div class="output">2024-01-15 14:30:25</div>
                </div>

                <h2>Packages</h2>
                <p>Packages are directories that contain multiple modules. They help organize related modules together.</p>

                <div class="code-block">
                    <span class="comment"># Package structure example</span>
                    <div class="output">my_package/</div>
                    <div class="output">    __init__.py</div>
                    <div class="output">    math_operations/</div>
                    <div class="output">        __init__.py</div>
                    <div class="output">        basic.py</div>
                    <div class="output">        advanced.py</div>
                    <div class="output">    string_operations/</div>
                    <div class="output">        __init__.py</div>
                    <div class="output">        formatting.py</div>
                    <div class="output">        validation.py</div>
                </div>

                <div class="code-block">
                    <span class="comment"># my_package/__init__.py</span>
                    <div class="command">"""My utility package."""</div>
                    <div class="command">__version__ = "1.0.0"</div>
                    
                    <span class="comment"># my_package/math_operations/basic.py</span>
                    <div class="command">def add(a, b):</div>
                    <div class="command">    return a + b</div>
                    
                    <div class="command">def subtract(a, b):</div>
                    <div class="command">    return a - b</div>
                    
                    <span class="comment"># my_package/math_operations/advanced.py</span>
                    <div class="command">import math</div>
                    
                    <div class="command">def power(base, exponent):</div>
                    <div class="command">    return base ** exponent</div>
                    
                    <div class="command">def logarithm(value, base=math.e):</div>
                    <div class="command">    return math.log(value, base)</div>
                    
                    <span class="comment"># Using the package</span>
                    <div class="command">from my_package.math_operations import basic</div>
                    <div class="command">from my_package.math_operations.advanced import power</div>
                    
                    <div class="command">result1 = basic.add(5, 3)</div>
                    <div class="command">result2 = power(2, 3)</div>
                    <div class="command">print(f"Addition: {result1}, Power: {result2}")</div>
                    
                    <div class="output">Addition: 8, Power: 8</div>
                </div>

                <h2>The Module Search Path</h2>
                <p>Python searches for modules in specific locations. You can check and modify the search path:</p>

                <div class="code-block">
                    <span class="comment"># Check module search path</span>
                    <div class="command">import sys</div>
                    <div class="command">print("Python path:")</div>
                    <div class="command">for path in sys.path:</div>
                    <div class="command">    print(f"  {path}")</div>
                    
                    <span class="comment"># Add custom path</span>
                    <div class="command">sys.path.append('/path/to/my/modules')</div>
                    
                    <span class="comment"># Check if module is available</span>
                    <div class="command">import importlib.util</div>
                    
                    <div class="command">def module_exists(module_name):</div>
                    <div class="command">    spec = importlib.util.find_spec(module_name)</div>
                    <div class="command">    return spec is not None</div>
                    
                    <div class="command">print(f"math module exists: {module_exists('math')}")</div>
                    <div class="command">print(f"nonexistent module exists: {module_exists('nonexistent')}")</div>
                    
                    <div class="output">math module exists: True</div>
                    <div class="output">nonexistent module exists: False</div>
                </div>

                <h2>Popular Third-Party Packages</h2>
                <p>Python has a rich ecosystem of third-party packages available through pip:</p>

                <div class="code-block">
                    <span class="comment"># Installing packages with pip</span>
                    <div class="command">$ pip install requests</div>
                    <div class="command">$ pip install numpy</div>
                    <div class="command">$ pip install pandas</div>
                    
                    <span class="comment"># Using requests for HTTP requests</span>
                    <div class="command">import requests</div>
                    
                    <div class="command">response = requests.get('https://api.github.com/users/octocat')</div>
                    <div class="command">if response.status_code == 200:</div>
                    <div class="command">    data = response.json()</div>
                    <div class="command">    print(f"User: {data['name']}")</div>
                    
                    <span class="comment"># Using numpy for numerical operations</span>
                    <div class="command">import numpy as np</div>
                    
                    <div class="command">arr = np.array([1, 2, 3, 4, 5])</div>
                    <div class="command">print(f"Array: {arr}")</div>
                    <div class="command">print(f"Mean: {np.mean(arr)}")</div>
                    <div class="command">print(f"Standard deviation: {np.std(arr)}")</div>
                    
                    <div class="output">User: The Octocat</div>
                    <div class="output">Array: [1 2 3 4 5]</div>
                    <div class="output">Mean: 3.0</div>
                    <div class="output">Standard deviation: 1.4142135623730951</div>
                </div>

                <h2>Virtual Environments</h2>
                <p>Virtual environments help manage dependencies for different projects:</p>

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
                    
                    <span class="comment"># Install from requirements</span>
                    <div class="command">$ pip install -r requirements.txt</div>
                    
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

                <div class="scenario-box">
                    <h4>Real-World Module Example: Data Processing Pipeline</h4>
                    <div class="code-block">
                        <div class="command"># data_processor.py</div>
                        <div class="command">import csv</div>
                        <div class="command">import json</div>
                        <div class="command">from datetime import datetime</div>
                        <div class="command">from typing import List, Dict, Any</div>
                        <div class="command"></div>
                        <div class="command">class DataProcessor:</div>
                        <div class="command">    def __init__(self):</div>
                        <div class="command">        self.data = []</div>
                        <div class="command">    </div>
                        <div class="command">    def load_csv(self, filename: str) -> None:</div>
                        <div class="command">        with open(filename, 'r') as file:</div>
                        <div class="command">            reader = csv.DictReader(file)</div>
                        <div class="command">            self.data = list(reader)</div>
                        <div class="command">    </div>
                        <div class="command">    def filter_data(self, condition: callable) -> List[Dict[str, Any]]:</div>
                        <div class="command">        return [row for row in self.data if condition(row)]</div>
                        <div class="command">    </div>
                        <div class="command">    def save_json(self, filename: str, data: List[Dict[str, Any]]) -> None:</div>
                        <div class="command">        with open(filename, 'w') as file:</div>
                        <div class="command">            json.dump(data, file, indent=2)</div>
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

                <div class="warning">
                    <strong>⚠️ Common Module Pitfalls:</strong>
                    <ul>
                        <li><strong>Circular imports:</strong> Module A imports Module B, and Module B imports Module A</li>
                        <li><strong>Wildcard imports:</strong> 'from module import *' can pollute the namespace</li>
                        <li><strong>Modifying sys.path:</strong> This can make code less portable</li>
                        <li><strong>Not using virtual environments:</strong> This can lead to dependency conflicts</li>
                    </ul>
                </div>
            `
        },
        file_handling: {
            title: 'File Handling',
            content: `
                <h1>📄 File Handling</h1>
                
                <div class="theory-box">
                    <h4>Working with Files and Data</h4>
                    <p>File handling is essential for any real-world application. Python provides powerful and intuitive ways to read from and write to files, handle different file formats, and manage file operations safely. This chapter covers everything from basic file operations to advanced file processing techniques.</p>
                </div>

                <h2>Opening and Closing Files</h2>
                <p>Python provides the built-in 'open()' function to work with files. Always remember to close files after use to free up system resources.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[File Operations] --> B[Open File]
                        B --> C[Read/Write/Append]
                        C --> D[Close File]
                        
                        B --> E[Text Mode]
                        B --> F[Binary Mode]
                        
                        E --> G[Default encoding]
                        F --> H[Bytes data]
                        
                        style A fill:#4caf50
                        style B fill:#ff9800
                        style C fill:#2196f3
                        style D fill:#9c27b0
                    </div>
                </div>

                <div class="code-block">
                    <span class="comment"># Basic file opening and closing</span>
                    <div class="command">file = open('example.txt', 'r')</div>
                    <div class="command">content = file.read()</div>
                    <div class="command">file.close()</div>
                    
                    <span class="comment"># Better approach: using 'with' statement</span>
                    <div class="command">with open('example.txt', 'r') as file:</div>
                    <div class="command">    content = file.read()</div>
                    <div class="command">    print(content)</div>
                    <span class="comment"># File is automatically closed when exiting the 'with' block</span>
                    
                    <span class="comment"># File opening modes</span>
                    <div class="command"># 'r' - Read (default)</div>
                    <div class="command"># 'w' - Write (overwrites existing file)</div>
                    <div class="command"># 'a' - Append (adds to end of file)</div>
                    <div class="command"># 'x' - Create (fails if file exists)</div>
                    <div class="command"># 'b' - Binary mode (e.g., 'rb', 'wb')</div>
                    <div class="command"># '+' - Read and write (e.g., 'r+', 'w+')</div>
                    
                    <span class="comment"># Creating a file with content</span>
                    <div class="command">with open('sample.txt', 'w') as file:</div>
                    <div class="command">    file.write("Hello, World!\\\n")</div>
                    <div class="command">    file.write("This is a sample file.")</div>
                </div>

                <h2>Reading Files</h2>
                <p>Python offers several methods to read file content, each suitable for different scenarios.</p>

                <div class="code-block">
                    <span class="comment"># Different ways to read files</span>
                    
                    <span class="comment"># Method 1: Read entire file</span>
                    <div class="command">with open('sample.txt', 'r') as file:</div>
                    <div class="command">    content = file.read()</div>
                    <div class="command">    print("Full content:")</div>
                    <div class="command">    print(content)</div>
                    
                    <span class="comment"># Method 2: Read line by line</span>
                    <div class="command">with open('sample.txt', 'r') as file:</div>
                    <div class="command">    for line_number, line in enumerate(file, 1):</div>
                    <div class="command">        print(f"Line {line_number}: {line.strip()}")</div>
                    
                    <span class="comment"># Method 3: Read all lines into a list</span>
                    <div class="command">with open('sample.txt', 'r') as file:</div>
                    <div class="command">    lines = file.readlines()</div>
                    <div class="command">    print("All lines:")</div>
                    <div class="command">    for i, line in enumerate(lines):</div>
                    <div class="command">        print(f"{i}: {line.strip()}")</div>
                    
                    <span class="comment"># Method 4: Read one line at a time</span>
                    <div class="command">with open('sample.txt', 'r') as file:</div>
                    <div class="command">    first_line = file.readline()</div>
                    <div class="command">    second_line = file.readline()</div>
                    <div class="command">    print(f"First: {first_line.strip()}")</div>
                    <div class="command">    print(f"Second: {second_line.strip()}")</div>
                    
                    <span class="comment"># Method 5: Read specific number of characters</span>
                    <div class="command">with open('sample.txt', 'r') as file:</div>
                    <div class="command">    chunk = file.read(10)  # Read first 10 characters</div>
                    <div class="command">    print(f"First 10 characters: '{chunk}'")</div>
                    
                    <div class="output">Full content:</div>
                    <div class="output">Hello, World!</div>
                    <div class="output">This is a sample file.</div>
                    <div class="output">Line 1: Hello, World!</div>
                    <div class="output">Line 2: This is a sample file.</div>
                    <div class="output">First: Hello, World!</div>
                    <div class="output">Second: This is a sample file.</div>
                    <div class="output">First 10 characters: 'Hello, Wor'</div>
                </div>

                <h2>Writing to Files</h2>
                <p>Writing to files is straightforward, but be careful with the mode you choose.</p>

                <div class="code-block">
                    <span class="comment"># Writing to files</span>
                    
                    <span class="comment"># Write mode ('w') - overwrites existing file</span>
                    <div class="command">with open('output.txt', 'w') as file:</div>
                    <div class="command">    file.write("This is the first line.\\\n")</div>
                    <div class="command">    file.write("This is the second line.\\\n")</div>
                    <div class="command">    file.writelines(["Line 3\\\n", "Line 4\\\n", "Line 5\\\n"])</div>
                    
                    <span class="comment"># Append mode ('a') - adds to existing file</span>
                    <div class="command">with open('output.txt', 'a') as file:</div>
                    <div class="command">    file.write("This line is appended.\\\n")</div>
                    
                    <span class="comment"># Writing formatted content</span>
                    <div class="command">students = [</div>
                    <div class="command">    {"name": "Alice", "grade": 85},</div>
                    <div class="command">    {"name": "Bob", "grade": 92},</div>
                    <div class="command">    {"name": "Charlie", "grade": 78}</div>
                    <div class="command">]</div>
                    
                    <div class="command">with open('students.txt', 'w') as file:</div>
                    <div class="command">    file.write("Student Grades\\\n")</div>
                    <div class="command">    file.write("=" * 20 + "\\\n")</div>
                    <div class="command">    for student in students:</div>
                    <div class="command">        file.write(f"{student['name']}: {student['grade']}\\\n")</div>
                    
                    <span class="comment"># Writing with print function</span>
                    <div class="command">with open('print_output.txt', 'w') as file:</div>
                    <div class="command">    print("Hello, World!", file=file)</div>
                    <div class="command">    print("This is printed to file", file=file)</div>
                    <div class="command">    print("Numbers:", 1, 2, 3, file=file)</div>
                </div>

                <h2>Working with CSV Files</h2>
                <p>CSV (Comma-Separated Values) files are common for data exchange. Python's csv module makes working with them easy.</p>

                <div class="code-block">
                    <span class="comment"># Working with CSV files</span>
                    <div class="command">import csv</div>
                    
                    <span class="comment"># Writing CSV data</span>
                    <div class="command">students = [</div>
                    <div class="command">    ['Name', 'Age', 'Grade'],</div>
                    <div class="command">    ['Alice', 20, 85],</div>
                    <div class="command">    ['Bob', 21, 92],</div>
                    <div class="command">    ['Charlie', 19, 78]</div>
                    <div class="command">]</div>
                    
                    <div class="command">with open('students.csv', 'w', newline='') as file:</div>
                    <div class="command">    writer = csv.writer(file)</div>
                    <div class="command">    writer.writerows(students)</div>
                    
                    <span class="comment"># Reading CSV data</span>
                    <div class="command">with open('students.csv', 'r') as file:</div>
                    <div class="command">    reader = csv.reader(file)</div>
                    <div class="command">    for row in reader:</div>
                    <div class="command">        print(row)</div>
                    
                    <span class="comment"># Using DictReader for named access</span>
                    <div class="command">with open('students.csv', 'r') as file:</div>
                    <div class="command">    reader = csv.DictReader(file)</div>
                    <div class="command">    for row in reader:</div>
                    <div class="command">        print(f"Name: {row['Name']}, Grade: {row['Grade']}")</div>
                    
                    <span class="comment"># Writing with DictWriter</span>
                    <div class="command">student_data = [</div>
                    <div class="command">    {'name': 'David', 'age': 22, 'grade': 88},</div>
                    <div class="command">    {'name': 'Eva', 'age': 20, 'grade': 94}</div>
                    <div class="command">]</div>
                    
                    <div class="command">with open('students_dict.csv', 'w', newline='') as file:</div>
                    <div class="command">    fieldnames = ['name', 'age', 'grade']</div>
                    <div class="command">    writer = csv.DictWriter(file, fieldnames=fieldnames)</div>
                    <div class="command">    writer.writeheader()</div>
                    <div class="command">    writer.writerows(student_data)</div>
                    
                    <div class="output">['Name', 'Age', 'Grade']</div>
                    <div class="output">['Alice', '20', '85']</div>
                    <div class="output">['Bob', '21', '92']</div>
                    <div class="output">['Charlie', '19', '78']</div>
                    <div class="output">Name: Alice, Grade: 85</div>
                    <div class="output">Name: Bob, Grade: 92</div>
                    <div class="output">Name: Charlie, Grade: 78</div>
                </div>

                <h2>Working with JSON Files</h2>
                <p>JSON (JavaScript Object Notation) is a popular format for data exchange, especially in web applications.</p>

                <div class="code-block">
                    <span class="comment"># Working with JSON files</span>
                    <div class="command">import json</div>
                    
                    <span class="comment"># Python data structure</span>
                    <div class="command">student_data = {</div>
                    <div class="command">    "students": [</div>
                    <div class="command">        {"name": "Alice", "age": 20, "grades": [85, 90, 88]},</div>
                    <div class="command">        {"name": "Bob", "age": 21, "grades": [92, 89, 94]},</div>
                    <div class="command">        {"name": "Charlie", "age": 19, "grades": [78, 82, 76]}</div>
                    <div class="command">    ],</div>
                    <div class="command">    "course": "Python Programming",</div>
                    <div class="command">    "semester": "Fall 2024"</div>
                    <div class="command">}</div>
                    
                    <span class="comment"># Writing JSON to file</span>
                    <div class="command">with open('students.json', 'w') as file:</div>
                    <div class="command">    json.dump(student_data, file, indent=2)</div>
                    
                    <span class="comment"># Reading JSON from file</span>
                    <div class="command">with open('students.json', 'r') as file:</div>
                    <div class="command">    loaded_data = json.load(file)</div>
                    
                    <div class="command">print(f"Course: {loaded_data['course']}")</div>
                    <div class="command">print("Students:")</div>
                    <div class="command">for student in loaded_data['students']:</div>
                    <div class="command">    avg_grade = sum(student['grades']) / len(student['grades'])</div>
                    <div class="command">    print(f"  {student['name']}: {avg_grade:.1f}")</div>
                    
                    <span class="comment"># Working with JSON strings</span>
                    <div class="command">json_string = json.dumps(student_data, indent=2)</div>
                    <div class="command">parsed_data = json.loads(json_string)</div>
                    
                    <div class="output">Course: Python Programming</div>
                    <div class="output">Students:</div>
                    <div class="output">  Alice: 87.7</div>
                    <div class="output">  Bob: 91.7</div>
                    <div class="output">  Charlie: 78.7</div>
                </div>

                <h2>File Path Operations</h2>
                <p>The 'pathlib' module provides an object-oriented approach to working with file paths.</p>

                <div class="code-block">
                    <span class="comment"># Working with file paths</span>
                    <div class="command">from pathlib import Path</div>
                    <div class="command">import os</div>
                    
                    <span class="comment"># Using pathlib (recommended)</span>
                    <div class="command">current_dir = Path.cwd()</div>
                    <div class="command">print(f"Current directory: {current_dir}")</div>
                    
                    <div class="command">file_path = Path("data") / "students.txt"</div>
                    <div class="command">print(f"File path: {file_path}")</div>
                    
                    <span class="comment"># Check if file/directory exists</span>
                    <div class="command">if file_path.exists():</div>
                    <div class="command">    print("File exists")</div>
                    <div class="command">    print(f"File size: {file_path.stat().st_size} bytes")</div>
                    <div class="command">else:</div>
                    <div class="command">    print("File does not exist")</div>
                    
                    <span class="comment"># Create directories</span>
                    <div class="command">data_dir = Path("data")</div>
                    <div class="command">data_dir.mkdir(exist_ok=True)  # Create if doesn't exist</div>
                    
                    <span class="comment"># Get file information</span>
                    <div class="command">sample_file = Path("sample.txt")</div>
                    <div class="command">if sample_file.exists():</div>
                    <div class="command">    print(f"File name: {sample_file.name}")</div>
                    <div class="command">    print(f"File stem: {sample_file.stem}")</div>
                    <div class="command">    print(f"File suffix: {sample_file.suffix}")</div>
                    <div class="command">    print(f"Parent directory: {sample_file.parent}")</div>
                    
                    <span class="comment"># List files in directory</span>
                    <div class="command">for file in Path(".").iterdir():</div>
                    <div class="command">    if file.is_file():</div>
                    <div class="command">        print(f"File: {file.name}")</div>
                    <div class="command">    elif file.is_dir():</div>
                    <div class="command">        print(f"Directory: {file.name}")</div>
                    
                    <span class="comment"># Find files with specific pattern</span>
                    <div class="command">txt_files = list(Path(".").glob("*.txt"))</div>
                    <div class="command">print(f"Text files: {[f.name for f in txt_files]}")</div>
                </div>

                <h2>File Operations and Error Handling</h2>
                <p>Always handle potential errors when working with files, as many things can go wrong.</p>

                <div class="code-block">
                    <span class="comment"># Error handling in file operations</span>
                    
                    <div class="command">def safe_read_file(filename):</div>
                    <div class="command">    try:</div>
                    <div class="command">        with open(filename, 'r') as file:</div>
                    <div class="command">            return file.read()</div>
                    <div class="command">    except FileNotFoundError:</div>
                    <div class="command">        print(f"Error: File '{filename}' not found")</div>
                    <div class="command">        return None</div>
                    <div class="command">    except PermissionError:</div>
                    <div class="command">        print(f"Error: Permission denied for '{filename}'")</div>
                    <div class="command">        return None</div>
                    <div class="command">    except Exception as e:</div>
                    <div class="command">        print(f"Unexpected error: {e}")</div>
                    <div class="command">        return None</div>
                    
                    <div class="command">def safe_write_file(filename, content):</div>
                    <div class="command">    try:</div>
                    <div class="command">        with open(filename, 'w') as file:</div>
                    <div class="command">            file.write(content)</div>
                    <div class="command">        print(f"Successfully wrote to '{filename}'")</div>
                    <div class="command">        return True</div>
                    <div class="command">    except PermissionError:</div>
                    <div class="command">        print(f"Error: Permission denied for '{filename}'")</div>
                    <div class="command">        return False</div>
                    <div class="command">    except OSError as e:</div>
                    <div class="command">        print(f"OS Error: {e}")</div>
                    <div class="command">        return False</div>
                    
                    <span class="comment"># Using the safe functions</span>
                    <div class="command">content = safe_read_file("nonexistent.txt")</div>
                    <div class="command">safe_write_file("test_output.txt", "Hello, safe file operations!")</div>
                    
                    <div class="output">Error: File 'nonexistent.txt' not found</div>
                    <div class="output">Successfully wrote to 'test_output.txt'</div>
                </div>

                <h2>Working with Binary Files</h2>
                <p>Some files need to be handled in binary mode, such as images, videos, or executable files.</p>

                <div class="code-block">
                    <span class="comment"># Working with binary files</span>
                    
                    <span class="comment"># Copy a binary file</span>
                    <div class="command">def copy_file(source, destination):</div>
                    <div class="command">    try:</div>
                    <div class="command">        with open(source, 'rb') as src, open(destination, 'wb') as dst:</div>
                    <div class="command">            # Copy in chunks to handle large files</div>
                    <div class="command">            chunk_size = 1024  # 1KB chunks</div>
                    <div class="command">            while chunk := src.read(chunk_size):</div>
                    <div class="command">                dst.write(chunk)</div>
                    <div class="command">        print(f"File copied from {source} to {destination}")</div>
                    <div class="command">    except Exception as e:</div>
                    <div class="command">        print(f"Error copying file: {e}")</div>
                    
                    <span class="comment"># Read binary file information</span>
                    <div class="command">def analyze_file(filename):</div>
                    <div class="command">    try:</div>
                    <div class="command">        with open(filename, 'rb') as file:</div>
                    <div class="command">            # Read first few bytes</div>
                    <div class="command">            header = file.read(10)</div>
                    <div class="command">            print(f"First 10 bytes: {header}")</div>
                    <div class="command">            </div>
                    <div class="command">            # Get file size</div>
                    <div class="command">            file.seek(0, 2)  # Seek to end</div>
                    <div class="command">            size = file.tell()</div>
                    <div class="command">            print(f"File size: {size} bytes")</div>
                    <div class="command">    except Exception as e:</div>
                    <div class="command">        print(f"Error analyzing file: {e}")</div>
                    
                    <span class="comment"># Create a simple binary file</span>
                    <div class="command">with open('binary_data.bin', 'wb') as file:</div>
                    <div class="command">    # Write some binary data</div>
                    <div class="command">    file.write(b'\\x48\\x65\\x6c\\x6c\\x6f')  # "Hello" in bytes</div>
                    <div class="command">    file.write(bytes([32, 87, 111, 114, 108, 100]))  # " World"</div>
                    
                    <div class="command">analyze_file('binary_data.bin')</div>
                    
                    <div class="output">First 10 bytes: b'Hello Worl'</div>
                    <div class="output">File size: 11 bytes</div>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 8: Log File Analyzer</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Create a program that generates sample log entries and saves them to a file
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Write a function to read the log file and count different types of log levels (INFO, WARNING, ERROR)
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Create a summary report and save it as both JSON and CSV formats
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Add error handling for file operations
                    </div>
                    <div class="exercise-step">
                        <strong>Step 5:</strong> Use pathlib to organize files in different directories (logs, reports, etc.)
                    </div>
                </div>

                <div class="scenario-box">
                    <h4>Real-World Example: Data Processing Pipeline</h4>
                    <div class="code-block">
                        <div class="command">import csv</div>
                        <div class="command">import json</div>
                        <div class="command">from pathlib import Path</div>
                        <div class="command">from datetime import datetime</div>
                        <div class="command"></div>
                        <div class="command">class DataProcessor:</div>
                        <div class="command">    def __init__(self, input_dir, output_dir):</div>
                        <div class="command">        self.input_dir = Path(input_dir)</div>
                        <div class="command">        self.output_dir = Path(output_dir)</div>
                        <div class="command">        self.output_dir.mkdir(exist_ok=True)</div>
                        <div class="command">    </div>
                        <div class="command">    def process_csv_files(self):</div>
                        <div class="command">        results = []</div>
                        <div class="command">        for csv_file in self.input_dir.glob("*.csv"):</div>
                        <div class="command">            try:</div>
                        <div class="command">                with open(csv_file, 'r') as file:</div>
                        <div class="command">                    reader = csv.DictReader(file)</div>
                        <div class="command">                    data = list(reader)</div>
                        <div class="command">                    results.append({</div>
                        <div class="command">                        'file': csv_file.name,</div>
                        <div class="command">                        'records': len(data),</div>
                        <div class="command">                        'processed_at': datetime.now().isoformat()</div>
                        <div class="command">                    })</div>
                        <div class="command">            except Exception as e:</div>
                        <div class="command">                print(f"Error processing {csv_file}: {e}")</div>
                        <div class="command">        </div>
                        <div class="command">        # Save results</div>
                        <div class="command">        output_file = self.output_dir / "processing_results.json"</div>
                        <div class="command">        with open(output_file, 'w') as file:</div>
                        <div class="command">            json.dump(results, file, indent=2)</div>
                    </div>
                </div>

                <div class="tip">
                    <strong>💡 File Handling Best Practices:</strong>
                    <ul>
                        <li>Always use the 'with' statement for file operations</li>
                        <li>Handle exceptions appropriately (FileNotFoundError, PermissionError, etc.)</li>
                        <li>Use pathlib for path operations instead of string manipulation</li>
                        <li>Specify encoding explicitly when working with text files</li>
                        <li>Process large files in chunks to avoid memory issues</li>
                        <li>Validate file paths and check permissions before operations</li>
                    </ul>
                </div>

                <div class="warning">
                    <strong>⚠️ Common File Handling Pitfalls:</strong>
                    <ul>
                        <li><strong>Not closing files:</strong> Use 'with' statement to ensure files are closed</li>
                        <li><strong>Ignoring encoding:</strong> Specify encoding for text files to avoid issues</li>
                        <li><strong>No error handling:</strong> File operations can fail for many reasons</li>
                        <li><strong>Loading large files entirely:</strong> Process large files in chunks</li>
                        <li><strong>Hardcoded paths:</strong> Use pathlib for cross-platform compatibility</li>
                    </ul>
                </div>
            `
        },
        error_handling: {
            title: 'Error Handling',
            content: `
                <h1>🚨 Error Handling</h1>
                
                <div class="theory-box">
                    <h4>Dealing with the Unexpected</h4>
                    <p>Error handling is a crucial part of writing robust Python programs. Errors are inevitable in programming, but how you handle them determines whether your program crashes or gracefully recovers. Python provides powerful tools for anticipating, catching, and handling errors.</p>
                </div>

                <h2>Types of Errors</h2>
                <p>Python has two main types of errors: syntax errors and exceptions.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Python Errors] --> B[Syntax Errors]
                        A --> C[Exceptions]
                        
                        B --> D[Caught at Parse Time]
                        B --> E[Code Won't Run]
                        
                        C --> F[Runtime Errors]
                        C --> G[Can Be Caught]
                        C --> H[Program Can Continue]
                        
                        style A fill:#4caf50
                        style B fill:#f44336
                        style C fill:#ff9800
                    </div>
                </div>

                <div class="code-block">
                    <span class="comment"># Syntax Errors - Code won't even run</span>
                    <div class="command"># print("Hello World"  # Missing closing parenthesis</div>
                    <div class="command"># if x = 5:  # Should be == for comparison</div>
                    <div class="command"># def my_function()  # Missing colon</div>
                    
                    <span class="comment"># Runtime Exceptions - Occur during execution</span>
                    <div class="command"># These would cause exceptions:</div>
                    <div class="command"># print(undefined_variable)  # NameError</div>
                    <div class="command"># result = 10 / 0  # ZeroDivisionError</div>
                    <div class="command"># numbers = [1, 2, 3]</div>
                    <div class="command"># print(numbers[5])  # IndexError</div>
                    <div class="command"># int("hello")  # ValueError</div>
                </div>

                <h2>Common Built-in Exceptions</h2>
                <div class="code-block">
                    <span class="comment"># Common exceptions you'll encounter</span>
                    
                    <span class="comment"># NameError - Variable not defined</span>
                    <div class="command">try:</div>
                    <div class="command">    print(undefined_variable)</div>
                    <div class="command">except NameError as e:</div>
                    <div class="command">    print(f"NameError: {e}")</div>
                    
                    <span class="comment"># ZeroDivisionError - Division by zero</span>
                    <div class="command">try:</div>
                    <div class="command">    result = 10 / 0</div>
                    <div class="command">except ZeroDivisionError as e:</div>
                    <div class="command">    print(f"ZeroDivisionError: {e}")</div>
                    
                    <span class="comment"># IndexError - List index out of range</span>
                    <div class="command">try:</div>
                    <div class="command">    numbers = [1, 2, 3]</div>
                    <div class="command">    print(numbers[10])</div>
                    <div class="command">except IndexError as e:</div>
                    <div class="command">    print(f"IndexError: {e}")</div>
                    
                    <span class="comment"># KeyError - Dictionary key not found</span>
                    <div class="command">try:</div>
                    <div class="command">    student = {"name": "Alice", "age": 20}</div>
                    <div class="command">    print(student["grade"])</div>
                    <div class="command">except KeyError as e:</div>
                    <div class="command">    print(f"KeyError: {e}")</div>
                    
                    <span class="comment"># ValueError - Wrong value type</span>
                    <div class="command">try:</div>
                    <div class="command">    number = int("hello")</div>
                    <div class="command">except ValueError as e:</div>
                    <div class="command">    print(f"ValueError: {e}")</div>
                    
                    <span class="comment"># TypeError - Wrong type operation</span>
                    <div class="command">try:</div>
                    <div class="command">    result = "hello" + 5</div>
                    <div class="command">except TypeError as e:</div>
                    <div class="command">    print(f"TypeError: {e}")</div>
                    
                    <div class="output">NameError: name 'undefined_variable' is not defined</div>
                    <div class="output">ZeroDivisionError: division by zero</div>
                    <div class="output">IndexError: list index out of range</div>
                    <div class="output">KeyError: 'grade'</div>
                    <div class="output">ValueError: invalid literal for int() with base 10: 'hello'</div>
                    <div class="output">TypeError: can only concatenate str (not "int") to str</div>
                </div>

                <h2>Try-Except-Else-Finally</h2>
                <p>The try-except statement is the foundation of error handling in Python.</p>

                <div class="code-block">
                    <span class="comment"># Complete try-except-else-finally structure</span>
                    
                    <div class="command">def divide_numbers(a, b):</div>
                    <div class="command">    try:</div>
                    <div class="command">        print(f"Attempting to divide {a} by {b}")</div>
                    <div class="command">        result = a / b</div>
                    <div class="command">    except ZeroDivisionError:</div>
                    <div class="command">        print("Error: Cannot divide by zero!")</div>
                    <div class="command">        return None</div>
                    <div class="command">    except TypeError:</div>
                    <div class="command">        print("Error: Both arguments must be numbers!")</div>
                    <div class="command">        return None</div>
                    <div class="command">    else:</div>
                    <div class="command">        print("Division successful!")</div>
                    <div class="command">        return result</div>
                    <div class="command">    finally:</div>
                    <div class="command">        print("Division operation completed.\\\n")</div>
                    
                    <span class="comment"># Testing the function</span>
                    <div class="command">print("Result:", divide_numbers(10, 2))</div>
                    <div class="command">print("Result:", divide_numbers(10, 0))</div>
                    <div class="command">print("Result:", divide_numbers(10, "hello"))</div>
                    
                    <div class="output">Attempting to divide 10 by 2</div>
                    <div class="output">Division successful!</div>
                    <div class="output">Division operation completed.</div>
                    <div class="output">Result: 5.0</div>
                    <div class="output">Attempting to divide 10 by 0</div>
                    <div class="output">Error: Cannot divide by zero!</div>
                    <div class="output">Division operation completed.</div>
                    <div class="output">Result: None</div>
                    <div class="output">Attempting to divide 10 by hello</div>
                    <div class="output">Error: Both arguments must be numbers!</div>
                    <div class="output">Division operation completed.</div>
                    <div class="output">Result: None</div>
                </div>

                <h2>Handling Multiple Exceptions</h2>
                <p>You can catch multiple exceptions in different ways depending on your needs.</p>

                <div class="code-block">
                    <span class="comment"># Multiple except blocks</span>
                    <div class="command">def safe_list_access(lst, index):</div>
                    <div class="command">    try:</div>
                    <div class="command">        return lst[index]</div>
                    <div class="command">    except IndexError:</div>
                    <div class="command">        print(f"Index {index} is out of range")</div>
                    <div class="command">    except TypeError:</div>
                    <div class="command">        print("Invalid index type")</div>
                    <div class="command">    except Exception as e:</div>
                    <div class="command">        print(f"Unexpected error: {e}")</div>
                    <div class="command">    return None</div>
                    
                    <span class="comment"># Catching multiple exceptions in one block</span>
                    <div class="command">def convert_to_number(value):</div>
                    <div class="command">    try:</div>
                    <div class="command">        return float(value)</div>
                    <div class="command">    except (ValueError, TypeError) as e:</div>
                    <div class="command">        print(f"Cannot convert '{value}' to number: {e}")</div>
                    <div class="command">        return 0</div>
                    
                    <span class="comment"># Generic exception handler</span>
                    <div class="command">def robust_operation(func, *args, **kwargs):</div>
                    <div class="command">    try:</div>
                    <div class="command">        return func(*args, **kwargs)</div>
                    <div class="command">    except Exception as e:</div>
                    <div class="command">        print(f"Error in {func.__name__}: {type(e).__name__}: {e}")</div>
                    <div class="command">        return None</div>
                    
                    <span class="comment"># Testing the functions</span>
                    <div class="command">numbers = [1, 2, 3, 4, 5]</div>
                    <div class="command">print(safe_list_access(numbers, 2))</div>
                    <div class="command">print(safe_list_access(numbers, 10))</div>
                    <div class="command">print(convert_to_number("123.45"))</div>
                    <div class="command">print(convert_to_number("hello"))</div>
                    
                    <div class="output">3</div>
                    <div class="output">Index 10 is out of range</div>
                    <div class="output">None</div>
                    <div class="output">123.45</div>
                    <div class="output">Cannot convert 'hello' to number: could not convert string to float: hello</div>
                    <div class="output">0</div>
                </div>

                <h2>Raising Exceptions</h2>
                <p>Sometimes you need to raise exceptions yourself to signal error conditions.</p>

                <div class="code-block">
                    <span class="comment"># Raising built-in exceptions</span>
                    <div class="command">def calculate_square_root(number):</div>
                    <div class="command">    if not isinstance(number, (int, float)):</div>
                    <div class="command">        raise TypeError("Input must be a number")</div>
                    <div class="command">    if number < 0:</div>
                    <div class="command">        raise ValueError("Cannot calculate square root of negative number")</div>
                    <div class="command">    return number ** 0.5</div>
                    
                    <span class="comment"># Re-raising exceptions</span>
                    <div class="command">def logged_division(a, b):</div>
                    <div class="command">    try:</div>
                    <div class="command">        result = a / b</div>
                    <div class="command">        print(f"Division successful: {a} / {b} = {result}")</div>
                    <div class="command">        return result</div>
                    <div class="command">    except ZeroDivisionError:</div>
                    <div class="command">        print("Logging: Division by zero attempted")</div>
                    <div class="command">        raise  # Re-raise the same exception</div>
                    
                    <span class="comment"># Testing exception raising</span>
                    <div class="command">try:</div>
                    <div class="command">    print(calculate_square_root(16))</div>
                    <div class="command">    print(calculate_square_root(-4))</div>
                    <div class="command">except ValueError as e:</div>
                    <div class="command">    print(f"Caught ValueError: {e}")</div>
                    
                    <div class="command">try:</div>
                    <div class="command">    logged_division(10, 0)</div>
                    <div class="command">except ZeroDivisionError:</div>
                    <div class="command">    print("Caught the re-raised exception")</div>
                    
                    <div class="output">4.0</div>
                    <div class="output">Caught ValueError: Cannot calculate square root of negative number</div>
                    <div class="output">Logging: Division by zero attempted</div>
                    <div class="output">Caught the re-raised exception</div>
                </div>

                <h2>Custom Exceptions</h2>
                <p>Creating custom exceptions helps make your code more readable and specific.</p>

                <div class="code-block">
                    <span class="comment"># Custom exception classes</span>
                    <div class="command">class InvalidAgeError(Exception):</div>
                    <div class="command">    """Raised when an invalid age is provided."""</div>
                    <div class="command">    def __init__(self, age, message="Age must be between 0 and 150"):</div>
                    <div class="command">        self.age = age</div>
                    <div class="command">        self.message = message</div>
                    <div class="command">        super().__init__(self.message)</div>
                    
                    <div class="command">class InsufficientFundsError(Exception):</div>
                    <div class="command">    """Raised when there are insufficient funds for a transaction."""</div>
                    <div class="command">    def __init__(self, balance, amount):</div>
                    <div class="command">        self.balance = balance</div>
                    <div class="command">        self.amount = amount</div>
                    <div class="command">        message = f"Insufficient funds: Balance ${balance}, Attempted ${amount}"</div>
                    <div class="command">        super().__init__(message)</div>
                    
                    <span class="comment"># Using custom exceptions</span>
                    <div class="command">class Person:</div>
                    <div class="command">    def __init__(self, name, age):</div>
                    <div class="command">        self.name = name</div>
                    <div class="command">        self.set_age(age)</div>
                    
                    <div class="command">    def set_age(self, age):</div>
                    <div class="command">        if not isinstance(age, int):</div>
                    <div class="command">            raise TypeError("Age must be an integer")</div>
                    <div class="command">        if age < 0 or age > 150:</div>
                    <div class="command">            raise InvalidAgeError(age)</div>
                    <div class="command">        self.age = age</div>
                    
                    <div class="command">class BankAccount:</div>
                    <div class="command">    def __init__(self, balance=0):</div>
                    <div class="command">        self.balance = balance</div>
                    
                    <div class="command">    def withdraw(self, amount):</div>
                    <div class="command">        if amount > self.balance:</div>
                    <div class="command">            raise InsufficientFundsError(self.balance, amount)</div>
                    <div class="command">        self.balance -= amount</div>
                    <div class="command">        return self.balance</div>
                    
                    <span class="comment"># Testing custom exceptions</span>
                    <div class="command">try:</div>
                    <div class="command">    person = Person("Alice", 200)</div>
                    <div class="command">except InvalidAgeError as e:</div>
                    <div class="command">    print(f"Invalid age error: {e}")</div>
                    
                    <div class="command">try:</div>
                    <div class="command">    account = BankAccount(100)</div>
                    <div class="command">    account.withdraw(150)</div>
                    <div class="command">except InsufficientFundsError as e:</div>
                    <div class="command">    print(f"Transaction failed: {e}")</div>
                    
                    <div class="output">Invalid age error: Age must be between 0 and 150</div>
                    <div class="output">Transaction failed: Insufficient funds: Balance 100, Attempted 150</div>
                </div>

                <h2>Best Practices for Error Handling</h2>
                <div class="code-block">
                    <span class="comment"># Good error handling practices</span>
                    
                    <span class="comment"># 1. Be specific with exceptions</span>
                    <div class="command">def get_user_input():</div>
                    <div class="command">    while True:</div>
                    <div class="command">        try:</div>
                    <div class="command">            age = int(input("Enter your age: "))</div>
                    <div class="command">            if age < 0:</div>
                    <div class="command">                raise ValueError("Age cannot be negative")</div>
                    <div class="command">            return age</div>
                    <div class="command">        except ValueError as e:</div>
                    <div class="command">            print(f"Invalid input: {e}. Please try again.")</div>
                    
                    <span class="comment"># 2. Log errors for debugging</span>
                    <div class="command">import logging</div>
                    
                    <div class="command">logging.basicConfig(level=logging.INFO)</div>
                    
                    <div class="command">def safe_file_operation(filename):</div>
                    <div class="command">    try:</div>
                    <div class="command">        with open(filename, 'r') as file:</div>
                    <div class="command">            return file.read()</div>
                    <div class="command">    except FileNotFoundError:</div>
                    <div class="command">        logging.error(f"File not found: {filename}")</div>
                    <div class="command">        return None</div>
                    <div class="command">    except PermissionError:</div>
                    <div class="command">        logging.error(f"Permission denied: {filename}")</div>
                    <div class="command">        return None</div>
                    <div class="command">    except Exception as e:</div>
                    <div class="command">        logging.error(f"Unexpected error reading {filename}: {e}")</div>
                    <div class="command">        return None</div>
                    
                    <span class="comment"># 3. Fail fast and fail clearly</span>
                    <div class="command">def process_data(data):</div>
                    <div class="command">    if not isinstance(data, list):</div>
                    <div class="command">        raise TypeError("Data must be a list")</div>
                    <div class="command">    if len(data) == 0:</div>
                    <div class="command">        raise ValueError("Data list cannot be empty")</div>
                    <div class="command">    </div>
                    <div class="command">    # Process the data...</div>
                    <div class="command">    return [item * 2 for item in data]</div>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 9: Robust Calculator</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Create a calculator class with methods for basic arithmetic operations
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Add comprehensive error handling for all possible error cases
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Create custom exceptions for calculator-specific errors
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Add logging to track all operations and errors
                    </div>
                    <div class="exercise-step">
                        <strong>Step 5:</strong> Create a user interface that handles invalid input gracefully
                    </div>
                </div>

                <div class="scenario-box">
                    <h4>Real-World Example: API Client with Error Handling</h4>
                    <div class="code-block">
                        <div class="command">import requests</div>
                        <div class="command">import time</div>
                        <div class="command">from typing import Optional, Dict, Any</div>
                        <div class="command"></div>
                        <div class="command">class APIError(Exception):</div>
                        <div class="command">    """Custom exception for API-related errors."""</div>
                        <div class="command">    pass</div>
                        <div class="command"></div>
                        <div class="command">class APIClient:</div>
                        <div class="command">    def __init__(self, base_url: str, timeout: int = 30):</div>
                        <div class="command">        self.base_url = base_url</div>
                        <div class="command">        self.timeout = timeout</div>
                        <div class="command">    </div>
                        <div class="command">    def get_data(self, endpoint: str, retries: int = 3) -> Optional[Dict[str, Any]]:</div>
                        <div class="command">        for attempt in range(retries):</div>
                        <div class="command">            try:</div>
                        <div class="command">                response = requests.get(</div>
                        <div class="command">                    f"{self.base_url}/{endpoint}",</div>
                        <div class="command">                    timeout=self.timeout</div>
                        <div class="command">                )</div>
                        <div class="command">                response.raise_for_status()  # Raises HTTPError for bad responses</div>
                        <div class="command">                return response.json()</div>
                        <div class="command">            </div>
                        <div class="command">            except requests.exceptions.ConnectionError:</div>
                        <div class="command">                if attempt == retries - 1:</div>
                        <div class="command">                    raise APIError("Failed to connect to API")</div>
                        <div class="command">                time.sleep(2 ** attempt)  # Exponential backoff</div>
                        <div class="command">            </div>
                        <div class="command">            except requests.exceptions.Timeout:</div>
                        <div class="command">                if attempt == retries - 1:</div>
                        <div class="command">                    raise APIError("API request timed out")</div>
                        <div class="command">            </div>
                        <div class="command">            except requests.exceptions.HTTPError as e:</div>
                        <div class="command">                raise APIError(f"HTTP error: {e.response.status_code}")</div>
                        <div class="command">        </div>
                        <div class="command">        return None</div>
                    </div>
                </div>

                <div class="tip">
                    <strong>💡 Error Handling Best Practices:</strong>
                    <ul>
                        <li>Catch specific exceptions rather than using bare 'except:'</li>
                        <li>Handle errors at the appropriate level of your program</li>
                        <li>Use custom exceptions to make error types clear</li>
                        <li>Log errors with sufficient context for debugging</li>
                        <li>Fail fast - validate inputs early</li>
                        <li>Don't ignore exceptions unless you have a good reason</li>
                        <li>Use 'finally' for cleanup code that must run</li>
                    </ul>
                </div>

                <div class="warning">
                    <strong>⚠️ Error Handling Anti-Patterns:</strong>
                    <ul>
                        <li><strong>Bare except clauses:</strong> 'except:' catches everything, including system exits</li>
                        <li><strong>Silent failures:</strong> Catching exceptions without handling them properly</li>
                        <li><strong>Overly broad exception handling:</strong> Catching 'Exception' when you should be more specific</li>
                        <li><strong>Using exceptions for control flow:</strong> Exceptions should be for exceptional cases</li>
                        <li><strong>Not cleaning up resources:</strong> Always close files, connections, etc.</li>
                    </ul>
                </div>
            `
        },
        libraries: {
            title: 'Popular Libraries',
            content: `
                <h1>📚 Popular Python Libraries</h1>
                
                <div class="theory-box">
                    <h4>Extending Python's Capabilities</h4>
                    <p>Python's strength lies not just in the language itself, but in its vast ecosystem of libraries. These libraries provide pre-built functionality for almost every task imaginable, from web development and data analysis to machine learning and scientific computing.</p>
                </div>

                <h2>Library Categories</h2>
                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Python Libraries] --> B[Web Development]
                        A --> C[Data Science]
                        A --> D[Machine Learning]
                        A --> E[GUI Development]
                        A --> F[Testing]
                        A --> G[Utilities]
                        
                        B --> H[Django, Flask, FastAPI]
                        C --> I[NumPy, Pandas, Matplotlib]
                        D --> J[Scikit-learn, TensorFlow, PyTorch]
                        E --> K[Tkinter, PyQt, Kivy]
                        F --> L[pytest, unittest, mock]
                        G --> M[requests, BeautifulSoup, Pillow]
                        
                        style A fill:#4caf50
                        style B fill:#ff9800
                        style C fill:#2196f3
                        style D fill:#9c27b0
                        style E fill:#f44336
                        style F fill:#00bcd4
                        style G fill:#795548
                    </div>
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
                    
                    <span class="comment"># Request with headers and parameters</span>
                    <div class="command">headers = {'User-Agent': 'My Python App 1.0'}</div>
                    <div class="command">params = {'q': 'python', 'sort': 'stars', 'order': 'desc'}</div>
                    
                    <div class="command">search_response = requests.get(</div>
                    <div class="command">    'https://api.github.com/search/repositories',</div>
                    <div class="command">    headers=headers,</div>
                    <div class="command">    params=params</div>
                    <div class="command">)</div>
                    
                    <div class="command">if search_response.status_code == 200:</div>
                    <div class="command">    search_data = search_response.json()</div>
                    <div class="command">    print(f"Found {search_data['total_count']} repositories")</div>
                    
                    <div class="output">Status Code: 200</div>
                    <div class="output">Content Type: application/json; charset=utf-8</div>
                    <div class="output">Name: The Octocat</div>
                    <div class="output">Public Repos: 8</div>
                    <div class="output">Post Status: 201</div>
                    <div class="output">Found 1000000 repositories</div>
                </div>

                <h2>Beautiful Soup - Web Scraping</h2>
                <p>A library for parsing HTML and XML documents, perfect for web scraping.</p>

                <div class="code-block">
                    <span class="comment"># Install: pip install beautifulsoup4</span>
                    <div class="command">from bs4 import BeautifulSoup</div>
                    <div class="command">import requests</div>
                    
                    <span class="comment"># Scrape a simple webpage</span>
                    <div class="command">url = 'https://httpbin.org/html'</div>
                    <div class="command">response = requests.get(url)</div>
                    <div class="command">soup = BeautifulSoup(response.content, 'html.parser')</div>
                    
                    <span class="comment"># Find elements</span>
                    <div class="command">title = soup.find('title').text</div>
                    <div class="command">print(f"Page title: {title}")</div>
                    
                    <span class="comment"># Find all links</span>
                    <div class="command">links = soup.find_all('a')</div>
                    <div class="command">for link in links:</div>
                    <div class="command">    print(f"Link: {link.get('href')} - {link.text}")</div>
                    
                    <span class="comment"># Parse HTML string</span>
                    <div class="command">html_content = """</div>
                    <div class="command">&lt;html&gt;</div>
                    <div class="command">    &lt;body&gt;</div>
                    <div class="command">        &lt;div class="container"&gt;</div>
                    <div class="command">            &lt;h1 id="main-title"&gt;Welcome&lt;/h1&gt;</div>
                    <div class="command">            &lt;p class="intro"&gt;This is an introduction.&lt;/p&gt;</div>
                    <div class="command">            &lt;ul&gt;</div>
                    <div class="command">                &lt;li&gt;Item 1&lt;/li&gt;</div>
                    <div class="command">                &lt;li&gt;Item 2&lt;/li&gt;</div>
                    <div class="command">            &lt;/ul&gt;</div>
                    <div class="command">        &lt;/div&gt;</div>
                    <div class="command">    &lt;/body&gt;</div>
                    <div class="command">&lt;/html&gt;</div>
                    <div class="command">"""</div>
                    
                    <div class="command">soup = BeautifulSoup(html_content, 'html.parser')</div>
                    
                    <span class="comment"># CSS selectors</span>
                    <div class="command">main_title = soup.select_one('#main-title').text</div>
                    <div class="command">intro = soup.select_one('.intro').text</div>
                    <div class="command">items = [li.text for li in soup.select('li')]</div>
                    
                    <div class="command">print(f"Title: {main_title}")</div>
                    <div class="command">print(f"Intro: {intro}")</div>
                    <div class="command">print(f"Items: {items}")</div>
                    
                    <div class="output">Title: Welcome</div>
                    <div class="output">Intro: This is an introduction.</div>
                    <div class="output">Items: ['Item 1', 'Item 2']</div>
                </div>

                <h2>NumPy - Numerical Computing</h2>
                <p>The foundation of scientific computing in Python, providing powerful array operations.</p>

                <div class="code-block">
                    <span class="comment"># Install: pip install numpy</span>
                    <div class="command">import numpy as np</div>
                    
                    <span class="comment"># Creating arrays</span>
                    <div class="command">arr1 = np.array([1, 2, 3, 4, 5])</div>
                    <div class="command">arr2 = np.array([[1, 2, 3], [4, 5, 6]])</div>
                    <div class="command">zeros = np.zeros((3, 3))</div>
                    <div class="command">ones = np.ones((2, 4))</div>
                    <div class="command">range_arr = np.arange(0, 10, 2)</div>
                    <div class="command">linspace_arr = np.linspace(0, 1, 5)</div>
                    
                    <div class="command">print(f"Array 1: {arr1}")</div>
                    <div class="command">print(f"Array 2 shape: {arr2.shape}")</div>
                    <div class="command">print(f"Range array: {range_arr}")</div>
                    <div class="command">print(f"Linspace array: {linspace_arr}")</div>
                    
                    <span class="comment"># Array operations</span>
                    <div class="command">numbers = np.array([1, 2, 3, 4, 5])</div>
                    <div class="command">squared = numbers ** 2</div>
                    <div class="command">doubled = numbers * 2</div>
                    <div class="command">sin_values = np.sin(numbers)</div>
                    
                    <div class="command">print(f"Original: {numbers}")</div>
                    <div class="command">print(f"Squared: {squared}")</div>
                    <div class="command">print(f"Doubled: {doubled}")</div>
                    
                    <span class="comment"># Statistical operations</span>
                    <div class="command">data = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])</div>
                    <div class="command">print(f"Mean: {np.mean(data)}")</div>
                    <div class="command">print(f"Median: {np.median(data)}")</div>
                    <div class="command">print(f"Standard deviation: {np.std(data)}")</div>
                    <div class="command">print(f"Sum: {np.sum(data)}")</div>
                    
                    <span class="comment"># Matrix operations</span>
                    <div class="command">matrix_a = np.array([[1, 2], [3, 4]])</div>
                    <div class="command">matrix_b = np.array([[5, 6], [7, 8]])</div>
                    <div class="command">matrix_product = np.dot(matrix_a, matrix_b)</div>
                    <div class="command">print(f"Matrix product:\\\n{matrix_product}")</div>
                    
                    <div class="output">Array 1: [1 2 3 4 5]</div>
                    <div class="output">Array 2 shape: (2, 3)</div>
                    <div class="output">Range array: [0 2 4 6 8]</div>
                    <div class="output">Linspace array: [0.   0.25 0.5  0.75 1.  ]</div>
                    <div class="output">Original: [1 2 3 4 5]</div>
                    <div class="output">Squared: [ 1  4  9 16 25]</div>
                    <div class="output">Doubled: [ 2  4  6  8 10]</div>
                    <div class="output">Mean: 5.5</div>
                    <div class="output">Median: 5.5</div>
                    <div class="output">Standard deviation: 2.8722813232690143</div>
                    <div class="output">Sum: 55</div>
                    <div class="output">Matrix product:</div>
                    <div class="output">[[19 22]</div>
                    <div class="output"> [43 50]]</div>
                </div>

                <h2>Pandas - Data Analysis</h2>
                <p>The go-to library for data manipulation and analysis in Python.</p>

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
                    <div class="command">print(f"\\\nDataFrame shape: {df.shape}")</div>
                    
                    <span class="comment"># Data exploration</span>
                    <div class="command">print("\\\nDataFrame info:")</div>
                    <div class="command">print(df.info())</div>
                    <div class="command">print("\\\nStatistical summary:")</div>
                    <div class="command">print(df.describe())</div>
                    
                    <span class="comment"># Data selection and filtering</span>
                    <div class="command">print(f"\\\nNames: {df['Name'].tolist()}")</div>
                    <div class="command">print(f"Average age: {df['Age'].mean()}")</div>
                    
                    <span class="comment"># Filtering data</span>
                    <div class="command">high_earners = df[df['Salary'] > 55000]</div>
                    <div class="command">print(f"\\\nHigh earners:\\\n{high_earners}")</div>
                    
                    <span class="comment"># Grouping and aggregation</span>
                    <div class="command">age_groups = df.groupby(df['Age'] > 30)['Salary'].mean()</div>
                    <div class="command">print(f"\\\nAverage salary by age group:\\\n{age_groups}")</div>
                    
                    <span class="comment"># Adding new columns</span>
                    <div class="command">df['Salary_USD'] = df['Salary']</div>
                    <div class="command">df['Age_Group'] = df['Age'].apply(lambda x: 'Young' if x < 30 else 'Senior')</div>
                    <div class="command">print(f"\\\nUpdated DataFrame:\\\n{df[['Name', 'Age_Group', 'Salary_USD']]}")</div>
                    
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

                <h2>Matplotlib - Data Visualization</h2>
                <p>A comprehensive library for creating static, animated, and interactive visualizations.</p>

                <div class="code-block">
                    <span class="comment"># Install: pip install matplotlib</span>
                    <div class="command">import matplotlib.pyplot as plt</div>
                    <div class="command">import numpy as np</div>
                    
                    <span class="comment"># Simple line plot</span>
                    <div class="command">x = np.linspace(0, 10, 100)</div>
                    <div class="command">y = np.sin(x)</div>
                    
                    <div class="command">plt.figure(figsize=(10, 6))</div>
                    <div class="command">plt.plot(x, y, label='sin(x)', color='blue', linewidth=2)</div>
                    <div class="command">plt.plot(x, np.cos(x), label='cos(x)', color='red', linestyle='--')</div>
                    <div class="command">plt.xlabel('X values')</div>
                    <div class="command">plt.ylabel('Y values')</div>
                    <div class="command">plt.title('Trigonometric Functions')</div>
                    <div class="command">plt.legend()</div>
                    <div class="command">plt.grid(True, alpha=0.3)</div>
                    <div class="command">plt.show()</div>
                    
                    <span class="comment"># Bar chart</span>
                    <div class="command">categories = ['A', 'B', 'C', 'D', 'E']</div>
                    <div class="command">values = [23, 45, 56, 78, 32]</div>
                    
                    <div class="command">plt.figure(figsize=(8, 6))</div>
                    <div class="command">bars = plt.bar(categories, values, color=['red', 'green', 'blue', 'orange', 'purple'])</div>
                    <div class="command">plt.xlabel('Categories')</div>
                    <div class="command">plt.ylabel('Values')</div>
                    <div class="command">plt.title('Sample Bar Chart')</div>
                    
                    <span class="comment"># Add value labels on bars</span>
                    <div class="command">for bar, value in zip(bars, values):</div>
                    <div class="command">    plt.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 1, </div>
                    <div class="command">             str(value), ha='center', va='bottom')</div>
                    <div class="command">plt.show()</div>
                    
                    <span class="comment"># Histogram</span>
                    <div class="command">data = np.random.normal(100, 15, 1000)  # Normal distribution</div>
                    
                    <div class="command">plt.figure(figsize=(8, 6))</div>
                    <div class="command">plt.hist(data, bins=30, alpha=0.7, color='skyblue', edgecolor='black')</div>
                    <div class="command">plt.xlabel('Values')</div>
                    <div class="command">plt.ylabel('Frequency')</div>
                    <div class="command">plt.title('Histogram of Random Data')</div>
                    <div class="command">plt.axvline(np.mean(data), color='red', linestyle='dashed', linewidth=2, label=f'Mean: {np.mean(data):.1f}')</div>
                    <div class="command">plt.legend()</div>
                    <div class="command">plt.show()</div>
                    
                    <span class="comment"># Subplots</span>
                    <div class="command">fig, ((ax1, ax2), (ax3, ax4)) = plt.subplots(2, 2, figsize=(12, 10))</div>
                    
                    <div class="command"># Plot 1: Line plot</div>
                    <div class="command">ax1.plot(x, y)</div>
                    <div class="command">ax1.set_title('Line Plot')</div>
                    
                    <div class="command"># Plot 2: Scatter plot</div>
                    <div class="command">ax2.scatter(np.random.randn(50), np.random.randn(50), alpha=0.6)</div>
                    <div class="command">ax2.set_title('Scatter Plot')</div>
                    
                    <div class="command"># Plot 3: Bar plot</div>
                    <div class="command">ax3.bar(categories, values)</div>
                    <div class="command">ax3.set_title('Bar Plot')</div>
                    
                    <div class="command"># Plot 4: Pie chart</div>
                    <div class="command">ax4.pie(values, labels=categories, autopct='%1.1f%%')</div>
                    <div class="command">ax4.set_title('Pie Chart')</div>
                    
                    <div class="command">plt.tight_layout()</div>
                    <div class="command">plt.show()</div>
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

                <h2>Other Essential Libraries</h2>
                <div class="practice-box">
                    <h4>Quick Overview of More Libraries</h4>
                    <ul>
                        <li><strong>Pillow:</strong> Image processing and manipulation</li>
                        <li><strong>pytest:</strong> Testing framework for Python code</li>
                        <li><strong>Flask/Django:</strong> Web frameworks for building web applications</li>
                        <li><strong>SQLAlchemy:</strong> SQL toolkit and Object-Relational Mapping</li>
                        <li><strong>Selenium:</strong> Web browser automation</li>
                        <li><strong>scikit-learn:</strong> Machine learning library</li>
                        <li><strong>TensorFlow/PyTorch:</strong> Deep learning frameworks</li>
                    </ul>
                </div>

                <div class="code-block">
                    <span class="comment"># Pillow - Image processing</span>
                    <span class="comment"># Install: pip install Pillow</span>
                    <div class="command">from PIL import Image, ImageFilter</div>
                    
                    <span class="comment"># Create a simple image</span>
                    <div class="command">img = Image.new('RGB', (200, 200), color='red')</div>
                    <div class="command">img.save('red_square.png')</div>
                    
                    <span class="comment"># Open and manipulate an image</span>
                    <div class="command"># img = Image.open('photo.jpg')</div>
                    <div class="command"># resized = img.resize((800, 600))</div>
                    <div class="command"># blurred = img.filter(ImageFilter.BLUR)</div>
                    <div class="command"># grayscale = img.convert('L')</div>
                    
                    <span class="comment"># pytest - Testing</span>
                    <span class="comment"># Install: pip install pytest</span>
                    <div class="command"># test_math_functions.py</div>
                    <div class="command">def add(a, b):</div>
                    <div class="command">    return a + b</div>
                    
                    <div class="command">def test_add():</div>
                    <div class="command">    assert add(2, 3) == 5</div>
                    <div class="command">    assert add(-1, 1) == 0</div>
                    <div class="command">    assert add(0, 0) == 0</div>
                    
                    <span class="comment"># Run tests: pytest test_math_functions.py</span>
                </div>

                <div class="scenario-box">
                    <h4>Real-World Library Usage Example</h4>
                    <div class="code-block">
                        <div class="command">import requests</div>
                        <div class="command">import pandas as pd</div>
                        <div class="command">import matplotlib.pyplot as plt</div>
                        <div class="command">from datetime import datetime, timedelta</div>
                        <div class="command"></div>
                        <div class="command">class WeatherAnalyzer:</div>
                        <div class="command">    def __init__(self, api_key):</div>
                        <div class="command">        self.api_key = api_key</div>
                        <div class="command">        self.base_url = "http://api.openweathermap.org/data/2.5"</div>
                        <div class="command">    </div>
                        <div class="command">    def get_weather_data(self, city):</div>
                        <div class="command">        """Fetch current weather data for a city."""</div>
                        <div class="command">        url = f"{self.base_url}/weather"</div>
                        <div class="command">        params = {'q': city, 'appid': self.api_key, 'units': 'metric'}</div>
                        <div class="command">        </div>
                        <div class="command">        response = requests.get(url, params=params)</div>
                        <div class="command">        if response.status_code == 200:</div>
                        <div class="command">            return response.json()</div>
                        <div class="command">        return None</div>
                        <div class="command">    </div>
                        <div class="command">    def analyze_multiple_cities(self, cities):</div>
                        <div class="command">        """Analyze weather data for multiple cities."""</div>
                        <div class="command">        data = []</div>
                        <div class="command">        for city in cities:</div>
                        <div class="command">            weather = self.get_weather_data(city)</div>
                        <div class="command">            if weather:</div>
                        <div class="command">                data.append({</div>
                        <div class="command">                    'city': city,</div>
                        <div class="command">                    'temperature': weather['main']['temp'],</div>
                        <div class="command">                    'humidity': weather['main']['humidity'],</div>
                        <div class="command">                    'description': weather['weather'][0]['description']</div>
                        <div class="command">                })</div>
                        <div class="command">        </div>
                        <div class="command">        df = pd.DataFrame(data)</div>
                        <div class="command">        return df</div>
                        <div class="command">    </div>
                        <div class="command">    def create_visualization(self, df):</div>
                        <div class="command">        """Create temperature comparison chart."""</div>
                        <div class="command">        plt.figure(figsize=(10, 6))</div>
                        <div class="command">        plt.bar(df['city'], df['temperature'])</div>
                        <div class="command">        plt.xlabel('Cities')</div>
                        <div class="command">        plt.ylabel('Temperature (°C)')</div>
                        <div class="command">        plt.title('Temperature Comparison Across Cities')</div>
                        <div class="command">        plt.xticks(rotation=45)</div>
                        <div class="command">        plt.tight_layout()</div>
                        <div class="command">        plt.show()</div>
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

                <div class="warning">
                    <strong>⚠️ Library Management Best Practices:</strong>
                    <ul>
                        <li><strong>Dependency hell:</strong> Use virtual environments and requirements.txt</li>
                        <li><strong>Version conflicts:</strong> Pin specific versions for production</li>
                        <li><strong>Bloated environments:</strong> Only install what you actually need</li>
                        <li><strong>Security:</strong> Regularly update libraries to patch vulnerabilities</li>
                        <li><strong>Documentation:</strong> Always document which libraries your project uses</li>
                    </ul>
                </div>
            `
        },
        best_practices: {
            title: 'Best Practices',
            content: `
                <h1>⭐ Python Best Practices</h1>
                
                <div class="theory-box">
                    <h4>Writing Professional Python Code</h4>
                    <p>Writing code that works is just the beginning. Professional Python development requires following established conventions, writing maintainable code, and adopting practices that make your code readable, testable, and scalable. These best practices will help you write Python code like a pro.</p>
                </div>

                <h2>PEP 8 - Style Guide</h2>
                <p>PEP 8 is the official style guide for Python code. Following it makes your code more readable and consistent.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[PEP 8 Guidelines] --> B[Naming Conventions]
                        A --> C[Code Layout]
                        A --> D[Comments]
                        A --> E[Line Length]
                        
                        B --> F[snake_case for variables]
                        B --> G[UPPER_CASE for constants]
                        B --> H[PascalCase for classes]
                        
                        C --> I[4 spaces for indentation]
                        C --> J[Blank lines for separation]
                        C --> K[Import organization]
                        
                        style A fill:#4caf50
                        style B fill:#ff9800
                        style C fill:#2196f3
                        style D fill:#9c27b0
                        style E fill:#f44336
                    </div>
                </div>

                <div class="code-block">
                    <span class="comment"># Good naming conventions</span>
                    <div class="command"># Variables and functions: snake_case</div>
                    <div class="command">user_name = "alice"</div>
                    <div class="command">total_amount = 150.75</div>
                    <div class="command">is_active = True</div>
                    
                    <div class="command">def calculate_total_price(items, tax_rate):</div>
                    <div class="command">    """Calculate total price including tax."""</div>
                    <div class="command">    subtotal = sum(item.price for item in items)</div>
                    <div class="command">    return subtotal * (1 + tax_rate)</div>
                    
                    <span class="comment"># Constants: UPPER_CASE</span>
                    <div class="command">MAX_RETRY_ATTEMPTS = 3</div>
                    <div class="command">DEFAULT_TIMEOUT = 30</div>
                    <div class="command">API_BASE_URL = "https://api.example.com"</div>
                    
                    <span class="comment"># Classes: PascalCase</span>
                    <div class="command">class UserAccount:</div>
                    <div class="command">    """Represents a user account in the system."""</div>
                    
                    <div class="command">    def __init__(self, username, email):</div>
                    <div class="command">        self.username = username</div>
                    <div class="command">        self.email = email</div>
                    <div class="command">        self._is_verified = False  # Protected attribute</div>
                    <div class="command">        self.__password_hash = None  # Private attribute</div>
                    
                    <div class="command">    def verify_account(self):</div>
                    <div class="command">        """Mark the account as verified."""</div>
                    <div class="command">        self._is_verified = True</div>
                    
                    <span class="comment"># Bad naming examples (avoid these)</span>
                    <span class="comment"># userName = "alice"  # camelCase (not Python style)</span>
                    <span class="comment"># totamnt = 150.75  # Unclear abbreviation</span>
                    <span class="comment"># def calcTotPrice():  # camelCase function name</span>
                    <span class="comment"># class userAccount:  # lowercase class name</span>
                </div>

                <h2>Code Organization and Imports</h2>
                <div class="code-block">
                    <span class="comment"># Good import organization</span>
                    <div class="command"># 1. Standard library imports</div>
                    <div class="command">import os</div>
                    <div class="command">import sys</div>
                    <div class="command">from datetime import datetime, timedelta</div>
                    <div class="command">from pathlib import Path</div>
                    
                    <div class="command"># 2. Third-party imports</div>
                    <div class="command">import requests</div>
                    <div class="command">import pandas as pd</div>
                    <div class="command">import numpy as np</div>
                    <div class="command">from flask import Flask, request, jsonify</div>
                    
                    <div class="command"># 3. Local application imports</div>
                    <div class="command">from myproject.models import User, Product</div>
                    <div class="command">from myproject.utils import validate_email</div>
                    <div class="command">from . import config</div>
                    
                    <span class="comment"># Avoid wildcard imports</span>
                    <span class="comment"># from module import *  # Don't do this</span>
                    
                    <span class="comment"># Use meaningful aliases</span>
                    <div class="command">import matplotlib.pyplot as plt  # Good</div>
                    <div class="command">import tensorflow as tf  # Good</div>
                    <span class="comment"># import numpy as n  # Too short, unclear</span>
                </div>

                <h2>Writing Clean Functions</h2>
                <div class="code-block">
                    <span class="comment"># Good function examples</span>
                    
                    <div class="command">def validate_email(email: str) -> bool:</div>
                    <div class="command">    """</div>
                    <div class="command">    Validate if the provided email address is in correct format.</div>
                    <div class="command">    </div>
                    <div class="command">    Args:</div>
                    <div class="command">        email (str): Email address to validate</div>
                    <div class="command">    </div>
                    <div class="command">    Returns:</div>
                    <div class="command">        bool: True if email is valid, False otherwise</div>
                    <div class="command">    </div>
                    <div class="command">    Example:</div>
                    <div class="command">        >>> validate_email("user@example.com")</div>
                    <div class="command">        True</div>
                    <div class="command">        >>> validate_email("invalid-email")</div>
                    <div class="command">        False</div>
                    <div class="command">    """</div>
                    <div class="command">    import re</div>
                    <div class="command">    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}</div>
                    <div class="command">    return re.match(pattern, email) is not None</div>
                    
                    <div class="command">def calculate_discount(price: float, discount_percent: float) -> float:</div>
                    <div class="command">    """Calculate the discounted price."""</div>
                    <div class="command">    if not (0 <= discount_percent <= 100):</div>
                    <div class="command">        raise ValueError("Discount percent must be between 0 and 100")</div>
                    <div class="command">    </div>
                    <div class="command">    discount_amount = price * (discount_percent / 100)</div>
                    <div class="command">    return price - discount_amount</div>
                    
                    <span class="comment"># Function should do one thing well</span>
                    <div class="command">def process_user_data(user_data: dict) -> dict:</div>
                    <div class="command">    """Process and clean user data."""</div>
                    <div class="command">    cleaned_data = {}</div>
                    <div class="command">    </div>
                    <div class="command">    # Validate required fields</div>
                    <div class="command">    required_fields = ['name', 'email', 'age']</div>
                    <div class="command">    for field in required_fields:</div>
                    <div class="command">        if field not in user_data:</div>
                    <div class="command">            raise ValueError(f"Missing required field: {field}")</div>
                    <div class="command">    </div>
                    <div class="command">    # Clean and validate data</div>
                    <div class="command">    cleaned_data['name'] = user_data['name'].strip().title()</div>
                    <div class="command">    cleaned_data['email'] = user_data['email'].lower().strip()</div>
                    <div class="command">    cleaned_data['age'] = int(user_data['age'])</div>
                    <div class="command">    </div>
                    <div class="command">    if not validate_email(cleaned_data['email']):</div>
                    <div class="command">        raise ValueError("Invalid email format")</div>
                    <div class="command">    </div>
                    <div class="command">    return cleaned_data</div>
                </div>

                <h2>Error Handling Best Practices</h2>
                <div class="code-block">
                    <span class="comment"># Good error handling patterns</span>
                    
                    <div class="command">def safe_divide(a: float, b: float) -> float:</div>
                    <div class="command">    """Safely divide two numbers with proper error handling."""</div>
                    <div class="command">    try:</div>
                    <div class="command">        if b == 0:</div>
                    <div class="command">            raise ValueError("Division by zero is not allowed")</div>
                    <div class="command">        return a / b</div>
                    <div class="command">    except TypeError:</div>
                    <div class="command">        raise TypeError("Both arguments must be numbers")</div>
                    
                    <div class="command">def read_config_file(filepath: str) -> dict:</div>
                    <div class="command">    """Read configuration from JSON file with error handling."""</div>
                    <div class="command">    import json</div>
                    <div class="command">    from pathlib import Path</div>
                    <div class="command">    </div>
                    <div class="command">    try:</div>
                    <div class="command">        config_path = Path(filepath)</div>
                    <div class="command">        if not config_path.exists():</div>
                    <div class="command">            raise FileNotFoundError(f"Config file not found: {filepath}")</div>
                    <div class="command">        </div>
                    <div class="command">        with open(config_path, 'r') as file:</div>
                    <div class="command">            config = json.load(file)</div>
                    <div class="command">        </div>
                    <div class="command">        # Validate required config keys</div>
                    <div class="command">        required_keys = ['database_url', 'api_key']</div>
                    <div class="command">        for key in required_keys:</div>
                    <div class="command">            if key not in config:</div>
                    <div class="command">                raise ValueError(f"Missing required config key: {key}")</div>
                    <div class="command">        </div>
                    <div class="command">        return config</div>
                    <div class="command">    </div>
                    <div class="command">    except json.JSONDecodeError as e:</div>
                    <div class="command">        raise ValueError(f"Invalid JSON in config file: {e}")</div>
                    <div class="command">    except PermissionError:</div>
                    <div class="command">        raise PermissionError(f"No permission to read file: {filepath}")</div>
                </div>

                <h2>Testing Best Practices</h2>
                <div class="code-block">
                    <span class="comment"># Good testing practices with pytest</span>
                    
                    <span class="comment"># test_user_functions.py</span>
                    <div class="command">import pytest</div>
                    <div class="command">from myproject.users import validate_email, calculate_discount</div>
                    
                    <div class="command">class TestEmailValidation:</div>
                    <div class="command">    """Test cases for email validation function."""</div>
                    
                    <div class="command">    def test_valid_emails(self):</div>
                    <div class="command">        """Test that valid emails return True."""</div>
                    <div class="command">        valid_emails = [</div>
                    <div class="command">            "user@example.com",</div>
                    <div class="command">            "test.email+tag@domain.co.uk",</div>
                    <div class="command">            "user123@test-domain.org"</div>
                    <div class="command">        ]</div>
                    <div class="command">        for email in valid_emails:</div>
                    <div class="command">            assert validate_email(email), f"Failed for valid email: {email}"</div>
                    
                    <div class="command">    def test_invalid_emails(self):</div>
                    <div class="command">        """Test that invalid emails return False."""</div>
                    <div class="command">        invalid_emails = [</div>
                    <div class="command">            "invalid-email",</div>
                    <div class="command">            "@domain.com",</div>
                    <div class="command">            "user@",</div>
                    <div class="command">            "user space@domain.com"</div>
                    <div class="command">        ]</div>
                    <div class="command">        for email in invalid_emails:</div>
                    <div class="command">            assert not validate_email(email), f"Failed for invalid email: {email}"</div>
                    
                    <div class="command">class TestDiscountCalculation:</div>
                    <div class="command">    """Test cases for discount calculation function."""</div>
                    
                    <div class="command">    def test_valid_discount(self):</div>
                    <div class="command">        """Test normal discount calculation."""</div>
                    <div class="command">        assert calculate_discount(100, 10) == 90</div>
                    <div class="command">        assert calculate_discount(50, 25) == 37.5</div>
                    <div class="command">        assert calculate_discount(200, 0) == 200</div>
                    
                    <div class="command">    def test_invalid_discount_percentage(self):</div>
                    <div class="command">        """Test that invalid discount percentages raise ValueError."""</div>
                    <div class="command">        with pytest.raises(ValueError):</div>
                    <div class="command">            calculate_discount(100, -10)</div>
                    <div class="command">        </div>
                    <div class="command">        with pytest.raises(ValueError):</div>
                    <div class="command">            calculate_discount(100, 150)</div>
                    
                    <div class="command">    @pytest.mark.parametrize("price,discount,expected", [</div>
                    <div class="command">        (100, 10, 90),</div>
                    <div class="command">        (50, 20, 40),</div>
                    <div class="command">        (75, 15, 63.75)</div>
                    <div class="command">    ])</div>
                    <div class="command">    def test_discount_parametrized(self, price, discount, expected):</div>
                    <div class="command">        """Test discount calculation with multiple parameters."""</div>
                    <div class="command">        assert calculate_discount(price, discount) == expected</div>
                </div>

                <h2>Code Documentation</h2>
                <div class="code-block">
                    <span class="comment"># Good documentation practices</span>
                    
                    <div class="command">class ShoppingCart:</div>
                    <div class="command">    """</div>
                    <div class="command">    A shopping cart that manages items and calculates totals.</div>
                    <div class="command">    </div>
                    <div class="command">    This class provides functionality to add/remove items from a cart,</div>
                    <div class="command">    calculate totals with tax, and apply discount codes.</div>
                    <div class="command">    </div>
                    <div class="command">    Attributes:</div>
                    <div class="command">        items (list): List of CartItem objects in the cart</div>
                    <div class="command">        tax_rate (float): Tax rate as a decimal (e.g., 0.08 for 8%)</div>
                    <div class="command">    </div>
                    <div class="command">    Example:</div>
                    <div class="command">        >>> cart = ShoppingCart(tax_rate=0.08)</div>
                    <div class="command">        >>> cart.add_item("Widget", 10.99, 2)</div>
                    <div class="command">        >>> print(cart.get_total())</div>
                    <div class="command">        23.73</div>
                    <div class="command">    """</div>
                    
                    <div class="command">    def __init__(self, tax_rate: float = 0.0):</div>
                    <div class="command">        """</div>
                    <div class="command">        Initialize a new shopping cart.</div>
                    <div class="command">        </div>
                    <div class="command">        Args:</div>
                    <div class="command">            tax_rate (float): Tax rate as decimal. Defaults to 0.0.</div>
                    <div class="command">        </div>
                    <div class="command">        Raises:</div>
                    <div class="command">            ValueError: If tax_rate is negative.</div>
                    <div class="command">        """</div>
                    <div class="command">        if tax_rate < 0:</div>
                    <div class="command">            raise ValueError("Tax rate cannot be negative")</div>
                    <div class="command">        </div>
                    <div class="command">        self.items = []</div>
                    <div class="command">        self.tax_rate = tax_rate</div>
                    
                    <div class="command">    def add_item(self, name: str, price: float, quantity: int = 1) -> None:</div>
                    <div class="command">        """</div>
                    <div class="command">        Add an item to the shopping cart.</div>
                    <div class="command">        </div>
                    <div class="command">        Args:</div>
                    <div class="command">            name (str): Name of the item</div>
                    <div class="command">            price (float): Price per unit</div>
                    <div class="command">            quantity (int): Number of items to add. Defaults to 1.</div>
                    <div class="command">        </div>
                    <div class="command">        Raises:</div>
                    <div class="command">            ValueError: If price is negative or quantity is not positive.</div>
                    <div class="command">        """</div>
                    <div class="command">        if price < 0:</div>
                    <div class="command">            raise ValueError("Price cannot be negative")</div>
                    <div class="command">        if quantity <= 0:</div>
                    <div class="command">            raise ValueError("Quantity must be positive")</div>
                    <div class="command">        </div>
                    <div class="command">        # Implementation here...</div>
                    <div class="command">        pass</div>
                </div>

                <h2>Performance Considerations</h2>
                <div class="code-block">
                    <span class="comment"># Performance best practices</span>
                    
                    <span class="comment"># Use list comprehensions for simple transformations</span>
                    <div class="command"># Good</div>
                    <div class="command">squares = [x**2 for x in range(10)]</div>
                    <div class="command">even_numbers = [x for x in range(100) if x % 2 == 0]</div>
                    
                    <span class="comment"># Less efficient</span>
                    <span class="comment"># squares = []</span>
                    <span class="comment"># for x in range(10):</span>
                    <span class="comment">#     squares.append(x**2)</span>
                    
                    <span class="comment"># Use sets for membership testing</span>
                    <div class="command"># Good - O(1) lookup</div>
                    <div class="command">valid_ids = {1, 5, 10, 15, 20}</div>
                    <div class="command">if user_id in valid_ids:</div>
                    <div class="command">    print("Valid user")</div>
                    
                    <span class="comment"># Less efficient - O(n) lookup</span>
                    <span class="comment"># valid_ids = [1, 5, 10, 15, 20]</span>
                    <span class="comment"># if user_id in valid_ids:</span>
                    
                    <span class="comment"># Use join() for string concatenation</span>
                    <div class="command"># Good</div>
                    <div class="command">words = ['hello', 'world', 'python']</div>
                    <div class="command">sentence = ' '.join(words)</div>
                    
                    <span class="comment"># Less efficient for many strings</span>
                    <span class="comment"># sentence = ""</span>
                    <span class="comment"># for word in words:</span>
                    <span class="comment">#     sentence += word + " "</span>
                    
                    <span class="comment"># Use generators for large datasets</span>
                    <div class="command">def read_large_file(filename):</div>
                    <div class="command">    """Generator that yields lines from a large file."""</div>
                    <div class="command">    with open(filename, 'r') as file:</div>
                    <div class="command">        for line in file:</div>
                    <div class="command">            yield line.strip()</div>
                    
                    <span class="comment"># Use it like this:</span>
                    <div class="command"># for line in read_large_file('huge_file.txt'):</div>
                    <div class="command">#     process(line)  # Memory efficient</div>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 11: Code Refactoring</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Take a piece of code you've written earlier and apply PEP 8 guidelines
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Add proper docstrings and type hints to all functions
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Write comprehensive unit tests for your functions
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Add proper error handling and validation
                    </div>
                    <div class="exercise-step">
                        <strong>Step 5:</strong> Profile your code and optimize any performance bottlenecks
                    </div>
                </div>

                <div class="scenario-box">
                    <h4>Real-World Example: Production-Ready Code</h4>
                    <div class="code-block">
                        <div class="command">"""</div>
                        <div class="command">User management module for the application.</div>
                        <div class="command"></div>
                        <div class="command">This module provides functionality for creating, validating,</div>
                        <div class="command">and managing user accounts in the system.</div>
                        <div class="command">"""</div>
                        <div class="command"></div>
                        <div class="command">import logging</div>
                        <div class="command">import re</div>
                        <div class="command">from datetime import datetime</div>
                        <div class="command">from typing import Optional, Dict, Any</div>
                        <div class="command"></div>
                        <div class="command">logger = logging.getLogger(__name__)</div>
                        <div class="command"></div>
                        <div class="command">class UserValidationError(Exception):</div>
                        <div class="command">    """Raised when user data validation fails."""</div>
                        <div class="command">    pass</div>
                        <div class="command"></div>
                        <div class="command">class UserManager:</div>
                        <div class="command">    """Manages user accounts and validation."""</div>
                        <div class="command">    </div>
                        <div class="command">    EMAIL_PATTERN = re.compile(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})</div>
                        <div class="command">    MIN_PASSWORD_LENGTH = 8</div>
                        <div class="command">    </div>
                        <div class="command">    def create_user(self, username: str, email: str, password: str) -> Dict[str, Any]:</div>
                        <div class="command">        """</div>
                        <div class="command">        Create a new user account with validation.</div>
                        <div class="command">        </div>
                        <div class="command">        Args:</div>
                        <div class="command">            username: Unique username for the account</div>
                        <div class="command">            email: User's email address</div>
                        <div class="command">            password: User's password</div>
                        <div class="command">        </div>
                        <div class="command">        Returns:</div>
                        <div class="command">            Dictionary containing user information</div>
                        <div class="command">        </div>
                        <div class="command">        Raises:</div>
                        <div class="command">            UserValidationError: If validation fails</div>
                        <div class="command">        """</div>
                        <div class="command">        self._validate_user_data(username, email, password)</div>
                        <div class="command">        </div>
                        <div class="command">        user_data = {</div>
                        <div class="command">            'username': username.lower().strip(),</div>
                        <div class="command">            'email': email.lower().strip(),</div>
                        <div class="command">            'created_at': datetime.utcnow(),</div>
                        <div class="command">            'is_active': True</div>
                        <div class="command">        }</div>
                        <div class="command">        </div>
                        <div class="command">        logger.info(f"Created user account: {username}")</div>
                        <div class="command">        return user_data</div>
                        <div class="command">    </div>
                        <div class="command">    def _validate_user_data(self, username: str, email: str, password: str) -> None:</div>
                        <div class="command">        """Validate user input data."""</div>
                        <div class="command">        if not username or len(username.strip()) < 3:</div>
                        <div class="command">            raise UserValidationError("Username must be at least 3 characters")</div>
                        <div class="command">        </div>
                        <div class="command">        if not self.EMAIL_PATTERN.match(email):</div>
                        <div class="command">            raise UserValidationError("Invalid email format")</div>
                        <div class="command">        </div>
                        <div class="command">        if len(password) < self.MIN_PASSWORD_LENGTH:</div>
                        <div class="command">            raise UserValidationError(f"Password must be at least {self.MIN_PASSWORD_LENGTH} characters")</div>
                    </div>
                </div>

                <div class="tip">
                    <strong>💡 Best Practices Summary:</strong>
                    <ul>
                        <li>Follow PEP 8 style guidelines consistently</li>
                        <li>Write clear, descriptive function and variable names</li>
                        <li>Add comprehensive docstrings and type hints</li>
                        <li>Handle errors gracefully with specific exceptions</li>
                        <li>Write tests for all your functions</li>
                        <li>Keep functions small and focused on single responsibilities</li>
                        <li>Use logging instead of print statements for debugging</li>
                        <li>Optimize for readability first, performance second</li>
                    </ul>
                </div>

                <div class="warning">
                    <strong>⚠️ Common Anti-Patterns to Avoid:</strong>
                    <ul>
                        <li><strong>God objects:</strong> Classes that try to do everything</li>
                        <li><strong>Magic numbers:</strong> Use named constants instead of hardcoded values</li>
                        <li><strong>Deep nesting:</strong> Avoid more than 3-4 levels of indentation</li>
                        <li><strong>Long functions:</strong> Break down functions longer than 50 lines</li>
                        <li><strong>Global variables:</strong> Minimize global state</li>
                        <li><strong>Premature optimization:</strong> Write clean code first, optimize later</li>
                    </ul>
                </div>
            `
        }
    }
};

// Attach to window explicitly for global access
window.PYTHON_CONTENT = PYTHON_CONTENT;

console.log('PYTHON_CONTENT loaded:', PYTHON_CONTENT);
console.log('PYTHON_CONTENT attached to window:', window.PYTHON_CONTENT);
console.log('Number of chapters:', Object.keys(PYTHON_CONTENT.chapters).length);