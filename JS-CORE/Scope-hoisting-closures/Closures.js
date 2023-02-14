/// 1. CLosures: una función dentro de otra función

function crearContador() {
  let contador = 0 //2. alguna variable que se encuentre en el parent
  return function incrementar() {
    contador = contador + 1 //2. y que el child la utilize de alguna manera
    console.log(contador)
    return contador
  }
}

const contador1 = crearContador() //3. Invocar a la funcion interna, pero no desde el scope donde esta escrita, sino desde otro scope
contador1()
contador1()
contador1()

// [CLOSURE]: funciones anidadas que recuerdan el conjunto de variables a las que podian acceder,
// por mas que se las invoque desde otro lugar, desde otro scope.

// para que sirven los CLosures ?
// 1- proteger el acceso a las variables.
// 2- fábrica de funciones.

// si creamos un nuevo contador. este no altera al anterior, ya que se crea un nuevo [LEXICAL ENVIRONMENT] o entorno Léxico
const contador2 = crearContador()
contador2()
contador2()
contador2()
