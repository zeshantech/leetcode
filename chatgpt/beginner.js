// Input: "hello" → Output: "olleh"
// const str = "hello"
// let reverseStr = ""
// for (let i = str.length-1; i >= 0; i--) {
//     reverseStr += str[i];
// }
// console.log(reverseStr);

// Determine if a string is a palindrome (reads the same backward).
// const str = 'racecar'
// let reverseStr = ''
// for (let i = str.length-1; i >=0; i--) {
//     reverseStr += str[i]
// }
// console.log(str===reverseStr);

// console.log(
//   [1, [2, [3, 4]], 5].reduce((acc, val) => {
//     if (Array.isArray(val)) {
//       return acc.concat(val.flat(Infinity));
//     }
//     acc.push(val);
//     return acc;
//   }, [])
// );

// console.log(
//   "hello world"
//     .split(" ")
//     .reduce((acc, val) => {
//       acc.push(val.charAt(0).toUpperCase() + val.substring(1, val.length));
//       return acc;
//     }, [])
//     .join(" ")
// );

const debounce = (fn, ms) => {
  setTimeout(() => {
    fn();
  }, ms);
};

// Example usage of debounce with a complex scenario
let counter = 0;
const handleMouseMove = () => {
    console.log(`Mouse moved ${++counter} times`);
};

const debouncedMouseMove = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    };
};

const efficientHandler = debouncedMouseMove(handleMouseMove, 1000);

// Simulate rapid mouse movements
const interval = setInterval(() => {
    efficientHandler();
    if (counter >= 5) clearInterval(interval);
}, 100);
