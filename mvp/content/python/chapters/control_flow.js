// chapters/control_flow.js
console.log('Loading control_flow chapter...');

window.PYTHON_CONTENT.chapters.control_flow = {
    title: 'Control Flow',
    content: `
        <h1>🔄 Control Flow</h1>
        
        <div class="theory-box">
            <h4>Making Decisions and Repeating Actions</h4>
            <p>Control flow statements allow your program to make decisions and repeat actions. These are the building blocks that make your programs dynamic and interactive, enabling them to respond to different conditions and process data efficiently.</p>
        </div>

        <h2>Conditional Statements (if, elif, else)</h2>
        <p>Conditional statements allow your program to execute different code blocks based on certain conditions.</p>

        <div class="mermaid-container">
            <div class="mermaid">
            graph TD
                A[Start] --> B{Condition?}
                B -->|True| C[Execute if block]
                B -->|False| D{elif condition?}
                D -->|True| E[Execute elif block]
                D -->|False| F[Execute else block]
                C --> G[Continue]
                E --> G
                F --> G
                
                style A fill:#4caf50
                style B fill:#ff9800
                style D fill:#ff9800
                style G fill:#2196f3
            </div>
        </div>

        <div class="code-block">
            <span class="comment"># Basic if statement</span>
            <div class="command">age = 18</div>
            <div class="command">if age >= 18:</div>
            <div class="command">    print("You are an adult")</div>
            <div class="command">    print("You can vote")</div>
            
            <span class="comment"># if-else statement</span>
            <div class="command">temperature = 25</div>
            <div class="command">if temperature > 30:</div>
            <div class="command">    print("It's hot today!")</div>
            <div class="command">else:</div>
            <div class="command">    print("It's not too hot")</div>
            
            <span class="comment"># if-elif-else statement</span>
            <div class="command">score = 85</div>
            <div class="command">if score >= 90:</div>
            <div class="command">    grade = "A"</div>
            <div class="command">elif score >= 80:</div>
            <div class="command">    grade = "B"</div>
            <div class="command">elif score >= 70:</div>
            <div class="command">    grade = "C"</div>
            <div class="command">elif score >= 60:</div>
            <div class="command">    grade = "D"</div>
            <div class="command">else:</div>
            <div class="command">    grade = "F"</div>
            
            <div class="command">print(f"Your grade is: {grade}")</div>
            
            <div class="output">You are an adult</div>
            <div class="output">You can vote</div>
            <div class="output">It's not too hot</div>
            <div class="output">Your grade is: B</div>
        </div>

        <h2>Loops</h2>
        <p>Loops allow you to repeat code multiple times, making your programs more efficient and powerful.</p>

        <h3>For Loops</h3>
        <div class="code-block">
            <span class="comment"># Basic for loop</span>
            <div class="command">for i in range(5):</div>
            <div class="command">    print(f"Count: {i}")</div>
            
            <span class="comment"># For loop with range parameters</span>
            <div class="command">for i in range(2, 10, 2):</div>
            <div class="command">    print(f"Even number: {i}")</div>
            
            <span class="comment"># Loop through a list</span>
            <div class="command">fruits = ["apple", "banana", "orange"]</div>
            <div class="command">for fruit in fruits:</div>
            <div class="command">    print(f"I like {fruit}")</div>
            
            <span class="comment"># Loop with index</span>
            <div class="command">for index, fruit in enumerate(fruits):</div>
            <div class="command">    print(f"{index}: {fruit}")</div>
            
            <div class="output">Count: 0</div>
            <div class="output">Count: 1</div>
            <div class="output">Count: 2</div>
            <div class="output">Count: 3</div>
            <div class="output">Count: 4</div>
            <div class="output">Even number: 2</div>
            <div class="output">Even number: 4</div>
            <div class="output">Even number: 6</div>
            <div class="output">Even number: 8</div>
            <div class="output">I like apple</div>
            <div class="output">I like banana</div>
            <div class="output">I like orange</div>
            <div class="output">0: apple</div>
            <div class="output">1: banana</div>
            <div class="output">2: orange</div>
        </div>

        <h3>While Loops</h3>
        <div class="code-block">
            <span class="comment"># Basic while loop</span>
            <div class="command">count = 0</div>
            <div class="command">while count < 3:</div>
            <div class="command">    print(f"Count is {count}")</div>
            <div class="command">    count += 1</div>
            
            <span class="comment"># While loop with user input</span>
            <div class="command">password = ""</div>
            <div class="command">while password != "secret":</div>
            <div class="command">    password = input("Enter password: ")</div>
            <div class="command">    if password != "secret":</div>
            <div class="command">        print("Incorrect password!")</div>
            <div class="command">print("Access granted!")</div>
            
            <span class="comment"># Infinite loop with break</span>
            <div class="command">while True:</div>
            <div class="command">    user_input = input("Enter 'quit' to exit: ")</div>
            <div class="command">    if user_input == 'quit':</div>
            <div class="command">        break</div>
            <div class="command">    print(f"You entered: {user_input}")</div>
            
            <div class="output">Count is 0</div>
            <div class="output">Count is 1</div>
            <div class="output">Count is 2</div>
        </div>

        <h2>Loop Control: break and continue</h2>
        <div class="code-block">
            <span class="comment"># Using break to exit loop early</span>
            <div class="command">for i in range(10):</div>
            <div class="command">    if i == 5:</div>
            <div class="command">        break</div>
            <div class="command">    print(i)</div>
            
            <span class="comment"># Using continue to skip iteration</span>
            <div class="command">for i in range(10):</div>
            <div class="command">    if i % 2 == 0:</div>
            <div class="command">        continue</div>
            <div class="command">    print(f"Odd number: {i}")</div>
            
            <span class="comment"># Nested loops with break</span>
            <div class="command">for i in range(3):</div>
            <div class="command">    for j in range(3):</div>
            <div class="command">        if i == j:</div>
            <div class="command">            break</div>
            <div class="command">        print(f"i={i}, j={j}")</div>
            
            <div class="output">0</div>
            <div class="output">1</div>
            <div class="output">2</div>
            <div class="output">3</div>
            <div class="output">4</div>
            <div class="output">Odd number: 1</div>
            <div class="output">Odd number: 3</div>
            <div class="output">Odd number: 5</div>
            <div class="output">Odd number: 7</div>
            <div class="output">Odd number: 9</div>
            <div class="output">i=1, j=0</div>
            <div class="output">i=2, j=0</div>
            <div class="output">i=2, j=1</div>
        </div>

        <h2>Match-Case Statement (Python 3.10+)</h2>
        <p>The match-case statement provides a cleaner way to handle multiple conditions, similar to switch statements in other languages.</p>

        <div class="code-block">
            <span class="comment"># Match-case example</span>
            <div class="command">def handle_status(status):</div>
            <div class="command">    match status:</div>
            <div class="command">        case "pending":</div>
            <div class="command">            return "Please wait..."</div>
            <div class="command">        case "approved":</div>
            <div class="command">            return "Request approved!"</div>
            <div class="command">        case "denied":</div>
            <div class="command">            return "Request denied"</div>
            <div class="command">        case _:</div>
            <div class="command">            return "Unknown status"</div>
            
            <span class="comment"># Using the function</span>
            <div class="command">print(handle_status("approved"))</div>
            <div class="command">print(handle_status("unknown"))</div>
            
            <div class="output">Request approved!</div>
            <div class="output">Unknown status</div>
        </div>

        <div class="exercise">
            <h4>🎯 Exercise 3: Number Guessing Game</h4>
            <div class="exercise-step">
                <strong>Step 1:</strong> Generate a random number between 1 and 100
            </div>
            <div class="exercise-step">
                <strong>Step 2:</strong> Use a while loop to keep asking for guesses
            </div>
            <div class="exercise-step">
                <strong>Step 3:</strong> Use if-elif-else to give hints (too high, too low, correct)
            </div>
            <div class="exercise-step">
                <strong>Step 4:</strong> Count the number of attempts
            </div>
            <div class="exercise-step">
                <strong>Step 5:</strong> Break the loop when the correct number is guessed
            </div>
        </div>

        <div class="scenario-box">
            <h4>Real-World Example: Password Validator</h4>
            <div class="code-block">
                <div class="command">def validate_password(password):</div>
                <div class="command">    if len(password) < 8:</div>
                <div class="command">        return False, "Password too short"</div>
                <div class="command">    </div>
                <div class="command">    has_upper = any(c.isupper() for c in password)</div>
                <div class="command">    has_lower = any(c.islower() for c in password)</div>
                <div class="command">    has_digit = any(c.isdigit() for c in password)</div>
                <div class="command">    </div>
                <div class="command">    if not (has_upper and has_lower and has_digit):</div>
                <div class="command">        return False, "Password needs upper, lower, and digit"</div>
                <div class="command">    </div>
                <div class="command">    return True, "Password is valid"</div>
            </div>
        </div>

        <div class="tip">
            <strong>💡 Control Flow Best Practices:</strong>
            <ul>
                <li>Use meaningful conditions that are easy to understand</li>
                <li>Avoid deeply nested if statements when possible</li>
                <li>Use 'break' and 'continue' sparingly and document why</li>
                <li>Consider using 'match-case' for complex conditional logic</li>
                <li>Always ensure while loops have a way to terminate</li>
            </ul>
        </div>

        <div class="warning">
            <strong>⚠️ Common Pitfalls:</strong>
            <ul>
                <li><strong>Infinite loops:</strong> Always ensure your while loop condition can become False</li>
                <li><strong>Off-by-one errors:</strong> Remember that 'range(5)' goes from 0 to 4, not 1 to 5</li>
                <li><strong>Indentation:</strong> Python uses indentation to determine code blocks</li>
            </ul>
        </div>
    `
};