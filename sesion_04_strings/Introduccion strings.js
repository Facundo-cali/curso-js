//Strings (cadena de caracteres)

let str_sng = 'Hola soy un texto con comillas simples'
let str_dbl = "Hola soy un texto con comillas dobles";//Es lo mismo

console.log(str_sng);
console.log(str_dbl);

let str_comillas = "El otro dia me dijo literalmente \"ve a sacar la basura\"";  //asi podemos usar las comillas, con barra invertida
str_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"' 
str_comillas_dobles = "El otro dia me dijo literalmente 've a sacar la basura'"// asi es mas facil, usar comillas simples para todo y dobles para las internas (o al revez)
console.log(str_comillas);

//----------------------------------------------------------------------------------------------------

// Comillas invertidas (backricks)

let str_backticks = `Hola esto es un string con backticks`
console.log(str_backticks);

let nombre = "Gordka"
let saludo = `Hola, ${nombre} bienvenido` //nos permite introducir variables en el texto

console.log(saludo);


//----------------------------------------------------------------------------------------------------
//Plantillas HTML

let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un parrafo</p>
</html>`//backticks permite saltos de linea por lo cual tambien podemos usarlo para html

console.log(plantilla);

//----------------------------------------------------------------------------------------------------


//Introduccion de variables en html

let libros = ["Empieza por el por qué", "El monje que vendio su ferrari", "El poder del ahora"]





