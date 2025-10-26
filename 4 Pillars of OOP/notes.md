# 4 Pillars of OOP

- Encapsulation
- Inheritance
- Abstraction
- Polymorphism

## Encapsulation

```javascript
let name = "Sakib Al Hasan";
let birthDay = "1987-03-24";
let monthSalary = 200000;
let noOfMonths = 12;

function calculate_age(dob) {
  const diff_ms = Date.now() - new Date(dob).getTime();
  const age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function getSalary(monthSalary, noOfMonths) {
  return (monthSalary * noOfMonths).toLocaleString();
}

console.log(calculate_age(birthDay));
console.log(getSalary(monthSalary, noOfMonths));
```

```bash
38
2,400,000
```

---

```javascript
const sakib = {
  name: "Sakib Al Hasan",
  birthDay: "1987-03-24",
  monthSalary: 200000,
  noOfMonths: 12,
  calculate_age() {
    const diff_ms = Date.now() - new Date(this.birthDay).getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  },
  getSalary() {
    return (this.monthSalary * this.noOfMonths).toLocaleString();
  },
};
console.log(sakib.calculate_age());
console.log(sakib.getSalary());
```

```bash
38
2,400,000
```

---

```javascript
class Player {
  constructor(name, birthDay, monthSalary, noOfMonths) {
    this.name = name;
    this.birthDay = birthDay;
    this.monthSalary = monthSalary;
    this.noOfMonths = noOfMonths;
  }

  calculate_age() {
    const diff_ms = Date.now() - new Date(this.birthDay).getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  getSalary() {
    return (this.monthSalary * this.noOfMonths).toLocaleString();
  }
}

const sakib = new Player("Sakib Al Hasan", "1987-03-24", 200000, 12);
console.log(sakib.calculate_age());
console.log(sakib.getSalary());
```

```bash
38
2,400,000
```

---

```javascript
class Player {
  constructor(name, birthDay, monthSalary, noOfMonths) {
    this.name = name;
    this.birthDay = birthDay;
    this.monthSalary = monthSalary;
    this.noOfMonths = noOfMonths;
  }

  calculate_age() {
    const diff_ms = Date.now() - new Date(this.birthDay).getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  getSalary() {
    return (this.monthSalary * this.noOfMonths).toLocaleString();
  }
}

const sakib = new Player("Sakib Al Hasan", "1987-03-24", 200000, 12);
console.log(sakib.birthDay);
```

```bash
1987-03-24
```

---

**Encapsulation principle**: properties will be private. We should not access the properties or methods directly.

```javascript
class Player {
  #name;
  #birthDay;
  #noOfMonths;
  #monthlySalary;
  constructor(name, birthDay, monthlySalary, noOfMonths) {
    this.#name = name;
    this.#birthDay = birthDay;
    this.#monthlySalary = monthlySalary;
    this.#noOfMonths = noOfMonths;
  }

  calculate_age() {
    const diff_ms = Date.now() - new Date(this.#birthDay).getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  getSalary() {
    return (this.#monthlySalary * this.#noOfMonths).toLocaleString();
  }
}

const sakib = new Player("Sakib Al Hasan", "1987-03-24", 200000, 12);
console.log(sakib.birthDay);
```

```bash
undefined
```

---

```javascript
class Player {
  #name;
  #birthDay;
  #noOfMonths;
  #monthlySalary;
  constructor(name, birthDay, monthlySalary, noOfMonths) {
    this.#name = name;
    this.#birthDay = birthDay;
    this.#monthlySalary = monthlySalary;
    this.#noOfMonths = noOfMonths;
  }

  calculate_age() {
    const diff_ms = Date.now() - new Date(this.#birthDay).getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  getSalary() {
    return (this.#monthlySalary * this.#noOfMonths).toLocaleString();
  }
}

const sakib = new Player("Sakib Al Hasan", "1987-03-24", 200000, 12);
console.log(sakib.getSalary());
```

```bash
2,400,000
```

---

