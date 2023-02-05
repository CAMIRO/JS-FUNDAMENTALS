// write a function which help to achieve multiply(a)(b) and return product of a and b
// keep watching here(its soooo much stuff): https://www.youtube.com/watch?v=wnYKH2dO620&t=18s

// const multiply = (num1) => (num2) => num1 * num2;
// console.log(multiply(2)(3));

//
const curry = function (fn) {
  var arity = fn.length;
  console.log("arity", arity);
  return function f1(...args) {
    if (args.length >= arity) {
      console.log("enough arguments");
      return fn(...args);
    } else {
      console.log("need more arguments");
      return function f2(...moreArgs) {
        var newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
  };
};
const curriedSum = curry((a, b, c) => a + b + c);
const partiallyCurriedSum = curriedSum(1);
console.log(curriedSum(1));
