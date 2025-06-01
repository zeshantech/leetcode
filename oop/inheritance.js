class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const dog = new Dog();
dog.speak();
