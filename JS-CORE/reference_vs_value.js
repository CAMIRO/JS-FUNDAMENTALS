//// checkout here: https://www.udemy.com/course/understand-javascript/learn/lecture/2322828#overview

// BY VALUE (primitives)
let a = 3;
let b;

b = a; //// This will create a copy (SEPARATE LOCATION)

a = 2;

console.log(a);
console.log(b);

console.log(a === b);

// BY REFERENCE ( all objects including functions )

let c = { greet: "hi" };
let d;

d = c; //// This will point to the same location in memory

c.greet = "hola";

console.log(c);
console.log(d);

console.log(c === d);

//// by reference ( even as parameters )

const justAFunction = (obj) => {
  obj.greet = "Bonjour";
};

justAFunction(d);
console.log(c);
console.log(d);

//// WARNING: equals operator sets up new memory space (new address):

c = { greet: "howdy" };

console.log(c);
console.log(d);
