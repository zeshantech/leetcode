class Bird {
  speak() {
    console.log("Bird chirps");
  }
}

class Parrot extends Bird {
  speak() {
    console.log("Parrot talks!");
  }
}

function makeItSpeak(bird) {
  bird.speak();
}

// Demonstrate polymorphism
const bird = new Bird();
const parrot = new Parrot();

makeItSpeak(Bird); // Output: Bird chirps
makeItSpeak(parrot); // Output: Parrot talks!
