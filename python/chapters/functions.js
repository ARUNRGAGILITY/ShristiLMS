// chapters/functions.js
console.log('Loading functions chapter...');

window.PYTHON_CONTENT.chapters.functions = {
    title: 'Functions',
    content: `
        <h1>⚙️ Functions</h1>
        
        <div class="theory-box">
            <h4>Reusable Code Blocks</h4>
            <p>Functions are reusable blocks of code that perform specific tasks. They help organize code, reduce repetition, and make programs more modular and maintainable. Functions are the building blocks of larger programs.</p>
        </div>

        <h2>Defining and Calling Functions</h2>
        <p>Functions are defined using the 'def' keyword followed by the function name and parameters.</p>

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
        <div class="code-block">
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
            
            <div class="output">15</div>
            <div class="output">30</div>
            <div class="output">name: Alice</div>
            <div class="output">age: 25</div>
            <div class="output">city: New York</div>
        </div>

        <h2>Lambda Functions</h2>
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
            
            <div class="output">25</div>
            <div class="output">10</div>
            <div class="output">[1, 4, 9, 16, 25]</div>
            <div class="output">[2, 4]</div>
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
    `
};
