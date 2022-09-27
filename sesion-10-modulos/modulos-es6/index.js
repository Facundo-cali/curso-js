import { suma, eleva } from './modulos/matematicas.js' //asi se exporta en es6, acordarse de cambiarlo en el package.json y poner type: "module"
// import * as moduloMatematicas from './modulos/matematicas.js'  <--- asi importariamos TODAS las exportaciones de ese archivo y asi podriamos usarlo : const sum = moduloMatematicas.suma(4, 12)
console.log(sum);


const sum = suma(4, 12)
console.log(sum);

const potencia = eleva(2, 21)
console.log(potencia);

console.log(getAutor());// esta es una funcion que se exporta por default en literatura