//Trabajando con objetos

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzales",
    isDeveloper: true,
    libros_favoritos: ["El metodo", "El codigo de la manifestación"],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj.id);//asi llamamos propiedades
console.log(obj["4-juegos"]);

const prop = "isDeveloper"
console.log(obj[prop]);//devuelve true

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Facu"

console.log(obj2.nombre);
console.log(obj.nombre);//devuelve Facu ya que se cambian los 2 objetos 
//////////////////////////////////
const obj3 = { ...obj}
obj3.nombre = "Lucas"
console.log(obj.nombre);//devuelve Facu
console.log(obj3.nombre); //con el spread aperator si se cambia solo en este objeto y devuelve Lucas
//////////////////////////////////
//Como ordenar listas de objetos en funcion de una propiedad

const listasPeliculas = [ 
    { titulo: "Lo que el viento se llevó", anio: 1943 },
    { titulo: "Titanic", anio: 1997 },
    { titulo: "Moana", anio: 2016 },
    { titulo: "El efecto mariposa", anio: 2004 },
    { titulo: "TED", anio: 2012 }
]
console.log(listasPeliculas)
//(ordenamos con .sort() -> Muta el valor de la lista original)
listasPeliculas.sort((a,b) => a.anio - b.anio)
console.log(listasPeliculas);//devuelve un objeto pero con las peliculas ordenadas por año