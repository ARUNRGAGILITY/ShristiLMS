// chapters/error_handling.js
console.log('Loading error_handling chapter...');

window.PYTHON_CONTENT.chapters.error_handling = {
    title: 'Error Handling',
    content: `
        <h1>🚨 Error Handling</h1>
        
        <div class="theory-box">
            <h4>Dealing with the Unexpected</h4>
            <p>Error handling is a crucial part of writing robust Python programs. Errors are inevitable in programming, but how you handle them determines whether your program crashes or gracefully recovers. Python provides powerful tools for anticipating, catching, and handling errors.</p>
        </div>

        <h2>Types of Errors</h2>
        <p>Python has two main types of errors: syntax errors and exceptions.</p>

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
            
            <div class="output">NameError: name 'undefined_variable' is not defined</div>
            <div class="output">ZeroDivisionError: division by zero</div>
            <div class="output">IndexError: list index out of range</div>
            <div class="output">KeyError: 'grade'</div>
        </div>

        <h2>Try-Except-Else-Finally</h2>
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
            <div class="command">        print("Division operation completed.\\n")</div>
            
            <span class="comment"># Testing the function</span>
            <div class="command">print("Result:", divide_numbers(10, 2))</div>
            <div class="command">print("Result:", divide_numbers(10, 0))</div>
            
            <div class="output">Attempting to divide 10 by 2</div>
            <div class="output">Division successful!</div>
            <div class="output">Division operation completed.</div>
            <div class="output">Result: 5.0</div>
            <div class="output">Attempting to divide 10 by 0</div>
            <div class="output">Error: Cannot divide by zero!</div>
            <div class="output">Division operation completed.</div>
            <div class="output">Result: None</div>
        </div>

        <h2>Raising Exceptions</h2>
        <div class="code-block">
            <span class="comment"># Raising built-in exceptions</span>
            <div class="command">def calculate_square_root(number):</div>
            <div class="command">    if not isinstance(number, (int, float)):</div>
            <div class="command">        raise TypeError("Input must be a number")</div>
            <div class="command">    if number < 0:</div>
            <div class="command">        raise ValueError("Cannot calculate square root of negative number")</div>
            <div class="command">    return number ** 0.5</div>
            
            <span class="comment"># Testing exception raising</span>
            <div class="command">try:</div>
            <div class="command">    print(calculate_square_root(16))</div>
            <div class="command">    print(calculate_square_root(-4))</div>
            <div class="command">except ValueError as e:</div>
            <div class="command">    print(f"Caught ValueError: {e}")</div>
            
            <div class="output">4.0</div>
            <div class="output">Caught ValueError: Cannot calculate square root of negative number</div>
        </div>

        <h2>Custom Exceptions</h2>
        <div class="code-block">
            <span class="comment"># Custom exception classes</span>
            <div class="command">class InvalidAgeError(Exception):</div>
            <div class="command">    """Raised when an invalid age is provided."""</div>
            <div class="command">    def __init__(self, age, message="Age must be between 0 and 150"):</div>
            <div class="command">        self.age = age</div>
            <div class="command">        self.message = message</div>
            <div class="command">        super().__init__(self.message)</div>
            
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
            
            <span class="comment"># Testing custom exceptions</span>
            <div class="command">try:</div>
            <div class="command">    person = Person("Alice", 200)</div>
            <div class="command">except InvalidAgeError as e:</div>
            <div class="command">    print(f"Invalid age error: {e}")</div>
            
            <div class="output">Invalid age error: Age must be between 0 and 150</div>
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
    `
};
