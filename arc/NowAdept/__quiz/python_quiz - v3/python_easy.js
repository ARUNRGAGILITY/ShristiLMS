const pythonEasyQuestions = [
  {
    "id": 1,
    "question": "Which keyword is used to define a function in Python?",
    "options": ["function", "def", "fun", "define"],
    "correct_answers": [1],
    "explanation": "'def' is the keyword used to define functions in Python.",
    "topic": "Functions",
    "difficulty": "easy"
  },
  {
    "id": 2,
    "question": "What will be the output of print(2 ** 3)?",
    "options": ["5", "6", "8", "9"],
    "correct_answers": [2],
    "explanation": "The ** operator is used for exponentiation. 2 ** 3 equals 8.",
    "topic": "Operators",
    "difficulty": "easy"
  },
  {
    "id": 3,
    "question": "Which of the following creates an empty list?",
    "options": ["list()", "[]", "{}", "()"],
    "correct_answers": [0, 1],
    "explanation": "Both list() and [] create empty lists in Python.",
    "topic": "Data Types",
    "difficulty": "easy"
  },
  {
    "id": 4,
    "question": "What is the correct way to create a comment in Python?",
    "options": ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
    "correct_answers": [1],
    "explanation": "Python uses # for single-line comments.",
    "topic": "Syntax",
    "difficulty": "easy"
  },
  {
    "id": 5,
    "question": "Which data type is used to store text in Python?",
    "options": ["int", "float", "str", "bool"],
    "correct_answers": [2],
    "explanation": "The 'str' data type is used to store text/strings in Python.",
    "topic": "Data Types",
    "difficulty": "easy"
  },
  {
    "id": 6,
    "question": "What does the len() function return?",
    "options": ["The type of object", "The length of an object", "The value of object", "The memory address"],
    "correct_answers": [1],
    "explanation": "len() returns the number of items in an object like strings, lists, etc.",
    "topic": "Built-in Functions",
    "difficulty": "easy"
  },
  {
    "id": 7,
    "question": "Which operator is used for string concatenation?",
    "options": ["&", "+", "*", "++"],
    "correct_answers": [1],
    "explanation": "The + operator is used to concatenate strings in Python.",
    "topic": "String Operations",
    "difficulty": "easy"
  },
  {
    "id": 8,
    "question": "What is the correct syntax for a while loop?",
    "options": ["while (condition):", "while condition:", "while: condition", "loop while condition:"],
    "correct_answers": [1],
    "explanation": "Python while loop syntax is: while condition:",
    "topic": "Loops",
    "difficulty": "easy"
  },
  {
    "id": 9,
    "question": "Which keyword is used to exit a loop prematurely?",
    "options": ["exit", "break", "stop", "end"],
    "correct_answers": [1],
    "explanation": "'break' is used to exit/terminate a loop before it completes.",
    "topic": "Control Flow",
    "difficulty": "easy"
  },
  {
    "id": 10,
    "question": "What does print() function do?",
    "options": ["Prints to printer", "Displays output on screen", "Saves to file", "Creates a variable"],
    "correct_answers": [1],
    "explanation": "print() displays output on the console/screen.",
    "topic": "Built-in Functions",
    "difficulty": "easy"
  },
  {
    "id": 11,
    "question": "Which of these is a valid variable name?",
    "options": ["2var", "var-name", "_variable", "class"],
    "correct_answers": [2],
    "explanation": "Variable names can start with underscore or letter, not numbers or hyphens.",
    "topic": "Variables",
    "difficulty": "easy"
  },
  {
    "id": 12,
    "question": "What is the result of 10 // 3?",
    "options": ["3.33", "3", "4", "3.0"],
    "correct_answers": [1],
    "explanation": "// is floor division operator, returns 3 (integer division).",
    "topic": "Operators",
    "difficulty": "easy"
  },
  {
    "id": 13,
    "question": "Which method converts a string to lowercase?",
    "options": ["toLower()", "lower()", "lowercase()", "downcase()"],
    "correct_answers": [1],
    "explanation": "The lower() method converts string to lowercase.",
    "topic": "String Methods",
    "difficulty": "easy"
  },
  {
    "id": 14,
    "question": "What does the input() function do?",
    "options": ["Reads from file", "Gets user input", "Imports module", "Defines input"],
    "correct_answers": [1],
    "explanation": "input() function reads user input from keyboard.",
    "topic": "Input/Output",
    "difficulty": "easy"
  },
  {
    "id": 15,
    "question": "Which symbol is used for indentation in Python?",
    "options": ["Tab only", "Spaces only", "Both tabs and spaces", "Curly braces"],
    "correct_answers": [2],
    "explanation": "Python accepts both tabs and spaces for indentation (but be consistent).",
    "topic": "Syntax",
    "difficulty": "easy"
  },
  {
    "id": 16,
    "question": "What is the correct way to check if a key exists in a dictionary?",
    "options": ["key in dict", "dict.has_key(key)", "dict.contains(key)", "key exists dict"],
    "correct_answers": [0],
    "explanation": "Use 'key in dict' to check if a key exists in dictionary.",
    "topic": "Dictionaries",
    "difficulty": "easy"
  },
  {
    "id": 17,
    "question": "Which data type is mutable?",
    "options": ["string", "tuple", "list", "int"],
    "correct_answers": [2],
    "explanation": "Lists are mutable (can be changed after creation).",
    "topic": "Data Types",
    "difficulty": "easy"
  },
  {
    "id": 18,
    "question": "What does the range(5) function generate?",
    "options": ["0,1,2,3,4", "1,2,3,4,5", "0,1,2,3,4,5", "1,2,3,4"],
    "correct_answers": [0],
    "explanation": "range(5) generates numbers from 0 to 4 (5 numbers starting from 0).",
    "topic": "Built-in Functions",
    "difficulty": "easy"
  },
  {
    "id": 19,
    "question": "Which keyword is used for conditional statements?",
    "options": ["when", "if", "check", "condition"],
    "correct_answers": [1],
    "explanation": "'if' is used for conditional statements in Python.",
    "topic": "Control Flow",
    "difficulty": "easy"
  },
  {
    "id": 20,
    "question": "What is the file extension for Python files?",
    "options": [".python", ".py", ".pt", ".pyt"],
    "correct_answers": [1],
    "explanation": "Python files use .py extension.",
    "topic": "Basics",
    "difficulty": "easy"
  },
  {
    "id": 21,
    "question": "Which method adds an element to the end of a list?",
    "options": ["add()", "append()", "insert()", "push()"],
    "correct_answers": [1],
    "explanation": "append() method adds an element to the end of a list.",
    "topic": "List Methods",
    "difficulty": "easy"
  },
  {
    "id": 22,
    "question": "What is the result of bool(0)?",
    "options": ["True", "False", "0", "Error"],
    "correct_answers": [1],
    "explanation": "0 is considered False in boolean context.",
    "topic": "Data Types",
    "difficulty": "easy"
  },
  {
    "id": 23,
    "question": "Which operator is used for equality comparison?",
    "options": ["=", "==", "===", "eq"],
    "correct_answers": [1],
    "explanation": "== is used for equality comparison, = is for assignment.",
    "topic": "Operators",
    "difficulty": "easy"
  },
  {
    "id": 24,
    "question": "What does the type() function return?",
    "options": ["Value of variable", "Type of variable", "Size of variable", "Name of variable"],
    "correct_answers": [1],
    "explanation": "type() function returns the data type of a variable.",
    "topic": "Built-in Functions",
    "difficulty": "easy"
  },
  {
    "id": 25,
    "question": "Which keyword is used to skip the current iteration in a loop?",
    "options": ["skip", "continue", "next", "pass"],
    "correct_answers": [1],
    "explanation": "'continue' skips the current iteration and moves to the next.",
    "topic": "Control Flow",
    "difficulty": "easy"
  },
  {
    "id": 26,
    "question": "What is the correct syntax for an if-else statement?",
    "options": ["if condition: else:", "if (condition) else", "if condition: \n else:", "if condition then else"],
    "correct_answers": [2],
    "explanation": "Correct syntax: if condition: \\n statements \\n else: \\n statements",
    "topic": "Control Flow",
    "difficulty": "easy"
  },
  {
    "id": 27,
    "question": "Which method removes all elements from a list?",
    "options": ["delete()", "remove()", "clear()", "empty()"],
    "correct_answers": [2],
    "explanation": "clear() method removes all elements from a list.",
    "topic": "List Methods",
    "difficulty": "easy"
  },
  {
    "id": 28,
    "question": "What is the result of 'Hello' * 3?",
    "options": ["HelloHelloHello", "Hello3", "Hello Hello Hello", "Error"],
    "correct_answers": [0],
    "explanation": "String multiplication repeats the string: 'Hello' * 3 = 'HelloHelloHello'",
    "topic": "String Operations",
    "difficulty": "easy"
  },
  {
    "id": 29,
    "question": "Which function converts a string to integer?",
    "options": ["str()", "int()", "float()", "convert()"],
    "correct_answers": [1],
    "explanation": "int() function converts a string to integer.",
    "topic": "Type Conversion",
    "difficulty": "easy"
  },
  {
    "id": 30,
    "question": "What does the pass statement do?",
    "options": ["Exits function", "Does nothing", "Passes value", "Throws error"],
    "correct_answers": [1],
    "explanation": "'pass' is a null operation - it does nothing when executed.",
    "topic": "Control Flow",
    "difficulty": "easy"
  },
  {
    "id": 31,
    "question": "Which method splits a string into a list?",
    "options": ["divide()", "split()", "separate()", "break()"],
    "correct_answers": [1],
    "explanation": "split() method divides a string into a list of substrings.",
    "topic": "String Methods",
    "difficulty": "easy"
  },
  {
    "id": 32,
    "question": "What is the index of the first element in a list?",
    "options": ["1", "0", "-1", "First"],
    "correct_answers": [1],
    "explanation": "Python uses 0-based indexing, so first element is at index 0.",
    "topic": "Lists",
    "difficulty": "easy"
  },
  {
    "id": 33,
    "question": "Which keyword defines a class?",
    "options": ["class", "Class", "define", "object"],
    "correct_answers": [0],
    "explanation": "'class' keyword is used to define a class in Python.",
    "topic": "Classes",
    "difficulty": "easy"
  },
  {
    "id": 34,
    "question": "What does the strip() method do?",
    "options": ["Removes characters", "Removes whitespace", "Strips quotes", "Removes vowels"],
    "correct_answers": [1],
    "explanation": "strip() removes leading and trailing whitespace from strings.",
    "topic": "String Methods",
    "difficulty": "easy"
  },
  {
    "id": 35,
    "question": "Which data structure uses key-value pairs?",
    "options": ["List", "Tuple", "Dictionary", "Set"],
    "correct_answers": [2],
    "explanation": "Dictionary stores data as key-value pairs.",
    "topic": "Data Structures",
    "difficulty": "easy"
  },
  {
    "id": 36,
    "question": "What is the result of 5 % 2?",
    "options": ["2.5", "2", "1", "0"],
    "correct_answers": [2],
    "explanation": "% is modulo operator, 5 % 2 returns remainder 1.",
    "topic": "Operators",
    "difficulty": "easy"
  },
  {
    "id": 37,
    "question": "Which method joins elements of a list into a string?",
    "options": ["join()", "connect()", "merge()", "combine()"],
    "correct_answers": [0],
    "explanation": "join() method joins list elements into a single string.",
    "topic": "String Methods",
    "difficulty": "easy"
  },
  {
    "id": 38,
    "question": "What does the elif keyword represent?",
    "options": ["End if", "Else if", "Error if", "Exit if"],
    "correct_answers": [1],
    "explanation": "'elif' stands for 'else if' - additional condition checking.",
    "topic": "Control Flow",
    "difficulty": "easy"
  },
  {
    "id": 39,
    "question": "Which function returns the maximum value?",
    "options": ["maximum()", "max()", "largest()", "top()"],
    "correct_answers": [1],
    "explanation": "max() function returns the largest value from given arguments.",
    "topic": "Built-in Functions",
    "difficulty": "easy"
  },
  {
    "id": 40,
    "question": "What is the correct way to import a module?",
    "options": ["include module", "import module", "require module", "use module"],
    "correct_answers": [1],
    "explanation": "'import' keyword is used to import modules in Python.",
    "topic": "Modules",
    "difficulty": "easy"
  },
  {
    "id": 41,
    "question": "Which method checks if string starts with a substring?",
    "options": ["begins()", "starts()", "startswith()", "prefix()"],
    "correct_answers": [2],
    "explanation": "startswith() method checks if string starts with specified substring.",
    "topic": "String Methods",
    "difficulty": "easy"
  },
  {
    "id": 42,
    "question": "What does the return statement do in a function?",
    "options": ["Prints value", "Returns value", "Stores value", "Deletes value"],
    "correct_answers": [1],
    "explanation": "'return' statement sends a value back from a function.",
    "topic": "Functions",
    "difficulty": "easy"
  },
  {
    "id": 43,
    "question": "Which collection type does not allow duplicates?",
    "options": ["List", "Tuple", "Dictionary", "Set"],
    "correct_answers": [3],
    "explanation": "Set automatically removes duplicates and stores unique elements.",
    "topic": "Data Structures",
    "difficulty": "easy"
  },
  {
    "id": 44,
    "question": "What is the result of bool('')?",
    "options": ["True", "False", "Empty", "Error"],
    "correct_answers": [1],
    "explanation": "Empty string is considered False in boolean context.",
    "topic": "Data Types",
    "difficulty": "easy"
  },
  {
    "id": 45,
    "question": "Which operator is used for 'not equal'?",
    "options": ["<>", "!=", "not=", "~="],
    "correct_answers": [1],
    "explanation": "!= operator checks if two values are not equal.",
    "topic": "Operators",
    "difficulty": "easy"
  },
  {
    "id": 46,
    "question": "What does the abs() function do?",
    "options": ["Absolute value", "Average", "Add", "Approximate"],
    "correct_answers": [0],
    "explanation": "abs() returns the absolute (positive) value of a number.",
    "topic": "Built-in Functions",
    "difficulty": "easy"
  },
  {
    "id": 47,
    "question": "Which keyword is used to handle exceptions?",
    "options": ["catch", "try", "handle", "except"],
    "correct_answers": [1, 3],
    "explanation": "'try' and 'except' are used together for exception handling.",
    "topic": "Exception Handling",
    "difficulty": "easy"
  },
  {
    "id": 48,
    "question": "What is the correct way to create a tuple?",
    "options": ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "tuple(1, 2, 3)"],
    "correct_answers": [0],
    "explanation": "Tuples are created using parentheses: (1, 2, 3)",
    "topic": "Data Types",
    "difficulty": "easy"
  },
  {
    "id": 49,
    "question": "Which method converts string to uppercase?",
    "options": ["toUpper()", "upper()", "uppercase()", "caps()"],
    "correct_answers": [1],
    "explanation": "upper() method converts string to uppercase letters.",
    "topic": "String Methods",
    "difficulty": "easy"
  },
  {
    "id": 50,
    "question": "What does the round() function do?",
    "options": ["Rounds number", "Creates circle", "Rotates", "Repeats"],
    "correct_answers": [0],
    "explanation": "round() function rounds a number to specified decimal places.",
    "topic": "Built-in Functions",
    "difficulty": "easy"
  },
  {
    "id": 51,
    "question": "Which is the correct syntax for a for loop?",
    "options": ["for i in range:", "for i in range():", "for (i in range):", "foreach i in range:"],
    "correct_answers": [1],
    "explanation": "Correct syntax: for variable in iterable:",
    "topic": "Loops",
    "difficulty": "easy"
  },
  {
    "id": 52,
    "question": "What is the result of list('abc')?",
    "options": ["['abc']", "['a', 'b', 'c']", "[a, b, c]", "Error"],
    "correct_answers": [1],
    "explanation": "list() converts string to list of individual characters.",
    "topic": "Type Conversion",
    "difficulty": "easy"
  },
  {
    "id": 53,
    "question": "Which method removes the last element from a list?",
    "options": ["remove()", "delete()", "pop()", "cut()"],
    "correct_answers": [2],
    "explanation": "pop() removes and returns the last element from a list.",
    "topic": "List Methods",
    "difficulty": "easy"
  },
  {
    "id": 54,
    "question": "What does the in operator do?",
    "options": ["Imports", "Includes", "Checks membership", "Indents"],
    "correct_answers": [2],
    "explanation": "'in' operator checks if an element exists in a collection.",
    "topic": "Operators",
    "difficulty": "easy"
  },
  {
    "id": 55,
    "question": "Which function converts to float?",
    "options": ["float()", "decimal()", "real()", "number()"],
    "correct_answers": [0],
    "explanation": "float() function converts value to floating-point number.",
    "topic": "Type Conversion",
    "difficulty": "easy"
  },
  {
    "id": 56,
    "question": "What is the result of not True?",
    "options": ["True", "False", "None", "Error"],
    "correct_answers": [1],
    "explanation": "'not' operator inverts boolean value: not True = False",
    "topic": "Operators",
    "difficulty": "easy"
  },
  {
    "id": 57,
    "question": "Which method finds the index of an element in a list?",
    "options": ["find()", "index()", "search()", "locate()"],
    "correct_answers": [1],
    "explanation": "index() method returns the index of specified element.",
    "topic": "List Methods",
    "difficulty": "easy"
  },
  {
    "id": 58,
    "question": "What does the sorted() function do?",
    "options": ["Sorts in place", "Returns sorted copy", "Checks if sorted", "Reverses order"],
    "correct_answers": [1],
    "explanation": "sorted() returns a new sorted list without modifying original.",
    "topic": "Built-in Functions",
    "difficulty": "easy"
  },
  {
    "id": 59,
    "question": "Which keyword is used to define global variables?",
    "options": ["global", "public", "external", "world"],
    "correct_answers": [0],
    "explanation": "'global' keyword declares a variable as global scope.",
    "topic": "Variables",
    "difficulty": "easy"
  },
  {
    "id": 60,
    "question": "What is the result of True and False?",
    "options": ["True", "False", "None", "Error"],
    "correct_answers": [1],
    "explanation": "'and' operator returns True only if both operands are True.",
    "topic": "Operators",
    "difficulty": "easy"
  },
  {
    "id": 61,
    "question": "Which method counts occurrences of an element?",
    "options": ["count()", "occurrences()", "frequency()", "times()"],
    "correct_answers": [0],
    "explanation": "count() method returns number of occurrences of specified element.",
    "topic": "List Methods",
    "difficulty": "easy"
  },
  {
    "id": 62,
    "question": "What does the str() function do?",
    "options": ["Creates string", "Converts to string", "Strips string", "Stores string"],
    "correct_answers": [1],
    "explanation": "str() function converts value to string representation.",
    "topic": "Type Conversion",
    "difficulty": "easy"
  },
  {
    "id": 63,
    "question": "Which is correct way to access dictionary value?",
    "options": ["dict.key", "dict[key]", "dict(key)", "dict->key"],
    "correct_answers": [1],
    "explanation": "Use square brackets to access dictionary values: dict[key]",
    "topic": "Dictionaries",
    "difficulty": "easy"
  },
  {
    "id": 64,
    "question": "What is the result of False or True?",
    "options": ["True", "False", "None", "Error"],
    "correct_answers": [0],
    "explanation": "'or' operator returns True if at least one operand is True.",
    "topic": "Operators",
    "difficulty": "easy"
  },
  {
    "id": 65,
    "question": "Which method replaces substring in a string?",
    "options": ["substitute()", "replace()", "change()", "swap()"],
    "correct_answers": [1],
    "explanation": "replace() method replaces occurrences of substring with another.",
    "topic": "String Methods",
    "difficulty": "easy"
  },
  {
    "id": 66,
    "question": "What does the sum() function do?",
    "options": ["Adds two numbers", "Sums iterable", "Summary", "Calculates"],
    "correct_answers": [1],
    "explanation": "sum() returns the sum of all items in an iterable.",
    "topic": "Built-in Functions",
    "difficulty": "easy"
  },
  {
    "id": 67,
    "question": "Which keyword creates an anonymous function?",
    "options": ["function", "lambda", "anonymous", "def"],
    "correct_answers": [1],
    "explanation": "'lambda' creates small anonymous functions.",
    "topic": "Functions",
    "difficulty": "easy"
  }
];

// Export for Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = pythonEasyQuestions;
}