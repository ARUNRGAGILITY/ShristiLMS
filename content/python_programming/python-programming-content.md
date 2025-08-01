# Python Basics - Complete Course

## What is Python?

Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum and first released in 1991, Python emphasizes code readability with its notable use of significant whitespace. The language's design philosophy emphasizes code readability and a syntax that allows programmers to express concepts in fewer lines of code than might be used in languages such as C++ or Java.

Python is a general-purpose programming language, which means it can be used for a wide variety of applications including web development, data analysis, artificial intelligence, scientific computing, automation, and more. Its versatility and ease of learning have made it one of the most popular programming languages in the world today.

The name "Python" comes from the British comedy group Monty Python, whose Flying Circus was a favorite of Guido van Rossum during language development. This reflects Python's philosophy of making programming fun and accessible to everyone.

```python
# This is Python - simple and readable
print("Hello, World!")
print("Welcome to Python programming!")

# Variables are easy to create
name = "Python"
year = 1991
print(f"{name} was created in {year}")
```

## Why Pythonx?

Python has gained massive popularity due to several compelling reasons that make it an excellent choice for both beginners and experienced developers. First and foremost, Python's syntax is incredibly clean and readable, resembling natural English more than traditional programming languages. This readability reduces the cost of program maintenance and makes it easier for teams to collaborate on projects.

The language offers extensive standard libraries and third-party packages through the Python Package Index (PyPI), which contains hundreds of thousands of packages for virtually any task imaginable. Whether you need to work with web frameworks, data science libraries, machine learning tools, or automation scripts, Python likely has a package that can help you accomplish your goals quickly and efficiently.

Python's interpreted nature means you can write and test code quickly without the compilation step required by languages like C++ or Java. This rapid development cycle is particularly valuable for prototyping, data analysis, and educational purposes where quick iteration is essential.

```python
# Python's simplicity in action
import math
import random

# Generate random numbers and perform calculations
numbers = [random.randint(1, 100) for _ in range(10)]
print("Random numbers:", numbers)

# Calculate statistics
average = sum(numbers) / len(numbers)
max_num = max(numbers)
min_num = min(numbers)

print(f"Average: {average:.2f}")
print(f"Maximum: {max_num}")
print(f"Minimum: {min_num}")
```

## How Python is Different?

Python differs significantly from other programming languages in several key aspects that make it unique and appealing to developers. Unlike compiled languages such as C++ or Java, Python is interpreted, meaning code is executed line by line at runtime rather than being compiled into machine code beforehand. This interpretation allows for greater flexibility and faster development cycles, though it may result in slower execution speed for computationally intensive tasks.

Python uses dynamic typing, which means you don't need to declare variable types explicitly. The interpreter determines the type of a variable based on the value assigned to it. This is different from statically typed languages like Java or C# where you must declare variable types. Dynamic typing makes Python code more concise and flexible, though it can sometimes lead to runtime errors that would be caught at compile time in statically typed languages.

One of Python's most distinctive features is its use of indentation to define code blocks, rather than curly braces {} used in languages like C, Java, or JavaScript. This enforced indentation makes Python code visually consistent and readable, though it can be initially challenging for developers coming from other languages.

```python
# Python uses indentation instead of braces
def greet_user(name):
    if name:
        print(f"Hello, {name}!")
        if len(name) > 5:
            print("You have a long name!")
        else:
            print("Nice to meet you!")
    else:
        print("Hello, stranger!")

# Dynamic typing - no need to declare types
number = 42        # integer
number = 3.14      # now it's a float
number = "Hello"   # now it's a string

print(f"Current value: {number}")
```

## Benefits of Learning Python

Learning Python offers numerous advantages that extend far beyond just acquiring another programming skill. In today's job market, Python consistently ranks among the most in-demand programming languages across various industries. From software development and web development to data science and artificial intelligence, Python skills open doors to diverse and lucrative career opportunities.

The learning curve for Python is relatively gentle compared to other programming languages, making it an excellent first language for beginners. Its syntax closely resembles natural language, allowing new programmers to focus on learning programming concepts rather than struggling with complex syntax. This accessibility has made Python a popular choice in educational institutions worldwide, from elementary schools to universities.

Python's versatility means that once you learn it, you can apply your skills to numerous domains. You can build web applications using frameworks like Django or Flask, analyze data with pandas and NumPy, create machine learning models with scikit-learn or TensorFlow, automate repetitive tasks, develop games, or even control hardware devices. This versatility provides excellent career flexibility and growth opportunities.

```python
# Python in data analysis
import pandas as pd
import matplotlib.pyplot as plt

# Create sample data
data = {
    'Month': ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    'Sales': [1200, 1350, 1100, 1500, 1800],
    'Profit': [200, 300, 150, 400, 600]
}

df = pd.DataFrame(data)
print("Sales Data:")
print(df)

# Simple analysis
total_sales = df['Sales'].sum()
average_profit = df['Profit'].mean()

print(f"\nTotal Sales: ${total_sales}")
print(f"Average Profit: ${average_profit:.2f}")
```

## Python Installation

Installing Python on your computer is straightforward and varies slightly depending on your operating system. For Windows users, visit the official Python website (python.org) and download the latest version of Python 3. During installation, make sure to check the box that says "Add Python to PATH" - this crucial step allows you to run Python from any command prompt or terminal. The installer will set up Python along with pip (Python's package installer) and IDLE (Python's integrated development environment).

Mac users have Python 2.7 pre-installed, but it's recommended to install Python 3 separately. You can download it from python.org or use package managers like Homebrew. With Homebrew installed, simply run `brew install python` in the terminal. This will install Python 3 along with pip. Most Linux distributions come with Python pre-installed, but you may need to install Python 3 specifically using your distribution's package manager.

After installation, verify that Python is correctly installed by opening a terminal or command prompt and typing `python --version` or `python3 --version`. You should see the version number displayed. Similarly, check pip installation with `pip --version`. These tools are essential for Python development and package management.

```python
# Check Python installation and system information
import sys
import platform

print("Python Version Information:")
print(f"Python version: {sys.version}")
print(f"Python executable: {sys.executable}")
print(f"Platform: {platform.system()} {platform.release()}")
print(f"Architecture: {platform.architecture()[0]}")

# Check if important modules are available
modules_to_check = ['os', 'math', 'random', 'datetime', 'json']
print("\nAvailable standard modules:")
for module in modules_to_check:
    try:
        __import__(module)
        print(f"✓ {module} is available")
    except ImportError:
        print(f"✗ {module} is not available")
```

## Python Environment Setup

Setting up an efficient Python development environment is crucial for productive programming. While Python comes with IDLE (Integrated Development and Learning Environment), most developers prefer more feature-rich editors or IDEs. Popular choices include Visual Studio Code (free, lightweight, with excellent Python extensions), PyCharm (comprehensive IDE with both community and professional versions), Sublime Text, Atom, or vim/emacs for those preferring terminal-based editors.

Visual Studio Code with the Python extension is particularly recommended for beginners and professionals alike. It provides syntax highlighting, code completion, debugging capabilities, integrated terminal, and git support. The Python extension adds features like linting (code quality checking), formatting, and intelligent code suggestions. To set up VS Code for Python, install VS Code, then install the Python extension from the marketplace.

For project management, consider using virtual environments (covered later) to isolate project dependencies. This practice prevents conflicts between different projects that might require different versions of the same package. Additionally, familiarize yourself with the terminal or command prompt, as many Python tools and packages are managed through command-line interfaces.

```python
# Environment information script
import os
import sys
from pathlib import Path

print("Python Development Environment Setup Check")
print("=" * 50)

# Check Python path and version
print(f"Python executable: {sys.executable}")
print(f"Python version: {sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}")
print(f"Python path: {sys.path[0]}")

# Check current working directory
print(f"Current working directory: {os.getcwd()}")

# Check home directory
home_dir = Path.home()
print(f"Home directory: {home_dir}")

# Check environment variables
python_path = os.environ.get('PYTHONPATH', 'Not set')
path = os.environ.get('PATH', '')
print(f"PYTHONPATH: {python_path}")
print(f"Python in PATH: {'python' in path.lower()}")
```

## Python Cloud Programming Options

Cloud-based Python development environments have revolutionized how we learn and develop Python applications, especially for beginners who want to start coding immediately without local setup complexities. Google Colab (Colaboratory) is perhaps the most popular choice, offering free access to Python environments with pre-installed data science libraries like NumPy, pandas, and even GPU/TPU support for machine learning projects. Colab runs in your browser and allows you to write, execute, and share Python code in notebook format.

GitHub Codespaces provides cloud-based development environments directly integrated with GitHub repositories. You can spin up a full Visual Studio Code environment in the cloud with all your project dependencies pre-configured. This is particularly useful for team collaboration and ensuring consistent development environments across different machines. Codespaces offers a certain amount of free usage time per month for personal accounts.

Other notable cloud options include Replit (excellent for beginners with collaborative features), Jupyter notebooks on various cloud platforms (AWS SageMaker, Azure Notebooks, IBM Watson Studio), and Gitpod (which creates development environments from GitHub repositories). These platforms are invaluable for learning, prototyping, and even production development when local resources are limited.

```python
# Cloud environment detection and setup script
import sys
import os
import platform

def detect_cloud_environment():
    """Detect if running in a cloud environment"""
    environments = {
        'Google Colab': 'google.colab' in sys.modules,
        'Kaggle': 'kaggle_secrets' in sys.modules,
        'AWS SageMaker': '/opt/ml' in os.environ.get('PATH', ''),
        'Azure Notebooks': 'AZUREML_' in str(os.environ),
        'Replit': 'REPLIT_DB_URL' in os.environ,
        'GitHub Codespaces': 'CODESPACES' in os.environ
    }
  
    detected = [env for env, condition in environments.items() if condition]
    return detected if detected else ['Local Environment']

# Display environment information
print("Cloud Environment Detection")
print("=" * 30)
print(f"Environment: {detect_cloud_environment()}")
print(f"Platform: {platform.system()}")
print(f"Python version: {sys.version}")

# Check available resources
if 'google.colab' in sys.modules:
    print("\n🚀 Running in Google Colab!")
    print("GPU/TPU available through Runtime menu")
    # Check for GPU
    try:
        import torch
        print(f"PyTorch GPU available: {torch.cuda.is_available()}")
    except ImportError:
        print("PyTorch not installed")
```

## Python Interpreted Language Architecture

Understanding Python's architecture as an interpreted language is crucial for grasping how Python code executes and why it behaves differently from compiled languages. When you write Python code, the Python interpreter reads your source code (.py files) and converts it into bytecode (.pyc files), which is a lower-level, platform-independent representation of your code. This bytecode is then executed by the Python Virtual Machine (PVM), which is the runtime engine of Python.

The interpretation process happens in several steps: lexical analysis (breaking code into tokens), parsing (creating an Abstract Syntax Tree), compilation to bytecode, and finally execution by the PVM. This multi-step process allows Python to catch syntax errors before execution begins, while still maintaining the flexibility of an interpreted language. The bytecode compilation is cached in __pycache__ directories to speed up subsequent executions of the same code.

Python's interpreted nature brings both advantages and trade-offs. Advantages include platform independence (bytecode can run on any system with Python installed), dynamic features (code can be modified at runtime), and rapid development cycles (no compilation step needed). The trade-off is generally slower execution speed compared to compiled languages, though this is often mitigated by Python's ability to interface with C libraries and the availability of performance optimization tools.

```python
# Demonstration of Python's interpretation process
import dis
import py_compile
import os

def sample_function(x, y):
    """Sample function to demonstrate bytecode compilation"""
    result = x + y
    if result > 10:
        return result * 2
    else:
        return result

# Display bytecode for the function
print("Python Bytecode for sample_function:")
print("=" * 40)
dis.dis(sample_function)

# Demonstrate compilation to .pyc file
print("\nCompiling Python source to bytecode:")
source_file = 'temp_demo.py'
with open(source_file, 'w') as f:
    f.write('''
def demo():
    print("This is a demo function")
    return 42
''')

try:
    py_compile.compile(source_file, doraise=True)
    print(f"✓ Successfully compiled {source_file}")
    print("Bytecode file created in __pycache__ directory")
except py_compile.PyCompileError as e:
    print(f"✗ Compilation error: {e}")
finally:
    # Clean up
    if os.path.exists(source_file):
        os.remove(source_file)
```

## Simple Python Program

Creating your first Python program is an exciting milestone in your programming journey. Python programs are essentially text files with a .py extension containing Python code. Let's start with the traditional "Hello, World!" program, which is often the first program written in any programming language. This simple program introduces you to Python's print function and basic syntax structure.

A Python program can be as simple as a single line or as complex as thousands of lines spread across multiple files. The beauty of Python lies in its simplicity - you don't need complex boilerplate code or lengthy setup procedures to create functional programs. Every Python statement executes sequentially from top to bottom unless flow control statements modify this behavior.

