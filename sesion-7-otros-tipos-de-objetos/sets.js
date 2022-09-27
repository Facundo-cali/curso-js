const array = [1, 2, 3, 4, 5, 1, 2]

const miSet = new Set(array) //set es un conjunto no ordenado de valores unicos (no se repiten los valores)

console.log(array); //devuelve el array
console.log(miSet); // devuelve el array sin repeticion de elementos,los sets nos ayudan a no repetir datos


// .add()

miSet.add(9)
console.log(miSet); //añade valores al set (a menos q ya este repetido, en ese caso no lo agrega)

// .delete()

miSet.delete(2)
console.log(miSet); // borra el elemento

// .clear()
// miSet.clear()
// console.log(miSet); //devuelve el set vacio

// .has()
console.log(miSet.has(4)); //pregunta si el valor existe en el set (seria como el include en los array)

// .size 
console.log(miSet.size); //devuelve la cantidad de valores que tiene el set

miSet.forEach(valor => {console.log(valor)}) //recorremos el set

const it_miSet = miSet.values()
console.log(it_miSet); //devuelve un objeto iterator

const ar_miSet = [ ...miSet]
console.log(ar_miSet); //lo vuelve un array
