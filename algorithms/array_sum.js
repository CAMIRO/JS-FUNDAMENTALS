// sum all the values in the array and compare with latest value

// //My way!
// const arraySum = (arr) => {
//   let result = arr.pop();
//   let sum = 0;
//   arr.forEach((cur) => (sum += cur));
//   if (sum === result) {
//     return true;
//   }
//   return false;
// };

// console.log(arraySum([1, 2, 4, 6, 13]));
// console.log(arraySum([1, 2, 4, 34, 22]));

const arraySum = (arr) => {
  let tempArr = arr.sort((a, b) => a - b);
  let largest = tempArr.pop();
  let number = 0;
  tempArr.forEach((item) => (number += item));

  return largest === number;
};

console.log(arraySum([1, 6, 4, 2, 13]));
console.log(arraySum([1, 2, 4, 34, 22]));
