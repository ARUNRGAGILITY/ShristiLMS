// chapters/data_structures.js
console.log('Loading enhanced data_structures chapter...');

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
            
            <span class="comment"># Advanced slicing</span>
            <div class="command">numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]</div>
            <div class="command">print(numbers[::2])     # Every second element</div>
            <div class="command">print(numbers[1::2])    # Every second from index 1</div>
            <div class="command">print(numbers[::-1])    # Reverse</div>
            
            <span class="comment"># Modifying lists</span>
            <div class="command">fruits[1] = "grape"     # Change element</div>
            <div class="command">fruits.append("kiwi")   # Add to end</div>
            <div class="command">fruits.insert(1, "mango")  # Insert at index</div>
            <div class="command">fruits.remove("orange") # Remove by value</div>
            <div class="command">popped = fruits.pop()   # Remove and return last</div>
            
            <span class="comment"># List operations</span>
            <div class="command">list1 = [1, 2, 3]</div>
            <div class="command">list2 = [4, 5, 6]</div>
            <div class="command">combined = list1 + list2   # Concatenation</div>
            <div class="command">repeated = list1 * 3       # Repetition</div>
            
            <span class="comment"># List methods</span>
            <div class="command">print(len(fruits))      # Length</div>
            <div class="command">print("apple" in fruits)  # Check membership</div>
            <div class="command">fruits.sort()          # Sort in place</div>
            <div class="command">fruits.reverse()       # Reverse in place</div>
            
            <span class="comment"># Custom sorting</span>
            <div class="command">students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]</div>
            <div class="command">students.sort(key=lambda x: x[1])  # Sort by grade</div>
            
            <div class="output">apple</div>
            <div class="output">orange</div>
            <div class="output">['banana', 'orange']</div>
            <div class="output">[0, 2, 4, 6, 8]</div>
            <div class="output">[1, 3, 5, 7, 9]</div>
            <div class="output">[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]</div>
            <div class="output">[1, 2, 3, 4, 5, 6]</div>
            <div class="output">[1, 2, 3, 1, 2, 3, 1, 2, 3]</div>
        </div>

        <h2>Tuples</h2>
        <p>Tuples are ordered, immutable collections. They're perfect for storing related data that shouldn't change.</p>

        <div class="mermaid-container">
            <div class="mermaid">
            graph LR
                A[Tuple Features] --> B[Ordered]
                A --> C[Immutable]
                A --> D[Allow Duplicates]
                A --> E[Mixed Types]
                A --> F[Hashable]
                
                B --> G[Index: 0,1,2,3...]
                C --> H[Cannot Change Items]
                D --> I[Same Value OK]
                E --> J[Numbers, Strings, etc.]
                F --> K[Can be Dict Keys]
                
                style A fill:#673ab7
                style B fill:#ff9800
                style C fill:#f44336
                style D fill:#9c27b0
                style E fill:#4caf50
                style F fill:#2196f3
            </div>
        </div>

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
            
            <span class="comment"># Advanced tuple usage</span>
            <div class="command">from collections import namedtuple</div>
            <div class="command">Point = namedtuple('Point', ['x', 'y'])</div>
            <div class="command">p1 = Point(10, 20)</div>
            <div class="command">print(p1.x, p1.y)  # More readable access</div>
            
            <span class="comment"># Tuple methods</span>
            <div class="command">numbers = (1, 2, 3, 2, 4, 2)</div>
            <div class="command">print(numbers.count(2))   # Count occurrences</div>
            <div class="command">print(numbers.index(3))   # Find index</div>
            
            <span class="comment"># Tuple as function arguments</span>
            <div class="command">def calculate_distance(point1, point2):</div>
            <div class="command">    return ((point1[0] - point2[0])**2 + (point1[1] - point2[1])**2)**0.5</div>
            <div class="command">distance = calculate_distance((0, 0), (3, 4))</div>
            
            <div class="output">10</div>
            <div class="output">30</div>
            <div class="output">Name: John Doe, Age: 30</div>
            <div class="output">10 20</div>
            <div class="output">3</div>
            <div class="output">2</div>
            <div class="output">Distance: 5.0</div>
        </div>

        <h2>Dictionaries</h2>
        <p>Dictionaries store key-value pairs, allowing you to access data using meaningful keys instead of numeric indices.</p>

        <div class="mermaid-container">
            <div class="mermaid">
                graph TD
                A[Dictionary Features] --> B[Key-Value Pairs]
                A --> C[Mutable]
                A --> D[No Duplicates]
                A --> E[Fast Lookup]
                
                B --> F[Keys Must Be Immutable]
                C --> G[Can Add Remove Update]
                D --> H[Unique Keys Only]
                E --> I[O1 Average Access]
                
                style A fill:#ff5722
                style B fill:#4caf50
                style C fill:#2196f3
                style D fill:#9c27b0
                style E fill:#ff9800
                </div>
        </div>

        <div class="code-block">
            <span class="comment"># Creating dictionaries</span>
            <div class="command">student = {</div>
            <div class="command">    "name": "Alice",</div>
            <div class="command">    "age": 20,</div>
            <div class="command">    "grades": [85, 92, 78]</div>
            <div class="command">}</div>
            
            <span class="comment"># Alternative creation methods</span>
            <div class="command">student2 = dict(name="Bob", age=21, major="CS")</div>
            <div class="command">student3 = dict([("name", "Charlie"), ("age", 19)])</div>
            
            <span class="comment"># Accessing values</span>
            <div class="command">print(student["name"])</div>
            <div class="command">print(student.get("age", "Unknown"))</div>
            <div class="command">print(student.get("height", "Not specified"))</div>
            
            <span class="comment"># Modifying dictionaries</span>
            <div class="command">student["age"] = 21          # Update value</div>
            <div class="command">student["major"] = "Computer Science"  # Add new key</div>
            <div class="command">del student["grades"]       # Remove key</div>
            <div class="command">removed_value = student.pop("age", None)  # Remove with default</div>
            
            <span class="comment"># Dictionary methods</span>
            <div class="command">print(student.keys())       # All keys</div>
            <div class="command">print(student.values())     # All values</div>
            <div class="command">print(student.items())      # Key-value pairs</div>
            
            <span class="comment"># Advanced dictionary operations</span>
            <div class="command">defaults = {"country": "USA", "language": "English"}</div>
            <div class="command">student.update(defaults)    # Merge dictionaries</div>
            <div class="command">student.setdefault("gpa", 3.5)  # Set if key doesn't exist</div>
            
            <span class="comment"># Dictionary from lists</span>
            <div class="command">keys = ["a", "b", "c"]</div>
            <div class="command">values = [1, 2, 3]</div>
            <div class="command">combined_dict = dict(zip(keys, values))</div>
            
            <span class="comment"># Iterating through dictionaries</span>
            <div class="command">for key, value in student.items():</div>
            <div class="command">    print(f"{key}: {value}")</div>
            
            <div class="output">Alice</div>
            <div class="output">20</div>
            <div class="output">Not specified</div>
            <div class="output">dict_keys(['name', 'major', 'country', 'language', 'gpa'])</div>
            <div class="output">dict_values(['Alice', 'Computer Science', 'USA', 'English', 3.5])</div>
            <div class="output">{'a': 1, 'b': 2, 'c': 3}</div>
        </div>

        <h2>Sets</h2>
        <p>Sets are unordered collections of unique elements. They're perfect for removing duplicates and mathematical operations.</p>

        <div class="mermaid-container">
            <div class="mermaid-container">
                <div class="mermaid">
                graph TD
                    A[Set Features] --> B[Unique Elements]
                    A --> C[Mutable]
                    A --> D[Unordered]
                    A --> E[Mathematical Ops]
                    
                    B --> F[No Duplicates]
                    C --> G[Can Add Items]
                    D --> H[No Index Access]
                    E --> I[Union and Intersection]
                    
                    style A fill:#795548
                    style B fill:#f44336
                    style C fill:#2196f3
                    style D fill:#ff9800
                    style E fill:#4caf50
                </div>
            </div>

        </div>

        <div class="code-block">
            <span class="comment"># Creating sets</span>
            <div class="command">fruits = {"apple", "banana", "orange"}</div>
            <div class="command">numbers = {1, 2, 3, 4, 5}</div>
            <div class="command">empty_set = set()  # Note: {} creates an empty dict</div>
            <div class="command">set_from_list = set([1, 2, 2, 3, 3, 4])  # Removes duplicates</div>
            
            <span class="comment"># Set operations</span>
            <div class="command">fruits.add("grape")        # Add element</div>
            <div class="command">fruits.remove("banana")    # Remove element (raises error if not found)</div>
            <div class="command">fruits.discard("kiwi")     # Remove if exists (no error)</div>
            <div class="command">random_fruit = fruits.pop()  # Remove and return random element</div>
            
            <span class="comment"># Set mathematics</span>
            <div class="command">set1 = {1, 2, 3, 4}</div>
            <div class="command">set2 = {3, 4, 5, 6}</div>
            <div class="command">set3 = {1, 2}</div>
            
            <div class="command">print(set1 | set2)         # Union</div>
            <div class="command">print(set1 & set2)         # Intersection</div>
            <div class="command">print(set1 - set2)         # Difference</div>
            <div class="command">print(set1 ^ set2)         # Symmetric difference</div>
            
            <span class="comment"># Set comparisons</span>
            <div class="command">print(set3.issubset(set1))     # Is subset</div>
            <div class="command">print(set1.issuperset(set3))   # Is superset</div>
            <div class="command">print(set1.isdisjoint(set2))   # No common elements</div>
            
            <span class="comment"># Advanced set operations</span>
            <div class="command">set1.update([7, 8, 9])     # Add multiple elements</div>
            <div class="command">set1.intersection_update(set2)  # Keep only common elements</div>
            
            <span class="comment"># Remove duplicates from list</span>
            <div class="command">numbers_with_duplicates = [1, 2, 2, 3, 3, 3, 4]</div>
            <div class="command">unique_numbers = list(set(numbers_with_duplicates))</div>
            <div class="command">print(unique_numbers)</div>
            
            <div class="output">{1, 2, 3, 4}</div>
            <div class="output">{1, 2, 3, 4, 5, 6}</div>
            <div class="output">{3, 4}</div>
            <div class="output">{1, 2}</div>
            <div class="output">{1, 2, 5, 6}</div>
            <div class="output">True</div>
            <div class="output">True</div>
            <div class="output">False</div>
            <div class="output">[1, 2, 3, 4]</div>
        </div>

        <h2>Comprehensions</h2>
        <p>Comprehensions provide a concise way to create data structures based on existing iterables.</p>

        <div class="code-block">
            <span class="comment"># List comprehensions</span>
            <div class="command">squares = [x**2 for x in range(10)]</div>
            <div class="command">print(squares)</div>
            
            <span class="comment"># List comprehension with condition</span>
            <div class="command">even_squares = [x**2 for x in range(10) if x % 2 == 0]</div>
            <div class="command">print(even_squares)</div>
            
            <span class="comment"># List comprehension with if-else</span>
            <div class="command">numbers = [1, 2, 3, 4, 5]</div>
            <div class="command">labels = ["even" if x % 2 == 0 else "odd" for x in numbers]</div>
            <div class="command">print(labels)</div>
            
            <span class="comment"># Processing strings</span>
            <div class="command">words = ["hello", "world", "python", "programming"]</div>
            <div class="command">lengths = [len(word) for word in words]</div>
            <div class="command">upper_words = [word.upper() for word in words]</div>
            <div class="command">long_words = [word for word in words if len(word) > 5]</div>
            
            <span class="comment"># Nested list comprehension</span>
            <div class="command">matrix = [[i*j for j in range(3)] for i in range(3)]</div>
            <div class="command">print(matrix)</div>
            
            <span class="comment"># Flattening nested lists</span>
            <div class="command">nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]</div>
            <div class="command">flattened = [item for sublist in nested for item in sublist]</div>
            <div class="command">print(flattened)</div>
            
            <span class="comment"># Dictionary comprehension</span>
            <div class="command">word_lengths = {word: len(word) for word in words}</div>
            <div class="command">print(word_lengths)</div>
            
            <span class="comment"># Dictionary comprehension with condition</span>
            <div class="command">long_word_lengths = {word: len(word) for word in words if len(word) > 5}</div>
            <div class="command">print(long_word_lengths)</div>
            
            <span class="comment"># Dictionary from two lists</span>
            <div class="command">names = ["Alice", "Bob", "Charlie"]</div>
            <div class="command">ages = [25, 30, 35]</div>
            <div class="command">name_age_dict = {name: age for name, age in zip(names, ages)}</div>
            
            <span class="comment"># Set comprehension</span>
            <div class="command">unique_lengths = {len(word) for word in words}</div>
            <div class="command">print(unique_lengths)</div>
            
            <span class="comment"># Set comprehension with condition</span>
            <div class="command">vowels_in_words = {char for word in words for char in word if char in 'aeiou'}</div>
            <div class="command">print(vowels_in_words)</div>
            
            <span class="comment"># Generator expression (memory efficient)</span>
            <div class="command">squares_gen = (x**2 for x in range(1000000))  # Creates generator, not list</div>
            <div class="command">first_five_squares = [next(squares_gen) for _ in range(5)]</div>
            <div class="command">print(first_five_squares)</div>
            
            <span class="comment"># Complex comprehension example</span>
            <div class="command">students = [</div>
            <div class="command">    {"name": "Alice", "grades": [85, 92, 78]},</div>
            <div class="command">    {"name": "Bob", "grades": [90, 88, 95]},</div>
            <div class="command">    {"name": "Charlie", "grades": [75, 80, 85]}</div>
            <div class="command">]</div>
            <div class="command">averages = {student["name"]: sum(student["grades"]) / len(student["grades"]) for student in students}</div>
            <div class="command">high_performers = [name for name, avg in averages.items() if avg > 85]</div>
            
            <div class="output">[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]</div>
            <div class="output">[0, 4, 16, 36, 64]</div>
            <div class="output">['odd', 'even', 'odd', 'even', 'odd']</div>
            <div class="output">['python', 'programming']</div>
            <div class="output">[[0, 0, 0], [0, 1, 2], [0, 2, 4]]</div>
            <div class="output">[1, 2, 3, 4, 5, 6, 7, 8, 9]</div>
            <div class="output">{'hello': 5, 'world': 5, 'python': 6, 'programming': 11}</div>
            <div class="output">{'python': 6, 'programming': 11}</div>
            <div class="output">{5, 6, 11}</div>
            <div class="output">{'e', 'o', 'a', 'i'}</div>
            <div class="output">[0, 1, 4, 9, 16]</div>
        </div>

        <h2>Advanced Collections</h2>
        <p>Python's collections module provides specialized data structures for specific use cases.</p>

        <div class="code-block">
            <span class="comment"># Counter - count occurrences</span>
            <div class="command">from collections import Counter</div>
            <div class="command">text = "hello world"</div>
            <div class="command">letter_count = Counter(text)</div>
            <div class="command">print(letter_count)</div>
            <div class="command">print(letter_count.most_common(3))  # Top 3 most common</div>
            
            <span class="comment"># defaultdict - default values for missing keys</span>
            <div class="command">from collections import defaultdict</div>
            <div class="command">dd = defaultdict(list)  # Default value is empty list</div>
            <div class="command">dd['fruits'].append('apple')  # No KeyError</div>
            <div class="command">dd['fruits'].append('banana')</div>
            <div class="command">print(dict(dd))</div>
            
            <span class="comment"># OrderedDict - maintains insertion order (Python 3.7+ dicts do this by default)</span>
            <div class="command">from collections import OrderedDict</div>
            <div class="command">od = OrderedDict([('a', 1), ('b', 2), ('c', 3)])</div>
            <div class="command">od.move_to_end('a')  # Move 'a' to end</div>
            <div class="command">print(od)</div>
            
            <span class="comment"># deque - double-ended queue</span>
            <div class="command">from collections import deque</div>
            <div class="command">dq = deque([1, 2, 3, 4, 5])</div>
            <div class="command">dq.appendleft(0)   # Add to left</div>
            <div class="command">dq.append(6)       # Add to right</div>
            <div class="command">print(dq)</div>
            <div class="command">print(dq.popleft())  # Remove from left</div>
            <div class="command">print(dq.pop())      # Remove from right</div>
            
            <div class="output">Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})</div>
            <div class="output">[('l', 3), ('o', 2), ('h', 1)]</div>
            <div class="output">{'fruits': ['apple', 'banana']}</div>
            <div class="output">OrderedDict([('b', 2), ('c', 3), ('a', 1)])</div>
            <div class="output">deque([0, 1, 2, 3, 4, 5, 6])</div>
            <div class="output">0</div>
            <div class="output">6</div>
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
                <strong>Step 5:</strong> Use dictionary comprehension to create a grade distribution counter
            </div>
            <div class="exercise-step">
                <strong>Step 6:</strong> Display the results in a formatted table
            </div>
        </div>

        <div class="exercise">
            <h4>🎯 Exercise 5: Data Analysis with Comprehensions</h4>
            <div class="exercise-step">
                <strong>Step 1:</strong> Create a list of sales data (dictionaries with date, product, amount)
            </div>
            <div class="exercise-step">
                <strong>Step 2:</strong> Use list comprehension to filter sales above $1000
            </div>
            <div class="exercise-step">
                <strong>Step 3:</strong> Use dictionary comprehension to group sales by product
            </div>
            <div class="exercise-step">
                <strong>Step 4:</strong> Use set comprehension to find unique products sold
            </div>
            <div class="exercise-step">
                <strong>Step 5:</strong> Create a nested comprehension to calculate monthly totals
            </div>
        </div>

        <div class="scenario-box">
            <h4>Choosing the Right Data Structure</h4>
            <ul>
                <li><strong>List:</strong> When you need ordered, changeable data with possible duplicates</li>
                <li><strong>Tuple:</strong> When you need ordered, unchangeable data (coordinates, database records)</li>
                <li><strong>Dictionary:</strong> When you need key-value pairs for fast lookups</li>
                <li><strong>Set:</strong> When you need unique elements or mathematical set operations</li>
                <li><strong>Counter:</strong> When you need to count occurrences of elements</li>
                <li><strong>defaultdict:</strong> When you need dictionaries with default values</li>
                <li><strong>deque:</strong> When you need efficient operations at both ends</li>
            </ul>
        </div>

        <div class="scenario-box">
            <h4>When to Use Comprehensions</h4>
            <ul>
                <li><strong>List Comprehension:</strong> Creating new lists from existing iterables</li>
                <li><strong>Dict Comprehension:</strong> Creating dictionaries with transformed keys/values</li>
                <li><strong>Set Comprehension:</strong> Creating sets with unique elements</li>
                <li><strong>Generator Expression:</strong> Memory-efficient iteration over large datasets</li>
                <li><strong>Nested Comprehensions:</strong> Working with nested data structures</li>
            </ul>
        </div>

        <div class="tip">
            <strong>💡 Performance Tips:</strong>
            <ul>
                <li>Use sets for membership testing - O(1) vs O(n) for lists</li>
                <li>Use dictionaries for key-based lookups - O(1) average case</li>
                <li>List comprehensions are faster than equivalent for loops</li>
                <li>Generator expressions save memory for large datasets</li>
                <li>Use appropriate data structure: Counter for counting, defaultdict for default values</li>
                <li>deque is faster than list for operations at both ends</li>
            </ul>
        </div>

        <div class="warning">
            <strong>⚠️ Common Mistakes:</strong>
            <ul>
                <li><strong>Modifying lists while iterating:</strong> Use list comprehension or iterate over a copy</li>
                <li><strong>Using mutable objects as dictionary keys:</strong> Only use immutable types (strings, numbers, tuples)</li>
                <li><strong>Confusing '{}' with 'set()':</strong> '{}' creates an empty dict, not a set</li>
                <li><strong>Overcomplicating comprehensions:</strong> If it's hard to read, use a regular loop</li>
                <li><strong>Using list when set is appropriate:</strong> Sets are much faster for membership testing</li>
                <li><strong>Not using get() for dictionaries:</strong> Prevents KeyError for missing keys</li>
            </ul>
        </div>

        <div class="theory-box">
            <h4>Time Complexity Comparison</h4>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <tr style="background-color: #f5f5f5;">
                    <th style="border: 1px solid #ddd; padding: 8px;">Operation</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">List</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Tuple</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Dict</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Set</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Access by index/key</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">O(1)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">O(1)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">O(1)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">N/A</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Search (membership)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">O(n)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">O(n)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">O(1)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">O(1)</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Insert/Add</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">O(1) append, O(n) insert</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Immutable</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">O(1)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">O(1)</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Delete</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">O(n)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Immutable</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">O(1)</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">O(1)</td>
                </tr>
            </table>
        </div>
    `
};