When you run a Python program, the interpreter reads your code file and executes each statement in order. This immediate execution makes Python excellent for testing ideas quickly, learning programming concepts, and building prototypes. As your programs grow more complex, you'll organize code into functions, classes, and modules, but the fundamental execution model remains the same.

```python
# Your first Python program - Hello World variations
print("Hello, World!")
print("Welcome to Python programming")

# Using variables in your first program
programmer_name = "Future Python Developer"
current_year = 2024
print(f"Hello, {programmer_name}!")
print(f"Welcome to Python programming in {current_year}")

# Simple interactive program
name = input("What's your name? ")
age = input("How old are you? ")
print(f"Nice to meet you, {name}!")
print(f"So you're {age} years old. Python is great for all ages!")

# Basic calculation program
print("\n--- Simple Calculator ---")
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
result = num1 + num2
print(f"The sum of {num1} and {num2} is {result}")

# Program with basic error handling
try:
    temperature_f = float(input("Enter temperature in Fahrenheit: "))
    temperature_c = (temperature_f - 32) * 5/9
    print(f"{temperature_f}°F is equal to {temperature_c:.2f}°C")
except ValueError:
    print("Please enter a valid number!")
```

## Comments and Basic Syntax

Comments are essential elements in Python programming that allow you to document your code and make it more readable for yourself and others. Python supports single-line comments using the hash symbol (#) and multi-line comments using triple quotes (''' or """). Comments are ignored by the Python interpreter and serve purely as documentation for human readers.

Single-line comments can appear on their own line or at the end of a code line. They're perfect for brief explanations, notes, or temporarily disabling code during testing. Multi-line comments, technically docstrings when used properly, are ideal for longer explanations, function documentation, or providing detailed information about complex code sections.

Python's syntax emphasizes readability and simplicity. Unlike many programming languages that use semicolons to end statements, Python uses line breaks. Indentation is syntactically significant in Python - it's used to define code blocks instead of curly braces. This forced indentation makes Python code consistently readable and reduces the likelihood of certain types of errors common in other languages.

```python
# This is a single-line comment
# Comments help explain what your code does

# You can have multiple single-line comments
# to explain complex concepts

"""
This is a multi-line comment
or docstring. It can span
multiple lines and is often used
for detailed explanations.
"""

# Basic syntax examples
name = "Python"  # This comment explains the variable
print(name)      # This prints the variable

# Indentation is crucial in Python
if True:
    print("This line is indented")
    print("This line is also indented")
print("This line is not indented")

# Multiple statements can be on one line (not recommended)
x = 1; y = 2; z = 3

# Long lines can be continued with backslash
long_string = "This is a very long string that " + \
              "continues on the next line"

# Or use parentheses for implicit line continuation
total = (1 + 2 + 3 +
         4 + 5 + 6)

# Function with docstring (multi-line comment)
def greet(name):
    """
    This function greets a person with their name.
  
    Args:
        name (str): The name of the person to greet
  
    Returns:
        str: A greeting message
    """
    return f"Hello, {name}!"

print(greet("World"))
```

## Basic Data Types

Python provides several built-in data types that form the foundation of all Python programs. Understanding these basic data types is crucial for effective Python programming. The fundamental data types include integers (int), floating-point numbers (float), complex numbers (complex), booleans (bool), and strings (str). Each data type has specific characteristics, methods, and use cases that make them suitable for different programming scenarios.

Integers in Python can be of unlimited size (limited only by available memory), which is different from many other programming languages that have fixed-size integers. Floating-point numbers follow the IEEE 754 standard and are used for decimal numbers. Complex numbers include both real and imaginary parts and are useful in mathematical computations. Booleans represent True or False values and are fundamental to conditional logic and decision-making in programs.

Strings in Python are sequences of characters enclosed in single, double, or triple quotes. They are immutable, meaning once created, their content cannot be changed. However, you can create new strings based on existing ones. Python provides extensive string methods for manipulation, formatting, and analysis, making text processing one of Python's strong suits.

```python
# Integer examples
age = 25
population = 7800000000
negative_number = -42
print(f"Age: {age}, Population: {population}, Negative: {negative_number}")
print(f"Type of age: {type(age)}")

# Float examples
temperature = 98.6
pi = 3.14159
scientific_notation = 1.5e6  # 1,500,000
print(f"Temperature: {temperature}, Pi: {pi}, Scientific: {scientific_notation}")

# Complex numbers
complex_num1 = 3 + 4j
complex_num2 = complex(2, -3)
print(f"Complex numbers: {complex_num1}, {complex_num2}")
print(f"Real part: {complex_num1.real}, Imaginary part: {complex_num1.imag}")

# Boolean examples
is_student = True
has_license = False
print(f"Is student: {is_student}, Has license: {has_license}")
print(f"Boolean operations: {is_student and has_license}, {is_student or has_license}")

# String examples
first_name = "John"
last_name = 'Doe'
full_description = """This is a multi-line string
that can contain line breaks
and special characters."""

print(f"Name: {first_name} {last_name}")
print(f"Description: {full_description}")

# Type checking and conversion
number_string = "123"
converted_number = int(number_string)
print(f"Original: {number_string} (type: {type(number_string)})")
print(f"Converted: {converted_number} (type: {type(converted_number)})")
```

## Variables and Values

Variables in Python are names that refer to objects stored in memory. Unlike some programming languages where variables are containers that hold values, Python variables are references or labels that point to objects. This distinction is important for understanding how Python handles memory management and variable assignment. When you assign a value to a variable, you're creating a reference from the variable name to the object containing that value.

Python uses dynamic typing, which means you don't need to declare the type of a variable explicitly. The type is determined automatically based on the value assigned to it. A variable can be reassigned to hold objects of different types throughout the program's execution. This flexibility makes Python code more concise but requires careful attention to ensure variables contain the expected data types.

Variable scope determines where in your program a variable can be accessed. Python has several scopes: local scope (inside functions), enclosing scope (in nested functions), global scope (module level), and built-in scope (built-in names). Understanding scope is crucial for writing maintainable code and avoiding naming conflicts. The LEGB rule (Local, Enclosing, Global, Built-in) determines the order in which Python searches for variable names.

```python
# Variable assignment and types
name = "Alice"           # String
age = 30                # Integer  
height = 5.6            # Float
is_programmer = True    # Boolean

print(f"Name: {name}, Age: {age}, Height: {height}, Programmer: {is_programmer}")

# Dynamic typing - variables can change types
data = 42
print(f"data is {data} (type: {type(data)})")
data = "Hello"
print(f"data is now '{data}' (type: {type(data)})")
data = [1, 2, 3]
print(f"data is now {data} (type: {type(data)})")

# Global vs Local scope demonstration
global_var = "I'm global"

def demonstrate_scope():
    local_var = "I'm local"
    global global_var
  
    print(f"Inside function - Global: {global_var}")
    print(f"Inside function - Local: {local_var}")
  
    # Modifying global variable
    global_var = "Modified global"

print(f"Before function call: {global_var}")
demonstrate_scope()
print(f"After function call: {global_var}")

# Variable naming conventions and rules
valid_name = "Valid"
_private_var = "Convention for private variables"
CONSTANT_VALUE = "Convention for constants"
camelCase = "Valid but not Pythonic"
snake_case = "Pythonic naming style"

# Invalid variable names (commented out to avoid errors)
# 2invalid = "Cannot start with number"
# class = "Cannot use reserved keywords"
# my-var = "Cannot use hyphens"

print("Variable naming examples:")
print(f"Valid: {valid_name}")
print(f"Private: {_private_var}")
print(f"Constant: {CONSTANT_VALUE}")
print(f"Snake case: {snake_case}")
```

## Python Built-in Collection Types

Python provides four primary built-in collection types that are essential for organizing and manipulating data: lists, tuples, sets, and dictionaries. Each collection type has unique characteristics that make it suitable for different use cases. Lists are ordered, mutable collections that can contain duplicate elements. Tuples are ordered, immutable collections that also allow duplicates. Sets are unordered collections of unique elements, while dictionaries are unordered collections of key-value pairs.

Lists are perhaps the most versatile collection type in Python. They can store elements of different data types, can be modified after creation (mutable), and maintain the order of elements. Lists support indexing, slicing, and a wide variety of methods for adding, removing, and manipulating elements. They're ideal for scenarios where you need an ordered collection that can change size and content during program execution.

Tuples are similar to lists but are immutable, meaning their content cannot be changed after creation. This immutability makes tuples useful for storing data that shouldn't change, such as coordinates, RGB color values, or database records. Tuples are also more memory-efficient than lists and can be used as dictionary keys (unlike lists). Sets are perfect for eliminating duplicates from data and performing mathematical set operations like union, intersection, and difference.

```python
# Lists - ordered, mutable collections
fruits = ["apple", "banana", "cherry", "apple"]  # Duplicates allowed
print(f"Fruits list: {fruits}")
print(f"First fruit: {fruits[0]}")
print(f"Last fruit: {fruits[-1]}")

# List methods
fruits.append("orange")        # Add to end
fruits.insert(1, "grape")     # Insert at specific position
fruits.remove("apple")        # Remove first occurrence
print(f"Modified fruits: {fruits}")

# List slicing
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(f"Numbers 2-5: {numbers[2:6]}")
print(f"First 3 numbers: {numbers[:3]}")
print(f"Last 3 numbers: {numbers[-3:]}")

# Tuples - ordered, immutable collections
coordinates = (10, 20)
rgb_color = (255, 128, 0)
person_info = ("John", 25, "Engineer")

print(f"Coordinates: {coordinates}")
print(f"X coordinate: {coordinates[0]}")
print(f"Person info: {person_info}")

# Tuple unpacking
name, age, profession = person_info
print(f"Unpacked - Name: {name}, Age: {age}, Profession: {profession}")

# Sets - unordered collections of unique elements
colors = {"red", "green", "blue", "red"}  # Duplicate "red" removed
print(f"Colors set: {colors}")

# Set operations
primary_colors = {"red", "green", "blue"}
warm_colors = {"red", "orange", "yellow"}

print(f"Primary colors: {primary_colors}")
print(f"Warm colors: {warm_colors}")
print(f"Union: {primary_colors | warm_colors}")
print(f"Intersection: {primary_colors & warm_colors}")
print(f"Difference: {primary_colors - warm_colors}")

# Dictionaries - key-value pairs
student = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science",
    "gpa": 3.8
}

print(f"Student info: {student}")
print(f"Student name: {student['name']}")
print(f"Student GPA: {student.get('gpa', 'Not available')}")

# Dictionary methods
student["graduation_year"] = 2025  # Add new key-value pair
student.update({"age": 21, "email": "alice@email.com"})  # Update multiple
print(f"Updated student: {student}")
print(f"All keys: {list(student.keys())}")
print(f"All values: {list(student.values())}")
```

## Operators and Expressions

Python provides a comprehensive set of operators that allow you to perform various operations on data. Understanding these operators is fundamental to writing effective Python code. Arithmetic operators perform mathematical calculations, comparison operators compare values, logical operators work with boolean values, assignment operators assign and modify variables, bitwise operators work at the bit level, and identity/membership operators test relationships between objects.

Arithmetic operators include addition (+), subtraction (-), multiplication (*), division (/), floor division (//), modulus (%), and exponentiation (**). These operators follow standard mathematical precedence rules, but you can use parentheses to override the default order. Python's division operator always returns a float, while floor division returns an integer result of the division.

Comparison and logical operators are essential for making decisions in your programs. Comparison operators return boolean values and include equal to (==), not equal to (!=), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=). Logical operators (and, or, not) combine boolean expressions and are crucial for complex conditional statements.

```python
# Arithmetic operators
a, b = 15, 4
print("Arithmetic Operations:")
print(f"{a} + {b} = {a + b}")        # Addition
print(f"{a} - {b} = {a - b}")        # Subtraction  
print(f"{a} * {b} = {a * b}")        # Multiplication
print(f"{a} / {b} = {a / b}")        # Division (float result)
print(f"{a} // {b} = {a // b}")      # Floor division (integer result)
print(f"{a} % {b} = {a % b}")        # Modulus (remainder)
print(f"{a} ** {b} = {a ** b}")      # Exponentiation

# Comparison/Relational operators
x, y = 10, 20
print(f"\nComparison Operations (x={x}, y={y}):")
print(f"x == y: {x == y}")           # Equal to
print(f"x != y: {x != y}")           # Not equal to
print(f"x > y: {x > y}")             # Greater than
print(f"x < y: {x < y}")             # Less than
print(f"x >= y: {x >= y}")           # Greater than or equal
print(f"x <= y: {x <= y}")           # Less than or equal

# Logical operators
p, q = True, False
print(f"\nLogical Operations (p={p}, q={q}):")
print(f"p and q: {p and q}")         # Logical AND
print(f"p or q: {p or q}")           # Logical OR
print(f"not p: {not p}")             # Logical NOT

# Assignment operators
num = 10
print(f"\nAssignment Operations (starting with num={num}):")
num += 5    # num = num + 5
print(f"After num += 5: {num}")
num -= 3    # num = num - 3
print(f"After num -= 3: {num}")
num *= 2    # num = num * 2
print(f"After num *= 2: {num}")
num //= 4   # num = num // 4
print(f"After num //= 4: {num}")

# Bitwise operators (working with binary representations)
m, n = 12, 7  # 12 = 1100, 7 = 0111 in binary
print(f"\nBitwise Operations (m={m}, n={n}):")
print(f"m & n: {m & n}")             # Bitwise AND
print(f"m | n: {m | n}")             # Bitwise OR
print(f"m ^ n: {m ^ n}")             # Bitwise XOR
print(f"~m: {~m}")                   # Bitwise NOT
print(f"m << 2: {m << 2}")           # Left shift
print(f"m >> 2: {m >> 2}")           # Right shift

# Identity and membership operators
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1

print("\nIdentity Operations:")
print(f"list1 is list2: {list1 is list2}")       # Same object?
print(f"list1 is list3: {list1 is list3}")       # Same object?
print(f"list1 == list2: {list1 == list2}")       # Same content?

print("\nMembership Operations:")
print(f"2 in list1: {2 in list1}")               # Element in list?
print(f"5 not in list1: {5 not in list1}")       # Element not in list?

# Walrus operator (Python 3.8+)
print("\nWalrus Operator (:=):")
if (length := len("Python")) > 5:
    print(f"The word 'Python' has {length} characters, which is more than 5")
```

## Python Control Statements

Control statements in Python allow you to make decisions and execute different code paths based on conditions. The primary control statements are if, if-else, if-elif-else, nested if statements, ternary operators, and the newer match-case statement (Python 3.10+). These statements form the backbone of program logic and enable your programs to respond dynamically to different situations and input values.

The basic if statement executes a block of code only when a specified condition is true. The if-else statement provides an alternative path when the condition is false. The if-elif-else statement allows you to test multiple conditions in sequence, executing the first matching condition's code block. This is particularly useful when you have multiple mutually exclusive conditions to test.

Nested if statements allow you to place if statements inside other if statements, creating more complex decision trees. While powerful, deeply nested conditions can make code difficult to read and maintain, so use them judiciously. The ternary operator provides a concise way to write simple if-else statements in a single line, making code more compact when appropriate.

```python
# Basic if statement
temperature = 75
if temperature > 70:
    print("It's warm outside!")
    print("Perfect weather for outdoor activities")

# if-else statement
age = 17
if age >= 18:
    print("You are eligible to vote")
else:
    print("You are not old enough to vote yet")
    print(f"You need to wait {18 - age} more years")

# if-elif-else statement
score = 85
if score >= 90:
    grade = "A"
    print("Excellent work!")
elif score >= 80:
    grade = "B"
    print("Good job!")
elif score >= 70:
    grade = "C"
    print("Satisfactory")
elif score >= 60:
    grade = "D"
    print("Needs improvement")
else:
    grade = "F"
    print("Failed - please study harder")

print(f"Your grade is: {grade}")

# Nested if statements
username = "admin"
password = "secret123"
user_role = "administrator"

if username == "admin":
    if password == "secret123":
        if user_role == "administrator":
            print("Full access granted")
            print("Welcome, Administrator!")
        else:
            print("Limited access granted")
    else:
        print("Invalid password")
else:
    print("Invalid username")

# Ternary operator (conditional expression)
number = 15
result = "Even" if number % 2 == 0 else "Odd"
print(f"{number} is {result}")

# Multiple conditions with logical operators
weather = "sunny"
temperature = 72
has_umbrella = True

if weather == "sunny" and temperature > 65:
    print("Perfect day for a picnic!")
elif weather == "rainy" and has_umbrella:
    print("Good thing you have an umbrella!")
elif weather == "rainy" and not has_umbrella:
    print("You might get wet - find shelter!")
else:
    print("Check the weather and dress appropriately")

# Match-case statement (Python 3.10+)
def handle_http_status(status_code):
    match status_code:
        case 200:
            return "OK - Request successful"
        case 404:
            return "Not Found - Resource doesn't exist"
        case 500:
            return "Internal Server Error"
        case 401 | 403:  # Multiple values
            return "Authentication/Authorization error"
        case code if 400 <= code < 500:  # Guard condition
            return f"Client error: {code}"
        case code if 500 <= code < 600:  # Guard condition
            return f"Server error: {code}"
        case _:  # Default case
            return f"Unknown status code: {status_code}"

# Test match-case
test_codes = [200, 404, 401, 418, 500, 999]
for code in test_codes:
    print(f"Status {code}: {handle_http_status(code)}")
```

## Python Flow Statements

Flow control statements in Python manage the execution flow of your programs through loops and jump statements. The primary loop structures are for loops and while loops, each serving different purposes in program control. For loops are ideal for iterating over sequences (like lists, strings, or ranges) when you know the number of iterations or have a specific collection to process. While loops continue executing as long as a condition remains true, making them perfect for situations where the number of iterations is unknown.

The break statement allows you to exit a loop prematurely when a certain condition is met, while the continue statement skips the rest of the current iteration and moves to the next one. The pass statement serves as a placeholder that does nothing, useful when Python syntax requires a statement but you don't want to execute any code. The return statement is used in functions to exit the function and optionally return a value to the caller.

Understanding when and how to use these flow control mechanisms is crucial for writing efficient and readable Python code. Proper use of loops can eliminate code repetition, while break and continue statements provide fine-grained control over loop execution. These tools work together to create powerful and flexible program logic.

```python
# For loop examples
print("For Loop Examples:")
print("=" * 30)

# Iterating over a list
fruits = ["apple", "banana", "cherry", "date"]
for fruit in fruits:
    print(f"I like {fruit}")

# Using range() function
print("\nCounting from 1 to 5:")
for i in range(1, 6):
    print(f"Number: {i}")

# For loop with enumerate (get index and value)
print("\nFruits with their positions:")
for index, fruit in enumerate(fruits, 1):
    print(f"{index}. {fruit}")

# While loop examples
print("\nWhile Loop Examples:")
print("=" * 30)

count = 1
while count <= 5:
    print(f"Count is: {count}")
    count += 1

# While loop with user input
print("\nGuessing game (enter 'quit' to stop):")
secret_number = 7
guess = 0
attempts = 0

while guess != secret_number and attempts < 3:
    try:
        user_input = input("Guess a number between 1-10: ")
        if user_input.lower() == 'quit':
            break
        guess = int(user_input)
        attempts += 1
      
        if guess == secret_number:
            print(f"Congratulations! You guessed it in {attempts} attempts!")
        elif attempts < 3:
            if guess < secret_number:
                print("Too low!")
            else:
                print("Too high!")
    except ValueError:
        print("Please enter a valid number or 'quit'")

# Break and continue examples
print("\nBreak and Continue Examples:")
print("=" * 35)

# Break example - find first even number
numbers = [1, 3, 7, 8, 11, 12, 15]
for num in numbers:
    if num % 2 == 0:
        print(f"First even number found: {num}")
        break
    print(f"Checking {num} - not even")

# Continue example - skip odd numbers
print("\nEven numbers only:")
for num in range(1, 11):
    if num % 2 != 0:
        continue  # Skip odd numbers
    print(f"Even number: {num}")

# Break vs Continue comparison
print("\nBreak vs Continue in action:")
for i in range(1, 8):
    if i == 3:
        print(f"Skipping {i} with continue")
        continue
    if i == 6:
        print(f"Breaking at {i}")
        break
    print(f"Processing {i}")

# Pass statement example
print("\nPass Statement Example:")
for i in range(3):
    if i == 1:
        pass  # Placeholder - do nothing for now
    else:
        print(f"Processing item {i}")

# Nested loops with flow control
print("\nNested Loops with Flow Control:")
for i in range(1, 4):
    print(f"Outer loop: {i}")
    for j in range(1, 4):
        if j == 2:
            continue  # Skip inner loop iteration
        print(f"  Inner loop: {j}")
    if i == 2:
        print("  Breaking outer loop")
        break

# Return statement in functions
def find_max_in_list(numbers):
    """Find maximum number in a list with early return"""
    if not numbers:  # Empty list
        return None
  
    max_num = numbers[0]
    for num in numbers[1:]:
        if num > max_num:
            max_num = num
  
    return max_num  # Return the result

test_numbers = [3, 7, 2, 9, 1, 8]
result = find_max_in_list(test_numbers)
print(f"\nMaximum number in {test_numbers} is: {result}")
```

## Python Functions

Functions are reusable blocks of code that perform specific tasks and are fundamental building blocks of Python programming. They help organize code, reduce repetition, and make programs more modular and maintainable. A function is defined using the `def` keyword, followed by the function name, parameters in parentheses, and a colon. The function body is indented and can contain any valid Python code, including return statements to send values back to the caller.

Functions can accept parameters (inputs) and return values (outputs), making them flexible and powerful. Parameters allow you to pass data into functions, while return values let functions send results back to the calling code. Python functions support default parameters, keyword arguments, variable-length arguments (*args), and keyword variable-length arguments (**kwargs), providing great flexibility in how functions can be called and used.

Understanding function scope is crucial - variables defined inside functions are local to that function and cannot be accessed outside it unless explicitly returned or declared as global. This encapsulation helps prevent naming conflicts and makes code more predictable and easier to debug.

```python
# Basic function definition and calling
def greet():
    """Simple function with no parameters"""
    print("Hello, World!")
    print("Welcome to Python functions!")

# Call the function
greet()

# Function with parameters
def greet_person(name, age):
    """Function with parameters"""
    print(f"Hello, {name}!")
    print(f"You are {age} years old.")

greet_person("Alice", 25)

# Function with return value
def add_numbers(a, b):
    """Function that returns a value"""
    result = a + b
    return result

sum_result = add_numbers(10, 15)
print(f"The sum is: {sum_result}")

# Function with default parameters
def introduce(name, age=18, city="Unknown"):
    """Function with default parameter values"""
    return f"Hi, I'm {name}, {age} years old, from {city}"

print(introduce("Bob"))
print(introduce("Carol", 22))
print(introduce("Dave", 30, "New York"))

# Function with multiple return values
def calculate_stats(numbers):
    """Function returning multiple values"""
    if not numbers:
        return 0, 0, 0
  
    total = sum(numbers)
    average = total / len(numbers)
    maximum = max(numbers)
  
    return total, average, maximum

data = [10, 20, 30, 40, 50]
total, avg, max_val = calculate_stats(data)
print(f"Total: {total}, Average: {avg:.2f}, Maximum: {max_val}")

# Function with variable arguments (*args)
def sum_all(*numbers):
    """Function that accepts variable number of arguments"""
    total = 0
    for num in numbers:
        total += num
    return total

print(f"Sum of 1,2,3: {sum_all(1, 2, 3)}")
print(f"Sum of 1,2,3,4,5: {sum_all(1, 2, 3, 4, 5)}")

# Function with keyword arguments (**kwargs)
def create_profile(**details):
    """Function that accepts keyword arguments"""
    print("Profile Information:")
    for key, value in details.items():
        print(f"  {key.title()}: {value}")

create_profile(name="John", age=28, profession="Engineer", city="Boston")

# Combining different parameter types
def advanced_function(required_param, default_param="default", *args, **kwargs):
    """Function demonstrating all parameter types"""
    print(f"Required: {required_param}")
    print(f"Default: {default_param}")
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

advanced_function("must_provide", "custom", 1, 2, 3, name="Alice", age=30)

# Local vs Global scope
global_var = "I'm global"

def scope_demo():
    local_var = "I'm local"
    global global_var  # Access global variable
  
    print(f"Inside function - Global: {global_var}")
    print(f"Inside function - Local: {local_var}")
  
    global_var = "Modified by function"

print(f"Before function: {global_var}")
scope_demo()
print(f"After function: {global_var}")

# Recursive function example
def factorial(n):
    """Calculate factorial using recursion"""
    if n <= 1:
        return 1
    else:
        return n * factorial(n - 1)

print(f"Factorial of 5: {factorial(5)}")

# Function as first-class objects
def square(x):
    return x ** 2

def cube(x):
    return x ** 3

# Functions can be assigned to variables
my_function = square
print(f"Square of 4: {my_function(4)}")

# Functions can be passed as arguments
def apply_operation(numbers, operation):
    """Apply an operation to all numbers in a list"""
    return [operation(num) for num in numbers]

numbers = [1, 2, 3, 4, 5]
squared = apply_operation(numbers, square)
cubed = apply_operation(numbers, cube)

print(f"Original: {numbers}")
print(f"Squared: {squared}")
print(f"Cubed: {cubed}")
```

## Python Lambda Functions

Lambda functions, also known as anonymous functions, are small, inline functions that can be defined without a name using the `lambda` keyword. They are particularly useful for short, simple functions that are used once or passed as arguments to higher-order functions. Lambda functions can only contain expressions, not statements, and automatically return the result of their expression without needing an explicit return statement.

The syntax for lambda functions is: `lambda arguments: expression`. While lambda functions are more concise than regular functions for simple operations, they should be used judiciously. They're most effective when used with functions like `map()`, `filter()`, `sort()`, and `reduce()`, or when you need a simple function for a short period of time.

Lambda functions have some limitations compared to regular functions: they can only contain expressions (not statements), they cannot include type annotations, and they can be harder to read and debug when they become complex. For anything more than simple operations, regular functions are generally preferred for better readability and maintainability.

```python
# Basic lambda function examples
# Regular function
def square_regular(x):
    return x ** 2

# Equivalent lambda function
square_lambda = lambda x: x ** 2

print(f"Regular function: {square_regular(5)}")
print(f"Lambda function: {square_lambda(5)}")

# Lambda with multiple arguments
add = lambda x, y: x + y
multiply = lambda x, y, z: x * y * z

print(f"Addition: {add(10, 5)}")
print(f"Multiplication: {multiply(2, 3, 4)}")

# Lambda with conditional expression
absolute_value = lambda x: x if x >= 0 else -x
max_of_two = lambda a, b: a if a > b else b

print(f"Absolute value of -7: {absolute_value(-7)}")
print(f"Max of 15 and 23: {max_of_two(15, 23)}")

# Using lambda with map()
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
doubled = list(map(lambda x: x * 2, numbers))

print(f"Original numbers: {numbers}")
print(f"Squared: {squared}")
print(f"Doubled: {doubled}")

# Using lambda with filter()
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
greater_than_five = list(filter(lambda x: x > 5, numbers))

print(f"All numbers: {numbers}")
print(f"Even numbers: {even_numbers}")
print(f"Greater than 5: {greater_than_five}")

# Using lambda with sorted() for custom sorting
students = [
    ("Alice", 85),
    ("Bob", 90),
    ("Charlie", 78),
    ("Diana", 92)
]

# Sort by grade (second element)
sorted_by_grade = sorted(students, key=lambda student: student[1])
# Sort by name length
sorted_by_name_length = sorted(students, key=lambda student: len(student[0]))

print("Students sorted by grade:")
for name, grade in sorted_by_grade:
    print(f"  {name}: {grade}")

print("Students sorted by name length:")
for name, grade in sorted_by_name_length:
    print(f"  {name}: {grade}")

# Lambda with reduce() (requires import)
from functools import reduce

numbers = [1, 2, 3, 4, 5]
product = reduce(lambda x, y: x * y, numbers)
sum_all = reduce(lambda x, y: x + y, numbers)

print(f"Product of {numbers}: {product}")
print(f"Sum of {numbers}: {sum_all}")

# Practical example: Data processing with lambdas
data = [
    {"name": "John", "age": 30, "salary": 50000},
    {"name": "Jane", "age": 25, "salary": 60000},
    {"name": "Bob", "age": 35, "salary": 45000},
    {"name": "Alice", "age": 28, "salary": 55000}
]

# Filter employees with salary > 50000
high_earners = list(filter(lambda emp: emp["salary"] > 50000, data))
print("High earners:")
for emp in high_earners:
    print(f"  {emp['name']}: ${emp['salary']}")

# Get list of names of employees under 30
young_employees = list(map(lambda emp: emp["name"], 
                          filter(lambda emp: emp["age"] < 30, data)))
print(f"Employees under 30: {young_employees}")

# Sort employees by age
sorted_by_age = sorted(data, key=lambda emp: emp["age"])
print("Employees sorted by age:")
for emp in sorted_by_age:
    print(f"  {emp['name']}: {emp['age']} years old")

# When NOT to use lambda - complex logic (use regular function instead)
# Bad: Complex lambda (hard to read)
# complex_lambda = lambda x: x ** 2 if x > 0 else abs(x) * 2 if x < -10 else 0

# Good: Regular function for complex logic
def complex_calculation(x):
    """Handle complex calculation logic clearly"""
    if x > 0:
        return x ** 2
    elif x < -10:
        return abs(x) * 2
    else:
        return 0

test_values = [5, -15, -5, 0, 10]
results = [complex_calculation(x) for x in test_values]
print(f"Complex calculation results: {results}")

# Lambda in list comprehensions and generator expressions
numbers = range(1, 11)
process = lambda x: x ** 2 if x % 2 == 0 else x * 3

processed = [process(x) for x in numbers]
print(f"Processed numbers: {processed}")
```

## Python Modules and Packages

Modules and packages are essential for organizing and structuring Python code, enabling code reuse and maintainability. A module is simply a Python file containing code that can be imported and used in other Python programs. Modules can contain functions, classes, variables, and executable statements. Python comes with an extensive standard library of modules, and you can also create your own custom modules or install third-party modules using pip.

The `import` statement is used to bring modules into your program. You can import entire modules, specific functions or classes from modules, or import modules with aliases for convenience. Understanding different import patterns and their implications is crucial for writing clean, maintainable code. Python's module search path determines where the interpreter looks for modules, typically starting with the current directory, then built-in modules, and finally locations in the PYTHONPATH.

Packages are directories containing multiple related modules, organized hierarchically. They must contain an `__init__.py` file (which can be empty) to be recognized as packages. Packages allow you to organize related modules together and create namespace hierarchies, making large codebases more manageable and preventing naming conflicts between modules.

```python
# Different ways to import modules
import math
import random as rand
from datetime import datetime, timedelta
from os import path, getcwd
from collections import Counter, defaultdict

# Using imported modules
print("Module Import Examples:")
print("=" * 30)

# Using math module
radius = 5
area = math.pi * radius ** 2
square_root = math.sqrt(25)
print(f"Circle area (radius {radius}): {area:.2f}")
print(f"Square root of 25: {square_root}")

# Using random module with alias
random_number = rand.randint(1, 100)
random_choice = rand.choice(["apple", "banana", "cherry"])
print(f"Random number: {random_number}")
print(f"Random choice: {random_choice}")

# Using specific imports from datetime
now = datetime.now()
future = now + timedelta(days=30)
print(f"Current time: {now.strftime('%Y-%m-%d %H:%M:%S')}")
print(f"30 days from now: {future.strftime('%Y-%m-%d')}")

# Using os module imports
current_directory = getcwd()
file_exists = path.exists("example.txt")
print(f"Current directory: {current_directory}")
print(f"example.txt exists: {file_exists}")

# Creating a simple module example (would be in separate file)
# File: my_utilities.py
def calculate_bmi(weight, height):
    """Calculate BMI given weight in kg and height in meters"""
    return weight / (height ** 2)

def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit"""
    return (celsius * 9/5) + 32

def is_prime(number):
    """Check if a number is prime"""
    if number < 2:
        return False
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            return False
    return True

# Using the custom module (if it existed as separate file)
# from my_utilities import calculate_bmi, celsius_to_fahrenheit, is_prime

# Since we can't create separate files here, we'll demonstrate the functions directly
print("\nCustom Module Functions:")
print("=" * 30)

bmi = calculate_bmi(70, 1.75)  # 70kg, 1.75m
temp_f = celsius_to_fahrenheit(25)  # 25°C
prime_check = is_prime(17)

print(f"BMI for 70kg, 1.75m: {bmi:.2f}")
print(f"25°C in Fahrenheit: {temp_f:.1f}°F")
print(f"Is 17 prime? {prime_check}")

# Exploring module attributes
print("\nModule Exploration:")
print("=" * 25)

# Module information
print(f"Math module location: {math.__file__}")
print(f"Math module name: {math.__name__}")

# List some math module attributes
math_functions = [attr for attr in dir(math) if not attr.startswith('_')]
print(f"Some math functions: {math_functions[:10]}")

# Using collections module
print("\nCollections Module Examples:")
print("=" * 35)

# Counter example
text = "hello world"
letter_count = Counter(text)
print(f"Letter frequency in '{text}': {letter_count}")

# Most common letters
most_common = letter_count.most_common(3)
print(f"Most common letters: {most_common}")

# defaultdict example
word_groups = defaultdict(list)
words = ["apple", "banana", "apricot", "blueberry", "cherry"]

for word in words:
    first_letter = word[0]
    word_groups[first_letter].append(word)

print("Words grouped by first letter:")
for letter, word_list in word_groups.items():
    print(f"  {letter}: {word_list}")

# Package structure example (conceptual)
print("\nPackage Structure Example:")
print("=" * 35)

# Typical package structure:
# my_package/
#     __init__.py
#     core/
#         __init__.py
#         functions.py
#         classes.py
#     utils/
#         __init__.py
#         helpers.py
#         validators.py

# Importing from packages would look like:
# from my_package.core.functions import some_function
# from my_package.utils.helpers import helper_function
# import my_package.core.classes as core_classes

print("Package structure allows hierarchical organization:")
print("- my_package/")
print("  - __init__.py")
print("  - core/")
print("    - functions.py")
print("    - classes.py")
print("  - utils/")
print("    - helpers.py")

# Module search path
import sys
print(f"\nPython module search path (first 3 locations):")
for i, path_location in enumerate(sys.path[:3], 1):
    print(f"  {i}. {path_location}")

# Creating and using a namespace
class MyModule:
    """Simulate a module using a class"""
  
    @staticmethod
    def greet(name):
        return f"Hello, {name}!"
  
    @staticmethod
    def calculate_area(length, width):
        return length * width
  
    VERSION = "1.0.0"

# Using the "module"
greeting = MyModule.greet("Python Developer")
area = MyModule.calculate_area(10, 5)
print(f"\nNamespace example:")
print(f"Greeting: {greeting}")
print(f"Area: {area}")
print(f"Version: {MyModule.VERSION}")
```

## Python Object-Oriented Programming

Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects and classes rather than functions and logic. In Python, everything is an object, making it naturally object-oriented. A class is a blueprint or template for creating objects, while an object is an instance of a class. Classes encapsulate data (attributes) and behavior (methods) together, promoting code organization, reusability, and maintainability.

The four fundamental principles of OOP are encapsulation, inheritance, polymorphism, and abstraction. Encapsulation involves bundling data and methods that operate on that data within a single unit (class) and controlling access to them. Inheritance allows new classes to be created based on existing classes, inheriting their attributes and methods. Polymorphism enables objects of different classes to be treated as objects of a common base class, while abstraction hides complex implementation details behind simple interfaces.

Python supports all OOP concepts with clean, readable syntax. Classes are defined using the `class` keyword, and objects are created by calling the class as if it were a function. Special methods (dunder methods) like `__init__`, `__str__`, and `__repr__` provide hooks for customizing object behavior with built-in Python operations.

```python
# Basic class definition
class Person:
    """A simple Person class demonstrating basic OOP concepts"""
  
    # Class attribute (shared by all instances)
    species = "Homo sapiens"
  
    def __init__(self, name, age, email):
        """Initialize a new Person instance"""
        # Instance attributes (unique to each instance)
        self.name = name
        self.age = age
        self.email = email
        self.friends = []
  
    def introduce(self):
        """Instance method to introduce the person"""
        return f"Hi, I'm {self.name}, {self.age} years old."
  
    def add_friend(self, friend_name):
        """Add a friend to the person's friend list"""
        if friend_name not in self.friends:
            self.friends.append(friend_name)
            return f"{friend_name} added as a friend!"
        return f"{friend_name} is already a friend!"
  
    def celebrate_birthday(self):
        """Increase age by 1"""
        self.age += 1
        return f"Happy birthday! {self.name} is now {self.age} years old."
  
    # Special methods (dunder methods)
    def __str__(self):
        """String representation for users"""
        return f"Person(name='{self.name}', age={self.age})"
  
    def __repr__(self):
        """String representation for developers"""
        return f"Person('{self.name}', {self.age}, '{self.email}')"

# Creating objects (instances)
person1 = Person("Alice", 25, "alice@email.com")
person2 = Person("Bob", 30, "bob@email.com")

print("Object Creation and Basic Usage:")
print("=" * 40)
print(person1.introduce())
print(person2.introduce())
print(f"Person 1: {person1}")
print(f"Person 1 repr: {repr(person1)}")

# Using methods
print(person1.add_friend("Charlie"))
print(person1.celebrate_birthday())
print(f"Alice's friends: {person1.friends}")

# Accessing class attributes
print(f"Species: {Person.species}")
print(f"Alice's species: {person1.species}")

# Inheritance example
class Student(Person):
    """Student class inheriting from Person"""
  
    def __init__(self, name, age, email, student_id, major):
        # Call parent class constructor
        super().__init__(name, age, email)
        self.student_id = student_id
        self.major = major
        self.grades = {}
  
    def add_grade(self, subject, grade):
        """Add a grade for a subject"""
        self.grades[subject] = grade
        return f"Grade {grade} added for {subject}"
  
    def get_gpa(self):
        """Calculate GPA based on grades"""
        if not self.grades:
            return 0.0
        return sum(self.grades.values()) / len(self.grades)
  
    def introduce(self):
        """Override parent method"""
        return f"Hi, I'm {self.name}, a {self.major} student (ID: {self.student_id})"
  
    def __str__(self):
        return f"Student(name='{self.name}', major='{self.major}', GPA={self.get_gpa():.2f})"

# Using inheritance
student1 = Student("Diana", 20, "diana@university.edu", "S12345", "Computer Science")
print("\nInheritance Example:")
print("=" * 25)
print(student1.introduce())
print(student1.add_grade("Python Programming", 95))
print(student1.add_grade("Data Structures", 88))
print(student1.add_grade("Algorithms", 92))
print(f"Diana's GPA: {student1.get_gpa():.2f}")
print(student1)

# Polymorphism example
class Teacher(Person):
    """Teacher class inheriting from Person"""
  
    def __init__(self, name, age, email, employee_id, subject):
        super().__init__(name, age, email)
        self.employee_id = employee_id
        self.subject = subject
        self.students = []
  
    def introduce(self):
        """Override parent method"""
        return f"Hello, I'm Professor {self.name}, I teach {self.subject}"
  
    def add_student(self, student_name):
        """Add a student to the class"""
        self.students.append(student_name)
        return f"{student_name} enrolled in {self.subject}"

# Polymorphism demonstration
people = [
    Person("John", 35, "john@email.com"),
    Student("Emma", 19, "emma@university.edu", "S67890", "Biology"),
    Teacher("Dr. Smith", 45, "smith@university.edu", "T001", "Mathematics")
]

print("\nPolymorphism Example:")
print("=" * 25)
for person in people:
    print(person.introduce())  # Same method name, different behavior

# Encapsulation with private attributes
class BankAccount:
    """Demonstrate encapsulation with private attributes"""
  
    def __init__(self, account_holder, initial_balance=0):
        self.account_holder = account_holder
        self.__balance = initial_balance  # Private attribute
        self.__transaction_history = []   # Private attribute
  
    def deposit(self, amount):
        """Deposit money to account"""
        if amount > 0:
            self.__balance += amount
            self.__transaction_history.append(f"Deposited ${amount}")
            return f"Deposited ${amount}. New balance: ${self.__balance}"
        return "Invalid deposit amount"
  
    def withdraw(self, amount):
        """Withdraw money from account"""
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            self.__transaction_history.append(f"Withdrew ${amount}")
            return f"Withdrew ${amount}. New balance: ${self.__balance}"
        return "Invalid withdrawal amount or insufficient funds"
  
    def get_balance(self):
        """Get current balance (controlled access)"""
        return self.__balance
  
    def get_transaction_history(self):
        """Get transaction history (controlled access)"""
        return self.__transaction_history.copy()  # Return copy for security

# Encapsulation demonstration
account = BankAccount("Alice Johnson", 1000)
print("\nEncapsulation Example:")
print("=" * 25)
print(account.deposit(500))
print(account.withdraw(200))
print(f"Current balance: ${account.get_balance()}")

# Try to access private attribute (will create new public attribute)
print(f"Direct access attempt: {getattr(account, '_BankAccount__balance', 'Not accessible')}")

# Class methods and static methods
class MathUtils:
    """Demonstrate class methods and static methods"""
  
    calculation_count = 0  # Class attribute
  
    @classmethod
    def get_calculation_count(cls):
        """Class method - operates on class, not instance"""
        return cls.calculation_count
  
    @staticmethod
    def add(a, b):
        """Static method - doesn't need class or instance"""
        MathUtils.calculation_count += 1
        return a + b
  
    @staticmethod
    def multiply(a, b):
        """Static method for multiplication"""
        MathUtils.calculation_count += 1
        return a * b

print("\nClass and Static Methods:")
print("=" * 30)
print(f"Calculations performed: {MathUtils.get_calculation_count()}")
result1 = MathUtils.add(10, 5)
result2 = MathUtils.multiply(4, 7)
print(f"10 + 5 = {result1}")
print(f"4 × 7 = {result2}")
print(f"Total calculations: {MathUtils.get_calculation_count()}")
```

## Python File I/O Operations

File Input/Output (I/O) operations are essential for reading from and writing to files, allowing your Python programs to persist data, process external files, and interact with the file system. Python provides built-in functions and methods for file operations, with the `open()` function being the primary way to work with files. Understanding file I/O is crucial for data processing, configuration management, logging, and many other practical applications.

Python supports different file modes for various operations: 'r' for reading (default), 'w' for writing (overwrites existing content), 'a' for appending, 'x' for exclusive creation, and 'r+' for reading and writing. You can also specify whether to work with text files (default) or binary files by adding 'b' to the mode. The `with` statement is the preferred way to work with files as it automatically handles file closing, even if errors occur during processing.

File operations include reading entire files, reading line by line, writing content, appending to existing files, and handling different file formats. Python's file handling capabilities also include error handling for common issues like file not found, permission errors, and encoding problems. Understanding these concepts enables you to build robust applications that interact reliably with the file system.

```python
import os
import json
import csv
from pathlib import Path

# Basic file writing
print("File Writing Examples:")
print("=" * 25)

# Writing to a file
content = """This is a sample text file.
It contains multiple lines.
We can write various types of content here.
Including numbers: 123, 456, 789
And special characters: !@#$%^&*()"""

# Method 1: Basic file writing
with open("sample.txt", "w") as file:
    file.write(content)
print("✓ Created sample.txt")

# Method 2: Writing multiple lines
lines = [
    "Line 1: Introduction\n",
    "Line 2: Main content\n",
    "Line 3: Conclusion\n"
]

with open("lines.txt", "w") as file:
    file.writelines(lines)
print("✓ Created lines.txt")

# Basic file reading
print("\nFile Reading Examples:")
print("=" * 25)

# Method 1: Read entire file
with open("sample.txt", "r") as file:
    full_content = file.read()
    print("Full content length:", len(full_content))

# Method 2: Read line by line
with open("sample.txt", "r") as file:
    line_number = 1
    for line in file:
        print(f"Line {line_number}: {line.strip()}")
        line_number += 1
        if line_number > 3:  # Limit output
            break

# Method 3: Read all lines into a list
with open("sample.txt", "r") as file:
    all_lines = file.readlines()
    print(f"Total lines read: {len(all_lines)}")

# File appending
print("\nFile Appending Examples:")
print("=" * 30)

# Append to existing file
with open("sample.txt", "a") as file:
    file.write("\n\nThis line was appended!")
    file.write("\nAnd this is another appended line.")
print("✓ Appended content to sample.txt")

# Verify appending worked
with open("sample.txt", "r") as file:
    lines = file.readlines()
    print(f"File now has {len(lines)} lines")
    print("Last line:", lines[-1].strip())

# Working with different file modes and error handling
print("\nError Handling Examples:")
print("=" * 30)

# Safe file reading with error handling
def safe_read_file(filename):
    """Safely read a file with error handling"""
    try:
        with open(filename, "r") as file:
            return file.read()
    except FileNotFoundError:
        return f"Error: File '{filename}' not found"
    except PermissionError:
        return f"Error: Permission denied for file '{filename}'"
    except Exception as e:
        return f"Error reading file: {e}"

# Test error handling
print(safe_read_file("sample.txt")[:50] + "...")
print(safe_read_file("nonexistent.txt"))

# Working with JSON files
print("\nJSON File Operations:")
print("=" * 25)

# Create sample data
student_data = {
    "name": "John Doe",
    "age": 20,
    "major": "Computer Science",
    "grades": {"Python": 95, "Math": 87, "Physics": 92},
    "active": True
}

# Write JSON file
with open("student.json", "w") as file:
    json.dump(student_data, file, indent=2)
print("✓ Created student.json")

# Read JSON file
with open("student.json", "r") as file:
    loaded_data = json.load(file)
    print(f"Loaded student: {loaded_data['name']}")
    print(f"Average grade: {sum(loaded_data['grades'].values()) / len(loaded_data['grades']):.1f}")

# Working with CSV files
print("\nCSV File Operations:")
print("=" * 25)

# Sample CSV data
csv_data = [
    ["Name", "Age", "City", "Salary"],
    ["Alice", "25", "New York", "50000"],
    ["Bob", "30", "Los Angeles", "60000"],
    ["Charlie", "35", "Chicago", "55000"],
    ["Diana", "28", "Houston", "52000"]
]

# Write CSV file
with open("employees.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(csv_data)
print("✓ Created employees.csv")

# Read CSV file
print("Employee data from CSV:")
with open("employees.csv", "r") as file:
    reader = csv.reader(file)
    for row_num, row in enumerate(reader, 1):
        if row_num == 1:
            print(f"Headers: {', '.join(row)}")
        else:
            print(f"Employee {row_num-1}: {row[0]}, Age {row[1]}, Salary ${row[3]}")

# Read CSV as dictionary
with open("employees.csv", "r") as file:
    dict_reader = csv.DictReader(file)
    print("\nUsing DictReader:")
    for employee in dict_reader:
        print(f"{employee['Name']}: {employee['City']}")

# File information and path operations
print("\nFile Information:")
print("=" * 20)

# Using os.path
if os.path.exists("sample.txt"):
    size = os.path.getsize("sample.txt")
    print(f"sample.txt size: {size} bytes")
    print(f"Absolute path: {os.path.abspath('sample.txt')}")

# Using pathlib (modern approach)
file_path = Path("sample.txt")
if file_path.exists():
    print(f"File size (pathlib): {file_path.stat().st_size} bytes")
    print(f"File suffix: {file_path.suffix}")
    print(f"File stem: {file_path.stem}")

# Working with directories
print("\nDirectory Operations:")
print("=" * 25)

# Create directory
test_dir = Path("test_directory")
test_dir.mkdir(exist_ok=True)
print(f"✓ Created directory: {test_dir}")

# Create file in directory
test_file = test_dir / "test_file.txt"
test_file.write_text("This is a test file in a subdirectory.")
print(f"✓ Created file: {test_file}")

# List directory contents
print("Directory contents:")
for item in test_dir.iterdir():
    print(f"  {item.name} ({'directory' if item.is_dir() else 'file'})")

# Binary file operations
print("\nBinary File Operations:")
print("=" * 30)

# Write binary data
binary_data = b"This is binary data\x00\x01\x02\x03"
with open("binary_file.bin", "wb") as file:
    file.write(binary_data)
print("✓ Created binary file")

# Read binary data
with open("binary_file.bin", "rb") as file:
    read_binary = file.read()
    print(f"Binary data length: {len(read_binary)} bytes")
    print(f"First 10 bytes: {read_binary[:10]}")

# File copying function
def copy_file(source, destination):
    """Copy a file from source to destination"""
    try:
        with open(source, "rb") as src, open(destination, "wb") as dst:
            dst.write(src.read())
        return f"✓ Copied {source} to {destination}"
    except Exception as e:
        return f"✗ Error copying file: {e}"

print(copy_file("sample.txt", "sample_copy.txt"))

# Cleanup created files (optional)
cleanup_files = [
    "sample.txt", "lines.txt", "student.json", "employees.csv",
    "binary_file.bin", "sample_copy.txt", "test_directory/test_file.txt"
]

print("\nCleanup (removing created files):")
for file_path in cleanup_files:
    path = Path(file_path)
    if path.exists():
        if path.is_file():
            path.unlink()
            print(f"✓ Removed {file_path}")

# Remove test directory
if test_dir.exists():
    test_dir.rmdir()
    print(f"✓ Removed directory: {test_dir}")
```

## Python Built-in Important Modules

Python's standard library includes numerous built-in modules that provide ready-to-use functionality for common programming tasks. Three of the most frequently used modules are `math`, `random`, and `os`. The `math` module provides mathematical functions and constants for numerical computations, the `random` module offers functions for generating random numbers and making random selections, and the `os` module provides a way to interact with the operating system and file system.

The `math` module includes functions for basic arithmetic operations, trigonometric functions, logarithmic functions, and mathematical constants like pi and e. It's essential for scientific computing, engineering calculations, and any application requiring mathematical operations beyond basic arithmetic. The `random` module is crucial for simulations, games, statistical sampling, and any application requiring unpredictable behavior or random selection.

The `os` module provides platform-independent ways to interact with the operating system, including file and directory operations, environment variables, and process management. Understanding these modules enables you to write more powerful and versatile Python programs without reinventing common functionality.

```python
import math
import random
import os
import datetime
import sys
from pathlib import Path

# Math module examples
print("Math Module Examples:")
print("=" * 25)

# Basic mathematical functions
numbers = [16, 25, 100, 144]
print("Square roots:")
for num in numbers:
    sqrt_val = math.sqrt(num)
    print(f"  √{num} = {sqrt_val}")

# Trigonometric functions (angles in radians)
angle_degrees = 45
angle_radians = math.radians(angle_degrees)
print(f"\nTrigonometric functions for {angle_degrees}°:")
print(f"  sin({angle_degrees}°) = {math.sin(angle_radians):.4f}")
print(f"  cos({angle_degrees}°) = {math.cos(angle_radians):.4f}")
print(f"  tan({angle_degrees}°) = {math.tan(angle_radians):.4f}")

# Logarithmic functions
values = [1, 10, 100, 1000]
print(f"\nLogarithmic functions:")
for val in values:
    log10_val = math.log10(val)
    ln_val = math.log(val)
    print(f"  log₁₀({val}) = {log10_val}, ln({val}) = {ln_val:.4f}")

# Mathematical constants
print(f"\nMathematical constants:")
print(f"  π (pi) = {math.pi:.6f}")
print(f"  e = {math.e:.6f}")
print(f"  τ (tau) = {math.tau:.6f}")

# Practical math applications
def distance_between_points(x1, y1, x2, y2):
    """Calculate distance between two points"""
    return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

def circle_area_circumference(radius):
    """Calculate area and circumference of a circle"""
    area = math.pi * radius**2
    circumference = 2 * math.pi * radius
    return area, circumference

# Test math applications
dist = distance_between_points(0, 0, 3, 4)
area, circum = circle_area_circumference(5)
print(f"\nPractical applications:")
print(f"  Distance between (0,0) and (3,4): {dist}")
print(f"  Circle (r=5) - Area: {area:.2f}, Circumference: {circum:.2f}")

# Random module examples
print("\nRandom Module Examples:")
print("=" * 30)

# Basic random number generation
print("Random integers:")
for i in range(5):
    rand_int = random.randint(1, 100)
    print(f"  Random int (1-100): {rand_int}")

print("\nRandom floats:")
for i in range(3):
    rand_float = random.uniform(0.0, 1.0)
    print(f"  Random float (0.0-1.0): {rand_float:.4f}")

# Random choices and selections
colors = ["red", "green", "blue", "yellow", "purple", "orange"]
animals = ["cat", "dog", "bird", "fish", "hamster"]

print(f"\nRandom selections:")
print(f"  Random color: {random.choice(colors)}")
print(f"  Random animal: {random.choice(animals)}")

# Multiple random selections
random_colors = random.choices(colors, k=3)  # With replacement
random_animals = random.sample(animals, 3)   # Without replacement
print(f"  3 random colors (with replacement): {random_colors}")
print(f"  3 random animals (without replacement): {random_animals}")

# Shuffling
deck = list(range(1, 11))  # Cards 1-10
print(f"  Original deck: {deck}")
random.shuffle(deck)
print(f"  Shuffled deck: {deck}")

# Random with seed (for reproducibility)
random.seed(42)
reproducible_numbers = [random.randint(1, 10) for _ in range(5)]
print(f"  Reproducible random numbers: {reproducible_numbers}")

# Random applications
def generate_password(length=8):
    """Generate a random password"""
    import string
    characters = string.ascii_letters + string.digits + "!@#$%"
    return ''.join(random.choice(characters) for _ in range(length))

def roll_dice(num_dice=2, sides=6):
    """Simulate rolling dice"""
    rolls = [random.randint(1, sides) for _ in range(num_dice)]
    return rolls, sum(rolls)

password = generate_password(12)
dice_rolls, total = roll_dice(3)
print(f"\nRandom applications:")
print(f"  Generated password: {password}")
print(f"  Dice rolls (3d6): {dice_rolls}, Total: {total}")

# OS module examples
print("\nOS Module Examples:")
print("=" * 20)

# Environment information
print("System information:")
print(f"  Operating system: {os.name}")
print(f"  Current working directory: {os.getcwd()}")
print(f"  User home directory: {os.path.expanduser('~')}")

# Environment variables
user_name = os.environ.get('USER', os.environ.get('USERNAME', 'Unknown'))
python_path = os.environ.get('PYTHONPATH', 'Not set')
print(f"  Current user: {user_name}")
print(f"  PYTHONPATH: {python_path}")

# Path operations
sample_path = "/home/user/documents/file.txt"
print(f"\nPath operations for: {sample_path}")
print(f"  Directory: {os.path.dirname(sample_path)}")
print(f"  Filename: {os.path.basename(sample_path)}")
print(f"  Split: {os.path.split(sample_path)}")
print(f"  Extension: {os.path.splitext(sample_path)[1]}")

# File and directory operations
temp_dir = "temp_test_dir"
temp_file = os.path.join(temp_dir, "test_file.txt")

print(f"\nDirectory operations:")
if not os.path.exists(temp_dir):
    os.makedirs(temp_dir)
    print(f"  ✓ Created directory: {temp_dir}")

# Create a test file
with open(temp_file, "w") as f:
    f.write("This is a test file for OS module demonstration.")
print(f"  ✓ Created file: {temp_file}")

# List directory contents
contents = os.listdir(temp_dir)
print(f"  Directory contents: {contents}")

# File information
if os.path.exists(temp_file):
    size = os.path.getsize(temp_file)
    is_file = os.path.isfile(temp_file)
    is_dir = os.path.isdir(temp_file)
    print(f"  File size: {size} bytes")
    print(f"  Is file: {is_file}, Is directory: {is_dir}")

# Additional useful modules
print("\nOther Important Built-in Modules:")
print("=" * 40)

# datetime module
now = datetime.datetime.now()
today = datetime.date.today()
print(f"Current date and time: {now.strftime('%Y-%m-%d %H:%M:%S')}")
print(f"Today's date: {today}")

# Calculate date differences
birthday = datetime.date(1990, 5, 15)
age_days = (today - birthday).days
print(f"Days since 1990-05-15: {age_days}")

# sys module
print(f"\nSystem information:")
print(f"Python version: {sys.version}")
print(f"Platform: {sys.platform}")
print(f"Python executable: {sys.executable}")
print(f"Module search path (first 3): {sys.path[:3]}")

# pathlib module (modern path handling)
current_path = Path.cwd()
home_path = Path.home()
print(f"\nPath objects:")
print(f"Current directory: {current_path}")
print(f"Home directory: {home_path}")

# Create path object and demonstrate methods
test_path = current_path / "example" / "subfolder" / "file.txt"
print(f"Constructed path: {test_path}")
print(f"Parent directory: {test_path.parent}")
print(f"File stem: {test_path.stem}")
print(f"File suffix: {test_path.suffix}")

# Cleanup
if os.path.exists(temp_file):
    os.remove(temp_file)
    print(f"\n✓ Cleaned up: {temp_file}")
if os.path.exists(temp_dir):
    os.rmdir(temp_dir)
    print(f"✓ Cleaned up: {temp_dir}")
```

## Python Virtual Environments

Virtual environments are isolated Python environments that allow you to manage dependencies for different projects separately. They solve the common problem of conflicting package versions between projects and provide a clean way to manage project-specific dependencies. Python provides several tools for creating virtual environments, including the built-in `venv` module, `pipenv`, `conda`, and newer tools like `uv`.

The built-in `venv` module is the standard way to create virtual environments in Python. It creates a separate directory containing a Python installation and allows you to install packages that are isolated from the system Python installation. This isolation ensures that changes to one project's dependencies don't affect other projects, making development more predictable and deployment more reliable.

Understanding virtual environments is crucial for Python development best practices. They enable reproducible development environments, easier deployment, and better dependency management. Most Python projects should use virtual environments to avoid conflicts and maintain clean, manageable codebases.

```python
import os
import sys
import subprocess
from pathlib import Path

# Virtual Environment Concepts and Demonstration
print("Python Virtual Environments Guide")
print("=" * 40)

# Check if we're in a virtual environment
def check_virtual_env():
    """Check if currently running in a virtual environment"""
    in_venv = hasattr(sys, 'real_prefix') or (
        hasattr(sys, 'base_prefix') and sys.base_prefix != sys.prefix
    )
  
    venv_name = os.path.basename(sys.prefix) if in_venv else None
  
    return in_venv, venv_name

in_venv, venv_name = check_virtual_env()
print(f"Currently in virtual environment: {in_venv}")
if in_venv:
    print(f"Virtual environment name: {venv_name}")
    print(f"Virtual environment path: {sys.prefix}")

print(f"Python executable: {sys.executable}")
print(f"Python version: {sys.version}")

# Display current Python path
print(f"\nPython module search paths:")
for i, path in enumerate(sys.path[:5], 1):
    print(f"  {i}. {path}")

# Demonstrate package location differences
try:
    import site
    print(f"\nSite packages directories:")
    for site_dir in site.getsitepackages():
        print(f"  {site_dir}")
except:
    print("Could not retrieve site packages information")

# Virtual Environment Commands Reference
print("\nVirtual Environment Commands Reference:")
print("=" * 45)

venv_commands = {
    "Create venv": {
        "command": "python -m venv myproject_env",
        "description": "Create a new virtual environment named 'myproject_env'",
        "example": "python -m venv ~/environments/my_project"
    },
    "Activate (Windows)": {
        "command": "myproject_env\\Scripts\\activate",
        "description": "Activate virtual environment on Windows",
        "example": "myproject_env\\Scripts\\activate.bat"
    },
    "Activate (Unix/MacOS)": {
        "command": "source myproject_env/bin/activate",
        "description": "Activate virtual environment on Unix/MacOS",
        "example": "source ~/environments/my_project/bin/activate"
    },
    "Deactivate": {
        "command": "deactivate",
        "description": "Deactivate current virtual environment",
        "example": "deactivate"
    },
    "Install packages": {
        "command": "pip install package_name",
        "description": "Install packages in active virtual environment",
        "example": "pip install requests pandas numpy"
    },
    "Requirements file": {
        "command": "pip freeze > requirements.txt",
        "description": "Create requirements file with current packages",
        "example": "pip install -r requirements.txt"
    }
}

for operation, details in venv_commands.items():
    print(f"\n{operation}:")
    print(f"  Command: {details['command']}")
    print(f"  Description: {details['description']}")
    print(f"  Example: {details['example']}")

# Different Virtual Environment Tools
print("\nVirtual Environment Tools Comparison:")
print("=" * 45)

tools_comparison = {
    "venv (Built-in)": {
        "pros": ["Built into Python 3.3+", "Lightweight", "Standard tool"],
        "cons": ["Basic functionality", "Manual dependency management"],
        "best_for": "Simple projects, learning, standard development"
    },
    "pipenv": {
        "pros": ["Pipfile format", "Automatic virtual env management", "Security scanning"],
        "cons": ["Slower than pip", "Learning curve", "Additional dependency"],
        "best_for": "Professional development, team projects"
    },
    "conda": {
        "pros": ["Handles non-Python dependencies", "Great for data science", "Cross-platform"],
        "cons": ["Larger installation", "Can be complex", "Different ecosystem"],
        "best_for": "Data science, scientific computing, complex dependencies"
    },
    "virtualenv": {
        "pros": ["Works with older Python", "More features than venv", "Faster"],
        "cons": ["External dependency", "Less commonly needed now"],
        "best_for": "Legacy Python versions, advanced use cases"
    },
    "uv (Modern)": {
        "pros": ["Very fast", "Rust-based", "Modern design", "pip replacement"],
        "cons": ["Newer tool", "Less widespread adoption"],
        "best_for": "Modern projects, performance-critical workflows"
    }
}

for tool, details in tools_comparison.items():
    print(f"\n{tool}:")
    print(f"  Pros: {', '.join(details['pros'])}")
    print(f"  Cons: {', '.join(details['cons'])}")
    print(f"  Best for: {details['best_for']}")

# Practical Virtual Environment Workflow
print("\nPractical Virtual Environment Workflow:")
print("=" * 45)

workflow_steps = [
    "1. Create project directory: mkdir my_project && cd my_project",
    "2. Create virtual environment: python -m venv venv",
    "3. Activate environment: source venv/bin/activate (Unix) or venv\\Scripts\\activate (Windows)",
    "4. Upgrade pip: python -m pip install --upgrade pip",
    "5. Install project dependencies: pip install requests pandas",
    "6. Create requirements file: pip freeze > requirements.txt",
    "7. Work on your project with isolated dependencies",
    "8. Deactivate when done: deactivate"
]

for step in workflow_steps:
    print(f"  {step}")

# Requirements.txt example
print("\nSample requirements.txt file:")
print("=" * 35)

sample_requirements = """# Web development
requests==2.31.0
flask==2.3.3
gunicorn==21.2.0

# Data analysis
pandas==2.1.1
numpy==1.24.3
matplotlib==3.7.2

# Testing
pytest==7.4.2
pytest-cov==4.1.0

# Development tools
black==23.7.0
flake8==6.0.0
mypy==1.5.1

# Optional dependencies for machine learning
# scikit-learn==1.3.0
# tensorflow==2.13.0
"""

print(sample_requirements)

# Environment management best practices
print("Virtual Environment Best Practices:")
print("=" * 40)

best_practices = [
    "✓ Always use virtual environments for projects",
    "✓ Name environments descriptively (project-specific)",
    "✓ Keep requirements.txt updated",
    "✓ Use .gitignore to exclude venv directories from version control",
    "✓ Document environment setup in README.md",
    "✓ Pin package versions for reproducible builds",
    "✓ Regularly update dependencies with security patches",
    "✓ Use separate environments for development, testing, and production",
    "✓ Consider using Docker for even more isolation",
    "✓ Clean up unused virtual environments periodically"
]

for practice in best_practices:
    print(f"  {practice}")

# .gitignore example for Python projects
print("\nSample .gitignore for Python projects:")
print("=" * 40)

gitignore_content = """# Virtual environments
venv/
env/
ENV/
env.bak/
venv.bak/

# Python bytecode
__pycache__/
*.py[cod]
*$py.class

# Distribution / packaging
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Environment variables
.env
.env.local
"""

print(gitignore_content)

# Troubleshooting common issues
print("Common Virtual Environment Issues & Solutions:")
print("=" * 50)

troubleshooting = {
    "ModuleNotFoundError after activation": "Ensure you're in the correct virtual environment and the package is installed",
    "Permission denied errors": "Check file permissions or use --user flag for pip install",
    "Virtual environment not activating": "Check the activation script path and your shell configuration",
    "Packages installed globally instead of in venv": "Verify virtual environment is activated before installing",
    "Different Python version in venv": "Create venv with specific Python version: python3.9 -m venv myenv",
    "Corrupted virtual environment": "Delete and recreate the virtual environment directory"
}

for issue, solution in troubleshooting.items():
    print(f"\nIssue: {issue}")
    print(f"Solution: {solution}")

print(f"\n{'='*50}")
print("Remember: Virtual environments are essential for professional Python development!")
print("They provide isolation, reproducibility, and clean dependency management.")
```

## Python Data Science Libraries

Python has become the de facto language for data science due to its powerful ecosystem of libraries designed for data manipulation, analysis, and visualization. The core libraries include NumPy for numerical computing, Pandas for data manipulation and analysis, Matplotlib for plotting and visualization, Seaborn for statistical visualization, and scikit-learn for machine learning. These libraries work together seamlessly to provide a comprehensive toolkit for data science workflows.

NumPy (Numerical Python) is the foundation of the Python data science stack, providing support for large, multi-dimensional arrays and matrices, along with mathematical functions to operate on these arrays efficiently. Pandas builds on NumPy to provide high-level data manipulation tools, particularly the DataFrame structure that makes working with structured data intuitive and powerful.

Matplotlib is the primary plotting library for Python, offering fine-grained control over every aspect of a figure. Seaborn builds on Matplotlib to provide a higher-level interface for statistical visualizations with attractive default styles. Scikit-learn provides simple and efficient tools for machine learning, including classification, regression, clustering, and dimensionality reduction algorithms.

```python
# Note: In a real environment, you would install these with:
# pip install numpy pandas matplotlib seaborn scikit-learn

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
# import seaborn as sns  # Commented out as it might not be available
# from sklearn import datasets, model_selection, linear_model  # Commented out

print("Python Data Science Libraries Overview")
print("=" * 45)

# NumPy - Numerical Computing
print("NumPy - Numerical Computing:")
print("=" * 35)

# Creating arrays
arr1d = np.array([1, 2, 3, 4, 5])
arr2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
zeros_arr = np.zeros((3, 4))
ones_arr = np.ones((2, 3))
range_arr = np.arange(0, 10, 2)

print(f"1D Array: {arr1d}")
print(f"2D Array shape: {arr2d.shape}")
print(f"2D Array:\n{arr2d}")
print(f"Zeros array shape: {zeros_arr.shape}")
print(f"Range array (0-10, step 2): {range_arr}")

# Array operations
print(f"\nArray Operations:")
print(f"Array + 10: {arr1d + 10}")
print(f"Array * 2: {arr1d * 2}")
print(f"Array squared: {arr1d ** 2}")
print(f"Array sum: {np.sum(arr1d)}")
print(f"Array mean: {np.mean(arr1d)}")
print(f"Array std: {np.std(arr1d):.3f}")

# Mathematical functions
angles = np.array([0, 30, 45, 60, 90])
radians = np.radians(angles)
sin_values = np.sin(radians)

print(f"\nMathemical Functions:")
print(f"Angles (degrees): {angles}")
print(f"Sin values: {np.round(sin_values, 3)}")

# Random number generation
np.random.seed(42)  # For reproducibility
random_data = np.random.normal(0, 1, 1000)  # Normal distribution
print(f"Random data stats - Mean: {np.mean(random_data):.3f}, Std: {np.std(random_data):.3f}")

# Pandas - Data Manipulation and Analysis
print(f"\nPandas - Data Manipulation:")
print("=" * 35)

# Creating DataFrames
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'Age': [25, 30, 35, 28, 32],
    'City': ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'],
    'Salary': [50000, 60000, 55000, 52000, 58000],
    'Department': ['IT', 'Finance', 'IT', 'HR', 'Finance']
}

df = pd.DataFrame(data)
print("Sample DataFrame:")
print(df)

# Basic DataFrame operations
print(f"\nDataFrame Info:")
print(f"Shape: {df.shape}")
print(f"Columns: {list(df.columns)}")
print(f"Data types:\n{df.dtypes}")

# Data selection and filtering
print(f"\nData Selection:")
print(f"IT Department employees:")
it_employees = df[df['Department'] == 'IT']
print(it_employees[['Name', 'Age', 'Salary']])

print(f"\nEmployees over 30:")
over_30 = df[df['Age'] > 30]
print(over_30[['Name', 'Age']])

# Statistical operations
print(f"\nStatistical Summary:")
print(df.describe())

print(f"\nGroup by Department:")
dept_stats = df.groupby('Department').agg({
    'Age': 'mean',
    'Salary': ['mean', 'max', 'min']
}).round(2)
print(dept_stats)

# Data manipulation
df_copy = df.copy()
df_copy['Salary_Bonus'] = df_copy['Salary'] * 1.1  # 10% bonus
df_copy['Age_Group'] = df_copy['Age'].apply(lambda x: 'Young' if x < 30 else 'Senior')

print(f"\nModified DataFrame with new columns:")
print(df_copy[['Name', 'Age', 'Salary', 'Salary_Bonus', 'Age_Group']])

# Working with missing data
data_with_missing = {
    'Product': ['A', 'B', 'C', 'D', 'E'],
    'Price': [10.5, None, 15.0, 12.5, None],
    'Quantity': [100, 200, None, 150, 300],
    'Category': ['Electronics', 'Books', 'Electronics', None, 'Books']
}

df_missing = pd.DataFrame(data_with_missing)
print(f"\nDataFrame with missing values:")
print(df_missing)

print(f"\nMissing values count:")
print(df_missing.isnull().sum())

# Handle missing values
df_cleaned = df_missing.copy()
df_cleaned['Price'].fillna(df_cleaned['Price'].mean(), inplace=True)
df_cleaned['Quantity'].fillna(df_cleaned['Quantity'].median(), inplace=True)
df_cleaned['Category'].fillna('Unknown', inplace=True)

print(f"\nDataFrame after handling missing values:")
print(df_cleaned)

# Matplotlib - Data Visualization
print(f"\nMatplotlib - Data Visualization:")
print("=" * 40)

# Simple plotting examples (text representation since we can't display actual plots)
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

print("Creating visualizations...")
print("1. Line plot of sin(x) and cos(x)")
print("2. Bar chart of department salaries")
print("3. Histogram of employee ages")
print("4. Scatter plot of age vs salary")

# Simulate plot creation (in real environment, these would create actual plots)
print(f"\nPlot Data Samples:")
print(f"X values (first 10): {x[:10]}")
print(f"Sin values (first 10): {y1[:10]}")
print(f"Cos values (first 10): {y2[:10]}")

# Department salary analysis for bar chart
dept_salaries = df.groupby('Department')['Salary'].mean()
print(f"\nDepartment Average Salaries:")
for dept, salary in dept_salaries.items():
    print(f"  {dept}: ${salary:,.2f}")

# Age distribution for histogram
age_bins = [20, 25, 30, 35, 40]
age_counts = pd.cut(df['Age'], bins=age_bins).value_counts().sort_index()
print(f"\nAge Distribution:")
for age_range, count in age_counts.items():
    print(f"  {age_range}: {count} employees")

# Seaborn - Statistical Visualization (Conceptual)
print(f"\nSeaborn - Statistical Visualization:")
print("=" * 45)

print("Seaborn builds on Matplotlib to provide:")
print("- Beautiful default styles")
print("- Statistical plotting functions")
print("- Easy integration with Pandas DataFrames")

seaborn_plots = [
    "sns.scatterplot() - Enhanced scatter plots with categories",
    "sns.boxplot() - Box plots for distribution analysis",
    "sns.heatmap() - Correlation matrices and 2D data",
    "sns.pairplot() - Pairwise relationships in datasets",
    "sns.distplot() - Distribution plots with histograms and KDE"
]

print("\nCommon Seaborn plot types:")
for plot in seaborn_plots:
    print(f"  • {plot}")

# Scikit-learn - Machine Learning (Conceptual)
print(f"\nScikit-learn - Machine Learning:")
print("=" * 40)

print("Scikit-learn provides tools for:")
print("- Supervised learning (classification, regression)")
print("- Unsupervised learning (clustering, dimensionality reduction)")
print("- Model selection and evaluation")
print("- Data preprocessing")

# Simulate a simple machine learning workflow
print(f"\nSimulated Machine Learning Workflow:")
print("1. Data Preparation:")

# Create sample data for demonstration
np.random.seed(42)
X = np.random.randn(100, 2)  # Features
y = (X[:, 0] + X[:, 1] > 0).astype(int)  # Labels

print(f"   • Created dataset with {X.shape[0]} samples and {X.shape[1]} features")
print(f"   • Target distribution: {np.bincount(y)}")

print("2. Model Training:")
print("   • Split data into training and test sets (80/20)")
print("   • Train a logistic regression model")
print("   • Evaluate model performance")

# Simulate model performance
accuracy = 0.85
precision = 0.83
recall = 0.87
f1_score = 0.85

print(f"3. Model Results:")
print(f"   • Accuracy: {accuracy:.2f}")
print(f"   • Precision: {precision:.2f}")
print(f"   • Recall: {recall:.2f}")
print(f"   • F1-Score: {f1_score:.2f}")

# Data Science Workflow Example
print(f"\nComplete Data Science Workflow:")
print("=" * 40)

# Simulate a complete data analysis
print("1. Data Collection and Loading")
sales_data = {
    'Month': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    'Sales': [15000, 18000, 16500, 19000, 21000, 20500],
    'Marketing_Spend': [2000, 2500, 2200, 2800, 3000, 2900],
    'Customers': [150, 180, 165, 190, 210, 205]
}

sales_df = pd.DataFrame(sales_data)
print("Sales data loaded:")
print(sales_df)

print(f"\n2. Exploratory Data Analysis")
print(f"   • Total sales: ${sales_df['Sales'].sum():,}")
print(f"   • Average monthly sales: ${sales_df['Sales'].mean():,.2f}")
print(f"   • Sales growth: {((sales_df['Sales'].iloc[-1] / sales_df['Sales'].iloc[0]) - 1) * 100:.1f}%")

# Correlation analysis
correlation_matrix = sales_df[['Sales', 'Marketing_Spend', 'Customers']].corr()
print(f"\n3. Correlation Analysis:")
print(correlation_matrix.round(3))

print(f"\n4. Key Insights:")
sales_marketing_corr = correlation_matrix.loc['Sales', 'Marketing_Spend']
sales_customers_corr = correlation_matrix.loc['Sales', 'Customers']

print(f"   • Sales vs Marketing Spend correlation: {sales_marketing_corr:.3f}")
print(f"   • Sales vs Customers correlation: {sales_customers_corr:.3f}")

if sales_marketing_corr > 0.7:
    print("   • Strong positive correlation between marketing spend and sales")
if sales_customers_corr > 0.8:
    print("   • Very strong correlation between customer count and sales")

# Best Practices for Data Science
print(f"\nData Science Best Practices:")
print("=" * 35)

best_practices = [
    "Start with clear questions and objectives",
    "Understand your data before analysis",
    "Clean and validate data thoroughly",
    "Use appropriate visualization for insights",
    "Document your analysis process",
    "Validate models with proper train/test splits",
    "Consider ethical implications of your analysis",
    "Make results reproducible with version control",
    "Communicate findings clearly to stakeholders",
    "Continuously learn and stay updated with new tools"
]

for i, practice in enumerate(best_practices, 1):
    print(f"{i:2d}. {practice}")

# Common Data Science Tasks
print(f"\nCommon Data Science Tasks & Libraries:")
print("=" * 45)

tasks_libraries = {
    "Data Loading": "pandas, numpy, csv, json",
    "Data Cleaning": "pandas, numpy, missingno",
    "Exploratory Analysis": "pandas, numpy, scipy",
    "Visualization": "matplotlib, seaborn, plotly, bokeh",
    "Statistical Analysis": "scipy, statsmodels",
    "Machine Learning": "scikit-learn, xgboost, lightgbm",
    "Deep Learning": "tensorflow, pytorch, keras",
    "Time Series": "pandas, statsmodels, prophet",
    "Text Analysis": "nltk, spacy, textblob",
    "Web Scraping": "requests, beautifulsoup, scrapy"
}

for task, libraries in tasks_libraries.items():
    print(f"{task:20s}: {libraries}")

print(f"\n{'='*50}")
print("Data Science in Python offers a rich ecosystem for:")
print("• Data manipulation and analysis")
print("• Statistical computing and modeling")
print("• Machine learning and AI")
print("• Data visualization and reporting")
print("• Reproducible research workflows")
```

## Advanced Python Topics

Advanced Python topics build upon the fundamentals to provide more sophisticated programming capabilities. These include dunder (double underscore) methods that allow customization of object behavior, the collections library for specialized data structures, advanced data structures beyond basic lists and dictionaries, decorators for modifying function behavior, context managers for resource management, and generators for memory-efficient iteration.

Dunder methods, also called magic methods, enable your classes to integrate seamlessly with Python's built-in functions and operators. Methods like `__len__`, `__str__`, `__add__`, and `__iter__` allow your objects to work with len(), str(), +, and for loops respectively. Understanding these methods is crucial for creating Pythonic classes that feel natural to use.

The collections module provides specialized container data types that extend beyond the built-in list, dict, tuple, and set. These include Counter for counting hashable objects, defaultdict for dictionaries with default values, namedtuple for creating tuple subclasses with named fields, and deque for efficient append and pop operations from both ends.

```python
import collections
from collections import Counter, defaultdict, namedtuple, deque
from functools import wraps
import time
import contextlib

print("Advanced Python Topics")
print("=" * 30)

# Dunder Methods (Magic Methods)
print("1. Dunder Methods (Magic Methods):")
print("=" * 40)

class Vector:
    """A simple 2D vector class demonstrating dunder methods"""
  
    def __init__(self, x, y):
        self.x = x
        self.y = y
  
    def __str__(self):
        """String representation for users"""
        return f"Vector({self.x}, {self.y})"
  
    def __repr__(self):
        """String representation for developers"""
        return f"Vector(x={self.x}, y={self.y})"
  
    def __add__(self, other):
        """Addition operator (+)"""
        if isinstance(other, Vector):
            return Vector(self.x + other.x, self.y + other.y)
        return NotImplemented
  
    def __sub__(self, other):
        """Subtraction operator (-)"""
        if isinstance(other, Vector):
            return Vector(self.x - other.x, self.y - other.y)
        return NotImplemented
  
    def __mul__(self, scalar):
        """Multiplication with scalar (*)"""
        if isinstance(scalar, (int, float)):
            return Vector(self.x * scalar, self.y * scalar)
        return NotImplemented
  
    def __rmul__(self, scalar):
        """Right multiplication (scalar * vector)"""
        return self.__mul__(scalar)
  
    def __eq__(self, other):
        """Equality operator (==)"""
        if isinstance(other, Vector):
            return self.x == other.x and self.y == other.y
        return False
  
    def __len__(self):
        """Length (magnitude) of vector"""
        return int((self.x**2 + self.y**2)**0.5)
  
    def __bool__(self):
        """Boolean evaluation"""
        return self.x != 0 or self.y != 0
  
    def __getitem__(self, index):
        """Index access"""
        if index == 0:
            return self.x
        elif index == 1:
            return self.y
        else:
            raise IndexError("Vector index out of range")
  
    def __setitem__(self, index, value):
        """Index assignment"""
        if index == 0:
            self.x = value
        elif index == 1:
            self.y = value
        else:
            raise IndexError("Vector index out of range")

# Demonstrate dunder methods
v1 = Vector(3, 4)
v2 = Vector(1, 2)

print(f"Vector 1: {v1}")
print(f"Vector 2: {v2}")
print(f"v1 + v2 = {v1 + v2}")
print(f"v1 - v2 = {v1 - v2}")
print(f"v1 * 2 = {v1 * 2}")
print(f"3 * v1 = {3 * v1}")
print(f"v1 == v2: {v1 == v2}")
print(f"Length of v1: {len(v1)}")
print(f"Bool of v1: {bool(v1)}")
print(f"v1[0] = {v1[0]}, v1[1] = {v1[1]}")

# Collections Library
print(f"\n2. Collections Library:")
print("=" * 30)

# Counter - counting hashable objects
text = "hello world python programming"
letter_count = Counter(text.replace(' ', ''))
word_count = Counter(text.split())

print(f"Letter frequency in '{text}':")
for letter, count in letter_count.most_common(5):
    print(f"  '{letter}': {count}")

print(f"\nWord frequency:")
for word, count in word_count.most_common():
    print(f"  '{word}': {count}")

# Counter operations
counter1 = Counter(['a', 'b', 'c', 'a', 'b', 'b'])
counter2 = Counter(['a', 'b', 'b', 'd'])

print(f"\nCounter operations:")
print(f"Counter 1: {counter1}")
print(f"Counter 2: {counter2}")
print(f"Addition: {counter1 + counter2}")
print(f"Subtraction: {counter1 - counter2}")
print(f"Intersection: {counter1 & counter2}")
print(f"Union: {counter1 | counter2}")

# defaultdict - dictionaries with default values
print(f"\ndefaultdict examples:")

# Group words by first letter
words = ['apple', 'banana', 'cherry', 'apricot', 'blueberry', 'coconut']
grouped = defaultdict(list)

for word in words:
    grouped[word[0]].append(word)

print("Words grouped by first letter:")
for letter, word_list in grouped.items():
    print(f"  {letter}: {word_list}")

# Count nested items
data = [('fruits', 'apple'), ('fruits', 'banana'), ('vegetables', 'carrot'), 
        ('fruits', 'cherry'), ('vegetables', 'broccoli')]

nested_count = defaultdict(lambda: defaultdict(int))
for category, item in data:
    nested_count[category][item] += 1

print(f"\nNested counting:")
for category, items in nested_count.items():
    print(f"{category}:")
    for item, count in items.items():
        print(f"  {item}: {count}")

# namedtuple - tuple with named fields
print(f"\nnamedtuple examples:")

# Create a Point class
Point = namedtuple('Point', ['x', 'y'])
Person = namedtuple('Person', ['name', 'age', 'city'])

p1 = Point(10, 20)
person1 = Person('Alice', 25, 'New York')

print(f"Point: {p1}")
print(f"Point.x = {p1.x}, Point.y = {p1.y}")
print(f"Person: {person1}")
print(f"Person.name = {person1.name}")

# namedtuple methods
print(f"Point._fields: {Point._fields}")
print(f"Person as dict: {person1._asdict()}")

# Create new instance with some fields changed
person2 = person1._replace(age=26, city='Boston')
print(f"Modified person: {person2}")

# deque - double-ended queue
print(f"\ndeque examples:")

# Create deque
dq = deque(['b', 'c', 'd'])
print(f"Initial deque: {dq}")

# Add elements
dq.appendleft('a')
dq.append('e')
print(f"After appending: {dq}")

# Remove elements
left_item = dq.popleft()
right_item = dq.pop()
print(f"Popped left: {left_item}, right: {right_item}")
print(f"Final deque: {dq}")

# Rotate deque
dq.extend(['e', 'f', 'g'])
print(f"Extended deque: {dq}")
dq.rotate(2)
print(f"Rotated right by 2: {dq}")
dq.rotate(-3)
print(f"Rotated left by 3: {dq}")

# Advanced Data Structures
print(f"\n3. Advanced Data Structures:")
print("=" * 40)

# Stack implementation using list
class Stack:
    """Stack implementation using list"""
  
    def __init__(self):
        self.items = []
  
    def push(self, item):
        self.items.append(item)
  
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        raise IndexError("Stack is empty")
  
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        raise IndexError("Stack is empty")
  
    def is_empty(self):
        return len(self.items) == 0
  
    def size(self):
        return len(self.items)
  
    def __str__(self):
        return f"Stack({self.items})"

# Demonstrate stack
stack = Stack()
for item in [1, 2, 3, 4, 5]:
    stack.push(item)

print(f"Stack after pushing 1-5: {stack}")
print(f"Peek: {stack.peek()}")
print(f"Pop: {stack.pop()}")
print(f"Stack after pop: {stack}")

# Queue implementation using deque
class Queue:
    """Queue implementation using deque"""
  
    def __init__(self):
        self.items = deque()
  
    def enqueue(self, item):
        self.items.append(item)
  
    def dequeue(self):
        if not self.is_empty():
            return self.items.popleft()
        raise IndexError("Queue is empty")
  
    def front(self):
        if not self.is_empty():
            return self.items[0]
        raise IndexError("Queue is empty")
  
    def is_empty(self):
        return len(self.items) == 0
  
    def size(self):
        return len(self.items)
  
    def __str__(self):
        return f"Queue({list(self.items)})"

# Demonstrate queue
queue = Queue()
for item in ['A', 'B', 'C', 'D']:
    queue.enqueue(item)

print(f"\nQueue after enqueuing A-D: {queue}")
print(f"Front: {queue.front()}")
print(f"Dequeue: {queue.dequeue()}")
print(f"Queue after dequeue: {queue}")

# Linked List implementation
class ListNode:
    """Node for linked list"""
  
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    """Simple linked list implementation"""
  
    def __init__(self):
        self.head = None
  
    def append(self, data):
        new_node = ListNode(data)
        if not self.head:
            self.head = new_node
            return
    
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
  
    def prepend(self, data):
        new_node = ListNode(data)
        new_node.next = self.head
        self.head = new_node
  
    def delete(self, data):
        if not self.head:
            return
    
        if self.head.data == data:
            self.head = self.head.next
            return
    
        current = self.head
        while current.next:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next
  
    def find(self, data):
        current = self.head
        while current:
            if current.data == data:
                return True
            current = current.next
        return False
  
    def to_list(self):
        result = []
        current = self.head
        while current:
            result.append(current.data)
            current = current.next
        return result
  
    def __str__(self):
        return f"LinkedList({self.to_list()})"

# Demonstrate linked list
ll = LinkedList()
for item in [1, 2, 3, 4]:
    ll.append(item)

print(f"\nLinked list: {ll}")
ll.prepend(0)
print(f"After prepending 0: {ll}")
ll.delete(2)
print(f"After deleting 2: {ll}")
print(f"Find 3: {ll.find(3)}")
print(f"Find 5: {ll.find(5)}")

# Decorators (Basic concept)
print(f"\n4. Decorators (Basic Concept):")
print("=" * 40)

# Simple decorator
def timing_decorator(func):
    """Decorator to measure function execution time"""
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} executed in {end_time - start_time:.4f} seconds")
        return result
    return wrapper

@timing_decorator
def slow_function():
    """A function that takes some time"""
    time.sleep(0.1)  # Simulate work
    return "Function completed"

print("Calling decorated function:")
result = slow_function()
print(f"Result: {result}")

# Context Managers (Basic concept)
print(f"\n5. Context Managers (Basic Concept):")
print("=" * 45)

# Simple context manager
class SimpleContextManager:
    """A simple context manager example"""
  
    def __init__(self, name):
        self.name = name
  
    def __enter__(self):
        print(f"Entering context: {self.name}")
        return self
  
    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"Exiting context: {self.name}")
        if exc_type:
            print(f"Exception occurred: {exc_type.__name__}: {exc_val}")
        return False  # Don't suppress exceptions

# Using context manager
print("Using custom context manager:")
with SimpleContextManager("test_context") as cm:
    print("Inside the context")
    print(f"Context manager name: {cm.name}")

# Generator example
print(f"\n6. Generators (Basic Concept):")
print("=" * 35)

def fibonacci_generator(n):
    """Generate Fibonacci numbers up to n"""
    a, b = 0, 1
    count = 0
    while count < n:
        yield a
        a, b = b, a + b
        count += 1

print("Fibonacci sequence (first 10 numbers):")
fib_gen = fibonacci_generator(10)
fib_numbers = list(fib_gen)
print(fib_numbers)

# Generator expression
squares_gen = (x**2 for x in range(10))
print(f"Squares generator: {list(squares_gen)}")

print(f"\n{'='*50}")
print("Advanced Python topics provide:")
print("• Custom object behavior through dunder methods")
print("• Specialized data structures for specific use cases")
print("• Function modification through decorators")
print("• Resource management with context managers")
print("• Memory-efficient iteration with generators")
print("• Building blocks for complex applications")
```
