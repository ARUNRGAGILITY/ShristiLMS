
// chapters/file_handling.js
console.log('Loading file_handling chapter...');

window.PYTHON_CONTENT.chapters.file_handling = {
    title: 'File Handling',
    content: `
        <h1>📄 File Handling</h1>
        
        <div class="theory-box">
            <h4>Working with Files and Data</h4>
            <p>File handling is essential for any real-world application. Python provides powerful and intuitive ways to read from and write to files, handle different file formats, and manage file operations safely. This chapter covers everything from basic file operations to advanced file processing techniques.</p>
        </div>

        <h2>Opening and Closing Files</h2>
        <p>Python provides the built-in 'open()' function to work with files. Always remember to close files after use to free up system resources.</p>

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
        </div>

        <h2>Reading Files</h2>
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
        </div>

        <h2>Writing to Files</h2>
        <div class="code-block">
            <span class="comment"># Writing to files</span>
            
            <span class="comment"># Write mode ('w') - overwrites existing file</span>
            <div class="command">with open('output.txt', 'w') as file:</div>
            <div class="command">    file.write("This is the first line.\\n")</div>
            <div class="command">    file.write("This is the second line.\\n")</div>
            <div class="command">    file.writelines(["Line 3\\n", "Line 4\\n", "Line 5\\n"])</div>
            
            <span class="comment"># Append mode ('a') - adds to existing file</span>
            <div class="command">with open('output.txt', 'a') as file:</div>
            <div class="command">    file.write("This line is appended.\\n")</div>
            
            <span class="comment"># Writing with print function</span>
            <div class="command">with open('print_output.txt', 'w') as file:</div>
            <div class="command">    print("Hello, World!", file=file)</div>
            <div class="command">    print("This is printed to file", file=file)</div>
            <div class="command">    print("Numbers:", 1, 2, 3, file=file)</div>
        </div>

        <h2>Working with CSV Files</h2>
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
            
            <div class="output">['Name', 'Age', 'Grade']</div>
            <div class="output">['Alice', '20', '85']</div>
            <div class="output">['Bob', '21', '92']</div>
            <div class="output">['Charlie', '19', '78']</div>
            <div class="output">Name: Alice, Grade: 85</div>
            <div class="output">Name: Bob, Grade: 92</div>
            <div class="output">Name: Charlie, Grade: 78</div>
        </div>

        <h2>Working with JSON Files</h2>
        <div class="code-block">
            <span class="comment"># Working with JSON files</span>
            <div class="command">import json</div>
            
            <span class="comment"># Python data structure</span>
            <div class="command">student_data = {</div>
            <div class="command">    "students": [</div>
            <div class="command">        {"name": "Alice", "age": 20, "grades": [85, 90, 88]},</div>
            <div class="command">        {"name": "Bob", "age": 21, "grades": [92, 89, 94]}</div>
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
            
            <div class="output">Course: Python Programming</div>
            <div class="output">Students:</div>
            <div class="output">  Alice: 87.7</div>
            <div class="output">  Bob: 91.7</div>
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
    `
};