# Lesson 2.1: Functions

## Overview
Create reusable code blocks with functions, parameters, and return values to organize and modularize your Python programs.

## Key Takeaways
- Define and call functions
- Use parameters and arguments
- Return values from functions
- Understand function scope
- Write clean, reusable code
- Use default parameters and keyword arguments

## Prerequisites
- Understanding of variables and data types
- Knowledge of basic Python syntax
- Familiarity with loops and conditionals

## What are Functions?

### Why Use Functions?
Functions are reusable blocks of code that perform specific tasks. They help you:
- Avoid code duplication
- Organize your code logically
- Make programs easier to read and maintain
- Test individual components

### Basic Function Definition
```python
# Simple function
def greet():
    print("Hello, World!")

# Call the function
greet()  # Output: Hello, World!
```

## Function Parameters

### Parameters vs Arguments
```python
# Parameter: variable in function definition
def greet(name):
    print(f"Hello, {name}!")

# Argument: value passed to function
greet("Alice")  # Output: Hello, Alice!
greet("Bob")    # Output: Hello, Bob!
```

### Multiple Parameters
```python
def greet(name, age):
    print(f"Hello, {name}! You are {age} years old.")

greet("Alice", 25)
greet("Bob", 30)
```

### Default Parameters
```python
def greet(name, age=25):
    print(f"Hello, {name}! You are {age} years old.")

greet("Alice")      # Uses default age of 25
greet("Bob", 30)    # Overrides default age
```

## Return Values

### Basic Return
```python
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)
print(result)  # Output: 8
```

### Multiple Return Values
```python
def get_name_and_age():
    name = "Alice"
    age = 25
    return name, age

name, age = get_name_and_age()
print(f"Name: {name}, Age: {age}")
```

### Return vs Print
```python
# Function that prints (no return value)
def greet_print(name):
    print(f"Hello, {name}!")

# Function that returns (no print)
def greet_return(name):
    return f"Hello, {name}!"

# Usage
greet_print("Alice")  # Prints directly
message = greet_return("Alice")  # Returns string
print(message)  # We print the returned value
```

## Function Types

### Functions with No Parameters
```python
def get_current_year():
    import datetime
    return datetime.datetime.now().year

year = get_current_year()
print(f"Current year: {year}")
```

### Functions with Parameters
```python
def calculate_area(length, width):
    area = length * width
    return area

rectangle_area = calculate_area(10, 5)
print(f"Area: {rectangle_area}")
```

### Functions with Default Parameters
```python
def create_user(name, email, age=18, is_active=True):
    user = {
        "name": name,
        "email": email,
        "age": age,
        "is_active": is_active
    }
    return user

# Using defaults
user1 = create_user("Alice", "alice@example.com")
print(user1)

# Overriding defaults
user2 = create_user("Bob", "bob@example.com", 30, False)
print(user2)
```

## Advanced Function Features

### Keyword Arguments
```python
def create_profile(name, age, city, country="USA"):
    return f"{name}, {age}, from {city}, {country}"

# Positional arguments
profile1 = create_profile("Alice", 25, "New York")
print(profile1)

# Keyword arguments
profile2 = create_profile(name="Bob", age=30, city="London", country="UK")
print(profile2)

# Mix of positional and keyword
profile3 = create_profile("Charlie", 35, country="Canada", city="Toronto")
print(profile3)
```

### Variable Number of Arguments
```python
# *args - variable number of positional arguments
def sum_numbers(*args):
    return sum(args)

print(sum_numbers(1, 2, 3))        # 6
print(sum_numbers(1, 2, 3, 4, 5))  # 15

# **kwargs - variable number of keyword arguments
def create_person(**kwargs):
    return kwargs

person = create_person(name="Alice", age=25, city="New York")
print(person)  # {'name': 'Alice', 'age': 25, 'city': 'New York'}
```

## Function Scope

### Local vs Global Variables
```python
# Global variable
global_name = "Global Alice"

def test_scope():
    # Local variable
    local_name = "Local Bob"
    print(f"Inside function: {local_name}")
    print(f"Global variable: {global_name}")

test_scope()
print(f"Outside function: {global_name}")
# print(local_name)  # Error - local_name not accessible outside function
```

### Modifying Global Variables
```python
counter = 0

def increment_counter():
    global counter  # Declare we want to modify global variable
    counter += 1
    print(f"Counter: {counter}")

increment_counter()  # Counter: 1
increment_counter()  # Counter: 2
```

