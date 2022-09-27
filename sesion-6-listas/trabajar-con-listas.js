//Como trabajar con listas (arrays, arreglos, vectores...)
let var1 = 5; 
let  array = [1, "hola", false, {id: 5}, null, undefined, var1] //le podemos pasar lo que sea

// Acceder a los valores de un array a través de su posición
//array[indice] => 0, 1, 2, 3, 4, ...

console.log(array[0]);

// Método para introducir nuevos valores a nuestros arrays
// .push() .unshift() => Mutan el valor de nuestro array

// .push() => agrega valores al final
array.push("final", 5, 100);
console.log(array); //devuelve el array con los valores nuevos

// .unshift() => agrega valores al principio
array.unshift("inicio", 10, false);
console.log(array); //devuelve el array con los valores nuevos


// Metodos para eliminar valores a nuestro array
// .pop() .shift() => Mutan el valor del array 

const array2 = [1, 3, "hola", false]

// .pop() => elimina valores del final
array2.pop();
console.log(array2); //devuelve el array sin el ultimo valor

// .pop() => elimina valores del final
array2.shift();
console.log(array2); //devuelve el array sin el primer valor

// Metodo para eliminar, modificar, añadir valores en nuestro array
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6]

//Eliminar valores .splice(indice, numValoresAEliminar)
//(x) le decimos a partir de que posicion,(y) la cantidad que queremos eliminar
array3.splice(2, 2)
console.log(array3);//devuelve [1,2,5,6]


//Añadir valores .splice (indice, 0, valores)
array3.splice(2, 0, "hola")
console.log(array3);//devuelve [1,2, "hola", 5, 6]

//Modificar valores .splice(indice, eliminamos 1, valores)
array3.splice(2, 1, 3)
//sustituimos el hola por un 3
console.log(array3);//devuelve [1,2, 3, 5, 6] 
