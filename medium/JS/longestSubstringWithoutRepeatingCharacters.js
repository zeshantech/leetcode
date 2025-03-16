var lengthOfLongestSubstring = function (inputStr) {
  const arr = new Set();
  let left = 0,
    maxLen = 0;

  for (let right = 0; right < inputStr.length; right++) {
    while (arr.has(inputStr[right])) {
      arr.delete(inputStr[left]);
      left++;
    }

    arr.add(inputStr[right]);
    if (maxLen < right - left + 1) {
      maxLen = right - left + 1;
    }
  }

  return maxLen;
};
