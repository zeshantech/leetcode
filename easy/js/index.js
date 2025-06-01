const arr1 = [1, 2, 4];
const arr2 = [1, 3, 4];

const sortedArr = [];
for (const item of [...arr1, ...arr2]) {
  const lastItem = sortedArr[sortedArr.length - 1];
  const itemIndex = sortedArr.indexOf(lastItem);
  const addingIndex = lastItem > item ? itemIndex : itemIndex + 1;
  sortedArr.splice(addingIndex, 0, item);
}
console.log(sortedArr);
