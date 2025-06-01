class Person {
  #ssn;

  constructor(name, age, ssn) {
    this.name = name;
    this.age = age;
    this.#ssn = ssn;
  }

  getSSN() {
    return this.#ssn;
  }

  setSSN(newSSN) {
    this.#ssn = newSSN;
  }
}

const person = new Person("zeshan", 2, "secretpro");
console.log(person.getSSN());
console.log(person.setSSN("new"));
console.log(person.getSSN());
