class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Traveler extends Person {
  constructor(name, age, destination) {
    super(name, age);
    this.destination = destination;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.destination) {
      return `${description} and i go to ${this.destination}`;
    } else {
      return description;
    }
  }
}

const me = new Person("Nico", 43);
// console.log(me.getDescription());

const traveler = new Traveler("Andrew", 26, "Philadelphia");
const meNoTraveler = new Traveler("Nico", 26);
const other = new Traveler(undefined, undefined, "Paris");

console.log(traveler.getDescription());
console.log(meNoTraveler.getDescription());
console.log(other.getDescription());
