// https://www.freecodecamp.org/espanol/news/javascript-splice-como-ulitizar-el-metodo-splice-de-arreglo-en-js/

let meses = ["enero", "febrero", "lunes", "martes"];
let dias = meses.splice(2, 2, "marzo", "abril");

console.log(dias); // ["lunes", "martes"]
console.log(meses); // ["enero", "febrero", "marzo", "abril"]
