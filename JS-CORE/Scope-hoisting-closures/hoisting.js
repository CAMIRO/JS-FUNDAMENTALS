// HOISTING (elevación)

// can it be hoisted ?
// 1. var = solo puede ser declarada  👁‍🗨
// 2. function =  SI! se eleva por complero! ✅
// 3. import =  SI! se eleva por complero! ✅
// 5. class = NO ❌
// 6. let || const = SI, peeeero van al TEMPORAL DEAD ZONE  👁‍🗨

// Var
console.log(name) // undefined
var name = 'Mario'
console.log(name) // Mario

// const || let
console.log(name2) // Cannot access 'name2' before initialization (cant be hoisted)
let name2 = 'Luigi'
console.log(name2) // Luigi

// declarative function
greet('Mario') // esto no es undefined simplemente es fn() sentada en window

function greet(name) {
  console.log(`It's a-me ${name}`) // It's a-me Mario
}

/// classes CANT be hoisted

var Person = new Person() // Cannto access 'Person' before initialization
class Person {}
