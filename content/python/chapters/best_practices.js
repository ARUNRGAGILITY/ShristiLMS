
// chapters/best_practices.js
console.log('Loading best_practices chapter...');

window.PYTHON_CONTENT.chapters.best_practices = {
    title: 'Best Practices',
    content: `
        <h1>⭐ Python Best Practices</h1>
        
        <div class="theory-box">
            <h4>Writing Professional Python Code</h4>
            <p>Writing code that works is just the beginning. Professional Python development requires following established conventions, writing maintainable code, and adopting practices that make your code readable, testable, and scalable. These best practices will help you write Python code like a pro.</p>
        </div>

        <h2>PEP 8 - Style Guide</h2>
        <p>PEP 8 is the official style guide for Python code. Following it makes your code more readable and consistent.</p>

        <div class="code-block">
            <span class="comment"># Good naming conventions</span>
            <div class="command"># Variables and functions: snake_case</div>
            <div class="command">user_name = "alice"</div>
            <div class="command">total_amount = 150.75</div>
            <div class="command">is_active = True</div>
            
            <div class="command">def calculate_total_price(items, tax_rate):</div>
            <div class="command">    """Calculate total price including tax."""</div>
            <div class="command">    subtotal = sum(item.price for item in items)</div>
            <div class="command">    return subtotal * (1 + tax_rate)</div>
            
            <span class="comment"># Constants: UPPER_CASE</span>
            <div class="command">MAX_RETRY_ATTEMPTS = 3</div>
            <div class="command">DEFAULT_TIMEOUT = 30</div>
            <div class="command">API_BASE_URL = "https://api.example.com"</div>
            
            <span class="comment"># Classes: PascalCase</span>
            <div class="command">class UserAccount:</div>
            <div class="command">    """Represents a user account in the system."""</div>
            
            <div class="command">    def __init__(self, username, email):</div>
            <div class="command">        self.username = username</div>
            <div class="command">        self.email = email</div>
            <div class="command">        self._is_verified = False  # Protected attribute</div>
            <div class="command">        self.__password_hash = None  # Private attribute</div>
            
            <div class="command">    def verify_account(self):</div>
            <div class="command">        """Mark the account as verified."""</div>
            <div class="command">        self._is_verified = True</div>
        </div>

        <h2>Code Organization and Imports</h2>
        <div class="code-block">
            <span class="comment"># Good import organization</span>
            <div class="command"># 1. Standard library imports</div>
            <div class="command">import os</div>
            <div class="command">import sys</div>
            <div class="command">from datetime import datetime, timedelta</div>
            <div class="command">from pathlib import Path</div>
            
            <div class="command"># 2. Third-party imports</div>
            <div class="command">import requests</div>
            <div class="command">import pandas as pd</div>
            <div class="command">import numpy as np</div>
            <div class="command">from flask import Flask, request, jsonify</div>
            
            <div class="command"># 3. Local application imports</div>
            <div class="command">from myproject.models import User, Product</div>
            <div class="command">from myproject.utils import validate_email</div>
            <div class="command">from . import config</div>
            
            <span class="comment"># Use meaningful aliases</span>
            <div class="command">import matplotlib.pyplot as plt  # Good</div>
            <div class="command">import tensorflow as tf  # Good</div>
        </div>

        <h2>Writing Clean Functions</h2>
        <div class="code-block">
            <span class="comment"># Good function examples</span>
            
            <div class="command">def validate_email(email: str) -> bool:</div>
            <div class="command">    """</div>
            <div class="command">    Validate if the provided email address is in correct format.</div>
            <div class="command">    </div>
            <div class="command">    Args:</div>
            <div class="command">        email (str): Email address to validate</div>
            <div class="command">    </div>
            <div class="command">    Returns:</div>
            <div class="command">        bool: True if email is valid, False otherwise</div>
            <div class="command">    </div>
            <div class="command">    Example:</div>
            <div class="command">        >>> validate_email("user@example.com")</div>
            <div class="command">        True</div>
            <div class="command">        >>> validate_email("invalid-email")</div>
            <div class="command">        False</div>
            <div class="command">    """</div>
            <div class="command">    import re</div>
            <div class="command">    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'</div>
            <div class="command">    return re.match(pattern, email) is not None</div>
            
            <div class="command">def calculate_discount(price: float, discount_percent: float) -> float:</div>
            <div class="command">    """Calculate the discounted price."""</div>
            <div class="command">    if not (0 <= discount_percent <= 100):</div>
            <div class="command">        raise ValueError("Discount percent must be between 0 and 100")</div>
            <div class="command">    </div>
            <div class="command">    discount_amount = price * (discount_percent / 100)</div>
            <div class="command">    return price - discount_amount</div>
        </div>

        <h2>Testing Best Practices</h2>
        <div class="code-block">
            <span class="comment"># Good testing practices with pytest</span>
            
            <span class="comment"># test_user_functions.py</span>
            <div class="command">import pytest</div>
            <div class="command">from myproject.users import validate_email, calculate_discount</div>
            
            <div class="command">class TestEmailValidation:</div>
            <div class="command">    """Test cases for email validation function."""</div>
            
            <div class="command">    def test_valid_emails(self):</div>
            <div class="command">        """Test that valid emails return True."""</div>
            <div class="command">        valid_emails = [</div>
            <div class="command">            "user@example.com",</div>
            <div class="command">            "test.email+tag@domain.co.uk",</div>
            <div class="command">            "user123@test-domain.org"</div>
            <div class="command">        ]</div>
            <div class="command">        for email in valid_emails:</div>
            <div class="command">            assert validate_email(email), f"Failed for valid email: {email}"</div>
            
            <div class="command">    def test_invalid_emails(self):</div>
            <div class="command">        """Test that invalid emails return False."""</div>
            <div class="command">        invalid_emails = [</div>
            <div class="command">            "invalid-email",</div>
            <div class="command">            "@domain.com",</div>
            <div class="command">            "user@",</div>
            <div class="command">            "user space@domain.com"</div>
            <div class="command">        ]</div>
            <div class="command">        for email in invalid_emails:</div>
            <div class="command">            assert not validate_email(email), f"Failed for invalid email: {email}"</div>
        </div>

        <div class="exercise">
            <h4>🎯 Exercise 11: Code Refactoring</h4>
            <div class="exercise-step">
                <strong>Step 1:</strong> Take a piece of code you've written earlier and apply PEP 8 guidelines
            </div>
            <div class="exercise-step">
                <strong>Step 2:</strong> Add proper docstrings and type hints to all functions
            </div>
            <div class="exercise-step">
                <strong>Step 3:</strong> Write comprehensive unit tests for your functions
            </div>
            <div class="exercise-step">
                <strong>Step 4:</strong> Add proper error handling and validation
            </div>
            <div class="exercise-step">
                <strong>Step 5:</strong> Profile your code and optimize any performance bottlenecks
            </div>
        </div>

        <div class="tip">
            <strong>💡 Best Practices Summary:</strong>
            <ul>
                <li>Follow PEP 8 style guidelines consistently</li>
                <li>Write clear, descriptive function and variable names</li>
                <li>Add comprehensive docstrings and type hints</li>
                <li>Handle errors gracefully with specific exceptions</li>
                <li>Write tests for all your functions</li>
                <li>Keep functions small and focused on single responsibilities</li>
                <li>Use logging instead of print statements for debugging</li>
                <li>Optimize for readability first, performance second</li>
            </ul>
        </div>

        <div class="warning">
            <strong>⚠️ Common Anti-Patterns to Avoid:</strong>
            <ul>
                <li><strong>God objects:</strong> Classes that try to do everything</li>
                <li><strong>Magic numbers:</strong> Use named constants instead of hardcoded values</li>
                <li><strong>Deep nesting:</strong> Avoid more than 3-4 levels of indentation</li>
                <li><strong>Long functions:</strong> Break down functions longer than 50 lines</li>
                <li><strong>Global variables:</strong> Minimize global state</li>
                <li><strong>Premature optimization:</strong> Write clean code first, optimize later</li>
            </ul>
        </div>
    `
};