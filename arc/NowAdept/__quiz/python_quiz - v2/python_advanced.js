const pythonAdvancedQuestions = [
  {
    "id": 1,
    "question": "What is the Global Interpreter Lock (GIL)?",
    "options": ["Global variable lock", "Mechanism preventing true parallelism", "Global import lock", "Global iteration lock"],
    "correct_answers": [1],
    "explanation": "GIL prevents multiple threads from executing Python bytecode simultaneously.",
    "topic": "Threading",
    "difficulty": "advanced"
  },
  {
    "id": 2,
    "question": "Which statements about metaclasses are correct?",
    "options": ["Classes that create classes", "Control class creation", "Type is default metaclass", "All of the above"],
    "correct_answers": [3],
    "explanation": "Metaclasses are classes whose instances are classes themselves.",
    "topic": "Metaclasses",
    "difficulty": "advanced"
  },
  {
    "id": 3,
    "question": "What does the __new__ method do?",
    "options": ["Initializes instance", "Creates new instance", "Creates new class", "Creates new method"],
    "correct_answers": [1],
    "explanation": "__new__ is responsible for creating and returning new instance of class.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 4,
    "question": "Which decorator is used for creating class methods?",
    "options": ["@classmethod", "@staticmethod", "@property", "@method"],
    "correct_answers": [0],
    "explanation": "@classmethod decorator creates method that receives class as first argument.",
    "topic": "Decorators",
    "difficulty": "advanced"
  },
  {
    "id": 5,
    "question": "What is the difference between __getattr__ and __getattribute__?",
    "options": ["No difference", "__getattr__ called when attribute not found", "__getattribute__ is newer", "Both are same"],
    "correct_answers": [1],
    "explanation": "__getattr__ is called only when attribute is not found normally.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 6,
    "question": "Which statement about descriptors is correct?",
    "options": ["Control attribute access", "Define __get__, __set__, __delete__", "Used in properties", "All of the above"],
    "correct_answers": [3],
    "explanation": "Descriptors control attribute access through special methods.",
    "topic": "Descriptors",
    "difficulty": "advanced"
  },
  {
    "id": 7,
    "question": "What does the asyncio module provide?",
    "options": ["Asynchronous I/O", "Event loops", "Coroutines", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio provides infrastructure for asynchronous programming.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 8,
    "question": "Which keyword is used to define coroutines?",
    "options": ["async", "await", "coroutine", "async def"],
    "correct_answers": [3],
    "explanation": "'async def' is used to define coroutine functions.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 9,
    "question": "What is the purpose of context managers?",
    "options": ["Manage context", "Resource management", "Exception handling", "Setup and cleanup"],
    "correct_answers": [1, 3],
    "explanation": "Context managers handle resource acquisition and cleanup automatically.",
    "topic": "Context Managers",
    "difficulty": "advanced"
  },
  {
    "id": 10,
    "question": "Which methods must context managers implement?",
    "options": ["__enter__ and __exit__", "__start__ and __end__", "__open__ and __close__", "__begin__ and __finish__"],
    "correct_answers": [0],
    "explanation": "Context managers must implement __enter__ and __exit__ methods.",
    "topic": "Context Managers",
    "difficulty": "advanced"
  },
  {
    "id": 11,
    "question": "What does the multiprocessing module provide?",
    "options": ["Multiple processes", "Parallel execution", "Inter-process communication", "All of the above"],
    "correct_answers": [3],
    "explanation": "multiprocessing enables parallel execution using separate processes.",
    "topic": "Multiprocessing",
    "difficulty": "advanced"
  },
  {
    "id": 12,
    "question": "Which statement about weak references is correct?",
    "options": ["Don't prevent garbage collection", "Reference without ownership", "Used in weakref module", "All of the above"],
    "correct_answers": [3],
    "explanation": "Weak references allow referencing object without preventing collection.",
    "topic": "Memory Management",
    "difficulty": "advanced"
  },
  {
    "id": 13,
    "question": "What is monkey patching?",
    "options": ["Patching bugs", "Dynamic modification of classes", "Animal programming", "Code patching"],
    "correct_answers": [1],
    "explanation": "Monkey patching is dynamically modifying classes or modules at runtime.",
    "topic": "Dynamic Programming",
    "difficulty": "advanced"
  },
  {
    "id": 14,
    "question": "Which decorator creates a cached property?",
    "options": ["@cached_property", "@property_cache", "@cache_property", "@lru_cache"],
    "correct_answers": [0],
    "explanation": "@cached_property computes value once and caches result.",
    "topic": "Decorators",
    "difficulty": "advanced"
  },
  {
    "id": 15,
    "question": "What does the __slots__ attribute do?",
    "options": ["Defines available attributes", "Saves memory", "Prevents new attributes", "All of the above"],
    "correct_answers": [3],
    "explanation": "__slots__ restricts attributes and saves memory by avoiding __dict__.",
    "topic": "Memory Optimization",
    "difficulty": "advanced"
  },
  {
    "id": 16,
    "question": "Which statement about closures is correct?",
    "options": ["Inner function accessing outer variables", "Function with enclosed scope", "Captures variable values", "All of the above"],
    "correct_answers": [3],
    "explanation": "Closures are functions that capture variables from enclosing scope.",
    "topic": "Functions",
    "difficulty": "advanced"
  },
  {
    "id": 17,
    "question": "What is the purpose of __call__ method?",
    "options": ["Makes object callable", "Calls another method", "Creates function call", "Calls constructor"],
    "correct_answers": [0],
    "explanation": "__call__ allows object instances to be called like functions.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 18,
    "question": "Which module provides abstract base classes?",
    "options": ["abc", "abstract", "base", "collections.abc"],
    "correct_answers": [0, 3],
    "explanation": "Both 'abc' and 'collections.abc' provide abstract base classes.",
    "topic": "Abstract Classes",
    "difficulty": "advanced"
  },
  {
    "id": 19,
    "question": "What does the functools.partial function do?",
    "options": ["Partial application", "Freezes some arguments", "Creates new function", "All of the above"],
    "correct_answers": [3],
    "explanation": "functools.partial creates new function with some arguments pre-filled.",
    "topic": "Functional Programming",
    "difficulty": "advanced"
  },
  {
    "id": 20,
    "question": "Which statement about generators and coroutines is correct?",
    "options": ["Generators use yield", "Coroutines use async/await", "Both are iterators", "Coroutines can yield values"],
    "correct_answers": [0, 1],
    "explanation": "Generators use yield, modern coroutines use async/await syntax.",
    "topic": "Advanced Generators",
    "difficulty": "advanced"
  },
  {
    "id": 21,
    "question": "What is the difference between __str__ and __repr__?",
    "options": ["No difference", "__str__ for users, __repr__ for developers", "__repr__ is newer", "__str__ is faster"],
    "correct_answers": [1],
    "explanation": "__str__ provides user-friendly output, __repr__ unambiguous representation.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 22,
    "question": "What does the @lru_cache decorator do?",
    "options": ["Caches function results", "Least Recently Used cache", "Improves performance", "All of the above"],
    "correct_answers": [3],
    "explanation": "@lru_cache caches function results using LRU eviction policy.",
    "topic": "Caching",
    "difficulty": "advanced"
  },
  {
    "id": 23,
    "question": "Which statement about threading.local is correct?",
    "options": ["Thread-local storage", "Each thread has own data", "Avoids race conditions", "All of the above"],
    "correct_answers": [3],
    "explanation": "threading.local provides thread-specific data storage.",
    "topic": "Threading",
    "difficulty": "advanced"
  },
  {
    "id": 24,
    "question": "What is the purpose of __enter__ and __exit__ methods?",
    "options": ["Entry and exit points", "Context management protocol", "Resource management", "Exception handling"],
    "correct_answers": [1, 2],
    "explanation": "These methods implement context management protocol for resource handling.",
    "topic": "Context Managers",
    "difficulty": "advanced"
  },
  {
    "id": 25,
    "question": "Which statement about dataclasses is correct?",
    "options": ["Automatically generates methods", "Reduces boilerplate code", "Provides __init__, __repr__, etc.", "All of the above"],
    "correct_answers": [3],
    "explanation": "@dataclass decorator automatically generates common methods.",
    "topic": "Dataclasses",
    "difficulty": "advanced"
  },
  {
    "id": 26,
    "question": "What does the yield from statement do?",
    "options": ["Yields from generator", "Delegates to sub-generator", "Flattens nested generators", "All of the above"],
    "correct_answers": [3],
    "explanation": "'yield from' delegates generator operations to sub-generator.",
    "topic": "Generators",
    "difficulty": "advanced"
  },
  {
    "id": 27,
    "question": "Which method is called when object is deleted?",
    "options": ["__del__", "__delete__", "__destroy__", "__remove__"],
    "correct_answers": [0],
    "explanation": "__del__ is called when object is about to be destroyed.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 28,
    "question": "What is the purpose of typing module?",
    "options": ["Type hints", "Static type checking", "Code documentation", "All of the above"],
    "correct_answers": [3],
    "explanation": "typing module provides type hints for better code documentation.",
    "topic": "Type Hints",
    "difficulty": "advanced"
  },
  {
    "id": 29,
    "question": "Which statement about async generators is correct?",
    "options": ["Use async def and yield", "Can use async for", "Support await", "All of the above"],
    "correct_answers": [3],
    "explanation": "Async generators combine async functions with yield statements.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 30,
    "question": "What does the collections.namedtuple factory function create?",
    "options": ["Named tuple class", "Tuple with named fields", "Immutable object", "All of the above"],
    "correct_answers": [3],
    "explanation": "namedtuple creates tuple subclass with named fields.",
    "topic": "Collections",
    "difficulty": "advanced"
  },
  {
    "id": 31,
    "question": "Which statement about memory views is correct?",
    "options": ["Expose memory buffer", "Zero-copy operations", "Work with bytes-like objects", "All of the above"],
    "correct_answers": [3],
    "explanation": "Memory views provide access to internal data without copying.",
    "topic": "Memory Management",
    "difficulty": "advanced"
  },
  {
    "id": 32,
    "question": "What is the purpose of __getitem__ method?",
    "options": ["Get item by index", "Enable subscripting", "Support iteration", "All of the above"],
    "correct_answers": [3],
    "explanation": "__getitem__ enables subscript notation and iteration support.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 33,
    "question": "Which decorator is used for single dispatch?",
    "options": ["@singledispatch", "@dispatch", "@overload", "@variant"],
    "correct_answers": [0],
    "explanation": "@singledispatch enables function overloading based on first argument type.",
    "topic": "Decorators",
    "difficulty": "advanced"
  },
  {
    "id": 34,
    "question": "What does the operator module provide?",
    "options": ["Function versions of operators", "Operator overloading", "Mathematical operations", "Functional programming tools"],
    "correct_answers": [0, 3],
    "explanation": "operator module provides functions equivalent to operators.",
    "topic": "Functional Programming",
    "difficulty": "advanced"
  },
  {
    "id": 35,
    "question": "Which statement about coroutine objects is correct?",
    "options": ["Must be awaited", "Are generators", "Run concurrently", "Need event loop"],
    "correct_answers": [0, 2, 3],
    "explanation": "Coroutines must be awaited and need event loop for execution.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 36,
    "question": "What is the purpose of __format__ method?",
    "options": ["Custom formatting", "Used by format()", "String representation", "Display formatting"],
    "correct_answers": [0, 1],
    "explanation": "__format__ defines custom formatting behavior for format() function.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 37,
    "question": "Which statement about concurrent.futures is correct?",
    "options": ["High-level threading interface", "Provides ThreadPoolExecutor", "Provides ProcessPoolExecutor", "All of the above"],
    "correct_answers": [3],
    "explanation": "concurrent.futures provides high-level interface for concurrent execution.",
    "topic": "Concurrency",
    "difficulty": "advanced"
  },
  {
    "id": 38,
    "question": "What does the itertools.chain function do?",
    "options": ["Chains iterables", "Flattens sequences", "Creates single iterator", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.chain creates iterator that yields from multiple iterables.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 39,
    "question": "Which method controls attribute assignment?",
    "options": ["__setattr__", "__assign__", "__set__", "__put__"],
    "correct_answers": [0],
    "explanation": "__setattr__ is called when setting attribute values.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 40,
    "question": "What is the purpose of sys.intern()?",
    "options": ["Internalizes strings", "String interning", "Memory optimization", "All of the above"],
    "correct_answers": [3],
    "explanation": "sys.intern() forces string interning for memory optimization.",
    "topic": "Memory Optimization",
    "difficulty": "advanced"
  },
  {
    "id": 41,
    "question": "Which statement about asyncio.gather is correct?",
    "options": ["Runs coroutines concurrently", "Waits for all to complete", "Returns list of results", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.gather runs multiple coroutines concurrently.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 42,
    "question": "What does the __hash__ method define?",
    "options": ["Object hash value", "Used in dictionaries", "Used in sets", "All of the above"],
    "correct_answers": [3],
    "explanation": "__hash__ defines hash value used in dictionaries and sets.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 43,
    "question": "Which statement about pickle module is correct?",
    "options": ["Serializes objects", "Binary protocol", "Can pickle most objects", "All of the above"],
    "correct_answers": [3],
    "explanation": "pickle module serializes Python objects to binary format.",
    "topic": "Serialization",
    "difficulty": "advanced"
  },
  {
    "id": 44,
    "question": "What is the purpose of __len__ method?",
    "options": ["Returns object length", "Used by len() function", "Required for sequences", "All of the above"],
    "correct_answers": [3],
    "explanation": "__len__ defines length behavior for len() function.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 45,
    "question": "Which statement about threading.Lock is correct?",
    "options": ["Mutual exclusion", "Prevents race conditions", "Synchronization primitive", "All of the above"],
    "correct_answers": [3],
    "explanation": "threading.Lock provides mutual exclusion for thread synchronization.",
    "topic": "Threading",
    "difficulty": "advanced"
  },
  {
    "id": 46,
    "question": "What does the itertools.groupby function do?",
    "options": ["Groups consecutive elements", "Groups by key function", "Creates grouped iterator", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.groupby groups consecutive elements by key function.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 47,
    "question": "Which method controls attribute deletion?",
    "options": ["__delattr__", "__delete__", "__del__", "__remove__"],
    "correct_answers": [0],
    "explanation": "__delattr__ is called when deleting attributes with del.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 48,
    "question": "What is the purpose of collections.ChainMap?",
    "options": ["Chains multiple mappings", "Provides unified view", "Searches multiple dicts", "All of the above"],
    "correct_answers": [3],
    "explanation": "ChainMap provides single view of multiple mapping objects.",
    "topic": "Collections",
    "difficulty": "advanced"
  },
  {
    "id": 49,
    "question": "Which statement about asyncio.create_task is correct?",
    "options": ["Creates Task object", "Schedules coroutine", "Enables concurrent execution", "All of the above"],
    "correct_answers": [3],
    "explanation": "create_task schedules coroutine for concurrent execution.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 50,
    "question": "What does the __contains__ method enable?",
    "options": ["'in' operator", "Membership testing", "Container protocol", "All of the above"],
    "correct_answers": [3],
    "explanation": "__contains__ enables 'in' operator for membership testing.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 51,
    "question": "Which statement about queue.Queue is correct?",
    "options": ["Thread-safe", "FIFO queue", "Blocking operations", "All of the above"],
    "correct_answers": [3],
    "explanation": "queue.Queue provides thread-safe FIFO queue with blocking operations.",
    "topic": "Threading",
    "difficulty": "advanced"
  },
  {
    "id": 52,
    "question": "What is the purpose of functools.wraps?",
    "options": ["Preserves function metadata", "Used in decorators", "Copies attributes", "All of the above"],
    "correct_answers": [3],
    "explanation": "functools.wraps preserves original function's metadata in decorators.",
    "topic": "Decorators",
    "difficulty": "advanced"
  },
  {
    "id": 53,
    "question": "Which method controls iteration protocol?",
    "options": ["__iter__", "__next__", "Both __iter__ and __next__", "__iterate__"],
    "correct_answers": [2],
    "explanation": "Iteration protocol requires both __iter__ and __next__ methods.",
    "topic": "Iterators",
    "difficulty": "advanced"
  },
  {
    "id": 54,
    "question": "What does the collections.Counter class do?",
    "options": ["Counts hashable objects", "Subclass of dict", "Provides counting functionality", "All of the above"],
    "correct_answers": [3],
    "explanation": "Counter is dict subclass for counting hashable objects.",
    "topic": "Collections",
    "difficulty": "advanced"
  },
  {
    "id": 55,
    "question": "Which statement about asyncio.wait is correct?",
    "options": ["Waits for coroutines", "Returns when condition met", "More flexible than gather", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.wait provides flexible waiting for multiple coroutines.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 56,
    "question": "What is the purpose of __bool__ method?",
    "options": ["Boolean conversion", "Used by bool()", "Truth value testing", "All of the above"],
    "correct_answers": [3],
    "explanation": "__bool__ defines truth value for boolean context.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 57,
    "question": "Which statement about threading.RLock is correct?",
    "options": ["Reentrant lock", "Same thread can acquire multiple times", "Recursive lock", "All of the above"],
    "correct_answers": [3],
    "explanation": "RLock is reentrant lock that can be acquired multiple times by same thread.",
    "topic": "Threading",
    "difficulty": "advanced"
  },
  {
    "id": 58,
    "question": "What does the itertools.compress function do?",
    "options": ["Filters based on selectors", "Compresses data", "Selects elements", "Filters iterables"],
    "correct_answers": [0, 2],
    "explanation": "itertools.compress filters elements based on selector values.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 59,
    "question": "Which method controls comparison operations?",
    "options": ["__eq__, __lt__, etc.", "__cmp__", "__compare__", "__order__"],
    "correct_answers": [0],
    "explanation": "Rich comparison methods (__eq__, __lt__, etc.) control comparisons.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 60,
    "question": "What is the purpose of collections.defaultdict?",
    "options": ["Provides default values", "Calls factory function", "Avoids KeyError", "All of the above"],
    "correct_answers": [3],
    "explanation": "defaultdict provides default values using factory function.",
    "topic": "Collections",
    "difficulty": "advanced"
  },
  {
    "id": 61,
    "question": "Which statement about asyncio.semaphore is correct?",
    "options": ["Limits concurrent access", "Synchronization primitive", "Controls resource access", "All of the above"],
    "correct_answers": [3],
    "explanation": "Semaphore controls number of concurrent accesses to resource.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 62,
    "question": "What does the __setitem__ method enable?",
    "options": ["Item assignment", "Subscript assignment", "Container modification", "All of the above"],
    "correct_answers": [3],
    "explanation": "__setitem__ enables subscript assignment operations.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 63,
    "question": "Which statement about threading.Condition is correct?",
    "options": ["Condition variable", "Wait/notify mechanism", "Synchronization tool", "All of the above"],
    "correct_answers": [3],
    "explanation": "Condition provides wait/notify synchronization mechanism.",
    "topic": "Threading",
    "difficulty": "advanced"
  },
  {
    "id": 64,
    "question": "What is the purpose of itertools.accumulate?",
    "options": ["Accumulates values", "Running totals", "Applies function cumulatively", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.accumulate returns running totals of cumulative operations.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 65,
    "question": "Which method controls arithmetic operations?",
    "options": ["__add__, __sub__, etc.", "__math__", "__arithmetic__", "__calc__"],
    "correct_answers": [0],
    "explanation": "Arithmetic magic methods (__add__, __sub__, etc.) control operations.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 66,
    "question": "What does the collections.OrderedDict preserve?",
    "options": ["Insertion order", "Key order", "Ordering information", "All of the above"],
    "correct_answers": [3],
    "explanation": "OrderedDict preserves the order of key insertion.",
    "topic": "Collections",
    "difficulty": "advanced"
  },
  {
    "id": 67,
    "question": "Which statement about property decorators is correct?",
    "options": ["Creates getter method", "Can define setter", "Can define deleter", "All of the above"],
    "correct_answers": [3],
    "explanation": "@property creates managed attributes with getter, setter, and deleter.",
    "topic": "Decorators",
    "difficulty": "advanced"
  },
  {
    "id": 68,
    "question": "What does the __missing__ method do in dict subclasses?",
    "options": ["Called for missing keys", "Provides default behavior", "Handles KeyError", "All of the above"],
    "correct_answers": [3],
    "explanation": "__missing__ is called when key is not found in dictionary.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 69,
    "question": "Which statement about asyncio.Lock is correct?",
    "options": ["Async mutex", "Prevents race conditions", "Used with async/await", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.Lock is async version of threading.Lock.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 70,
    "question": "What is the purpose of functools.reduce?",
    "options": ["Reduces sequence to single value", "Applies function cumulatively", "Functional programming tool", "All of the above"],
    "correct_answers": [3],
    "explanation": "functools.reduce applies function cumulatively to reduce sequence.",
    "topic": "Functional Programming",
    "difficulty": "advanced"
  },
  {
    "id": 71,
    "question": "Which method is used for object copying?",
    "options": ["__copy__", "__deepcopy__", "Both __copy__ and __deepcopy__", "__clone__"],
    "correct_answers": [2],
    "explanation": "Objects can define __copy__ and __deepcopy__ for custom copying behavior.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 72,
    "question": "What does the itertools.product function do?",
    "options": ["Cartesian product", "Cross product", "Generates combinations", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.product computes cartesian product of input iterables.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 73,
    "question": "Which statement about asyncio.Queue is correct?",
    "options": ["Async queue", "FIFO by default", "Thread-safe", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.Queue is async version of queue.Queue.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 74,
    "question": "What is the purpose of __reversed__ method?",
    "options": ["Defines reversed iteration", "Used by reversed()", "Returns reverse iterator", "All of the above"],
    "correct_answers": [3],
    "explanation": "__reversed__ defines behavior for reversed() function.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 75,
    "question": "Which statement about collections.deque is correct?",
    "options": ["Double-ended queue", "Efficient appends/pops", "Thread-safe operations", "All of the above"],
    "correct_answers": [3],
    "explanation": "deque provides efficient operations on both ends.",
    "topic": "Collections",
    "difficulty": "advanced"
  },
  {
    "id": 76,
    "question": "What does the contextlib module provide?",
    "options": ["Context management utilities", "contextmanager decorator", "ExitStack class", "All of the above"],
    "correct_answers": [3],
    "explanation": "contextlib provides utilities for working with context managers.",
    "topic": "Context Managers",
    "difficulty": "advanced"
  },
  {
    "id": 77,
    "question": "Which method enables object unpacking?",
    "options": ["__iter__", "__getitem__", "Both __iter__ and __getitem__", "__unpack__"],
    "correct_answers": [2],
    "explanation": "Objects can be unpacked if they implement __iter__ or __getitem__.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 78,
    "question": "What is the purpose of asyncio.Event?",
    "options": ["Async event signaling", "Coordination primitive", "Wait/notify mechanism", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.Event provides async event signaling mechanism.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 79,
    "question": "Which statement about functools.lru_cache is correct?",
    "options": ["Least Recently Used cache", "Configurable maxsize", "Provides cache_info()", "All of the above"],
    "correct_answers": [3],
    "explanation": "lru_cache provides configurable LRU caching with statistics.",
    "topic": "Caching",
    "difficulty": "advanced"
  },
  {
    "id": 80,
    "question": "What does the __getstate__ method do?",
    "options": ["Custom pickling", "Returns object state", "Used by pickle", "All of the above"],
    "correct_answers": [3],
    "explanation": "__getstate__ customizes object state for pickling.",
    "topic": "Serialization",
    "difficulty": "advanced"
  },
  {
    "id": 81,
    "question": "Which statement about itertools.permutations is correct?",
    "options": ["Generates permutations", "Order matters", "Can specify length", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.permutations generates permutations of specified length.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 82,
    "question": "What is the purpose of asyncio.run?",
    "options": ["Runs async main function", "Creates event loop", "Handles cleanup", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.run is high-level function to run async programs.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 83,
    "question": "Which method controls string formatting?",
    "options": ["__format__", "__str__", "__repr__", "All of the above"],
    "correct_answers": [0],
    "explanation": "__format__ controls custom string formatting behavior.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 84,
    "question": "What does the collections.UserDict provide?",
    "options": ["Dict-like base class", "Easier subclassing", "Wrapper around dict", "All of the above"],
    "correct_answers": [3],
    "explanation": "UserDict provides easier way to create dict-like classes.",
    "topic": "Collections",
    "difficulty": "advanced"
  },
  {
    "id": 85,
    "question": "Which statement about asyncio.timeout is correct?",
    "options": ["Context manager for timeouts", "Cancels on timeout", "Async timeout handling", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.timeout provides timeout context manager.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 86,
    "question": "What is the purpose of __setstate__ method?",
    "options": ["Custom unpickling", "Restores object state", "Used by pickle", "All of the above"],
    "correct_answers": [3],
    "explanation": "__setstate__ customizes object restoration from pickle.",
    "topic": "Serialization",
    "difficulty": "advanced"
  },
  {
    "id": 87,
    "question": "Which statement about itertools.combinations is correct?",
    "options": ["Generates combinations", "Order doesn't matter", "Can specify length", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.combinations generates combinations of specified length.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 88,
    "question": "What does the __enter__ method return?",
    "options": ["Self", "Resource object", "Context value", "Any of the above"],
    "correct_answers": [3],
    "explanation": "__enter__ can return self, resource object, or any context value.",
    "topic": "Context Managers",
    "difficulty": "advanced"
  },
  {
    "id": 89,
    "question": "Which statement about threading.Event is correct?",
    "options": ["Thread signaling", "Wait/set mechanism", "Synchronization primitive", "All of the above"],
    "correct_answers": [3],
    "explanation": "threading.Event provides thread signaling mechanism.",
    "topic": "Threading",
    "difficulty": "advanced"
  },
  {
    "id": 90,
    "question": "What is the purpose of functools.singledispatch?",
    "options": ["Function overloading", "Based on first argument type", "Generic functions", "All of the above"],
    "correct_answers": [3],
    "explanation": "singledispatch creates generic functions with type-based dispatch.",
    "topic": "Functional Programming",
    "difficulty": "advanced"
  },
  {
    "id": 91,
    "question": "Which method enables with statement?",
    "options": ["__enter__", "__exit__", "Both __enter__ and __exit__", "__with__"],
    "correct_answers": [2],
    "explanation": "with statement requires both __enter__ and __exit__ methods.",
    "topic": "Context Managers",
    "difficulty": "advanced"
  },
  {
    "id": 92,
    "question": "What does the itertools.cycle function do?",
    "options": ["Cycles through iterable", "Infinite iteration", "Repeats elements", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.cycle creates infinite iterator cycling through elements.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 93,
    "question": "Which statement about asyncio.sleep is correct?",
    "options": ["Async sleep function", "Non-blocking", "Yields control", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.sleep provides non-blocking sleep that yields control.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 94,
    "question": "What is the purpose of __round__ method?",
    "options": ["Custom rounding", "Used by round()", "Numeric protocol", "All of the above"],
    "correct_answers": [3],
    "explanation": "__round__ defines custom rounding behavior for round() function.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 95,
    "question": "Which statement about collections.UserList is correct?",
    "options": ["List-like base class", "Easier subclassing", "Wrapper around list", "All of the above"],
    "correct_answers": [3],
    "explanation": "UserList provides easier way to create list-like classes.",
    "topic": "Collections",
    "difficulty": "advanced"
  },
  {
    "id": 96,
    "question": "What does the weakref.proxy function create?",
    "options": ["Weak reference proxy", "Transparent proxy", "Callback on deletion", "All of the above"],
    "correct_answers": [3],
    "explanation": "weakref.proxy creates transparent proxy with weak reference.",
    "topic": "Memory Management",
    "difficulty": "advanced"
  },
  {
    "id": 97,
    "question": "Which method controls floor division?",
    "options": ["__floordiv__", "__divmod__", "__div__", "__floor__"],
    "correct_answers": [0],
    "explanation": "__floordiv__ controls floor division (//) operation.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 98,
    "question": "What is the purpose of itertools.islice?",
    "options": ["Slices iterators", "Lazy slicing", "Memory efficient", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.islice provides memory-efficient iterator slicing.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 99,
    "question": "Which statement about asyncio.as_completed is correct?",
    "options": ["Returns iterator", "Yields completed futures", "As they complete", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.as_completed yields futures as they complete.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 100,
    "question": "What does the __index__ method enable?",
    "options": ["Integer conversion", "Used by bin(), hex()", "Sequence indexing", "All of the above"],
    "correct_answers": [3],
    "explanation": "__index__ enables use as integer in contexts requiring exact integer.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 101,
    "question": "Which statement about threading.Semaphore is correct?",
    "options": ["Counting semaphore", "Limits resource access", "Acquire/release operations", "All of the above"],
    "correct_answers": [3],
    "explanation": "threading.Semaphore manages access to limited resources.",
    "topic": "Threading",
    "difficulty": "advanced"
  },
  {
    "id": 102,
    "question": "What is the purpose of functools.cache?",
    "options": ["Unlimited cache", "Simpler than lru_cache", "No size limit", "All of the above"],
    "correct_answers": [3],
    "explanation": "functools.cache provides unlimited caching without size limit.",
    "topic": "Caching",
    "difficulty": "advanced"
  },
  {
    "id": 103,
    "question": "Which method controls power operations?",
    "options": ["__pow__", "__power__", "__exp__", "__raise__"],
    "correct_answers": [0],
    "explanation": "__pow__ controls power (**) and pow() operations.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 104,
    "question": "What does the itertools.dropwhile function do?",
    "options": ["Drops elements while condition true", "Lazy evaluation", "Stops when condition false", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.dropwhile drops elements while predicate is true.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 105,
    "question": "Which statement about asyncio.Future is correct?",
    "options": ["Represents future result", "Can be awaited", "Thread-safe operations", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.Future represents eventual result of async operation.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 106,
    "question": "What is the purpose of __bytes__ method?",
    "options": ["Byte representation", "Used by bytes()", "Custom serialization", "All of the above"],
    "correct_answers": [3],
    "explanation": "__bytes__ defines conversion to bytes object.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 107,
    "question": "Which statement about collections.UserString is correct?",
    "options": ["String-like base class", "Easier subclassing", "Wrapper around str", "All of the above"],
    "correct_answers": [3],
    "explanation": "UserString provides easier way to create string-like classes.",
    "topic": "Collections",
    "difficulty": "advanced"
  },
  {
    "id": 108,
    "question": "What does the gc module provide?",
    "options": ["Garbage collection interface", "Manual collection control", "Reference counting", "All of the above"],
    "correct_answers": [3],
    "explanation": "gc module provides interface to garbage collector.",
    "topic": "Memory Management",
    "difficulty": "advanced"
  },
  {
    "id": 109,
    "question": "Which method controls modulo operations?",
    "options": ["__mod__", "__modulo__", "__remainder__", "__div__"],
    "correct_answers": [0],
    "explanation": "__mod__ controls modulo (%) operation.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 110,
    "question": "What is the purpose of itertools.takewhile?",
    "options": ["Takes elements while condition true", "Lazy evaluation", "Stops when condition false", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.takewhile takes elements while predicate is true.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 111,
    "question": "Which statement about asyncio.Task is correct?",
    "options": ["Subclass of Future", "Wraps coroutines", "Schedulable", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.Task wraps coroutines for concurrent execution.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 112,
    "question": "What does the __complex__ method enable?",
    "options": ["Complex number conversion", "Used by complex()", "Numeric protocol", "All of the above"],
    "correct_answers": [3],
    "explanation": "__complex__ enables conversion to complex number.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 113,
    "question": "Which statement about threading.Timer is correct?",
    "options": ["Delayed execution", "Runs in separate thread", "Can be cancelled", "All of the above"],
    "correct_answers": [3],
    "explanation": "threading.Timer executes function after delay in separate thread.",
    "topic": "Threading",
    "difficulty": "advanced"
  },
  {
    "id": 114,
    "question": "What is the purpose of functools.update_wrapper?",
    "options": ["Updates wrapper function", "Copies attributes", "Used by wraps", "All of the above"],
    "correct_answers": [3],
    "explanation": "functools.update_wrapper copies attributes from wrapped function.",
    "topic": "Decorators",
    "difficulty": "advanced"
  },
  {
    "id": 115,
    "question": "Which method controls bitwise AND operation?",
    "options": ["__and__", "__bitand__", "__band__", "__ampersand__"],
    "correct_answers": [0],
    "explanation": "__and__ controls bitwise AND (&) operation.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 116,
    "question": "What does the itertools.filterfalse function do?",
    "options": ["Filters false values", "Opposite of filter", "Keeps elements where predicate false", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.filterfalse keeps elements where predicate returns false.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 117,
    "question": "Which statement about asyncio.Condition is correct?",
    "options": ["Async condition variable", "Wait/notify mechanism", "Synchronization primitive", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.Condition provides async condition variable.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 118,
    "question": "What is the purpose of __float__ method?",
    "options": ["Float conversion", "Used by float()", "Numeric protocol", "All of the above"],
    "correct_answers": [3],
    "explanation": "__float__ enables conversion to floating point number.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 119,
    "question": "Which statement about collections.MutableMapping is correct?",
    "options": ["Abstract base class", "For mutable mappings", "Provides default methods", "All of the above"],
    "correct_answers": [3],
    "explanation": "MutableMapping is ABC for mutable mapping types.",
    "topic": "Abstract Classes",
    "difficulty": "advanced"
  },
  {
    "id": 120,
    "question": "What does the sys.getsizeof function return?",
    "options": ["Object size in bytes", "Memory usage", "Size of object", "All of the above"],
    "correct_answers": [3],
    "explanation": "sys.getsizeof returns size of object in bytes.",
    "topic": "Memory Management",
    "difficulty": "advanced"
  },
  {
    "id": 121,
    "question": "Which method controls bitwise OR operation?",
    "options": ["__or__", "__bitor__", "__bor__", "__pipe__"],
    "correct_answers": [0],
    "explanation": "__or__ controls bitwise OR (|) operation.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 122,
    "question": "What is the purpose of itertools.starmap?",
    "options": ["Maps function with unpacked arguments", "Star operator mapping", "Applies function to tuples", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.starmap applies function with arguments unpacked from tuples.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 123,
    "question": "Which statement about asyncio.StreamReader is correct?",
    "options": ["Async stream reading", "Buffered reading", "Protocol interface", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.StreamReader provides async stream reading interface.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 124,
    "question": "What does the __int__ method enable?",
    "options": ["Integer conversion", "Used by int()", "Numeric protocol", "All of the above"],
    "correct_answers": [3],
    "explanation": "__int__ enables conversion to integer.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 125,
    "question": "Which statement about threading.Barrier is correct?",
    "options": ["Synchronization point", "Waits for all threads", "Concurrent execution", "All of the above"],
    "correct_answers": [3],
    "explanation": "threading.Barrier synchronizes threads at barrier point.",
    "topic": "Threading",
    "difficulty": "advanced"
  },
  {
    "id": 126,
    "question": "What is the purpose of functools.cached_property?",
    "options": ["Caches property value", "Computed once", "Thread-safe", "All of the above"],
    "correct_answers": [3],
    "explanation": "functools.cached_property caches property value after first access.",
    "topic": "Decorators",
    "difficulty": "advanced"
  },
  {
    "id": 127,
    "question": "Which method controls bitwise XOR operation?",
    "options": ["__xor__", "__bitxor__", "__bxor__", "__caret__"],
    "correct_answers": [0],
    "explanation": "__xor__ controls bitwise XOR (^) operation.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 128,
    "question": "What does the itertools.count function do?",
    "options": ["Infinite counting", "Arithmetic progression", "Starts from number", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.count creates infinite arithmetic progression.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 129,
    "question": "Which statement about asyncio.StreamWriter is correct?",
    "options": ["Async stream writing", "Buffered writing", "Protocol interface", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.StreamWriter provides async stream writing interface.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 130,
    "question": "What is the purpose of __abs__ method?",
    "options": ["Absolute value", "Used by abs()", "Numeric protocol", "All of the above"],
    "correct_answers": [3],
    "explanation": "__abs__ defines absolute value behavior for abs() function.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 131,
    "question": "Which statement about collections.Mapping is correct?",
    "options": ["Abstract base class", "For read-only mappings", "Provides default methods", "All of the above"],
    "correct_answers": [3],
    "explanation": "Mapping is ABC for read-only mapping types.",
    "topic": "Abstract Classes",
    "difficulty": "advanced"
  },
  {
    "id": 132,
    "question": "What does the weakref.finalize function do?",
    "options": ["Registers cleanup callback", "Called on object deletion", "Weak reference with callback", "All of the above"],
    "correct_answers": [3],
    "explanation": "weakref.finalize registers callback for object cleanup.",
    "topic": "Memory Management",
    "difficulty": "advanced"
  },
  {
    "id": 133,
    "question": "Which method controls left shift operation?",
    "options": ["__lshift__", "__leftshift__", "__lsh__", "__shift__"],
    "correct_answers": [0],
    "explanation": "__lshift__ controls left shift (<<) operation.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 134,
    "question": "What is the purpose of itertools.repeat?",
    "options": ["Repeats value", "Infinite repetition", "Can specify count", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.repeat creates iterator repeating value.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 135,
    "question": "Which statement about asyncio.subprocess is correct?",
    "options": ["Async subprocess creation", "Non-blocking process execution", "Stream communication", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.subprocess provides async subprocess interface.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 136,
    "question": "What does the __neg__ method enable?",
    "options": ["Unary minus", "Negation operation", "Used by -obj", "All of the above"],
    "correct_answers": [3],
    "explanation": "__neg__ defines unary minus (-) operation.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 137,
    "question": "Which statement about threading.local is thread-safe?",
    "options": ["Provides thread-local storage", "Each thread has own instance", "Prevents data races", "All of the above"],
    "correct_answers": [3],
    "explanation": "threading.local provides thread-specific data storage.",
    "topic": "Threading",
    "difficulty": "advanced"
  },
  {
    "id": 138,
    "question": "What is the purpose of functools.total_ordering?",
    "options": ["Generates comparison methods", "From __eq__ and one ordering", "Class decorator", "All of the above"],
    "correct_answers": [3],
    "explanation": "functools.total_ordering generates all comparison methods.",
    "topic": "Decorators",
    "difficulty": "advanced"
  },
  {
    "id": 139,
    "question": "Which method controls right shift operation?",
    "options": ["__rshift__", "__rightshift__", "__rsh__", "__shift__"],
    "correct_answers": [0],
    "explanation": "__rshift__ controls right shift (>>) operation.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 140,
    "question": "What does the itertools.tee function do?",
    "options": ["Splits iterator", "Creates multiple iterators", "Independent iteration", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.tee creates multiple independent iterators from one.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 141,
    "question": "Which statement about asyncio.Protocol is correct?",
    "options": ["Low-level network interface", "Callback-based", "Connection handling", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.Protocol provides low-level network interface.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 142,
    "question": "What is the purpose of __pos__ method?",
    "options": ["Unary plus", "Positive operation", "Used by +obj", "All of the above"],
    "correct_answers": [3],
    "explanation": "__pos__ defines unary plus (+) operation.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 143,
    "question": "Which statement about collections.Sequence is correct?",
    "options": ["Abstract base class", "For sequence types", "Provides default methods", "All of the above"],
    "correct_answers": [3],
    "explanation": "Sequence is ABC for sequence types.",
    "topic": "Abstract Classes",
    "difficulty": "advanced"
  },
  {
    "id": 144,
    "question": "What does the memory_profiler module help with?",
    "options": ["Memory usage profiling", "Line-by-line memory", "Memory debugging", "All of the above"],
    "correct_answers": [3],
    "explanation": "memory_profiler helps analyze memory usage patterns.",
    "topic": "Memory Management",
    "difficulty": "advanced"
  },
  {
    "id": 145,
    "question": "Which method controls bitwise NOT operation?",
    "options": ["__invert__", "__not__", "__bitnot__", "__complement__"],
    "correct_answers": [0],
    "explanation": "__invert__ controls bitwise NOT (~) operation.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 146,
    "question": "What is the purpose of itertools.zip_longest?",
    "options": ["Zips iterables", "Handles different lengths", "Fills missing values", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.zip_longest zips iterables of different lengths.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 147,
    "question": "Which statement about asyncio.create_server is correct?",
    "options": ["Creates TCP server", "Async server creation", "Protocol factory", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.create_server creates async TCP server.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 148,
    "question": "What does the __truediv__ method control?",
    "options": ["True division", "Division operator /", "Float division", "All of the above"],
    "correct_answers": [3],
    "explanation": "__truediv__ controls true division (/) operation.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 149,
    "question": "Which statement about threading.Thread is correct?",
    "options": ["Represents thread of execution", "Can be subclassed", "Has start() method", "All of the above"],
    "correct_answers": [3],
    "explanation": "threading.Thread represents and controls thread execution.",
    "topic": "Threading",
    "difficulty": "advanced"
  },
  {
    "id": 150,
    "question": "What is the purpose of functools.cmp_to_key?",
    "options": ["Converts comparison function", "To key function", "For sorting", "All of the above"],
    "correct_answers": [3],
    "explanation": "functools.cmp_to_key converts comparison function to key function.",
    "topic": "Functional Programming",
    "difficulty": "advanced"
  },
  {
    "id": 151,
    "question": "Which method enables matrix multiplication?",
    "options": ["__matmul__", "__matrix__", "__mmul__", "__dot__"],
    "correct_answers": [0],
    "explanation": "__matmul__ enables matrix multiplication (@) operator.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 152,
    "question": "What does the itertools.batched function do?",
    "options": ["Groups into batches", "Fixed batch size", "Lazy batching", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.batched groups elements into fixed-size batches.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 153,
    "question": "Which statement about asyncio.open_connection is correct?",
    "options": ["Opens TCP connection", "Returns reader/writer", "Async connection", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.open_connection opens async TCP connection.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 154,
    "question": "What is the purpose of __divmod__ method?",
    "options": ["Division and modulo", "Used by divmod()", "Returns quotient and remainder", "All of the above"],
    "correct_answers": [3],
    "explanation": "__divmod__ defines divmod() function behavior.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 155,
    "question": "Which statement about collections.Set is correct?",
    "options": ["Abstract base class", "For set types", "Provides default methods", "All of the above"],
    "correct_answers": [3],
    "explanation": "Set is ABC for set types.",
    "topic": "Abstract Classes",
    "difficulty": "advanced"
  },
  {
    "id": 156,
    "question": "What does the tracemalloc module provide?",
    "options": ["Memory allocation tracing", "Memory leak detection", "Allocation statistics", "All of the above"],
    "correct_answers": [3],
    "explanation": "tracemalloc traces memory allocations for debugging.",
    "topic": "Memory Management",
    "difficulty": "advanced"
  },
  {
    "id": 157,
    "question": "Which method controls augmented assignment?",
    "options": ["__iadd__, __isub__, etc.", "__assign__", "__augment__", "__update__"],
    "correct_answers": [0],
    "explanation": "In-place methods (__iadd__, __isub__, etc.) control augmented assignment.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 158,
    "question": "What is the purpose of itertools.pairwise?",
    "options": ["Returns successive pairs", "Adjacent elements", "Sliding window of 2", "All of the above"],
    "correct_answers": [3],
    "explanation": "itertools.pairwise returns successive overlapping pairs.",
    "topic": "Itertools",
    "difficulty": "advanced"
  },
  {
    "id": 159,
    "question": "Which statement about asyncio.start_server is correct?",
    "options": ["Starts TCP server", "Callback-based", "Connection handler", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.start_server starts TCP server with connection callback.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 160,
    "question": "What does the __ceil__ method enable?",
    "options": ["Ceiling function", "Used by math.ceil()", "Numeric protocol", "All of the above"],
    "correct_answers": [3],
    "explanation": "__ceil__ defines ceiling behavior for math.ceil().",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 161,
    "question": "Which statement about threading.ThreadPoolExecutor is correct?",
    "options": ["Pool of worker threads", "Concurrent execution", "Part of concurrent.futures", "All of the above"],
    "correct_answers": [3],
    "explanation": "ThreadPoolExecutor manages pool of worker threads.",
    "topic": "Concurrency",
    "difficulty": "advanced"
  },
  {
    "id": 162,
    "question": "What is the purpose of functools.partialmethod?",
    "options": ["Partial method application", "Method descriptor", "Pre-filled arguments", "All of the above"],
    "correct_answers": [3],
    "explanation": "functools.partialmethod creates method with pre-filled arguments.",
    "topic": "Functional Programming",
    "difficulty": "advanced"
  },
  {
    "id": 163,
    "question": "Which method enables reflected operations?",
    "options": ["__radd__, __rsub__, etc.", "__reflect__", "__reverse__", "__mirror__"],
    "correct_answers": [0],
    "explanation": "Reflected methods (__radd__, __rsub__, etc.) handle right-side operations.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 164,
    "question": "What does the operator.methodcaller function do?",
    "options": ["Creates method caller", "Calls methods by name", "Functional programming tool", "All of the above"],
    "correct_answers": [3],
    "explanation": "operator.methodcaller creates callable that calls method by name.",
    "topic": "Functional Programming",
    "difficulty": "advanced"
  },
  {
    "id": 165,
    "question": "Which statement about asyncio.to_thread is correct?",
    "options": ["Runs function in thread", "Async thread execution", "For blocking operations", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.to_thread runs blocking function in separate thread.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 166,
    "question": "What is the purpose of __floor__ method?",
    "options": ["Floor function", "Used by math.floor()", "Numeric protocol", "All of the above"],
    "correct_answers": [3],
    "explanation": "__floor__ defines floor behavior for math.floor().",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 167,
    "question": "Which statement about collections.Iterator is correct?",
    "options": ["Abstract base class", "For iterator types", "Provides default methods", "All of the above"],
    "correct_answers": [3],
    "explanation": "Iterator is ABC for iterator types.",
    "topic": "Abstract Classes",
    "difficulty": "advanced"
  },
  {
    "id": 168,
    "question": "What does the sys.getrefcount function return?",
    "options": ["Reference count", "Number of references", "Memory debugging info", "All of the above"],
    "correct_answers": [3],
    "explanation": "sys.getrefcount returns reference count for object.",
    "topic": "Memory Management",
    "difficulty": "advanced"
  },
  {
    "id": 169,
    "question": "Which method controls membership testing?",
    "options": ["__contains__", "__in__", "__member__", "__has__"],
    "correct_answers": [0],
    "explanation": "__contains__ controls 'in' operator behavior.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 170,
    "question": "What is the purpose of operator.attrgetter?",
    "options": ["Gets attributes", "Attribute accessor", "Functional programming tool", "All of the above"],
    "correct_answers": [3],
    "explanation": "operator.attrgetter creates callable that gets attributes.",
    "topic": "Functional Programming",
    "difficulty": "advanced"
  },
  {
    "id": 171,
    "question": "Which statement about asyncio.wait_for is correct?",
    "options": ["Waits with timeout", "Cancels on timeout", "Timeout handling", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.wait_for waits for coroutine with timeout.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 172,
    "question": "What does the __trunc__ method enable?",
    "options": ["Truncation function", "Used by math.trunc()", "Numeric protocol", "All of the above"],
    "correct_answers": [3],
    "explanation": "__trunc__ defines truncation behavior for math.trunc().",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 173,
    "question": "Which statement about multiprocessing.Pool is correct?",
    "options": ["Pool of worker processes", "Parallel execution", "Process-based concurrency", "All of the above"],
    "correct_answers": [3],
    "explanation": "multiprocessing.Pool manages pool of worker processes.",
    "topic": "Multiprocessing",
    "difficulty": "advanced"
  },
  {
    "id": 174,
    "question": "What is the purpose of functools.reduce?",
    "options": ["Reduces sequence", "Applies function cumulatively", "Single result", "All of the above"],
    "correct_answers": [3],
    "explanation": "functools.reduce applies function cumulatively to reduce sequence.",
    "topic": "Functional Programming",
    "difficulty": "advanced"
  },
  {
    "id": 175,
    "question": "Which method enables len() function?",
    "options": ["__len__", "__length__", "__size__", "__count__"],
    "correct_answers": [0],
    "explanation": "__len__ enables len() function for objects.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 176,
    "question": "What does the operator.itemgetter function do?",
    "options": ["Gets items", "Item accessor", "Functional programming tool", "All of the above"],
    "correct_answers": [3],
    "explanation": "operator.itemgetter creates callable that gets items.",
    "topic": "Functional Programming",
    "difficulty": "advanced"
  },
  {
    "id": 177,
    "question": "Which statement about asyncio.shield is correct?",
    "options": ["Protects from cancellation", "Shields awaitable", "Cancellation protection", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.shield protects awaitable from cancellation.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 178,
    "question": "What is the purpose of __getnewargs__ method?",
    "options": ["Provides arguments for pickling", "Used during unpickling", "Custom reconstruction", "All of the above"],
    "correct_answers": [3],
    "explanation": "__getnewargs__ provides arguments for object reconstruction.",
    "topic": "Serialization",
    "difficulty": "advanced"
  },
  {
    "id": 179,
    "question": "Which statement about collections.Iterable is correct?",
    "options": ["Abstract base class", "For iterable types", "Provides default methods", "All of the above"],
    "correct_answers": [3],
    "explanation": "Iterable is ABC for iterable types.",
    "topic": "Abstract Classes",
    "difficulty": "advanced"
  },
  {
    "id": 180,
    "question": "What does the resource module help with?",
    "options": ["Resource usage limits", "System resource control", "Memory and CPU limits", "All of the above"],
    "correct_answers": [3],
    "explanation": "resource module provides access to system resource information.",
    "topic": "System Programming",
    "difficulty": "advanced"
  },
  {
    "id": 181,
    "question": "Which method controls object deletion?",
    "options": ["__del__", "__delete__", "__destroy__", "__remove__"],
    "correct_answers": [0],
    "explanation": "__del__ is called when object is about to be deleted.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 182,
    "question": "What is the purpose of heapq module?",
    "options": ["Heap queue algorithm", "Priority queue", "Binary heap", "All of the above"],
    "correct_answers": [3],
    "explanation": "heapq provides heap queue algorithm implementation.",
    "topic": "Data Structures",
    "difficulty": "advanced"
  },
  {
    "id": 183,
    "question": "Which statement about asyncio.current_task is correct?",
    "options": ["Returns current task", "Context information", "Task introspection", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.current_task returns currently running task.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 184,
    "question": "What does the __reduce__ method do?",
    "options": ["Defines pickle behavior", "Object reduction", "Serialization protocol", "All of the above"],
    "correct_answers": [3],
    "explanation": "__reduce__ defines how object should be pickled.",
    "topic": "Serialization",
    "difficulty": "advanced"
  },
  {
    "id": 185,
    "question": "Which statement about threading.BoundedSemaphore is correct?",
    "options": ["Bounded counting semaphore", "Prevents release() beyond initial value", "Safer than Semaphore", "All of the above"],
    "correct_answers": [3],
    "explanation": "BoundedSemaphore prevents releasing more than acquired.",
    "topic": "Threading",
    "difficulty": "advanced"
  },
  {
    "id": 186,
    "question": "What is the purpose of contextlib.ExitStack?",
    "options": ["Manages multiple contexts", "Dynamic context management", "Cleanup stack", "All of the above"],
    "correct_answers": [3],
    "explanation": "ExitStack manages variable number of context managers.",
    "topic": "Context Managers",
    "difficulty": "advanced"
  },
  {
    "id": 187,
    "question": "Which method enables slice notation?",
    "options": ["__getitem__", "__slice__", "__getslice__", "__index__"],
    "correct_answers": [0],
    "explanation": "__getitem__ handles slice notation with slice objects.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 188,
    "question": "What does the bisect module provide?",
    "options": ["Binary search", "Sorted list operations", "Insertion point finding", "All of the above"],
    "correct_answers": [3],
    "explanation": "bisect provides binary search and sorted list utilities.",
    "topic": "Algorithms",
    "difficulty": "advanced"
  },
  {
    "id": 189,
    "question": "Which statement about asyncio.all_tasks is correct?",
    "options": ["Returns all tasks", "Task enumeration", "Loop inspection", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.all_tasks returns all tasks in event loop.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 190,
    "question": "What is the purpose of __reduce_ex__ method?",
    "options": ["Extended pickle protocol", "Version-aware pickling", "Protocol parameter", "All of the above"],
    "correct_answers": [3],
    "explanation": "__reduce_ex__ provides version-aware pickle behavior.",
    "topic": "Serialization",
    "difficulty": "advanced"
  },
  {
    "id": 191,
    "question": "Which statement about collections.Container is correct?",
    "options": ["Abstract base class", "For container types", "Provides default methods", "All of the above"],
    "correct_answers": [3],
    "explanation": "Container is ABC for container types.",
    "topic": "Abstract Classes",
    "difficulty": "advanced"
  },
  {
    "id": 192,
    "question": "What does the mmap module provide?",
    "options": ["Memory-mapped files", "File mapping", "Efficient file access", "All of the above"],
    "correct_answers": [3],
    "explanation": "mmap provides memory-mapped file objects.",
    "topic": "File I/O",
    "difficulty": "advanced"
  },
  {
    "id": 193,
    "question": "Which method controls object representation?",
    "options": ["__repr__", "__str__", "Both __repr__ and __str__", "__show__"],
    "correct_answers": [2],
    "explanation": "Both __repr__ and __str__ control object representation.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 194,
    "question": "What is the purpose of array module?",
    "options": ["Efficient arrays", "Homogeneous data", "Memory efficient", "All of the above"],
    "correct_answers": [3],
    "explanation": "array module provides memory-efficient arrays of homogeneous data.",
    "topic": "Data Structures",
    "difficulty": "advanced"
  },
  {
    "id": 195,
    "question": "Which statement about asyncio.get_event_loop is correct?",
    "options": ["Gets current event loop", "Loop access", "May be deprecated", "All of the above"],
    "correct_answers": [3],
    "explanation": "asyncio.get_event_loop gets current event loop but may be deprecated.",
    "topic": "Async Programming",
    "difficulty": "advanced"
  },
  {
    "id": 196,
    "question": "What does the __slots__ declaration prevent?",
    "options": ["Dynamic attribute creation", "__dict__ creation", "Memory overhead", "All of the above"],
    "correct_answers": [3],
    "explanation": "__slots__ prevents dynamic attributes and reduces memory usage.",
    "topic": "Memory Optimization",
    "difficulty": "advanced"
  },
  {
    "id": 197,
    "question": "Which statement about multiprocessing.Manager is correct?",
    "options": ["Shared objects", "Process synchronization", "Proxy objects", "All of the above"],
    "correct_answers": [3],
    "explanation": "multiprocessing.Manager creates shared objects between processes.",
    "topic": "Multiprocessing",
    "difficulty": "advanced"
  },
  {
    "id": 198,
    "question": "What is the purpose of contextlib.contextmanager?",
    "options": ["Decorator for context managers", "Generator-based contexts", "Simplifies context creation", "All of the above"],
    "correct_answers": [3],
    "explanation": "contextmanager decorator creates context managers from generators.",
    "topic": "Context Managers",
    "difficulty": "advanced"
  },
  {
    "id": 199,
    "question": "Which method enables custom attribute access?",
    "options": ["__getattribute__", "__getattr__", "Both methods", "__access__"],
    "correct_answers": [2],
    "explanation": "Both __getattribute__ and __getattr__ control attribute access.",
    "topic": "Special Methods",
    "difficulty": "advanced"
  },
  {
    "id": 200,
    "question": "What does the secrets module provide?",
    "options": ["Cryptographically strong randomness", "Secure random numbers", "Password generation", "All of the above"],
    "correct_answers": [3],
    "explanation": "secrets module provides cryptographically strong random numbers.",
    "topic": "Security",
    "difficulty": "advanced"
  }
];

// Export for Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = pythonAdvancedQuestions;
}