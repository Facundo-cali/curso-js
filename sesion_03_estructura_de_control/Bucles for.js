// Bucles for

//for (inicializacion ; condicion ; actualizacion)
for (let i = 0; i < 10; i++) {
    //Esto es el bucle
    console.log(i);
}

let lista = [ 1,4,6,8,3,2,7,8]

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 2);
}


//En el caso de listas podemos usar la structura for...of
for (const valor of lista) { 
    console.log(valor);
}

//Tambien podemos musar forEach
lista.forEach(valor => {
    console.log(valor);
});

//Para objetos y acceder a sus propiedades podemos usar for..in
let persona = {
    nombre:"Facu",
    apellido: "Cali",
    edad: 21,
    isDeveloper: false
}


for (const propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}