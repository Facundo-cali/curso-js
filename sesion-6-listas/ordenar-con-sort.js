// .sort() -> ordena y modifica el array 

const array = [2, 5, 9, 15, 1, 2, 0, 4]

// debe retornar un valor, si pasa un numero negativo significa que A tendra indice menor que B y si es negativo al revez.
//A es el primer numero.B es el segundo
array.sort( (a, b) => {
    if (a < b) {
        return +1
    }else if (a > b) {
        return -1
    }else{
        return 0
    }
})

console.log(array);// se ordena de mayor a menor

//Si quisieramos ordenar solamente numero podemos hacer

const arrayNumerico = [4, 20, 43, 15, 1, 2, 0, 4]

arrayNumerico.sort((a, b) => a - b)
console.log(arrayNumerico); //se ordena de menor a mayor ya que se b es menor que a significa que a tiene que estar antes

// Para arrays de objetos

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Facu", edad: 21 },
    { nombre: "Sofia", edad: 23 },
    { nombre: "Candela", edad: 24 },
    { nombre: "Mariela", edad: 49 }
]

//ordenamos por edad de menor a mayor
// listaObjetos.sort((a, b) => {
//     if (a.edad < b.edad){
//         return -1
//     }else if (a.edad > b.edad){
//         return 1
//     }else {
//         return 0
//     }
// })

console.log(listaObjetos);
//tambien podemos hacer
arrayNumerico.sort((a, b) => a.edad - b.edad)

console.log(listaObjetos);