```javascript
class Player {
  #name;
  #birthDay;
  #noOfMonths;
  #monthlySalary;
  constructor(name, birthDay, monthlySalary, noOfMonths) {
    this.#name = name;
    this.#birthDay = birthDay;
    this.#monthlySalary = monthlySalary;
    this.#noOfMonths = noOfMonths;
  }

  #calculate_age() {
    const diff_ms = Date.now() - new Date(this.#birthDay).getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  getSalary() {
    return (this.#monthlySalary * this.#noOfMonths).toLocaleString();
  }
}

const sakib = new Player("Sakib Al Hasan", "1987-03-24", 200000, 12);
console.log(sakib.calculate_age());
```

```bash
console.log(sakib.calculate_age());
                  ^
TypeError: sakib.calculate_age is not a function
```

---

```javascript
class Player {
  #name;
  #birthDay;
  #noOfMonths;
  #monthlySalary
  constructor(name, birthDay, monthlySalary, noOfMonths) {
    this.#name = name;
    this.#birthDay = birthDay;
    this.#monthlySalary = monthlySalary;
    this.#noOfMonths = noOfMonths;
  }

  #calculate_age() {
    const diff_ms = Date.now() - new Date(this.#birthDay).getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  getSalary() {
    console.log(this.#calculate_age());
    return (this.#monthlySalary * this.#noOfMonths).toLocaleString();
  }
}

const sakib = new Player("Sakib Al Hasan", "1987-03-24", 200000, 12);
console.log(sakib.getSalary());
```
```bash
38
2,400,000
```
# Encapsulation in JavaScript

