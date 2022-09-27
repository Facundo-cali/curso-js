
const constante = "Soy constante";
console.log(constante);

//constante = "Adios" - nos da error porque no puede cambiar

var a = 1;
console.log(a);

a = 4;
console.log(a);

let b = 3;
console.log(b);

b = 5;
console.log(b);

var variable = "Hola soy una variable VAR"

for (var i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable"; 
}

console.log(variable);// var afecta a todo el codigo


let varLet = "Hola soy una variable LET";

for (var i = 0; i < 3; i++) {
    let varLet = "Soy la segunda variable";
}

console.log(varLet);//Let solo afecta al bloque de codigo donde esta siendo definida

//////////////////////////////////////////////////////////////////////////////////////////
console.log(typeof varLet)  //el type of nos muetra de que tipo es la variable que le pasamos