// Comparar listas
// .every() -> nos dice si todos los componentes de la lista cumplen cierta condicion

const array = [3, 6, 2, -77, 2, -3, 93, -19]

const resultado = array.every(valor => {
    if (valor > 0) {
        return true
    }else{
        return false
    }
})
console.log(resultado);// retorna false

//Tambien se puede hacer mas corto
const resultado2 = array.every (valor => valor > 0)
console.log(resultado2);



//Comparacion de listas
const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

console.log(ar1 === ar2); //esto da falso porque no se pueden comparar listas, pero lo podemos hacer de otra forma

const compararArrays = (array1, arrray2) => {
    if (array1.length !== arrray2.length) return false;
    const res = array1.every((valor, i) => valor === arrray2[i])//comparamos el primer valor del primer array con el primero del segundo array
    return res
}
console.log(compararArrays(ar1, ar2)); //devuelve true