// return true only if all values are unique, otherwise false

// //1. Array
// const unique = (str) => {
//   values = [];
//   for (letter of str) {
//     if (values.indexOf(letter) !== -1) {
//       return false;
//     }
//     //console.log(values.indexOf(letter));
//     values = [...values, letter];
//   }
//   return true;
// };

// console.log(unique("abcde")); // true
// console.log(unique("abacdefb")); // false

// //2. Object
// const uniqueObj = (str) => {
//   let values = {};
//   for (let letter of str) {
//     console.log(values);
//     if (values[letter]) {
//       return false;
//     }
//     values[letter] = "exists";
//   }
//   return true;
// };

// console.log(uniqueObj("abcde")); // true
// console.log(uniqueObj("abacdefb")); // false

// //3. lastIndexOf()

// const uniqueLastIndex = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     console.log(str.lastIndexOf(str[i]));
//     if (str.lastIndexOf(str[i]) !== i) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(uniqueLastIndex("abcde"));
// console.log(uniqueLastIndex("abacdefb"));

// //4. Set()

// const uniqueSet = (str) => {
//   let tempStr = new Set();

//   for (let letter of str) {
//     if (tempStr.has(letter)) {
//       return false;
//     }
//     tempStr.add(letter);
//   }
//   return true;
// };

// console.log(uniqueSet("abcde"));
// console.log(uniqueSet("abacdefb"));

//5. Better Set()

const uniqueBetterSet = (str) => new Set(str).size === str.length;

console.log(uniqueBetterSet("abcde"));
console.log(uniqueBetterSet("abacdefb"));
