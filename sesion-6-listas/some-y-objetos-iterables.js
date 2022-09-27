// .some() --> si algunos elementos cumplen la condicion

const array = [3, 7, 2, 4, 7, 9, 42, 35, 4534, 22, -2]

const res = array.some(valor => valor < 0)

console.log(res);//devuelve true

const existe = array.some( valor => valor === 90)
console.log(existe);//devuelve false

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Facu", edad: 21 },
    { nombre: "Sofia", edad: 23 },
    { nombre: "Candela", edad: 24 },
    { nombre: "Mariela", edad: 49 }
]

const existeFacu = listaObjetos.some(persona => persona.nombre === "Facu")

console.log(existeFacu);//devuelve true


//Como obetener una lista a partir de un objeto iterante (un valor es iterante cuando podemos a travez de los corchetes podemos acceder a ciertas partes de los valores)

const str = "Hola soy Facu"
console.log(str[2]);

const ar_str = Array.from(str)
console.log(ar_str);//devuelve un array donde cada letra es un elemento

const set = new Set([2, 3, "hola", 4])
const ar_set = Array.from(set)
console.log((ar_set));


//Obtener un iterable de todos los indices de nuestro array

const keys = array.keys()
console.log(keys);

const ar_keys = Array.from(keys)
console.log(ar_keys);//devuelve un array con 0,1,2,3,4...hasta 10(la cantidad de indices del array original)