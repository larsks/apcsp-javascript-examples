require("../codehs/");

function doubleList(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    newArr.push(arr[i]);
  }

  return newArr;
}

function onlyEvens(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

function reverseList(arr) {
  const newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
}

module.exports = {
  doubleList: doubleList,
  onlyEvens: onlyEvens,
  reverseList: reverseList,
};
