class Persona {
    //los metodos privados y protegidos no podemos exceder desde fuera
    //Private -> # (solo se puede acceder desde dentro de la clase)
    #nombre
    #edad
    
    //Protected -> _ (solo se puede acceder desde dentro de la clase y desde clases descendientes)
    _isDeveloper = true

    /*--------------------------------------------------------------  */
    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }
    //la palabra this hace referencia a la clase.
    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }

    obtenNombre(){// Funcion getter --> nos permite acceder (de forma controlada) a algun atributo protegido
        return this.#nombre
    }

    #obtenEdad(){ 
        return this.#edad
    }

    getEdad(){//esta es una funcion getter para poder exceder a los datos privados, (a diferencia de #obtenEdad la funcion no es provada pero los datos si)
        return this.#edad
    }

    setEdad(nuevaedad){
        this.#edad = nuevaedad
    }
}



const persona = new Persona("Gorka",70)
// console.log(persona);
// console.log(persona.nombre);
// persona.saludo()
// console.log(persona.obtenNombre());


//aveces vamos a querer proteger ciertas partes de nuestro objeto
persona.nombre = "Adios" //las propiedades son publicas si permitimos que se puedan cambiar 



//Getter --> Metodos que nos permiten obtener atributos/metodos privados o protegidos
const edad = persona.getEdad()
console.log(edad);


//Setter --> Metodos que nos permiten cambiar el valor de algunos de los atributos privados o protegidos
persona.setEdad(34);
console.log(persona.getEdad());// esto devuelve 34 ya que con el setter pudimos cambiar el dato privado
