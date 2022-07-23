// NOTE: in the execution phase, only function expressions creates a new object and puts it into memory.

// statements: doesn't return anything
function greet() {}

// this will result as undefined
a();

// expression: returns a value
let a = () => {};
