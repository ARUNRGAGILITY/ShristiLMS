# Lesson 1.4: Loops

## Overview
Automate repetitive tasks with for and while loops, making your programs efficient and powerful.

## Key Takeaways
- Understand the difference between for and while loops
- Use loops to iterate over sequences
- Control loop execution with break and continue
- Write efficient and readable loop code
- Avoid infinite loops and common pitfalls

## Prerequisites
- Understanding of variables and data types
- Knowledge of if-else statements
- Basic Python syntax and indentation

## For Loops

### Basic For Loop
```python
# Loop through a range of numbers
for i in range(5):
    print(f"Count: {i}")

# Output:
# Count: 0
# Count: 1
# Count: 2
# Count: 3
# Count: 4
```

### Range Function
```python
# range(stop) - starts from 0
for i in range(3):
    print(i)  # 0, 1, 2

# range(start, stop)
for i in range(1, 4):
    print(i)  # 1, 2, 3

# range(start, stop, step)
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8
```

### Looping Through Strings
```python
# Loop through each character
word = "Python"
for char in word:
    print(char)

# Output:
# P
# y
# t
# h
# o
# n
```

### Looping Through Lists
```python
# Loop through list items
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")

# Loop with index
for i, fruit in enumerate(fruits):
    print(f"{i+1}. {fruit}")
```

## While Loops

### Basic While Loop
```python
# Count down
count = 5
while count > 0:
    print(f"Countdown: {count}")
    count -= 1
print("Blast off!")

# Output:
# Countdown: 5
# Countdown: 4
# Countdown: 3
# Countdown: 2
# Countdown: 1
# Blast off!
```

### While Loop with User Input
```python
# Keep asking until valid input
password = ""
while password != "secret":
    password = input("Enter the password: ")
    if password != "secret":
        print("Wrong password, try again")
print("Access granted!")
```

### Infinite Loop Prevention
```python
# Good - has a way to exit
count = 0
while count < 10:
    print(count)
    count += 1

# Bad - infinite loop (avoid this)
# count = 0
# while count < 10:
#     print(count)
#     # Missing count += 1
```

## Loop Control

### Break Statement
```python
# Exit loop early
for i in range(10):
    if i == 5:
        break
    print(i)

# Output: 0, 1, 2, 3, 4
```

### Continue Statement
```python
# Skip current iteration
for i in range(10):
    if i % 2 == 0:  # Skip even numbers
        continue
    print(i)

# Output: 1, 3, 5, 7, 9
```

### Nested Loops
```python
# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i * j}")
    print()  # Empty line between tables
```

## Common Loop Patterns

### Summing Numbers
```python
# Sum numbers from 1 to 10
total = 0
for i in range(1, 11):
    total += i
print(f"Sum: {total}")

# Using sum() function
total = sum(range(1, 11))
print(f"Sum: {total}")
```

### Finding Maximum/Minimum
```python
# Find maximum in a list
numbers = [3, 7, 2, 9, 1, 5]
maximum = numbers[0]  # Start with first element

for num in numbers:
    if num > maximum:
        maximum = num

print(f"Maximum: {maximum}")
```

### Counting Occurrences
```python
# Count vowels in a string
text = "Hello, World!"
vowels = "aeiouAEIOU"
count = 0

for char in text:
    if char in vowels:
        count += 1

print(f"Vowel count: {count}")
```

## Practice Exercises

### Exercise 1: Number Guessing Game
```python
import random

secret_number = random.randint(1, 100)
attempts = 0
max_attempts = 10

print("I'm thinking of a number between 1 and 100")

while attempts < max_attempts:
    guess = int(input(f"Attempt {attempts + 1}: Enter your guess: "))
    attempts += 1
    
    if guess < secret_number:
        print("Too low!")
    elif guess > secret_number:
        print("Too high!")
    else:
        print(f"Congratulations! You guessed it in {attempts} attempts!")
        break

if attempts >= max_attempts:
    print(f"Game over! The number was {secret_number}")
```

### Exercise 2: Multiplication Table
```python
# Print multiplication table for numbers 1-10
for i in range(1, 11):
    print(f"\nMultiplication table for {i}:")
    for j in range(1, 11):
        result = i * j
        print(f"{i} x {j} = {result}")
```

### Exercise 3: Password Generator
```python
import random
import string

# Generate random password
length = int(input("Enter password length: "))
password = ""

for _ in range(length):
    # Choose random character from letters, digits, and symbols
    char = random.choice(string.ascii_letters + string.digits + "!@#$%^&*")
    password += char

print(f"Generated password: {password}")
```

### Exercise 4: Factorial Calculator
```python
# Calculate factorial using loop
n = int(input("Enter a number: "))
factorial = 1

if n < 0:
    print("Factorial is not defined for negative numbers")
elif n == 0:
    print("0! = 1")
else:
    for i in range(1, n + 1):
        factorial *= i
    print(f"{n}! = {factorial}")
```

## Advanced Loop Techniques

### List Comprehensions
```python
# Traditional loop
squares = []
for i in range(10):
    squares.append(i ** 2)

# List comprehension (more concise)
squares = [i ** 2 for i in range(10)]

# With condition
even_squares = [i ** 2 for i in range(10) if i % 2 == 0]
```

### Enumerate Function
```python
# Loop with index and value
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(f"{index + 1}. {fruit}")

# Start enumeration from 1
for index, fruit in enumerate(fruits, 1):
    print(f"{index}. {fruit}")
```

### Zip Function
```python
# Loop through multiple lists simultaneously
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]

for name, age in zip(names, ages):
    print(f"{name} is {age} years old")
```

## Common Mistakes

### Infinite Loops
```python
# Wrong - infinite loop
i = 0
while i < 10:
    print(i)
    # Missing i += 1

# Correct
i = 0
while i < 10:
    print(i)
    i += 1
```

### Modifying List While Iterating
```python
# Wrong - can cause issues
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num % 2 == 0:
        numbers.remove(num)  # Don't modify while iterating

# Better - create new list
numbers = [1, 2, 3, 4, 5]
even_numbers = [num for num in numbers if num % 2 == 0]
```

### Off-by-One Errors
```python
# Wrong - off-by-one
for i in range(5):
    print(i)  # Prints 0, 1, 2, 3, 4

# If you want 1, 2, 3, 4, 5
for i in range(1, 6):
    print(i)
```

## Best Practices

### Use Descriptive Variable Names
```python
# Good
for student in students:
    print(student.name)

# Bad
for s in students:
    print(s.name)
```

### Use Appropriate Loop Type
```python
# Use for loop when you know the number of iterations
for i in range(10):
    print(i)

# Use while loop when you don't know the number of iterations
password = ""
while password != "correct":
    password = input("Enter password: ")
```

### Avoid Unnecessary Loops
```python
# Use built-in functions when possible
numbers = [1, 2, 3, 4, 5]

# Instead of loop
total = 0
for num in numbers:
    total += num

# Use sum()
total = sum(numbers)
```

## Quiz Questions
1. What is the difference between `for` and `while` loops?
2. How do you exit a loop early?
3. What does the `continue` statement do?
4. How do you loop through a list with both index and value?
5. What is an infinite loop and how do you avoid it?
6. How do you create a list of squares from 1 to 10?
7. What is the purpose of the `range()` function?
8. How do you loop through multiple lists simultaneously?

## Next Steps
- Practice with the exercises above
- Experiment with different loop patterns
- Learn about functions in the next module
- Try creating more complex programs using loops 