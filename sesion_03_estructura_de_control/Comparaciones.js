//Comparaciones mayor que y menor que

let max = 10;
let min = 5;

if(max > min) {
    console.log("max es mayor que min");
}

if(max >= min) {
    console.log("max es mayor que min");
}
if(min < max) {
    console.log("max es mayor que min");
}

if(min <= max) {
    console.log("max es mayor que min");
}



// Igualdad

if (5 == 5) {
    console.log("5 es igual a 5");
}

if (5 === 5) {
    console.log("5 es muy igual a 5");
}

let a = 5; //es number
let b = "5"; //es string

// == solo compara valor
// === compara el valor y el tipo

if (a == b) {
    console.log("a es igual a b de forma debil");
}

if (a === b) {
    console.log("a es igual a b de forma fuerte");
}


let c = 4;
let d = 10;

if ( c != d ){
    console.log("c es diferente a d de forma debil");
}

if ( c !== d ){
    console.log("c es diferente a d de forma fuerte");
}

