// write a function which gets an array and an element and returns an array with this element at the end

// noob way:
const appendPush = (arr, el) => {
  arr.push(el);
  return arr;
};

//Pro way:
const append = (arr, element) => [...arr, element];

console.log(appendPush([1, 2], 3)); //[1, 2, 3]
console.log(append([1, 2], 3)); //[1, 2, 3]
