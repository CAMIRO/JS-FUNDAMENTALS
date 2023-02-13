// // Binding Types:

// // 1. Lexical Binding (Arrow Functions)
// // 2. New Binding (Instanciar Objectos) // new
// // 3. Explicit Binding (Invocación Indirecta) // call(), apply(), bind()
// // 4. Implicit Binding (Invocación de Método) // object.method()
// // 5. Default Binding (Invocación Directa)

'use strict'

const harry = {
  name: 'Harry',
  greet: function () {
    console.log(`hola soy ${this.name}!`)
  }
}
// harry.greet() // hola soy Harry!

// // asi no funciona:
// const saludar = harry.greet
// saludar() // hola soy undefined!

// //Error 2 muy común
// const boton = document.getElementById('myBoton')
// boton.addEventListener('click', harry.greet) // hola soy undefined!
// // ----------------------------------------------------------------------------------------

function QuienSoy() {
  console.log(`Hola, yo soy:`, this)
}

// funcion suelta
// QuienSoy() // window || si usamos 'use strict': Hola, yo soy: undefined

// Implicit Binding

const mario = {
  name: 'mario',
  sayHi: function () {
    console.log(`it's me, ${this.name}!`)
  },
  brother: {
    name: 'luigi',
    sayHi: function () {
      console.log(`hello, it's ${this.name}!`)
    }
  }
}

// mario.sayHi() // object.method() this es el primer objeto a la izquierda
// mario.brother.sayHi()

//Example 2
const mario2 = {
  name: 'mario',
  power: 'mushroom',
  sayHi: function () {
    function growUp() {
      console.log(`Mario will growUp if eats ${this.power}`)
    }
    console.log(`it's me, ${this.name}!`)
    growUp() // funcion suelta!!
  }
}

//mario2.sayHi()

// FIXED Example 2
const mario3 = {
  name: 'mario',
  power: 'mushroom',
  // si volvemos esta funcion arrow, this sera window, porque los objetos no crean nuevos contextos (estara enlazada entonces, al objecto global window)
  sayHi: function () {
    const growUp = () => console.log(`Mario will growUp if eats ${this.power}`) // este this es el mismo que el this del papa (sayHi)
    console.log(`it's me, ${this.name}!`)
    growUp() // funcion suelta!!
  }
}

// mario3.sayHi()

// FIXED 2 Example 2
const mario4 = {
  name: 'mario',
  power: 'mushroom',
  sayHi: function () {
    console.log(`it's me, ${this.name}!`)
    this.growUp()
  },
  growUp: function () {
    console.log(`Mario will growUp if eats ${this.power}`)
  }
}

mario4.sayHi()
