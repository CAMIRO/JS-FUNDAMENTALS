// // 1. Lexical Binding (Arrow Functions)
// // 2. New Binding (Instanciar Objectos) // new
// // 3. Explicit Binding (Invocación Indirecta) // call(), apply(), bind()
// // 4. Implicit Binding (Invocación de Método) // object.method()
// // 5. Default Binding (Invocación Directa)

const mario = {
  name: 'mario',
  greet: function (yell, withGoodBye) {
    const normalGreet = `It's a-me ${this.name}!`
    const normalGoodBye = 'Wahoo!'

    const greet = yell ? normalGreet.toUpperCase() : normalGreet
    const goodBye = yell ? normalGoodBye.toUpperCase() : normalGoodBye

    console.log(greet)

    if (withGoodBye) {
      console.log(goodBye)
    }
  }
}

const luigi = { name: 'luigi' }
luigi.greet = mario.greet // this will work but its a bad practice!
//luigi.greet()

// queremos llamar a la funcion pero en otro contexto

// TODAS LAS FUNCIONES EN JS SON OBJECTOS Y ESTOS TIENEN PROPIEDADES Y METODOS QUE PODEMOS LLAMAR ENTRE ELLOS: CALL(), APPLY(), BIND()

mario.greet.call(luigi) // It's a-me luigi!
mario.greet.call(luigi, true, true) // IT'S A-ME LUIGI! WAHOO!

mario.greet.apply(luigi, [true, true]) // IT'S A-ME LUIGI! WAHOO!

// //Error 2 muy común
// const boton = document.getElementById('myBoton')
// boton.addEventListener('click', harry.greet.call(harry)) // hola soy harry! PERO LO IMPRIME DE UNA VEZ!

// // FIX Error 2 muy común
// const boton2 = document.getElementById('myBoton')
// boton.addEventListener('click', harry.greet.bind(harry)) // NO EJECUTA EL METODO TODAVIA
