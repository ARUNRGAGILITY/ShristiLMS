// chapters/collections.js
console.log('Loading collections chapter...');

window.PYTHON_CONTENT.chapters.collections = {
    title: 'Collections Module',
    content: `
        <h1>🗂️ Collections Module</h1>
        
        <div class="theory-box">
            <h4>Specialized Data Structures</h4>
            <p>The collections module provides specialized container datatypes that are alternatives to Python's general purpose built-in containers like dict, list, set, and tuple. These specialized containers provide additional functionality and often better performance for specific use cases.</p>
        </div>

        <h2>Overview of Collections Module</h2>
        <p>The collections module implements specialized container datatypes providing alternatives to Python's general purpose built-in containers.</p>

        <div class="mermaid-container">
            <div class="mermaid">
            graph TD
                A[Collections Module] --> B[Counter]
                A --> C[defaultdict]
                A --> D[OrderedDict]
                A --> E[deque]
                A --> F[namedtuple]
                A --> G[ChainMap]
                
                B --> H[Count elements]
                C --> I[Default values]
                D --> J[Remember insertion order]
                E --> K[Double-ended queue]
                F --> L[Named tuples]
                G --> M[Multiple mappings]
                
                style A fill:#4caf50
                style B fill:#ff9800
                style C fill:#2196f3
                style D fill:#9c27b0
                style E fill:#f44336
                style F fill:#00bcd4
                style G fill:#795548
            </div>
        </div>

        <div class="code-block">
            <span class="comment"># Import the collections module</span>
            <div class="command">import collections</div>
            <div class="command">from collections import Counter, defaultdict, OrderedDict, deque, namedtuple, ChainMap</div>
            
            <span class="comment"># Check available classes</span>
            <div class="command">print("Available collections:")</div>
            <div class="command">collection_classes = [name for name in dir(collections) if not name.startswith('_')]</div>
            <div class="command">print(collection_classes[:10])  # Show first 10</div>
        </div>

        <h2>Counter - Counting Elements</h2>
        <p>Counter is a dict subclass for counting hashable objects. It's perfect for counting occurrences of elements.</p>

        <div class="code-block">
            <span class="comment"># Basic Counter usage</span>
            <div class="command">from collections import Counter</div>
            
            <span class="comment"># Count letters in a string</span>
            <div class="command">text = "hello world"</div>
            <div class="command">letter_count = Counter(text)</div>
            <div class="command">print(f"Text: '{text}'")</div>
            <div class="command">print(f"Letter counts: {letter_count}")</div>
            
            <span class="comment"># Count elements in a list</span>
            <div class="command">fruits = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']</div>
            <div class="command">fruit_count = Counter(fruits)</div>
            <div class="command">print(f"\nFruits: {fruits}")</div>
            <div class="command">print(f"Fruit counts: {fruit_count}")</div>
            
            <span class="comment"># Most common elements</span>
            <div class="command">print(f"\nMost common fruits:")</div>
            <div class="command">for fruit, count in fruit_count.most_common():</div>
            <div class="command">    print(f"  {fruit}: {count}")</div>
            
            <span class="comment"># Most common with limit</span>
            <div class="command">print(f"\nTop 2 most common:")</div>
            <div class="command">for fruit, count in fruit_count.most_common(2):</div>
            <div class="command">    print(f"  {fruit}: {count}")</div>
            
            <div class="output">Text: 'hello world'</div>
            <div class="output">Letter counts: Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})</div>
            <div class="output"></div>
            <div class="output">Fruits: ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']</div>
            <div class="output">Fruit counts: Counter({'apple': 3, 'banana': 2, 'cherry': 1})</div>
            <div class="output"></div>
            <div class="output">Most common fruits:</div>
            <div class="output">  apple: 3</div>
            <div class="output">  banana: 2</div>
            <div class="output">  cherry: 1</div>
            <div class="output"></div>
            <div class="output">Top 2 most common:</div>
            <div class="output">  apple: 3</div>
            <div class="output">  banana: 2</div>
        </div>

        <h3>Counter Operations and Methods</h3>
        <div class="code-block">
            <span class="comment"># Counter arithmetic</span>
            <div class="command">counter1 = Counter(['a', 'b', 'c', 'a', 'b', 'b'])</div>
            <div class="command">counter2 = Counter(['a', 'b', 'b', 'd', 'd', 'd'])</div>
            
            <div class="command">print(f"Counter 1: {counter1}")</div>
            <div class="command">print(f"Counter 2: {counter2}")</div>
            
            <span class="comment"># Addition</span>
            <div class="command">combined = counter1 + counter2</div>
            <div class="command">print(f"\nCombined (addition): {combined}")</div>
            
            <span class="comment"># Subtraction</span>
            <div class="command">difference = counter1 - counter2</div>
            <div class="command">print(f"Difference (c1 - c2): {difference}")</div>
            
            <span class="comment"># Intersection (minimum)</span>
            <div class="command">intersection = counter1 & counter2</div>
            <div class="command">print(f"Intersection (minimum): {intersection}")</div>
            
            <span class="comment"># Union (maximum)</span>
            <div class="command">union = counter1 | counter2</div>
            <div class="command">print(f"Union (maximum): {union}")</div>
            
            <span class="comment"># Counter methods</span>
            <div class="command">words = Counter("abracadabra")</div>
            <div class="command">print(f"\nWord counter: {words}")</div>
            
            <span class="comment"># Get total count</span>
            <div class="command">total = sum(words.values())</div>
            <div class="command">print(f"Total characters: {total}")</div>
            
            <span class="comment"># Update counter</span>
            <div class="command">words.update("alakazam")</div>
            <div class="command">print(f"After update with 'alakazam': {words}")</div>
            
            <span class="comment"># Clear counter</span>
            <div class="command">words.clear()</div>
            <div class="command">print(f"After clear: {words}")</div>
            
            <div class="output">Counter 1: Counter({'b': 3, 'a': 2, 'c': 1})</div>
            <div class="output">Counter 2: Counter({'d': 3, 'a': 1, 'b': 2})</div>
            <div class="output"></div>
            <div class="output">Combined (addition): Counter({'b': 5, 'd': 3, 'a': 3, 'c': 1})</div>
            <div class="output">Difference (c1 - c2): Counter({'c': 1, 'b': 1, 'a': 1})</div>
            <div class="output">Intersection (minimum): Counter({'a': 1, 'b': 2})</div>
            <div class="output">Union (maximum): Counter({'d': 3, 'b': 3, 'a': 2, 'c': 1})</div>
        </div>

        <h2>defaultdict - Dictionaries with Default Values</h2>
        <p>defaultdict is a subclass of dict that provides a default value for missing keys, eliminating KeyError exceptions.</p>

        <div class="code-block">
            <span class="comment"># Basic defaultdict usage</span>
            <div class="command">from collections import defaultdict</div>
            
            <span class="comment"># defaultdict with list</span>
            <div class="command">group_by_letter = defaultdict(list)</div>
            
            <div class="command">words = ['apple', 'banana', 'cherry', 'apricot', 'blueberry', 'coconut']</div>
            
            <div class="command">for word in words:</div>
            <div class="command">    first_letter = word[0]</div>
            <div class="command">    group_by_letter[first_letter].append(word)</div>
            
            <div class="command">print("Words grouped by first letter:")</div>
            <div class="command">for letter, word_list in sorted(group_by_letter.items()):</div>
            <div class="command">    print(f"  {letter}: {word_list}")</div>
            
            <span class="comment"># defaultdict with int (for counting)</span>
            <div class="command">word_count = defaultdict(int)</div>
            <div class="command">text = "the quick brown fox jumps over the lazy dog"</div>
            
            <div class="command">for word in text.split():</div>
            <div class="command">    word_count[word] += 1</div>
            
            <div class="command">print(f"\nWord frequency:")</div>
            <div class="command">for word, count in sorted(word_count.items()):</div>
            <div class="command">    print(f"  {word}: {count}")</div>
            
            <span class="comment"># defaultdict with set</span>
            <div class="command">student_courses = defaultdict(set)</div>
            
            <div class="command">enrollments = [</div>
            <div class="command">    ("Alice", "Math"),</div>
            <div class="command">    ("Bob", "Physics"),</div>
            <div class="command">    ("Alice", "Chemistry"),</div>
            <div class="command">    ("Charlie", "Math"),</div>
            <div class="command">    ("Bob", "Math"),</div>
            <div class="command">    ("Alice", "Physics")</div>
            <div class="command">]</div>
            
            <div class="command">for student, course in enrollments:</div>
            <div class="command">    student_courses[student].add(course)</div>
            
            <div class="command">print(f"\nStudent enrollments:")</div>
            <div class="command">for student, courses in sorted(student_courses.items()):</div>
            <div class="command">    print(f"  {student}: {courses}")</div>
            
            <div class="output">Words grouped by first letter:</div>
            <div class="output">  a: ['apple', 'apricot']</div>
            <div class="output">  b: ['banana', 'blueberry']</div>
            <div class="output">  c: ['cherry', 'coconut']</div>
            <div class="output"></div>
            <div class="output">Word frequency:</div>
            <div class="output">  brown: 1</div>
            <div class="output">  dog: 1</div>
            <div class="output">  fox: 1</div>
            <div class="output">  jumps: 1</div>
            <div class="output">  lazy: 1</div>
            <div class="output">  over: 1</div>
            <div class="output">  quick: 1</div>
            <div class="output">  the: 2</div>
        </div>

        <h3>Advanced defaultdict Usage</h3>
        <div class="code-block">
            <span class="comment"># Nested defaultdict</span>
            <div class="command">nested_dict = defaultdict(lambda: defaultdict(int))</div>
            
            <div class="command">data = [</div>
            <div class="command">    ("2023", "January", 100),</div>
            <div class="command">    ("2023", "February", 150),</div>
            <div class="command">    ("2023", "January", 200),</div>
            <div class="command">    ("2024", "January", 180),</div>
            <div class="command">    ("2024", "March", 220)</div>
            <div class="command">]</div>
            
            <div class="command">for year, month, amount in data:</div>
            <div class="command">    nested_dict[year][month] += amount</div>
            
            <div class="command">print("Sales data by year and month:")</div>
            <div class="command">for year in sorted(nested_dict.keys()):</div>
            <div class="command">    print(f"  {year}:")</div>
            <div class="command">    for month, total in sorted(nested_dict[year].items()):</div>
            <div class="command">        print(f"    {month}: {total}")</div>
            
            <span class="comment"># Custom default factory</span>
            <div class="command">def default_factory():</div>
            <div class="command">    return "Unknown"</div>
            
            <div class="command">status_dict = defaultdict(default_factory)</div>
            <div class="command">status_dict["active"] = "Running"</div>
            <div class="command">status_dict["inactive"] = "Stopped"</div>
            
            <div class="command">print(f"\nStatus lookup:")</div>
            <div class="command">print(f"Active status: {status_dict['active']}")</div>
            <div class="command">print(f"Inactive status: {status_dict['inactive']}")</div>
            <div class="command">print(f"Unknown status: {status_dict['pending']}")  # Uses default</div>
        </div>

        <h2>deque - Double-Ended Queue</h2>
        <p>deque (pronounced "deck") is a double-ended queue that supports adding and removing elements from both ends efficiently.</p>

        <div class="code-block">
            <span class="comment"># Basic deque operations</span>
            <div class="command">from collections import deque</div>
            
            <span class="comment"># Create a deque</span>
            <div class="command">dq = deque([1, 2, 3, 4, 5])</div>
            <div class="command">print(f"Initial deque: {dq}")</div>
            
            <span class="comment"># Add elements</span>
            <div class="command">dq.append(6)        # Add to right</div>
            <div class="command">dq.appendleft(0)    # Add to left</div>
            <div class="command">print(f"After appends: {dq}")</div>
            
            <span class="comment"># Remove elements</span>
            <div class="command">right_element = dq.pop()      # Remove from right</div>
            <div class="command">left_element = dq.popleft()   # Remove from left</div>
            <div class="command">print(f"Removed from right: {right_element}")</div>
            <div class="command">print(f"Removed from left: {left_element}")</div>
            <div class="command">print(f"After removals: {dq}")</div>
            
            <span class="comment"># Extend deque</span>
            <div class="command">dq.extend([7, 8, 9])          # Extend right</div>
            <div class="command">dq.extendleft([-2, -1])       # Extend left (note order!)</div>
            <div class="command">print(f"After extends: {dq}")</div>
            
            <span class="comment"># Rotate deque</span>
            <div class="command">dq.rotate(2)   # Rotate right by 2</div>
            <div class="command">print(f"After rotate right 2: {dq}")</div>
            
            <div class="command">dq.rotate(-3)  # Rotate left by 3</div>
            <div class="command">print(f"After rotate left 3: {dq}")</div>
            
            <div class="output">Initial deque: deque([1, 2, 3, 4, 5])</div>
            <div class="output">After appends: deque([0, 1, 2, 3, 4, 5, 6])</div>
            <div class="output">Removed from right: 6</div>
            <div class="output">Removed from left: 0</div>
            <div class="output">After removals: deque([1, 2, 3, 4, 5])</div>
            <div class="output">After extends: deque([-1, -2, 1, 2, 3, 4, 5, 7, 8, 9])</div>
            <div class="output">After rotate right 2: deque([8, 9, -1, -2, 1, 2, 3, 4, 5, 7])</div>
            <div class="output">After rotate left 3: deque([-2, 1, 2, 3, 4, 5, 7, 8, 9, -1])</div>
        </div>

        <h3>deque with maxlen</h3>
        <div class="code-block">
            <span class="comment"># Fixed-size deque</span>
            <div class="command">recent_items = deque(maxlen=5)</div>
            
            <div class="command">print("Adding items to fixed-size deque (maxlen=5):")</div>
            <div class="command">for i in range(10):</div>
            <div class="command">    recent_items.append(i)</div>
            <div class="command">    print(f"  Added {i}: {recent_items}")</div>
            
            <span class="comment"># Useful for implementing circular buffers</span>
            <div class="command">class RecentHistory:</div>
            <div class="command">    def __init__(self, maxsize=10):</div>
            <div class="command">        self.history = deque(maxlen=maxsize)</div>
            
            <div class="command">    def add(self, item):</div>
            <div class="command">        self.history.append(item)</div>
            
            <div class="command">    def get_recent(self, n=None):</div>
            <div class="command">        if n is None:</div>
            <div class="command">            return list(self.history)</div>
            <div class="command">        return list(self.history)[-n:]</div>
            
            <div class="command">    def clear(self):</div>
            <div class="command">        self.history.clear()</div>
            
            <div class="command">browser_history = RecentHistory(maxsize=3)</div>
            <div class="command">sites = ["google.com", "python.org", "github.com", "stackoverflow.com", "reddit.com"]</div>
            
            <div class="command">for site in sites:</div>
            <div class="command">    browser_history.add(site)</div>
            <div class="command">    print(f"Visited {site}, recent history: {browser_history.get_recent()}")</div>
        </div>

        <h2>namedtuple - Named Tuples</h2>
        <p>namedtuple creates tuple subclasses with named fields, making your code more readable and self-documenting.</p>

        <div class="code-block">
            <span class="comment"># Create named tuple classes</span>
            <div class="command">from collections import namedtuple</div>
            
            <span class="comment"># Define a Point namedtuple</span>
            <div class="command">Point = namedtuple('Point', ['x', 'y'])</div>
            
            <span class="comment"># Create Point instances</span>
            <div class="command">p1 = Point(10, 20)</div>
            <div class="command">p2 = Point(30, 40)</div>
            
            <div class="command">print(f"Point 1: {p1}")</div>
            <div class="command">print(f"Point 2: {p2}")</div>
            <div class="command">print(f"P1 coordinates: x={p1.x}, y={p1.y}")</div>
            
            <span class="comment"># Named tuples are still tuples</span>
            <div class="command">print(f"P1[0] = {p1[0]}, P1[1] = {p1[1]}")</div>
            <div class="command">print(f"P1 == (10, 20): {p1 == (10, 20)}")</div>
            
            <span class="comment"># Person example</span>
            <div class="command">Person = namedtuple('Person', ['name', 'age', 'city'])</div>
            
            <div class="command">alice = Person('Alice', 25, 'New York')</div>
            <div class="command">bob = Person('Bob', 30, 'Los Angeles')</div>
            
            <div class="command">print(f"\nPeople:")</div>
            <div class="command">print(f"  {alice.name} is {alice.age} years old and lives in {alice.city}")</div>
            <div class="command">print(f"  {bob.name} is {bob.age} years old and lives in {bob.city}")</div>
            
            <span class="comment"># namedtuple methods</span>
            <div class="command">print(f"\nPerson fields: {Person._fields}")</div>
            <div class="command">print(f"Alice as dict: {alice._asdict()}")</div>
            
            <div class="output">Point 1: Point(x=10, y=20)</div>
            <div class="output">Point 2: Point(x=30, y=40)</div>
            <div class="output">P1 coordinates: x=10, y=20</div>
            <div class="output">P1[0] = 10, P1[1] = 20</div>
            <div class="output">P1 == (10, 20): True</div>
            <div class="output"></div>
            <div class="output">People:</div>
            <div class="output">  Alice is 25 years old and lives in New York</div>
            <div class="output">  Bob is 30 years old and lives in Los Angeles</div>
            <div class="output"></div>
            <div class="output">Person fields: ('name', 'age', 'city')</div>
            <div class="output">Alice as dict: {'name': 'Alice', 'age': 25, 'city': 'New York'}</div>
        </div>

        <h3>Advanced namedtuple Usage</h3>
        <div class="code-block">
            <span class="comment"># namedtuple with defaults (Python 3.7+)</span>
            <div class="command">Employee = namedtuple('Employee', ['name', 'position', 'salary', 'bonus'], defaults=[0])</div>
            
            <div class="command">emp1 = Employee('Alice', 'Developer', 70000)</div>
            <div class="command">emp2 = Employee('Bob', 'Manager', 80000, 5000)</div>
            
            <div class="command">print(f"Employee 1: {emp1}")</div>
            <div class="command">print(f"Employee 2: {emp2}")</div>
            
            <span class="comment"># _replace method for creating modified copies</span>
            <div class="command">emp1_promoted = emp1._replace(position='Senior Developer', salary=85000)</div>
            <div class="command">print(f"\nAfter promotion: {emp1_promoted}")</div>
            <div class="command">print(f"Original unchanged: {emp1}")</div>
            
            <span class="comment"># _make method for creating from iterable</span>
            <div class="command">emp_data = ['Charlie', 'Designer', 65000, 2000]</div>
            <div class="command">emp3 = Employee._make(emp_data)</div>
            <div class="command">print(f"\nEmployee from list: {emp3}")</div>
            
            <span class="comment"># Using namedtuples in functions</span>
            <div class="command">def calculate_total_compensation(employee):</div>
            <div class="command">    return employee.salary + employee.bonus</div>
            
            <div class="command">def get_employee_summary(employee):</div>
            <div class="command">    total_comp = calculate_total_compensation(employee)</div>
            <div class="command">    return f"{employee.name} ({employee.position}): {total_comp:,}"</div>
            
            <div class="command">employees = [emp1, emp2, emp3]</div>
            <div class="command">print(f"\nEmployee summaries:")</div>
            <div class="command">for emp in employees:</div>
            <div class="command">    print(f"  {get_employee_summary(emp)}")</div>
        </div>

        <h2>ChainMap - Multiple Mappings</h2>
        <p>ChainMap groups multiple dictionaries together to create a single, updateable view.</p>

        <div class="code-block">
            <span class="comment"># Basic ChainMap usage</span>
            <div class="command">from collections import ChainMap</div>
            
            <span class="comment"># Configuration hierarchy example</span>
            <div class="command">user_config = {'theme': 'dark', 'language': 'en'}</div>
            <div class="command">app_config = {'theme': 'light', 'debug': True, 'timeout': 30}</div>
            <div class="command">default_config = {'theme': 'light', 'language': 'en', 'debug': False, 'timeout': 60}</div>
            
            <div class="command"># Create ChainMap (first dict has highest priority)</div>
            <div class="command">config = ChainMap(user_config, app_config, default_config)</div>
            
            <div class="command">print("Configuration lookup (user > app > default):")</div>
            <div class="command">print(f"  theme: {config['theme']}")        # From user_config</div>
            <div class="command">print(f"  language: {config['language']}")  # From user_config</div>
            <div class="command">print(f"  debug: {config['debug']}")        # From app_config</div>
            <div class="command">print(f"  timeout: {config['timeout']}")    # From app_config</div>
            
            <span class="comment"># View all configs</span>
            <div class="command">print(f"\nAll configurations:")</div>
            <div class="command">for key, value in config.items():</div>
            <div class="command">    print(f"  {key}: {value}")</div>
            
            <span class="comment"># ChainMap maps attribute</span>
            <div class="command">print(f"\nIndividual mappings:")</div>
            <div class="command">for i, mapping in enumerate(config.maps):</div>
            <div class="command">    print(f"  Map {i}: {mapping}")</div>
            
            <div class="output">Configuration lookup (user > app > default):</div>
            <div class="output">  theme: dark</div>
            <div class="output">  language: en</div>
            <div class="output">  debug: True</div>
            <div class="output">  timeout: 30</div>
        </div>

        <h3>ChainMap Operations</h3>
        <div class="code-block">
            <span class="comment"># Adding and modifying ChainMaps</span>
            <div class="command">local_vars = {'x': 1, 'y': 2}</div>
            <div class="command">global_vars = {'x': 10, 'z': 30}</div>
            
            <div class="command">scope = ChainMap(local_vars, global_vars)</div>
            <div class="command">print(f"Initial scope: {dict(scope)}")</div>
            
            <span class="comment"># Modifications affect first mapping</span>
            <div class="command">scope['x'] = 100  # Updates local_vars</div>
            <div class="command">scope['w'] = 400  # Adds to local_vars</div>
            
            <div class="command">print(f"\nAfter modifications:")</div>
            <div class="command">print(f"  Local vars: {local_vars}")</div>
            <div class="command">print(f"  Global vars: {global_vars}")</div>
            <div class="command">print(f"  Scope view: {dict(scope)}")</div>
            
            <span class="comment"># new_child() method</span>
            <div class="command">inner_scope = scope.new_child({'x': 999})</div>
            <div class="command">print(f"\nInner scope: {dict(inner_scope)}")</div>
            <div class="command">print(f"Inner scope x: {inner_scope['x']}")  # From inner scope</div>
            <div class="command">print(f"Inner scope z: {inner_scope['z']}")  # From global_vars</div>
            
            <span class="comment"># parents property</span>
            <div class="command">parent_scope = inner_scope.parents</div>
            <div class="command">print(f"\nParent scope: {dict(parent_scope)}")</div>
        </div>

        <h2>Real-World Collections Examples</h2>
        <div class="code-block">
            <span class="comment"># Log analysis with Counter</span>
            <div class="command">def analyze_log_levels(log_entries):</div>
            <div class="command">    level_counter = Counter()</div>
            <div class="command">    for entry in log_entries:</div>
            <div class="command">        # Extract log level (assume format: "LEVEL: message")</div>
            <div class="command">        if ':' in entry:</div>
            <div class="command">            level = entry.split(':')[0].strip()</div>
            <div class="command">            level_counter[level] += 1</div>
            <div class="command">    return level_counter</div>
            
            <div class="command">log_entries = [</div>
            <div class="command">    "INFO: Application started",</div>
            <div class="command">    "DEBUG: User login attempt",</div>
            <div class="command">    "ERROR: Database connection failed",</div>
            <div class="command">    "INFO: Processing request",</div>
            <div class="command">    "WARNING: High memory usage",</div>
            <div class="command">    "ERROR: File not found",</div>
            <div class="command">    "INFO: Request completed",</div>
            <div class="command">    "DEBUG: Cache hit",</div>
            <div class="command">    "ERROR: Timeout occurred"</div>
            <div class="command">]</div>
            
            <div class="command">log_analysis = analyze_log_levels(log_entries)</div>
            <div class="command">print("Log level analysis:")</div>
            <div class="command">for level, count in log_analysis.most_common():</div>
            <div class="command">    print(f"  {level}: {count}")</div>
            
            <span class="comment"># Shopping cart with defaultdict</span>
            <div class="command">class ShoppingCart:</div>
            <div class="command">    def __init__(self):</div>
            <div class="command">        self.items = defaultdict(int)</div>
            <div class="command">        self.prices = {}</div>
            
            <div class="command">    def add_item(self, item, quantity, price):</div>
            <div class="command">        self.items[item] += quantity</div>
            <div class="command">        self.prices[item] = price</div>
            
            <div class="command">    def remove_item(self, item, quantity):</div>
            <div class="command">        if self.items[item] >= quantity:</div>
            <div class="command">            self.items[item] -= quantity</div>
            <div class="command">            if self.items[item] == 0:</div>
            <div class="command">                del self.items[item]</div>
            
            <div class="command">    def get_total(self):</div>
            <div class="command">        return sum(quantity * self.prices[item] for item, quantity in self.items.items())</div>
            
            <div class="command">    def display_cart(self):</div>
            <div class="command">        print("Shopping Cart:")</div>
            <div class="command">        for item, quantity in self.items.items():</div>
            <div class="command">            price = self.prices[item]</div>
            <div class="command">            total = quantity * price</div>
            <div class="command">            print(f"  {item}: {quantity} x {price:.2f} = {total:.2f}")</div>
            <div class="command">        print(f"Total: {self.get_total():.2f}")</div>
            
            <div class="command">cart = ShoppingCart()</div>
            <div class="command">cart.add_item("Apple", 5, 1.20)</div>
            <div class="command">cart.add_item("Banana", 3, 0.80)</div>
            <div class="command">cart.add_item("Apple", 2, 1.20)  # Add more apples</div>
            <div class="command">cart.display_cart()</div>
            
            <div class="output">Log level analysis:</div>
            <div class="output">  INFO: 3</div>
            <div class="output">  ERROR: 3</div>
            <div class="output">  DEBUG: 2</div>
            <div class="output">  WARNING: 1</div>
            <div class="output"></div>
            <div class="output">Shopping Cart:</div>
            <div class="output">  Apple: 7 x $1.20 = $8.40</div>
            <div class="output">  Banana: 3 x $0.80 = $2.40</div>
            <div class="output">Total: $10.80</div>
        </div>

        <h3>Task Scheduler with deque</h3>
        <div class="code-block">
            <span class="comment"># Task scheduler using deque</span>
            <div class="command">class TaskScheduler:</div>
            <div class="command">    def __init__(self):</div>
            <div class="command">        self.tasks = deque()</div>
            <div class="command">        self.completed = []</div>
            
            <div class="command">    def add_task(self, task, priority="normal"):</div>
            <div class="command">        if priority == "high":</div>
            <div class="command">            self.tasks.appendleft(task)  # High priority goes to front</div>
            <div class="command">        else:</div>
            <div class="command">            self.tasks.append(task)      # Normal priority goes to back</div>
            
            <div class="command">    def process_next_task(self):</div>
            <div class="command">        if self.tasks:</div>
            <div class="command">            task = self.tasks.popleft()</div>
            <div class="command">            print(f"Processing: {task}")</div>
            <div class="command">            self.completed.append(task)</div>
            <div class="command">            return task</div>
            <div class="command">        return None</div>
            
            <div class="command">    def show_status(self):</div>
            <div class="command">        print(f"Pending tasks: {list(self.tasks)}")</div>
            <div class="command">        print(f"Completed: {self.completed}")</div>
            
            <div class="command">scheduler = TaskScheduler()</div>
            <div class="command">scheduler.add_task("Send email")</div>
            <div class="command">scheduler.add_task("Update database")</div>
            <div class="command">scheduler.add_task("URGENT: Fix bug", "high")</div>
            <div class="command">scheduler.add_task("Generate report")</div>
            
            <div class="command">print("Initial status:")</div>
            <div class="command">scheduler.show_status()</div>
            
            <div class="command">print("\nProcessing tasks:")</div>
            <div class="command">while scheduler.tasks:</div>
            <div class="command">    scheduler.process_next_task()</div>
            
            <div class="command">print("\nFinal status:")</div>
            <div class="command">scheduler.show_status()</div>
        </div>

        <h3>Data Record with namedtuple</h3>
        <div class="code-block">
            <span class="comment"># Student record system</span>
            <div class="command">Grade = namedtuple('Grade', ['subject', 'score', 'max_score'])</div>
            <div class="command">Student = namedtuple('Student', ['id', 'name', 'email', 'grades'])</div>
            
            <div class="command">def calculate_percentage(grade):</div>
            <div class="command">    return (grade.score / grade.max_score) * 100</div>
            
            <div class="command">def get_gpa(student):</div>
            <div class="command">    if not student.grades:</div>
            <div class="command">        return 0.0</div>
            <div class="command">    total_percentage = sum(calculate_percentage(grade) for grade in student.grades)</div>
            <div class="command">    return total_percentage / len(student.grades)</div>
            
            <div class="command"># Create student records</div>
            <div class="command">alice_grades = [</div>
            <div class="command">    Grade('Math', 85, 100),</div>
            <div class="command">    Grade('Science', 92, 100),</div>
            <div class="command">    Grade('English', 78, 100)</div>
            <div class="command">]</div>
            
            <div class="command">bob_grades = [</div>
            <div class="command">    Grade('Math', 76, 100),</div>
            <div class="command">    Grade('Science', 88, 100),</div>
            <div class="command">    Grade('English', 82, 100)</div>
            <div class="command">]</div>
            
            <div class="command">alice = Student(1, 'Alice Johnson', 'alice@email.com', alice_grades)</div>
            <div class="command">bob = Student(2, 'Bob Smith', 'bob@email.com', bob_grades)</div>
            
            <div class="command">students = [alice, bob]</div>
            
            <div class="command">print("Student Report:")</div>
            <div class="command">for student in students:</div>
            <div class="command">    print(f"\n{student.name} (ID: {student.id})")</div>
            <div class="command">    print(f"Email: {student.email}")</div>
            <div class="command">    print("Grades:")</div>
            <div class="command">    for grade in student.grades:</div>
            <div class="command">        percentage = calculate_percentage(grade)</div>
            <div class="command">        print(f"  {grade.subject}: {grade.score}/{grade.max_score} ({percentage:.1f}%)")</div>
            <div class="command">    print(f"GPA: {get_gpa(student):.2f}%")</div>
        </div>

        <div class="exercise">
            <h4>🎯 Exercise: Web Analytics Dashboard</h4>
            <div class="exercise-step">
                <strong>Step 1:</strong> Use Counter to analyze website page visits from a log file
            </div>
            <div class="exercise-step">
                <strong>Step 2:</strong> Use defaultdict to group visitors by country and count unique visitors
            </div>
            <div class="exercise-step">
                <strong>Step 3:</strong> Use deque to maintain a rolling window of the last 100 page views
            </div>
            <div class="exercise-step">
                <strong>Step 4:</strong> Create a namedtuple for PageView with fields: timestamp, page, user_id, country
            </div>
            <div class="exercise-step">
                <strong>Step 5:</strong> Use ChainMap to merge different configuration sources for the analytics system
            </div>
        </div>

        <div class="scenario-box">
            <h4>When to Use Each Collection</h4>
            <ul>
                <li><strong>Counter:</strong> Frequency analysis, voting systems, histogram data</li>
                <li><strong>defaultdict:</strong> Grouping data, avoiding KeyError, building nested structures</li>
                <li><strong>OrderedDict:</strong> When insertion order matters (less needed in Python 3.7+)</li>
                <li><strong>deque:</strong> Queue operations, sliding windows, undo functionality</li>
                <li><strong>namedtuple:</strong> Immutable records, coordinate systems, database rows</li>
                <li><strong>ChainMap:</strong> Configuration hierarchy, scope chains, template contexts</li>
            </ul>
        </div>

        <div class="practice-box">
            <h4>Performance Comparison</h4>
            <ul>
                <li><strong>deque vs list:</strong> O(1) append/pop at both ends vs O(n) for list pop(0)</li>
                <li><strong>Counter vs manual counting:</strong> Optimized C implementation, more readable</li>
                <li><strong>defaultdict vs dict:</strong> Eliminates KeyError checks, cleaner code</li>
                <li><strong>namedtuple vs class:</strong> Memory efficient, immutable, built-in methods</li>
                <li><strong>ChainMap vs dict.update():</strong> Non-destructive merging, maintains separate contexts</li>
            </ul>
        </div>

        <div class="tip">
            <strong>💡 Collections Best Practices:</strong>
            <ul>
                <li>Choose the right collection for your use case - don't default to basic types</li>
                <li>Use Counter for any counting operations instead of manual dict manipulation</li>
                <li>Prefer defaultdict when building nested data structures</li>
                <li>Use deque for queue operations and when you need efficient operations at both ends</li>
                <li>Create namedtuples for structured data that doesn't need methods</li>
                <li>Use ChainMap for configuration and scope management</li>
                <li>Consider memory usage - some collections are more memory efficient than others</li>
            </ul>
        </div>

        <div class="warning">
            <strong>⚠️ Common Collections Pitfalls:</strong>
            <ul>
                <li><strong>Mutating during iteration:</strong> Don't modify collections while iterating over them</li>
                <li><strong>defaultdict factory confusion:</strong> Remember that the default_factory is called with no arguments</li>
                <li><strong>namedtuple immutability:</strong> You can't modify namedtuple fields after creation</li>
                <li><strong>ChainMap order matters:</strong> Earlier mappings have priority over later ones</li>
                <li><strong>deque indexing:</strong> deque doesn't support efficient random access like lists</li>
                <li><strong>Counter negative counts:</strong> Counter can have zero or negative counts</li>
            </ul>
        </div>
    `
};