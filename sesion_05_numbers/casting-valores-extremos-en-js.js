// Operador .valueOf() - Obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3); //se comporta como un 3

console.log(a);
console.log(b);
console.log(a + b);

console.log(b.valueOf());

let str = new String("Hola soy un string")
console.log(str);
console.log(str.valueOf());
// NaN (Not a Number) - Infinity (Nos indica que lo que le pasamos no es un numero)
let n = Number('adios');
console.log(n);//devuelve NaN
console.log(isNaN(n));//devuelve true

let numerador = 19;
let divisor = 0;
let divisor_2 = null;
console.log(numerador / divisor);//devuelve Infinity cuando deividimos por un valor 0
console.log(numerador / divisor_2);//tambien devuelve cuando dividimos por un null

// Como convertir los string a valores numericos con Number, parseInt y parseFloat
let numero = '5.89';//es un string
let num2 = 17.2//es num

console.log(numero + num2); //da error de concepto
console.log(Number(numero) + num2);//esto si funciona, el metodo Number convierte lo que le pasamos en num

console.log(parseInt(numero)); //devuelve 5 porque le estoy diciendo que lo que le pasamos lo convierta en numero entero

console.log(parseFloat(numero));//esto si lo agarra bien porque lo transforma en un float


// Numeros hexadecimales (base 16) es conveniente usarlos por temas de almacenamiento, pero primero devemos traducirlo a lenguaje js
let numHex = '0x3a5b7';
console.log(parseInt(numHex));//asi lo tranformamos a decimal

// Obtener los valores maximos y minimos de javascript
let min_precision = Number.EPSILON; //es la minima diferencia que puede haber entre un numero y el siguiente
let min_valor_JS = Number.MIN_VALUE;//numero minimo con el que podemos trabajar
let max_valor_JS = Number.MAX_VALUE;//numero maximo con el que podemos trabajar sin que sea infinito

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
