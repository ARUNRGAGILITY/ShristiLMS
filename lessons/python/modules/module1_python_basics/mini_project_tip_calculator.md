# Mini Project: Tip Calculator

## Project Overview
Build a tip calculator that takes a bill amount and calculates the tip based on service quality. This project will demonstrate all the concepts learned in Module 1: variables, input/output, conditional statements, and loops.

## Learning Objectives
- Apply variables and data types
- Use input validation and error handling
- Implement conditional logic for different tip percentages
- Create a user-friendly interface
- Handle edge cases and invalid input

## Project Requirements

### Core Features
1. **Input Validation**: Accept bill amount and validate it's a positive number
2. **Service Quality Options**: Different tip percentages based on service quality
3. **Split Bill Functionality**: Option to split the bill among multiple people
4. **Clean Output**: Display results in a formatted, easy-to-read manner

### Service Quality Levels
- **Excellent**: 20% tip
- **Good**: 15% tip
- **Fair**: 10% tip
- **Poor**: 5% tip

## Implementation

### Basic Version
```python
# Tip Calculator - Basic Version
print("=== Tip Calculator ===")

# Get bill amount
try:
    bill_amount = float(input("Enter the bill amount: $"))
    if bill_amount <= 0:
        print("Please enter a valid positive amount.")
        exit()
except ValueError:
    print("Please enter a valid number.")
    exit()

# Get service quality
print("\nService Quality Options:")
print("1. Excellent (20%)")
print("2. Good (15%)")
print("3. Fair (10%)")
print("4. Poor (5%)")

try:
    service_choice = int(input("Enter your choice (1-4): "))
    
    if service_choice == 1:
        tip_percentage = 0.20
        service_level = "Excellent"
    elif service_choice == 2:
        tip_percentage = 0.15
        service_level = "Good"
    elif service_choice == 3:
        tip_percentage = 0.10
        service_level = "Fair"
    elif service_choice == 4:
        tip_percentage = 0.05
        service_level = "Poor"
    else:
        print("Invalid choice. Using 15% tip.")
        tip_percentage = 0.15
        service_level = "Good"
        
except ValueError:
    print("Invalid input. Using 15% tip.")
    tip_percentage = 0.15
    service_level = "Good"

# Calculate tip and total
tip_amount = bill_amount * tip_percentage
total_amount = bill_amount + tip_amount

# Display results
print(f"\n=== Bill Summary ===")
print(f"Bill Amount: ${bill_amount:.2f}")
print(f"Service Level: {service_level}")
print(f"Tip Percentage: {tip_percentage * 100}%")
print(f"Tip Amount: ${tip_amount:.2f}")
print(f"Total Amount: ${total_amount:.2f}")
```

### Advanced Version with Split Bill
```python
# Tip Calculator - Advanced Version
print("=== Advanced Tip Calculator ===")

def get_valid_amount():
    """Get and validate bill amount"""
    while True:
        try:
            amount = float(input("Enter the bill amount: $"))
            if amount > 0:
                return amount
            else:
                print("Please enter a positive amount.")
        except ValueError:
            print("Please enter a valid number.")

def get_service_quality():
    """Get service quality and return tip percentage"""
    print("\nService Quality Options:")
    print("1. Excellent (20%)")
    print("2. Good (15%)")
    print("3. Fair (10%)")
    print("4. Poor (5%)")
    
    while True:
        try:
            choice = int(input("Enter your choice (1-4): "))
            if choice == 1:
                return 0.20, "Excellent"
            elif choice == 2:
                return 0.15, "Good"
            elif choice == 3:
                return 0.10, "Fair"
            elif choice == 4:
                return 0.05, "Poor"
            else:
                print("Please enter a number between 1 and 4.")
        except ValueError:
            print("Please enter a valid number.")

def get_split_info():
    """Get number of people to split bill with"""
    while True:
        try:
            people = int(input("How many people to split the bill? (1 for no split): "))
            if people > 0:
                return people
            else:
                print("Please enter a positive number.")
        except ValueError:
            print("Please enter a valid number.")

def display_results(bill, tip_percent, service_level, tip_amount, total, people):
    """Display formatted results"""
    print(f"\n{'='*30}")
    print(f"BILL SUMMARY")
    print(f"{'='*30}")
    print(f"Bill Amount:      ${bill:.2f}")
    print(f"Service Level:    {service_level}")
    print(f"Tip Percentage:   {tip_percent * 100}%")
    print(f"Tip Amount:       ${tip_amount:.2f}")
    print(f"Total Amount:     ${total:.2f}")
    
    if people > 1:
        per_person = total / people
        print(f"Split {people} ways:   ${per_person:.2f} each")
    print(f"{'='*30}")

# Main program
def main():
    # Get bill amount
    bill_amount = get_valid_amount()
    
    # Get service quality
    tip_percentage, service_level = get_service_quality()
    
    # Calculate amounts
    tip_amount = bill_amount * tip_percentage
    total_amount = bill_amount + tip_amount
    
    # Ask about splitting
    split_choice = input("\nWould you like to split the bill? (y/n): ").lower()
    
    if split_choice in ['y', 'yes']:
        num_people = get_split_info()
    else:
        num_people = 1
    
    # Display results
    display_results(bill_amount, tip_percentage, service_level, 
                   tip_amount, total_amount, num_people)

if __name__ == "__main__":
    main()
```

