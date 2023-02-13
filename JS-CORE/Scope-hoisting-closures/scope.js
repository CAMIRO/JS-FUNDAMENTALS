// contexto de ejecución || entorno (execution context)

var fruit = 'apple'

function eat() {
  var fruit = 'banana'
  function wash() {
    console.log('washing ' + fruit)
  }
  wash()
  console.log('eating ' + fruit)
}
eat()
