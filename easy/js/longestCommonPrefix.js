function longestCommonPrefix(strs) {
  const firstElement = strs[0];
  if (!firstElement) return "";

  for (let index = firstElement.length; index > 0; index--) {
    const element = firstElement.slice(0, index);
    if (strs.every((str) => str.startsWith(element))) {
      return element;
    }
  }

  return "";
}
    