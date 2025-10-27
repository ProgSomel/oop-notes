# Abstraction

```javascript
class BetterArray {
  #items;

  constructor() {
    this.#items = [];
  }

  getItems() {
    return [...this.#items];
  }

  addItem(item) {
    this.#items.push(item);
  }

  removeItem(itemToDelete) {
    this.#items = this.#items.filter((item) => item !== itemToDelete);
  }

  modifyItem(itemToChange, newValue) {
    const index = this.#items.indexOf(itemToChange);
    if (index !== -1) {
      this.#items[index] = newValue;
    }
  }
}

const array = new BetterArray();
array.addItem("I Love Bangladesh");
console.log(array.getItems());
```

```bash
[ 'I Love Bangladesh' ]
```

---

```javascript
class BetterArray {
  #items;

  constructor() {
    this.#items = [];
  }

  getItems() {
    return [...this.#items];
  }

  addItem(item) {
    this.#items.push(item);
  }

  removeItem(itemToDelete) {
    this.#items = this.#items.filter((item) => item !== itemToDelete);
  }

  modifyItem(itemToChange, newValue) {
    const index = this.#items.indexOf(itemToChange);
    if (index !== -1) {
      this.#items[index] = newValue;
    }
  }
}

const array = new BetterArray();
array.addItem("I Love Bangladesh");
array.addItem("I Love Javascript");
console.log(array.getItems());
array.removeItem("I Love Javascript");
console.log(array.getItems());
```

```bash
[ 'I Love Bangladesh', 'I Love Javascript' ]
[ 'I Love Bangladesh' ]
```

---

```javascript
class BetterArray {
  #items;

  constructor() {
    this.#items = [];
  }

  getItems() {
    return [...this.#items];
  }

  addItem(item) {
    this.#items.push(item);
  }

  removeItem(itemToDelete) {
    this.#items = this.#items.filter((item) => item !== itemToDelete);
  }

  modifyItem(itemToChange, newValue) {
    const index = this.#items.indexOf(itemToChange);
    if (index !== -1) {
      this.#items[index] = newValue;
    }
  }
}

const array = new BetterArray();
array.addItem("I Love Bangladesh");
array.addItem("I Love Javascript");
console.log(array.getItems());
array.modifyItem("I Love Javascript", "I Love JS");
console.log(array.getItems());
```

```bash
[ 'I Love Bangladesh', 'I Love Javascript' ]
[ 'I Love Bangladesh', 'I Love JS' ]
```

# Abstraction in JavaScript - Complete Guide

## Table of Contents

