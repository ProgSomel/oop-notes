# Polymorphism -> Poly means multiple and morphism means structure or shape. So Polymorphism measn multiple structures.

```go
class Player {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getPlayerDetails() {
    return `${this.#name} is ${this.#age} years old`;
  }
}
class Cricketer extends Player {
  #centuries;

  constructor(name, age, centuries) {
    super(name, age);
    this.#centuries = centuries;
  }

  //? Method overriding
  getPlayerDetails() {
    return `${this.#name} er boyos ${this.#age} years old`
  }
}

class Footballer extends Player {
  #goals;

  constructor(name, age, goals) {
    super(name, age);
    this.#goals = goals;
  }
}

const sakib = new Cricketer("Sakib Al Hasan", 36, 20);
console.log(sakib);
```

```bash
Property '#age' and '#name' are not accessible outside class 'Player' because it has a private identifier.
```
to bypass this error -> use getter Method

```javascript
class Player {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }

  getPlayerDetails() {
    return `${this.#name} is ${this.#age} years old`;
  }
}
class Cricketer extends Player {
  #centuries;

  constructor(name, age, centuries) {
    super(name, age);
    this.#centuries = centuries;
  }

  //? Method overriding
  getPlayerDetails() {
    return `${super.getName()} er boyos ${super.getAge()} years old`;
  }
}

class Footballer extends Player {
  #goals;

  constructor(name, age, goals) {
    super(name, age);
    this.#goals = goals;
  }
}

const sakib = new Cricketer("Sakib Al Hasan", 36, 20);
const messi = new Footballer("Messi", 36, 20);
console.log(sakib.getPlayerDetails());
console.log(messi.getPlayerDetails());
```
```bash
Sakib Al Hasan er boyos 36 years old
Messi is 36 years old
```
