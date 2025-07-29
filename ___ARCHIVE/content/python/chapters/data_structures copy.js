// chapters/data_structures.js
console.log('Loading data_structures chapter...');

window.PYTHON_CONTENT.chapters.data_structures = {
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
};