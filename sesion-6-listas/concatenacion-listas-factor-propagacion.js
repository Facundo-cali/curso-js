// Como unir 2 listas .concat(lista2)

const lista1 = ["Hola", 2, false, null];
const lista2 = ["adios", 8, true, undefined]

console.log(lista1.concat(lista2)); //devuelve las 2 listas en 1

const lista3 = lista1.concat(lista2); //esta lista ya contiene las 2 listas en 1


// Como unir 2 listas con el factor de propagación

console.log(...lista3);

const lista4 = [...lista1, ...lista2];
console.log(lista4);//esto devuelve lo mismo que con .concat

//ERROR!!! MAL ENTENDIDO EL FACOTR DE PROPAGACION

const lista5 = [lista1, lista2];
console.log(lista5); //esto esta mal, devuelve una lista con 2 listas distintas adentro 
