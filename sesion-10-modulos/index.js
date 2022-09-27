//Formas de importar/exportar modulos
//1. CommonJS - require
//2. Import ES6 - import
// const moduloMatematicas = require("./modulos/matematicas.js") // asi importamos y podemos usar las funciones definidas aparte
const { factorial, suma } = require("./modulos/matematicas")

const fact = factorial(5)
console.log(fact); /* Si guardamos y en terminal ponemos |cd sesion-10-modulos| y luego |node index.js| nos muestra el resultado del programa en consola*/ 

const sum = suma(5,6)
console.log(sum);


