// chapters/data_structures.js - Fixed version
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
            <br>
            <span class="comment"># Accessing elements</span>
            <div class="command">print(fruits[0])&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# First element</div>
            <div class="command">print(fruits[-1])&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Last element</div>
            <div class="command">print(fruits[1:3])&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Slicing</div>
            <br>
            <span class="comment"># Advanced slicing</span>
            <div class="command">numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]</div>
            <div class="command">print(numbers[::2])&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Every second element</div>
            <div class="command">print(numbers[1::2])&nbsp;&nbsp;&nbsp;&nbsp;# Every second from index 1</div>
            <div class="command">print(numbers[::-1])&nbsp;&nbsp;&nbsp;&nbsp;# Reverse</div>
            <br>
            <span class="comment"># Modifying lists</span>
            <div class="command">fruits[1] = "grape"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Change element</div>
            <div class="command">fruits.append("kiwi")&nbsp;&nbsp;&nbsp;# Add to end</div>
            <div class="command">fruits.insert(1, "mango")&nbsp;&nbsp;# Insert at index</div>
            <div class="command">fruits.remove("orange")&nbsp;# Remove by value</div>
            <div class="command">popped = fruits.pop()&nbsp;&nbsp;&nbsp;# Remove and return last</div>
            <br>
            <span class="comment"># List operations</span>
            <div class="command">list1 = [1, 2, 3]</div>
            <div class="command">list2 = [4, 5, 6]</div>
            <div class="command">combined = list1 + list2&nbsp;&nbsp;&nbsp;# Concatenation</div>
            <div class="command">repeated = list1 * 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Repetition</div>
            <br>
            <span class="comment"># List methods</span>
            <div class="command">print(len(fruits))&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Length</div>
            <div class="command">print("apple" in fruits)&nbsp;&nbsp;# Check membership</div>
            <div class="command">fruits.sort()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Sort in place</div>
            <div class="command">fruits.reverse()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Reverse in place</div>
            <br>
            <span class="comment"># Custom sorting</span>
            <div class="command">students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]</div>
            <div class="command">students.sort(key=lambda x: x[1])&nbsp;&nbsp;# Sort by grade</div>
            
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
            <div class="command">single_item = ("hello",)&nbsp;&nbsp;# Note the comma</div>
            <div class="command">empty_tuple = ()</div>
            <br>
            <span class="comment"># Accessing elements</span>
            <div class="command">print(coordinates[0])&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# First element</div>
            <div class="command">print(person[-1])&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Last element</div>
            <br>
            <span class="comment"># Tuple unpacking</span>
            <div class="command">x, y = coordinates</div>
            <div class="command">first_name, last_name, age = person</div>
            <div class="command">print(f"Name: {first_name} {last_name}, Age: {age}")</div>
            <br>
            <span class="comment"># Advanced tuple usage</span>
            <div class="command">from collections import namedtuple</div>
            <div class="command">Point = namedtuple('Point', ['x', 'y'])</div>
            <div class="command">p1 = Point(10, 20)</div>
            <div class="command">print(p1.x, p1.y)&nbsp;&nbsp;# More readable access</div>
            <br>
            <span class="comment"># Tuple methods</span>
            <div class="command">numbers = (1, 2, 3, 2, 4, 2)</div>
            <div class="command">print(numbers.count(2))&nbsp;&nbsp;&nbsp;# Count occurrences</div>
            <div class="command">print(numbers.index(3))&nbsp;&nbsp;&nbsp;# Find index</div>
            <br>
            <span class="comment"># Tuple as function arguments</span>
            <div class="command">def calculate_distance(point1, point2):</div>
            <div class="command">&nbsp;&nbsp;&nbsp;&nbsp;return ((point1[0] - point2[0])**2 + (point1[1] - point2[1])**2)**0.5</div>
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
            <div class="command">&nbsp;&nbsp;&nbsp;&nbsp;"name": "Alice",</div>
            <div class="command">&nbsp;&nbsp;&nbsp;&nbsp;"age": 20,</div>
            <div class="command">&nbsp;&nbsp;&nbsp;&nbsp;"grades": [85, 92, 78]</div>
            <div class="command">}</div>
            <br>
            <span class="comment"># Alternative creation methods</span>
            <div class="command">student2 = dict(name="Bob", age=21, major="CS")</div>
            <div class="command">student3 = dict([("name", "Charlie"), ("age", 19)])</div>
            <br>
            <span class="comment"># Accessing values</span>
            <div class="command">print(student["name"])</div>
            <div class="command">print(student.get("age", "Unknown"))</div>
            <div class="command">print(student.get("height", "Not specified"))</div>
            <br>
            <span class="comment"># Modifying dictionaries</span>
            <div class="command">student["age"] = 21&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Update value</div>
            <div class="command">student["major"] = "Computer Science"&nbsp;&nbsp;# Add new key</div>
            <div class="command">del student["grades"]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Remove key</div>
            <div class="command">removed_value = student.pop("age", None)&nbsp;&nbsp;# Remove with default</div>
            <br>
            <span class="comment"># Dictionary methods</span>
            <div class="command">print(student.keys())&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# All keys</div>
            <div class="command">print(student.values())&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# All values</div>
            <div class="command">print(student.items())&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Key-value pairs</div>
            <br>
            <span class="comment"># Advanced dictionary operations</span>
            <div class="command">defaults = {"country": "USA", "language": "English"}</div>
            <div class="command">student.update(defaults)&nbsp;&nbsp;&nbsp;&nbsp;# Merge dictionaries</div>
            <div class="command">student.setdefault("gpa", 3.5)&nbsp;&nbsp;# Set if key doesn't exist</div>
            <br>
            <span class="comment"># Dictionary from lists</span>
            <div class="command">keys = ["a", "b", "c"]</div>
            <div class="command">values = [1, 2, 3]</div>
            <div class="command">combined_dict = dict(zip(keys, values))</div>
            <br>
            <span class="comment"># Iterating through dictionaries</span>
            <div class="command">for key, value in student.items():</div>
            <div class="command">&nbsp;&nbsp;&nbsp;&nbsp;print(f"{key}: {value}")</div>
            
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

        <div class="code-block">
            <span class="comment"># Creating sets</span>
            <div class="command">fruits = {"apple", "banana", "orange"}</div>
            <div class="command">numbers = {1, 2, 3, 4, 5}</div>
            <div class="command">empty_set = set()&nbsp;&nbsp;# Note: {} creates an empty dict</div>
            <div class="command">set_from_list = set([1, 2, 2, 3, 3, 4])&nbsp;&nbsp;# Removes duplicates</div>
            <br>
            <span class="comment"># Set operations</span>
            <div class="command">fruits.add("grape")&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Add element</div>
            <div class="command">fruits.remove("banana")&nbsp;&nbsp;&nbsp;&nbsp;# Remove element (raises error if not found)</div>
            <div class="command">fruits.discard("kiwi")&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Remove if exists (no error)</div>
            <div class="command">random_fruit = fruits.pop()&nbsp;&nbsp;# Remove and return random element</div>
            <br>
            <span class="comment"># Set mathematics</span>
            <div class="command">set1 = {1, 2, 3, 4}</div>
            <div class="command">set2 = {3, 4, 5, 6}</div>
            <div class="command">set3 = {1, 2}</div>
            <br>
            <div class="command">print(set1 | set2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Union</div>
            <div class="command">print(set1 & set2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Intersection</div>
            <div class="command">print(set1 - set2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Difference</div>
            <div class="command">print(set1 ^ set2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Symmetric difference</div>
            <br>
            <span class="comment"># Set comparisons</span>
            <div class="command">print(set3.issubset(set1))&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Is subset</div>
            <div class="command">print(set1.issuperset(set3))&nbsp;&nbsp;&nbsp;# Is superset</div>
            <div class="command">print(set1.isdisjoint(set2))&nbsp;&nbsp;&nbsp;# No common elements</div>
            <br>
            <span class="comment"># Advanced set operations</span>
            <div class="command">set1.update([7, 8, 9])&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Add multiple elements</div>
            <div class="command">set1.intersection_update(set2)&nbsp;&nbsp;# Keep only common elements</div>
            <br>
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
            <br>
            <span class="comment"># List comprehension with condition</span>
            <div class="command">even_squares = [x**2 for x in range(10) if x % 2 == 0]</div>
            <div class="command">print(even_squares)</div>
            <br>
            <span class="comment"># List comprehension with if-else</span>
            <div class="command">numbers = [1, 2, 3, 4, 5]</div>
            <div class="command">labels = ["even" if x % 2 == 0 else "odd" for x in numbers]</div>
            <div class="command">print(labels)</div>
            <br>
            <span class="comment"># Processing strings</span>
            <div class="command">words = ["hello", "world", "python", "programming"]</div>
            <div class="command">lengths = [len(word) for word in words]</div>
            <div class="command">upper_words = [word.upper() for word in words]</div>
            <div class="command">long_words = [word for word in words if len(word) > 5]</div>
            <br>
            <span class="comment"># Nested list comprehension</span>
            <div class="command">matrix = [[i*j for j in range(3)] for i in range(3)]</div>
            <div class="command">print(matrix)</div>
            <br>
            <span class="comment"># Flattening nested lists</span>
            <div class="command">nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]</div>
            <div class="command">flattened = [item for sublist in nested for item in sublist]</div>
            <div class="command">print(flattened)</div>
            <br>
            <span class="comment"># Dictionary comprehension</span>
            <div class="command">word_lengths = {word: len(word) for word in words}</div>
            <div class="command">print(word_lengths)</div>
            <br>
            <span class="comment"># Dictionary comprehension with condition</span>
            <div class="command">long_word_lengths = {word: len(word) for word in words if len(word) > 5}</div>
            <div class="command">print(long_word_lengths)</div>
            <br>
            <span class="comment"># Dictionary from two lists</span>
            <div class="command">names = ["Alice", "Bob", "Charlie"]</div>
            <div class="command">ages = [25, 30, 35]</div>
            <div class="command">name_age_dict = {name: age for name, age in zip(names, ages)}</div>
            <br>
            <span class="comment"># Set comprehension</span>
            <div class="command">unique_lengths = {len(word) for word in words}</div>
            <div class="command">print(unique_lengths)</div>
            <br>
            <span class="comment"># Set comprehension with condition</span>
            <div class="command">vowels_in_words = {char for word in words for char in word if char in 'aeiou'}</div>
            <div class="command">print(vowels_in_words)</div>
            <br>
            <span class="comment"># Generator expression (memory efficient)</span>
            <div class="command">squares_gen = (x**2 for x in range(1000000))&nbsp;&nbsp;# Creates generator, not list</div>
            <div class="command">first_five_squares = [next(squares_gen) for _ in range(5)]</div>
            <div class="command">print(first_five_squares)</div>
            <br>
            <span class="comment"># Complex comprehension example</span>
            <div class="command">students = [</div>
            <div class="command">&nbsp;&nbsp;&nbsp;&nbsp;{"name": "Alice", "grades": [85, 92, 78]},</div>
            <div class="command">&nbsp;&nbsp;&nbsp;&nbsp;{"name": "Bob", "grades": [90, 88, 95]},</div>
            <div class="command">&nbsp;&nbsp;&nbsp;&nbsp;{"name": "Charlie", "grades": [75, 80, 85]}</div>
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
            <div class="command">print(letter_count.most_common(3))&nbsp;&nbsp;# Top 3 most common</div>
            <br>
            <span class="comment"># defaultdict - default values for missing keys</span>
            <div class="command">from collections import defaultdict</div>
            <div class="command">dd = defaultdict(list)&nbsp;&nbsp;# Default value is empty list</div>
            <div class="command">dd['fruits'].append('apple')&nbsp;&nbsp;# No KeyError</div>
            <div class="command">dd['fruits'].append('banana')</div>
            <div class="command">print(dict(dd))</div>
            <br>
            <span class="comment"># OrderedDict - maintains insertion order (Python 3.7+ dicts do this by default)</span>
            <div class="command">from collections import OrderedDict</div>
            <div class="command">od = OrderedDict([('a', 1), ('b', 2), ('c', 3)])</div>
            <div class="command">od.move_to_end('a')&nbsp;&nbsp;# Move 'a' to end</div>
            <div class="command">print(od)</div>
            <br>
            <span class="comment"># deque - double-ended queue</span>
            <div class="command">from collections import deque</div>
            <div class="command">dq = deque([1, 2, 3, 4, 5])</div>
            <div class="command">dq.appendleft(0)&nbsp;&nbsp;&nbsp;# Add to left</div>
            <div class="command">dq.append(6)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Add to right</div>
            <div class="command">print(dq)</div>
            <div class="command">print(dq.popleft())&nbsp;&nbsp;# Remove from left</div>
            <div class="command">print(dq.pop())&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Remove from right</div>
            
            <div class="output">Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})</div>
            <div class="output">[('l', 3), ('o', 2), ('h', 1)]</div>
            <div class="output">{'fruits': ['apple', 'banana']}</div>
            <div class="output">OrderedDict([('b', 2), ('c', 3), ('a', 1)])</div>
            <div class="output">deque([0, 1, 2, 3, 4, 5, 6])</div>
            <div class="output">0</div>
            <div class="output">6</div>
        </div>
    `
};