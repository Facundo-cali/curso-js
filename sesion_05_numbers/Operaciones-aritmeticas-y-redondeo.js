// Principales operaciones aritmeticas
let a = 3.5;
let b = 4.8;
//Suma (+)
console.log(a + b);
//Resta (-)
console.log(a - b);
//Multiplicacion (*)
console.log(a * b);
//Division (/)
console.log(a / b);

//Represenacion de los numeros en cadenas de texto
console.log(typeof a); //devuelve number
let a_string = a.toString()
console.log(a_string); 
console.log(typeof a_string)//lo conveirte en string

// Redondeo de números decimales
let c = 3.3;
let d = c * 3;
console.log(d);

// .toFixed(x) - Limita el numero de decimales al valor x 
console.log(d.toFixed(2)); //le digo que quiero 2 nuemros decimales, esto devuelve 9.90, esto lo tranforma en string

// .toPrecision(x) - Limita el numero de cifras significativas (osea la cantidad de cifras que se van a mostrar contando enteros y decimales),tambien lo hace string
console.log(d.toPrecision(7));