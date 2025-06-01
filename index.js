// 10 Examples to Master Array.reduce() in JavaScript

// Example 1: Sum all numbers in an array

// const numbers = [1, 2, 3, 4, 5];
// const average = numbers.reduce((acc, val) => {
//   return acc + val;
// }, 0) / numbers.length;
// console.log('Average:', average); // Output: 3

// Example 3: Flatten an array of arrays
const nestedArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattened = nestedArrays.reduce((acc, val) => {
  return acc.concat(val);
}, []);
console.log("Flattened array:", flattened); // Output: [1, 2, 3, 4, 5, 6]

// // Example 4: Count occurrences of items
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// const fruitCount = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});
// console.log('Fruit count:', fruitCount); // Output: { apple: 3, banana: 2, orange: 1 }

// // Example 5: Group objects by a property
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "Dave", age: 30 },
];

const groupedByAge = people.reduce((acc, person) => {});

// // Example 6: Remove duplicates from an array
// const duplicates = [1, 2, 2, 3, 4, 4, 5];
// const unique = duplicates.reduce((acc, val) => {
//   if (!acc.includes(val)) {
//     acc.push(val);
//   }
//   return acc;
// }, []);
// console.log('Unique values:', unique); // Output: [1, 2, 3, 4, 5]

// // Example 7: Compose functions (right to left)
// const compose = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);
// const addOne = x => x + 1;
// const double = x => x * 2;
// const square = x => x * x;
// const composed = compose(square, double, addOne);
// console.log('Composed function result:', composed(3)); // (3+1)*2^2 = 8^2 = 64

// // Example 8: Create a pipeline (left to right)
// const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);
// const piped = pipe(addOne, double, square);
// console.log('Piped function result:', piped(3)); // ((3+1)*2)^2 = 8^2 = 64

// // Example 9: Convert an array to an object
// const pairs = [['name', 'Alice'], ['age', 25], ['job', 'Engineer']];
// const person = pairs.reduce((acc, [key, value]) => {
//   acc[key] = value;
//   return acc;
// }, {});
// console.log('Array to object:', person); // Output: { name: 'Alice', age: 25, job: 'Engineer' }

// // Example 10: Run promises in sequence
// const runPromisesInSequence = (promiseFns, initialValue) => {
//   return promiseFns.reduce(
//     (promise, promiseFn) => promise.then(promiseFn),
//     Promise.resolve(initialValue)
//   );
// };

// // Example usage of runPromisesInSequence
// const delay = (ms) => value => new Promise(resolve => setTimeout(() => {
//   console.log(`Delayed ${ms}ms:`, value);
//   resolve(value + 1);
// }, ms));

// const promiseFns = [
//   delay(1000),
//   delay(800),
//   delay(600)
// ];

// // Uncomment to run:
// // runPromisesInSequence(promiseFns, 1)
// //   .then(result => console.log('Final result:', result));
