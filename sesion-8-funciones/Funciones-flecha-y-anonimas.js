//Funciones tipo flecha y anonimas
const array = [ 1, 5, 6, 7, 2, 12, 8]

const array2 = array.map((valor) => valor * 2)
console.log(array2)

//--------------------------------------------
const dobleDelValor = valor => valor * 2

console.log(dobleDelValor(3)); //devuelve 6 
console.log(doble(3));//devuelve 6 y puede usarse la funcion antes de definirla

function doble(valor) {
    return valor * 2
}

//----------------------------------------------
const array3 = array.map(dobleDelValor)
console.log(array3);// devuelve lo mismo que array 2, osea el primer array con sus valores duplicados