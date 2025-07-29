
// chapters/oop.js
console.log('Loading oop chapter...');

window.PYTHON_CONTENT.chapters.oop = {
    title: 'Object-Oriented Programming',
    content: `
        <h1>🏗️ Object-Oriented Programming</h1>
        
        <div class="theory-box">
            <h4>Organizing Code with Classes and Objects</h4>
            <p>Object-Oriented Programming (OOP) is a programming paradigm that organizes code into classes and objects. It provides a way to structure programs so that properties and behaviors are bundled into individual objects, making code more modular, reusable, and easier to maintain.</p>
        </div>

        <h2>Classes and Objects</h2>
        <p>A class is a blueprint for creating objects. Objects are instances of classes that contain both data (attributes) and functions (methods).</p>

        <div class="code-block">
            <span class="comment"># Defining a class</span>
            <div class="command">class Dog:</div>
            <div class="command">    # Class variable (shared by all instances)</div>
            <div class="command">    species = "Canis lupus"</div>
            
            <div class="command">    def __init__(self, name, age):</div>
            <div class="command">        # Instance variables (unique to each object)</div>
            <div class="command">        self.name = name</div>
            <div class="command">        self.age = age</div>
            
            <div class="command">    def bark(self):</div>
            <div class="command">        return f"{self.name} says Woof!"</div>
            
            <div class="command">    def celebrate_birthday(self):</div>
            <div class="command">        self.age += 1</div>
            <div class="command">        return f"{self.name} is now {self.age} years old!"</div>
            
            <div class="command">    def __str__(self):</div>
            <div class="command">        return f"Dog(name='{self.name}', age={self.age})"</div>
            
            <span class="comment"># Creating objects (instances)</span>
            <div class="command">dog1 = Dog("Buddy", 3)</div>
            <div class="command">dog2 = Dog("Max", 5)</div>
            
            <span class="comment"># Accessing attributes and methods</span>
            <div class="command">print(dog1.name)</div>
            <div class="command">print(dog1.bark())</div>
            <div class="command">print(dog1.celebrate_birthday())</div>
            <div class="command">print(dog1)</div>
            
            <div class="output">Buddy</div>
            <div class="output">Buddy says Woof!</div>
            <div class="output">Buddy is now 4 years old!</div>
            <div class="output">Dog(name='Buddy', age=4)</div>
        </div>

        <h2>Inheritance</h2>
        <p>Inheritance allows a class to inherit attributes and methods from another class, promoting code reuse and creating hierarchical relationships.</p>

        <div class="code-block">
            <span class="comment"># Base class (Parent)</span>
            <div class="command">class Animal:</div>
            <div class="command">    def __init__(self, name, species):</div>
            <div class="command">        self.name = name</div>
            <div class="command">        self.species = species</div>
            
            <div class="command">    def make_sound(self):</div>
            <div class="command">        return f"{self.name} makes a sound"</div>
            
            <div class="command">    def info(self):</div>
            <div class="command">        return f"{self.name} is a {self.species}"</div>
            
            <span class="comment"># Derived class (Child)</span>
            <div class="command">class Cat(Animal):</div>
            <div class="command">    def __init__(self, name, breed):</div>
            <div class="command">        super().__init__(name, "Feline")  # Call parent constructor</div>
            <div class="command">        self.breed = breed</div>
            
            <div class="command">    def make_sound(self):  # Override parent method</div>
            <div class="command">        return f"{self.name} says Meow!"</div>
            
            <div class="command">    def purr(self):  # New method specific to Cat</div>
            <div class="command">        return f"{self.name} purrs contentedly"</div>
            
            <span class="comment"># Using inheritance</span>
            <div class="command">cat = Cat("Whiskers", "Persian")</div>
            <div class="command">print(cat.info())        # Inherited method</div>
            <div class="command">print(cat.make_sound())  # Overridden method</div>
            <div class="command">print(cat.purr())        # Cat-specific method</div>
            
            <div class="output">Whiskers is a Feline</div>
            <div class="output">Whiskers says Meow!</div>
            <div class="output">Whiskers purrs contentedly</div>
        </div>

        <h2>Encapsulation</h2>
        <p>Encapsulation is the bundling of data and methods within a class and controlling access to them using public, protected, and private attributes.</p>

        <div class="code-block">
            <span class="comment"># Encapsulation example</span>
            <div class="command">class BankAccount:</div>
            <div class="command">    def __init__(self, account_number, initial_balance=0):</div>
            <div class="command">        self.account_number = account_number  # Public</div>
            <div class="command">        self._balance = initial_balance       # Protected (convention)</div>
            <div class="command">        self.__pin = "1234"                  # Private</div>
            
            <div class="command">    def deposit(self, amount):</div>
            <div class="command">        if amount > 0:</div>
            <div class="command">            self._balance += amount</div>
            <div class="command">            return f"Deposited {amount}. New balance: {self._balance}"</div>
            <div class="command">        return "Invalid deposit amount"</div>
            
            <div class="command">    def get_balance(self, pin):</div>
            <div class="command">        if self.__verify_pin(pin):</div>
            <div class="command">            return f"Balance: {self._balance}"</div>
            <div class="command">        return "Invalid PIN"</div>
            
            <div class="command">    def __verify_pin(self, pin):  # Private method</div>
            <div class="command">        return pin == self.__pin</div>
            
            <span class="comment"># Using encapsulation</span>
            <div class="command">account = BankAccount("123456789", 1000)</div>
            <div class="command">print(account.deposit(500))</div>
            <div class="command">print(account.get_balance("1234"))</div>
            
            <div class="output">Deposited $500. New balance: $1500</div>
            <div class="output">Balance: $1500</div>
        </div>

        <div class="exercise">
            <h4>🎯 Exercise 6: Library Management System</h4>
            <div class="exercise-step">
                <strong>Step 1:</strong> Create a 'Book' class with title, author, ISBN, and availability status
            </div>
            <div class="exercise-step">
                <strong>Step 2:</strong> Create a 'Member' class with name, member ID, and borrowed books list
            </div>
            <div class="exercise-step">
                <strong>Step 3:</strong> Create a 'Library' class that manages books and members
            </div>
            <div class="exercise-step">
                <strong>Step 4:</strong> Implement methods for borrowing, returning, and searching books
            </div>
            <div class="exercise-step">
                <strong>Step 5:</strong> Add special methods for string representation and equality comparison
            </div>
        </div>

        <div class="tip">
            <strong>💡 OOP Best Practices:</strong>
            <ul>
                <li>Use meaningful class and method names</li>
                <li>Keep classes focused on a single responsibility</li>
                <li>Use inheritance to model "is-a" relationships</li>
                <li>Use composition to model "has-a" relationships</li>
                <li>Make instance variables private when appropriate</li>
                <li>Use properties for controlled access to attributes</li>
            </ul>
        </div>
    `
};