//Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined]

// Forma antigua y poco eficiente
for (let i = 0; i < array.length; i++) {
   console.log(array[i]); 
}

//Forma ES6 (más eficiente) .forEach() -> ejecuta la función callback una vez por cada elemento del array.Siempre devuelve el valor undefined y no es encadenable.
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19]
arrayNums.forEach(valor => { //cada valor del array seria "valor" y este se le va sumando a suma
    suma += valor; 
    console.log(suma);
})
console.log(suma); //devuelve 205

//Busqueda de un valor dentro de una lista con .find()
//Quiero encontrar el 90

const variable = array.find(valor => {
    if (valor === 90){
        return true;
    }
})
console.log(variable);

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Facu", edad: 21 },
    { nombre: "Sofia", edad: 23 },
    { nombre: "Candela", edad: 24 },
    { nombre: "Mariela", edad: 49 }
]

const { edad } = listaObjetos.find(o => o.nombre === "Mariela") //esta es la forma mas resumida de hacerlo

console.log(edad);