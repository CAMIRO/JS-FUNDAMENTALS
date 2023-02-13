// 1. Lexical Binding (Arrow Functions)
// 2. New Binding (Instanciar Objectos) // new
// 3. Explicit Binding (Invocación Indirecta) // call(), apply(), bind()
// 4. Implicit Binding (Invocación de Método) // object.method()
// 5. Default Binding (Invocación Directa)

// 2. New Binding (Instanciar Objectos) // new

// a. funcion constructora
function Person(name) {
  this.name = name
}

// b. ES2015 CLASSES
class Person2 {
  constructor(name) {
    this.name = name
  }
}

// INSTANCIANDO CUALQUERA DE LAS 2 ANTERIORES

const mario = new Person('Mario') // estamos produciondo un enlazamiento (BINDING) // { name: 'Mario'}

// 1. Lexical Binding (Arrow Functions)

class Person3 {
  constructor(name) {
    this.name = name
    this.greet = this.greet.bind(this) // SOLUTION!!
  }
  // los metodos de isntancia en classes, no estan fuertemente enlazados a los objectos que creamos
  greet() {
    console.log(`I'm ${this.name}!`)
  }
  // cons arrows no necesitamos enlazarlo al constructor
  sayBye = () => {
    console.log(`Bye! but I'm still ${this.name}!`)
  }
}

const batman = new Person3('Batman')
