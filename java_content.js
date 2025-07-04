// java-content.js - Java Course Content Template
// To enable this course, set available: true in config.js
const JAVA_CONTENT = {
    icon: '☕',
    title: 'Java Mastery',
    description: 'Object-oriented programming with Java',
    chapters: {
        intro: {
            title: 'Introduction to Java',
            content: `
                <h1>☕ Introduction to Java</h1>
                
                <div class="theory-box">
                    <h4>What is Java?</h4>
                    <p>Java is a high-level, object-oriented programming language developed by Sun Microsystems (now Oracle) in 1995. Known for its "write once, run anywhere" philosophy, Java applications are compiled to bytecode that can run on any Java Virtual Machine (JVM).</p>
                </div>

                <h2>Why Learn Java?</h2>
                <div class="practice-box">
                    <h4>Java's Strengths</h4>
                    <ul>
                        <li><strong>Platform Independent:</strong> Runs on any OS with JVM</li>
                        <li><strong>Object-Oriented:</strong> Encourages modular, reusable code</li>
                        <li><strong>Robust:</strong> Strong memory management and error handling</li>
                        <li><strong>Secure:</strong> Built-in security features</li>
                        <li><strong>Enterprise Ready:</strong> Widely used in large-scale applications</li>
                        <li><strong>Large Ecosystem:</strong> Extensive libraries and frameworks</li>
                    </ul>
                </div>

                <h2>Java Applications</h2>
                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Java Applications] --> B[Web Development]
                        A --> C[Mobile Development]
                        A --> D[Desktop Applications]
                        A --> E[Enterprise Software]
                        A --> F[Scientific Applications]
                        A --> G[Big Data]
                        
                        B --> H[Spring, JSF]
                        C --> I[Android Apps]
                        D --> J[Swing, JavaFX]
                        E --> K[Banking, Finance]
                        F --> L[Research Tools]
                        G --> M[Hadoop, Spark]
                        
                        style A fill:#4caf50
                    </div>
                </div>

                <div class="code-block">
                    <span class="comment">// Your first Java program</span>
                    <div class="command">public class HelloWorld {</div>
                    <div class="command">    public static void main(String[] args) {</div>
                    <div class="command">        System.out.println("Hello, World!");</div>
                    <div class="command">    }</div>
                    <div class="command">}</div>
                    
                    <span class="comment">// Compile and run</span>
                    <div class="command">$ javac HelloWorld.java</div>
                    <div class="command">$ java HelloWorld</div>
                    <div class="output">Hello, World!</div>
                </div>

                <div class="scenario-box">
                    <h4>Java in the Real World</h4>
                    <p><strong>Enterprise Example:</strong> Netflix uses Java for its backend services, handling millions of users streaming content worldwide. Java's scalability and reliability make it perfect for mission-critical applications that need to handle massive traffic loads.</p>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 1: Setting Up Java</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Install JDK (Java Development Kit) from Oracle or OpenJDK
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Set up JAVA_HOME environment variable
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Verify installation with \`java -version\`
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Create and run your first HelloWorld program
                    </div>
                </div>

                <div class="tip">
                    <strong>💡 Java Philosophy:</strong> "Write once, run anywhere" - Java's bytecode can execute on any platform with a JVM, making it truly platform-independent.
                </div>
            `
        },
        basics: {
            title: 'Java Basics',
            content: `
                <h1>📚 Java Basics</h1>
                
                <div class="theory-box">
                    <h4>Java Program Structure</h4>
                    <p>Every Java program must have at least one class, and the main method serves as the entry point. Java is strictly object-oriented, so everything must be inside a class.</p>
                </div>

                <h2>Variables and Data Types</h2>
                <div class="code-block">
                    <span class="comment">// Primitive data types</span>
                    <div class="command">int age = 25;</div>
                    <div class="command">double salary = 50000.50;</div>
                    <div class="command">char grade = 'A';</div>
                    <div class="command">boolean isStudent = true;</div>
                    <div class="command">long population = 7800000000L;</div>
                    <div class="command">float pi = 3.14f;</div>
                    
                    <span class="comment">// Reference types</span>
                    <div class="command">String name = "John Doe";</div>
                    <div class="command">int[] numbers = {1, 2, 3, 4, 5};</div>
                </div>

                <h2>Control Structures</h2>
                <div class="code-block">
                    <span class="comment">// If-else statements</span>
                    <div class="command">if (age >= 18) {</div>
                    <div class="command">    System.out.println("You are an adult");</div>
                    <div class="command">} else {</div>
                    <div class="command">    System.out.println("You are a minor");</div>
                    <div class="command">}</div>
                    
                    <span class="comment">// For loops</span>
                    <div class="command">for (int i = 0; i < 5; i++) {</div>
                    <div class="command">    System.out.println("Count: " + i);</div>
                    <div class="command">}</div>
                    
                    <span class="comment">// Enhanced for loop</span>
                    <div class="command">for (int number : numbers) {</div>
                    <div class="command">    System.out.println(number);</div>
                    <div class="command">}</div>
                </div>

                <h2>Methods</h2>
                <div class="code-block">
                    <span class="comment">// Method definition</span>
                    <div class="command">public static int addNumbers(int a, int b) {</div>
                    <div class="command">    return a + b;</div>
                    <div class="command">}</div>
                    
                    <span class="comment">// Method call</span>
                    <div class="command">int result = addNumbers(5, 3);</div>
                    <div class="command">System.out.println("Result: " + result);</div>
                </div>

                <div class="practice-box">
                    <h4>Java Naming Conventions</h4>
                    <ul>
                        <li><strong>Classes:</strong> PascalCase (e.g., MyClass)</li>
                        <li><strong>Methods/Variables:</strong> camelCase (e.g., myMethod)</li>
                        <li><strong>Constants:</strong> UPPER_CASE (e.g., MAX_SIZE)</li>
                        <li><strong>Packages:</strong> lowercase (e.g., com.example.mypackage)</li>
                    </ul>
                </div>

                <div class="warning">
                    <strong>⚠️ Java is Case Sensitive:</strong> \`myVariable\` and \`MyVariable\` are different identifiers in Java!
                </div>
            `
        },
        oop: {
            title: 'Object-Oriented Programming',
            content: `
                <h1>🏗️ Object-Oriented Programming</h1>
                
                <div class="theory-box">
                    <h4>OOP Principles</h4>
                    <p>Java is built around four main OOP principles: Encapsulation, Inheritance, Polymorphism, and Abstraction. These principles help create modular, maintainable, and reusable code.</p>
                </div>

                <h2>Classes and Objects</h2>
                <div class="code-block">
                    <span class="comment">// Class definition</span>
                    <div class="command">public class Car {</div>
                    <div class="command">    // Fields (attributes)</div>
                    <div class="command">    private String brand;</div>
                    <div class="command">    private String model;</div>
                    <div class="command">    private int year;</div>
                    <div class="command"></div>
                    <div class="command">    // Constructor</div>
                    <div class="command">    public Car(String brand, String model, int year) {</div>
                    <div class="command">        this.brand = brand;</div>
                    <div class="command">        this.model = model;</div>
                    <div class="command">        this.year = year;</div>
                    <div class="command">    }</div>
                    <div class="command"></div>
                    <div class="command">    // Methods</div>
                    <div class="command">    public void startEngine() {</div>
                    <div class="command">        System.out.println("Engine started!");</div>
                    <div class="command">    }</div>
                    <div class="command">}</div>
                    
                    <span class="comment">// Creating objects</span>
                    <div class="command">Car myCar = new Car("Toyota", "Camry", 2022);</div>
                    <div class="command">myCar.startEngine();</div>
                </div>

                <div class="mermaid-container">
                    <div class="mermaid">
                    classDiagram
                        class Car {
                            -String brand
                            -String model
                            -int year
                            +Car(brand, model, year)
                            +startEngine()
                            +getBrand()
                            +getModel()
                            +getYear()
                        }
                    </div>
                </div>

                <div class="tip">
                    <strong>💡 Encapsulation:</strong> Use private fields and public getter/setter methods to control access to class data and maintain data integrity.
                </div>
            `
        },
        reference: {
            title: 'Java Quick Reference',
            content: `
                <h1>📚 Java Quick Reference</h1>
                
                <div class="theory-box">
                    <h4>Essential Java Syntax</h4>
                    <p>Quick reference for the most commonly used Java syntax and concepts.</p>
                </div>

                <h2>Data Types</h2>
                <div class="code-block">
                    <span class="comment">// Primitive types</span>
                    <div class="command">byte    b = 127;        // 8-bit</div>
                    <div class="command">short   s = 32767;      // 16-bit</div>
                    <div class="command">int     i = 2147483647; // 32-bit</div>
                    <div class="command">long    l = 123L;       // 64-bit</div>
                    <div class="command">float   f = 3.14f;      // 32-bit</div>
                    <div class="command">double  d = 3.14159;    // 64-bit</div>
                    <div class="command">char    c = 'A';        // 16-bit Unicode</div>
                    <div class="command">boolean bool = true;    // true/false</div>
                </div>

                <h2>String Operations</h2>
                <div class="code-block">
                    <span class="comment">// String methods</span>
                    <div class="command">String str = "Hello World";</div>
                    <div class="command">str.length()           // Returns length</div>
                    <div class="command">str.charAt(0)          // Returns 'H'</div>
                    <div class="command">str.substring(0, 5)    // Returns "Hello"</div>
                    <div class="command">str.toLowerCase()      // Returns "hello world"</div>
                    <div class="command">str.toUpperCase()      // Returns "HELLO WORLD"</div>
                    <div class="command">str.contains("World")  // Returns true</div>
                </div>

                <h2>Array Operations</h2>
                <div class="code-block">
                    <span class="comment">// Array declaration and initialization</span>
                    <div class="command">int[] arr1 = new int[5];              // Creates array of size 5</div>
                    <div class="command">int[] arr2 = {1, 2, 3, 4, 5};        // Initialize with values</div>
                    <div class="command">String[] names = new String[3];       // String array</div>
                    
                    <span class="comment">// Array operations</span>
                    <div class="command">arr1[0] = 10;          // Set element</div>
                    <div class="command">int first = arr2[0];   // Get element</div>
                    <div class="command">int size = arr2.length; // Get array length</div>
                </div>

                <h2>Exception Handling</h2>
                <div class="code-block">
                    <span class="comment">// Try-catch-finally</span>
                    <div class="command">try {</div>
                    <div class="command">    int result = 10 / 0;</div>
                    <div class="command">} catch (ArithmeticException e) {</div>
                    <div class="command">    System.out.println("Division by zero!");</div>
                    <div class="command">} finally {</div>
                    <div class="command">    System.out.println("Always executes");</div>
                    <div class="command">}</div>
                </div>

                <div class="practice-box">
                    <h4>🎓 Congratulations!</h4>
                    <p>You've completed the Java fundamentals! You now know:</p>
                    <ul>
                        <li>✅ Java syntax and structure</li>
                        <li>✅ Object-oriented programming concepts</li>
                        <li>✅ Data types and variables</li>
                        <li>✅ Control flow statements</li>
                        <li>✅ Methods and classes</li>
                        <li>✅ Exception handling</li>
                        <li>✅ Collections and generics</li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>💡 Next Steps:</strong>
                    <ul>
                        <li>Build real Java projects</li>
                        <li>Learn Java frameworks (Spring, Hibernate)</li>
                        <li>Explore Java Enterprise Edition (JEE)</li>
                        <li>Practice data structures and algorithms</li>
                        <li>Contribute to open-source Java projects</li>
                    </ul>
                </div>
            `
        }
    }
};