- [What is Abstraction?](#what-is-abstraction)
- [Simple Explanation](#simple-explanation)
- [Why Abstraction Matters](#why-abstraction-matters)
- [Real-World Analogy](#real-world-analogy)
- [The BetterArray Example](#the-betterarray-example)
- [Abstraction vs Encapsulation](#abstraction-vs-encapsulation)
- [Levels of Abstraction](#levels-of-abstraction)
- [Step-by-Step Examples](#step-by-step-examples)
- [Real-World Use Cases](#real-world-use-cases)
- [Creating Abstract Classes](#creating-abstract-classes)
- [Best Practices](#best-practices)
- [Benefits of Abstraction](#benefits-of-abstraction)
- [When to Use Abstraction](#when-to-use-abstraction)
- [Common Mistakes](#common-mistakes)
- [Summary](#summary)

---

## What is Abstraction?

**Abstraction** is one of the four pillars of Object-Oriented Programming (OOP).

### Definition

Abstraction means:

1. **Hiding complexity** - Show only what's necessary
2. **Providing a simple interface** - Easy-to-use methods
3. **Hiding implementation details** - Users don't need to know "how", only "what"

### In Simple Terms

> "Abstraction is like using a TV remote. You press 'Volume Up' and the volume increases. You don't need to know how the TV processes the signal or adjusts the speakers - you just need a simple button."

---

## Simple Explanation

### Without Abstraction

```javascript
// User must know and handle everything
const items = [];

// Adding - user must know about push
items.push("apple");

// Removing - user must know indexOf and splice
const index = items.indexOf("apple");
if (index !== -1) {
  items.splice(index, 1);
}

// Complex, error-prone, repetitive
```

### With Abstraction

```javascript
// User just uses simple methods
const items = new BetterArray();

items.add("apple"); // Simple!
items.remove("apple"); // Simple!

// Easy, safe, clean
```

**Abstraction = Making things simple by hiding complexity** 🎯

---

## Why Abstraction Matters

### 1. Reduces Complexity

```javascript
// Complex (without abstraction)
const user = await fetch("/api/user");
const data = await user.json();
if (user.ok) {
  return data;
} else {
  throw new Error(data.message);
}

// Simple (with abstraction)
const user = await api.getUser();
```

### 2. Improves Maintainability

```javascript
// If implementation changes, user code stays the same
class DataStore {
  save(data) {
    // Can change from localStorage to database
    // User code doesn't change!
  }
}

// Always use same method
store.save(data);
```

### 3. Makes Code Reusable

```javascript
// Write once, use everywhere
class EmailService {
  send(to, subject, body) {
    // Complex SMTP logic hidden here
  }
}

// Easy to use anywhere
emailService.send("user@example.com", "Hello", "Welcome!");
```

### 4. Easier to Understand

```javascript
// Clear what it does
cart.addItem(product);
cart.removeItem(product);
cart.checkout();

// vs complex array/object manipulation
```

---

## Real-World Analogy

### Driving a Car

**You interact with:**

- Steering wheel (turn left/right)
- Gas pedal (speed up)
- Brake pedal (slow down)
- Gear shift (change gears)

**You DON'T need to know:**

- How the engine combusts fuel
- How the transmission shifts gears
- How the brake fluid works
- How the steering mechanism turns wheels

**This is abstraction!** Simple interface hiding complex machinery.

### Coffee Machine

```javascript
// User sees (abstraction)
class CoffeeMachine {
  makeCoffee() {
    return "☕ Here's your coffee";
  }
}

// Reality (hidden complexity)
class CoffeeMachine {
  makeCoffee() {
    this.#heatWater();
    this.#grindBeans();
    this.#brew();
    this.#dispense();
    return "☕ Here's your coffee";
  }

  #heatWater() {
    /* complex heating process */
  }
  #grindBeans() {
    /* complex grinding process */
  }
  #brew() {
    /* complex brewing process */
  }
  #dispense() {
    /* complex dispensing process */
  }
}

// User doesn't see all the steps
const machine = new CoffeeMachine();
machine.makeCoffee(); // Just press one button!
```

---

## The BetterArray Example

### The Problem

Regular arrays require complex operations:

```javascript
const items = [];

// Adding is OK
items.push("Bangladesh");

// Removing is complex
const removeIndex = items.indexOf("Bangladesh");
if (removeIndex !== -1) {
  items.splice(removeIndex, 1);
}

// Modifying is even more complex
const modifyIndex = items.indexOf("old value");
if (modifyIndex !== -1) {
  items[modifyIndex] = "new value";
}

// Direct access is dangerous
items[0] = "something"; // Can break things
```

### The Solution: BetterArray

```javascript
class BetterArray {
  #items; // Private - hide implementation

  constructor() {
    this.#items = [];
  }

  // Simple, easy-to-use methods
  getItems() {
    return [...this.#items]; // Return safe copy
  }

  addItem(item) {
    this.#items.push(item);
  }

  removeItem(itemToDelete) {
    this.#items = this.#items.filter((item) => item !== itemToDelete);
  }

  modifyItem(itemToChange, newValue) {
    const index = this.#items.indexOf(itemToChange);
    if (index !== -1) {
      this.#items[index] = newValue;
    }
  }
}
```

### Why This is Abstraction

1. **Hides complexity** - User doesn't see `indexOf`, `splice`, `filter`
2. **Simple interface** - Just `add`, `remove`, `modify`
3. **Protects data** - Can't accidentally break the array
4. **Easy to use** - Self-explanatory method names

---

## Abstraction vs Encapsulation

They work together but are different:

### Encapsulation

**Hiding data** (protect internal state)

```javascript
class BankAccount {
  #balance = 1000; // ← Encapsulation: hide data

  getBalance() {
    return this.#balance;
  }
}

// Can't access directly
// account.#balance  ❌ Error
```

### Abstraction

**Hiding complexity** (simplify interface)

```javascript
class BankAccount {
  #balance = 1000;

  // ← Abstraction: simple method hides complex logic
  deposit(amount) {
    this.#validateAmount(amount);
    this.#checkFraud(amount);
    this.#updateBalance(amount);
    this.#recordTransaction(amount);
    this.#sendNotification();
  }

  // All this complexity hidden!
}

// User just calls simple method
account.deposit(100);
```

### Together

```javascript
class Player {
  #health = 100; // ← Encapsulation (hide data)
  #position = { x: 0, y: 0 };

  // ← Abstraction (hide complexity)
  move(direction) {
    // Complex pathfinding
    // Collision detection
    // Animation
    // Sound effects
    // All hidden!
  }
}

// User experience: simple
player.move("left");
```

### Comparison Table

| Feature     | Encapsulation      | Abstraction        |
| ----------- | ------------------ | ------------------ |
| **Focus**   | Hide data          | Hide complexity    |
| **Goal**    | Protect state      | Simplify usage     |
| **How**     | Private fields (#) | Simple methods     |
| **Example** | `#balance`         | `deposit()` method |
| **Purpose** | Data safety        | User experience    |

---

## Levels of Abstraction

### Level 0: No Abstraction (Direct Access)

```javascript
// Everything exposed, user does everything
const items = [];
items.push("apple");

const index = items.indexOf("apple");
if (index > -1) {
  items.splice(index, 1);
}
```

**Complexity:** High  
**Safety:** Low  
**Usability:** Poor

---

### Level 1: Function Abstraction

```javascript
// Helper functions hide some complexity
function addItem(array, item) {
  array.push(item);
}

function removeItem(array, item) {
  const index = array.indexOf(item);
  if (index > -1) {
    array.splice(index, 1);
  }
}

const items = [];
addItem(items, "apple");
removeItem(items, "apple");
```

**Complexity:** Medium  
**Safety:** Medium  
**Usability:** Better

---

### Level 2: Class Abstraction (Best)

```javascript
// Class provides clean interface
class BetterArray {
  #items = [];

  add(item) {
    this.#items.push(item);
  }

  remove(item) {
    this.#items = this.#items.filter((i) => i !== item);
  }
}

const items = new BetterArray();
items.add("apple");
items.remove("apple");
```

**Complexity:** Low  
**Safety:** High  
**Usability:** Excellent

---

### Level 3: Domain-Specific Abstraction

```javascript
// Even more abstract - domain language
class TodoList {
  #todos = new BetterArray();

  addTask(task) {
    this.#todos.add(task);
  }

  completeTask(task) {
    this.#todos.remove(task);
  }
}

const todos = new TodoList();
todos.addTask("Learn JavaScript");
todos.completeTask("Learn JavaScript");
```

**Complexity:** Very Low  
**Safety:** Very High  
**Usability:** Excellent (domain language)

---

## Step-by-Step Examples

### Example 1: Adding Items

```javascript
const array = new BetterArray();
array.addItem("I Love Bangladesh");
console.log(array.getItems());
// Output: [ 'I Love Bangladesh' ]
```

#### What Happens Internally

```javascript
addItem("I Love Bangladesh") {
  // Step 1: Take the item
  // Step 2: Push to internal array
  this.#items.push("I Love Bangladesh");
  // Now #items = ["I Love Bangladesh"]
}

getItems() {
  // Step 1: Create a copy
  return [...this.#items];
  // Returns: ["I Love Bangladesh"]
}
```

#### Why This is Abstraction

✅ User calls simple method: `addItem()`  
✅ User doesn't see: `.push()`, array details  
✅ User gets: Clean, simple interface

---

### Example 2: Adding and Removing

```javascript
const array = new BetterArray();
array.addItem("I Love Bangladesh");
array.addItem("I Love Javascript");
console.log(array.getItems());
// [ 'I Love Bangladesh', 'I Love Javascript' ]

array.removeItem("I Love Javascript");
console.log(array.getItems());
// [ 'I Love Bangladesh' ]
```

#### What Happens Internally

```javascript
removeItem("I Love Javascript") {
  // Step 1: Filter out the item
  this.#items = this.#items.filter((item) => {
    return item !== "I Love Javascript";
  });
  // #items now: ["I Love Bangladesh"]
}
```

#### Without Abstraction (What User Would Write)

```javascript
// User would need to write:
const index = items.indexOf("I Love Javascript");
if (index !== -1) {
  items.splice(index, 1);
}

// With abstraction:
array.removeItem("I Love Javascript");
```

**Abstraction saves 3 lines of complex code!**

---

### Example 3: Modifying Items

```javascript
const array = new BetterArray();
array.addItem("I Love Bangladesh");
array.addItem("I Love Javascript");
console.log(array.getItems());
// [ 'I Love Bangladesh', 'I Love Javascript' ]

array.modifyItem("I Love Javascript", "I Love JS");
console.log(array.getItems());
// [ 'I Love Bangladesh', 'I Love JS' ]
```

#### What Happens Internally

```javascript
modifyItem("I Love Javascript", "I Love JS") {
  // Step 1: Find the item
  const index = this.#items.indexOf("I Love Javascript");

  // Step 2: Check if found
  if (index !== -1) {
    // Step 3: Replace it
    this.#items[index] = "I Love JS";
  }

  // #items now: ["I Love Bangladesh", "I Love JS"]
}
```

#### Without Abstraction

```javascript
// User would need to write:
const modifyIndex = items.indexOf("I Love Javascript");
if (modifyIndex !== -1) {
  items[modifyIndex] = "I Love JS";
}

// With abstraction:
array.modifyItem("I Love Javascript", "I Love JS");
```

**Cleaner, safer, easier to read!**

---

## Real-World Use Cases

### Use Case 1: User Authentication

```javascript
class AuthService {
  #users;
  #tokens;

  constructor() {
    this.#users = new Map();
    this.#tokens = new Map();
  }

  // Simple interface hiding complex logic
  async register(email, password) {
    // Hidden complexity:
    // - Validate email format
    // - Check if user exists
    // - Hash password
    // - Save to database
    // - Send welcome email
    this.#validateEmail(email);
    this.#checkUserExists(email);
    const hashedPassword = this.#hashPassword(password);
    await this.#saveUser(email, hashedPassword);
    await this.#sendWelcomeEmail(email);
    return { success: true };
  }

  async login(email, password) {
    // Hidden complexity:
    // - Verify user exists
    // - Compare passwords
    // - Generate token
    // - Save session
    const user = await this.#findUser(email);
    this.#verifyPassword(user, password);
    const token = this.#generateToken(user);
    this.#saveSession(token, user);
    return { token };
  }

  async logout(token) {
    this.#tokens.delete(token);
  }

  // All private methods hidden
  #validateEmail(email) {
    /* ... */
  }
  #checkUserExists(email) {
    /* ... */
  }
  #hashPassword(password) {
    /* ... */
  }
  #saveUser(email, password) {
    /* ... */
  }
  #sendWelcomeEmail(email) {
    /* ... */
  }
  #findUser(email) {
    /* ... */
  }
  #verifyPassword(user, password) {
    /* ... */
  }
  #generateToken(user) {
    /* ... */
  }
  #saveSession(token, user) {
    /* ... */
  }
}

// User experience: Super simple!
const auth = new AuthService();
await auth.register("user@example.com", "password123");
const { token } = await auth.login("user@example.com", "password123");
await auth.logout(token);
```

---

### Use Case 2: Payment Processing

```javascript
class PaymentProcessor {
  #paypalAPI;
  #stripeAPI;
  #validator;
  #logger;

  constructor() {
    this.#paypalAPI = new PayPalAPI();
    this.#stripeAPI = new StripeAPI();
    this.#validator = new PaymentValidator();
    this.#logger = new Logger();
  }

  // Simple interface for complex payment process
  async processPayment(amount, method, cardInfo) {
    try {
      // Hidden complexity:
      // - Validate card
      // - Check fraud
      // - Select payment gateway
      // - Process payment
      // - Handle errors
      // - Send receipt
      // - Log transaction

      this.#validator.validateCard(cardInfo);
      this.#checkFraud(amount, cardInfo);

      let result;
      if (method === "paypal") {
        result = await this.#paypalAPI.charge(amount, cardInfo);
      } else {
        result = await this.#stripeAPI.charge(amount, cardInfo);
      }

      await this.#sendReceipt(result);
      this.#logger.log(`Payment processed: ${amount}`);

      return { success: true, transactionId: result.id };
    } catch (error) {
      this.#logger.error(error);
      return { success: false, error: error.message };
    }
  }

  #checkFraud(amount, cardInfo) {
    /* ... */
  }
  #sendReceipt(result) {
    /* ... */
  }
}

// User experience: One simple method!
const processor = new PaymentProcessor();
const result = await processor.processPayment(100, "stripe", cardInfo);
```

---

### Use Case 3: File Upload Manager

```javascript
class FileUploader {
  #maxSize = 5 * 1024 * 1024; // 5MB
  #allowedTypes = ["jpg", "png", "pdf"];

  // Simple interface hiding complex upload logic
  async upload(file) {
    // Hidden complexity:
    // - Validate file
    // - Check size
    // - Check type
    // - Generate unique name
    // - Compress if needed
    // - Upload to cloud
    // - Generate thumbnail
    // - Save metadata
    // - Return URL

    this.#validateFile(file);
    this.#checkSize(file);
    this.#checkType(file);

    const uniqueName = this.#generateUniqueName(file.name);
    const compressed = await this.#compressIfNeeded(file);
    const url = await this.#uploadToCloud(compressed, uniqueName);

    if (this.#isImage(file)) {
      await this.#generateThumbnail(url);
    }

    await this.#saveMetadata(file, url);

    return { success: true, url };
  }

  #validateFile(file) {
    if (!file) throw new Error("No file provided");
  }

  #checkSize(file) {
    if (file.size > this.#maxSize) {
      throw new Error("File too large");
    }
  }

  #checkType(file) {
    const ext = file.name.split(".").pop();
    if (!this.#allowedTypes.includes(ext)) {
      throw new Error("Invalid file type");
    }
  }

  #generateUniqueName(filename) {
    /* ... */
  }
  #compressIfNeeded(file) {
    /* ... */
  }
  #uploadToCloud(file, name) {
    /* ... */
  }
  #isImage(file) {
    /* ... */
  }
  #generateThumbnail(url) {
    /* ... */
  }
  #saveMetadata(file, url) {
    /* ... */
  }
}

// User experience: Just call upload!
const uploader = new FileUploader();
const result = await uploader.upload(file);
console.log(result.url);
```

---

### Use Case 4: Database Query Builder

```javascript
class QueryBuilder {
  #table;
  #conditions = [];
  #orderBy = [];
  #limit;

  // Fluent interface - abstraction through chaining
  table(tableName) {
    this.#table = tableName;
    return this;
  }

  where(column, operator, value) {
    this.#conditions.push({ column, operator, value });
    return this;
  }

  orderBy(column, direction = "ASC") {
    this.#orderBy.push({ column, direction });
    return this;
  }

  limit(count) {
    this.#limit = count;
    return this;
  }

  async get() {
    const sql = this.#buildSQL();
    return await this.#execute(sql);
  }

  // Hidden complexity
  #buildSQL() {
    let sql = `SELECT * FROM ${this.#table}`;

    if (this.#conditions.length > 0) {
      sql +=
        " WHERE " +
        this.#conditions
          .map((c) => `${c.column} ${c.operator} '${c.value}'`)
          .join(" AND ");
    }

    if (this.#orderBy.length > 0) {
      sql +=
        " ORDER BY " +
        this.#orderBy.map((o) => `${o.column} ${o.direction}`).join(", ");
    }

    if (this.#limit) {
      sql += ` LIMIT ${this.#limit}`;
    }

    return sql;
  }

  async #execute(sql) {
    /* ... */
  }
}

// User writes readable queries without SQL
const db = new QueryBuilder();
const users = await db
  .table("users")
  .where("age", ">", 18)
  .where("status", "=", "active")
  .orderBy("name", "ASC")
  .limit(10)
  .get();

// vs writing raw SQL:
// SELECT * FROM users WHERE age > 18 AND status = 'active' ORDER BY name ASC LIMIT 10
```

---

### Use Case 5: Shopping Cart

```javascript
class ShoppingCart {
  #items = [];
  #discount = 0;
  #taxRate = 0.1;

  // Simple interface for complex cart operations
  add(product, quantity = 1) {
    const existing = this.#findItem(product.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      this.#items.push({ ...product, quantity });
    }
  }

  remove(productId) {
    this.#items = this.#items.filter((item) => item.id !== productId);
  }

  updateQuantity(productId, quantity) {
    const item = this.#findItem(productId);
    if (item) {
      item.quantity = quantity;
    }
  }

  applyDiscount(percentage) {
    this.#discount = percentage;
  }

  getTotal() {
    const subtotal = this.#calculateSubtotal();
    const discount = subtotal * (this.#discount / 100);
    const tax = (subtotal - discount) * this.#taxRate;
    return subtotal - discount + tax;
  }

  getItemCount() {
    return this.#items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getSummary() {
    const subtotal = this.#calculateSubtotal();
    const discount = subtotal * (this.#discount / 100);
    const tax = (subtotal - discount) * this.#taxRate;
    const total = subtotal - discount + tax;

    return {
      subtotal: subtotal.toFixed(2),
      discount: discount.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
      itemCount: this.getItemCount(),
    };
  }

  // Hidden complexity
  #findItem(productId) {
    return this.#items.find((item) => item.id === productId);
  }

  #calculateSubtotal() {
    return this.#items.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }
}

// User experience: Simple cart operations
const cart = new ShoppingCart();
cart.add({ id: 1, name: "Laptop", price: 1000 });
cart.add({ id: 2, name: "Mouse", price: 25 }, 2);
cart.applyDiscount(10); // 10% off

console.log(cart.getSummary());
// {
//   subtotal: "1050.00",
//   discount: "105.00",
//   tax: "94.50",
//   total: "1039.50",
//   itemCount: 3
// }
```

---

## Creating Abstract Classes

JavaScript doesn't have true abstract classes, but we can simulate them:

### Method 1: Throw Error in Base Class

```javascript
class Animal {
  constructor(name) {
    // Prevent direct instantiation
    if (this.constructor === Animal) {
      throw new Error("Cannot instantiate abstract class Animal");
    }
    this.name = name;
  }

  // Abstract method - must be implemented by child
  makeSound() {
    throw new Error("Method 'makeSound()' must be implemented");
  }

  // Concrete method - can use as-is
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

class Dog extends Animal {
  // Must implement abstract method
  makeSound() {
    console.log(`${this.name} barks: Woof!`);
  }
}

class Cat extends Animal {
  makeSound() {
    console.log(`${this.name} meows: Meow!`);
  }
}

// ❌ Error: Cannot instantiate abstract class
// const animal = new Animal("Generic");

// ✅ Can create concrete classes
const dog = new Dog("Buddy");
dog.makeSound(); // "Buddy barks: Woof!"
dog.sleep(); // "Buddy is sleeping"

const cat = new Cat("Whiskers");
cat.makeSound(); // "Whiskers meows: Meow!"
```

### Method 2: Using new.target

```javascript
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class Shape");
    }
  }

  // Abstract methods
  getArea() {
    throw new Error("Must implement getArea()");
  }

  getPerimeter() {
    throw new Error("Must implement getPerimeter()");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// Usage
const rect = new Rectangle(10, 5);
console.log(rect.getArea()); // 50
console.log(rect.getPerimeter()); // 30

const circle = new Circle(7);
console.log(circle.getArea().toFixed(2)); // 153.94
```

---

## Best Practices

### 1. Keep Interface Simple

```javascript
// ❌ Bad - Too many methods
class BadAPI {
  get() {}
  post() {}
  put() {}
  patch() {}
  delete() {}
  head() {}
  options() {}
  // ... 20 more methods
}

// ✅ Good - Simple, focused interface
class GoodAPI {
  fetch(endpoint) {}
  save(endpoint, data) {}
  remove(endpoint) {}
}
```

### 2. Use Descriptive Names

```javascript
// ❌ Bad - Unclear
class Bad {
  do(x) {}
  process() {}
  handle(data) {}
}

// ✅ Good - Clear purpose
class Good {
  addItem(item) {}
  removeItem(item) {}
  calculateTotal() {}
}
```

### 3. Hide Implementation Details

```javascript
// ❌ Bad - Exposing internals
class BadDatabase {
  connection = null;
  query = "";

  executeSQL(sql) {
    return this.connection.query(sql);
  }
}

// ✅ Good - Hiding internals
class GoodDatabase {
  #connection;

  async getUser(id) {
    // SQL hidden inside
  }

  async saveUser(user) {
    // Implementation hidden
  }
}
```

### 4. Return Copies, Not References

```javascript
// ❌ Bad - Returning reference
class BadArray {
  #items = [];

  getItems() {
    return this.#items; // Can be modified!
  }
}

const bad = new BadArray();
const items = bad.getItems();
items.push("hacked"); // Modifies internal array!

// ✅ Good - Returning copy
class GoodArray {
  #items = [];

  getItems() {
    return [...this.#items]; // Safe copy
  }
}

const good = new GoodArray();
const items2 = good.getItems();
items2.push("safe"); // Doesn't affect internal array
```

### 5. Validate Input

```javascript
class SafeArray {
  #items = [];

  add(item) {
    // Validate before adding
    if (item === null || item === undefined) {
      throw new Error("Cannot add null or undefined");
    }

    if (typeof item !== "string" && typeof item !== "number") {
      throw new Error("Only strings and numbers allowed");
    }

    this.#items.push(item);
  }
}
```

### 6. Handle Errors Gracefully

```javascript
class UserService {
  async getUser(id) {
    try {
      const user = await this.#database.find(id);

      if (!user) {
        return { success: false, error: "User not found" };
      }

      return { success: true, data: user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
```

---

## Benefits of Abstraction

### 1. Simplicity

```javascript
// Without: Complex
const index = items.indexOf("apple");
if (index !== -1) {
  items.splice(index, 1);
}

// With: Simple
array.remove("apple");
```

### 2. Maintainability

```javascript
// Can change implementation without breaking user code
class DataStore {
  #storage; // Changed from array to Map

  save(key, value) {
    // Implementation changed, interface stays same
    this.#storage.set(key, value);
  }
}

// User code unchanged
store.save("key", "value");
```

### 3. Reusability

```javascript
// Same interface, different implementations
class LocalStorage {
  save(data) {
    /* Save to localStorage */
  }
}

class CloudStorage {
  save(data) {
    /* Save to cloud */
  }
}

// Use either implementation
function saveData(storage, data) {
  storage.save(data); // Works with both!
}
```

### 4. Testability

```javascript
// Easy to mock for testing
class MockDatabase {
  async getUser(id) {
    return { id, name: "Test User" };
  }
}

// Test with mock
const db = new MockDatabase();
const user = await db.getUser(1);
```

### 5. Flexibility

```javascript
// Can swap implementations
class PaymentService {
  #processor;

  useProcessor(processor) {
    this.#processor = processor;
  }

  pay(amount) {
    return this.#processor.process(amount);
  }
}

// Swap between different processors
service.useProcessor(new Stripe
```
