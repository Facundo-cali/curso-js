// Inheritance - Herencia
class Persona {
    _nombre //_ los hace protected -> asi hacemos que no podamos acceder a las variables por fuera de las clases
    _edad

    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`)
    }
}


class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje){
        super(nombre,edad)
        this.lenguaje = lenguaje
    } 

    saludo() { //Override(volver a definir algo que ya esta definido)
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`);
    }
}

const nuevodev = new Desarrollador("Facu",21,"Javascript")
console.log(nuevodev)
nuevodev.saludo()

//Polimorfismo => Varias formas