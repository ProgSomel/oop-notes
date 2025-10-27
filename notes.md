# oop-notes
## inheritance
```javascript

class Human {
    constructor(name) {
        this.name = name;
        this.arms = 2;
        this.legs = 2;
    }
}

class Baby extends Human {
    constructor(name) {
        super(name)
        this.cute = true;
    }

    cry() {
        return "Waa waa!"
    }
}

const ba = new Baby("somel")
console.log(ba.cry())
```
```bash
Waa waa!
```

---

```javascript

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.arms = 2;
        this.legs = 2;
    }
}

class Baby extends Human {
    constructor(name) {
        super(name, 0);
        this.cute = true;
    }

    cry() {
        return "Waa waa!"
    }
}

const ba = new Baby("somel")
console.log(ba)
```
```bash
Baby { name: 'somel', age: 0, arms: 2, legs: 2, cute: true }
```

---

```javascript

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.arms = 2;
        this.legs = 2;
    }
}

class Baby extends Human {
    constructor(name, age) {
        super(name, age);
        this.cute = true;
    }

    cry() {
        return "Waa waa!"
    }
}

const ba = new Baby("somel", 34)
console.log(ba)
```
```bash
Baby { name: 'somel', age: 34, arms: 2, legs: 2, cute: true }
```
