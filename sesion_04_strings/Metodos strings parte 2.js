//Metodos de cadenas de texto (parte 2)

let input = "eScorPio"
let db = "escorpio"

//toLowerCase() - toUpperCase()

console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

// como concatenar 2 cadenas de caracteres

let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."
console.log(str_1.concat(" ", str_2));//es mejor practica usar concat
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`)

//Eliminar espacios al inicio y al final
let str_3 = "   hola soy un string con espacios al inicio y al final   "//tengo 3 espacios sobrantes al inicio y 3 al final
console.log(str_3);
console.log(str_3.length);
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// como obtener el caracter que hay en cierta posicion
let str_4 = "Hola soy el string numero 4" // ["H","o", "l", "a",...]

console.log(str_4.charAt(3));

// Obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Facu y me gusta el surf. Facu"

console.log(str_5.indexOf("Facu"));//nos devuelve la primera palabra
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Facu")); //nos devuelve la ultima