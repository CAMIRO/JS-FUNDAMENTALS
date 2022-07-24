const log = (n) => console.log("RES: ", fibonacci(n));
// reference: https://www.youtube.com/watch?v=6ji-oYS6EgM
// Fibonacci: sumas los dos primeros
// 1,1,2,3,5,8,13

// things to keep in mind:
// n = 0 -> 0
// n = 1 -> 1
// n = 2 -> 1 + 0

// Recursive:
// ( Big O -> 2^n)
const fibonacci = (n) => {
  // if condition is mandatory in a recursive function. Otherwise you will be in an infinite loop.
  //// if(n == 0) return 0
  //// if(n == 1) return 1
  // or better way:
  if (n < 2) return n;
  return fibonacci(n - 2) + fibonacci(n - 1);
};

log(0); // 0
log(1); // 1
log(2); // 0 + 1 // 1
log(3); // 1 + 1 // 2
log(4); // 1 + 2 // 3
log(5); // 2 + 3 // 5
//
log(10); // 55
log(15); // 610

// Non-recursive
// (Big O -> n)
