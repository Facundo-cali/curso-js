//Tipos primitivos
//number/////////////////////////////////////////////
4;

// string///////////////////////////////////////////
"Hola mundo";
'Hola mundo';
`Hola mundo`;

// booleanos/////////////////////////////////////////
true;
false;

//nulo y undefined//////////////////////////////////////
null;
undefined;
// null, undefined, false, 0 ====> todas son falsy
console.log(null === undefined); 
//es falso ya que null es un espacio asignado en memoria pero q esta vacio, y undefined todavia no esta definido
//false es un valor booleano y 0 es un valor numerico
if (true) {
    console.log("cumple");
}else{
    console.log("no cumple");
}