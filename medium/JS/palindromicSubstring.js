var longestPalindrome = function (inputStr) {
  if (!inputStr || inputStr.length < 1) return "";

  let start = 0,
    end = 0;

  const expandAroundCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < inputStr.length; i++) {
    const len1 = expandAroundCenter(inputStr, i, i);
    const len2 = expandAroundCenter(inputStr, i, i + 1);
    const maxLen = Math.max(len1, len2);

    if (maxLen > end - start) {
      start = i - Math.floor((maxLen - 1) / 2);
      end = i + Math.floor(maxLen / 2);
    }
  }

  return inputStr.substring(start, end + 1);
};

console.log(longestPalindrome("zezsahasz"));
