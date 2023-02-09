// FILTER()

// Higher order function: it expects as an argument some function
// ex:  function foo(foo2){
//    foo2(element_of_the_array) // second function receives an element of the array AND!! based on that element, it will return true or false
//                                  True: if want to keep the element
//                                  False: if dont want to keep the element
// }

let arr = [5, 4, 9, 2, 1];

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
const filterArr = arr.filter(isEven);
console.log("🚀  filterArr", filterArr);

// Lets do the same with ES6

const arr2 = arr.filter((x) => x % 2 == 0);
console.log("🚀  ~ arr2", arr2);

console.log("original array its not mutated: ", arr);
