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

       
    `
};
