class Parent {
  constructor() {
    console.log("constractor parent");
  }
}

class Child extends Parent {
  constructor() {
    super();
    console.log("constractor child");
  }
  //   greet() {
  //     console.log("Hello from child");
  //   }
}

const child = new Child();
// child.greet();