## Table of Contents
- [4 Pillars of OOP](#4-pillars-of-oop)
  - [Encapsulation](#encapsulation)
- [Encapsulation in JavaScript](#encapsulation-in-javascript)
  - [Table of Contents](#table-of-contents)
  - [What is Encapsulation?](#what-is-encapsulation)
    - [Definition](#definition)
    - [Simple Analogy](#simple-analogy)
  - [Why Encapsulation Matters](#why-encapsulation-matters)
    - [1. Data Protection](#1-data-protection)
    - [2. Maintainability](#2-maintainability)
    - [3. Code Organization](#3-code-organization)
    - [4. Reusability](#4-reusability)
  - [Evolution: No Encapsulation to Full Encapsulation](#evolution-no-encapsulation-to-full-encapsulation)
    - [Level 0: No Encapsulation (Procedural)](#level-0-no-encapsulation-procedural)
    - [Level 1: Basic Encapsulation (Object Literal)](#level-1-basic-encapsulation-object-literal)
    - [Level 2: Class-Based Encapsulation](#level-2-class-based-encapsulation)
    - [Level 3: Full Encapsulation (Private Fields)](#level-3-full-encapsulation-private-fields)
  - [Private Fields and Methods](#private-fields-and-methods)
    - [Private Fields](#private-fields)
    - [Private Methods](#private-methods)
  - [Getters and Setters](#getters-and-setters)
    - [User Profile Example](#user-profile-example)
  - [Real-World Examples](#real-world-examples)
    - [Example 1: Shopping Cart](#example-1-shopping-cart)
    - [Example 2: Todo List](#example-2-todo-list)
    - [Example 3: Counter with Limits](#example-3-counter-with-limits)
  - [Best Practices](#best-practices)
    - [1. Keep Data Private by Default](#1-keep-data-private-by-default)
    - [2. Provide Public Interfaces](#2-provide-public-interfaces)
    - [3. Validate in Setters](#3-validate-in-setters)
    - [4. Use Getters for Computed Properties](#4-use-getters-for-computed-properties)
    - [5. Hide Implementation Details](#5-hide-implementation-details)
    - [6. Return Copies, Not References](#6-return-copies-not-references)
  - [Summary](#summary)
    - [What is Encapsulation?](#what-is-encapsulation-1)
    - [Evolution](#evolution)
    - [Comparison Table](#comparison-table)
    - [Key Takeaways](#key-takeaways)
  - [Additional Resources](#additional-resources)

---

## What is Encapsulation?

**Encapsulation** is one of the four fundamental principles of Object-Oriented Programming (OOP).

### Definition

Encapsulation means:
1. **Bundling data and methods together** in a single unit (object/class)
2. **Hiding internal details** from the outside world
3. **Controlling access** to data through public methods

### Simple Analogy

Think of a **car**:
- You don't need to know how the engine works
- You interact through a simple interface: steering wheel, pedals, gears
- Complex internals are hidden (encapsulated)
```javascript
// Without encapsulation (exposed internals)
let fuel = 50;
let speed = 0;
function accelerate() { 
  speed += 10; 
  fuel -= 1; 
}

// With encapsulation (hidden internals)
class Car {
  #fuel = 50;      // Private
  #speed = 0;      // Private
  
  accelerate() {   // Public interface
    this.#speed += 10;
    this.#fuel -= 1;
  }
  
  getSpeed() {
    return this.#speed;
  }
}
```

---

## Why Encapsulation Matters

### 1. Data Protection
Prevents accidental modification
```javascript
// ❌ Without encapsulation
let balance = 1000;
balance = -500;  // Oops! Negative balance allowed

// ✅ With encapsulation
class BankAccount {
  #balance = 1000;
  
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      throw new Error("Invalid withdrawal");
    }
  }
}
```

### 2. Maintainability
Change implementation without breaking external code
```javascript
class User {
  #firstName;
  #lastName;
  
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }
  
  // Can change how fullName works internally
  getFullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }
}
```

### 3. Code Organization
Keep related data and behavior together
```javascript
// ❌ Scattered
let userName = "Alice";
let userAge = 25;
function getUserInfo() { }

// ✅ Organized
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() { }
}
```

### 4. Reusability
Create multiple instances easily
```javascript
class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const player1 = new Player("Alice", 100);
const player2 = new Player("Bob", 150);
```

---

## Evolution: No Encapsulation to Full Encapsulation

### Level 0: No Encapsulation (Procedural)
```javascript
// Global variables - no encapsulation
let name = "Sakib Al Hasan";
let birthDay = "1987-03-24";
let monthSalary = 200000;
let noOfMonths = 12;

function calculate_age(dob) {
  const diff_ms = Date.now() - new Date(dob).getTime();
  const age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function getSalary(monthSalary, noOfMonths) {
  return (monthSalary * noOfMonths).toLocaleString();
}

console.log(calculate_age(birthDay));           // 38
console.log(getSalary(monthSalary, noOfMonths)); // 2,400,000
```

**Problems:**
- ❌ Data and functions are separated
- ❌ Global scope pollution
- ❌ No relationship between data and functions
- ❌ Can't create multiple players easily
- ❌ Easy to make mistakes (wrong parameters)

---

### Level 1: Basic Encapsulation (Object Literal)
```javascript
const sakib = {
  name: "Sakib Al Hasan",
  birthDay: "1987-03-24",
  monthSalary: 200000,
  noOfMonths: 12,
  
  calculate_age() {
    const diff_ms = Date.now() - new Date(this.birthDay).getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  },
  
  getSalary() {
    return (this.monthSalary * this.noOfMonths).toLocaleString();
  },
};

console.log(sakib.calculate_age());  // 38
console.log(sakib.getSalary());      // 2,400,000
```

**Benefits:**
- ✅ Data and methods bundled together
- ✅ `this` provides context
- ✅ Cleaner code organization

**Limitations:**
- ⚠️ Can't create multiple instances easily
- ⚠️ All properties are public (can be modified)
- ⚠️ No reusable template

---

### Level 2: Class-Based Encapsulation
```javascript
class Player {
  constructor(name, birthDay, monthSalary, noOfMonths) {
    this.name = name;
    this.birthDay = birthDay;
    this.monthSalary = monthSalary;
    this.noOfMonths = noOfMonths;
  }

  calculate_age() {
    const diff_ms = Date.now() - new Date(this.birthDay).getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  getSalary() {
    return (this.monthSalary * this.noOfMonths).toLocaleString();
  }
}

// Easy to create multiple instances
const sakib = new Player("Sakib Al Hasan", "1987-03-24", 200000, 12);
const tamim = new Player("Tamim Iqbal", "1989-03-20", 150000, 12);
const mushfiq = new Player("Mushfiqur Rahim", "1987-06-09", 180000, 12);

console.log(sakib.calculate_age());   // 38
console.log(tamim.calculate_age());   // 36
console.log(mushfiq.getSalary());     // 2,160,000
```

**Benefits:**
- ✅ Reusable template
- ✅ Easy to create multiple instances
- ✅ DRY (Don't Repeat Yourself)
- ✅ Clear structure

**Limitations:**
- ⚠️ All properties still public

---

### Level 3: Full Encapsulation (Private Fields)
```javascript
class Player {
  // Private fields (# prefix)
  #monthSalary;
  #noOfMonths;
  
  constructor(name, birthDay, monthSalary, noOfMonths) {
    this.name = name;                  // Public
    this.birthDay = birthDay;          // Public
    this.#monthSalary = monthSalary;   // Private
    this.#noOfMonths = noOfMonths;     // Private
  }

  calculate_age() {
    const diff_ms = Date.now() - new Date(this.birthDay).getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  getSalary() {
    return (this.#monthSalary * this.#noOfMonths).toLocaleString();
  }
  
  // Controlled access
  updateSalary(newSalary) {
    if (newSalary > 0) {
      this.#monthSalary = newSalary;
    } else {
      throw new Error("Salary must be positive");
    }
  }
}

const sakib = new Player("Sakib Al Hasan", "1987-03-24", 200000, 12);
console.log(sakib.getSalary());     // 2,400,000

// ❌ Can't access private fields directly
// console.log(sakib.#monthSalary);  // SyntaxError

// ✅ Must use public methods
sakib.updateSalary(250000);
console.log(sakib.getSalary());     // 3,000,000
```

**Benefits:**
- ✅ True data hiding
- ✅ Controlled access through methods
- ✅ Validation and business logic
- ✅ Can't accidentally break internal state

---

## Private Fields and Methods

### Private Fields

Use `#` prefix to make fields private:
```javascript
class BankAccount {
  #balance = 0;        // Private field
  #accountNumber;      // Private field
  
  constructor(accountNumber, initialBalance) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
  }
  
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return `Deposited ${amount}. New balance: ${this.#balance}`;
    }
    throw new Error("Amount must be positive");
  }
  
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return `Withdrew ${amount}. New balance: ${this.#balance}`;
    }
    throw new Error("Insufficient funds");
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("ACC123", 1000);
console.log(account.deposit(500));      // "Deposited 500. New balance: 1500"
console.log(account.getBalance());      // 1500

// ❌ Can't access private fields
// console.log(account.#balance);       // SyntaxError
```

### Private Methods
```javascript
class PasswordManager {
  #password;
  
  constructor() {
    this.#password = "";
  }
  
  // Private method
  #hash(text) {
    return text.split('').reverse().join('');
  }
  
  // Private validation
  #isValid(password) {
    return password.length >= 8;
  }
  
  // Public method
  setPassword(newPassword) {
    if (this.#isValid(newPassword)) {
      this.#password = this.#hash(newPassword);
      return "Password set successfully";
    }
    throw new Error("Password must be at least 8 characters");
  }
  
  // Public method
  verifyPassword(inputPassword) {
    return this.#hash(inputPassword) === this.#password;
  }
}

const pm = new PasswordManager();
pm.setPassword("mySecret123");
console.log(pm.verifyPassword("mySecret123"));  // true

// ❌ Can't access private methods
// pm.#hash("test");  // SyntaxError
```

---

## Getters and Setters

Provide controlled access to properties:
```javascript
class Temperature {
  #celsius;
  
  constructor(celsius) {
    this.#celsius = celsius;
  }
  
  // Getter - access like a property
  get celsius() {
    return this.#celsius;
  }
  
  // Setter - set like a property
  set celsius(value) {
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero!");
    }
    this.#celsius = value;
  }
  
  // Computed property
  get fahrenheit() {
    return (this.#celsius * 9/5) + 32;
  }
  
  set fahrenheit(value) {
    this.#celsius = (value - 32) * 5/9;
  }
}

const temp = new Temperature(25);
console.log(temp.celsius);      // 25 (using getter)
console.log(temp.fahrenheit);   // 77 (computed)

temp.celsius = 30;              // Using setter
console.log(temp.celsius);      // 30

temp.fahrenheit = 86;           // Set via fahrenheit
console.log(temp.celsius);      // 30
```

### User Profile Example
```javascript
class User {
  #email;
  #password;
  #age;
  
  constructor(name, email, password, age) {
    this.name = name;
    this.#email = email;
    this.#password = this.#hashPassword(password);
    this.#age = age;
  }
  
  #hashPassword(password) {
    return `hashed_${password}`;
  }
  
  get email() {
    return this.#email;
  }
  
  set email(newEmail) {
    if (newEmail.includes('@')) {
      this.#email = newEmail;
    } else {
      throw new Error("Invalid email format");
    }
  }
  
  get age() {
    return this.#age;
  }
  
  set age(value) {
    if (value > 0 && value < 150) {
      this.#age = value;
    } else {
      throw new Error("Invalid age");
    }
  }
  
  // Read-only property
  get isAdult() {
    return this.#age >= 18;
  }
  
  verifyPassword(inputPassword) {
    return this.#hashPassword(inputPassword) === this.#password;
  }
}

const user = new User("Alice", "alice@example.com", "secret123", 25);
console.log(user.email);        // "alice@example.com"
console.log(user.isAdult);      // true

user.email = "alice@newdomain.com";  // ✅ Valid
user.age = 30;                       // ✅ Valid
```

---

## Real-World Examples

### Example 1: Shopping Cart
```javascript
class ShoppingCart {
  #items = [];
  #discountRate = 0;
  
  addItem(product, quantity = 1) {
    const existingItem = this.#items.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.#items.push({ product, quantity });
    }
  }
  
  removeItem(productId) {
    this.#items = this.#items.filter(item => item.product.id !== productId);
  }
  
  applyDiscount(rate) {
    if (rate >= 0 && rate <= 100) {
      this.#discountRate = rate;
    }
  }
  
  #calculateSubtotal() {
    return this.#items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }
  
  getTotal() {
    const subtotal = this.#calculateSubtotal();
    const discount = subtotal * (this.#discountRate / 100);
    return subtotal - discount;
  }
  
  getItemCount() {
    return this.#items.reduce((count, item) => count + item.quantity, 0);
  }
}

const cart = new ShoppingCart();
cart.addItem({ id: 1, name: "Laptop", price: 1000 }, 1);
cart.addItem({ id: 2, name: "Mouse", price: 25 }, 2);
cart.applyDiscount(10);

console.log(`Items: ${cart.getItemCount()}`);    // 3
console.log(`Total: $${cart.getTotal()}`);       // $922.50
```

### Example 2: Todo List
```javascript
class TodoList {
  #todos = [];
  #nextId = 1;
  
  addTodo(title, priority = 'medium') {
    const todo = {
      id: this.#nextId++,
      title,
      priority,
      completed: false,
      createdAt: new Date()
    };
    this.#todos.push(todo);
    return todo;
  }
  
  completeTodo(id) {
    const todo = this.#findTodoById(id);
    if (todo) {
      todo.completed = true;
      todo.completedAt = new Date();
    }
  }
  
  #findTodoById(id) {
    return this.#todos.find(todo => todo.id === id);
  }
  
  getActiveTodos() {
    return this.#todos.filter(todo => !todo.completed);
  }
  
  getCompletedTodos() {
    return this.#todos.filter(todo => todo.completed);
  }
  
  get stats() {
    return {
      total: this.#todos.length,
      active: this.getActiveTodos().length,
      completed: this.getCompletedTodos().length
    };
  }
}

const todoList = new TodoList();
todoList.addTodo("Learn JavaScript", "high");
todoList.addTodo("Buy groceries", "medium");
todoList.completeTodo(1);

console.log(todoList.stats);
// { total: 2, active: 1, completed: 1 }
```

### Example 3: Counter with Limits
```javascript
class Counter {
  #count = 0;
  #min;
  #max;
  
  constructor(min = -Infinity, max = Infinity) {
    this.#min = min;
    this.#max = max;
  }
  
  increment() {
    if (this.#count < this.#max) {
      this.#count++;
      return this.#count;
    }
    throw new Error(`Cannot exceed maximum (${this.#max})`);
  }
  
  decrement() {
    if (this.#count > this.#min) {
      this.#count--;
      return this.#count;
    }
    throw new Error(`Cannot go below minimum (${this.#min})`);
  }
  
  reset() {
    this.#count = 0;
  }
  
  get value() {
    return this.#count;
  }
  
  get canIncrement() {
    return this.#count < this.#max;
  }
  
  get canDecrement() {
    return this.#count > this.#min;
  }
}

const counter = new Counter(0, 10);

counter.increment();  // 1
counter.increment();  // 2
console.log(counter.value);  // 2
console.log(counter.canIncrement);  // true
```

---

## Best Practices

### 1. Keep Data Private by Default
```javascript
class Good {
  #privateField;      // ✅ Private by default
  
  getField() {
    return this.#privateField;
  }
}

class Bad {
  publicField;        // ⚠️ Public by default
}
```

### 2. Provide Public Interfaces
```javascript
class BankAccount {
  #balance;
  
  // ✅ Public methods provide controlled access
  deposit(amount) { /* validate and update */ }
  withdraw(amount) { /* validate and update */ }
  getBalance() { return this.#balance; }
}
```

### 3. Validate in Setters
```javascript
class Person {
  #age;
  
  set age(value) {
    if (value < 0 || value > 150) {
      throw new Error("Invalid age");
    }
    this.#age = value;
  }
}
```

### 4. Use Getters for Computed Properties
```javascript
class Rectangle {
  #width;
  #height;
  
  get area() {
    return this.#width * this.#height;
  }
  
  get perimeter() {
    return 2 * (this.#width + this.#height);
  }
}
```

### 5. Hide Implementation Details
```javascript
class EmailSender {
  #smtpConfig;
  
  // ❌ Don't expose internals
  // getSmtpConfig() { return this.#smtpConfig; }
  
  // ✅ Expose only necessary functionality
  sendEmail(to, subject, body) {
    // Use #smtpConfig internally
  }
}
```

### 6. Return Copies, Not References
```javascript
class DataStore {
  #data = [];
  
  // ❌ Bad - returns reference
  getBadData() {
    return this.#data;  // Can be modified externally!
  }
  
  // ✅ Good - returns copy
  getData() {
    return [...this.#data];  // Safe copy
  }
}
```

---

## Summary

### What is Encapsulation?
- **Bundling** data and methods together
- **Hiding** internal details
- **Controlling** access through public interfaces
- **Protecting** data integrity

### Evolution
```
Scattered → Object Literal → Class → Class with Private Fields
(None)      (Basic)          (Good)   (Best)
```

### Comparison Table

| Feature | No Encapsulation | Object Literal | Class | Class + Private |
|---------|------------------|----------------|-------|-----------------|
| **Data & Methods Together** | ❌ | ✅ | ✅ | ✅ |
| **Reusability** | ❌ | ⚠️ | ✅ | ✅ |
| **Data Protection** | ❌ | ❌ | ❌ | ✅ |
| **Controlled Access** | ❌ | ❌ | ⚠️ | ✅ |
| **Multiple Instances** | ❌ | ❌ | ✅ | ✅ |
| **Hide Implementation** | ❌ | ❌ | ⚠️ | ✅ |

### Key Takeaways
- ✅ Start with classes for encapsulation
- ✅ Use private fields (`#`) for data hiding
- ✅ Provide public methods for controlled access
- ✅ Validate data in setters
- ✅ Return copies to prevent external modification
- ✅ Hide implementation details

Encapsulation makes code more **maintainable**, **secure**, and **robust**! 🎯

---

## Additional Resources

- [MDN: Private class features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info: Classes](https://javascript.info/classes)

**---**
