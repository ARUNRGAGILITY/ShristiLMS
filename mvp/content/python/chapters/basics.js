// chapters/basics.js
console.log('Loading basics chapter...');

window.PYTHON_CONTENT.chapters.basics = {
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
                    A["Python Data Types"] --> B["Numbers"]
                    A --> C["Strings"]
                    A --> D["Booleans"]
                    A --> E["Collections"]
                    
                    B --> F["int: 42"]
                    B --> G["float: 3.14"]
                    B --> H["complex: 2+3j"]
                    
                    C --> I["str: Hello"]
                    
                    D --> J["bool: True/False"]
                    
                    E --> K["list: [1,2,3]"]
                    E --> L["dict: key-value"]
                    E --> M["tuple: (1,2,3)"]
                    E --> N["set: {1,2,3}"]
                    
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
            <div class="command">multi_line = """This is a
multi-line string"""</div>
            
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
                <li><strong>Comparison:</strong> ==, !=, &lt;, &gt;, &lt;=, &gt;=</li>
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
            <div class="command">print(f"x &lt; y: {x < y}")</div>
            <div class="command">print(f"x &gt; y: {x > y}")</div>
            
            <div class="command">print(f"x &lt; y and x &gt; 0: {x < y and x > 0}")</div>
            <div class="command">print(f"x &gt; y or x &lt; 10: {x > y or x < 10}")</div>
            <div class="command">print(f"not (x &gt; y): {not (x > y)}")</div>
            
            <div class="output">x == y: False</div>
            <div class="output">x &lt; y: True</div>
            <div class="output">x &gt; y: False</div>
            <div class="output">x &lt; y and x &gt; 0: True</div>
            <div class="output">x &gt; y or x &lt; 10: True</div>
            <div class="output">not (x &gt; y): True</div>
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
};