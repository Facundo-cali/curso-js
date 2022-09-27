// Metodos mas avanzados
// .map() .filter() .reduce()

const array = ["Madrid", "Barcelona", "Parana", "Bilbao"]

// -----> .map() -> transforma los elementos de una lista y devuelve una otra lista con los elementos transformados
const newArray = array.map((valor, indice) => {
    return `${indice + 1} - ${ valor }`
})

console.log(newArray);

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Facu", edad: 21 },
    { nombre: "Sofia", edad: 23 },
    { nombre: "Candela", edad: 24 },
    { nombre: "Mariela", edad: 49 }
]

// ----->.filter() -> crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad > 30) {
//         return true
//     } else {
//         return false
//     }
// })
 
const personasMayores = listaObjetos.filter(obj => obj.edad > 30) //devuelve a todas las peronas con edad mayor a 30
console.log(personasMayores); 

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Facu")
console.log(nuevaLista); //devuelve todo menos Facu


// ------> .reduce()
//.reduce(acumulado (valor acumulativo que varia a medida que se ejecuta el bucle) , cur (cada uno de los objetos de la lista de objetos) , i (indice) ,arrayOriginal (es el array original) )

const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur
})
console.log(suma); //devuelve 277 (la suma de acumlulado y cur)