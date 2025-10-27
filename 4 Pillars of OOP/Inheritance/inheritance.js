class LivingBeing {
  constructor(name) {
    this.name = name;
  }

  breathe() {
    console.log(`${this.name} is breathing`);
  }
}

class Animal extends LivingBeing {
  constructor(name, species) {
    super(name);
    this.species = species;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog");
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

const dog = new Dog("Max", "Labrador");

dog.breathe(); // ✅ From LivingBeing (grandparent)
dog.move(); // ✅ From Animal (parent)
dog.bark(); // ✅ From Dog (own method)

console.log(dog.name); // "Max" (from LivingBeing)
console.log(dog.species); // "Dog" (from Animal)
console.log(dog.breed); // "Labrador" (from Dog)
