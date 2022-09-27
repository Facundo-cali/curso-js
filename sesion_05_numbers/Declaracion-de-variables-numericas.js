// Numbers

let a = 5;

console.log(a);

let b = 0.1;

console.log(b);

//Precisión

let c = 0.2;

console.log(b + c); //da 0.30000000000004 porque el lenguaje no permite que sea exacto, tambien pasa con las multiplicaciones

console.log(Math.round((0.1 + 0.2) * 100) / 100); //truco para que de exacto, ahora si da 0.3