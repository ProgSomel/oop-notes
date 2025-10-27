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