## Enhanced Features

### Custom Tip Percentage
```python
# Allow custom tip percentage
custom_choice = input("Would you like to enter a custom tip percentage? (y/n): ").lower()

if custom_choice in ['y', 'yes']:
    while True:
        try:
            custom_tip = float(input("Enter custom tip percentage (e.g., 18 for 18%): "))
            if 0 <= custom_tip <= 100:
                tip_percentage = custom_tip / 100
                service_level = f"Custom ({custom_tip}%)"
                break
            else:
                print("Please enter a percentage between 0 and 100.")
        except ValueError:
            print("Please enter a valid number.")
```

### Rounding Options
```python
# Round to nearest dollar or keep cents
round_choice = input("Round to nearest dollar? (y/n): ").lower()

if round_choice in ['y', 'yes']:
    tip_amount = round(tip_amount)
    total_amount = bill_amount + tip_amount
```

## Testing Your Calculator

### Test Cases
```python
# Test with different scenarios
test_cases = [
    {"bill": 25.50, "service": 1, "split": 2},  # Excellent service, split 2 ways
    {"bill": 100.00, "service": 2, "split": 1},  # Good service, no split
    {"bill": 15.75, "service": 3, "split": 4},   # Fair service, split 4 ways
    {"bill": 50.00, "service": 4, "split": 1},   # Poor service, no split
]

for i, test in enumerate(test_cases, 1):
    print(f"\n--- Test Case {i} ---")
    print(f"Bill: ${test['bill']}, Service: {test['service']}, Split: {test['split']}")
    # Run your calculator with these values
```

## Project Extensions

### Extension 1: Tax Calculator
```python
# Add tax calculation
tax_rate = 0.08  # 8% tax rate
tax_amount = bill_amount * tax_rate
subtotal = bill_amount + tax_amount
tip_amount = subtotal * tip_percentage
total_amount = subtotal + tip_amount
```

### Extension 2: Multiple Bills
```python
# Handle multiple bills
bills = []
while True:
    bill = input("Enter bill amount (or 'done' to finish): ")
    if bill.lower() == 'done':
        break
    try:
        bills.append(float(bill))
    except ValueError:
        print("Invalid amount, skipping...")

total_bill = sum(bills)
# Continue with tip calculation on total_bill
```

### Extension 3: Tip History
```python
# Keep track of tip history
tip_history = []

def save_tip_record(bill, tip_percent, tip_amount, total):
    record = {
        "date": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "bill": bill,
        "tip_percent": tip_percent * 100,
        "tip_amount": tip_amount,
        "total": total
    }
    tip_history.append(record)

def display_history():
    if not tip_history:
        print("No tip history available.")
        return
    
    print("\n=== Tip History ===")
    for record in tip_history[-5:]:  # Show last 5 records
        print(f"{record['date']}: ${record['bill']:.2f} + {record['tip_percent']:.0f}% = ${record['total']:.2f}")
```

## Common Issues and Solutions

### Issue 1: Floating Point Precision
```python
# Problem: 0.1 + 0.2 != 0.3
# Solution: Use round() or format properly
tip_amount = round(bill_amount * tip_percentage, 2)
```

### Issue 2: Input Validation
```python
# Always validate user input
def safe_float_input(prompt):
    while True:
        try:
            return float(input(prompt))
        except ValueError:
            print("Please enter a valid number.")
```

### Issue 3: Edge Cases
```python
# Handle edge cases
if bill_amount < 0.01:
    print("Bill amount too small.")
    exit()

if tip_percentage > 1.0:  # More than 100%
    print("Tip percentage too high.")
    exit()
```

## Project Submission Checklist

- [ ] Basic tip calculation works correctly
- [ ] Input validation handles invalid input
- [ ] Service quality selection works
- [ ] Split bill functionality works
- [ ] Output is formatted clearly
- [ ] Code is well-commented
- [ ] Error handling is implemented
- [ ] Program handles edge cases

## Next Steps
After completing this project, you should be comfortable with:
- Variables and data types
- Input/output operations
- Conditional statements
- Basic error handling
- User interface design

This foundation will prepare you for Module 2, where you'll learn about functions and data structures! 