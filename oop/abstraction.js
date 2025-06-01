class Machine {
  start() {
    this.#internalStart();
    console.log("Machine started");
  }

  #internalStart() {
    // complex logic
    console.log("complex");
  }
}

const machine = new Machine();
machine.start();
