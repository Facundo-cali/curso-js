// Trabajando con fechas
const fecha = new Date()

console.log(fecha);

//Atencion!! - Los meses inicializan en 0 -> (0 = enero) (11 =  diciembre)
const fecha2 = new Date(1997, 10, 20, 1, 23, 52, 192);
console.log(fecha2);

const fecha3 = new Date(-1000000000) //Milisegundos
const fecha4 = new Date("October 13, 1979 12:15:15")

//COMPARAR FECHAS
console.log(fecha > fecha2);//devuelve true

const fecha5 = new Date(1997, 10, 20, 1, 23, 52, 192);
console.log(fecha2 === fecha5); //NO SE PUEDEN COMPARAR ASI, PARA COMPRARARLA TENDRIAMOS QUE PASARLA A MILISEGUNDOS

console.log(fecha2.getTime() === fecha5.getTime()); // ESTO DA TRUE , ESTA ES LA FORMA DE COMPARAR

// obtener dia, el mes, y el año de una fecha
// obtener el dia .getDate()
console.log(fecha2.getDate());//devuelve 20

//Obtener el mes .getMonth() 
console.log(fecha2.getMonth() + 1); //devuelve 11 porq le sumamos 1, recordemos que en enrealidad seria el 11 porque enero seria 0

//obtener año .getFullYear()
console.log(fecha2.getFullYear());//devuelve 1997


//.toLocaleDateString --> Hace mas legible la fecha
console.log(fecha2.toLocaleDateString()); //devuelve 20/11/1997 (el orden  se puede cambiar (investigar como, es facil))
