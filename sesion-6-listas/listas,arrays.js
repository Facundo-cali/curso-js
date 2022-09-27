//Listas, array o arreglo o vectores

const lista1 = [1, "string", true, undefined,null];
const lista2 = new Array(1, "string", true, undefined,null);// es lo mismo que arriba
const lista3 = new Array(3);
lista3[0] = 'soy el primer elemento'
lista3[1] = 'soy el seg elemento'
lista3[2] = 'soy el tercer elemento'
const lista4 = [lista1,lista2,lista3] //podemos hacer una lista de listas.

console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["RAUL, POTI, IVAN"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    },
    "altura-tarjeta": 4 //tambien se puede definir asi
}
movil.anyo = 2019;
movil.marca = "Samsung";

console.log(movil.tarjeta.marca)



//Fechas
//Librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10) //se puede definir utilizando los milisegundos
console.log(fecha_milis);


const fecha_cadena = new Date("march 25 2020");//nos devuelve la fecha que introducimos
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 2, 15);//nos devuelve la fecha que introducimos
console.log(fecha_valores);

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anyo = ahora.getFullYear()
console.log(dia, mes, anyo);