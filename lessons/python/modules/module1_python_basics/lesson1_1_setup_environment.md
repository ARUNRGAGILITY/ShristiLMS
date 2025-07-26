# Lesson 1.1: Setup Environment

## Overview
Learn how to install Python, set up your development environment, and write your first "Hello World" program.

## Key Takeaways
- Install Python on your operating system
- Set up a code editor or IDE
- Understand the Python interpreter
- Write and run your first Python program
- Learn basic Python syntax and structure

## Prerequisites
- A computer with internet access
- Basic computer literacy
- Enthusiasm to learn! 🚀

## Installation Guide

### Windows
1. Visit [python.org](https://python.org)
2. Download the latest Python version (3.8+)
3. Run the installer with "Add Python to PATH" checked
4. Verify installation in Command Prompt:
   ```bash
   python --version
   ```

### macOS
1. Install Homebrew (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Install Python:
   ```bash
   brew install python
   ```
3. Verify installation:
   ```bash
   python3 --version
   ```

### Linux (Ubuntu/Debian)
1. Update package list:
   ```bash
   sudo apt update
   ```
2. Install Python:
   ```bash
   sudo apt install python3 python3-pip
   ```
3. Verify installation:
   ```bash
   python3 --version
   ```

## Setting Up Your Development Environment

### Recommended Code Editors
- **VS Code**: Free, powerful, with excellent Python support
- **PyCharm**: Professional IDE with advanced features
- **Sublime Text**: Lightweight and fast
- **Jupyter Notebook**: Great for data science and learning

### VS Code Setup
1. Download and install VS Code
2. Install the Python extension
3. Install the Python IntelliSense extension
4. Configure your Python interpreter

## Your First Python Program

### Hello World
```python
# hello_world.py
print("Hello, World!")
print("Welcome to Python programming!")
print("Let's start coding! 🐍")
```

### Running Your Program
```bash
# From command line/terminal
python hello_world.py
# or
python3 hello_world.py
```

### Expected Output
```
Hello, World!
Welcome to Python programming!
Let's start coding! 🐍
```

## Python Interpreter

### Interactive Mode
```bash
python
# or
python3
```

### Basic Commands
```python
>>> print("Hello from Python!")
Hello from Python!

>>> 2 + 2
4

>>> name = "Python"
>>> print(f"Hello, {name}!")
Hello, Python!

>>> exit()
```

## Python Syntax Basics

### Comments
```python
# This is a single-line comment

"""
This is a multi-line comment
or docstring
"""

# Comments help explain your code
```

### Indentation
```python
# Python uses indentation to define code blocks
if True:
    print("This is indented")
    print("This is also indented")
print("This is not indented")
```

## Practice Exercise

### Exercise 1: Environment Setup
1. Install Python on your system
2. Verify the installation
3. Install a code editor (VS Code recommended)
4. Create a file called `my_first_program.py`
5. Write a program that prints your name and favorite hobby
6. Run your program from the command line

### Exercise 2: Interactive Python
1. Open Python interpreter
2. Try these commands:
   ```python
   >>> print("My name is [Your Name]")
   >>> age = 25
   >>> print(f"I am {age} years old")
   >>> 10 + 5
   >>> "Python" * 3
   ```

## Common Issues and Solutions

### "python command not found"
- **Windows**: Add Python to PATH during installation
- **macOS**: Use `python3` instead of `python`
- **Linux**: Install python3 package

### Permission Denied
- **Windows**: Run Command Prompt as Administrator
- **macOS/Linux**: Use `sudo` for system-wide installation

### Version Conflicts
- Use virtual environments for project isolation
- Check Python version with `python --version`

## Next Steps
- Complete the practice exercises
- Explore your code editor's features
- Try different Python commands in interactive mode
- Prepare for the next lesson on variables and data types

## Resources
- [Python Official Documentation](https://docs.python.org/)
- [VS Code Python Tutorial](https://code.visualstudio.com/docs/python/python-tutorial)
- [Python Installation Guide](https://wiki.python.org/moin/BeginnersGuide/Download)
- [Real Python Tutorials](https://realpython.com/)

## Quiz Questions
1. What command do you use to check your Python version?
2. How do you exit the Python interpreter?
3. What is the difference between `python` and `python3` commands?
4. Why is indentation important in Python?
5. What is the purpose of comments in code? 