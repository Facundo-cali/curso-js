// Como obtener un fragmento de una lista con .slice()
const array = ["hola", 1, 2, 3, true, null, "adios"]

//NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
console.log(array.slice(2, 4)); //devuelve la lista a partir del indice 2 hasta el indice 4 (devuelve [2,3])
const array2 = array.slice(2, 4);
console.log(array2);

