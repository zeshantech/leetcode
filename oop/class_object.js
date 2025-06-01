// Class & Object Example
// Classes are blueprints for creating objects. They encapsulate data and behavior.
// Objects are instances of classes that contain actual data and can perform actions.

class Animal {
  // Constructor is a special method that runs when creating a new object
  // It initializes the object's properties
  constructor(name) {
    this.name = name; // 'this' refers to the current object instance
  }

  // Method is a function that belongs to the class
  // It defines the behavior of the object
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Creating a new object (instance) of the Animal class
// 'new' keyword creates a new object and calls the constructor
const dog = new Animal("Dog");
dog.speak(); // Dog makes a noise.
