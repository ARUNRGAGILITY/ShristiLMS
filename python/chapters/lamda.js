// chapters/lambda.js
console.log('Loading lambda chapter...');

window.PYTHON_CONTENT.chapters.lambda = {
    title: 'Lambda Functions',
    content: `
        <h1>🔀 Lambda Functions</h1>
        
        <div class="theory-box">
            <h4>Anonymous Functions in Python</h4>
            <p>Lambda functions are small, anonymous functions that can be defined inline. They are also known as "lambda expressions" and provide a concise way to create functions for short-term use. Lambda functions are particularly useful with higher-order functions like map(), filter(), and reduce().</p>
        </div>

        <h2>Lambda Syntax and Basics</h2>
        <p>Lambda functions are created using the lambda keyword followed by parameters and an expression.</p>

        <div class="mermaid-container">
            <div class="mermaid">
            graph LR
                A[lambda] --> B[parameters]
                B --> C[:]
                C --> D[expression]
                
                E[lambda x: x * 2] --> F[Returns function object]
                
                style A fill:#4caf50
                style E fill:#ff9800
                style F fill:#2196f3
            </div>
        </div>

        <div class="code-block">
            <span class="comment"># Basic lambda syntax</span>
            <div class="command"># lambda parameters: expression</div>
            
            <span class="comment"># Simple lambda function</span>
            <div class="command">square = lambda x: x ** 2</div>
            <div class="command">print(square(5))</div>
            <div class="command">print(square(10))</div>
            
            <span class="comment"># Lambda with multiple parameters</span>
            <div class="command">add = lambda x, y: x + y</div>
            <div class="command">multiply = lambda x, y, z: x * y * z</div>
            
            <div class="command">print(add(3, 7))</div>
            <div class="command">print(multiply(2, 3, 4))</div>
            
            <span class="comment"># Lambda with default parameters</span>
            <div class="command">greet = lambda name, greeting="Hello": f"{greeting}, {name}!"</div>
            <div class="command">print(greet("Alice"))</div>
            <div class="command">print(greet("Bob", "Hi"))</div>
            
            <span class="comment"># Lambda with conditional expression</span>
            <div class="command">max_val = lambda a, b: a if a > b else b</div>
            <div class="command">min_val = lambda a, b: a if a < b else b</div>
            
            <div class="command">print(max_val(10, 20))</div>
            <div class="command">print(min_val(10, 20))</div>
            
            <div class="output">25</div>
            <div class="output">100</div>
            <div class="output">10</div>
            <div class="output">24</div>
            <div class="output">Hello, Alice!</div>
            <div class="output">Hi, Bob!</div>
            <div class="output">20</div>
            <div class="output">10</div>
        </div>

        <h2>Lambda vs Regular Functions</h2>
        <div class="code-block">
            <span class="comment"># Regular function</span>
            <div class="command">def calculate_tax(amount, rate):</div>
            <div class="command">    return amount * rate</div>
            
            <span class="comment"># Equivalent lambda function</span>
            <div class="command">calculate_tax_lambda = lambda amount, rate: amount * rate</div>
            
            <span class="comment"># Both produce the same result</span>
            <div class="command">print(calculate_tax(1000, 0.08))</div>
            <div class="command">print(calculate_tax_lambda(1000, 0.08))</div>
            
            <span class="comment"># When to use lambda vs regular functions</span>
            <div class="command"># Lambda: Simple, one-line expressions</div>
            <div class="command"># Regular: Complex logic, multiple statements, documentation needed</div>
            
            <span class="comment"># Lambda limitations - NO multiple statements</span>
            <div class="command"># This WON'T work:</div>
            <div class="command"># complex_lambda = lambda x: print(x); return x * 2  # Syntax Error</div>
            
            <span class="comment"># Use regular function instead:</span>
            <div class="command">def complex_function(x):</div>
            <div class="command">    print(f"Processing: {x}")</div>
            <div class="command">    return x * 2</div>
            
            <div class="output">80.0</div>
            <div class="output">80.0</div>
        </div>

        <h2>Lambda with Built-in Functions</h2>
        <p>Lambda functions shine when used with built-in higher-order functions like map(), filter(), and sorted().</p>

        <h3>Using Lambda with map()</h3>
        <div class="code-block">
            <span class="comment"># map() applies a function to every item in an iterable</span>
            
            <div class="command">numbers = [1, 2, 3, 4, 5]</div>
            
            <span class="comment"># Square all numbers</span>
            <div class="command">squared = list(map(lambda x: x ** 2, numbers))</div>
            <div class="command">print(f"Original: {numbers}")</div>
            <div class="command">print(f"Squared: {squared}")</div>
            
            <span class="comment"># Convert temperatures from Celsius to Fahrenheit</span>
            <div class="command">celsius = [0, 20, 25, 30, 100]</div>
            <div class="command">fahrenheit = list(map(lambda c: (c * 9/5) + 32, celsius))</div>
            <div class="command">print(f"Celsius: {celsius}")</div>
            <div class="command">print(f"Fahrenheit: {fahrenheit}")</div>
            
            <span class="comment"># Working with strings</span>
            <div class="command">words = ["hello", "world", "python", "lambda"]</div>
            <div class="command">capitalized = list(map(lambda word: word.capitalize(), words))</div>
            <div class="command">lengths = list(map(lambda word: len(word), words))</div>
            
            <div class="command">print(f"Original words: {words}")</div>
            <div class="command">print(f"Capitalized: {capitalized}")</div>
            <div class="command">print(f"Lengths: {lengths}")</div>
            
            <span class="comment"># Multiple iterables with map</span>
            <div class="command">list1 = [1, 2, 3, 4]</div>
            <div class="command">list2 = [10, 20, 30, 40]</div>
            <div class="command">sums = list(map(lambda x, y: x + y, list1, list2))</div>
            <div class="command">products = list(map(lambda x, y: x * y, list1, list2))</div>
            
            <div class="command">print(f"List 1: {list1}")</div>
            <div class="command">print(f"List 2: {list2}")</div>
            <div class="command">print(f"Sums: {sums}")</div>
            <div class="command">print(f"Products: {products}")</div>
            
            <div class="output">Original: [1, 2, 3, 4, 5]</div>
            <div class="output">Squared: [1, 4, 9, 16, 25]</div>
            <div class="output">Celsius: [0, 20, 25, 30, 100]</div>
            <div class="output">Fahrenheit: [32.0, 68.0, 77.0, 86.0, 212.0]</div>
            <div class="output">Original words: ['hello', 'world', 'python', 'lambda']</div>
            <div class="output">Capitalized: ['Hello', 'World', 'Python', 'Lambda']</div>
            <div class="output">Lengths: [5, 5, 6, 6]</div>
            <div class="output">List 1: [1, 2, 3, 4]</div>
            <div class="output">List 2: [10, 20, 30, 40]</div>
            <div class="output">Sums: [11, 22, 33, 44]</div>
            <div class="output">Products: [10, 40, 90, 160]</div>
        </div>

        <h3>Using Lambda with filter()</h3>
        <div class="code-block">
            <span class="comment"># filter() filters items based on a condition</span>
            
            <div class="command">numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</div>
            
            <span class="comment"># Filter even numbers</span>
            <div class="command">even_numbers = list(filter(lambda x: x % 2 == 0, numbers))</div>
            <div class="command">print(f"All numbers: {numbers}")</div>
            <div class="command">print(f"Even numbers: {even_numbers}")</div>
            
            <span class="comment"># Filter numbers greater than 5</span>
            <div class="command">greater_than_5 = list(filter(lambda x: x > 5, numbers))</div>
            <div class="command">print(f"Greater than 5: {greater_than_5}")</div>
            
            <span class="comment"># Filter strings by length</span>
            <div class="command">words = ["hi", "hello", "python", "a", "programming", "lambda"]</div>
            <div class="command">long_words = list(filter(lambda word: len(word) > 4, words))</div>
            <div class="command">short_words = list(filter(lambda word: len(word) <= 2, words))</div>
            
            <div class="command">print(f"All words: {words}")</div>
            <div class="command">print(f"Long words (>4 chars): {long_words}")</div>
            <div class="command">print(f"Short words (≤2 chars): {short_words}")</div>
            
            <span class="comment"># Filter dictionaries</span>
            <div class="command">students = [</div>
            <div class="command">    {"name": "Alice", "grade": 85, "age": 20},</div>
            <div class="command">    {"name": "Bob", "grade": 92, "age": 19},</div>
            <div class="command">    {"name": "Charlie", "grade": 78, "age": 21},</div>
            <div class="command">    {"name": "Diana", "grade": 95, "age": 20}</div>
            <div class="command">]</div>
            
            <div class="command">high_performers = list(filter(lambda student: student["grade"] > 90, students))</div>
            <div class="command">adults = list(filter(lambda student: student["age"] >= 20, students))</div>
            
            <div class="command">print("High performers (grade > 90):")</div>
            <div class="command">for student in high_performers:</div>
            <div class="command">    print(f"  {student['name']}: {student['grade']}")</div>
            
            <div class="output">All numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</div>
            <div class="output">Even numbers: [2, 4, 6, 8, 10]</div>
            <div class="output">Greater than 5: [6, 7, 8, 9, 10]</div>
            <div class="output">All words: ['hi', 'hello', 'python', 'a', 'programming', 'lambda']</div>
            <div class="output">Long words (>4 chars): ['hello', 'python', 'programming', 'lambda']</div>
            <div class="output">Short words (≤2 chars): ['hi', 'a']</div>
            <div class="output">High performers (grade > 90):</div>
            <div class="output">  Bob: 92</div>
            <div class="output">  Diana: 95</div>
        </div>

        <h3>Using Lambda with sorted()</h3>
        <div class="code-block">
            <span class="comment"># sorted() with custom sorting logic</span>
            
            <span class="comment"># Sort by absolute value</span>
            <div class="command">numbers = [-5, -2, 1, 3, -8, 4]</div>
            <div class="command">sorted_by_abs = sorted(numbers, key=lambda x: abs(x))</div>
            <div class="command">print(f"Original: {numbers}")</div>
            <div class="command">print(f"Sorted by absolute value: {sorted_by_abs}")</div>
            
            <span class="comment"># Sort strings by length</span>
            <div class="command">words = ["python", "hi", "programming", "code", "a"]</div>
            <div class="command">sorted_by_length = sorted(words, key=lambda word: len(word))</div>
            <div class="command">sorted_by_length_desc = sorted(words, key=lambda word: len(word), reverse=True)</div>
            
            <div class="command">print(f"Original: {words}")</div>
            <div class="command">print(f"Sorted by length: {sorted_by_length}")</div>
            <div class="command">print(f"Sorted by length (desc): {sorted_by_length_desc}")</div>
            
            <span class="comment"># Sort tuples by second element</span>
            <div class="command">coordinates = [(1, 5), (3, 2), (2, 8), (4, 1)]</div>
            <div class="command">sorted_by_y = sorted(coordinates, key=lambda point: point[1])</div>
            <div class="command">print(f"Original coordinates: {coordinates}")</div>
            <div class="command">print(f"Sorted by Y coordinate: {sorted_by_y}")</div>
            
            <span class="comment"># Sort dictionaries</span>
            <div class="command">products = [</div>
            <div class="command">    {"name": "Laptop", "price": 999, "rating": 4.5},</div>
            <div class="command">    {"name": "Phone", "price": 699, "rating": 4.8},</div>
            <div class="command">    {"name": "Tablet", "price": 399, "rating": 4.2},</div>
            <div class="command">    {"name": "Watch", "price": 299, "rating": 4.0}</div>
            <div class="command">]</div>
            
            <div class="command">sorted_by_price = sorted(products, key=lambda p: p["price"])</div>
            <div class="command">sorted_by_rating = sorted(products, key=lambda p: p["rating"], reverse=True)</div>
            
            <div class="command">print("\nSorted by price (ascending):")</div>
            <div class="command">for product in sorted_by_price:</div>
            <div class="command">    print(f"  {product['name']}: {product['price']}")</div>
            
            <div class="command">print("\nSorted by rating (descending):")</div>
            <div class="command">for product in sorted_by_rating:</div>
            <div class="command">    print(f"  {product['name']}: {product['rating']} stars")</div>
            
            <div class="output">Original: [-5, -2, 1, 3, -8, 4]</div>
            <div class="output">Sorted by absolute value: [1, -2, 3, 4, -5, -8]</div>
            <div class="output">Original: ['python', 'hi', 'programming', 'code', 'a']</div>
            <div class="output">Sorted by length: ['a', 'hi', 'code', 'python', 'programming']</div>
            <div class="output">Sorted by length (desc): ['programming', 'python', 'code', 'hi', 'a']</div>
            <div class="output">Original coordinates: [(1, 5), (3, 2), (2, 8), (4, 1)]</div>
            <div class="output">Sorted by Y coordinate: [(4, 1), (3, 2), (1, 5), (2, 8)]</div>
        </div>

        <h2>Lambda with reduce()</h2>
        <div class="code-block">
            <span class="comment"># reduce() applies a function cumulatively to items</span>
            <div class="command">from functools import reduce</div>
            
            <span class="comment"># Sum all numbers</span>
            <div class="command">numbers = [1, 2, 3, 4, 5]</div>
            <div class="command">total = reduce(lambda x, y: x + y, numbers)</div>
            <div class="command">print(f"Numbers: {numbers}")</div>
            <div class="command">print(f"Sum: {total}")</div>
            
            <span class="comment"># Find maximum value</span>
            <div class="command">maximum = reduce(lambda x, y: x if x > y else y, numbers)</div>
            <div class="command">print(f"Maximum: {maximum}")</div>
            
            <span class="comment"># Product of all numbers</span>
            <div class="command">product = reduce(lambda x, y: x * y, numbers)</div>
            <div class="command">print(f"Product: {product}")</div>
            
            <span class="comment"># Concatenate strings</span>
            <div class="command">words = ["Hello", " ", "World", "!"]</div>
            <div class="command">sentence = reduce(lambda x, y: x + y, words)</div>
            <div class="command">print(f"Words: {words}")</div>
            <div class="command">print(f"Sentence: '{sentence}'")</div>
            
            <span class="comment"># Find longest string</span>
            <div class="command">words_list = ["cat", "elephant", "dog", "hippopotamus"]</div>
            <div class="command">longest = reduce(lambda x, y: x if len(x) > len(y) else y, words_list)</div>
            <div class="command">print(f"Words: {words_list}")</div>
            <div class="command">print(f"Longest word: '{longest}'")</div>
            
            <div class="output">Numbers: [1, 2, 3, 4, 5]</div>
            <div class="output">Sum: 15</div>
            <div class="output">Maximum: 5</div>
            <div class="output">Product: 120</div>
            <div class="output">Words: ['Hello', ' ', 'World', '!']</div>
            <div class="output">Sentence: 'Hello World!'</div>
            <div class="output">Words: ['cat', 'elephant', 'dog', 'hippopotamus']</div>
            <div class="output">Longest word: 'hippopotamus'</div>
        </div>

        <h2>Advanced Lambda Patterns</h2>
        <div class="code-block">
            <span class="comment"># Lambda with list comprehensions</span>
            <div class="command">numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</div>
            
            <span class="comment"># Create functions on the fly</span>
            <div class="command">operations = [</div>
            <div class="command">    lambda x: x ** 2,</div>
            <div class="command">    lambda x: x ** 3,</div>
            <div class="command">    lambda x: x * 2,</div>
            <div class="command">    lambda x: x / 2</div>
            <div class="command">]</div>
            
            <div class="command">for i, op in enumerate(operations):</div>
            <div class="command">    result = list(map(op, [1, 2, 3, 4, 5]))</div>
            <div class="command">    print(f"Operation {i+1}: {result}")</div>
            
            <span class="comment"># Lambda factories (functions that return lambdas)</span>
            <div class="command">def make_multiplier(n):</div>
            <div class="command">    return lambda x: x * n</div>
            
            <div class="command">double = make_multiplier(2)</div>
            <div class="command">triple = make_multiplier(3)</div>
            <div class="command">quadruple = make_multiplier(4)</div>
            
            <div class="command">print(f"Double 5: {double(5)}")</div>
            <div class="command">print(f"Triple 5: {triple(5)}")</div>
            <div class="command">print(f"Quadruple 5: {quadruple(5)}")</div>
            
            <span class="comment"># Lambda with nested conditions</span>
            <div class="command">grade_to_letter = lambda score: ('A' if score >= 90 else</div>
            <div class="command">                                'B' if score >= 80 else</div>
            <div class="command">                                'C' if score >= 70 else</div>
            <div class="command">                                'D' if score >= 60 else 'F')</div>
            
            <div class="command">scores = [95, 87, 72, 68, 45]</div>
            <div class="command">letter_grades = list(map(grade_to_letter, scores))</div>
            
            <div class="command">for score, letter in zip(scores, letter_grades):</div>
            <div class="command">    print(f"Score {score}: Grade {letter}")</div>
            
            <div class="output">Operation 1: [1, 4, 9, 16, 25]</div>
            <div class="output">Operation 2: [1, 8, 27, 64, 125]</div>
            <div class="output">Operation 3: [2, 4, 6, 8, 10]</div>
            <div class="output">Operation 4: [0.5, 1.0, 1.5, 2.0, 2.5]</div>
            <div class="output">Double 5: 10</div>
            <div class="output">Triple 5: 15</div>
            <div class="output">Quadruple 5: 20</div>
            <div class="output">Score 95: Grade A</div>
            <div class="output">Score 87: Grade B</div>
            <div class="output">Score 72: Grade C</div>
            <div class="output">Score 68: Grade D</div>
            <div class="output">Score 45: Grade F</div>
        </div>

        <h2>Real-World Lambda Examples</h2>
        <div class="code-block">
            <span class="comment"># Data processing pipeline</span>
            <div class="command">sales_data = [</div>
            <div class="command">    {"product": "Laptop", "price": 999, "quantity": 5, "discount": 0.1},</div>
            <div class="command">    {"product": "Phone", "price": 699, "quantity": 10, "discount": 0.05},</div>
            <div class="command">    {"product": "Tablet", "price": 399, "quantity": 8, "discount": 0.15},</div>
            <div class="command">    {"product": "Watch", "price": 299, "quantity": 12, "discount": 0.08}</div>
            <div class="command">]</div>
            
            <span class="comment"># Calculate revenue for each product</span>
            <div class="command">calculate_revenue = lambda item: item["price"] * item["quantity"] * (1 - item["discount"])</div>
            <div class="command">revenues = list(map(calculate_revenue, sales_data))</div>
            
            <div class="command">print("Product revenues:")</div>
            <div class="command">for item, revenue in zip(sales_data, revenues):</div>
            <div class="command">    print(f"  {item['product']}: {revenue:.2f}")</div>

            <span class="comment"># Filter high-revenue products (&gt;$2000)</span>
            <div class="command">high_revenue_products = list(filter(lambda item: calculate_revenue(item) > 2000, sales_data))</div>

            <div class="command">print("\nHigh revenue products (&gt;$2000):")</div>
            <div class="command">for product in high_revenue_products:</div>
            <div class="command">    revenue = calculate_revenue(product)</div>
            <div class="command">    print(f"  {product['product']}: {revenue:.2f}")</div>

            <span class="comment"># Sort by revenue (highest first)</span>
            <div class="command">sorted_by_revenue = sorted(sales_data, key=calculate_revenue, reverse=True)</div>

            <div class="command">print("\nProducts sorted by revenue (highest first):")</div>
            <div class="command">for product in sorted_by_revenue:</div>
            <div class="command">    revenue = calculate_revenue(product)</div>
            <div class="command">    print(f"  {product['product']}: {revenue:.2f}")</div>

            <span class="comment"># Total revenue</span>
            <div class="command">total_revenue = reduce(lambda x, y: x + calculate_revenue(y), sales_data, 0)</div>
            <div class="command">print(f"\nTotal revenue: {total_revenue:.2f}")</div>

        </div>

        <div class="exercise">
            <h4>🎯 Exercise: Advanced Lambda Operations</h4>
            <div class="exercise-step">
                <strong>Step 1:</strong> Create a list of dictionaries representing employees with name, department, salary, and years_experience
            </div>
            <div class="exercise-step">
                <strong>Step 2:</strong> Use lambda with filter() to find employees earning more than $70,000
            </div>
            <div class="exercise-step">
                <strong>Step 3:</strong> Use lambda with map() to calculate annual bonus (10% of salary for employees with >3 years experience, 5% otherwise)
            </div>
            <div class="exercise-step">
                <strong>Step 4:</strong> Use lambda with sorted() to sort employees by total compensation (salary + bonus)
            </div>
            <div class="exercise-step">
                <strong>Step 5:</strong> Use lambda with reduce() to find the employee with the highest total compensation
            </div>
        </div>

        <div class="scenario-box">
            <h4>When to Use Lambda Functions</h4>
            <ul>
                <li><strong>Short, simple operations:</strong> Mathematical calculations, basic transformations</li>
                <li><strong>Higher-order functions:</strong> With map(), filter(), sorted(), reduce()</li>
                <li><strong>Event handling:</strong> Simple callback functions</li>
                <li><strong>Functional programming:</strong> When working in a functional style</li>
                <li><strong>One-time use:</strong> Functions you don't need to reuse elsewhere</li>
            </ul>
        </div>

        <div class="scenario-box">
            <h4>When NOT to Use Lambda Functions</h4>
            <ul>
                <li><strong>Complex logic:</strong> Multi-line operations, multiple conditions</li>
                <li><strong>Reusable functions:</strong> Functions used in multiple places</li>
                <li><strong>Need documentation:</strong> Functions that require docstrings</li>
                <li><strong>Debugging required:</strong> Complex functions that need step-by-step debugging</li>
                <li><strong>Error handling:</strong> Functions that need try-except blocks</li>
            </ul>
        </div>

        <div class="tip">
            <strong>💡 Lambda Best Practices:</strong>
            <ul>
                <li>Keep lambda functions simple and readable</li>
                <li>Use meaningful variable names even in lambdas</li>
                <li>Don't nest lambdas too deeply</li>
                <li>Consider list comprehensions as an alternative for simple transformations</li>
                <li>Use regular functions for anything complex</li>
                <li>Comment complex lambda expressions</li>
            </ul>
        </div>

        <div class="warning">
            <strong>⚠️ Common Lambda Pitfalls:</strong>
            <ul>
                <li><strong>Overusing lambdas:</strong> Not everything needs to be a lambda</li>
                <li><strong>Unreadable code:</strong> Complex lambdas that are hard to understand</li>
                <li><strong>Late binding:</strong> Variables in lambdas capture by reference, not value</li>
                <li><strong>No statements:</strong> Lambda can only contain expressions, not statements</li>
                <li><strong>Limited debugging:</strong> Hard to set breakpoints in lambda functions</li>
            </ul>
        </div>
    `
};