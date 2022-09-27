// Que son las funciones, como se declaran y como se utilizan 
//son bloques de codigo que se declaran con un fin especifico
const nom = "Facu"

saludar(nom)

function saludar(nombre) {
    console.log(`Hola  ${nombre}`);
}


///
let nom2 = "Juan"

despedir(nom2)

function despedir(nombre){
    console.log(`Adios ${nombre}`);
}

///
let persona = { nombre: "Poti", apellido: "Arioli"}

saludarPersona(persona)

function saludarPersona(objeto){
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

///////////////////////////////////////////////////////////////////////////////

function imprimeNumero(numero = 7){ // Parametro por defecto (si no le paso nada muestra el 7)
    console.log(numero);
}

imprimeNumero()

///
function imprimir(...parametros){
    console.log(parametros);
}

imprimir(1,2,4,5, "hola", { id: 9 })

///
function suma(...nums){
    return (nums.reduce((a, b) => a + b)) //debe estar el return si queremos que nos devuelva algo
}

const s = suma(1,3,5,6,34,2)

console.log(s);

///
function multiplicar(a = 0, b = 0){
    
    return a * b
}

console.log(multiplicar(4,9));