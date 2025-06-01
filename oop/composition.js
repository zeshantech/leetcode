// Composition Example
// Composition is an alternative to inheritance
// Instead of inheriting from a class, we compose objects with the behaviors we want
// "Favor composition over inheritance" is a common OOP principle

// Behavior factory functions
// These create objects with specific behaviors
const canEat = (state) => ({
  eat: () => console.log(`${state.name} is eating`),
});

const canWalk = (state) => ({
  walk: () => console.log(`${state.name} is walking`),
});

// Factory function that creates a person with composed behaviors
const person = (name) => {
  // Internal state
  const state = { name };

  // Compose behaviors using Object.assign
  // This combines multiple objects into one
  return Object.assign(
    {}, // Start with empty object
    canEat(state), // Add eating behavior
    canWalk(state) // Add walking behavior
  );
};

// Create a person with both behaviors
const bob = person("Bob");

// Use the composed behaviors
bob.eat(); // Bob is eating
bob.walk(); // Bob is walking

// This approach is more flexible than inheritance
// We can easily add or remove behaviors without changing the class hierarchy
