const phoneNumber = {
  1: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
  0: [],
};

function letterCombinations(digits) {
  if (!digits.length) return [];

  const outputArr = [""];

  for (const digit of digits) {
    const chars = phoneNumber[digit];
    const currentLength = outputArr.length;

    for (let i = 0; i < currentLength; i++) {
      const prefix = outputArr.shift();
      for (const item of chars) {
        outputArr.push(prefix + item);
      }
    }
  }

  return outputArr;
}

console.log(letterCombinations("23"));