## Practice Exercises

### Exercise 1: Temperature Converter
```python
def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit"""
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

def fahrenheit_to_celsius(fahrenheit):
    """Convert Fahrenheit to Celsius"""
    celsius = (fahrenheit - 32) * 5/9
    return celsius

# Test the functions
celsius_temp = 25
fahrenheit_temp = celsius_to_fahrenheit(celsius_temp)
print(f"{celsius_temp}°C = {fahrenheit_temp}°F")

fahrenheit_temp = 77
celsius_temp = fahrenheit_to_celsius(fahrenheit_temp)
print(f"{fahrenheit_temp}°F = {celsius_temp}°C")
```

### Exercise 2: Grade Calculator
```python
def calculate_grade(score):
    """Calculate letter grade based on score"""
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

def get_grade_with_plus_minus(score):
    """Get grade with plus/minus modifier"""
    base_grade = calculate_grade(score)
    
    if base_grade == "F":
        return "F"
    
    remainder = score % 10
    if remainder >= 7:
        modifier = "+"
    elif remainder <= 3:
        modifier = "-"
    else:
        modifier = ""
    
    return base_grade + modifier

# Test the functions
scores = [95, 87, 73, 65, 45]
for score in scores:
    grade = get_grade_with_plus_minus(score)
    print(f"Score: {score}, Grade: {grade}")
```

### Exercise 3: Password Validator
```python
def validate_password(password):
    """Validate password strength"""
    errors = []
    
    if len(password) < 8:
        errors.append("Password must be at least 8 characters long")
    
    if not any(char.isupper() for char in password):
        errors.append("Password must contain at least one uppercase letter")
    
    if not any(char.islower() for char in password):
        errors.append("Password must contain at least one lowercase letter")
    
    if not any(char.isdigit() for char in password):
        errors.append("Password must contain at least one number")
    
    if not any(char in "!@#$%^&*" for char in password):
        errors.append("Password must contain at least one special character (!@#$%^&*)")
    
    return len(errors) == 0, errors

# Test the function
test_passwords = ["weak", "Better123", "StrongPass1!", "Perfect123!"]

for password in test_passwords:
    is_valid, errors = validate_password(password)
    if is_valid:
        print(f"'{password}' is a strong password")
    else:
        print(f"'{password}' is weak:")
        for error in errors:
            print(f"  - {error}")
```

## Common Mistakes

### Forgetting Return Statement
```python
# Wrong - function doesn't return anything
def add_numbers(a, b):
    result = a + b
    # Missing return statement

# Correct
def add_numbers(a, b):
    result = a + b
    return result
```

### Modifying Mutable Parameters
```python
# Be careful with mutable parameters
def add_item_to_list(items, new_item):
    items.append(new_item)  # Modifies the original list
    return items

my_list = [1, 2, 3]
result = add_item_to_list(my_list, 4)
print(my_list)  # [1, 2, 3, 4] - original list was modified
```

### Using Global Variables Unnecessarily
```python
# Bad - using global variable
total = 0

def add_to_total(value):
    global total
    total += value

# Better - pass data as parameters
def add_numbers(a, b):
    return a + b
```

## Best Practices

### Use Descriptive Names
```python
# Good
def calculate_rectangle_area(length, width):
    return length * width

# Bad
def calc(a, b):
    return a * b
```

### Add Docstrings
```python
def calculate_rectangle_area(length, width):
    """
    Calculate the area of a rectangle.
    
    Args:
        length (float): The length of the rectangle
        width (float): The width of the rectangle
    
    Returns:
        float: The area of the rectangle
    """
    return length * width
```

### Keep Functions Small and Focused
```python
# Good - single responsibility
def validate_email(email):
    return "@" in email and "." in email

def send_email(email, message):
    if validate_email(email):
        # Send email logic
        pass

# Bad - doing too much
def process_user_data(user_data):
    # 100 lines of code doing multiple things
    pass
```

## Quiz Questions
1. What is the difference between a parameter and an argument?
2. How do you return multiple values from a function?
3. What is the purpose of default parameters?
4. How do you modify a global variable inside a function?
5. What is the difference between `*args` and `**kwargs`?
6. How do you call a function with keyword arguments?
7. What happens if you don't use a return statement?
8. How do you add documentation to a function?

## Next Steps
- Practice with the exercises above
- Experiment with different function types
- Learn about data structures in the next lesson
- Try creating more complex functions 