// Metodos mas utilizados con cadenas de caracteres

// como obtener la longitud de un string
let str = "Hola soy un string"; 
console.log(str.length); //devuelve 18

// como obtener partes de cadenas de caracteres (slice() substring() subtr()-esta deprecated)

let slice_str = str.slice(0,4)
console.log(slice_str); //= Hola

let substring_str = str.substring(0,4)
console.log(substring_str); //= Hola

let substr_str = str.substr(0,10)
console.log(substr_str);

// como reeplazar parte del contenido de una cadena de texto
//( solo actua sobre UNA palabra, la primera que encuentra)
let cadena = "Hola mi nombre es Facu"
console.log(cadena);

console.log(cadena.replace('Facu', 'Miguel')); //( solo actua sobre UNA palabra, la primera que encuentra)

// /g (global) si reemplaza todas las intancias

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

console.log(texto_largo.replace(/los/g, 'cinco'));



