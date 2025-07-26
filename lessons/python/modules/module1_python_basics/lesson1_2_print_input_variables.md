# Lesson 1.2: Print, Input & Variables

## Overview
Learn about data types, variables, and how to interact with users through input and output operations.

## Key Takeaways
- Understand Python data types (int, float, str, bool)
- Create and use variables effectively
- Use print() function for output
- Get user input with input() function
- Format strings using f-strings
- Convert between data types

## Prerequisites
- Python installed and working
- Basic understanding of Python syntax
- A code editor ready to use

## Variables and Assignment

### What are Variables?
Variables are containers that store data. In Python, you don't need to declare the type explicitly.

```python
# Variable assignment
name = "Alice"
age = 25
height = 5.6
is_student = True

# Print variables
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height} feet")
print(f"Is student: {is_student}")
```

### Variable Naming Rules
```python
# Good variable names
user_name = "John"
age_in_years = 30
is_active = True

# Avoid these
# 2name = "John"  # Can't start with number
# my-name = "John"  # Can't use hyphens
# class = "Python"  # Can't use reserved words
```

## Data Types

### Numbers
```python
# Integers (whole numbers)
age = 25
year = 2024
temperature = -5

# Floats (decimal numbers)
height = 5.6
pi = 3.14159
price = 19.99

# Operations
a = 10
b = 3
print(f"Addition: {a + b}")        # 13
print(f"Subtraction: {a - b}")      # 7
print(f"Multiplication: {a * b}")   # 30
print(f"Division: {a / b}")         # 3.333...
print(f"Floor division: {a // b}")  # 3
print(f"Modulus: {a % b}")          # 1
print(f"Exponentiation: {a ** b}")  # 1000
```

### Strings
```python
# String creation
first_name = "John"
last_name = "Doe"
message = "Hello, World!"

# String concatenation
full_name = first_name + " " + last_name
print(full_name)  # John Doe

# String methods
text = "Hello, World!"
print(text.upper())           # HELLO, WORLD!
print(text.lower())           # hello, world!
print(text.replace("World", "Python"))  # Hello, Python!
print(len(text))              # 13
```

### Booleans
```python
# Boolean values
is_true = True
is_false = False

# Boolean operations
x = 5
y = 10
print(x < y)    # True
print(x > y)    # False
print(x == y)   # False
print(x != y)   # True
```

## Input and Output

### Print Function
```python
# Basic print
print("Hello, World!")

# Print multiple items
print("Name:", "John", "Age:", 25)

# Print with separator
print("Hello", "World", sep="-")  # Hello-World

# Print without newline
print("Loading", end="...")
print("Done!")  # Loading...Done!
```

### Input Function
```python
# Basic input
name = input("What's your name? ")
print(f"Hello, {name}!")

# Input with type conversion
age = int(input("How old are you? "))
birth_year = 2024 - age
print(f"You were born in {birth_year}")

# Input validation
try:
    age = int(input("Enter your age: "))
    print(f"You are {age} years old")
except ValueError:
    print("Please enter a valid number")
```

## String Formatting

### F-Strings (Recommended)
```python
name = "Alice"
age = 25
city = "New York"

# F-string formatting
message = f"My name is {name}, I am {age} years old, and I live in {city}"
print(message)

# F-strings with expressions
price = 19.99
quantity = 3
total = price * quantity
print(f"Price: ${price}, Quantity: {quantity}, Total: ${total:.2f}")
```

### Other String Formatting Methods
```python
# .format() method
name = "Bob"
age = 30
message = "My name is {}, I am {} years old".format(name, age)
print(message)

# % operator (older method)
name = "Charlie"
age = 35
message = "My name is %s, I am %d years old" % (name, age)
print(message)
```

## Type Conversion

### Converting Between Types
```python
# String to number
age_str = "25"
age_int = int(age_str)
age_float = float(age_str)

# Number to string
age = 25
age_str = str(age)

# Boolean conversion
print(bool(0))      # False
print(bool(1))      # True
print(bool(""))     # False
print(bool("Hello")) # True
```

## Practice Exercises

### Exercise 1: Personal Information Program
```python
# Create a program that asks for user's personal information
name = input("What's your name? ")
age = int(input("How old are you? "))
city = input("Where do you live? ")
hobby = input("What's your favorite hobby? ")

print(f"\nPersonal Information:")
print(f"Name: {name}")
print(f"Age: {age}")
print(f"City: {city}")
print(f"Hobby: {hobby}")
```

### Exercise 2: Calculator Program
```python
# Simple calculator
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print(f"\nResults:")
print(f"Addition: {num1 + num2}")
print(f"Subtraction: {num1 - num2}")
print(f"Multiplication: {num1 * num2}")
print(f"Division: {num1 / num2}")
```

### Exercise 3: String Manipulation
```python
# String operations
sentence = input("Enter a sentence: ")

print(f"Original: {sentence}")
print(f"Uppercase: {sentence.upper()}")
print(f"Lowercase: {sentence.lower()}")
print(f"Length: {len(sentence)} characters")
print(f"Word count: {len(sentence.split())} words")
```

## Common Mistakes to Avoid

### Type Errors
```python
# Wrong - can't add string and number directly
age = "25"
result = age + 5  # TypeError

# Correct - convert first
age = "25"
result = int(age) + 5  # 30
```

### Input Validation
```python
# Always validate user input
try:
    age = int(input("Enter age: "))
    if age < 0 or age > 120:
        print("Please enter a valid age")
    else:
        print(f"Age: {age}")
except ValueError:
    print("Please enter a number")
```

## Best Practices

### Variable Naming
```python
# Use descriptive names
user_name = "John"        # Good
un = "John"              # Bad

# Use snake_case for variables
first_name = "Alice"      # Good
firstName = "Alice"       # Bad (camelCase)
```

### String Formatting
```python
# Use f-strings for Python 3.6+
name = "John"
age = 25
message = f"{name} is {age} years old"  # Good

# Avoid concatenation for multiple variables
message = name + " is " + str(age) + " years old"  # Bad
```

## Quiz Questions
1. What is the difference between `int()` and `float()`?
2. How do you get user input in Python?
3. What is the purpose of f-strings?
4. How do you convert a string to an integer?
5. What happens if you try to add a string and a number?
6. How do you print multiple items on the same line?
7. What is the difference between `=` and `==`?
8. How do you check the type of a variable?

## Next Steps
- Practice with the exercises above
- Experiment with different data types
- Try creating more complex input/output programs
- Prepare for the next lesson on control flow (if-else statements) 