# Lesson 1.3: If-Else Logic

## Overview
Master conditional statements and boolean logic to make your programs intelligent and responsive to different situations.

## Key Takeaways
- Understand boolean logic and comparison operators
- Use if, elif, and else statements
- Combine conditions with logical operators
- Handle different scenarios in your programs
- Write clean and readable conditional code

## Prerequisites
- Understanding of variables and data types
- Basic knowledge of Python syntax
- Familiarity with print() and input() functions

## Boolean Logic

### Comparison Operators
```python
# Basic comparisons
x = 5
y = 10

print(x < y)    # True
print(x > y)    # False
print(x == y)   # False
print(x != y)   # True
print(x <= y)   # True
print(x >= y)   # False
```

### Boolean Values
```python
# Boolean literals
is_true = True
is_false = False

# Boolean expressions
age = 18
is_adult = age >= 18  # True
is_teenager = 13 <= age <= 19  # True
```

## If Statements

### Basic If Statement
```python
# Simple if statement
age = 18

if age >= 18:
    print("You are an adult")
    print("You can vote")
```

### If-Else Statement
```python
# If-else structure
age = 16

if age >= 18:
    print("You are an adult")
    print("You can vote")
else:
    print("You are a minor")
    print("You cannot vote yet")
```

### If-Elif-Else Statement
```python
# Multiple conditions
score = 85

if score >= 90:
    grade = "A"
    print("Excellent!")
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
    print("Failed")

print(f"Your grade is: {grade}")
```

## Logical Operators

### AND Operator
```python
# Both conditions must be True
age = 25
has_license = True

if age >= 18 and has_license:
    print("You can drive")
else:
    print("You cannot drive")
```

### OR Operator
```python
# At least one condition must be True
is_student = True
is_teacher = False

if is_student or is_teacher:
    print("You have access to the library")
else:
    print("Access denied")
```

### NOT Operator
```python
# Inverts the boolean value
is_raining = False

if not is_raining:
    print("Let's go for a walk")
else:
    print("Stay inside")
```

### Complex Conditions
```python
# Combining multiple operators
age = 25
income = 50000
credit_score = 750

if age >= 18 and income >= 40000 and credit_score >= 700:
    print("Loan approved!")
elif age >= 18 and income >= 60000:
    print("Loan approved with higher interest")
else:
    print("Loan denied")
```

## Nested If Statements

### Multiple Levels
```python
# Nested conditions
weather = "sunny"
temperature = 75
humidity = 60

if weather == "sunny":
    if temperature > 70:
        if humidity < 70:
            print("Perfect day for a picnic!")
        else:
            print("It's sunny but humid")
    else:
        print("It's sunny but too cold")
else:
    print("Not a good day for a picnic")
```

## Input Validation

### Checking User Input
```python
# Validate age input
try:
    age = int(input("Enter your age: "))
    
    if age < 0:
        print("Age cannot be negative")
    elif age > 120:
        print("Please enter a realistic age")
    elif age < 18:
        print("You are a minor")
    else:
        print("You are an adult")
        
except ValueError:
    print("Please enter a valid number")
```

### Menu System
```python
# Simple menu
print("1. Add numbers")
print("2. Subtract numbers")
print("3. Multiply numbers")
print("4. Divide numbers")

choice = input("Enter your choice (1-4): ")

if choice == "1":
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    result = num1 + num2
    print(f"Result: {result}")
elif choice == "2":
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    result = num1 - num2
    print(f"Result: {result}")
elif choice == "3":
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    result = num1 * num2
    print(f"Result: {result}")
elif choice == "4":
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    if num2 != 0:
        result = num1 / num2
        print(f"Result: {result}")
    else:
        print("Error: Cannot divide by zero")
else:
    print("Invalid choice")
```

## Practice Exercises

### Exercise 1: Grade Calculator
```python
# Calculate letter grade based on score
score = float(input("Enter your test score (0-100): "))

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is: {grade}")
```

### Exercise 2: Password Checker
```python
# Check password strength
password = input("Enter a password: ")

if len(password) < 8:
    print("Password is too short")
elif password.isalpha():
    print("Password needs numbers")
elif password.isdigit():
    print("Password needs letters")
elif password.islower():
    print("Password needs uppercase letters")
elif password.isupper():
    print("Password needs lowercase letters")
else:
    print("Strong password!")
```

### Exercise 3: Number Guessing Game
```python
import random

# Generate random number
secret_number = random.randint(1, 100)
attempts = 0

print("I'm thinking of a number between 1 and 100")

while attempts < 10:
    guess = int(input("Enter your guess: "))
    attempts += 1
    
    if guess < secret_number:
        print("Too low!")
    elif guess > secret_number:
        print("Too high!")
    else:
        print(f"Congratulations! You guessed it in {attempts} attempts!")
        break

if attempts >= 10:
    print(f"Game over! The number was {secret_number}")
```

## Common Mistakes

### Using = Instead of ==
```python
# Wrong - assignment instead of comparison
age = 18
if age = 18:  # SyntaxError
    print("Adult")

# Correct
age = 18
if age == 18:  # Comparison
    print("Adult")
```

### Missing Colons
```python
# Wrong - missing colon
age = 18
if age >= 18  # SyntaxError
    print("Adult")

# Correct
age = 18
if age >= 18:  # Colon required
    print("Adult")
```

### Incorrect Indentation
```python
# Wrong - inconsistent indentation
age = 18
if age >= 18:
print("Adult")  # IndentationError

# Correct
age = 18
if age >= 18:
    print("Adult")  # Proper indentation
```

## Best Practices

### Use Clear Variable Names
```python
# Good
user_age = 25
minimum_age = 18

if user_age >= minimum_age:
    print("Access granted")

# Bad
a = 25
b = 18

if a >= b:
    print("Access granted")
```

### Avoid Deep Nesting
```python
# Better - use early returns
def check_access(age, has_permission):
    if age < 18:
        return "Access denied - too young"
    
    if not has_permission:
        return "Access denied - no permission"
    
    return "Access granted"

# Instead of deep nesting
def check_access_nested(age, has_permission):
    if age >= 18:
        if has_permission:
            return "Access granted"
        else:
            return "Access denied - no permission"
    else:
        return "Access denied - too young"
```

## Quiz Questions
1. What is the difference between `=` and `==`?
2. How do you check if a number is between 10 and 20?
3. What does the `elif` statement do?
4. How do you combine multiple conditions with AND?
5. What happens if you forget the colon after an if statement?
6. How do you check if a string is empty?
7. What is the purpose of the `not` operator?
8. How do you validate user input in Python?

## Next Steps
- Practice with the exercises above
- Experiment with different conditional scenarios
- Learn about loops in the next lesson
- Try creating more complex decision-making programs 