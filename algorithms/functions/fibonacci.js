const log = (n) => console.log("RES: ", fibonacci(n));

const log2 = (n) => console.log("RES2: ", fibonacciNoRecursive(n));
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

// log(0); // 0
// log(1); // 1
// log(2); // 0 + 1 // 1
// log(3); // 1 + 1 // 2
// log(4); // 1 + 2 // 3
// log(5); // 2 + 3 // 5
// //
// log(10); // 55
// log(15); // 610

// Non-recursive
// (Big O -> n)

const fibonacciNoRecursive = (n) => {
  const fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    console.log("i: ", i);
    fib[i] = fib[i - 2] + fib[i - 1];
    // 2 = 0 + 1
    // 3 = fib[1] + fib[2]
    // 3 = 1 + 1
    // 4  = fib[2] + fib[3] // 1 + 2
    // 5 = fib[3] + fib[4] // 2 + 3
  }
  return fib[n];
};

fibonacciNoRecursive(4);

// log2(0); // 0
// log2(1); // 1
// log2(2); // 0 + 1 // 1
// log2(3); // 1 + 1 // 2
// log2(4); // 1 + 2 // 3
// log2(5); // 2 + 3 // 5

// log2(10); // 55
// log2(15); // 610
