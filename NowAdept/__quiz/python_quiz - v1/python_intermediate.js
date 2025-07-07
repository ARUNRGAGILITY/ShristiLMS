const pythonIntermediateQuestions = [
  {
    "id": 68,
    "question": "What is the difference between append() and extend() methods?",
    "options": ["No difference", "append() adds single element, extend() adds multiple", "extend() is faster", "append() is deprecated"],
    "correct_answers": [1],
    "explanation": "append() adds a single element, extend() adds all elements from an iterable.",
    "topic": "List Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 69,
    "question": "Which of the following are valid ways to create a set?",
    "options": ["set()", "{1, 2, 3}", "set([1, 2, 3])", "{}"],
    "correct_answers": [0, 1, 2],
    "explanation": "set(), {1,2,3}, and set([1,2,3]) create sets. {} creates empty dict.",
    "topic": "Data Structures",
    "difficulty": "intermediate"
  },
  {
    "id": 70,
    "question": "What does *args allow in function definition?",
    "options": ["Variable arguments", "Keyword arguments", "Default arguments", "No arguments"],
    "correct_answers": [0],
    "explanation": "*args allows a function to accept variable number of positional arguments.",
    "topic": "Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 71,
    "question": "What is the output of [1, 2, 3][1:3]?",
    "options": ["[1, 2]", "[2, 3]", "[1, 2, 3]", "[2]"],
    "correct_answers": [1],
    "explanation": "Slicing [1:3] returns elements from index 1 to 2 (3 is excluded).",
    "topic": "List Slicing",
    "difficulty": "intermediate"
  },
  {
    "id": 72,
    "question": "Which method is used to get all keys from a dictionary?",
    "options": ["dict.keys()", "dict.getkeys()", "dict.allkeys()", "keys(dict)"],
    "correct_answers": [0],
    "explanation": "dict.keys() returns a view object of all keys in dictionary.",
    "topic": "Dictionary Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 73,
    "question": "What does **kwargs represent in function parameters?",
    "options": ["Variable arguments", "Keyword arguments", "Optional arguments", "Return arguments"],
    "correct_answers": [1],
    "explanation": "**kwargs allows function to accept variable number of keyword arguments.",
    "topic": "Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 74,
    "question": "What is list comprehension used for?",
    "options": ["List documentation", "Creating lists concisely", "List comparison", "List compression"],
    "correct_answers": [1],
    "explanation": "List comprehension provides concise way to create lists.",
    "topic": "List Comprehension",
    "difficulty": "intermediate"
  },
  {
    "id": 75,
    "question": "Which statement about sets is correct?",
    "options": ["Sets are ordered", "Sets allow duplicates", "Sets are mutable", "Sets support indexing"],
    "correct_answers": [2],
    "explanation": "Sets are mutable (can be modified) but unordered and don't allow duplicates.",
    "topic": "Data Structures",
    "difficulty": "intermediate"
  },
  {
    "id": 76,
    "question": "What does the enumerate() function return?",
    "options": ["Numbers only", "Index-value pairs", "Values only", "Length"],
    "correct_answers": [1],
    "explanation": "enumerate() returns index-value pairs from an iterable.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 77,
    "question": "Which is the correct syntax for dictionary comprehension?",
    "options": ["{k: v for k, v in items}", "[k: v for k, v in items]", "(k: v for k, v in items)", "{k, v for k, v in items}"],
    "correct_answers": [0],
    "explanation": "Dictionary comprehension uses {key: value for item in iterable} syntax.",
    "topic": "Dictionary Comprehension",
    "difficulty": "intermediate"
  },
  {
    "id": 78,
    "question": "What does the zip() function do?",
    "options": ["Compresses files", "Combines iterables", "Sorts lists", "Filters data"],
    "correct_answers": [1],
    "explanation": "zip() combines multiple iterables element-wise into tuples.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 79,
    "question": "Which method removes and returns dictionary item?",
    "options": ["remove()", "delete()", "pop()", "extract()"],
    "correct_answers": [2],
    "explanation": "pop() removes and returns value for specified key from dictionary.",
    "topic": "Dictionary Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 80,
    "question": "What is the difference between is and ==?",
    "options": ["No difference", "is checks identity, == checks equality", "== is faster", "is is deprecated"],
    "correct_answers": [1],
    "explanation": "'is' checks object identity, '==' checks value equality.",
    "topic": "Operators",
    "difficulty": "intermediate"
  },
  {
    "id": 81,
    "question": "Which statement about tuples is false?",
    "options": ["Tuples are immutable", "Tuples are ordered", "Tuples allow duplicates", "Tuples are mutable"],
    "correct_answers": [3],
    "explanation": "Tuples are immutable (cannot be changed after creation).",
    "topic": "Data Types",
    "difficulty": "intermediate"
  },
  {
    "id": 82,
    "question": "What does the filter() function do?",
    "options": ["Removes duplicates", "Filters elements based on condition", "Sorts elements", "Counts elements"],
    "correct_answers": [1],
    "explanation": "filter() returns elements from iterable where function returns True.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 83,
    "question": "Which is correct way to handle multiple exceptions?",
    "options": ["except Exception1, Exception2:", "except (Exception1, Exception2):", "except Exception1 or Exception2:", "except Exception1 and Exception2:"],
    "correct_answers": [1],
    "explanation": "Use except (Exception1, Exception2): to handle multiple exceptions.",
    "topic": "Exception Handling",
    "difficulty": "intermediate"
  },
  {
    "id": 84,
    "question": "What does the map() function do?",
    "options": ["Creates maps", "Applies function to each element", "Maps keys to values", "Finds locations"],
    "correct_answers": [1],
    "explanation": "map() applies a function to each item in an iterable.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 85,
    "question": "Which method creates a shallow copy of a list?",
    "options": ["list.copy()", "list.clone()", "list.duplicate()", "list.mirror()"],
    "correct_answers": [0],
    "explanation": "copy() method creates a shallow copy of the list.",
    "topic": "List Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 86,
    "question": "What is the purpose of __init__ method?",
    "options": ["Initialize class", "Initialize instance", "Initialize module", "Initialize function"],
    "correct_answers": [1],
    "explanation": "__init__ is constructor method that initializes new instance of class.",
    "topic": "Classes",
    "difficulty": "intermediate"
  },
  {
    "id": 87,
    "question": "Which statement about generators is correct?",
    "options": ["Generators store all values", "Generators use yield", "Generators are faster than lists", "Generators are immutable"],
    "correct_answers": [1],
    "explanation": "Generators use 'yield' keyword to produce values on-demand.",
    "topic": "Generators",
    "difficulty": "intermediate"
  },
  {
    "id": 88,
    "question": "What does the any() function return?",
    "options": ["Any element", "True if any element is True", "Random element", "First element"],
    "correct_answers": [1],
    "explanation": "any() returns True if at least one element in iterable is True.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 89,
    "question": "Which method merges two dictionaries?",
    "options": ["dict.merge()", "dict.update()", "dict.combine()", "dict.join()"],
    "correct_answers": [1],
    "explanation": "update() method merges another dictionary into current one.",
    "topic": "Dictionary Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 90,
    "question": "What is the difference between remove() and discard() for sets?",
    "options": ["No difference", "remove() raises error if not found, discard() doesn't", "discard() is faster", "remove() is deprecated"],
    "correct_answers": [1],
    "explanation": "remove() raises KeyError if element not found, discard() doesn't.",
    "topic": "Set Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 91,
    "question": "What does the all() function return?",
    "options": ["All elements", "True if all elements are True", "Complete list", "Everything"],
    "correct_answers": [1],
    "explanation": "all() returns True only if all elements in iterable are True.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 92,
    "question": "Which is correct syntax for string formatting?",
    "options": ["'Hello {}' % name", "'Hello {}'.format(name)", "f'Hello {name}'", "'Hello' + name"],
    "correct_answers": [1, 2],
    "explanation": "Both .format() and f-strings are modern string formatting methods.",
    "topic": "String Formatting",
    "difficulty": "intermediate"
  },
  {
    "id": 93,
    "question": "What does the reversed() function do?",
    "options": ["Reverses in place", "Returns reversed iterator", "Reverses permanently", "Sorts in reverse"],
    "correct_answers": [1],
    "explanation": "reversed() returns an iterator with elements in reverse order.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 94,
    "question": "Which method returns default value if key not found in dictionary?",
    "options": ["dict.get()", "dict.default()", "dict.find()", "dict.search()"],
    "correct_answers": [0],
    "explanation": "get() method returns default value if key doesn't exist.",
    "topic": "Dictionary Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 95,
    "question": "What is the purpose of self parameter in class methods?",
    "options": ["Reference to class", "Reference to instance", "Reference to method", "Reference to module"],
    "correct_answers": [1],
    "explanation": "'self' refers to the instance of the class calling the method.",
    "topic": "Classes",
    "difficulty": "intermediate"
  },
  {
    "id": 96,
    "question": "Which statement creates a generator expression?",
    "options": ["[x for x in range(10)]", "(x for x in range(10))", "{x for x in range(10)}", "x for x in range(10)"],
    "correct_answers": [1],
    "explanation": "Parentheses create generator expression: (x for x in range(10))",
    "topic": "Generators",
    "difficulty": "intermediate"
  },
  {
    "id": 97,
    "question": "What does the setdefault() method do for dictionaries?",
    "options": ["Sets default value", "Gets default value", "Returns key if exists, sets if not", "Removes default"],
    "correct_answers": [2],
    "explanation": "setdefault() returns value if key exists, otherwise sets and returns default.",
    "topic": "Dictionary Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 98,
    "question": "Which method sorts a list in place?",
    "options": ["list.sorted()", "sorted(list)", "list.sort()", "sort(list)"],
    "correct_answers": [2],
    "explanation": "sort() method modifies the original list, sorted() returns new list.",
    "topic": "List Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 99,
    "question": "What is the difference between shallow and deep copy?",
    "options": ["No difference", "Shallow copies references, deep copies objects", "Deep is faster", "Shallow is newer"],
    "correct_answers": [1],
    "explanation": "Shallow copy copies references, deep copy creates new objects recursively.",
    "topic": "Copy Operations",
    "difficulty": "intermediate"
  },
  {
    "id": 100,
    "question": "Which keyword is used to create iterator from function?",
    "options": ["return", "yield", "iterate", "next"],
    "correct_answers": [1],
    "explanation": "'yield' keyword creates generator function that returns iterator.",
    "topic": "Generators",
    "difficulty": "intermediate"
  },
  {
    "id": 101,
    "question": "What does the isinstance() function check?",
    "options": ["Instance name", "If object is instance of class", "Instance count", "Instance location"],
    "correct_answers": [1],
    "explanation": "isinstance() checks if object is instance of specified class/type.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 102,
    "question": "Which method adds element at specific position in list?",
    "options": ["add()", "append()", "insert()", "place()"],
    "correct_answers": [2],
    "explanation": "insert() adds element at specified index position.",
    "topic": "List Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 103,
    "question": "What does the locals() function return?",
    "options": ["Local variables", "Local functions", "Local classes", "Local modules"],
    "correct_answers": [0],
    "explanation": "locals() returns dictionary of local namespace variables.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 104,
    "question": "Which operation is not supported by tuples?",
    "options": ["Indexing", "Slicing", "Item assignment", "Iteration"],
    "correct_answers": [2],
    "explanation": "Tuples are immutable, so item assignment is not allowed.",
    "topic": "Data Types",
    "difficulty": "intermediate"
  },
  {
    "id": 105,
    "question": "What does the globals() function return?",
    "options": ["Global variables", "Global functions", "Global classes", "All globals"],
    "correct_answers": [0, 3],
    "explanation": "globals() returns dictionary of global namespace.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 106,
    "question": "Which method finds intersection of two sets?",
    "options": ["set.common()", "set.intersection()", "set.overlap()", "set.match()"],
    "correct_answers": [1],
    "explanation": "intersection() returns common elements between sets.",
    "topic": "Set Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 107,
    "question": "What is the purpose of __str__ method?",
    "options": ["String conversion", "String formatting", "String representation", "String creation"],
    "correct_answers": [2],
    "explanation": "__str__ defines human-readable string representation of object.",
    "topic": "Classes",
    "difficulty": "intermediate"
  },
  {
    "id": 108,
    "question": "Which statement about list slicing is correct?",
    "options": ["Start index is included", "End index is included", "Both included", "Neither included"],
    "correct_answers": [0],
    "explanation": "In slicing [start:end], start is included but end is excluded.",
    "topic": "List Slicing",
    "difficulty": "intermediate"
  },
  {
    "id": 109,
    "question": "What does the hasattr() function check?",
    "options": ["Has attributes", "If object has specified attribute", "Attribute count", "Attribute type"],
    "correct_answers": [1],
    "explanation": "hasattr() checks if object has the specified attribute.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 110,
    "question": "Which method creates union of two sets?",
    "options": ["set.combine()", "set.union()", "set.merge()", "set.join()"],
    "correct_answers": [1],
    "explanation": "union() returns set containing all unique elements from both sets.",
    "topic": "Set Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 111,
    "question": "What is the difference between append() and insert()?",
    "options": ["No difference", "append() adds at end, insert() at position", "insert() is faster", "append() is deprecated"],
    "correct_answers": [1],
    "explanation": "append() adds at end, insert() adds at specified position.",
    "topic": "List Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 112,
    "question": "Which function creates range of numbers?",
    "options": ["numbers()", "range()", "sequence()", "series()"],
    "correct_answers": [1],
    "explanation": "range() function generates sequence of numbers.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 113,
    "question": "What does the getattr() function do?",
    "options": ["Gets all attributes", "Gets specified attribute", "Gets attribute count", "Gets attribute type"],
    "correct_answers": [1],
    "explanation": "getattr() returns value of specified attribute from object.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 114,
    "question": "Which method removes all elements from a set?",
    "options": ["remove()", "delete()", "clear()", "empty()"],
    "correct_answers": [2],
    "explanation": "clear() removes all elements from set.",
    "topic": "Set Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 115,
    "question": "What is the purpose of __repr__ method?",
    "options": ["Representation", "Reproduction", "Developer representation", "User representation"],
    "correct_answers": [2],
    "explanation": "__repr__ provides unambiguous string representation for developers.",
    "topic": "Classes",
    "difficulty": "intermediate"
  },
  {
    "id": 116,
    "question": "Which statement about dictionary keys is correct?",
    "options": ["Keys must be strings", "Keys must be immutable", "Keys can be any type", "Keys must be numbers"],
    "correct_answers": [1],
    "explanation": "Dictionary keys must be immutable (hashable) types.",
    "topic": "Dictionaries",
    "difficulty": "intermediate"
  },
  {
    "id": 117,
    "question": "What does the dir() function return?",
    "options": ["Directory listing", "Object attributes", "File directory", "Current directory"],
    "correct_answers": [1],
    "explanation": "dir() returns list of attributes and methods of an object.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 118,
    "question": "Which method finds difference between two sets?",
    "options": ["set.diff()", "set.difference()", "set.subtract()", "set.minus()"],
    "correct_answers": [1],
    "explanation": "difference() returns elements in first set but not in second.",
    "topic": "Set Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 119,
    "question": "What is the correct way to define class variable?",
    "options": ["Inside __init__", "Outside methods", "In class method", "In static method"],
    "correct_answers": [1],
    "explanation": "Class variables are defined at class level, outside methods.",
    "topic": "Classes",
    "difficulty": "intermediate"
  },
  {
    "id": 120,
    "question": "Which function converts iterator to list?",
    "options": ["list()", "convert()", "tolist()", "array()"],
    "correct_answers": [0],
    "explanation": "list() constructor converts iterator/iterable to list.",
    "topic": "Type Conversion",
    "difficulty": "intermediate"
  },
  {
    "id": 121,
    "question": "What does the next() function do?",
    "options": ["Next element", "Gets next item from iterator", "Next line", "Next function"],
    "correct_answers": [1],
    "explanation": "next() retrieves next item from iterator.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 122,
    "question": "Which method checks if set is subset of another?",
    "options": ["set.subset()", "set.issubset()", "set.contains()", "set.within()"],
    "correct_answers": [1],
    "explanation": "issubset() checks if all elements of set are in another set.",
    "topic": "Set Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 123,
    "question": "What is the purpose of property decorator?",
    "options": ["Creates property", "Defines getter method", "Controls attribute access", "All of the above"],
    "correct_answers": [3],
    "explanation": "@property decorator creates managed attribute with getter/setter access.",
    "topic": "Decorators",
    "difficulty": "intermediate"
  },
  {
    "id": 124,
    "question": "Which statement about lambda functions is false?",
    "options": ["Can have multiple expressions", "Are anonymous", "Return single expression", "Are inline functions"],
    "correct_answers": [0],
    "explanation": "Lambda functions can only contain single expression, not multiple.",
    "topic": "Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 125,
    "question": "What does the iter() function create?",
    "options": ["Iteration", "Iterator object", "Iterable", "Loop"],
    "correct_answers": [1],
    "explanation": "iter() creates iterator object from iterable.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 126,
    "question": "Which method checks if set is superset of another?",
    "options": ["set.superset()", "set.issuperset()", "set.contains()", "set.includes()"],
    "correct_answers": [1],
    "explanation": "issuperset() checks if set contains all elements of another set.",
    "topic": "Set Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 127,
    "question": "What is method resolution order (MRO)?",
    "options": ["Method calling order", "Order to resolve method calls", "Method priority", "Method sequence"],
    "correct_answers": [1],
    "explanation": "MRO determines order in which methods are resolved in inheritance.",
    "topic": "Classes",
    "difficulty": "intermediate"
  },
  {
    "id": 128,
    "question": "Which function checks if object is callable?",
    "options": ["callable()", "iscallable()", "canCall()", "isFunction()"],
    "correct_answers": [0],
    "explanation": "callable() checks if object can be called like a function.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 129,
    "question": "What does the vars() function return?",
    "options": ["Variables", "__dict__ attribute", "Variable names", "Variable types"],
    "correct_answers": [1],
    "explanation": "vars() returns __dict__ attribute of object containing its attributes.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 130,
    "question": "Which method returns symmetric difference of sets?",
    "options": ["set.symdiff()", "set.symmetric_difference()", "set.exclusive()", "set.xor()"],
    "correct_answers": [1],
    "explanation": "symmetric_difference() returns elements in either set but not both.",
    "topic": "Set Methods",
    "difficulty": "intermediate"
  },
  {
    "id": 131,
    "question": "What is the purpose of @staticmethod decorator?",
    "options": ["Static variable", "Method without self", "Class method", "Static class"],
    "correct_answers": [1],
    "explanation": "@staticmethod creates method that doesn't need self or cls parameter.",
    "topic": "Decorators",
    "difficulty": "intermediate"
  },
  {
    "id": 132,
    "question": "Which statement about generators is false?",
    "options": ["Use yield keyword", "Can be iterated once", "Store all values", "Are memory efficient"],
    "correct_answers": [2],
    "explanation": "Generators don't store all values, they generate values on demand.",
    "topic": "Generators",
    "difficulty": "intermediate"
  },
  {
    "id": 133,
    "question": "What does the id() function return?",
    "options": ["Identity number", "Object ID", "Memory address", "Unique identifier"],
    "correct_answers": [3],
    "explanation": "id() returns unique identifier (memory address) of object.",
    "topic": "Built-in Functions",
    "difficulty": "intermediate"
  },
  {
    "id": 134,
    "question": "Which method updates set with intersection?",
    "options": ["set.intersection_update()", "set.update_intersection()", "set.intersect()", "set.common_update()"],
    "correct_answers": [0],
    "explanation": "intersection_update() modifies set to contain only common elements.",
    "topic": "Set Methods",
    "difficulty": "intermediate"
  }
];

// Export for Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = pythonIntermediateQuestions;
}